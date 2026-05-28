import { Reveal } from "@/components/ui/Reveal";
import { CREDIBILITY_STATS } from "@/lib/home-funnel";

export function FunnelCredibilityBar() {
  return (
    <section className="border-y border-white/10 bg-carbon py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {CREDIBILITY_STATS.map((stat, i) => (
            <Reveal key={stat.label} stagger={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="text-center sm:text-left">
                <p className="font-display text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
