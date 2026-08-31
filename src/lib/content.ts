// Central copy file for the Revenue Media Lab funnel.
//
// Anything wrapped in [[double brackets]] is an intentional placeholder —
// no statistic, client result, or guarantee has been fabricated. Replace
// the bracketed text with real numbers/approvals before launch. Sections
// built from placeholder data render a small "Placeholder" flag in the UI
// so nobody ships them by accident.

export const SITE = {
  name: "Revenue Media Lab",
  url: "[[PRODUCTION DOMAIN — e.g. https://apply.revenuemedialab.com]]",
  qualifyCta: "See If You Qualify",
};

// Five headline options drafted from the offer/avatar doc, kept for A/B
// testing. HERO.headline below is the one currently live on the page.
export const HEADLINE_OPTIONS = [
  "I Help Founders Scale Organically",
  "You Don't Have a Content Problem. You Have an Attribution Problem.",
  "The Revenue Media Engine: Content-to-Cash Systems for $1–10M Founders",
  "Stop Guessing Which Content Makes You Money",
  "Built for Founders Who Are Done Being the Bottleneck",
] as const;

export const HERO = {
  eyebrowScript: "We help founders",
  headlineTop: "Scale With",
  headlineAccent: "Organic Content",
  headline: "We help founders scale with organic content",
  badge: "Installed inside 8 & 9-figure brands",
  // "Revenue Media Systems" renders bold — see the split in Hero.tsx.
  subheadline:
    "In 16 weeks, we'll design and install the same Revenue Media Systems behind the category-leading brands you follow, tailored to your business so you can dominate your market.",
};

// The 16-week engagement, presented as phases (no pricing shown per offer spec).
export const OFFER_PHASES = [
  {
    number: "01",
    title: "Brand Audit",
    body: "We audit your brand, content, channels, offers, and tracking to see exactly what's driving revenue and where it's leaking.",
  },
  {
    number: "02",
    title: "Infrastructure",
    body: "We design and build your revenue media infrastructure: playbooks, workflows, reporting, and team structure built to hold scale without everything relying on you.",
  },
  {
    number: "03",
    title: "Installation",
    body: "We write or review content, train your team, and give direct access to Jay and specialists across media, copy, and sales.",
  },
  {
    number: "04",
    title: "Scale",
    body: "We track revenue, attribution, and lead flow, then optimize the system every week so growth compounds instead of spiking and crashing.",
  },
];

export const OFFER_SUMMARY = {
  duration: "16 weeks",
  promise:
    "We design and install the same revenue media systems used to scale the biggest brands in the world, into your business, in 16 weeks.",
};

// Real, permissioned client results — mirrored from the case studies live
// on revenuemedialab.com.
export const CASE_STUDIES = [
  {
    slug: "noah-kagan",
    person: "Noah Kagan",
    brand: "Million Dollar Weekend",
    headline: "35,000+ email subscribers in 6 months",
    image: {
      src: "/images/noah-kagan-case-study.jpg",
      alt: "Jay Yang and Noah Kagan holding copies of Million Dollar Weekend at the book launch.",
    },
  },
  {
    slug: "shelby-sapp",
    person: "Shelby Sapp",
    brand: "SheSells Academy",
    headline: "20,000 LinkedIn followers in under 6 months",
    image: {
      src: "/images/shelby-sapp-case-study.png",
      alt: "LinkedIn post announcing Shelby Sapp's follower growth results.",
    },
  },
] as const;

// The three brands featured as logo proof directly under the hero. Each
// renders with its own bespoke mark in <ClientLogos> — see that component
// for why each one looks the way it does (real logo vs. wordmark vs. photo).
export const CLIENT_LOGOS = [
  { person: "Shelby Sapp", brand: "She Sells" },
  { person: "Alex Hormozi", secondPerson: "Leila Hormozi", brand: "Acquisition.com" },
  { person: "Noah Kagan", brand: "AppSumo" },
] as const;

export const WHO_FOR = {
  isFor: [
    "You run a coaching, course, or expert-service business doing at least $100k/month in revenue.",
    "You already have a proven flagship offer and sales process; your main bottleneck is predictable demand and content that reliably turns attention into pipeline.",
    "You're already creating content (YouTube, podcast, short-form, written posts), but have no real media system, playbooks, or operator, so you can't see what it's actually producing in revenue.",
    "You want an in-house media engine, not a dependency on an agency. You're ready to have someone on your team that can own it without everything relying on you.",
    "You already have a team and systems in place, but now want to create a bigger brand moat within your market.",
  ],
  isNotFor: [
    "You're under $100k/month or still trying to validate your main offer or audience.",
    "You want a one-off video, a viral post, or a rebrand, not a repeatable system that ties content to revenue.",
    "You expect a zero-involvement handoff to an outside agency and are not willing to record, review, or meet with us for a few hours each week during the install.",
    "You care only about going viral and chasing followers, not creating content that attracts a qualified audience and drives real revenue.",
  ],
};

export const CLOSING_CTA = {
  headline: "Install your revenue media engine.",
  // "organically" renders in the accent color — see the split in ClosingCta.tsx.
  subheadline: "Dominate organically.",
};

export const FAQ = [
  {
    q: "How much of my time does this take each week?",
    a: "2–3 hours per week. Our team does the heavy lifting on systems, writing, and publishing so that you can focus on recording, strategy, and actually scaling the business (the highest leverage things).",
  },
  {
    q: "Do I need a big audience for this to work?",
    a: "No. We work with founders doing $100k+/mo who already have some content and a proven offer. The goal is to turn your existing and future attention into pipeline you can see.",
  },
  {
    q: "Are you an agency or do you help us build in-house?",
    a: "This is an install. We design the system, help you place or upskill a media operator, and work with them so you're not dependent on us forever.",
  },
  {
    q: "What if I don't have a media or content person on my team yet?",
    a: "That's common. As part of the install, we help you identify the right profile, hire or reassign someone internally, and train them on the playbooks so they can own the system long-term.",
  },
  {
    q: "What exactly do you deliver in the 16 weeks?",
    a: "A full audit, documented playbooks and workflows, installed publishing systems, and a trained operator (or up-skilling someone you already have - your choice) who can run the engine without you needing to manage it day-to-day.",
  },
  {
    q: "What happens after the 16-week install?",
    a: "You keep the system, the assets, and the trained operator. Some clients continue with us for advisory and optimization; others run the engine on their own with periodic check-ins.",
  },
];

export const DISCLAIMER = `Results referenced on this page, where present, are specific to the clients named and are not typical or guaranteed for every business. Past performance does not guarantee future results. Nothing on this page is a promise of income, revenue, or growth. Individual results vary based on market, offer, execution, and factors outside our control. By booking a call, you consent to the call being recorded for quality and training purposes; recordings are not shared outside our team without consent.`;

export const BOOKING = {
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/xavier-revenuemedialab/brand-audit-w-revenue-media-lab?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=1f8f5c",
};

export function isPlaceholder(value: string): boolean {
  return value.includes("[[") && value.includes("]]");
}
