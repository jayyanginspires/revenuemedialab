import { NextRequest, NextResponse } from "next/server";
import { UTM_COOKIE_NAME, parseUtmFromSearchParams, safeParseUtmCookie } from "@/lib/utm";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const utmFromQuery = parseUtmFromSearchParams(request.nextUrl.searchParams);
  const utmFromCookie = safeParseUtmCookie(request.cookies.get(UTM_COOKIE_NAME)?.value);
  const utm = { ...utmFromCookie, ...utmFromQuery };

  const payload = {
    ...body,
    utm,
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("ZAPIER_WEBHOOK_URL is not set — lead was not forwarded.", payload);
    return NextResponse.json({ ok: true, forwarded: false });
  }

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

  // Always resolve 200 for the client — a webhook outage shouldn't block the
  // visitor from continuing through the funnel to /book or /apply/declined.
  return NextResponse.json({ ok: true, forwarded: true });
}
