// Shared between the apply form (client) and /api/lead (server) so the
// server can reject values the form would never send.

export const REVENUE_OPTIONS = [
  { value: "under_10k", label: "Less than $10k/mo" },
  { value: "10k_50k", label: "$10k – $50k/mo" },
  { value: "50k_100k", label: "$50k – $100k/mo" },
  { value: "100k_500k", label: "$100k – $500k/mo" },
  { value: "500k_plus", label: "$500k/mo+" },
];

// Only "$50k/mo" and above qualify — everything under that is disqualifying.
export const REVENUE_NOT_QUALIFYING = new Set(["under_10k", "10k_50k"]);

export const BOTTLENECK_OPTIONS = [
  { value: "not_publishing_enough", label: "We're not publishing enough content consistently." },
  {
    value: "no_strategy",
    label: "Our content is random / reactive – no real strategy, schedule, or tracking.",
  },
  {
    value: "no_reliable_team",
    label: "I don't have a reliable media team (it's just me or flaky freelancers)",
  },
  {
    value: "no_conversion",
    label: "We get views/attention, but it's not turning into qualified leads and sales.",
  },
  { value: "founder_bottleneck", label: "I am the bottleneck – everything depends on me personally." },
];

export const BOTTLENECK_OTHER_VALUE = "other";

// Hidden field real visitors never see or fill. Bots that auto-fill every
// input will, and their submission is silently dropped.
export const HONEYPOT_FIELD = "website";

// Submissions faster than this after the form rendered are treated as bots.
export const MIN_FILL_MS = 3000;
