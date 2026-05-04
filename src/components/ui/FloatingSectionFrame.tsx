import type { LucideIcon } from "lucide-react";
import {
  Crown,
  Flame,
  Gem,
  Heart,
  Shield,
  Sparkles,
  Swords,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/cn";

type DecorItem = {
  Icon: LucideIcon;
  className: string;
};

const PRESET_ICONS: Record<string, DecorItem[]> = {
  hero: [
    { Icon: Crown, className: "left-[0%] top-[10%] -rotate-12 max-lg:hidden" },
    { Icon: Sparkles, className: "right-[1%] top-[28%] rotate-6 max-lg:hidden" },
    { Icon: Gem, className: "right-[4%] bottom-[20%] -rotate-6 max-xl:hidden" },
  ],
  stats: [
    { Icon: TrendingUp, className: "left-[0%] top-[22%] -rotate-6 max-lg:hidden" },
    { Icon: Target, className: "right-[2%] top-[30%] rotate-12 max-lg:hidden" },
  ],
  pain: [
    { Icon: Shield, className: "left-[1%] top-[25%] -rotate-8 max-lg:hidden" },
    { Icon: Zap, className: "right-[0%] bottom-[32%] rotate-6 max-xl:hidden" },
  ],
  media: [
    { Icon: Heart, className: "left-[0%] top-[35%] -rotate-6 max-xl:hidden" },
    { Icon: Flame, className: "right-[1%] top-[18%] rotate-12 max-lg:hidden" },
  ],
  proof: [
    { Icon: Crown, className: "left-[1%] bottom-[25%] -rotate-12 max-xl:hidden" },
    { Icon: Sparkles, className: "right-[2%] top-[22%] rotate-6 max-lg:hidden" },
  ],
  offer: [
    { Icon: Swords, className: "left-[0%] top-[20%] -rotate-6 max-lg:hidden" },
    { Icon: Gem, className: "right-[0%] bottom-[24%] rotate-12 max-xl:hidden" },
  ],
  counsel: [
    { Icon: Sparkles, className: "left-[1%] top-[30%] -rotate-12 max-lg:hidden" },
    { Icon: Crown, className: "right-[2%] top-[24%] rotate-6 max-xl:hidden" },
  ],
  close: [
    { Icon: Crown, className: "left-[2%] top-[40%] -rotate-8 max-xl:hidden" },
    { Icon: Target, className: "right-[2%] top-[38%] rotate-6 max-xl:hidden" },
  ],
};

type PresetKey = keyof typeof PRESET_ICONS;

type Props = {
  children: React.ReactNode;
  preset: PresetKey;
  className?: string;
};

/**
 * Loose side icons: large, low-opacity Lucide stamps off the grid (funnel pacing).
 */
export function FloatingSectionFrame({ children, preset, className }: Props) {
  const items = PRESET_ICONS[preset] ?? [];

  return (
    <div className={cn("relative", className)}>
      {items.map(({ Icon, className: pos }, i) => (
        <span
          key={`${preset}-${i}`}
          aria-hidden
          className={cn(
            "pointer-events-none absolute z-0 select-none text-gold/[0.11]",
            pos
          )}
        >
          <Icon className="h-14 w-14 xl:h-[4.5rem] xl:w-[4.5rem]" strokeWidth={1} />
        </span>
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
