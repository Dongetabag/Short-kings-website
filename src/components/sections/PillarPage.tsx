import Link from "next/link";
import { ArrowRight, Crown, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaGrid } from "@/components/sections/MediaGrid";
import type { PillarMeta } from "@/lib/media-pillars";
import type { MediaTile } from "@/components/sections/MediaGrid";
import { MANUAL_PLAYBACK_PILLARS, PILLAR_LIST } from "@/lib/media-pillars";
import { PILLAR_SLUG_THEME, PILLAR_THEME } from "@/lib/pillar-themes";
import { cn } from "@/lib/cn";

type Props = {
  pillar: PillarMeta;
  tiles: MediaTile[];
};

export function PillarPage({ pillar, tiles }: Props) {
  const others = PILLAR_LIST.filter((p) => p.slug !== pillar.slug);
  const reels = tiles.filter((t) => t.type === "video").length;
  const stills = tiles.filter((t) => t.type === "image").length;
  const themeKey = PILLAR_SLUG_THEME[pillar.slug];
  const theme = themeKey ? PILLAR_THEME[themeKey] : null;

  return (
    <>
      <section
        className={cn(
          "relative overflow-hidden border-b",
          theme?.sectionClass ?? "border-white/10"
        )}
      >
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <Reveal>
            <p className={cn("eyebrow", theme?.eyebrowClass)}>{pillar.pageEyebrow}</p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1] text-white sm:text-7xl">
              <span className="block not-italic font-medium">{pillar.pageTitleTop}</span>
              <span className={cn("block italic", theme?.highlightClass ?? "gold-gradient")}>
                {pillar.pageTitleHighlight}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              {pillar.pageSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/45">
              <span>{reels} reels</span>
              <span className="h-3 w-px bg-white/15" />
              <span>{stills} portraits</span>
              <span className="h-3 w-px bg-white/15" />
              <span>Updated weekly</span>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products#the-playbook"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-semibold text-black hover:bg-goldLight"
              >
                <Crown className="h-4 w-4" /> Get the full system
              </Link>
              <Link
                href="/portal/counsel"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/40 bg-white/[0.04] px-6 font-semibold text-white hover:bg-white/[0.08]"
              >
                <Sparkles className="h-4 w-4" /> Ask Counsel
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <MediaGrid
        theme={themeKey}
        id={pillar.slug}
        eyebrow={`${pillar.pageEyebrow} · The Reels`}
        titleTop="Watch"
        titleHighlight="the lessons."
        subtitle={
          MANUAL_PLAYBACK_PILLARS.includes(pillar.slug)
            ? "Press play on any reel. Only one plays at a time — no autoplay."
            : "Every clip is a lesson. Tap to unmute. Browse end to end or jump by chapter."
        }
        tiles={tiles}
        manualPlayback={MANUAL_PLAYBACK_PILLARS.includes(pillar.slug)}
      />

      <section className="border-y border-white/10 bg-white/[0.015] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionHeader
              eyebrow="Lessons"
              titleTop="Inside"
              titleHighlight="this pillar."
              subtitle="The chapters of this pillar, distilled. Read the principle. Train the rep."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillar.chapters.map((c, i) => (
              <Reveal
                key={c.title}
                stagger={(((i % 3) + 1) as 1 | 2 | 3 | 4)}
              >
                <article className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-7">
                  <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
                  <p className="font-royal text-3xl font-black text-gold/30">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {c.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <SectionHeader
              eyebrow="Cross-train"
              titleTop="The other"
              titleHighlight="pillars."
              subtitle="The four pillars are connected. One reinforces the next."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <Reveal key={p.slug}>
                <Link
                  href={p.href}
                  className="group relative block h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-7 transition hover:-translate-y-1 hover:border-gold/40"
                >
                  <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
                  <p className="eyebrow">{p.pageEyebrow}</p>
                  <p className="mt-3 font-royal text-2xl font-black uppercase leading-tight text-white">
                    {p.pageTitleTop} <span className="gold-gradient">{p.pageTitleHighlight}</span>
                  </p>
                  <p className="mt-3 text-sm text-white/60">{p.homeSubtitle}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:gap-3">
                    {p.ctaLabel} <ArrowRight className="h-4 w-4" />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
