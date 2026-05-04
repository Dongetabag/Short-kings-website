import Link from "next/link";
import { Crown, Quote, Sparkles, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS, type Testimonial } from "@/lib/testimonials";

export const metadata = {
  title: "The Royal Court",
  description:
    "Testimonies from crowned Kings. Real heights, real cities, real outcomes.",
};

const PROOF_IMAGES = [
  "/media/testimonials/testimonial-1.jpg",
  "/media/testimonials/testimonial-2.jpg",
  "/media/testimonials/testimonial-3.jpg",
  "/media/testimonials/testimonial-4.jpg",
  "/media/testimonials/success-1.jpg",
];

export default function TestimonialsPage() {
  const total = TESTIMONIALS.length;
  const fives = TESTIMONIALS.filter((t) => t.rating === 5).length;
  const avgDays = Math.round(
    TESTIMONIALS.reduce((acc, t) => acc + t.daysIn, 0) / total
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.16),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">The Royal Court</p>
            <h1 className="mt-3 font-royal text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-7xl">
              <span className="block">Testimonies from</span>
              <span className="block gold-gradient drop-shadow-[0_0_24px_rgba(212,175,55,0.25)]">
                Crowned Kings
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Real men. Real heights. Real outcomes. Every voice in the Court has run the
              Empire&apos;s playbook end to end. No actors, no stock smiles, no AI faces.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Stat label="Voices in the Court" value={total.toString()} />
              <Stat label="Five-star testimonies" value={`${fives} / ${total}`} />
              <Stat label="Average days to first win" value={`${avgDays} days`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-b border-white/10 bg-black/40 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-center">Snapshots from the Court</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {PROOF_IMAGES.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-lg border border-white/10 aspect-square"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.22em] text-white/30">
            Live event footage. Real Kings replacing placeholders as they opt in.
          </p>
        </div>
      </section>

      {/* Testimony grid */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionHeader
              eyebrow="Every voice"
              titleTop="The Court,"
              titleHighlight="In Their Own Words."
              subtitle="Filter by Realm coming when the Court doubles in size. For now, every testimony, every product, in order of induction."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.id} stagger={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <Card t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-gold/15 bg-gradient-to-b from-obsidian via-stoneDeep to-obsidian py-24">
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <Crown className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-4 font-royal text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
              <span className="block">Add your name</span>
              <span className="block gold-gradient">to the Court.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-white/65">
              Run the playbook. Send us the win. Earn a title.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/products#bundle"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-semibold text-black hover:bg-goldLight"
              >
                <Crown className="h-4 w-4" /> Take the Empire Bundle
              </Link>
              <Link
                href="/portal/counsel"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/40 bg-white/[0.04] px-7 font-semibold text-white hover:bg-white/[0.08]"
              >
                <Sparkles className="h-4 w-4" /> Open the Counsel
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-5">
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <p className="font-royal text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
        {label}
      </p>
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-7">
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />

      <div className="flex items-center justify-between">
        <Quote className="h-6 w-6 text-gold/60" />
        <span className="rounded-full border border-gold/30 bg-gold/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-gold">
          {t.product}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-1 text-gold">
        {Array.from({ length: t.rating }).map((_, idx) => (
          <Star key={idx} className="h-3.5 w-3.5 fill-gold" />
        ))}
      </div>

      <p className="mt-4 text-sm leading-7 text-white/80">{t.quote}</p>

      <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-goldDark font-royal text-lg font-black text-black ring-1 ring-gold/40">
          {t.initial}
        </div>
        <div className="leading-tight">
          <p className="font-royal text-sm font-bold text-white">{t.name}</p>
          <p className="text-xs text-white/50">
            {t.height} · {t.city}
          </p>
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-gold/70">
            {t.title} · {t.daysIn} days in
          </p>
        </div>
      </footer>
    </article>
  );
}
