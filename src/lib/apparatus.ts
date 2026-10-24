// Copy and placeholders for The Apparatus landing page. Anything in
// [[double brackets]] is unfilled on purpose and must render as-is until a
// real, permissioned value replaces it. Nothing here is invented.

export const QUALIFY_CTA = "See if you qualify";
export const PROCESS_CTA = "See our process";

// Footer section links.
export const NAV_LINKS = [
  { href: "#process", label: "How it works" },
  { href: "#results", label: "Results" },
  { href: "#reports", label: "Case studies" },
  { href: "#faq", label: "FAQ" },
] as const;

// X and LinkedIn app icons (official colors), in public/brand/platforms/. Set a value
// back to null to fall back to a visible placeholder.
export const PLATFORM_LOGO_SRC: Record<"x" | "linkedin", string | null> = {
  x: "/brand/platforms/x.svg",
  linkedin: "/brand/platforms/linkedin.svg",
};

// Stage colors follow the liquid: raw amber → mid-1 → mid-2 → solution green.
export const STAGE_COLORS = ["var(--raw)", "var(--mid-1)", "var(--mid-2)", "var(--solution)"];

export const HERO = {
  tag: "For venture-backed tech companies",
  // Plain-text version for metadata and the share card; the hero renders
  // the X and LinkedIn app icons in place of the two platform names.
  headline: "YOUR FRACTIONAL CONTENT DEPARTMENT FOR X AND LINKEDIN",
  headlineLead: "YOUR FRACTIONAL CONTENT DEPARTMENT FOR",
  subhead:
    "Strategy, writing, posting, and reporting handled end to end by a team that works inside your company, with your first batch live in 7 days.",
  fragments: [
    "we almost ran out of cash in 2021",
    "why we fired our biggest customer",
    "the pricing mistake every seed company makes",
  ],
  note: "raw founder story, unfiltered",
};

// Accounts we write for, shown by profile picture + account name. Photos
// live in public/logos/ (square, 200px+). avatar: null shows initials
// until the real picture is added.
export const PROOF = {
  label: "Written for",
  accounts: [
    { name: "Alex Hormozi", avatar: "/logos/alex-hormozi.jpg" },
    { name: "Startup Archive", avatar: "/logos/startup-archive.jpg" },
    { name: "Josh Payne", avatar: "/logos/jnpayne.jpg" },
    { name: "Z Fellows", avatar: "/logos/z-fellows.jpg" },
    { name: "Shelby Sapp", avatar: "/logos/shelby-sapp.jpg" },
    { name: "Leila Hormozi", avatar: "/logos/leila-hormozi.jpg" },
    { name: "Noah Kagan", avatar: "/logos/noah-kagan.jpg" },
    { name: "Startup Wisdom", avatar: "/logos/startup-wisdom.jpg" },
    { name: "Jay Yang Inspires", avatar: "/logos/jay-yang.jpg" },
  ] as { name: string; avatar: string | null }[],
};

export const PROCESS = {
  headline: "FOUNDER LED CONTENT. WITHOUT THE FOUNDER BOTTLENECK.",
  intro:
    "Your founder gives us one hour. We turn it into daily posts on X and LinkedIn that bring in customers, hires, partners and investors.",
  stages: [
    {
      label: "Stage 1 · Extract",
      title: "One hour of your founder's time.",
      body: "We start with one 60-minute interview. That's all we need from your founder. Then we go through everything they've already said: sales calls, podcasts, Looms, investor updates, Slack threads. Your first batch of posts is ready 7 days later.",
    },
    {
      label: "Stage 2 · Distill",
      title: "We work out what your founder should be known for.",
      body: "Before anything gets written, we decide who we're talking to and what we want them to believe about your company. Then we pull the stories and opinions from your founder's material that make that case.",
    },
    {
      label: "Stage 3 · Write",
      title: "Posts that sound like your founder wrote them.",
      body: "We have an average 94% approval rate on our batches. Every post comes from your founder's own stories and opinions, written the way they talk. Your founder, or someone on their team, can review posts before they go out.",
    },
    {
      label: "Stage 4 · Publish",
      title: "Every day on X and LinkedIn.",
      body: "We believe in volume AND quality. We'll post between one to five times a day, plus one long-form article a week. Every week we check which posts got the most engagement, write more like those, and cut the rest.",
    },
  ],
  interview: { title: "Founder interview", detail: "60 min · first batch in 7 days" },
  sources: [
    "Voice note, 2:41",
    "Podcast transcript",
    "Board deck",
    "Sales call recording",
    "Slack thread",
    "Investor update",
  ],
  storyBible: [
    { item: "People", question: "Who is your offer for?", distilled: true },
    { item: "Positioning", question: "Why you over others?", distilled: true },
    { item: "Promise", question: "What do they get?", distilled: true },
    { item: "Proof", question: "Why trust you?", distilled: true },
  ],
  approval: { label: "Average batch approval rate", value: "94%" },
  afterByline: "[Founder name] · LinkedIn",
  afterPost:
    "If your champion can't explain you in one sentence, you've already lost the deal. Enterprise sales is won in the meeting you're not invited to.",
};

// Stage 4 visual: a week of scheduled posts.
export const SCHEDULE = {
  note: "a new one lands every day",
  label: "This week",
  more: "+ 4 more scheduled",
  article: "Article · Thu",
  posts: [
    {
      author: "[Founder name]",
      when: "Mon · 8:41am",
      text: "If your champion can't explain you in one sentence, you've already lost the deal.",
    },
    {
      author: "[Founder name]",
      when: "Tue · 9:05am",
      text: "We fired our biggest customer in 2022. Best decision we ever made. Here's why:",
    },
    {
      author: "[Founder name]",
      when: "Wed · 8:52am",
      text: "The pricing mistake every seed-stage company makes (we made it twice):",
    },
  ],
};

// Every tube fills to RESULTS_FILL% of its height. The amber "before" line
// sits at RESULTS_FILL ÷ multiplier (rounded to a whole percent), so the gap
// is honest; tube 1 started at zero. Tubes compare before vs. after against
// themselves only. `multiplier` is the real ratio; `value` is what's shown
// (always rounded down).
export const RESULTS_FILL = 85;

export type ResultTube = {
  value: number;
  format: "count" | "multiplier" | "wholeMultiplier";
  multiplier: number | null; // null = started at 0
  surgeMs?: number; // longer surge for the biggest jumps (default 900)
  label: string;
  source: string;
  platform: "x" | "linkedin";
  beforeLabel: string;
  caseId: string;
};

export const RESULTS = {
  headline: "WHAT COMES OUT THE OTHER END.",
  link: "See how we did it",
  tubes: [
    {
      // 485 → 8,501 reactions = 17.5x; shown as 17X.
      value: 17,
      format: "wholeMultiplier",
      multiplier: 17.5,
      surgeMs: 1100,
      label: "more reactions than his best post before us, in our first week",
      source: "2x founder on LinkedIn",
      platform: "linkedin",
      beforeLabel: "before us",
      caseId: "case-2x-founder",
    },
    {
      value: 2.5,
      format: "multiplier",
      multiplier: 2.5,
      label: "higher median impressions per post",
      source: "9-figure software founder on X",
      platform: "x",
      beforeLabel: "before us",
      caseId: "case-software-founder",
    },
    {
      value: 25735,
      format: "count",
      multiplier: null,
      label: "LinkedIn followers, from 0 in under 6 months",
      source: "8-figure founder on LinkedIn",
      platform: "linkedin",
      beforeLabel: "started at 0",
      caseId: "case-sales-academy",
    },
  ] satisfies ResultTube[],
};

export function formatResult(value: number, format: ResultTube["format"]) {
  if (format === "count") return Math.round(value).toLocaleString("en-US");
  if (format === "wholeMultiplier") return `${Math.floor(value)}X`;
  return `${value.toFixed(1)}X`;
}

export type CaseStudy = {
  id: string;
  client: string;
  channel: "x" | "linkedin";
  headline: string;
  metrics: { value: string; label: string }[];
  href: string; // the client's case study page
};

// Real client messages (names and handles already redacted in the source
// screenshots). alt carries the full text so it isn't only in the image.
export const TESTIMONIALS = [
  {
    src: "/testimonials/insane-bro.jpg",
    width: 1000,
    height: 407,
    alt: "Slack message from a client: It's gonna be insane bro. Twitter angle is goated btw. Been validating a lot of different angles.",
  },
  {
    src: "/testimonials/shaan-puri.jpg",
    width: 1000,
    height: 382,
    alt: "Text message from a client: Shaan Puri just pinged me and said he is loving the [account name redacted] twitter account! Keep up the great work!",
  },
  {
    src: "/testimonials/playbook.jpg",
    width: 1000,
    height: 327,
    alt: "Slack message from a client: Just read your art of the tweet playbook, really good stuff! Goes so much further beyond just twitter, but how to communicate in general.",
  },
  {
    src: "/testimonials/consistent-bangers.jpg",
    width: 1000,
    height: 534,
    alt: "Text message: Do you run [account name redacted] Twitter? All the quotes are consistent bangers haha",
  },
];

export const CASE_STUDIES_SECTION = {
  headline: "See exactly how we got these results.",
  note: "full write-ups inside",
};

// Ordered by closeness to our buyer.
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-2x-founder",
    client: "2x founder",
    channel: "linkedin",
    headline: "How a founder with an $80M exit passed his 3-month LinkedIn goal in month 1.",
    metrics: [
      { value: "19K → 33.5K", label: "followers in about 2 months" },
      { value: "17X", label: "his best post ever, in our first week" },
    ],
    href: "/case-studies/ai-founder",
  },
  {
    id: "case-software-founder",
    client: "9-figure software founder",
    channel: "x",
    headline: "How we got a busy founder 3.4x more posts over 100K impressions, without a single interview.",
    metrics: [
      { value: "2.5X", label: "higher median impressions per post" },
      { value: "3.4X", label: "more posts clearing 100K" },
    ],
    href: "/case-studies/software-founder",
  },
  {
    id: "case-ceo",
    client: "9-figure advisory CEO",
    channel: "x",
    headline: "26 million impressions for a busy CEO, without ever interviewing them.",
    metrics: [
      { value: "26M", label: "impressions" },
      { value: "95%", label: "of approved tweets went live" },
    ],
    href: "/case-studies/advisory-ceo",
  },
  {
    id: "case-sales-academy",
    client: "8-figure founder",
    channel: "linkedin",
    headline: "How the founder of the largest women's sales academy hit 20K LinkedIn followers in under 6 months.",
    metrics: [
      { value: "0 → 25,735", label: "followers" },
    ],
    href: "/case-studies/sales-academy-founder",
  },
];

// Top bar links.
export const HEADER_LINKS = [{ href: "#reports", label: "Case studies" }] as const;

export const FAQ_HEADLINE = "Questions founders ask before applying";

export const FAQ = [
  {
    q: "Is this an agency?",
    a: "No. We partner together as your fractional content department for each platform. That means we handle positioning, strategy, writing, scheduling, posting, and reporting from inside your existing workflows (Slack, Notion, etc.), not as a random external vendor. Instead of hiring multiple people and hoping they work well together, you get one proven team and one simple partnership.",
  },
  {
    q: "How much of our founder's time does this take?",
    a: "Usually one deep interview up front (1 hour), then we run. If you already have source material (recorded calls, meeting transcripts, decks, etc.), we can often work entirely from that and just send batches for approval.",
  },
  {
    q: "How fast do posts go live?",
    a: "Your first batch goes live within 7 days of the kickoff call.",
  },
  {
    q: "Who is this a good fit for?",
    a: "We work best with venture‑backed or multi‑7‑figure companies that already have a proven offer and want their founder’s content to reflect that. You should have at least one active channel, clear expertise, and the willingness to treat content like a real acquisition channel, not a side project.",
  },
  {
    q: "Who is this not for?",
    a: "Early‑stage businesses under $1M a year, solo creators looking for “a few posts a week,” or teams not ready to show up for approvals and quick feedback.",
  },
  {
    q: "Can you write for other executives too?",
    a: "Yes. On our larger tiers we can add more executives to the same system, each with their own voice and channel.",
  },
  {
    q: "Do you do video?",
    a: "No. We're writers, focused on X and LinkedIn.",
  },
];

export const CLOSING = {
  headline: "YOU ALREADY HAVE THE STORY. LET'S CREATE THE DISTRIBUTION.",
};

export const FOOTER = {
  disclaimer:
    "Results vary by client, niche and starting audience. Past results don't guarantee future performance.",
};

export function isBracketed(value: string) {
  return value.includes("[[") && value.includes("]]");
}

export const APPLY = {
  headline: "WANT TO BE THE NEXT CASE STUDY?",
  cta: "Let's chat.",
  body: "Book a call with our team to see how a fractional content department would work for you. We’ll collect a few basics about your company so we can make the most of the time.",
  note: "takes less than a minute",
};

export const DECLINED = {
  headline: "NOT QUITE THE RIGHT FIT YET.",
  body: "Based on your answers, we're probably not the right setup for you right now. In the meantime, here are two great free marketing resources to start with. They cover all the principles we use to write for our clients.",
  resources: [
    { href: "https://jayyanginspires.com/marketing", label: "Take the free marketing course" },
    { href: "https://jayyanginspires.com/workbook", label: "Get the copywriting workbook" },
  ],
};

export const BOOK = {
  headline: "YOU'RE IN. PICK A TIME.",
  lines: [
    "A 30-minute call with our team.",
    "We'll look at your founder's current content and where the gaps are.",
    "No pressure, no 14-call sales process. If it's not a fit, we'll tell you.",
  ],
  confirm: "[[CONFIRM CALL LENGTH AND WHO TAKES IT]]",
  // NEXT_PUBLIC_CALENDLY_URL overrides; the fallback is the existing
  // brand-audit event. [[CALENDLY EVENT URL]] for this offer still to confirm.
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/jay-revenuemedialab/brand-audit?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=1f8f5c",
};

export const THANK_YOU = {
  headline: "YOUR CALL IS CONFIRMED.",
  steps: [
    { title: "Check your inbox.", body: "Your calendar invite is on its way. Accept it so the time is held." },
    {
      title: "See how we scale brands.",
      body: "Before the call, read how we've grown founders' accounts on X and LinkedIn.",
      link: { href: "/#reports", label: "Read the case studies" },
    },
  ],
};
