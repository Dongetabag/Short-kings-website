"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { OFFER_LINKS } from "@/lib/offer-links";

const POPUP_DISMISS_KEY = "ske_popup_dismissed_at";
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const POPUP_DELAY_MS = 35000; // 35 seconds to allow reading hero/video first

export function ConversionPopup() {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(POPUP_DISMISS_KEY, String(Date.now()));
    } catch {
      // ignore storage errors
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    try {
      const dismissedAt = window.localStorage.getItem(POPUP_DISMISS_KEY);
      if (dismissedAt && Date.now() - Number(dismissedAt) < SEVEN_DAYS_MS) {
        return;
      }
    } catch {
      // continue if storage inaccessible
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
    }, POPUP_DELAY_MS);

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
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={dismiss} aria-hidden />

      <div className="relative w-full max-w-md rounded-lg border border-gold/30 bg-stone/95 p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close popup"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-sm text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="eyebrow pr-8 text-gold">Free Assessment · Instant Roadmap</p>
        <h2
          id="conversion-popup-headline"
          className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl"
        >
          Stop guessing. Know your frame.
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
          Find out where your dating profile and presence actually break down, and get the exact starting move for your height.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/dating/start"
            onClick={dismiss}
            className="btn-primary w-full text-center"
          >
            Take the 2-min assessment
          </Link>
          <Link
            href={OFFER_LINKS.gameplan}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="btn-outline w-full text-center"
          >
            Book a call with Axel
          </Link>
          <a
            href="/downloads/the-standing-man-chapter-1.pdf"
            download="The-Standing-Man-Chapter-1.pdf"
            onClick={dismiss}
            className="mt-2 inline-flex items-center justify-center gap-1.5 text-center text-xs text-gold/80 transition hover:text-gold hover:underline"
          >
            <Download className="h-3.5 w-3.5" /> Or download Chapter 1 of The Standing Man (Free PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
