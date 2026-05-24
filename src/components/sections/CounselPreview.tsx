import Link from "next/link";
import { Sparkles, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

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

export function CounselPreview() {
  return (
    <section id="ai-agent" className="border-y border-white/10 bg-gradient-to-b from-stoneDeep/60 via-obsidian to-obsidian py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <SectionHeader
            eyebrow="King's Counsel AI"
            titleTop="Your always-on"
            titleHighlight="strategist."
            subtitle="A 24/7 advisor trained on the Short Kings system. Ask it anything. Texts. Profile bios. First-date plans. Mindset reframes."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portal/counsel"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-semibold text-black hover:bg-goldLight"
            >
              <Sparkles className="h-4 w-4" /> Try the Counsel
            </Link>
            <Link
              href="/products#counsel"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gold/40 bg-white/[0.04] px-6 font-semibold text-white hover:bg-white/[0.08]"
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
                  <p className="font-royal text-sm font-bold tracking-[0.18em] text-white">
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
                        ? "self-end bg-gold/15 text-white border border-gold/30"
                        : "self-start bg-white/[0.04] text-white/85 border border-white/10"
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
