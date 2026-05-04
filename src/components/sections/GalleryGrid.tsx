"use client";

import { useMemo, useState } from "react";
import type { MediaTile } from "@/components/sections/MediaGrid";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef } from "react";

type Category =
  | "dating"
  | "lifestyle"
  | "gym"
  | "throne-room"
  | "gallery"
  | "testimonials"
  | "root";
type Tile = MediaTile & { category: Category };

const FILTERS: { id: "all" | "videos" | "photos" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "videos", label: "Videos" },
  { id: "photos", label: "Photos" },
  { id: "dating", label: "Dating" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "gym", label: "Gym" },
  { id: "throne-room", label: "Style" },
  { id: "gallery", label: "Archive" },
  { id: "testimonials", label: "Court" },
  { id: "root", label: "Reels" },
];

export function GalleryGrid({ tiles }: { tiles: Tile[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]["id"]>("all");

  const filtered = useMemo(() => {
    if (active === "all") return tiles;
    if (active === "videos") return tiles.filter((t) => t.type === "video");
    if (active === "photos") return tiles.filter((t) => t.type === "image");
    return tiles.filter((t) => t.category === active);
  }, [active, tiles]);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`inline-flex h-9 items-center rounded-md border px-4 text-xs font-semibold uppercase tracking-[0.16em] transition ${
              active === f.id
                ? "border-gold bg-gold text-black"
                : "border-white/15 bg-white/[0.03] text-white/70 hover:border-gold/40 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tile) => (
          <GalleryTile key={tile.src} tile={tile} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-white/40">
          No media in this realm yet. Check back as the Court grows.
        </p>
      ) : null}
    </>
  );
}

function GalleryTile({ tile }: { tile: Tile }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <article
      onMouseEnter={() => {
        if (tile.type === "video") ref.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        if (tile.type === "video" && ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-stone/40 transition hover:-translate-y-1 hover:border-gold/40"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {tile.type === "video" ? (
          <video
            ref={ref}
            src={tile.src}
            poster={tile.poster}
            muted={muted}
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <img
            src={tile.src}
            alt={tile.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="font-royal text-sm font-bold uppercase tracking-[0.12em] text-white">
            {tile.title}
          </p>
          {tile.subtitle ? (
            <p className="mt-1 text-xs text-white/65">{tile.subtitle}</p>
          ) : null}
        </div>
        {tile.type === "video" ? (
          <div className="pointer-events-auto absolute right-3 top-3 flex gap-2 opacity-0 transition group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.stopPropagation();
                const v = ref.current;
                if (!v) return;
                if (v.paused) v.play().catch(() => {});
                else v.pause();
              }}
              aria-label={playing ? "Pause" : "Play"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-black"
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const v = ref.current;
                if (!v) return;
                v.muted = !v.muted;
                setMuted(v.muted);
              }}
              aria-label={muted ? "Unmute" : "Mute"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white"
            >
              {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
