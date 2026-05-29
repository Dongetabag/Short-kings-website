import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Funnel Playbook" };

const SECTIONS = [
  {
    name: "Hero + proof chip",
    route: "/",
    job: "Stop the scroll, state the transformation, show scale (community count), and park attention on the phone hero clip.",
    copyNotes:
      "Headline is identity-first (Short Kings Empire), not feature-first. Subhead reframes height as story, not sentence.",
    assets: "/media/hero-video.mp4, /media/logo.png, /media/video-poster.jpg",
  },
  {
    name: "Research-backed authority",
    route: "/# (stats band)",
    job: "Borrow third-party credibility before we sell. The brain accepts our claims when data arrives first.",
    copyNotes:
      "Percent stats and named sources. Short sentences. No hype words. This band is Eleven Views 'trust before tension'.",
    assets: "Text-only section (icons from Lucide)",
  },
  {
    name: "The Challenge (pain)",
    route: "/#challenge",
    job: "Name four walls (apps, confidence, style, dynamics) so the visitor feels understood before the solution.",
    copyNotes:
      "Lead with the 94% pain callout, then four cards. Pain before product is mandatory for this funnel.",
    assets: "Lucide icons per card",
  },
  {
    name: "Pillar media (preview)",
    route: "/#dating, #lifestyle, #gym, #throne-room",
    job: "Prove density of value: reels and stills for every pillar. This is 'see the goods' before price.",
    copyNotes:
      "Each grid uses six curated tiles. Subtitles promise outcomes (approach, faith-first identity, training, fit engineering).",
    assets:
      "/media/dating/*, /media/lifestyle/*, /media/gym/*, /media/throne-room/* (mirrors shortkings-empire/media)",
  },
  {
    name: "Reviews (social proof)",
    route: "/#testimonials",
    job: "Peer proof after they have seen the product surface. Photos from /media/testimonials when available.",
    copyNotes:
      "Quoted outcomes with height and city for specificity. Disclaimer line stays until live testimonials ship.",
    assets: "/media/testimonials/testimonial-*.jpg",
  },
  {
    name: "Products (offer)",
    route: "/#products",
    job: "First hard merchandising: bundle as hero card, then singles, then high-ticket Calendly.",
    copyNotes:
      "Price anchors, scarcity language avoided (per brand). Stripe links resolve when env vars are set.",
    assets: "Pricing cards only",
  },
  {
    name: "Final CTA",
    route: "/ (footer zone)",
    job: "Binary choice: get the bundle or book a call. No new information, only commitment.",
    copyNotes: "Crown icon, gold gradient headline, two buttons max.",
    assets: "Crown mask / Lucide",
  },
  {
    name: "Gallery (full archive)",
    route: "/gallery",
    job: "Every synced asset under public/media plus pillar tiles. Filters: pillar, photos, videos, archive, reviews, reels.",
    copyNotes:
      "Regenerate src/lib/media-catalog.json after adding files: npm run media:catalog",
    assets: "126+ files after sync from shortkings-empire/media",
  },
];

export default function FunnelPlaybookPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <Reveal>
        <SectionHeader
          eyebrow="Staff only"
          titleTop="Homepage"
          titleHighlight="Funnel Playbook"
          subtitle="Use this to brief editors, media, and admins. Order matches the live page. Psychology notes mirror the Eleven Views funnel cadence: trust, tension, proof, preview, offer, assist, close."
        />
      </Reveal>

      <ol className="mt-12 space-y-8">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.name} stagger={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
            <li className="relative overflow-hidden rounded-xl border border-ruby/25 bg-stone/40 p-6">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <p className="font-royal text-xs font-bold text-ruby">
                {String(i + 1).padStart(2, "0")} · {s.name}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
                {s.route}
              </p>
              <p className="mt-3 text-sm font-semibold text-white">Job to be done</p>
              <p className="mt-1 text-sm leading-7 text-white/70">{s.job}</p>
              <p className="mt-3 text-sm font-semibold text-white">Copy and format</p>
              <p className="mt-1 text-sm leading-7 text-white/70">{s.copyNotes}</p>
              <p className="mt-3 text-sm font-semibold text-white">Primary assets</p>
              <p className="mt-1 text-xs leading-6 text-white/55">{s.assets}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <div className="mt-12 rounded-xl border border-white/10 bg-stoneDeep/60 p-6">
          <p className="eyebrow">Sync workflow</p>
          <p className="mt-2 text-sm leading-7 text-white/70">
            Drop new clips into the Short Kings media tree, rsync from{" "}
            <code className="rounded bg-white/5 px-1 text-gold">shortkings-empire/media</code> into{" "}
            <code className="rounded bg-white/5 px-1 text-gold">public/media</code>, then run{" "}
            <code className="rounded bg-white/5 px-1 text-gold">npm run media:catalog</code> so the gallery and staff counts stay accurate.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
