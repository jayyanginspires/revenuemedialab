import { resolveMx } from "node:dns/promises";
import { NextRequest, NextResponse, after } from "next/server";
import { UTM_COOKIE_NAME, parseUtmFromSearchParams, safeParseUtmCookie } from "@/lib/utm";
import {
  BOTTLENECK_MAX,
  CHANNEL_OPTIONS,
  HONEYPOT_FIELD,
  INVESTMENT_OPTIONS,
  MIN_FILL_MS,
  REVENUE_OPTIONS,
  TIMING_OPTIONS,
  isQualified,
} from "@/lib/leads";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const values = (opts: { value: string }[]) => new Set(opts.map((o) => o.value));
const CHOICES = {
  revenue: values(REVENUE_OPTIONS),
  channels: values(CHANNEL_OPTIONS),
  timing: values(TIMING_OPTIONS),
  investment: values(INVESTMENT_OPTIONS),
};
const REVENUE_VALUES = values(REVENUE_OPTIONS);
// Readable answer for the sheet ("$10M+/year" rather than "10m_plus").
const labelOf = (opts: { value: string; label: string }[], value: string) =>
  opts.find((o) => o.value === value)?.label ?? "";
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const WEBSITE_RE = /^(https?:\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)+(\/\S*)?$/i;

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
  const bad = { field: "email", error: "Enter your business email so we can send your calendar invite." };
  if (!EMAIL_RE.test(email)) return bad;
  const domain = email.split("@")[1].toLowerCase();
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { field: "email", error: "Use your work email, not a temporary inbox." };
  }
  if (!(await domainAcceptsMail(domain))) return bad;
  return null;
}

// Messages match the form's own inline errors.
function checkApplication(lead: Record<string, string>): Invalid | null {
  if (lead.fullName.length < 2) {
    return { field: "fullName", error: "Enter your name so we know who we're talking to." };
  }
  if (lead.phone.replace(/\D/g, "").length < 7) {
    return { field: "phone", error: "Enter a phone number so we can reach you before the call." };
  }
  if (!WEBSITE_RE.test(lead.website)) {
    return { field: "website", error: "Enter your company website, like acme.com." };
  }
  if (lead.bottleneck.length < 2) {
    return { field: "bottleneck", error: "Tell us a little about where content gets stuck." };
  }
  for (const [field, allowed] of Object.entries(CHOICES)) {
    if (!allowed.has(lead[field])) return { field, error: "Pick the option that fits best." };
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
    return NextResponse.json({ ok: true, lead_id: crypto.randomUUID(), qualified: false });
  }

  const utmFromQuery = parseUtmFromSearchParams(request.nextUrl.searchParams);
  const utmFromCookie = safeParseUtmCookie(request.cookies.get(UTM_COOKIE_NAME)?.value);
  const utm = { ...utmFromCookie, ...utmFromQuery };
  // Client-generated id that ties a partial lead to the full application.
  const draft = str(body.draft_id, 64);
  const draft_id = UUID_RE.test(draft) ? draft : null;
  const email = str(body.email, 200).toLowerCase();

  let payload: Record<string, unknown>;
  let lead_id: string;
  let qualified: boolean | undefined;

  if (body.stage === "partial") {
    // Contact details saved as soon as the visitor gives a valid email, so
    // someone who drops off before submitting can still be followed up.
    if (!EMAIL_RE.test(email)) return NextResponse.json({ field: "email", error: "Invalid email" }, { status: 400 });
    lead_id = draft_id ?? crypto.randomUUID();
    payload = {
      type: "partial_application",
      lead_id,
      draft_id,
      fullName: str(body.fullName, 120),
      email,
      phone: str(body.phone, 40),
      website: str(body.website, 300),
      revenue: REVENUE_VALUES.has(str(body.revenue, 40)) ? str(body.revenue, 40) : "",
      revenueLabel: labelOf(REVENUE_OPTIONS, str(body.revenue, 40)),
      status: "Partial",
      capturedOn: str(body.capturedOn, 20),
      ...utm,
      receivedAt: new Date().toISOString(),
    };
  } else {
    // Only known fields are forwarded — nothing arbitrary from the request body.
    const fields = {
      fullName: str(body.fullName, 120),
      email,
      phone: str(body.phone, 40),
      website: str(body.website, 300),
      revenue: str(body.revenue, 40),
      channels: str(body.channels, 40),
      bottleneck: str(body.bottleneck, BOTTLENECK_MAX),
      timing: str(body.timing, 40),
      investment: str(body.investment, 40),
    };
    const invalid = checkApplication(fields) ?? (await checkEmail(email));
    if (invalid) return NextResponse.json(invalid, { status: 400 });

    // Same id the form already prefilled the calendar with (it preloads during
    // step 2), and the same one its partial saves used.
    lead_id = draft_id ?? crypto.randomUUID();
    qualified = isQualified(fields.investment, fields.revenue);
    payload = {
      type: "application",
      lead_id,
      draft_id,
      ...fields,
      revenueLabel: labelOf(REVENUE_OPTIONS, fields.revenue),
      channelsLabel: labelOf(CHANNEL_OPTIONS, fields.channels),
      timingLabel: labelOf(TIMING_OPTIONS, fields.timing),
      investmentLabel: labelOf(INVESTMENT_OPTIONS, fields.investment),
      qualified,
      // Matches the sheet's Qualified? dropdown and Status column.
      qualifiedLabel: qualified ? "Qualified" : "Declined",
      status: "Application",
      submittedAt: str(body.submittedAt, 40),
      ...utm,
      receivedAt: new Date().toISOString(),
    };
  }

  // ZAPIER_WEBHOOK_URL is the previous name, still honored so a deploy
  // doesn't silently stop forwarding before the env var is renamed.
  const webhookUrl = process.env.LEAD_WEBHOOK_URL || process.env.ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("LEAD_WEBHOOK_URL is not set — lead was not forwarded.", payload);
    return NextResponse.json({ ok: true, lead_id, qualified, forwarded: false });
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

  return NextResponse.json({ ok: true, lead_id, qualified, forwarded: true });
}
