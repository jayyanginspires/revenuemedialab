// Shared between the application form (client) and /api/lead (server) so
// the server can reject values the form would never send.

type Option = { value: string; label: string };

export const REVENUE_OPTIONS: Option[] = [
  { value: "pre_revenue_vc", label: "Pre-revenue but VC-backed (raised at least a Seed round)" },
  { value: "under_1m", label: "Under $1M/year" },
  { value: "1m_3m", label: "$1M–$3M/year" },
  { value: "3m_10m", label: "$3M–$10M/year" },
  { value: "10m_plus", label: "$10M+/year" },
];

export const CHANNEL_OPTIONS: Option[] = [
  { value: "x", label: "X" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "both", label: "Both" },
];

export const TIMING_OPTIONS: Option[] = [
  { value: "within_7_days", label: "Within 7 days" },
  { value: "within_30_days", label: "Within 30 days" },
  { value: "30_90_days", label: "30–90 days" },
  { value: "90_plus_days", label: "90+ days / just researching" },
];

export const INVESTMENT_OPTIONS: Option[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export const BOTTLENECK_MAX = 1000;

// Unqualified only if they say no to the investment question or report
// under $1M/year. Timeline doesn't disqualify anyone.
export function isQualified(investment: string, revenue: string) {
  return investment === "yes" && revenue !== "under_1m";
}

// Hidden field real visitors never see or fill. Bots that auto-fill every
// input will, and their submission is silently dropped.
export const HONEYPOT_FIELD = "fax";

// Submissions faster than this after the form rendered are treated as bots.
export const MIN_FILL_MS = 3000;
