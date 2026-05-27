export const SITE = {
  name: "Short Kings Empire",
  tagline: "Dating isn't random. It's a system you can learn.",
  description:
    "Playbooks, fitness programs, and direct coaching for men who refuse to wait their turn.",
  url: "https://shortkingsempire.com",
  social: {
    instagram: "https://instagram.com/shortkingsempire",
    tiktok: "https://tiktok.com/@shortkingsempire",
    youtube: "https://youtube.com/@shortkingsempire",
    x: "https://x.com/shortkingsempire",
  },
  coaching: {
    /** Set NEXT_PUBLIC_CALENDLY_COACHING_URL in Vercel (full event URL, no trailing slash). */
    calendly:
      process.env.NEXT_PUBLIC_CALENDLY_COACHING_URL?.replace(/\/$/, "") ||
      "https://calendly.com/shortkingsempire/30min",
    pricePerSession: 150,
  },
  email: "support@shortkingsempire.com",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "King's Counsel", href: "/#kings-counsel" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Dating", href: "/dating" },
  { label: "Gym", href: "/gym" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Style", href: "/throne-room" },
  { label: "Journal", href: "/journal" },
] as const;

export const PORTAL_NAV = [
  { label: "Dashboard", href: "/portal" },
  { label: "Library", href: "/portal/library" },
  { label: "King's Counsel", href: "/portal/counsel" },
  { label: "Calendar", href: "/portal/calendar" },
  { label: "Account", href: "/portal/account" },
] as const;

export const ADMIN_NAV = [
  { label: "Overview", href: "/admin" },
  { label: "Funnel Playbook", href: "/admin/playbook" },
  { label: "Members", href: "/admin/members" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Content", href: "/admin/content" },
  { label: "Counsel Logs", href: "/admin/counsel" },
  { label: "Leads", href: "/admin/leads" },
  { label: "KPIs", href: "/admin/kpis" },
] as const;

/** Entry offer — all seven ebooks. */
export const SEVEN_PROTOCOLS = {
  id: "seven-protocols",
  title: "The 7 Protocols",
  eyebrow: "7 ebooks",
  description:
    "Approach Like a King, She Replied Now What, First Date Blueprint, Unshakeable, Presence Code, Attraction Conversation, Swipe Right on Yourself.",
  priceEachUsd: 12,
  priceBundleUsd: 65,
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_EBOOK_BUNDLE",
} as const;

export const THE_PLAYBOOK = {
  id: "the-playbook",
  title: "The Playbook",
  eyebrow: "Starter commitment",
  description:
    "The complete self-paced system plus 2 coaching calls. Execute independently — the calls show you what working with Axel feels like.",
  priceUsd: 185,
  originalPriceUsd: 620,
  saveLabel: "Save $435+",
  includes: [
    "All 7 ebooks",
    "2 coaching calls (30 min each)",
    "Dating app audit",
    "Short Kings Style Guide",
    "King's Counsel AI — 1 month free",
    "30-day challenge tracker",
    "Weekly progress form",
  ],
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_BUNDLE",
} as const;

/** @deprecated use THE_PLAYBOOK */
export const BUNDLE = THE_PLAYBOOK;

export const COUNSEL_AI = {
  id: "counsel-ai",
  title: "Kings Counsel AI",
  eyebrow: "Always-on AI",
  description:
    "Trained on the Short Kings system. Ask anything — texts, profiles, dates, mindset reframes. When it gets specific enough it points you to Axel.",
  priceUsd: 15,
  cadence: "/month",
  trialDays: 7,
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_COUNSEL",
} as const;

export const INNER_CIRCLE = {
  id: "inner-circle",
  title: "The Inner Circle",
  eyebrow: "1-on-1 coaching",
  description:
    "No long-term commitment. Cancel anytime. Axel in your corner every month with consistent calls, WhatsApp, and a game plan that evolves as you grow.",
  priceUsd: 150,
  cadence: "/month",
  originalPriceUsd: 580,
  includes: [
    "All 7 ebooks — free on signup",
    "4 coaching calls a month",
    "Unlimited WhatsApp access",
    "Personalized monthly game plan",
    "Dating app audit",
    "Accountability check-ins (MWF)",
    "Kings Counsel AI included",
    "Short Kings Style Guide",
    "30-day challenge tracker",
  ],
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_MONTHLY_COACHING",
} as const;

/** @deprecated use INNER_CIRCLE */
export const COACHING = INNER_CIRCLE;

export const THE_EMPIRE = {
  id: "the-empire",
  title: "The Empire",
  eyebrow: "Done with you",
  description:
    "Same 3 months. Completely different level of access. Axel is in your phone reviewing texts, debriefing every date — your personal dating director.",
  priceUsd: 997,
  cadence: "3 months (~$332/mo)",
  originalPriceUsd: 2400,
  scarcity: "Limited to 5 clients",
  includes: [
    "Everything in The Inner Circle",
    "Built Different gym program",
    "Weekly calls — every week for 3 months",
    "Axel reviews real convos on WhatsApp",
    "Active profile monitoring",
    "Direct number — call or text anytime",
    "Personal weekly check-in from Axel",
    "Conversation starter vault + date ideas",
    "Body language & style breakdown",
    "Relationship roadmap",
  ],
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_TRANSFORMATION_3MO",
} as const;

/** @deprecated use THE_EMPIRE */
export const TRANSFORMATION_3MO = THE_EMPIRE;

export const GYM_NUTRITION_PLAN = {
  id: "built-different",
  title: "Built Different",
  eyebrow: "Gym & nutrition",
  description:
    "Fully structured gym and nutrition on Trainerize. Built for shorter guys — proportions, density, and the exact macros to maximize your physique.",
  priceUsd: 65,
  cadence: "one time",
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_BUILT_DIFFERENT",
} as const;

/** @deprecated use THE_EMPIRE */
export const COACHING_3_MONTH = THE_EMPIRE;
