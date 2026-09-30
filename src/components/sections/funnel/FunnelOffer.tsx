import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { DiscountPriceDisplay } from "@/components/ui/DiscountPriceDisplay";
import { OFFER_LINKS } from "@/lib/offer-links";

type Offer = {
  title: string;
  description: string;
  cta: string;
  href: string;
  primary: boolean;
  price?: string;
  discount?: {
    compareAtLabel: string;
    currentPrice: string;
    badge: string;
  };
};

const OFFERS: Offer[] = [
  {
    title: "The 30 Day Short King Dating System",
    discount: {
      compareAtLabel: "$100 VALUE",
      currentPrice: "$27.99",
      badge: "SAVE 72%",
    },
    description: `Eight playbooks built specifically for men under 5'10". Texting, approach, female psychology, the first date, mindset, dating apps, style and grooming, and the belief that holds it all together.`,
    cta: "Start My 30 Days",
    href: OFFER_LINKS.datingSystem,
    primary: true,
  },
  {
    title: "The Strategy Call",
    price: "$100",
    description:
      "One 60 minute call with Axel. We diagnose exactly what's holding you back and you leave with a clear game plan to fix it.",
    cta: "Book My Strategy Call",
    href: OFFER_LINKS.strategyCall,
    primary: false,
  },
  {
    title: "1 on 1 Coaching",
    price: "$250 PER MONTH",
    description:
      "Two calls a month plus weekly check ins. You have the plan. Axel makes sure you run it.",
    cta: "Start Coaching",
    href: OFFER_LINKS.coaching,
    primary: false,
  },
  {
    title: "The Empire: 3 Month Transform",
    discount: {
      compareAtLabel: "$1,500 VALUE",
      currentPrice: "$999.99",
      badge: "SAVE $500",
    },
    description:
      "Axel in your corner every day for three months. Real conversations reviewed as they happen, prep before every date, your profile rebuilt, and your body built.",
    cta: "Apply for Empire",
    href: OFFER_LINKS.empire,
    primary: false,
  },
];

export function FunnelOffer() {
  return (
    <section id="offer" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-5 sm:grid-cols-2">
          {OFFERS.map((offer, i) => {
            const ctaClass = offer.primary ? "btn-primary" : "btn-outline";

            return (
              <Reveal key={offer.title} stagger={(i + 1) as 1 | 2 | 3 | 4}>
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-sm border p-6 sm:p-7 ${
                    offer.primary
                      ? "border-gold/35 bg-stone/40"
                      : "border-white/10 bg-panel"
                  }`}
                >
                  {offer.primary ? (
                    <div
                      className="absolute inset-x-0 top-0 h-px crown-hairline"
                      aria-hidden
                    />
                  ) : null}
                  <h3 className="font-display text-2xl font-bold uppercase text-white sm:text-3xl">
                    {offer.title}
                  </h3>
                  <div className="mt-2">
                    {offer.discount ? (
                      <DiscountPriceDisplay
                        size="hero"
                        compareAtLabel={offer.discount.compareAtLabel}
                        currentPrice={offer.discount.currentPrice}
                        badge={offer.discount.badge}
                      />
                    ) : (
                      <p className="font-display text-2xl font-bold uppercase text-gold sm:text-3xl">
                        {offer.price}
                      </p>
                    )}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-7 text-white/65 sm:text-base">
                    {offer.description}
                  </p>
                  <Link
                    href={offer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 ${ctaClass}`}
                  >
                    {offer.cta}
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-8 flex justify-center sm:mt-10">
            <Link href="/products" className="btn-outline">
              See full products
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
