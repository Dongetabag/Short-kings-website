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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,76,0.14),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(ellipse_at_right,rgba(220,38,38,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 border border-ruby/40 bg-ruby/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-ruby">
              <Crown className="h-4 w-4 text-gold" />
              Built for short kings
            </span>

            <h1 className="mt-6 font-display text-6xl font-normal uppercase leading-[0.9] tracking-wide text-white sm:text-8xl">
              <span className="block gold-gradient">Short Kings</span>
              <span className="block">Empire</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              {SITE.tagline} Playbooks, fitness, and coaching — black, gold, and
              zero excuses.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#products"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-gold px-7 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-goldLight"
              >
                <Crown className="h-4 w-4" />
                View products
              </Link>
              <Link
                href={SITE.coaching.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-ruby/50 bg-transparent px-7 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-ruby hover:bg-ruby/10"
              >
                <Play className="h-4 w-4 text-ruby" />
                Book coaching
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="float-phone mx-auto max-w-[300px] sm:max-w-[340px]">
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
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent">
                    <div className="pointer-events-auto flex items-center gap-3 px-4 pb-3 pt-10">
                      <button
                        onClick={togglePlay}
                        aria-label={playing ? "Pause" : "Play"}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-gold text-black transition hover:bg-goldLight"
                      >
                        {playing ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                      </button>
                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                        <div
                          className="h-full bg-ruby transition-[width]"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <button
                        onClick={toggleMute}
                        aria-label={muted ? "Unmute" : "Mute"}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/20 text-white transition hover:bg-white/10"
                      >
                        {muted ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
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
