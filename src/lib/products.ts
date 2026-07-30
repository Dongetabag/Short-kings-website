export type ProductKind =
  | "ebook"
  | "fitness"
  | "subscription"
  | "coaching"
  | "plan"
  | "bundle";

export type Product = {
  id: string;
  kind: ProductKind;
  title: string;
  tagline: string;
  description: string;
  priceUsd: number;
  cadence?: string;
  paymentLinkEnvKey?: string;
  file?: { href: string; filename: string };
};

// New 8-ebook library (2026-07 refresh, ELE-1068). Product ids are kept stable
// so existing anchors, Stripe env keys, and gated download wiring keep working;
// only the customer-facing title/tagline/description/price changed. "short-king"
// is the net-new 8th book — its PDF + Stripe link are follow-up infra.
export const EBOOKS: Product[] = [
  {
    id: "she-replied-now-what",
    kind: "ebook",
    title: "The Text That Lands",
    tagline: "Openers to date, no dead air.",
    description:
      "The complete texting system: openers, momentum, and the exact messages that get her off the app and onto a date.",
    priceUsd: 15,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_SHE_REPLIED",
    file: {
      href: "/api/download/she-replied-now-what.pdf",
      filename: "she-replied-now-what.pdf",
    },
  },
  {
    id: "approach-like-a-king",
    kind: "ebook",
    title: "The Standing Man",
    tagline: "Nervous to natural in five seconds.",
    description:
      "The complete approach system: the 5-second rule, the openers, and the frame that turns nervous into natural.",
    priceUsd: 15,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_APPROACH",
    file: {
      href: "/api/download/approach-like-a-king.pdf",
      filename: "approach-like-a-king.pdf",
    },
  },
  {
    id: "attraction-conversation",
    kind: "ebook",
    title: "What She's Actually Thinking",
    tagline: "Read her before she speaks.",
    description:
      "Female psychology decoded: what she's actually attracted to, how she tests you, and how to read her before she says a word.",
    priceUsd: 15,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_CONVERSATION",
    file: {
      href: "/api/download/attraction-conversation.pdf",
      filename: "attraction-conversation.pdf",
    },
  },
  {
    id: "first-date-blueprint",
    kind: "ebook",
    title: "Dating Decoded",
    tagline: "The first date system.",
    description:
      "The first date system: where to go, what to say, and how to become the man she can't replace.",
    priceUsd: 15,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_FIRST_DATE",
    file: {
      href: "/api/download/first-date-blueprint.pdf",
      filename: "first-date-blueprint.pdf",
    },
  },
  {
    id: "unshakeable",
    kind: "ebook",
    title: "The Inner Game",
    tagline: "Make rejection feel like weather.",
    description:
      "Confidence, frame, and discipline: the mindset reps that make rejection feel like weather instead of a verdict.",
    priceUsd: 15,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_UNSHAKEABLE",
    file: {
      href: "/api/download/unshakeable.pdf",
      filename: "unshakeable.pdf",
    },
  },
  {
    id: "swipe-right-on-yourself",
    kind: "ebook",
    title: "The Swipe",
    tagline: "The profile that stops the scroll.",
    description:
      "The algorithm, the photos, and the bio: the exact dating app profile system for men who keep getting swiped past.",
    priceUsd: 15,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_SWIPE_RIGHT",
    file: {
      href: "/api/download/swipe-right-on-yourself.pdf",
      filename: "swipe-right-on-yourself.pdf",
    },
  },
  {
    id: "presence-code",
    kind: "ebook",
    title: "Dress Tall",
    tagline: "Style for a shorter frame.",
    description:
      "The style, wardrobe, and grooming system built for a shorter frame — real and perceived height, no gym required.",
    priceUsd: 15,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_PRESENCE",
    file: {
      href: "/api/download/presence-code.pdf",
      filename: "presence-code.pdf",
    },
  },
  {
    id: "short-king",
    kind: "ebook",
    title: "Short King",
    tagline: "The belief underneath it all.",
    description:
      "Height is not the variable. The belief underneath the whole library, plus the map back into every other book.",
    priceUsd: 15,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_SHORT_KING",
    file: {
      href: "/api/download/short-king.pdf",
      filename: "short-king.pdf",
    },
  },
];

export const GYM_PROGRAM: Product = {
  id: "built-different",
  kind: "plan",
  title: "Built Different",
  tagline: "Train like your dating life depends on it.",
  description:
    "A fully structured gym and nutrition program on Trainerize. Built to maximize your physique as a shorter guy. Proportions, density, and the exact macros to get there.",
  priceUsd: 65,
  cadence: "one time",
  paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_BUILT_DIFFERENT",
};

export const COACHING_PRODUCTS: Product[] = [
  {
    id: "inner-circle",
    kind: "coaching",
    title: "The Inner Circle",
    tagline: "Month to month. Cancel anytime.",
    description:
      "4 coaching calls a month, unlimited WhatsApp, personalized game plan, and all 8 ebooks free on signup.",
    priceUsd: 150,
    cadence: "/month",
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_MONTHLY_COACHING",
  },
];

export const FITNESS_PROGRAMS: Product[] = [
  {
    id: "fitness-3-day",
    kind: "fitness",
    title: "SKE Fitness — 3 Day Program",
    tagline: "Simple structure. Consistent progress.",
    description: "Three days a week. Compound lifts. Progress logged on paper.",
    priceUsd: 0,
    file: {
      href: "/api/download/SKE-fitness-3-day-program.pdf",
      filename: "SKE Fitness 3 day program.pdf",
    },
  },
  {
    id: "fitness-2",
    kind: "fitness",
    title: "SKE Fitness Program 2",
    tagline: "Strength and discipline.",
    description: "Four-day split. Pull, push, legs, athletic.",
    priceUsd: 0,
    file: {
      href: "/api/download/SKE-fitness-program-2.pdf",
      filename: "SKE Fitness program 2.pdf",
    },
  },
  {
    id: "fitness-3",
    kind: "fitness",
    title: "SKE Fitness Program 3",
    tagline: "Build the body you command with.",
    description: "Hypertrophy block. Six weeks. High volume, controlled tempo.",
    priceUsd: 0,
    file: {
      href: "/api/download/SKE-fitness-program-3.pdf",
      filename: "SKE Fitness program 3.pdf",
    },
  },
  {
    id: "fitness-4",
    kind: "fitness",
    title: "SKE Fitness Program 4",
    tagline: "More volume. More control.",
    description: "Five-day push pull legs upper lower. Strength + conditioning.",
    priceUsd: 0,
    file: {
      href: "/api/download/SKE-fitness-program-4.pdf",
      filename: "SKE Fitness program 4.pdf",
    },
  },
  {
    id: "fitness-5",
    kind: "fitness",
    title: "SKE Fitness Program 5",
    tagline: "Stay sharp. Stay consistent.",
    description: "Maintenance + aesthetics. The program you keep running.",
    priceUsd: 0,
    file: {
      href: "/api/download/SKE-fitness-program-5.pdf",
      filename: "SKE Fitness program 5.pdf",
    },
  },
];

export const ALL_EBOOKS = EBOOKS;
export const ALL_FITNESS = FITNESS_PROGRAMS;
export const ALL_COACHING = COACHING_PRODUCTS;
export const ALL_PAID_PRODUCTS: Product[] = [
  ...EBOOKS,
  GYM_PROGRAM,
  ...COACHING_PRODUCTS,
];

export function resolvePaymentLink(envKey: string | undefined): string | null {
  if (!envKey) return null;
  if (typeof process === "undefined") return null;
  const value = process.env[envKey];
  return value && value.length > 0 ? value : null;
}
