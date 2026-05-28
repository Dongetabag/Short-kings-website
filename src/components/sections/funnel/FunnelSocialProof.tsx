import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HOME_FUNNEL_TESTIMONIALS } from "@/lib/home-funnel";

export function FunnelSocialProof() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {HOME_FUNNEL_TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} stagger={(i + 1) as 1 | 2 | 3}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-stone/40">
                <div className="relative aspect-[4/3] w-full bg-black">
                  <Image
                    src={t.photo}
                    alt=""
                    fill
                    className="object-contain object-center p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/80">
                    {t.resultLabel}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-white/80">
                    {t.quote}
                  </p>
                  <footer className="mt-5 border-t border-white/10 pt-4">
                    <p className="font-display text-sm font-bold text-white">
                      {t.name.split(" ")[0]}
                    </p>
                    <p className="mt-1 text-xs text-white/50">{t.location}</p>
                  </footer>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              href="/testimonials"
              className="group inline-flex items-center gap-2 rounded-sm border border-gold/40 bg-white/[0.04] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-gold hover:bg-white/[0.08]"
            >
              See all reviews
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
