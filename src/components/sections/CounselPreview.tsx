import Link from "next/link";
import { Sparkles, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { COUNSEL_AI } from "@/lib/site";

const MESSAGES = [
  {
    role: "user",
    text: "She just texted: 'You're cute but probably too short for me lol'. What do I send back.",
  },
  {
    role: "ai",
    text: "Don't argue the fact. Argue the frame. 'Funny, my dates usually leave saying the opposite. Drinks Thursday, you tell me which you agree with.' You skip the defense, you keep the lead, you give her a real choice.",
  },
  {
    role: "user",
    text: "And if she doesn't reply?",
  },
  {
    role: "ai",
    text: "Then she filtered herself out. You reinvest the energy. Next move.",
  },
];

const FEATURES = [
  "Reply coaching for texts, bios, and first messages",
  "Frame checks when she tests you or goes cold",
  "Date ideas and mindset reframes on demand",
  `${COUNSEL_AI.trialDays}-day free trial · then $${COUNSEL_AI.priceUsd}${COUNSEL_AI.cadence}`,
];

export function CounselPreview() {
  return (
    <section id="kings-counsel" className="scroll-mt-24 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <SectionHeader
            eyebrow={COUNSEL_AI.eyebrow}
            titleTop="Meet"
            titleHighlight={COUNSEL_AI.title}
            subtitle={COUNSEL_AI.description}
          />
          <ul className="mt-6 flex flex-col gap-3 text-sm leading-relaxed text-white/70">
            {FEATURES.map((item) => (
              <li key={item} className="flex gap-3">
                <Sparkles
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/portal/counsel" className="btn-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Try the Counsel
            </Link>
            <Link
              href="/products#counsel"
              className="btn-outline border-gold/40 hover:border-gold hover:bg-gold/10"
            >
              See pricing
            </Link>
          </div>
        </Reveal>

        <Reveal stagger={2}>
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-stone/60 p-1 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
            <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
            <div className="rounded-[14px] bg-obsidian/80 p-5">
              <header className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-black">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-obsidian bg-emerald"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold tracking-[0.18em] text-white">
                    KING&apos;S COUNSEL
                  </p>
                  <p className="text-[11px] text-emerald">Online · always available</p>
                </div>
              </header>

              <div className="mt-5 flex flex-col gap-3">
                {MESSAGES.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      m.role === "user"
                        ? "self-end border border-gold/30 bg-gold/15 text-white"
                        : "self-start border border-white/10 bg-white/[0.04] text-white/85"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                <input
                  disabled
                  placeholder="Ask the Counsel..."
                  className="flex-1 bg-transparent text-sm text-white/50 outline-none"
                />
                <button
                  disabled
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gold/40 text-black"
                  aria-label="Send"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
