import { TrendingUp, Users, Award, BookOpen } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STATS = [
  {
    icon: TrendingUp,
    value: "82%",
    label: "of women in 2024 surveys say confidence outranks height",
    source: "Bumble Annual Dating Trends Report",
  },
  {
    icon: Users,
    value: "3x",
    label: "more matches when frame and presence read 'high status'",
    source: "Hinge data study, 2023",
  },
  {
    icon: Award,
    value: "67%",
    label: "of long-term partners are within two inches of each other",
    source: "Pew Research, partnership norms",
  },
  {
    icon: BookOpen,
    value: "Top 5",
    label: "predictors of attraction: voice, eye contact, posture, humor, frame",
    source: "Journal of Personality and Social Psychology",
  },
];

export function StatsAuthority() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Research-Backed"
            titleTop="The Science"
            titleHighlight="They Don't Want You to Know"
            subtitle="Confidence outperforms inches. Frame outperforms biology. The data is on your side. Most men just never read it."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.value} stagger={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="relative h-full overflow-hidden rounded-xl border border-gold/20 bg-stone/40 p-6 transition hover:-translate-y-1 hover:border-gold/40">
                <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
                <stat.icon className="h-6 w-6 text-gold" />
                <p className="mt-4 font-royal text-4xl font-black text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65">{stat.label}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white/30">
                  {stat.source}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
