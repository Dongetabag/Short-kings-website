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
          <p className="text-xl font-semibold leading-relaxed text-white/85 sm:text-2xl">
            You have read the proof. You know the gap is real. The only question
            left is whether you keep carrying it alone or you let Axel build the
            plan with you.
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
