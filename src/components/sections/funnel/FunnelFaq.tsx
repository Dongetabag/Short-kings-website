"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FUNNEL_FAQ } from "@/lib/home-funnel";

export function FunnelFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-x-6">
          {FUNNEL_FAQ.map((item) => {
            const id = item.question;
            const isOpen = openId === id;

            return (
              <div
                key={id}
                className="overflow-hidden rounded-lg border border-white/10 bg-stone/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  className="flex min-h-[52px] w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold leading-snug text-white sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-white/10 px-4 pb-4 pt-0 text-sm leading-7 text-white/65 sm:px-5 sm:pb-5 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
