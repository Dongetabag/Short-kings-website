export type ProductKind = "ebook" | "fitness" | "subscription" | "coaching" | "bundle";

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
    id: "approach-blueprint",
    kind: "ebook",
    title: "The Approach Blueprint",
    tagline: "Walk up like you belong there.",
    description:
      "The opener framework Sir Alex used to go from talking himself out of every introduction to closing in under sixty seconds. Bars, gyms, daytime, online.",
    priceUsd: 20,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_APPROACH",
    file: {
      href: "/products/ebooks/approach_like_a_king_final.pdf",
      filename: "approach_like_a_king_final.pdf",
    },
  },
  {
    id: "digital-attraction",
    kind: "ebook",
    title: "Digital Attraction",
    tagline: "Text with clarity and momentum.",
    description:
      "What to send, when to send it, and the three replies that turn a maybe into a yes. Real screenshots from real exchanges.",
    priceUsd: 20,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_DIGITAL",
    file: {
      href: "/products/ebooks/attraction_conversation_final.pdf",
      filename: "attraction_conversation_final.pdf",
    },
  },
  {
    id: "first-date-blueprint",
    kind: "ebook",
    title: "First Date Blueprint",
    tagline: "Lead the vibe. Close the loop.",
    description:
      "Plan it, run it, end it on the right note. The exact venues, structures, and exit lines that produce second dates.",
    priceUsd: 20,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_FIRST_DATE",
    file: {
      href: "/products/ebooks/first_date_blueprint_final.pdf",
      filename: "first_date_blueprint_final.pdf",
    },
  },
  {
    id: "conversation-mastery",
    kind: "ebook",
    title: "Conversation Mastery",
    tagline: "Speak so the room leans in.",
    description:
      "The pacing, presence, and storytelling drills that make you the most interesting voice in the conversation, on dates and off.",
    priceUsd: 20,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_CONVERSATION",
    file: {
      href: "/products/ebooks/she_replied_now_what_final.pdf",
      filename: "conversation_mastery_final.pdf",
    },
  },
  {
    id: "unshakeable",
    kind: "ebook",
    title: "Unshakeable",
    tagline: "Unbothered energy. King mindset.",
    description:
      "Frame, abundance, and the daily reps that make rejection feel like weather. The mindset chapter every other ebook references.",
    priceUsd: 20,
    paymentLinkEnvKey: "STRIPE_PAYMENT_LINK_UNSHAKEABLE",
    file: {
      href: "/products/ebooks/unshakeable_final.pdf",
      filename: "unshakeable_final.pdf",
    },
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

/**
 * Resolve a product's checkout link from env at runtime.
 * Returns null when the Stripe key is not yet configured — UI shows "Setup pending".
 */
export function resolvePaymentLink(envKey: string | undefined): string | null {
  if (!envKey) return null;
  if (typeof process === "undefined") return null;
  const value = process.env[envKey];
  return value && value.length > 0 ? value : null;
}
