"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ProductOfferCard } from "@/components/products/ProductOfferCard";
import {
  COACHING_INCLUDES,
  EBOOK_DISPLAY_ORDER,
  EBOOK_PAGE_COPY,
  EMPIRE_INCLUDES,
  PLAYBOOK_INCLUDES,
  PROTOCOLS_INCLUDES,
} from "@/lib/products-page-data";
import { EBOOKS, resolvePaymentLink } from "@/lib/products";
import {
  COUNSEL_AI,
  GYM_NUTRITION_PLAN,
  INNER_CIRCLE,
  SEVEN_PROTOCOLS,
  SITE,
  THE_EMPIRE,
  THE_PLAYBOOK,
} from "@/lib/site";

const TIER_PILLS = [
  { label: "Tier 1 — Start Tonight", href: "#tier-1" },
  { label: "Tier 2 — The System", href: "#tier-2" },
  { label: "Tier 3 — Done With You", href: "#tier-3" },
] as const;

function TierSection({
  id,
  label,
  title,
  description,
  children,
}: {
  id: string;
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold/70">
        {label}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
        {description}
      </p>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">{children}</div>
    </section>
  );
}

export function ProductsPageView() {
  const protocolsHref = resolvePaymentLink(SEVEN_PROTOCOLS.paymentLinkEnvKey);
  const playbookHref = resolvePaymentLink(THE_PLAYBOOK.paymentLinkEnvKey);
  const counselHref = "/portal/counsel";

  const ebooksById = Object.fromEntries(EBOOKS.map((e) => [e.id, e]));
  const orderedEbooks = EBOOK_DISPLAY_ORDER.map((id) => ebooksById[id]).filter(
    Boolean
  );

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
        <Reveal>
          <div className="text-center sm:text-left">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Pick your level.
            </h1>
            <p className="mt-3 text-base font-medium text-white/70 sm:text-lg">
              Every product is built for one man: shorter, hungrier, and done
              waiting.
            </p>
            <nav
              className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 lg:justify-start"
              aria-label="Product tiers"
            >
              {TIER_PILLS.map((pill) => (
                <a
                  key={pill.href}
                  href={pill.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/35 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:border-gold hover:bg-gold/10 sm:text-sm"
                >
                  {pill.label}
                </a>
              ))}
            </nav>
          </div>
        </Reveal>

        <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-16">
          <Reveal>
            <TierSection
              id="tier-1"
              label="Tier 1"
              title="Start Tonight"
              description="For the man who wants to start right now without committing to coaching yet."
            >
              <ProductOfferCard
                id="seven-protocols"
                tag="7 ebooks"
                name="The 7 Protocols"
                forLine="For the man in pain who wants to start tonight."
                description="Seven playbooks built specifically for short men. Approach, text, first dates, mindset, presence, attraction, and dating profiles. Each one is a standalone system you can run the same day you buy it."
                includes={PROTOCOLS_INCLUDES}
                price={`$${SEVEN_PROTOCOLS.priceBundleUsd} for all 7 · or $${SEVEN_PROTOCOLS.priceEachUsd} each`}
                cta="Get all 7"
                href={protocolsHref ?? undefined}
                external
              />
              <ProductOfferCard
                id="counsel"
                tag="Always-on AI"
                name="Kings Counsel AI"
                forLine="For the man who wants 24/7 guidance at zero commitment."
                description="Trained on the Short Kings system. Ask anything about texts, profiles, dates, or mindset. When things get specific enough it points you directly to Axel. First 7 days free."
                price={`$${COUNSEL_AI.priceUsd} per month · cancel anytime`}
                cta="Start free trial"
                href={counselHref}
              />
            </TierSection>
          </Reveal>

          <Reveal stagger={2}>
            <TierSection
              id="tier-2"
              label="Tier 2"
              title="The System"
              description="For the man who wants the full system and is ready to put in the work independently."
            >
              <ProductOfferCard
                id="the-playbook"
                tag="Complete system"
                name="The Playbook"
                forLine="For the man who wants everything in one place."
                description="The complete Short Kings system. Every framework, every protocol, every tool Axel built over five years. Two coaching calls included so you see what working with him feels like before committing to more."
                includes={PLAYBOOK_INCLUDES}
                price={`$${THE_PLAYBOOK.priceUsd} one time · save $435+`}
                cta="Get The Playbook"
                href={playbookHref ?? undefined}
                external
                featured
              />
              <ProductOfferCard
                id="built-different"
                tag="Short man physique system"
                name="Built Different"
                forLine="For the man who wants to build the body that changes how the room reads him."
                description="A gym and nutrition protocol built specifically for shorter men. Whether you want to lose weight and build muscle or focus purely on building muscle this is the exact program built for your frame. Delivered entirely through the Trainerize app. After purchase you will receive an email invite to access your program directly on Trainerize."
                deliveryNote="Delivered via the Trainerize app. Invite sent to your email after purchase."
                price={`$${GYM_NUTRITION_PLAN.priceUsd} one time`}
                cta="Get Built Different"
                href="https://www.trainerize.me/profile/skefitness/Axel.Cruz/"
                external
              />
            </TierSection>
          </Reveal>

          <Reveal stagger={3}>
            <TierSection
              id="tier-3"
              label="Tier 3"
              title="Done With You"
              description="For the man who is ready to stop figuring it out alone and work directly with Axel."
            >
              <ProductOfferCard
                id="inner-circle"
                tag="1-on-1 coaching"
                name="1-on-1 Coaching"
                forLine="For the man who wants direct access to Axel month to month."
                description="Four coaching calls a month with Axel directly. Unlimited WhatsApp access between calls. A personalized game plan built around your specific situation. Month to month with no long term commitment required."
                includes={COACHING_INCLUDES}
                price={`$${INNER_CIRCLE.priceUsd} per month · cancel anytime`}
                cta="Book on Calendly"
                href={SITE.coaching.calendly}
                external
              />
              <ProductOfferCard
                id="the-empire"
                tag="Limited to 5 clients"
                name="The Empire — 3 Month Transformation"
                forLine="For the man who is done figuring it out and wants Axel in his corner every single day."
                description="Three months. Axel is in your phone reviewing real conversations, debriefing every date, and building your system from the ground up alongside you. This is not a course. This is a personal dating director."
                includes={EMPIRE_INCLUDES}
                price={`$${THE_EMPIRE.priceUsd} · 3 months · approximately $332 per month`}
                priceNote="Split via Affirm or Afterpay. Pay in installments and start today."
                cta="Apply for Empire"
                featured
                typeform
              />
            </TierSection>
          </Reveal>

          <section id="individual-ebooks" className="scroll-mt-24">
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold/70">
                Individual playbooks
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                Seven ebooks. $12 each.
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {orderedEbooks.map((book, i) => {
                const href = resolvePaymentLink(book.paymentLinkEnvKey);
                const copy = EBOOK_PAGE_COPY[book.id as keyof typeof EBOOK_PAGE_COPY];
                return (
                  <Reveal
                    key={book.id}
                    stagger={(((i % 3) + 1) as 1 | 2 | 3)}
                  >
                    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-stone/30 p-4 sm:p-5">
                      <h3 className="font-display text-lg font-bold text-white">
                        {book.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                        {copy?.description ?? book.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                        <p className="font-display text-xl font-bold text-gold">
                          $12
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-10 items-center rounded-md bg-gold px-4 text-xs font-semibold text-black hover:bg-goldLight sm:text-sm"
                          >
                            Buy
                          </a>
                        ) : (
                          <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                            Setup pending
                          </span>
                        )}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/portal"
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-gold/40 bg-white/[0.04] px-7 text-sm font-semibold text-white hover:bg-white/[0.08]"
            >
              Already a member? Open the portal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
