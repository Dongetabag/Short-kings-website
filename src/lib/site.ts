export const SITE = {
  name: "Short Kings Empire",
  tagline: "Crown your confidence. Rule your domain.",
  description:
    "Where kings rise to rule. Dating playbooks, fitness programs, and the mindset to move like royalty. Your height is your story. It will not be your limitation.",
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
  { label: "Throne Room", href: "/throne-room" },
  { label: "Court", href: "/testimonials" },
  { label: "Journal", href: "/journal" },
  { label: "Arsenal", href: "/products" },
] as const;

export const PORTAL_NAV = [
  { label: "Dashboard", href: "/portal" },
  { label: "The Vault", href: "/portal/library" },
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
  id: "empire-bundle",
  title: "The Empire Bundle",
  eyebrow: "The Full Arsenal",
  description:
    "All five dating playbooks plus a free month of King's Counsel AI. The complete toolkit. Instant download.",
  priceUsd: 60,
  originalPriceUsd: 100,
  saveLabel: "Save $40",
  includes: [
    "All 5 dating ebooks ($20 each)",
    "King's Counsel AI — first month free",
    "Free SKE fitness library",
    "Lifetime updates on every playbook",
    "Instant digital delivery",
  ],
  // Stripe payment-link URL — set via STRIPE_PAYMENT_LINK_BUNDLE env var.
  // When unset, CTA degrades to "Setup pending".
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_BUNDLE",
} as const;

export const COUNSEL_AI = {
  id: "counsel-ai",
  title: "King's Counsel AI",
  eyebrow: "Royal Advisor, On Call",
  description:
    "Trained on the Empire's frameworks. Ask it anything — texts, profiles, first-date plans, mindset reframes. Lives in your portal forever.",
  priceUsd: 15,
  cadence: "/moon cycle",
  trialDays: 7,
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_COUNSEL",
} as const;

export const COACHING = {
  id: "royal-counsel",
  title: "1-on-1 Royal Counsel",
  eyebrow: "Private Audience",
  description:
    "Direct access. Forty-five minutes. We map your situation, build your next move, and you leave with a written game plan.",
  priceUsd: 150,
  cadence: "/audience",
} as const;
