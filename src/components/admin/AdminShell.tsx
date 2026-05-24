"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Crown, Menu, X, ShieldCheck } from "lucide-react";
import { ADMIN_NAV } from "@/lib/site";
import { cn } from "@/lib/cn";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-obsidian">
      <div className="mx-auto flex max-w-7xl">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-64 -translate-x-full border-r border-ruby/30 bg-stoneDeep/95 backdrop-blur transition-transform lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0",
            open && "translate-x-0"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-5 lg:hidden">
            <span className="font-royal text-sm tracking-[0.2em] text-white">ADMIN</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white/70">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 px-5 pt-5">
            <ShieldCheck className="h-4 w-4 text-ruby" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ruby">
              Admin Console
            </p>
          </div>

          <nav className="flex flex-col gap-1 p-4 pt-3">
            {ADMIN_NAV.map((item) => {
              const active =
                item.href === "/admin"
                  ? path === "/admin"
                  : path?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition",
                    active
                      ? "bg-ruby/15 text-ruby"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="my-4 h-px bg-white/10" />
            <Link
              href="/portal"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/55 hover:text-white"
            >
              <Crown className="h-4 w-4" /> View as member
            </Link>
          </nav>
        </aside>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="fixed bottom-6 left-6 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ruby text-white shadow-[0_0_30px_rgba(224,17,95,0.4)] lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <main className="flex-1 px-4 py-10 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
