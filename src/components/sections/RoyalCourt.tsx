import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS, MEMBER_SNAPSHOTS } from "@/lib/testimonials";

export function RoyalCourt() {
  const featured = TESTIMONIALS;

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Reviews"
              titleTop="Real men."
              titleHighlight="Real results."
              subtitle="What members are saying after running the system. Names, heights, and outcomes preserved."
            />
            <Link
              href="/testimonials"
              className="group inline-flex items-center gap-2 self-start rounded-md border border-gold/40 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-gold hover:bg-white/[0.08] sm:self-end"
            >
              Read every review
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10">
            <p className="eyebrow text-center">Snapshots from members</p>
            <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {MEMBER_SNAPSHOTS.map((src, i) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-lg border border-white/10 bg-black aspect-[4/3]"
                >
                  <Image
                    src={src}
                    alt={`Member transformation ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((t, i) => (
            <Reveal key={t.id} stagger={(i + 1) as 1 | 2 | 3 | 4}>
              <article className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-7">
                <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
                <Quote className="h-6 w-6 text-gold/60" />

                <div className="mt-3 flex items-center gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-gold" />
                  ))}
                </div>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold/80">
                  {t.product}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/80">{t.quote}</p>

                <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDark font-royal text-base font-black text-black ring-1 ring-gold/40">
                    {t.initial}
                  </div>
                  <div className="leading-tight">
                    <p className="font-royal text-sm font-bold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/50">
                      {t.height} · {t.city}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/40">
                      {t.title} · {t.daysIn} days in
                    </p>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.22em] text-white/30">
          Real member before-and-after snapshots from the Short Kings system.
        </p>
      </div>
    </section>
  );
}
