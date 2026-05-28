import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { FUNNEL_TESTIMONIALS } from "@/lib/home-funnel";

export function FunnelSocialProof() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-5 sm:grid-cols-2">
          {FUNNEL_TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} stagger={(i + 1) as 1 | 2 | 3 | 4}>
              <article className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-6 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
                <Quote className="h-6 w-6 text-gold/60" aria-hidden />
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold/80">
                  {t.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/80">{t.quote}</p>
                <footer className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-display text-sm font-bold text-white">
                    {t.name.split(" ")[0]}
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    {t.height} · {t.city}
                  </p>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
