"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AXEL_CALENDLY } from "@/lib/home-funnel";

export function ConversionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="conversion-popup-headline"
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden />

      <div className="relative w-full max-w-md rounded-sm border border-white/10 bg-stone/95 p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-sm text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="eyebrow pr-8">Not sure where to start?</p>
        <h2
          id="conversion-popup-headline"
          className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl"
        >
          Take the next step.
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
          Pick the option that fits where you are right now.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link href="/dating/start" className="btn-primary w-full">
            Take the 2-min assessment
          </Link>
          <Link href={AXEL_CALENDLY} className="btn-outline w-full">
            Book a call with Axel
          </Link>
        </div>
      </div>
    </div>
  );
}
