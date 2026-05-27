import Link from "next/link";
import { Crown, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-gold/15 bg-gradient-to-b from-obsidian via-stoneDeep to-obsidian py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <Reveal>
          <span aria-hidden className="icon-crown-mask mx-auto inline-block h-14 w-14 bg-gold" />
          <h2 className="mt-6 font-royal text-4xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-6xl">
            <span className="block">Ready to install</span>
            <span className="block gold-gradient">the system?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            Get the bundle. Or book a call. Either way, you stop downloading
            advice and start running a process.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/products#the-playbook"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-semibold text-black transition hover:bg-goldLight hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              <Crown className="h-4 w-4" />
              Get the bundle
            </Link>
            <Link
              href="/portal/counsel"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/40 bg-white/[0.04] px-7 font-semibold text-white transition hover:bg-white/[0.08]"
            >
              <Sparkles className="h-4 w-4" />
              Try Counsel
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
