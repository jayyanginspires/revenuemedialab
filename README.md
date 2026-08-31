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
| `ZAPIER_WEBHOOK_URL` | Receives the full JSON payload for every application/waitlist submission (server-side only). |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID (e.g. `GTM-XXXXXXX`). Omit to disable GTM entirely. |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly scheduling page URL for `/book`. Until set, `/book` shows a clearly-labeled placeholder instead of a broken embed. |
| `NEXT_PUBLIC_SITE_URL` | Production URL, used to resolve absolute Open Graph/Twitter image URLs. |

## Routes

- `/` — landing page
- `/apply` — qualification application (tiered multiple-choice)
- `/apply/declined` — soft-decline page with waitlist opt-in, shown when reported revenue is under $1M
- `/book` — Calendly embed, shown when reported revenue is $1M+
- `/book/thank-you` — confirmation page; fires a `generate_lead` dataLayer event
- `/api/lead` — receives application/waitlist submissions and forwards them to `ZAPIER_WEBHOOK_URL`

## Attribution (UTM + click IDs)

`utm_source`, `utm_medium`, `utm_campaign`, `fbclid`, and `gclid` are captured by `src/proxy.ts` (Next.js's middleware/proxy convention) off the query string of *any* incoming request and stored in a first-party cookie (`rml_attribution`, 30-day expiry). Because it's a cookie, the values survive navigation across all four pages even when a given page's URL doesn't carry the query string. The application form and API route (`src/app/api/lead/route.ts`) also read/write these values as a query string for defense-in-depth and easier debugging in logs.

## Content and placeholders

All copy lives in `src/lib/content.ts`. Anything wrapped in `[[double brackets]]` is an intentional placeholder — no statistic, client result, or guarantee has been fabricated. Sections built from placeholder data (stat bar, case studies, and — if enabled — the guarantee) render a small "Placeholder" flag in the UI so they can't ship by accident. Search the codebase for `[[` before launch.

Notable placeholders to resolve before going live:

- `STAT_BAR` — 3–4 real, defensible numbers
- `CASE_STUDIES` — real, permissioned client results
- `GUARANTEE` — set `enabled: true` and fill in exact terms, or leave disabled to omit the section
- `BOOKING` — Calendly URL (via env var), call length, and host name
- `SITE.url` — production domain, once assigned

`HEADLINE_OPTIONS` in the same file has 5 drafted headline variants; the first is used as the default `HERO.headline` and can be swapped or A/B tested.
