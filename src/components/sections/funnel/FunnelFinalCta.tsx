import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AXEL_CALENDLY } from "@/lib/home-funnel";

export function FunnelFinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <p className="text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
            You have read the story, the proof, and the offer. If you are still
            here, you already know you are tired of sitting on the sidelines.
            Book the call and let us build your next move together.
          </p>
          <Link
            href={AXEL_CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-9"
          >
            Book a call with Axel
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
