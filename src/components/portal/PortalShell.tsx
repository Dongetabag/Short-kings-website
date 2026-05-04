"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Crown, Menu, X, LogOut, Sparkles } from "lucide-react";
import { PORTAL_NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function PortalShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-obsidian">
      <div className="mx-auto flex max-w-7xl">
        {/* Left rail */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-64 -translate-x-full border-r border-white/10 bg-stoneDeep/95 backdrop-blur transition-transform lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0",
            open && "translate-x-0"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-5 lg:hidden">
            <span className="font-royal text-sm tracking-[0.2em] text-white">PORTAL</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white/70">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative hidden px-4 pb-2 pt-5 lg:block">
            <Sparkles
              aria-hidden
              className="pointer-events-none absolute -right-1 top-4 h-16 w-16 text-gold/10"
              strokeWidth={1}
            />
            <Link href="/" className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-white/[0.04]">
              <span className="relative h-9 w-9 shrink-0">
                <Image
                  src="/media/logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </span>
              <span className="leading-tight">
                <span className="block font-royal text-[10px] font-bold tracking-[0.22em] text-white">
                  SHORT KINGS
                </span>
                <span className="block text-[9px] font-semibold tracking-[0.32em] text-gold">
                  MEMBER VAULT
                </span>
              </span>
            </Link>
          </div>

          <nav className="flex flex-col gap-1 p-4">
            <p className="px-3 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              The Throne Room
            </p>
            {PORTAL_NAV.map((item) => {
              const active =
                item.href === "/portal"
                  ? path === "/portal"
                  : path?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition",
                    active
                      ? "bg-gold/15 text-gold"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="my-4 h-px bg-white/10" />
            <a
              href={SITE.coaching.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-gold px-3 text-xs font-semibold uppercase tracking-[0.18em] text-black hover:bg-goldLight"
            >
              <Crown className="h-3 w-3" /> Book Royal Counsel
            </a>
            <Link
              href="/api/auth/signout"
              className="mt-1 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/55 hover:text-white"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </Link>
          </nav>
        </aside>

        {/* Mobile open btn */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="fixed bottom-6 left-6 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Canvas */}
        <main className="flex-1 px-4 py-10 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
