import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { DiscountPriceDisplay } from "@/components/ui/DiscountPriceDisplay";
import { AXEL_CALENDLY } from "@/lib/home-funnel";
import { SEVEN_PROTOCOLS, THE_EMPIRE, THE_PLAYBOOK } from "@/lib/site";

type Offer = {
  title: string;
  description: string;
  cta: string;
  primary: boolean;
  href?: string;
  external?: boolean;
  typeform?: boolean;
  price?: string;
  discount?: {
    compareAtLabel: string;
    currentPrice: string;
    badge: string;
  };
};

const OFFERS: Offer[] = [
  {
    title: SEVEN_PROTOCOLS.title,
    description:
      "Eight playbooks built specifically for short men covering texting, approach, female psychology, dating, mindset, dating app presence, style and grooming, and the belief that holds the whole system together.",
    discount: {
      compareAtLabel: SEVEN_PROTOCOLS.compareAtLabel,
      currentPrice: `$${SEVEN_PROTOCOLS.priceUsd}`,
      badge: SEVEN_PROTOCOLS.saveBadge,
    },
    cta: "Get all 8",
    href: "/products#seven-protocols",
    primary: true,
  },
  {
    title: "The Playbook",
    description:
      "The complete Short Kings system in one place. Every framework, every tool, every protocol.",
    price: `$${THE_PLAYBOOK.priceUsd}`,
    cta: "Get The Playbook",
    href: "/products#the-playbook",
    primary: false,
  },
  {
    title: "1-on-1 Coaching Call",
    description:
      "A direct call with Axel. Bring your situation. Leave with a plan built specifically for you.",
    price: "Book via Calendly",
    cta: "Book a call with Axel",
    href: AXEL_CALENDLY,
    external: true,
    primary: false,
  },
  {
    title: THE_EMPIRE.title,
    description:
      "The full done-with-you experience. Three months of coaching, accountability, and system implementation side by side with Axel.",
    discount: {
      compareAtLabel: THE_EMPIRE.compareAtLabel,
      currentPrice: `$${THE_EMPIRE.priceUsd}`,
      badge: THE_EMPIRE.saveBadge,
    },
    cta: "Apply for Empire",
    typeform: true,
    primary: false,
  },
];

export function FunnelOffer() {
  return (
    <section id="offer" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-5 sm:grid-cols-2">
          {OFFERS.map((offer, i) => {
            const href = offer.href;
            const isExternal = Boolean(offer.external);
            const isTypeform = Boolean(offer.typeform);
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
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
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
                      <p className="font-display text-2xl font-bold text-gold sm:text-3xl">
                        {offer.price}
                      </p>
                    )}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-7 text-white/65 sm:text-base">
                    {offer.description}
                  </p>
                  {isTypeform ? (
                    <button
                      type="button"
                      data-tf-popup="GVVKVMWI"
                      data-tf-opacity="100"
                      data-tf-button-hide="true"
                      className={`mt-6 ${ctaClass}`}
                    >
                      {offer.cta}
                    </button>
                  ) : href ? (
                    <Link
                      href={href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`mt-6 ${ctaClass}`}
                    >
                      {offer.cta}
                    </Link>
                  ) : null}
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
