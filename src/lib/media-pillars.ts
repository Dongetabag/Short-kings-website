import type { MediaTile } from "@/components/sections/MediaGrid";

export type PillarSlug = "dating" | "lifestyle" | "gym" | "throne-room";

export type PillarMeta = {
  slug: PillarSlug;
  href: string;
  navLabel: string;
  pageEyebrow: string;
  pageTitleTop: string;
  pageTitleHighlight: string;
  pageSubtitle: string;
  homeEyebrow: string;
  homeTitleTop: string;
  homeTitleHighlight: string;
  homeSubtitle: string;
  ctaLabel: string;
  variant?: "default" | "throne";
  /** Lessons / chapters to surface on the pillar page below the reel grid. */
  chapters: { title: string; body: string }[];
};

/** Axel-approved dating pillar — 6 reels in board order (ELE-1068). */
export const DATING_TILES: MediaTile[] = [
  { src: "/media/dating/rizz-breakdown.mp4", type: "video", title: "Rizz breakdown" },
  { src: "/media/dating/hinge.mp4", type: "video", title: "hinge prompts" },
  { src: "/media/dating/dating-funnel.mp4", type: "video", title: "hinge success" },
  { src: "/media/dating/scarcity.mp4", type: "video", title: "scarcity" },
  { src: "/media/dating/hinge-prompts.mp4", type: "video", title: "Dating funnel" },
  { src: "/media/dating/dating-vs-sales.mp4", type: "video", title: "dating vs sales" },
];

/** Axel-approved lifestyle pillar — 6 reels in board order (ELE-1068). */
export const LIFESTYLE_TILES: MediaTile[] = [
  { src: "/media/lifestyle/short-kings.mp4", type: "video", title: "short kings" },
  { src: "/media/lifestyle/why-profiles-fail.mp4", type: "video", title: "why profiles fail" },
  { src: "/media/lifestyle/looks-transformation.mp4", type: "video", title: "looks transformation" },
  { src: "/media/lifestyle/napoleon-paradox.mp4", type: "video", title: "Napoleon paradox" },
  { src: "/media/lifestyle/transformation.mp4", type: "video", title: "transformation" },
  { src: "/media/lifestyle/gods-blessing.mp4", type: "video", title: "god's blessing" },
];

/** Pillars that use tap-to-play reels (thumbnail preview, one at a time). */
export const MANUAL_PLAYBACK_PILLARS: PillarSlug[] = [
  "dating",
  "lifestyle",
  "gym",
  "throne-room",
];

/** Axel-approved gym pillar — 6 tiles in board order (ELE-1068). Slot 2 is a still image. */
export const GYM_TILES: MediaTile[] = [
  { src: "/media/gym/client-result.mp4", type: "video", title: "client result" },
  { src: "/media/gym/image.jpeg", type: "image", title: "image" },
  { src: "/media/gym/gym-transformation.mp4", type: "video", title: "gym transformation" },
  { src: "/media/gym/foods-for-fat-loss.mp4", type: "video", title: "foods for fat loss" },
  { src: "/media/gym/back-day.mp4", type: "video", title: "back day" },
  { src: "/media/gym/bible-foods.mp4", type: "video", title: "bible foods" },
];

/** Axel-approved style/fashion pillar — 6 tiles in board order (ELE-1068). Slots 2 & 4 are stills. */
export const THRONE_TILES: MediaTile[] = [
  { src: "/media/throne-room/clothes-to-stay-away-from.mp4", type: "video", title: "clothes to stay away from" },
  { src: "/media/throne-room/professional-photo.jpeg", type: "image", title: "Professional Photo" },
  { src: "/media/throne-room/fashion-tips.mp4", type: "video", title: "Fashion tips" },
  { src: "/media/throne-room/lifestyle-picture.jpeg", type: "image", title: "lifestyle picture" },
  { src: "/media/throne-room/sneakers-for-short-kings.mp4", type: "video", title: "sneakers for short kings" },
  { src: "/media/throne-room/best-shirts.mp4", type: "video", title: "best shirts" },
];

export const PILLARS: Record<PillarSlug, PillarMeta> = {
  dating: {
    slug: "dating",
    href: "/dating",
    navLabel: "Dating",
    pageEyebrow: "Pillar I · Dating",
    pageTitleTop: "Dating,",
    pageTitleHighlight: "made systematic.",
    pageSubtitle:
      "Approach. Text. Plan. Lead. Close. Five chapters, dozens of clips, every situation a short man actually runs into.",
    homeEyebrow: "Pillar I · Dating",
    homeTitleTop: "Dating,",
    homeTitleHighlight: "made systematic.",
    homeSubtitle:
      "See the system before you buy. Approach, text, lead, close. Short reels. No fluff.",
    ctaLabel: "See more dating",
    chapters: [
      {
        title: "The Approach",
        body: "Daylight, online, and night. Three openers per channel, each tested in the field. The pattern that takes you from talking to yourself to talking to her in under sixty seconds.",
      },
      {
        title: "Text With Presence",
        body: "Pacing, frame, and the three replies that turn a maybe into a yes. Real screenshots from real exchanges. What to send and when to fade.",
      },
      {
        title: "First Date Architecture",
        body: "Plan the venue, lead the tempo, exit on the right note. The structure that consistently produces second dates and the lines that close the loop.",
      },
    ],
  },
  lifestyle: {
    slug: "lifestyle",
    href: "/lifestyle",
    navLabel: "Lifestyle",
    pageEyebrow: "Pillar II · Lifestyle",
    pageTitleTop: "Live the",
    pageTitleHighlight: "daily reps.",
    pageSubtitle:
      "Identity, mindset, mentorship. The private reps you run when no one is filming. Faith forward. Frame steady.",
    homeEyebrow: "Pillar II · Lifestyle",
    homeTitleTop: "Live the",
    homeTitleHighlight: "daily reps.",
    homeSubtitle:
      "Mindset, faith-forward identity, mentorship. The private reps that hold when no one is watching.",
    ctaLabel: "See more lifestyle",
    chapters: [
      {
        title: "Identity Before Strategy",
        body: "You are not building tactics for a tall man inside a short man's body. You are building you. Every move starts there.",
      },
      {
        title: "The Daily Frame",
        body: "Posture, voice, eye contact, breath. Four reps a day for ninety days. The room reads you the way you train it to.",
      },
      {
        title: "Mentorship and Brotherhood",
        body: "Find men who outrank you. Become a man the next ranks look up to. Growth is a chain, not a tower.",
      },
    ],
  },
  gym: {
    slug: "gym",
    href: "/gym",
    navLabel: "Gym",
    pageEyebrow: "Pillar III · Gym",
    pageTitleTop: "Build the",
    pageTitleHighlight: "frame.",
    pageSubtitle:
      "Five free programs. Compound lifts, real volume, the body that backs the frame. Train for the silhouette, not the scale.",
    homeEyebrow: "Pillar III · Gym",
    homeTitleTop: "Build the",
    homeTitleHighlight: "frame.",
    homeSubtitle:
      "Training and fuel clips from the free SKE library. Volume, compounds, posture that reads in the room.",
    ctaLabel: "See more gym",
    chapters: [
      {
        title: "Train for the Silhouette",
        body: "Shorter limbs mean shorter range, which means more weight, which means faster visual mass. Program the advantage. Stop fighting it.",
      },
      {
        title: "The Four Lifts",
        body: "Squat, deadlift, press, row. The four lifts that build the body that backs the frame. Logged on paper. Progressed every week.",
      },
      {
        title: "Fuel the Frame",
        body: "Macros for hypertrophy. Plate templates for travel. The eating pattern that holds when life gets loud.",
      },
    ],
  },
  "throne-room": {
    slug: "throne-room",
    href: "/throne-room",
    navLabel: "Style",
    pageEyebrow: "Pillar IV · Style",
    pageTitleTop: "Style is",
    pageTitleHighlight: "engineering.",
    pageSubtitle:
      "Cuts, proportions, palettes. Here is the spec sheet for your frame.",
    homeEyebrow: "Pillar IV · Style",
    homeTitleTop: "Style is",
    homeTitleHighlight: "engineering.",
    homeSubtitle:
      "Fit engineering: inseam, shoulder line, drape. Style as spec, not guesswork.",
    ctaLabel: "See more style",
    variant: "throne",
    chapters: [
      {
        title: "The Inseam Equation",
        body: "Single trouser-rise number that adds two visual inches without lifts. The brands that respect the math and the alteration that converts the rest of your closet.",
      },
      {
        title: "Shoulder, Drape, Tempo",
        body: "Tailoring is a triangle. Shoulder line sets the silhouette, drape sets the rhythm, hem sets the height. Get the ratios and stop reading short.",
      },
      {
        title: "Palettes That Hold",
        body: "Earth, ink, bone. Three rotating palettes that flatter every short frame and survive every season.",
      },
    ],
  },
};

export const PILLAR_LIST: PillarMeta[] = [
  PILLARS.dating,
  PILLARS.lifestyle,
  PILLARS.gym,
  PILLARS["throne-room"],
];

export function tilesFor(slug: PillarSlug): MediaTile[] {
  switch (slug) {
    case "dating":
      return DATING_TILES;
    case "lifestyle":
      return LIFESTYLE_TILES;
    case "gym":
      return GYM_TILES;
    case "throne-room":
      return THRONE_TILES;
  }
}
