import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AXEL_CALENDLY } from "@/lib/home-funnel";
import { OFFER_LINKS } from "@/lib/offer-links";

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
            left is whether you keep carrying it alone or you start running the
            system tonight.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={OFFER_LINKS.datingSystem}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Start the 30-Day System — $27.99
            </Link>
            <Link
              href={AXEL_CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              Book a call with Axel
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
