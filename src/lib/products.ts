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

export const EBOOKS: Product[] = [
  {
    id: "she-replied-now-what",
    kind: "ebook",
    title: "She Replied, Now What",
    tagline: "Turn a match into a date.",
    description:
      "The exact texting framework to build momentum fast. What to say, when to say it, and how to get her off the app.",
    priceUsd: 12,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_SHE_REPLIED",
  },
  {
    id: "first-date-blueprint",
    kind: "ebook",
    title: "First Date Blueprint",
    tagline: "Lead the vibe. Close the loop.",
    description:
      "Venue selection, conversation structure, and the exact exit lines that make her want to see you again.",
    priceUsd: 12,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_FIRST_DATE",
  },
  {
    id: "unshakeable",
    kind: "ebook",
    title: "Unshakeable",
    tagline: "Unbothered energy. Trainable frame.",
    description:
      "The mindset reps that make rejection feel like weather. Frame, abundance, and the daily habits that keep you grounded.",
    priceUsd: 12,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_UNSHAKEABLE",
  },
  {
    id: "presence-code",
    kind: "ebook",
    title: "Presence Code",
    tagline: "Walk in. Own the room.",
    description:
      "Body language, vocal tonality, and eye contact habits that communicate status before you say a word.",
    priceUsd: 12,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_PRESENCE",
  },
  {
    id: "approach-like-a-king",
    kind: "ebook",
    title: "Approach Like a King",
    tagline: "Cold approach. Zero hesitation.",
    description:
      "The opener framework to go from nervous to natural. Bars, gyms, daytime, and everywhere in between.",
    priceUsd: 12,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_APPROACH",
  },
  {
    id: "attraction-conversation",
    kind: "ebook",
    title: "Attraction Conversation",
    tagline: "Speak so she leans in.",
    description:
      "Storytelling, pacing, and push-pull techniques that make you the most interesting person she has talked to.",
    priceUsd: 12,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_CONVERSATION",
  },
  {
    id: "swipe-right-on-yourself",
    kind: "ebook",
    title: "Swipe Right on Yourself",
    tagline: "The profile that gets replies.",
    description:
      "Photos, bio, and opening lines that work. Built for shorter guys who want to stop getting ghosted before the first message.",
    priceUsd: 12,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_SWIPE_RIGHT",
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
    id: "monthly-coaching",
    kind: "coaching",
    title: "Monthly Coaching",
    tagline: "Your coach in your corner.",
    description:
      "4 tailored calls a month. Every session built around where you are actually at. Plus unlimited WhatsApp access between calls.",
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
      href: "/products/fitness/SKE%20Fitness%203%20day%20program.pdf",
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
      href: "/products/fitness/SKE%20Fitness%20program%202.pdf",
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
      href: "/products/fitness/SKE%20Fitness%20program%203.pdf",
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
      href: "/products/fitness/SKE%20Fitness%20program%204.pdf",
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
      href: "/products/fitness/SKE%20Fitness%20program%205.pdf",
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
