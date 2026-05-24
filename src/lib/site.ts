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
    calendly: "https://calendly.com/shortkingsempire/coaching",
    pricePerSession: 150,
  },
  email: "support@shortkingsempire.com",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "/products" },
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

export const BUNDLE = {
  id: "complete-playbook",
  title: "The Complete Playbook",
  eyebrow: "Bundle",
  description:
    "All 7 ebooks plus Built Different plus one 30 min coaching call to map out your personal game plan.",
  priceUsd: 127,
  originalPriceUsd: 206,
  saveLabel: "Save $79",
  includes: [
    "All 7 ebooks ($84 value)",
    "Built Different program ($47 value)",
    "1 coaching call ($75 value)",
    "Instant digital delivery",
  ],
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_BUNDLE",
} as const;

export const COUNSEL_AI = {
  id: "counsel-ai",
  title: "King's Counsel AI",
  eyebrow: "Always-on advisor",
  description:
    "Trained on the Short Kings system. Ask it anything: texts, profiles, first-date plans, mindset reframes. Lives in your portal.",
  priceUsd: 15,
  cadence: "/month",
  trialDays: 7,
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_COUNSEL",
} as const;

export const TRANSFORMATION_3MO = {
  id: "transformation-3-month",
  title: "3 Month Transformation",
  eyebrow: "Program",
  description:
    "Every product plus 12 coaching calls over 3 months. Your results, your timeline, your game built from the ground up.",
  priceUsd: 997,
  cadence: "3 months",
  includes: [
    "All 7 ebooks",
    "Built Different program",
    "12 coaching calls weekly",
    "WhatsApp access included",
  ],
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_TRANSFORMATION_3MO",
} as const;

export const COACHING = {
  id: "monthly-coaching",
  title: "Monthly Coaching",
  eyebrow: "1-on-1",
  description:
    "4 tailored calls a month. Every session built around where you are actually at. Plus unlimited WhatsApp access between calls.",
  priceUsd: 197,
  cadence: "/month",
} as const;

export const GYM_NUTRITION_PLAN = {
  id: "built-different",
  title: "Built Different",
  eyebrow: "Gym & Nutrition",
  description:
    "A fully structured gym and nutrition program on Trainerize. Built to maximize your physique as a shorter guy.",
  priceUsd: 47,
  cadence: "one time",
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_BUILT_DIFFERENT",
} as const;

/** @deprecated use TRANSFORMATION_3MO */
export const COACHING_3_MONTH = TRANSFORMATION_3MO;
