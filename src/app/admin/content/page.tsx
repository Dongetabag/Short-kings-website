import { Edit3, Eye, Plus, Upload } from "lucide-react";
import { EBOOKS, FITNESS_PROGRAMS } from "@/lib/products";
import {
  DATING_TILES,
  GYM_TILES,
  LIFESTYLE_TILES,
  PILLARS,
  THRONE_TILES,
} from "@/lib/media-pillars";
import { TESTIMONIALS } from "@/lib/testimonials";
import { POSTS } from "@/lib/journal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

export const metadata = { title: "Content · Admin" };

const REALM_ROWS = [
  { meta: PILLARS.dating, tiles: DATING_TILES },
  { meta: PILLARS.lifestyle, tiles: LIFESTYLE_TILES },
  { meta: PILLARS.gym, tiles: GYM_TILES },
  { meta: PILLARS["throne-room"], tiles: THRONE_TILES },
];

export default function ContentPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        eyebrow="The Royal Library"
        titleTop="Content"
        titleHighlight="Management."
        subtitle="Every public Realm, ebook, fitness program, testimony, and journal post in one place. Phase 2 backs each row with a database. For now this is a live read of the source files."
      />

      {/* Quick actions */}
      <div className="mt-10 grid gap-3 sm:grid-cols-4">
        <Action icon={Plus} label="New Reel" />
        <Action icon={Upload} label="Upload Photo" />
        <Action icon={Edit3} label="New Ebook" />
        <Action icon={Edit3} label="New Journal" />
      </div>

      {/* Realms */}
      <section className="mt-14">
        <header className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The Four Realms</p>
            <p className="mt-1 text-sm text-white/55">
              Each Realm is a public page plus a media set. Click "View" to open
              the live page in a new tab.
            </p>
          </div>
        </header>
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-stone/40">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03] text-left text-[11px] uppercase tracking-[0.18em] text-white/45">
                <th className="px-5 py-3">Realm</th>
                <th className="px-5 py-3">Slug</th>
                <th className="px-5 py-3 text-right">Reels</th>
                <th className="px-5 py-3 text-right">Stills</th>
                <th className="px-5 py-3 text-right">Tiles</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {REALM_ROWS.map(({ meta, tiles }) => {
                const reels = tiles.filter((t) => t.type === "video").length;
                const stills = tiles.filter((t) => t.type === "image").length;
                return (
                  <tr key={meta.slug}>
                    <td className="px-5 py-4 font-medium text-white">
                      {meta.navLabel}
                    </td>
                    <td className="px-5 py-4 font-mono text-xs text-white/55">
                      {meta.href}
                    </td>
                    <td className="px-5 py-4 text-right text-gold">{reels}</td>
                    <td className="px-5 py-4 text-right text-white/65">{stills}</td>
                    <td className="px-5 py-4 text-right text-white">
                      {tiles.length}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        href={meta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-gold hover:gap-2"
                      >
                        <Eye className="h-3 w-3" /> View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ebooks */}
      <section className="mt-14">
        <header>
          <p className="eyebrow">Ebooks ({EBOOKS.length})</p>
          <p className="mt-1 text-sm text-white/55">
            Five playbooks shipping inside the Empire Bundle. Twenty dollars each
            á la carte.
          </p>
        </header>
        <div className="mt-6 grid gap-3">
          {EBOOKS.map((p) => (
            <Row
              key={p.id}
              title={p.title}
              meta={p.tagline}
              tag={`$${p.priceUsd}`}
              tagTone="gold"
              href={p.file?.href}
            />
          ))}
        </div>
      </section>

      {/* Fitness */}
      <section className="mt-14">
        <header>
          <p className="eyebrow">Fitness Programs ({FITNESS_PROGRAMS.length})</p>
          <p className="mt-1 text-sm text-white/55">
            Free programs from the Royal Treasury. Lead magnet plus bundle bonus.
          </p>
        </header>
        <div className="mt-6 grid gap-3">
          {FITNESS_PROGRAMS.map((p) => (
            <Row
              key={p.id}
              title={p.title}
              meta={p.tagline}
              tag="Free"
              tagTone="emerald"
              href={p.file?.href}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-14">
        <header>
          <p className="eyebrow">Royal Court ({TESTIMONIALS.length})</p>
          <p className="mt-1 text-sm text-white/55">
            Voices on the public testimonies page. Real headshots replace
            placeholder gradients as Kings opt in.
          </p>
        </header>
        <div className="mt-6 grid gap-3">
          {TESTIMONIALS.map((t) => (
            <Row
              key={t.id}
              title={`${t.name} · ${t.height} · ${t.city}`}
              meta={t.title}
              tag={t.product}
              tagTone="gold"
            />
          ))}
        </div>
      </section>

      {/* Journal */}
      <section className="mt-14">
        <header>
          <p className="eyebrow">Journal ({POSTS.length})</p>
          <p className="mt-1 text-sm text-white/55">
            Tactical posts in the public Journal. New post every Wednesday.
          </p>
        </header>
        <div className="mt-6 grid gap-3">
          {POSTS.map((p) => (
            <Row
              key={p.slug}
              title={p.title}
              meta={`${p.category} · ${p.readMinutes} min · ${p.publishedAt}`}
              tag="Live"
              tagTone="emerald"
              href={`/journal/${p.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function Action({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/40 bg-white/[0.04] px-4 text-sm font-semibold text-white hover:bg-white/[0.08]">
      <Icon className="h-4 w-4 text-gold" /> {label}
    </button>
  );
}

function Row({
  title,
  meta,
  tag,
  tagTone,
  href,
}: {
  title: string;
  meta: string;
  tag: string;
  tagTone: "gold" | "emerald";
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-stone/40 p-4 text-sm">
      <div className="min-w-0">
        <p className="truncate text-white">{title}</p>
        <p className="truncate text-xs text-white/50">{meta}</p>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] ${
            tagTone === "gold"
              ? "border-gold/30 bg-gold/[0.08] text-gold"
              : "border-emerald/30 bg-emerald/10 text-emerald"
          }`}
        >
          {tag}
        </span>
        {href ? (
          <Link
            href={href}
            className="text-xs text-white/50 hover:text-white"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            View
          </Link>
        ) : (
          <span className="text-xs text-white/50">Edit</span>
        )}
      </div>
    </div>
  );
}
