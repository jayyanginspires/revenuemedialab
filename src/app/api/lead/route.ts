import { resolveMx } from "node:dns/promises";
import { NextRequest, NextResponse, after } from "next/server";
import { UTM_COOKIE_NAME, parseUtmFromSearchParams, safeParseUtmCookie } from "@/lib/utm";
import {
  BOTTLENECK_OPTIONS,
  BOTTLENECK_OTHER_VALUE,
  HONEYPOT_FIELD,
  MIN_FILL_MS,
  REVENUE_NOT_QUALIFYING,
  REVENUE_OPTIONS,
} from "@/lib/leads";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const REVENUE_VALUES = new Set(REVENUE_OPTIONS.map((o) => o.value));
const BOTTLENECK_VALUES = new Set([
  ...BOTTLENECK_OPTIONS.map((o) => o.value),
  BOTTLENECK_OTHER_VALUE,
]);

// Throwaway inboxes commonly used to get past forms. Not exhaustive — the MX
// check below catches made-up domains; this catches real-but-disposable ones.
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "sharklasers.com",
  "10minutemail.com",
  "10minutemail.net",
  "tempmail.com",
  "temp-mail.org",
  "temp-mail.io",
  "tempmail.net",
  "throwawaymail.com",
  "yopmail.com",
  "yopmail.net",
  "getnada.com",
  "nada.email",
  "trashmail.com",
  "dispostable.com",
  "maildrop.cc",
  "mailnesia.com",
  "mintemail.com",
  "fakeinbox.com",
  "emailondeck.com",
  "mohmal.com",
  "tempr.email",
  "discard.email",
  "burnermail.io",
  "spamgourmet.com",
  "mailcatch.com",
  "moakt.com",
  "tempinbox.com",
  "fakemail.net",
  "inboxkitten.com",
  "mail.tm",
  "tmpmail.org",
  "tmpmail.net",
]);

type Invalid = { error: string; field: string };

function str(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Does the domain accept mail at all? A made-up or typo'd domain has no MX
// records. Only a definitive "no such domain / no records" answer rejects —
// a DNS timeout or server hiccup lets the lead through rather than losing it.
async function domainAcceptsMail(domain: string): Promise<boolean> {
  try {
    const records = await Promise.race([
      resolveMx(domain),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 2500)),
    ]);
    if (records === null) return true;
    return records.some((r) => r.exchange && r.exchange !== ".");
  } catch (err) {
    const code = (err as NodeJS.ErrnoException).code;
    return !(code === "ENOTFOUND" || code === "ENODATA" || code === "ENOTIMP");
  }
}

async function checkEmail(email: string): Promise<Invalid | null> {
  const bad = { field: "email", error: "Please enter a valid email address." };
  if (!EMAIL_RE.test(email)) return bad;
  const domain = email.split("@")[1].toLowerCase();
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { field: "email", error: "Please use a permanent email address, not a temporary one." };
  }
  if (!(await domainAcceptsMail(domain))) return bad;
  return null;
}

function checkApplication(lead: Record<string, string>): Invalid | null {
  if (lead.fullName.length < 2) return { field: "fullName", error: "Please enter your full name." };
  if (lead.phone.replace(/\D/g, "").length < 7) {
    return { field: "phone", error: "Please enter a valid phone number." };
  }
  if (lead.business.length < 2) {
    return { field: "business", error: "Please tell us about your business." };
  }
  if (!REVENUE_VALUES.has(lead.monthlyRevenue)) {
    return { field: "monthlyRevenue", error: "Please choose your monthly revenue." };
  }
  if (!BOTTLENECK_VALUES.has(lead.bottleneck)) {
    return { field: "bottleneck", error: "Please choose your biggest bottleneck." };
  }
  if (lead.bottleneck === BOTTLENECK_OTHER_VALUE && lead.bottleneckOther.length < 2) {
    return { field: "bottleneck", error: "Please briefly describe your bottleneck." };
  }
  return null;
}

function originHost(origin: string | null): string | null {
  try {
    return origin ? new URL(origin).host : null;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  // Browsers always send Origin on a cross-page POST. Scripts hitting the
  // endpoint directly usually don't — and anything from another site is out.
  if (originHost(request.headers.get("origin")) !== request.nextUrl.host) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Bot tells: the hidden honeypot got filled in, or the form was submitted
  // faster than a person could fill it. Answer as if it worked so the bot
  // has nothing to adapt to, but don't forward it.
  const elapsedMs = typeof body.elapsedMs === "number" ? body.elapsedMs : 0;
  if (str(body[HONEYPOT_FIELD], 500) || elapsedMs < MIN_FILL_MS) {
    console.warn("lead: dropped likely bot submission", { elapsedMs });
    return NextResponse.json({ ok: true });
  }

  const type = body.type === "application" ? "application" : body.type === "waitlist" ? "waitlist" : null;
  if (!type) return NextResponse.json({ error: "Unknown lead type" }, { status: 400 });

  // Only known fields are forwarded — nothing arbitrary from the request body.
  const email = str(body.email, 200).toLowerCase();
  let lead: Record<string, string | boolean>;
  let invalid: Invalid | null;

  if (type === "application") {
    const fields = {
      fullName: str(body.fullName, 120),
      email,
      phone: str(body.phone, 40),
      business: str(body.business, 1000),
      monthlyRevenue: str(body.monthlyRevenue, 40),
      bottleneck: str(body.bottleneck, 40),
      bottleneckOther: str(body.bottleneckOther, 500),
    };
    invalid = checkApplication(fields) ?? (await checkEmail(email));
    lead = { ...fields, qualified: !REVENUE_NOT_QUALIFYING.has(fields.monthlyRevenue) };
  } else {
    invalid = await checkEmail(email);
    lead = { email };
  }

  if (invalid) return NextResponse.json(invalid, { status: 400 });

  const utmFromQuery = parseUtmFromSearchParams(request.nextUrl.searchParams);
  const utmFromCookie = safeParseUtmCookie(request.cookies.get(UTM_COOKIE_NAME)?.value);
  const utm = { ...utmFromCookie, ...utmFromQuery };

  const payload = {
    type,
    ...lead,
    submittedAt: str(body.submittedAt, 40),
    utm,
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("ZAPIER_WEBHOOK_URL is not set — lead was not forwarded.", payload);
    return NextResponse.json({ ok: true, forwarded: false });
  }

  // Respond immediately — the visitor is waiting on this to move to the next
  // step. The actual forward happens after the response is sent; `after`
  // keeps the serverless invocation alive until it settles.
  after(async () => {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!webhookResponse.ok) {
        console.error("Webhook responded with a non-2xx status", webhookResponse.status);
      }
    } catch (err) {
      console.error("Failed to forward lead to webhook", err);
    }
  });

  return NextResponse.json({ ok: true, forwarded: true });
}
