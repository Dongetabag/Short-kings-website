import {
  GYM_NUTRITION_PLAN,
  INNER_CIRCLE,
  SEVEN_PROTOCOLS,
  THE_EMPIRE,
  THE_PLAYBOOK,
} from "@/lib/site";

export type TierProduct = {
  id: string;
  title: string;
  eyebrow: string;
  forWho: string;
  description: string;
  includes?: readonly string[];
  priceLabel: string;
  priceNote?: string;
  nudge?: string;
  paymentLinkEnvKey?: string;
  productsAnchor: string;
  cta: string;
};

export type ProductTier = {
  id: "tier-1" | "tier-2" | "tier-3" | "tier-4";
  label: string;
  shortLabel: string;
  step: string;
  products: TierProduct[];
};

export const PRODUCT_TIERS: ProductTier[] = [
  {
    id: "tier-1",
    label: "Tier 1",
    shortLabel: "Entry",
    step: "Discover the system",
    products: [
      {
        id: SEVEN_PROTOCOLS.id,
        title: SEVEN_PROTOCOLS.title,
        eyebrow: SEVEN_PROTOCOLS.eyebrow,
        forWho: "The guy in acute pain who wants to start tonight.",
        description: SEVEN_PROTOCOLS.description,
        priceLabel: `$${SEVEN_PROTOCOLS.priceEachUsd} each · $${SEVEN_PROTOCOLS.priceBundleUsd} all 7`,
        priceNote: "Instant digital delivery",
        nudge: "Each ebook ends with a DM CALL prompt — the book is the demo, the call is the product.",
        paymentLinkEnvKey: SEVEN_PROTOCOLS.paymentLinkEnvKey,
        productsAnchor: "#seven-protocols",
        cta: "Get all 7",
      },
    ],
  },
  {
    id: "tier-2",
    label: "Tier 2",
    shortLabel: "Starter",
    step: "One-time commitment",
    products: [
      {
        id: THE_PLAYBOOK.id,
        title: THE_PLAYBOOK.title,
        eyebrow: THE_PLAYBOOK.eyebrow,
        forWho: "The guy who wants everything but is not ready for ongoing coaching.",
        description: THE_PLAYBOOK.description,
        includes: THE_PLAYBOOK.includes,
        priceLabel: `$${THE_PLAYBOOK.priceUsd}`,
        priceNote: `Value $${THE_PLAYBOOK.originalPriceUsd}+ · one time`,
        nudge: "Most clients upgrade to The Inner Circle within 60 days.",
        paymentLinkEnvKey: THE_PLAYBOOK.paymentLinkEnvKey,
        productsAnchor: "#the-playbook",
        cta: "Get The Playbook",
      },
      {
        id: GYM_NUTRITION_PLAN.id,
        title: GYM_NUTRITION_PLAN.title,
        eyebrow: GYM_NUTRITION_PLAN.eyebrow,
        forWho: "The guy who wants the physical edge alongside the dating work.",
        description: GYM_NUTRITION_PLAN.description,
        priceLabel: `$${GYM_NUTRITION_PLAN.priceUsd}`,
        priceNote: GYM_NUTRITION_PLAN.cadence,
        nudge: "Also included inside The Empire.",
        paymentLinkEnvKey: GYM_NUTRITION_PLAN.paymentLinkEnvKey,
        productsAnchor: "#built-different",
        cta: "Get Built Different",
      },
    ],
  },
  {
    id: "tier-3",
    label: "Tier 3",
    shortLabel: "Coaching",
    step: "1-on-1 relationship",
    products: [
      {
        id: INNER_CIRCLE.id,
        title: INNER_CIRCLE.title,
        eyebrow: INNER_CIRCLE.eyebrow,
        forWho: "The guy who wants a great coach — needs the exit door to say yes.",
        description: INNER_CIRCLE.description,
        includes: INNER_CIRCLE.includes,
        priceLabel: `$${INNER_CIRCLE.priceUsd}${INNER_CIRCLE.cadence}`,
        priceNote: `Value $${INNER_CIRCLE.originalPriceUsd}+ · month to month · cancel anytime`,
        nudge: "Most clients book their first date within 3 weeks.",
        paymentLinkEnvKey: INNER_CIRCLE.paymentLinkEnvKey,
        productsAnchor: "#inner-circle",
        cta: "Join The Inner Circle",
      },
    ],
  },
  {
    id: "tier-4",
    label: "Tier 4",
    shortLabel: "Empire",
    step: "Done with you",
    products: [
      {
        id: THE_EMPIRE.id,
        title: THE_EMPIRE.title,
        eyebrow: THE_EMPIRE.eyebrow,
        forWho: "The guy who is done figuring it out — wants Axel running point.",
        description: THE_EMPIRE.description,
        includes: THE_EMPIRE.includes,
        priceLabel: `$${THE_EMPIRE.priceUsd}`,
        priceNote: `${THE_EMPIRE.cadence} · ${THE_EMPIRE.scarcity}`,
        nudge: "Split via Affirm or Afterpay — pay in installments and start today.",
        paymentLinkEnvKey: THE_EMPIRE.paymentLinkEnvKey,
        productsAnchor: "#the-empire",
        cta: "Apply for The Empire",
      },
    ],
  },
];
