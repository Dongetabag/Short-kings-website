import Link from "next/link";
import {
  Crown,
  Dumbbell,
  CalendarDays,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  BUNDLE,
  COACHING,
  COUNSEL_AI,
  GYM_NUTRITION_PLAN,
  TRANSFORMATION_3MO,
} from "@/lib/site";
import { resolvePaymentLink } from "@/lib/products";

type Item = {
  badge: string;
  badgeTone: "gold" | "ruby";
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  href?: string | null;
  cta: string;
  featured?: boolean;
};

const formatPrice = (priceUsd: number) =>
  priceUsd > 0 ? `$${priceUsd}` : "Pricing soon";

export function RoyalArsenal() {
  const bundleHref =
    resolvePaymentLink(BUNDLE.paymentLinkEnvKey) ?? "/products#bundle";
  const gymHref =
    resolvePaymentLink(GYM_NUTRITION_PLAN.paymentLinkEnvKey) ??
    "/products#built-different";
  const transformHref =
    resolvePaymentLink(TRANSFORMATION_3MO.paymentLinkEnvKey) ??
    "/products#transformation-3-month";
  const coachingHref =
    resolvePaymentLink("STRIPE_PAYMENT_LINK_MONTHLY_COACHING") ??
    "/products#monthly-coaching";
  const counselHref =
    resolvePaymentLink(COUNSEL_AI.paymentLinkEnvKey) ?? "/products#counsel";

  const items: Item[] = [
    {
      badge: "Bundle",
      badgeTone: "gold",
      icon: Crown,
      title: BUNDLE.title,
      description: BUNDLE.description,
      price: `$${BUNDLE.priceUsd}`,
      priceNote: `$${BUNDLE.originalPriceUsd} value. ${BUNDLE.saveLabel}.`,
      href: bundleHref,
      cta: "Get the playbook",
      featured: true,
    },
    {
      badge: "Program",
      badgeTone: "ruby",
      icon: Dumbbell,
      title: GYM_NUTRITION_PLAN.title,
      description: GYM_NUTRITION_PLAN.description,
      price: formatPrice(GYM_NUTRITION_PLAN.priceUsd),
      priceNote: GYM_NUTRITION_PLAN.cadence,
      href: gymHref,
      cta: "Get Built Different",
    },
    {
      badge: "Always-on AI",
      badgeTone: "gold",
      icon: Sparkles,
      title: COUNSEL_AI.title,
      description: COUNSEL_AI.description,
      price: `$${COUNSEL_AI.priceUsd}`,
      priceNote: `${COUNSEL_AI.cadence} · First ${COUNSEL_AI.trialDays} days free`,
      href: counselHref,
      cta: "Try Counsel",
    },
    {
      badge: "Program",
      badgeTone: "ruby",
      icon: CalendarDays,
      title: TRANSFORMATION_3MO.title,
      description: TRANSFORMATION_3MO.description,
      price: formatPrice(TRANSFORMATION_3MO.priceUsd),
      priceNote: TRANSFORMATION_3MO.cadence,
      href: transformHref,
      cta: "Apply",
    },
    {
      badge: "1-on-1",
      badgeTone: "ruby",
      icon: MessageSquare,
      title: COACHING.title,
      description: COACHING.description,
      price: `$${COACHING.priceUsd}`,
      priceNote: COACHING.cadence,
      href: coachingHref,
      cta: "Start coaching",
    },
  ];

  return (
    <section id="products" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Products"
            titleTop="The full"
            titleHighlight="product suite."
            subtitle="Bundles, Built Different, and coaching. Individual ebooks live on the full product list."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              stagger={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
              className={item.featured ? "lg:col-span-3" : ""}
            >
              <ProductCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/products#ebooks"
              className="inline-flex h-11 items-center rounded-md border border-gold/40 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:border-gold hover:bg-white/[0.04]"
            >
              View full product list
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProductCard({ item }: { item: Item }) {
  const Icon = item.icon;
  const featuredCls = item.featured
    ? "border-gold/50 bg-stone/70 shadow-[0_0_60px_rgba(212,175,55,0.12)] glow-pulse"
    : "border-gold/20 bg-stone/40 hover:border-gold/40";
  const isExternal =
    item.href?.startsWith("http") || item.href?.startsWith("https");

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-xl border p-7 transition hover:-translate-y-1 ${featuredCls}`}
    >
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
            item.badgeTone === "ruby"
              ? "bg-ruby/15 text-ruby border border-ruby/40"
              : "bg-gold/15 text-gold border border-gold/40"
          }`}
        >
          <Icon className="h-3 w-3" />
          {item.badge}
        </span>
        {item.featured ? (
          <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black shimmer-gold">
            Best Value
          </span>
        ) : null}
      </div>

      <h3
        className={`mt-5 font-royal font-black uppercase tracking-tight text-white ${
          item.featured ? "text-3xl sm:text-4xl" : "text-xl"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`mt-3 leading-7 text-white/65 ${
          item.featured ? "text-base max-w-xl" : "text-sm"
        }`}
      >
        {item.description}
      </p>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p
            className={`font-royal font-black text-gold ${
              item.featured ? "text-5xl" : "text-3xl"
            }`}
          >
            {item.price}
          </p>
          {item.priceNote ? (
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/40">
              {item.priceNote}
            </p>
          ) : null}
        </div>
        {item.href ? (
          isExternal ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-gold px-5 text-sm font-semibold text-black hover:bg-goldLight"
            >
              {item.cta}
            </a>
          ) : (
            <Link
              href={item.href}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-gold px-5 text-sm font-semibold text-black hover:bg-goldLight"
            >
              {item.cta}
            </Link>
          )
        ) : (
          <span className="inline-flex h-11 items-center rounded-md border border-white/15 px-5 text-xs uppercase tracking-[0.2em] text-white/45">
            Setup pending
          </span>
        )}
      </div>
    </article>
  );
}
