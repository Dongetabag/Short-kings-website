import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AXEL_CALENDLY } from "@/lib/home-funnel";
import { resolvePaymentLink } from "@/lib/products";
import { SEVEN_PROTOCOLS } from "@/lib/site";

export function FunnelOffer() {
  const protocolsHref =
    resolvePaymentLink(SEVEN_PROTOCOLS.paymentLinkEnvKey) ?? "/products#ebooks";

  return (
    <section id="offer" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="relative flex h-full flex-col overflow-hidden rounded-sm border border-gold/35 bg-stone/40 p-7 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" aria-hidden />
              <p className="eyebrow">Primary offer</p>
              <h3 className="mt-3 font-display text-3xl font-bold text-white">
                The 7 Protocols
              </h3>
              <p className="mt-2 font-display text-4xl font-bold text-gold">$65</p>
              <p className="mt-5 flex-1 text-sm leading-7 text-white/65 sm:text-base">
                Seven playbooks built specifically for short men, covering approach,
                texting, first dates, mindset, presence, attraction, and dating
                profiles.
              </p>
              <Link href={protocolsHref} className="btn-primary mt-8">
                Get the 7 Protocols
              </Link>
            </article>
          </Reveal>

          <Reveal stagger={2}>
            <article className="flex h-full flex-col rounded-sm border border-white/10 bg-panel p-7 sm:p-8">
              <p className="eyebrow">Next level</p>
              <h3 className="mt-3 font-display text-3xl font-bold text-white">
                1-on-1 coaching
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/50">
                With Axel Cruz
              </p>
              <p className="mt-5 flex-1 text-sm leading-7 text-white/65 sm:text-base">
                After the ebooks, book a private call. Get your profile, texts, and
                next moves reviewed by the man who built the system for shorter
                frames.
              </p>
              <Link
                href={AXEL_CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-8"
              >
                Book a call with Axel
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
