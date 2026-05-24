"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Crown } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all",
        scrolled
          ? "border-b border-gold/15 bg-obsidian/85 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label={SITE.name}>
          <span className="relative h-9 w-9 shrink-0">
            <Image
              src="/media/logo.png"
              alt=""
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-royal text-sm font-bold tracking-[0.18em] text-white">
              SHORT KINGS
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.35em] text-gold">
              EMPIRE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-white/75 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products#bundle"
            className="ml-3 inline-flex h-10 items-center gap-2 rounded-md bg-gold px-4 text-sm font-semibold text-black transition hover:bg-goldLight hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
          >
            <Crown className="h-4 w-4" />
            Get the bundle
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/80 hover:text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-obsidian/95 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products#bundle"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold font-semibold text-black"
            >
              <Crown className="h-4 w-4" /> Get the bundle
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
