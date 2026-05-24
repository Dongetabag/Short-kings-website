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

export const DATING_TILES: MediaTile[] = [
  { src: "/media/dating/rizz-breakdown.mp4", type: "video", title: "Rizz Breakdown", subtitle: "The first 9 seconds of any approach" },
  { src: "/media/dating/dating-funnel.mp4", type: "video", title: "The Dating Funnel", subtitle: "Match, date, second date, repeat" },
  { src: "/media/dating/attraction-secrets.mp4", type: "video", title: "Attraction Secrets", subtitle: "What women actually filter for" },
  { src: "/media/dating/pedestal.mp4", type: "video", title: "Off the Pedestal", subtitle: "The frame reset that flips the script" },
  { src: "/media/dating/be-unpredictable.mp4", type: "video", title: "Be Unpredictable", subtitle: "Why pattern interruption wins" },
  { src: "/media/dating/alex-dating-1.jpg", type: "image", title: "Live Date Footage", subtitle: "Alex on a Tuesday" },
  { src: "/media/dating/alex-dating-2.jpg", type: "image", title: "Mid Conversation", subtitle: "Voice low, posture loose" },
  { src: "/media/dating/dating-moment-1.jpg", type: "image", title: "First Drink", subtitle: "Setting the tempo" },
  { src: "/media/dating/dating-moment-2.jpg", type: "image", title: "The Hand Off", subtitle: "Walking her to the next venue" },
  { src: "/media/dating/dating-moment-3.jpg", type: "image", title: "After Hours", subtitle: "Closing the loop on a lead" },
  { src: "/media/dating/dating-moment-4.jpg", type: "image", title: "Read the Room", subtitle: "When to escalate, when to fade" },
];

export const LIFESTYLE_TILES: MediaTile[] = [
  { src: "/media/lifestyle/inspire.mp4", type: "video", title: "Inspire", subtitle: "The mindset reps that hold" },
  { src: "/media/lifestyle/god-first.mp4", type: "video", title: "God First", subtitle: "Identity before strategy" },
  { src: "/media/lifestyle/take-risks.mp4", type: "video", title: "Take Risks", subtitle: "How to size the bet" },
  { src: "/media/lifestyle/mentorship.mp4", type: "video", title: "Mentorship", subtitle: "Find one. Become one." },
  { src: "/media/lifestyle/insecure-men.mp4", type: "video", title: "Insecure Men", subtitle: "Spot it. Strip it. Walk on." },
  { src: "/media/lifestyle/weird-signs.mp4", type: "video", title: "Strange Signals", subtitle: "Reading rooms most men miss" },
  { src: "/media/lifestyle/alex-portrait-1.jpg", type: "image", title: "Alex", subtitle: "Looking forward" },
  { src: "/media/lifestyle/alex-portrait-2.jpg", type: "image", title: "Alex", subtitle: "Off the clock" },
  { src: "/media/lifestyle/alex-portrait-3.jpg", type: "image", title: "Alex", subtitle: "On the move" },
  { src: "/media/lifestyle/alex-lifestyle-1.jpg", type: "image", title: "Daily Frame", subtitle: "Off-duty, on-frame" },
  { src: "/media/lifestyle/alex-lifestyle-2.jpg", type: "image", title: "Off Duty", subtitle: "Tee, jacket, cup of coffee" },
  { src: "/media/lifestyle/axel-lifestyle-1.jpg", type: "image", title: "Axel", subtitle: "Daily uniform" },
  { src: "/media/lifestyle/axel-lifestyle-2.jpg", type: "image", title: "Axel", subtitle: "Travel mode" },
  { src: "/media/lifestyle/lifestyle-1.jpg", type: "image", title: "The Daily", subtitle: "Frame I" },
  { src: "/media/lifestyle/lifestyle-2.jpg", type: "image", title: "The Daily", subtitle: "Frame II" },
  { src: "/media/lifestyle/lifestyle-3.jpg", type: "image", title: "The Daily", subtitle: "Frame III" },
  { src: "/media/lifestyle/lifestyle-4.jpg", type: "image", title: "The Daily", subtitle: "Frame IV" },
  { src: "/media/lifestyle/lifestyle-5.jpg", type: "image", title: "The Daily", subtitle: "Frame V" },
];

export const GYM_TILES: MediaTile[] = [
  { src: "/media/gym/biceps-workout.mp4", type: "video", title: "Arms Day", subtitle: "Volume + control" },
  { src: "/media/gym/nutrition.mp4", type: "video", title: "Nutrition Decoded", subtitle: "Macros for your frame" },
  { src: "/media/gym/gym-1.jpg", type: "image", title: "Pull Day", subtitle: "Back width, posture, presence" },
  { src: "/media/gym/gym-2.jpg", type: "image", title: "Push Day", subtitle: "Chest, shoulders, triceps" },
  { src: "/media/gym/gym-3.jpg", type: "image", title: "Legs", subtitle: "The day you don't skip" },
  { src: "/media/gym/gym-4.jpg", type: "image", title: "Conditioning", subtitle: "Wind, posture, recovery" },
  { src: "/media/gym/gym-5.jpg", type: "image", title: "Form Check", subtitle: "Mirror reps, slow tempo" },
  { src: "/media/gym/gym-6.jpg", type: "image", title: "Rest, Recover, Repeat", subtitle: "Discipline outlasts motivation" },
];

export const THRONE_TILES: MediaTile[] = [
  { src: "/media/throne-room/fashion-tips.mp4", type: "video", title: "Fit Engineering", subtitle: "Inseam, shoulder, drape" },
  { src: "/media/throne-room/style-clip-1.mp4", type: "video", title: "Street Luxury", subtitle: "The casual uniform" },
  { src: "/media/throne-room/hero-video.mp4", type: "video", title: "The Standard", subtitle: "The default look" },
  { src: "/media/throne-room/axel-style-1.jpg", type: "image", title: "Axel · Look 01", subtitle: "Tailored, monochrome, confident" },
  { src: "/media/throne-room/alex-style-1.jpg", type: "image", title: "Alex · Look 02", subtitle: "Layered, textured, lived-in" },
  { src: "/media/throne-room/axel-style-2.jpg", type: "image", title: "Axel · Look 03", subtitle: "Sharp lines, soft palette" },
  { src: "/media/throne-room/style-1.jpg", type: "image", title: "Off-Duty", subtitle: "Casual silhouette" },
  { src: "/media/throne-room/style-2.jpg", type: "image", title: "Daytime", subtitle: "Linen, cotton, light" },
  { src: "/media/throne-room/style-3.jpg", type: "image", title: "Evening", subtitle: "Dark, sharp, deliberate" },
  { src: "/media/throne-room/portrait-1.jpg", type: "image", title: "Portrait", subtitle: "Head up. Eyes forward." },
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
