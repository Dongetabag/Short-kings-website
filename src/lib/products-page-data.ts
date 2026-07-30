/** Display order and copy overrides for /products (ELE-1068). */

export const EBOOK_DISPLAY_ORDER = [
  "she-replied-now-what",
  "approach-like-a-king",
  "attraction-conversation",
  "first-date-blueprint",
  "unshakeable",
  "swipe-right-on-yourself",
  "presence-code",
  "short-king",
] as const;

export const EBOOK_PAGE_COPY: Record<
  (typeof EBOOK_DISPLAY_ORDER)[number],
  { description: string }
> = {
  "she-replied-now-what": {
    description:
      "The complete texting system: openers, momentum, and the exact messages that get her off the app and onto a date.",
  },
  "approach-like-a-king": {
    description:
      "The complete approach system: the 5-second rule, the openers, and the frame that turns nervous into natural.",
  },
  "attraction-conversation": {
    description:
      "Female psychology decoded: what she's actually attracted to, how she tests you, and how to read her before she says a word.",
  },
  "first-date-blueprint": {
    description:
      "The first date system: where to go, what to say, and how to become the man she can't replace.",
  },
  unshakeable: {
    description:
      "Confidence, frame, and discipline: the mindset reps that make rejection feel like weather instead of a verdict.",
  },
  "swipe-right-on-yourself": {
    description:
      "The algorithm, the photos, and the bio: the exact dating app profile system for men who keep getting swiped past.",
  },
  "presence-code": {
    description:
      "The style, wardrobe, and grooming system built for a shorter frame — real and perceived height, no gym required.",
  },
  "short-king": {
    description:
      "Height is not the variable. The belief underneath the whole library, plus the map back into every other book.",
  },
};

export const PROTOCOLS_INCLUDES = [
  "The Text That Lands",
  "The Standing Man",
  "What She's Actually Thinking",
  "Dating Decoded",
  "The Inner Game",
  "The Swipe",
  "Dress Tall",
  "Short King",
] as const;

export const PLAYBOOK_INCLUDES = [
  "All 8 ebooks included",
  "2 coaching calls (30 min each)",
  "Dating app audit",
  "Short Kings Style Guide",
  "30-day challenge tracker",
] as const;

export const EMPIRE_INCLUDES = [
  "Everything in 1-on-1 Coaching",
  "Weekly calls every week for 3 months",
  "Axel reviews real convos on WhatsApp",
  "Active profile monitoring",
  "Direct number — call or text anytime",
  "Body language and style breakdown",
  "Relationship roadmap",
  "Built Different gym program included — delivered via the Trainerize app after signup",
] as const;

export const COACHING_INCLUDES = [
  "4 coaching calls per month",
  "Unlimited WhatsApp access",
  "Personalized monthly game plan",
  "Dating app audit",
  "All 8 ebooks free on signup",
] as const;
