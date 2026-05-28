import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function FunnelCounsel() {
  return (
    <section className="border-y border-gold/20 bg-gradient-to-b from-stoneDeep/60 via-obsidian to-obsidian py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <Sparkles className="mx-auto h-8 w-8 text-gold" aria-hidden />
          <p className="mt-6 text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
            Not ready for a call yet? Get 24/7 access to the Short Kings system.
          </p>
          <p className="mt-4 font-display text-4xl font-bold text-gold">$15</p>
          <p className="text-sm uppercase tracking-[0.16em] text-white/50">
            per month · first 7 days free
          </p>
          <Link href="/portal/counsel" className="btn-primary mt-8">
            Start free trial
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
