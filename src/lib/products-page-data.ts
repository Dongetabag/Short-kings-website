/** Display order and copy overrides for /products (ELE-1068). */

export const EBOOK_DISPLAY_ORDER = [
  "she-replied-now-what",
  "first-date-blueprint",
  "unshakeable",
  "presence-code",
  "approach-like-a-king",
  "attraction-conversation",
  "swipe-right-on-yourself",
] as const;

export const EBOOK_PAGE_COPY: Record<
  (typeof EBOOK_DISPLAY_ORDER)[number],
  { description: string }
> = {
  "she-replied-now-what": {
    description:
      "The exact texting framework to build momentum and get her off the app.",
  },
  "first-date-blueprint": {
    description:
      "Venue, conversation structure, and the exit lines that make her want to see you again.",
  },
  unshakeable: {
    description: "The mindset reps that make rejection feel like weather.",
  },
  "presence-code": {
    description:
      "Body language, vocal tonality, and eye contact that communicate status before you speak.",
  },
  "approach-like-a-king": {
    description:
      "The opener framework to go from nervous to natural anywhere.",
  },
  "attraction-conversation": {
    description:
      "Storytelling and push-pull techniques that make you the most interesting person in the room.",
  },
  "swipe-right-on-yourself": {
    description:
      "Photos, bio, and opening lines built for shorter guys who want to stop getting ghosted.",
  },
};

export const PROTOCOLS_INCLUDES = [
  "Approach Like a King",
  "She Replied, Now What",
  "First Date Blueprint",
  "Unshakeable",
  "Presence Code",
  "Attraction Conversation",
  "Swipe Right on Yourself",
] as const;

export const PLAYBOOK_INCLUDES = [
  "All 7 ebooks included",
  "2 coaching calls (30 min each)",
  "Dating app audit",
  "Short Kings Style Guide",
  "Kings Counsel AI — 1 month free",
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
  "All 7 ebooks free on signup",
  "Kings Counsel AI included",
] as const;
