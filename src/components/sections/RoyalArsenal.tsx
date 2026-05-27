import Link from "next/link";
import {
  BookOpen,
  Crown,
  Dumbbell,
  CalendarDays,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  COUNSEL_AI,
  GYM_NUTRITION_PLAN,
  INNER_CIRCLE,
  SEVEN_PROTOCOLS,
  THE_EMPIRE,
  THE_PLAYBOOK,
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
  const playbookHref =
    resolvePaymentLink(THE_PLAYBOOK.paymentLinkEnvKey) ??
    "/products#the-playbook";
  const protocolsHref =
    resolvePaymentLink(SEVEN_PROTOCOLS.paymentLinkEnvKey) ??
    "/products#seven-protocols";
  const gymHref =
    resolvePaymentLink(GYM_NUTRITION_PLAN.paymentLinkEnvKey) ??
    "/products#built-different";
  const empireHref =
    resolvePaymentLink(THE_EMPIRE.paymentLinkEnvKey) ?? "/products#the-empire";
  const innerCircleHref =
    resolvePaymentLink(INNER_CIRCLE.paymentLinkEnvKey) ??
    "/products#inner-circle";
  const counselHref =
    resolvePaymentLink(COUNSEL_AI.paymentLinkEnvKey) ?? "/products#counsel";

  const items: Item[] = [
    {
      badge: "Starter",
      badgeTone: "gold",
      icon: Crown,
      title: THE_PLAYBOOK.title,
      description: THE_PLAYBOOK.description,
      price: `$${THE_PLAYBOOK.priceUsd}`,
      priceNote: `Value $${THE_PLAYBOOK.originalPriceUsd}+ · ${THE_PLAYBOOK.saveLabel}`,
      href: playbookHref,
      cta: "Get The Playbook",
      featured: true,
    },
    {
      badge: "Entry",
      badgeTone: "gold",
      icon: BookOpen,
      title: SEVEN_PROTOCOLS.title,
      description: SEVEN_PROTOCOLS.description,
      price: `$${SEVEN_PROTOCOLS.priceBundleUsd}`,
      priceNote: `$${SEVEN_PROTOCOLS.priceEachUsd} each · all 7 ebooks`,
      href: protocolsHref,
      cta: "Get all 7",
    },
    {
      badge: "Coaching",
      badgeTone: "ruby",
      icon: MessageSquare,
      title: INNER_CIRCLE.title,
      description: INNER_CIRCLE.description,
      price: `$${INNER_CIRCLE.priceUsd}`,
      priceNote: `${INNER_CIRCLE.cadence} · cancel anytime`,
      href: innerCircleHref,
      cta: "Join Inner Circle",
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
      badge: "Done with you",
      badgeTone: "gold",
      icon: CalendarDays,
      title: THE_EMPIRE.title,
      description: THE_EMPIRE.description,
      price: formatPrice(THE_EMPIRE.priceUsd),
      priceNote: `${THE_EMPIRE.cadence} · ${THE_EMPIRE.scarcity}`,
      href: empireHref,
      cta: "Apply",
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
            subtitle="The Playbook, 7 Protocols, Built Different, Kings Counsel AI, The Inner Circle, and The Empire — see the full list for every ebook."
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
            Best starter value
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
