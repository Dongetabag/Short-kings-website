export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Dating" | "Mindset" | "Style" | "Fitness";
  readMinutes: number;
  publishedAt: string;
  cover?: string;
  body: string;
};

export const POSTS: JournalPost[] = [
  {
    slug: "the-first-ten-seconds",
    title: "The First Ten Seconds Decide the Date",
    excerpt:
      "Posture. Pace. Eye contact. Voice tempo. The opening checklist most men skip and the one Alex runs every time.",
    category: "Dating",
    readMinutes: 4,
    publishedAt: "2026-04-22",
    cover: "/media/dating/dating-moment-1.jpg",
    body:
      "Most approaches die before the first sentence is finished. The room reads four signals in the first ten seconds: how you walk in, where your eyes land, the tempo of your voice, and the shape of your shoulders. Each one is trainable. None of them is height. Start with posture: shoulders back, chest open, weight on the back foot. Add eye contact that holds three beats. Drop the voice half a step and slow the pace by ten percent. Then speak. The line itself stops mattering when the channel is right.",
  },
  {
    slug: "the-inseam-trick",
    title: "The Inseam Trick That Adds Two Visual Inches",
    excerpt:
      "Style is engineering. Get the trouser break right and you stop reading short. Three measurements, no lifts, no tailor.",
    category: "Style",
    readMinutes: 5,
    publishedAt: "2026-04-15",
    cover: "/media/throne-room/style-1.jpg",
    body:
      "There is a single trouser-rise number that flatters short frames and almost no off-the-rack brand prints it on the tag. We will. Walk through the measurement, the brands that respect the math, and a five-minute alteration that converts ninety percent of your wardrobe.",
  },
  {
    slug: "frame-when-she-tests-you",
    title: "Frame, When She Tests You",
    excerpt:
      "She says you are cute but probably too short. Three replies. Two are reactive. One holds the frame. Here is the third.",
    category: "Mindset",
    readMinutes: 3,
    publishedAt: "2026-04-08",
    cover: "/media/lifestyle/alex-portrait-1.jpg",
    body:
      "The test is not about height. The test is about whether you flinch. The system's response holds the frame, returns the question, and gives her a real choice. Defending your inches is the trap. Walk straight past it.",
  },
  {
    slug: "compound-lifts-for-short-frames",
    title: "Compound Lifts for the Short Frame",
    excerpt:
      "Why short men build visual mass faster than tall lifters and the four lifts that maximize the advantage.",
    category: "Fitness",
    readMinutes: 6,
    publishedAt: "2026-04-01",
    cover: "/media/gym/gym-1.jpg",
    body:
      "Shorter limbs mean shorter range, which means more weight, which means more growth per rep. We program for the frame instead of fighting it. Four-day split, four core lifts, six weeks per block.",
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
