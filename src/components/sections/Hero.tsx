"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Crown, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { SITE } from "@/lib/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-purple/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold tracking-[0.28em] text-gold">
              <Crown className="h-4 w-4" />
              BUILT FOR SHORT KINGS
            </span>

            <h1 className="mt-6 font-royal text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-7xl">
              <span className="block gold-gradient drop-shadow-[0_0_24px_rgba(212,175,55,0.25)]">
                Short Kings
              </span>
              <span className="block">Empire</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Playbooks, fitness programs, and direct coaching for men who
              refuse to wait their turn.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-semibold text-black transition hover:bg-goldLight hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
              >
                <Crown className="h-4 w-4" />
                Shop the products
              </Link>
              <Link
                href={SITE.coaching.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/40 bg-white/[0.04] px-6 font-semibold text-white transition hover:bg-white/[0.08] hover:border-gold/70"
              >
                <Play className="h-4 w-4" />
                Book coaching
              </Link>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="float-phone mx-auto max-w-[320px] sm:max-w-[360px]">
              <div className="royal-phone-frame">
                <div className="royal-phone-screen aspect-[9/16]">
                  <video
                    ref={videoRef}
                    src="/media/hero-video.mp4"
                    poster="/media/video-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onTimeUpdate={onTimeUpdate}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent">
                    <div className="pointer-events-auto flex items-center gap-3 px-4 pb-3 pt-10">
                      <button
                        onClick={togglePlay}
                        aria-label={playing ? "Pause" : "Play"}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-black transition hover:bg-goldLight"
                      >
                        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </button>
                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                        <div
                          className="h-full bg-gold transition-[width]"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <button
                        onClick={toggleMute}
                        aria-label={muted ? "Unmute" : "Mute"}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                      >
                        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
