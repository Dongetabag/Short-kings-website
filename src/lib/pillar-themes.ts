export type PillarTheme = "dating" | "lifestyle" | "gym" | "style";

export type PillarThemeConfig = {
  sectionClass: string;
  eyebrowClass: string;
  highlightClass: string;
  linkClass: string;
  ctaClass: string;
  tileBorderClass: string;
  tileHoverBorderClass: string;
  playButtonClass: string;
};

export const PILLAR_THEME: Record<PillarTheme, PillarThemeConfig> = {
  dating: {
    sectionClass: "pillar-section pillar-dating",
    eyebrowClass: "text-ruby",
    highlightClass: "text-gradient-ruby",
    linkClass:
      "border-ruby/50 bg-ruby/10 text-white hover:border-ruby hover:bg-ruby/20",
    ctaClass: "bg-ruby text-white hover:bg-red-600",
    tileBorderClass: "border-ruby/25",
    tileHoverBorderClass: "hover:border-ruby/60",
    playButtonClass: "bg-ruby text-white ring-ruby/40",
  },
  lifestyle: {
    sectionClass: "pillar-section pillar-lifestyle",
    eyebrowClass: "text-gold",
    highlightClass: "gold-gradient",
    linkClass:
      "border-gold/50 bg-gold/10 text-white hover:border-gold hover:bg-gold/20",
    ctaClass: "bg-gold text-black hover:bg-goldLight",
    tileBorderClass: "border-gold/25",
    tileHoverBorderClass: "hover:border-gold/60",
    playButtonClass: "bg-gold text-black ring-gold/40",
  },
  gym: {
    sectionClass: "pillar-section pillar-gym",
    eyebrowClass: "text-blue-400",
    highlightClass: "text-gradient-blue",
    linkClass:
      "border-blue-500/50 bg-blue-500/10 text-white hover:border-blue-400 hover:bg-blue-500/20",
    ctaClass: "bg-blue-600 text-white hover:bg-blue-500",
    tileBorderClass: "border-blue-500/25",
    tileHoverBorderClass: "hover:border-blue-400/60",
    playButtonClass: "bg-blue-500 text-white ring-blue-400/40",
  },
  style: {
    sectionClass: "pillar-section pillar-style",
    eyebrowClass: "text-white/50",
    highlightClass: "text-gradient-platinum",
    linkClass:
      "border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
    ctaClass: "bg-white text-black hover:bg-white/90",
    tileBorderClass: "border-white/15",
    tileHoverBorderClass: "hover:border-white/40",
    playButtonClass: "bg-white text-black ring-white/30",
  },
};

export const PILLAR_SLUG_THEME: Record<string, PillarTheme> = {
  dating: "dating",
  lifestyle: "lifestyle",
  gym: "gym",
  "throne-room": "style",
};
