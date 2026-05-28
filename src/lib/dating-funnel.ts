import {
  INNER_CIRCLE,
  SEVEN_PROTOCOLS,
  THE_EMPIRE,
  THE_PLAYBOOK,
} from "@/lib/site";

export type DatingFunnelAnswers = {
  height: "under-56" | "56-58" | "59-plus";
  pain: "apps" | "confidence" | "texting" | "everything";
  readiness: "exploring" | "starter" | "coaching" | "empire";
};

export type DatingFunnelRecommendationId =
  | "seven-protocols"
  | "the-playbook"
  | "inner-circle"
  | "the-empire";

export type DatingFunnelQuestion = {
  id: keyof DatingFunnelAnswers;
  prompt: string;
  subtitle: string;
  options: { value: DatingFunnelAnswers[keyof DatingFunnelAnswers]; label: string }[];
};

export const DATING_FUNNEL_QUESTIONS: DatingFunnelQuestion[] = [
  {
    id: "height",
    prompt: "Where do you land on height?",
    subtitle: "This system was built for shorter men — your frame shapes the playbook.",
    options: [
      { value: "under-56", label: "Under 5'6\"" },
      { value: "56-58", label: "5'6\" – 5'8\"" },
      { value: "59-plus", label: "5'9\" or taller (still want the edge)" },
    ],
  },
  {
    id: "pain",
    prompt: "What's costing you the most dates right now?",
    subtitle: "Pick the wall that feels loudest — we route you to the right starting move.",
    options: [
      { value: "apps", label: "Apps — matches die in the inbox" },
      { value: "confidence", label: "Approach & presence — I freeze up IRL" },
      { value: "texting", label: "Texting & dates — conversations fizzle" },
      { value: "everything", label: "All of the above — I need the full system" },
    ],
  },
  {
    id: "readiness",
    prompt: "How ready are you to invest in fixing this?",
    subtitle: "No wrong answer — we match the offer to where you are today.",
    options: [
      { value: "exploring", label: "Just exploring — want to start small" },
      { value: "starter", label: "Ready for a one-time bundle (~$185)" },
      { value: "coaching", label: "Want Axel in my corner monthly" },
      { value: "empire", label: "Done figuring it out — full transformation" },
    ],
  },
];

export type DatingFunnelRecommendation = {
  id: DatingFunnelRecommendationId;
  title: string;
  eyebrow: string;
  description: string;
  priceLabel: string;
  cta: string;
  href: string;
  typeform?: boolean;
  secondary?: { label: string; href: string }[];
};

export function recommendOffer(
  answers: DatingFunnelAnswers
): DatingFunnelRecommendation {
  if (answers.readiness === "empire") {
    return {
      id: "the-empire",
      title: THE_EMPIRE.title,
      eyebrow: THE_EMPIRE.eyebrow,
      description: THE_EMPIRE.description,
      priceLabel: `$${THE_EMPIRE.priceUsd} · ${THE_EMPIRE.cadence}`,
      cta: "Apply for The Empire",
      href: "/products#the-empire",
      typeform: true,
      secondary: [
        { label: "See The Inner Circle instead", href: "/products#inner-circle" },
      ],
    };
  }

  if (answers.readiness === "coaching") {
    return {
      id: "inner-circle",
      title: INNER_CIRCLE.title,
      eyebrow: INNER_CIRCLE.eyebrow,
      description: INNER_CIRCLE.description,
      priceLabel: `$${INNER_CIRCLE.priceUsd}${INNER_CIRCLE.cadence}`,
      cta: "Join The Inner Circle",
      href: "/products#inner-circle",
      secondary: [
        { label: "Start with The Playbook", href: "/products#the-playbook" },
      ],
    };
  }

  if (answers.readiness === "starter" || answers.pain === "everything") {
    return {
      id: "the-playbook",
      title: THE_PLAYBOOK.title,
      eyebrow: THE_PLAYBOOK.eyebrow,
      description: THE_PLAYBOOK.description,
      priceLabel: `$${THE_PLAYBOOK.priceUsd} one time`,
      cta: "Get The Playbook",
      href: "/products#the-playbook",
      secondary: [
        { label: "Start with 7 Protocols ($65)", href: "/products#seven-protocols" },
      ],
    };
  }

  return {
    id: "seven-protocols",
    title: SEVEN_PROTOCOLS.title,
    eyebrow: SEVEN_PROTOCOLS.eyebrow,
    description: SEVEN_PROTOCOLS.description,
    priceLabel: `$${SEVEN_PROTOCOLS.priceBundleUsd} for all 7`,
    cta: "Get the 7 Protocols",
    href: "/products#seven-protocols",
    secondary: [
      { label: "Skip to The Playbook", href: "/products#the-playbook" },
    ],
  };
}

export const DATING_FUNNEL_INTRO = {
  eyebrow: "2-minute assessment",
  title: "See what Axel would recommend for your situation.",
  subtitle:
    "Watch the 60-second clip, answer three questions, and get a personalized starting offer — built for shorter men coming from TikTok and Instagram.",
  videoSrc: "/media/dating/dating-funnel.mp4",
  videoPoster: "/media/video-poster.jpg",
} as const;
