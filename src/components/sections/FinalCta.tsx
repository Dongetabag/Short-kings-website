import Link from "next/link";
import { Crown, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <Reveal>
          <span aria-hidden className="icon-crown-mask mx-auto inline-block h-12 w-12 bg-gold" />
          <h2 className="mt-6 font-display text-5xl font-normal uppercase leading-[0.95] tracking-wide text-white sm:text-7xl">
            <span className="block">Ready to install</span>
            <span className="block gold-gradient">the system?</span>
          </h2>
          <div className="section-divider mx-auto" aria-hidden />
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Get The Playbook. Or book a call. Either way, you stop downloading
            advice and start running a process.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/products#the-playbook"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-gold px-7 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-goldLight"
            >
              <Crown className="h-4 w-4" />
              Get The Playbook
            </Link>
            <Link
              href="/portal/counsel"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-ruby/50 px-7 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-ruby/10"
            >
              <Sparkles className="h-4 w-4 text-gold" />
              Try Counsel
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
