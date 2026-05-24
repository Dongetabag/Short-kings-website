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
  communitySize: "10,000+",
} as const;

export const NAV_LINKS = [
  { label: "Dating", href: "/dating" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Gym", href: "/gym" },
  { label: "Style", href: "/throne-room" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Journal", href: "/journal" },
  { label: "Products", href: "/products" },
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
  id: "full-library",
  title: "The Full Library",
  eyebrow: "Bundle",
  description:
    "All 5 ebooks plus lifetime access to the King's Counsel AI. Everything you need to install the system.",
  priceUsd: 60,
  originalPriceUsd: 100,
  saveLabel: "Save $40",
  includes: [
    "All 5 dating ebooks ($20 each)",
    "King's Counsel AI — first month free",
    "Free SKE fitness library",
    "Lifetime updates on every ebook",
    "Instant digital delivery",
  ],
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_BUNDLE",
} as const;

export const COUNSEL_AI = {
  id: "counsel-ai",
  title: "King's Counsel AI",
  eyebrow: "Always-on advisor",
  description:
    "Trained on the Short Kings system. Ask it anything — texts, profiles, first-date plans, mindset reframes. Lives in your portal.",
  priceUsd: 15,
  cadence: "/month",
  trialDays: 7,
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_COUNSEL",
} as const;

export const COACHING = {
  id: "coaching-1on1",
  title: "1-on-1 Coaching",
  eyebrow: "1-on-1",
  description:
    "Direct access. Forty-five minutes. We map your situation, build your next move, and you leave with a written game plan.",
  priceUsd: 150,
  cadence: "/session",
} as const;

export const GYM_NUTRITION_PLAN = {
  id: "gym-nutrition-plan",
  title: "Gym & Nutrition Plan",
  eyebrow: "Plan",
  description:
    "A structured training and nutrition program built for short frames. Compound lifts, macros, weekly check-ins.",
  priceUsd: 0, // PENDING: owner to confirm price
  cadence: "/program",
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_GYM_NUTRITION",
} as const;

export const COACHING_3_MONTH = {
  id: "coaching-3-month",
  title: "3-Month Coaching",
  eyebrow: "Program",
  description:
    "Three months of guided work: weekly calls, async access between sessions, every ebook and program included.",
  priceUsd: 0, // PENDING: owner to confirm price
  cadence: "/3 months",
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_COACHING_3MO",
} as const;
