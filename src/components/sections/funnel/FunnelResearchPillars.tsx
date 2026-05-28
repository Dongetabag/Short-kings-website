"use client";

import type { ReactNode } from "react";
import { RESEARCH_STATS, FUNNEL_PILLARS } from "@/lib/home-funnel";
import { useCountUp, useInViewOnce } from "@/hooks/useCountUp";

function AnimatedStat({
  stat,
  enabled,
}: {
  stat: (typeof RESEARCH_STATS)[number];
  enabled: boolean;
}) {
  const count = useCountUp({
    end: stat.display === "static" ? 0 : stat.end,
    enabled: enabled && stat.display !== "static",
  });

  let valueNode: ReactNode;
  if (stat.display === "static") {
    valueNode = stat.staticValue;
  } else if (stat.display === "percent") {
    valueNode = `${count}%`;
  } else {
    valueNode = `${count}x`;
  }

  return (
    <div className="rounded-lg border border-white/10 bg-stone/30 px-3 py-4 sm:px-4 sm:py-5">
      <p className="font-display text-3xl font-bold leading-none text-white sm:text-4xl">
        {valueNode}
      </p>
      <p className="mt-2 text-[11px] leading-snug text-white/55 sm:text-xs">
        {stat.label}
      </p>
      <p className="mt-1.5 text-[9px] uppercase tracking-[0.14em] text-white/30">
        {stat.source}
      </p>
    </div>
  );
}

export function FunnelResearchPillars() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section ref={ref} className="border-y border-white/10 bg-panel py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {RESEARCH_STATS.map((stat) => (
            <AnimatedStat key={stat.id} stat={stat} enabled={inView} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
          {FUNNEL_PILLARS.map((pillar) => (
            <article
              key={pillar.name}
              className="rounded-lg border border-gold/15 bg-stone/25 px-4 py-3.5 sm:py-4"
            >
              <h3 className="font-display text-sm font-bold text-white sm:text-base">
                {pillar.name}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/60 sm:text-sm">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
