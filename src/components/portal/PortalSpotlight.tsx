"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Play, Pause, ArrowRight } from "lucide-react";

export function PortalSpotlight({ sources }: { sources: string[] }) {
  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">From the Court</p>
          <h2 className="mt-2 font-royal text-2xl font-bold text-white">
            Continue the climb
          </h2>
          <p className="mt-1 text-sm text-white/55">
            Reels pulled from the same vault as the public gallery.
          </p>
        </div>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3"
        >
          Open full archive <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sources.map((src) => (
          <SpotlightTile key={src} src={src} />
        ))}
      </div>
    </section>
  );
}

function SpotlightTile({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const label = src
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ") ?? "Reel";

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-stone/40">
      <div className="absolute inset-x-0 top-0 z-10 h-px crown-hairline" />
      <div className="relative aspect-video bg-black">
        <video
          ref={ref}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <button
          type="button"
          onClick={() => {
            const v = ref.current;
            if (!v) return;
            if (v.paused) void v.play();
            else v.pause();
          }}
          aria-label={playing ? "Pause" : "Play"}
          className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold text-black shadow-lg"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <p className="absolute bottom-3 right-3 max-w-[65%] text-right font-royal text-xs font-bold uppercase tracking-wide text-white">
          {label}
        </p>
      </div>
    </article>
  );
}
