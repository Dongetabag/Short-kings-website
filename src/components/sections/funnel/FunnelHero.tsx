"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
export function FunnelHero() {
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(212,175,55,0.12),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(ellipse_at_right,rgba(220,38,38,0.1),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[2.75rem] font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              <span className="block gold-gradient">You keep getting</span>
              <span className="block">passed over.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-white/75 sm:text-xl">
              This page was built for shorter men who are done waiting to be
              chosen and ready to run a system that actually fits their frame.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/dating/start" className="btn-primary">
                Take the 2-min assessment
              </Link>
              <Link href="#offer" className="btn-outline">
                See the system
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="float-phone mx-auto max-w-[300px] sm:max-w-[320px]">
              <div className="royal-phone-frame">
                <div className="royal-phone-screen relative aspect-[9/16]">
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
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                    <div className="pointer-events-auto flex items-center gap-3 px-4 pb-3 pt-12">
                      <button
                        type="button"
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
                        type="button"
                        onClick={toggleMute}
                        aria-label={muted ? "Unmute" : "Mute"}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/25 text-white transition hover:bg-white/10"
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
