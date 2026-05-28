import { Filter, ShieldOff, Shirt, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CHALLENGES = [
  {
    n: "01",
    icon: Filter,
    title: "The Filter Dungeon",
    body: "Apps drop you below 5'10. Inputs you cannot change. We stop fighting the filter and rewire the funnel: daytime game, intros from your network, social proof so loud the app filter becomes irrelevant.",
  },
  {
    n: "02",
    icon: ShieldOff,
    title: "Confidence Erosion",
    body: "A thousand small flinches add up to a quiet man. Frame work is a daily rep. We give you the rep, the script for self-talk, and the cue to break the habit on the spot.",
  },
  {
    n: "03",
    icon: Shirt,
    title: "Style Blindspots",
    body: "The wrong inseam adds an inch of wasted fabric. The wrong shoulder line shrinks you by two. Style is engineering. We hand you the spec sheet for your frame.",
  },
  {
    n: "04",
    icon: Users,
    title: "Social Dynamics",
    body: "You walk into the room already adjusting. We retrain entry posture, voice tempo, and the first ten seconds of any conversation. The room reads you the way you walk in.",
  },
];

export function Challenge() {
  return (
    <section id="challenge" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="What's actually in the way"
            titleTop="Height bias is real."
            titleHighlight="It's not your ceiling."
            subtitle="94% of men under 5'9 say height has cost them at least one connection. That's a real input, not a verdict. Here are the four walls and the system that gets you over each one."
          />
        </Reveal>

        <div className="mt-6 inline-flex items-baseline gap-3 rounded-md border border-ruby/30 bg-ruby/[0.06] px-4 py-2">
          <span className="font-royal text-2xl font-black text-ruby">94%</span>
          <span className="text-xs uppercase tracking-[0.2em] text-white/65">
            Have lost a connection to height bias. Once.
          </span>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {CHALLENGES.map((c, i) => (
            <Reveal key={c.n} stagger={(i + 1) as 1 | 2 | 3 | 4}>
              <article className="group relative h-full overflow-hidden rounded-sm border border-white/10 bg-panel p-7 transition hover:-translate-y-1 hover:border-ruby/40">
                <span className="font-royal text-[120px] leading-none text-gold/10 absolute -top-4 -right-2">
                  {c.n}
                </span>
                <c.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
