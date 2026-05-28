import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { TypeformPopupButton } from "@/components/typeform/TypeformPopupButton";
import { AXEL_CALENDLY } from "@/lib/home-funnel";
import { THE_EMPIRE, THE_PLAYBOOK } from "@/lib/site";

const EMPIRE_TYPEFORM_ID = "GVVKVMWI";

const OFFERS = [
  {
    title: "The 7 Protocols",
    description:
      "Seven playbooks built specifically for short men covering approach, texting, first dates, mindset, presence, attraction, and dating profiles.",
    price: "$65 for all 7",
    cta: "Get the 7 Protocols",
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
    title: "The Empire — 3 Month Transformation",
    description:
      "The full done-with-you experience. Three months of coaching, accountability, and system implementation side by side with Axel.",
    price: `$${THE_EMPIRE.priceUsd}`,
    cta: "Apply for Empire",
    typeform: true,
    primary: false,
  },
] as const;

export function FunnelOffer() {
  return (
    <section id="offer" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-5 sm:grid-cols-2">
          {OFFERS.map((offer, i) => {
            const href = "href" in offer ? offer.href : undefined;
            const isExternal = "external" in offer && offer.external;
            const isTypeform = "typeform" in offer && offer.typeform;
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
                  <p className="mt-2 font-display text-2xl font-bold text-gold sm:text-3xl">
                    {offer.price}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-white/65 sm:text-base">
                    {offer.description}
                  </p>
                  {isTypeform ? (
                    <TypeformPopupButton
                      formId={EMPIRE_TYPEFORM_ID}
                      className={`mt-6 ${ctaClass}`}
                    >
                      {offer.cta}
                    </TypeformPopupButton>
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
