"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type SyntheticEvent } from "react";
import { ArrowRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export type MediaTile = {
  src: string;
  /** Optional poster. Videos default to no poster, autoplaying as their own thumbnail. */
  poster?: string;
  type: "video" | "image";
  title: string;
  subtitle?: string;
};

type Props = {
  id: string;
  eyebrow: string;
  titleTop: string;
  titleHighlight: string;
  subtitle: string;
  tiles: MediaTile[];
  variant?: "default" | "throne";
  /** When set, shows a "See more" link in the section header. */
  fullPageHref?: string;
  fullPageLabel?: string;
  /** Cap the number of tiles shown (e.g. 4 on home, full set on dedicated page). */
  maxTiles?: number;
  /** Tap-to-play only; no viewport autoplay or loop. Pauses other tiles in this grid when one plays. */
  manualPlayback?: boolean;
};

export function MediaGrid({
  id,
  eyebrow,
  titleTop,
  titleHighlight,
  subtitle,
  tiles,
  variant = "default",
  fullPageHref,
  fullPageLabel,
  maxTiles,
  manualPlayback = false,
}: Props) {
  const visibleTiles = maxTiles ? tiles.slice(0, maxTiles) : tiles;
  const hasMore = maxTiles && tiles.length > maxTiles;
  const gridRef = useRef<HTMLDivElement | null>(null);

  const pauseOtherVideos = useCallback((current: HTMLVideoElement) => {
    gridRef.current?.querySelectorAll("video").forEach((v) => {
      if (v !== current) {
        v.pause();
      }
    });
  }, []);

  return (
    <section
      id={id}
      className={`py-24 ${
        variant === "throne"
          ? "bg-[radial-gradient(ellipse_at_center,rgba(75,0,130,0.18),transparent_70%)]"
          : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow={eyebrow}
              titleTop={titleTop}
              titleHighlight={titleHighlight}
              subtitle={subtitle}
            />
            {fullPageHref ? (
              <Link
                href={fullPageHref}
                className="group inline-flex items-center gap-2 self-start rounded-md border border-gold/40 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-gold hover:bg-white/[0.08] sm:self-end"
              >
                {fullPageLabel ?? "See more"}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
            ) : null}
          </div>
        </Reveal>

        <div ref={gridRef} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTiles.map((tile, i) => (
            <Reveal key={tile.src} stagger={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <Tile
                tile={tile}
                manualPlayback={manualPlayback}
                onPlayStart={pauseOtherVideos}
              />
            </Reveal>
          ))}
        </div>

        {hasMore && fullPageHref ? (
          <div className="mt-10 flex justify-center">
            <Link
              href={fullPageHref}
              className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-goldLight hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              See all {tiles.length} reels
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

type TileProps = {
  tile: MediaTile;
  manualPlayback: boolean;
  onPlayStart: (video: HTMLVideoElement) => void;
};

/** Seek to the first decodable frame so paused reels show a thumbnail, not black. */
function primeVideoPoster(video: HTMLVideoElement) {
  const target = video.duration && Number.isFinite(video.duration)
    ? Math.min(0.1, video.duration * 0.02)
    : 0.05;
  if (Math.abs(video.currentTime - target) < 0.001) {
    video.pause();
    return;
  }
  video.currentTime = target;
}

function captureFramePoster(video: HTMLVideoElement): string | null {
  if (video.videoWidth === 0 || video.videoHeight === 0) return null;
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.drawImage(video, 0, 0);
  try {
    return canvas.toDataURL("image/jpeg", 0.85);
  } catch {
    return null;
  }
}

function Tile({ tile, manualPlayback, onPlayStart }: TileProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [manuallyPaused, setManuallyPaused] = useState(manualPlayback);
  const [inView, setInView] = useState(!manualPlayback);
  const [framePoster, setFramePoster] = useState<string | null>(tile.poster ?? null);

  useEffect(() => {
    setFramePoster(tile.poster ?? null);
  }, [tile.src, tile.poster]);

  const refreshFramePoster = useCallback((video: HTMLVideoElement) => {
    const dataUrl = captureFramePoster(video);
    if (dataUrl) setFramePoster(dataUrl);
  }, []);

  useEffect(() => {
    if (tile.type !== "video" || !manualPlayback) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12, rootMargin: "80px 0px" }
    );
    io.observe(wrapper);
    return () => io.disconnect();
  }, [tile.type, manualPlayback]);

  useEffect(() => {
    if (tile.type !== "video" || !manualPlayback || !inView) return;
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => primeVideoPoster(video);
    const onSeeked = () => {
      video.pause();
      refreshFramePoster(video);
    };

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("seeked", onSeeked);
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) onLoaded();

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("seeked", onSeeked);
    };
  }, [tile.src, tile.type, manualPlayback, inView, refreshFramePoster]);

  useEffect(() => {
    if (tile.type !== "video" || manualPlayback) return;
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!wrapper || !video) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!manuallyPaused) video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(wrapper);
    return () => io.disconnect();
  }, [tile.type, manuallyPaused, manualPlayback]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      onPlayStart(v);
      setManuallyPaused(false);
      v.play().catch(() => {});
    } else {
      setManuallyPaused(true);
      v.pause();
      if (manualPlayback) primeVideoPoster(v);
    }
  };

  const handlePause = (e: SyntheticEvent<HTMLVideoElement>) => {
    setPlaying(false);
    if (manualPlayback) {
      const v = e.currentTarget;
      refreshFramePoster(v);
      primeVideoPoster(v);
    }
  };

  const handleEnded = () => {
    if (!manualPlayback) return;
    setManuallyPaused(true);
    const v = videoRef.current;
    if (v) {
      refreshFramePoster(v);
      primeVideoPoster(v);
    }
  };

  const showCenterPlay = manualPlayback && !playing;
  const thumbSrc = framePoster ?? tile.poster;
  const showThumb = manualPlayback && !playing && Boolean(thumbSrc);
  const videoSrc = manualPlayback ? (inView ? tile.src : undefined) : tile.src;

  return (
    <article
      ref={wrapperRef}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition hover:-translate-y-1 hover:border-gold/40"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        {tile.type === "video" ? (
          <>
            {showThumb ? (
              <img
                src={thumbSrc!}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
            ) : null}
            <video
              ref={videoRef}
              src={videoSrc}
              poster={thumbSrc ?? undefined}
              muted={muted}
              loop={!manualPlayback}
              playsInline
              preload={manualPlayback ? (inView ? "auto" : "none") : "metadata"}
              onPlay={() => setPlaying(true)}
              onPause={handlePause}
              onEnded={handleEnded}
              className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                showThumb ? "opacity-0" : "opacity-100"
              }`}
            />
          </>
        ) : (
          <img
            src={tile.src}
            alt={tile.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="font-royal text-sm font-bold uppercase tracking-[0.12em] text-white drop-shadow">
            {tile.title}
          </p>
          {tile.subtitle ? (
            <p className="mt-1 text-xs text-white/70">{tile.subtitle}</p>
          ) : null}
        </div>

        {tile.type === "video" ? (
          <>
            {showCenterPlay ? (
              <button
                type="button"
                onClick={togglePlay}
                aria-label={`Play ${tile.title}`}
                className="pointer-events-auto absolute inset-0 flex items-center justify-center"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-black shadow-[0_4px_24px_rgba(0,0,0,0.55)] ring-2 ring-black/40 transition group-hover:scale-105">
                  <Play className="h-6 w-6 translate-x-0.5" />
                </span>
              </button>
            ) : null}
            <div
              className={`pointer-events-auto absolute right-3 top-3 flex gap-2 ${
                manualPlayback ? "opacity-100" : "opacity-0 transition group-hover:opacity-100"
              }`}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label={playing ? "Pause" : "Play"}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-black"
              >
                {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const v = videoRef.current;
                  if (!v) return;
                  v.muted = !v.muted;
                  setMuted(v.muted);
                }}
                aria-label={muted ? "Unmute" : "Mute"}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur"
              >
                {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
              </button>
            </div>
          </>
        ) : null}
      </div>
    </article>
  );
}
