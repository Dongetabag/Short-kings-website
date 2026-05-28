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
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1] text-white sm:text-6xl">
            <span className="block">Ready to install</span>
            <span className="block gold-gradient">the system?</span>
          </h2>
          <div className="section-divider mx-auto" aria-hidden />
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Get The Playbook. Or book a call. Either way, you stop downloading
            advice and start running a process.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/products#the-playbook" className="btn-primary">
              <Crown className="h-4 w-4" aria-hidden />
              Get The Playbook
            </Link>
            <Link href="/portal/counsel" className="btn-outline">
              <Sparkles className="h-4 w-4 text-gold" aria-hidden />
              Try Counsel
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
