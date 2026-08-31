import { NextResponse } from "next/server";

// Workbook lead magnet capture. Deliberately separate from /api/lead so the
// book-a-call funnel and this one can't affect each other: different route,
// different destination, different lead source in beehiiv.

const PUBLICATION_ID = "pub_9293cf79-6fb0-427c-81a5-b7e7f2e2e6a3";
const LEAD_MAGNET_VALUE = "marketing-workbook";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: unknown; firstName?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().slice(0, 200) : "";
  const firstName =
    typeof body.firstName === "string" ? body.firstName.trim().slice(0, 120) : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    console.error("workbook: BEEHIIV_API_KEY is not set");
    return NextResponse.json(
      { error: "The workbook isn't available right now. Try again shortly." },
      { status: 500 },
    );
  }

  const customFields: { name: string; value: string }[] = [
    { name: "Lead Magnet", value: LEAD_MAGNET_VALUE },
  ];
  if (firstName) customFields.push({ name: "First Name", value: firstName });

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: false,
          utm_source: LEAD_MAGNET_VALUE,
          utm_medium: "website",
          utm_campaign: "marketing-mini-course",
          referring_site: "revenuemedialab.com/marketing",
          custom_fields: customFields,
        }),
      },
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("workbook: beehiiv %d %s", res.status, detail);
      return NextResponse.json(
        { error: "Something went wrong on our end. Try again?" },
        { status: 502 },
      );
    }

    // Creating a subscription that already exists does not reliably update its
    // custom fields, and plenty of readers are already on the list. Without
    // this their lead-magnet tag would be dropped. A 404 is harmless.
    await fetch(
      `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions/by_email/${encodeURIComponent(email)}`,
      { method: "PATCH", headers, body: JSON.stringify({ custom_fields: customFields }) },
    ).catch(() => {});

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("workbook: request failed", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Try again?" },
      { status: 502 },
    );
  }
}
