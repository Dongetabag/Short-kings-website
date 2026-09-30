"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ProductOfferCard } from "@/components/products/ProductOfferCard";
import {
  BUILT_DIFFERENT_INCLUDES,
  DATING_SYSTEM_INCLUDES,
  OFFER_LINKS,
  STRATEGY_CALL_INCLUDES,
  coachingCompareRows,
  empireCompareRows,
} from "@/lib/offer-links";

const TIER_PILLS = [
  { label: "Tier 1: Start Tonight", href: "#tier-1" },
  { label: "Tier 2: Get The Plan", href: "#tier-2" },
  { label: "Tier 3: Done With You", href: "#tier-3" },
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
      <h2 className="mt-2 font-display text-3xl font-bold uppercase text-white sm:text-4xl">
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
              <div className="lg:col-span-2 lg:max-w-xl">
                <ProductOfferCard
                  id="dating-system"
                  tag="8 EBOOKS + 2 BONUSES"
                  name="The 30 Day Short King Dating System"
                  forLine="From overlooked to chosen in 30 days."
                  description={`Eight playbooks built specifically for men under 5'10". Texting, approach, female psychology, the first date, mindset, dating apps, style and grooming, and the belief that holds the whole system together. Each one is a standalone system you can run the same day you buy it.`}
                  includes={DATING_SYSTEM_INCLUDES}
                  discountPrice={{
                    compareAtLabel: "$100 VALUE",
                    currentPrice: "$27.99",
                    badge: "SAVE 72%",
                    finePrint: "7 day money back guarantee.",
                  }}
                  cta="Start My 30 Days"
                  href={OFFER_LINKS.datingSystem}
                  external
                />
              </div>
            </TierSection>
          </Reveal>

          <Reveal stagger={2}>
            <TierSection
              id="tier-2"
              label="Tier 2"
              title="Get The Plan"
              description="For the man who wants a clear plan and is ready to run it himself."
            >
              <ProductOfferCard
                id="strategy-call"
                tag="The Diagnosis"
                name="The Strategy Call"
                forLine="For the man who wants to know exactly what's wrong and how to fix it."
                description="One 60 minute call with Axel. We break down your profile, your texts, and where things keep falling apart. You leave knowing exactly what's holding you back and with a clear game plan to fix it. Then you run it on your own."
                includes={STRATEGY_CALL_INCLUDES}
                price="$100 ONE TIME"
                cta="Book My Strategy Call"
                href={OFFER_LINKS.strategyCall}
                external
                featured
              />
              <ProductOfferCard
                id="built-different"
                tag="Short Man Physique System"
                name="Built Different"
                forLine="For the man who wants to build the body that changes how the room reads him."
                description="A gym and nutrition program built specifically for shorter men. Whether you want to lose fat and build muscle or focus purely on building muscle, this is the exact program built for your frame. Delivered entirely through the Trainerize app."
                includes={BUILT_DIFFERENT_INCLUDES}
                price="$65 ONE TIME"
                priceNote="Delivered via the Trainerize app. Invite sent to your email after purchase."
                cta="Get Built Different"
                href={OFFER_LINKS.builtDifferent}
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
                id="coaching"
                tag="Accountability"
                name="1 on 1 Coaching"
                forLine="For the man who has the plan and wants someone making sure he runs it."
                description="Knowing what to do and actually doing it are two different things. Every other week we get on a call, review what happened, fix what didn't work, and set your next moves. Every Monday you send your goals. Every Friday you report back. No drifting, no excuses, no going back to old habits. Month to month, cancel anytime."
                compareRows={coachingCompareRows()}
                descriptionMinClass="min-h-[11.5rem] sm:min-h-[10.5rem]"
                price="$250 PER MONTH · CANCEL ANYTIME"
                cta="Start Coaching"
                href={OFFER_LINKS.coaching}
                external
              />
              <ProductOfferCard
                id="empire"
                tag="Limited to 5 Clients"
                name="The Empire: 3 Month Transform"
                forLine="For the man who is done figuring it out and wants Axel in his corner every single day."
                description="Three months. Axel is in your phone reviewing real conversations as they happen, prepping you before every date and debriefing you after. Your profile gets rebuilt. Your style gets upgraded. Your body gets built. This is not coaching. This is a personal dating director."
                compareRows={empireCompareRows()}
                descriptionMinClass="min-h-[11.5rem] sm:min-h-[10.5rem]"
                discountPrice={{
                  compareAtLabel: "$1,500 VALUE",
                  currentPrice: "$999.99",
                  badge: "SAVE $500",
                  secondaryLine: "OR 3 PAYMENTS OF $333.33",
                  finePrint:
                    "Split via Affirm or Afterpay. Pay in installments and start today.",
                }}
                cta="Apply for Empire"
                href={OFFER_LINKS.empire}
                external
                featured
              />
            </TierSection>
          </Reveal>
        </div>
      </div>
    </>
  );
}
