import { TESTIMONIALS } from "@/lib/testimonials";

export const AXEL_CALENDLY = "https://calendly.com/shortkingsempire/30min";

export const AXEL_PORTRAIT = "/media/gallery/Axel-27.JPG";

export const CREDIBILITY_STATS = [
  { value: "500+", label: "women approached over 5 years" },
  { value: "100+", label: "women approached in my first year" },
  { value: "5 years", label: "building and testing the system" },
  { value: "Hundreds", label: "dates, books, and reps" },
] as const;

export const FUNNEL_TESTIMONIALS = [
  ...TESTIMONIALS.filter((t) => t.id === "marcus-t" || t.id === "james-r"),
  ...TESTIMONIALS.filter((t) => t.id !== "marcus-t" && t.id !== "james-r"),
];

export const FUNNEL_FAQ = [
  {
    question: "Does this actually work if I'm under 5'6?",
    answer:
      "Yes. The system was built by a shorter man for shorter men. Height sets the opening frame. Your presence, your words, and your consistency close the gap. Members under 5'6 report more dates, better conversations, and less fear in the first month of reps.",
  },
  {
    question: "What makes this different from generic dating advice?",
    answer:
      "Most coaches are tall and teach from a frame you do not have. Short Kings covers approach, texting, profiles, style for shorter frames, and mindset without pretending inches do not matter. You get playbooks and coaching built for your reality.",
  },
  {
    question: "How quickly can I expect results?",
    answer:
      "Profile and texting fixes can show up within days. Approach confidence and date flow usually shift in the first few weeks if you run the reps. Coaching compresses the timeline because you get direct feedback instead of guessing alone.",
  },
  {
    question: "Do I need to already be confident or good-looking?",
    answer:
      "No. Most men start here because confidence is low and results have been flat. The work builds presence and skill in order. You do not need a perfect face. You need a system and the willingness to use it.",
  },
] as const;
