import { GYM_NUTRITION_PLAN, INNER_CIRCLE, SEVEN_PROTOCOLS, THE_EMPIRE } from "@/lib/site";
import { OFFER_LINKS } from "@/lib/offer-links";

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
  href?: string;
  paymentLinkEnvKey?: string;
  productsAnchor: string;
  cta: string;
};

export type ProductTier = {
  id: "tier-1" | "tier-2" | "tier-3";
  label: string;
  shortLabel: string;
  step: string;
  products: TierProduct[];
};

export const PRODUCT_TIERS: ProductTier[] = [
  {
    id: "tier-1",
    label: "Tier 1",
    shortLabel: "Start Tonight",
    step: "Start tonight",
    products: [
      {
        id: "dating-system",
        title: SEVEN_PROTOCOLS.title,
        eyebrow: "8 ebooks + 2 bonuses",
        forWho: "From overlooked to chosen in 30 days.",
        description: SEVEN_PROTOCOLS.description,
        priceLabel: `$${SEVEN_PROTOCOLS.priceUsd}`,
        priceNote: `${SEVEN_PROTOCOLS.compareAtLabel} · ${SEVEN_PROTOCOLS.saveBadge}`,
        href: OFFER_LINKS.datingSystem,
        productsAnchor: "#dating-system",
        cta: "Start My 30 Days",
      },
    ],
  },
  {
    id: "tier-2",
    label: "Tier 2",
    shortLabel: "Get The Plan",
    step: "Get the plan",
    products: [
      {
        id: "strategy-call",
        title: "The Strategy Call",
        eyebrow: "The Diagnosis",
        forWho: "For the man who wants to know exactly what's wrong and how to fix it.",
        description:
          "One 60 minute call with Axel. We diagnose exactly what's holding you back and you leave with a clear game plan to fix it.",
        priceLabel: "$100",
        href: OFFER_LINKS.strategyCall,
        productsAnchor: "#strategy-call",
        cta: "Book My Strategy Call",
      },
      {
        id: GYM_NUTRITION_PLAN.id,
        title: GYM_NUTRITION_PLAN.title,
        eyebrow: GYM_NUTRITION_PLAN.eyebrow,
        forWho: "For the man who wants to build the body that changes how the room reads him.",
        description: GYM_NUTRITION_PLAN.description,
        priceLabel: `$${GYM_NUTRITION_PLAN.priceUsd}`,
        href: OFFER_LINKS.builtDifferent,
        productsAnchor: "#built-different",
        cta: "Get Built Different",
      },
    ],
  },
  {
    id: "tier-3",
    label: "Tier 3",
    shortLabel: "Done With You",
    step: "Done with you",
    products: [
      {
        id: "coaching",
        title: "1 on 1 Coaching",
        eyebrow: "Accountability",
        forWho: "For the man who has the plan and wants someone making sure he runs it.",
        description: INNER_CIRCLE.description,
        priceLabel: "$250 PER MONTH",
        href: OFFER_LINKS.coaching,
        productsAnchor: "#coaching",
        cta: "Start Coaching",
      },
      {
        id: "empire",
        title: THE_EMPIRE.title,
        eyebrow: THE_EMPIRE.eyebrow,
        forWho: "For the man who is done figuring it out and wants Axel in his corner every single day.",
        description: THE_EMPIRE.description,
        priceLabel: `$${THE_EMPIRE.priceUsd}`,
        priceNote: `${THE_EMPIRE.compareAtLabel} · ${THE_EMPIRE.saveBadge}`,
        href: OFFER_LINKS.empire,
        productsAnchor: "#empire",
        cta: "Apply for Empire",
      },
    ],
  },
];
