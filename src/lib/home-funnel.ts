export const AXEL_CALENDLY = "https://calendly.com/shortkingsempire/30min";

export const AXEL_PORTRAIT = "/media/gallery/Axel-27.JPG";

export const RESEARCH_STATS = [
  {
    id: "confidence",
    display: "percent" as const,
    end: 82,
    label: "of women say confidence outranks height",
    source: "Bumble Annual Dating Trends Report, 2024",
  },
  {
    id: "matches",
    display: "multiplier" as const,
    end: 3,
    label: "more matches when frame and presence read high status",
    source: "Hinge data study, 2023",
  },
  {
    id: "partners",
    display: "percent" as const,
    end: 67,
    label: "of long-term partners are within two inches of each other",
    source: "Pew Research",
  },
  {
    id: "predictors",
    display: "static" as const,
    staticValue: "Top 5",
    label:
      "predictors of attraction are voice, eye contact, posture, humor, and frame",
    source: "Journal of Personality and Social Psychology",
  },
] as const;

export const FUNNEL_PILLARS = [
  {
    name: "Beat the Algorithm",
    description: "The app was built against you. Here is how you build around it.",
  },
  {
    name: "Rebuild the Frame",
    description: "A thousand small hits brought you here. One system brings you back.",
  },
  {
    name: "Engineer Your Look",
    description: "Style for shorter men is a science. Here is the spec sheet.",
  },
  {
    name: "Command the Room",
    description:
      "Entry posture, voice tempo, the first ten seconds. That is where it is won.",
  },
] as const;

export const HOME_FUNNEL_TESTIMONIALS = [
  {
    id: "marcus-t",
    photo: "/media/testimonials/member-1.png",
    name: "Marcus T.",
    location: "5'6 · Dallas, TX",
    resultLabel: "First win: 21 days",
    quote:
      "My Hinge was embarrassing before this. Wrong photos, no bio, opening with hey. Axel rebuilt the whole thing. Within two weeks I had more matches than the previous six months combined.",
  },
  {
    id: "james-r",
    photo: "/media/testimonials/member-2.png",
    name: "James R.",
    location: "5'5 · Atlanta, GA",
    resultLabel: "First win: 14 days",
    quote:
      "I messaged Axel on a Thursday night panicking about a first date the next day. He walked me through the whole thing. Venue, how to open, when to go for the second date close. She texted me first the next morning.",
  },
  {
    id: "kevin-m",
    photo: "/media/testimonials/member-3.png",
    name: "Kevin M.",
    location: "5'8 · Puerto Rico",
    resultLabel: "First win: 60 days",
    quote:
      "Three months ago I had not been on a date in over a year. Axel fixed my Hinge, my approach, my texting, and my frame all at the same time. I am now seeing two women consistently and none of it feels forced.",
  },
] as const;

export const FUNNEL_FAQ = [
  {
    question: "Does this actually work if I'm under 5'6?",
    answer:
      "Yes. This was built by a shorter man for shorter men. Height is one variable. Presence, words, and reps are the ones you control. Men under 5'6 use the system to get more dates and sharper conversations when they run it consistently.",
  },
  {
    question: "What makes this different from generic dating advice?",
    answer:
      "Most advice comes from tall coaches teaching a frame you do not have. Here you get approach, texting, profiles, style for shorter bodies, and mindset work that respects your starting point. It is specific, not recycled TikTok tips.",
  },
  {
    question: "How quickly can I expect results?",
    answer:
      "Profile and texting changes can land within days. Confidence on approach usually shifts over a few weeks of reps. A coaching call speeds the curve because you get direct feedback on your real situations instead of guessing alone.",
  },
  {
    question: "Do I need to already be confident or good-looking?",
    answer:
      "No. Most men start with low confidence and flat results. The system builds skill and presence in order. You do not need model looks. You need willingness to show up and run the process.",
  },
] as const;
