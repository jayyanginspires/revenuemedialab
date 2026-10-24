# Revenue Media Lab — Call-Booking Funnel

Next.js (App Router) + TypeScript + Tailwind CSS. Four-step funnel: landing page → application → decline or booking → thank-you, with UTM/click-ID attribution persisted end to end and leads forwarded to a webhook.

## Getting started

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in the values described below.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `LEAD_WEBHOOK_URL` | Receives the full JSON payload for every application, including `lead_id`, `qualified` and UTM/click IDs (server-side only). Falls back to `ZAPIER_WEBHOOK_URL`. |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID (e.g. `GTM-XXXXXXX`). Omit to disable GTM entirely. |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly event for `/book`. Defaults to the existing brand-audit event. Prefilled with name, email, phone (`a1`), `lead_id` (`salesforce_uuid`) and UTMs. |
| `NEXT_PUBLIC_SITE_URL` | Production URL, used to resolve absolute Open Graph/Twitter image URLs. |

## Routes

- `/` — landing page ("The Apparatus")
- `/apply` — the same application as the homepage's embedded form (`#apply`)
- `/apply/declined` — soft decline
- `/book` — branded page with the inline Calendly scheduler
- `/book/thank-you` — confirmation; fires `generate_lead`
- `/api/lead` — validates the application, generates a `lead_id`, forwards to `LEAD_WEBHOOK_URL`

The application is embedded on the homepage above the FAQ. Qualified applicants (said yes to the investment question and aren't under $1M/year in revenue; `isQualified` in `src/lib/leads.ts`) get the Calendly calendar inline, in the same spot.

The form has 2 steps. Once a visitor enters a valid email, their step-1 details (name, email, phone, website, revenue) are sent to the webhook as `type: "partial_application"`: when they leave a field, click Continue, or close the tab. It's resent only when something changes. The full submit arrives as `type: "application"` with the same `draft_id`, so the Zap can update one record instead of creating several.

GTM dataLayer events: `apply_start`, `apply_submit`, `apply_qualified` / `apply_declined`, `book_view`, `generate_lead`.

## Attribution (UTM + click IDs)

`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid`, `gclid`, and `li_fat_id` are captured by `src/proxy.ts` (Next.js's middleware/proxy convention) off the query string of *any* incoming request and stored in a first-party cookie (`rml_attribution`, 30-day expiry). Because it's a cookie, the values survive navigation across all four pages even when a given page's URL doesn't carry the query string. The application form and API route (`src/app/api/lead/route.ts`) also read/write these values as a query string for defense-in-depth and easier debugging in logs.

## Content and placeholders

Landing and funnel copy lives in `src/lib/apparatus.ts`. Anything wrapped in `[[double brackets]]` is an intentional placeholder and renders visibly on the page; no statistic, client, result or quote has been invented. Search the codebase for `[[` before launch.
