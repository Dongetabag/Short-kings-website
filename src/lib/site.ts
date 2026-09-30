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
    /** General Book a Call destination (gameplan). */
    calendly: "https://calendly.com/shortkingsempire/gameplan",
    pricePerSession: 150,
  },
  email: "support@shortkingsempire.com",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Dating", href: "/dating" },
] as const;

export const ADMIN_NAV = [
  { label: "Overview", href: "/admin" },
  { label: "Funnel Playbook", href: "/admin/playbook" },
  { label: "Members", href: "/admin/members" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Content", href: "/admin/content" },
  { label: "Leads", href: "/admin/leads" },
  { label: "KPIs", href: "/admin/kpis" },
] as const;

/**
 * Entry offer: 30 Day Short King Dating System.
 */
export const SEVEN_PROTOCOLS = {
  id: "dating-system",
  title: "The 30 Day Short King Dating System",
  eyebrow: "30-day system",
  description:
    "The Text That Lands, The Standing Man, What She's Actually Thinking, Dating Decoded, The Inner Game, The Swipe, Dress Tall, Short King.",
  /** @deprecated use priceUsd — kept for older call sites during transition */
  priceBundleUsd: 27.99,
  priceUsd: 27.99,
  compareAtUsd: 100,
  compareAtLabel: "$100 VALUE",
  saveBadge: "SAVE 72%",
  priceFinePrint: "7 day money back guarantee.",
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_EBOOK_BUNDLE",
} as const;

export const THE_PLAYBOOK = {
  id: "legacy-playbook",
  title: "The Playbook",
  eyebrow: "Starter commitment",
  description:
    "The complete self-paced system plus 2 coaching calls. Execute independently — the calls show you what working with Axel feels like.",
  priceUsd: 185,
  originalPriceUsd: 620,
  saveLabel: "Save $435+",
  includes: [
    "All 8 ebooks",
    "2 coaching calls (30 min each)",
    "Dating app audit",
    "Short Kings Style Guide",
    "30-day challenge tracker",
    "Weekly progress form",
  ],
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_BUNDLE",
} as const;

/** @deprecated use THE_PLAYBOOK */
export const BUNDLE = THE_PLAYBOOK;

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
    "All 8 ebooks — free on signup",
    "4 coaching calls a month",
    "Unlimited WhatsApp access",
    "Personalized monthly game plan",
    "Dating app audit",
    "Accountability check-ins (MWF)",
    "Short Kings Style Guide",
    "30-day challenge tracker",
  ],
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_MONTHLY_COACHING",
} as const;

/** @deprecated use INNER_CIRCLE */
export const COACHING = INNER_CIRCLE;

export const THE_EMPIRE = {
  id: "the-empire",
  title: "The Empire: 3 Month Transform",
  eyebrow: "Done with you",
  description:
    "Same 3 months. Completely different level of access. Axel is in your phone reviewing texts, debriefing every date — your personal dating director.",
  priceUsd: 999.99,
  cadence: "3 months",
  originalPriceUsd: 1500,
  compareAtLabel: "$1,500 VALUE",
  saveBadge: "SAVE $500",
  paymentPlanLabel: "OR 3 PAYMENTS OF $333.33",
  priceFinePrint:
    "Split via Affirm or Afterpay. Pay in installments and start today.",
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
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_TRANSFORMAT_3MO",
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
