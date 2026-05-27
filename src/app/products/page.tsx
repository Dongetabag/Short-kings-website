import Link from "next/link";
import { Crown, Sparkles, Calendar, Check, FileDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  COUNSEL_AI,
  GYM_NUTRITION_PLAN,
  INNER_CIRCLE,
  SEVEN_PROTOCOLS,
  SITE,
  THE_EMPIRE,
  THE_PLAYBOOK,
} from "@/lib/site";
import {
  EBOOKS,
  COACHING_PRODUCTS,
  type Product,
  resolvePaymentLink,
} from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
  const href = resolvePaymentLink(product.paymentLinkEnvKey);
  const isPaid = product.priceUsd > 0;
  return (
    <article
      id={product.id}
      className="group relative h-full overflow-hidden rounded-xl border border-gold/20 bg-stone/40 p-6 transition hover:-translate-y-1 hover:border-gold/40"
    >
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <h3 className="font-royal text-lg font-bold tracking-[-0.01em] text-white">
        {product.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-white/65">{product.tagline}</p>
      {product.description ? (
        <p className="mt-3 text-xs leading-6 text-white/45">
          {product.description}
        </p>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="font-royal text-2xl font-black text-gold">
          {isPaid ? `$${product.priceUsd}` : "Pricing soon"}
        </p>
        {isPaid ? (
          href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-gold px-4 text-sm font-semibold text-black hover:bg-goldLight"
            >
              Buy · ${product.priceUsd}
            </a>
          ) : (
            <span className="inline-flex h-10 items-center rounded-md border border-white/15 px-4 text-[10px] uppercase tracking-[0.2em] text-white/45">
              Setup pending
            </span>
          )
        ) : product.file ? (
          <a
            href={product.file.href}
            download={product.file.filename}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-gold/40 px-4 text-sm font-semibold text-white hover:bg-white/5"
          >
            <FileDown className="h-4 w-4" /> Download
          </a>
        ) : (
          <span className="inline-flex h-10 items-center rounded-md border border-white/15 px-4 text-[10px] uppercase tracking-[0.2em] text-white/45">
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const playbookHref = resolvePaymentLink(THE_PLAYBOOK.paymentLinkEnvKey);
  const counselHref = resolvePaymentLink(COUNSEL_AI.paymentLinkEnvKey);
  const gymHref = resolvePaymentLink(GYM_NUTRITION_PLAN.paymentLinkEnvKey);
  const empireHref = resolvePaymentLink(THE_EMPIRE.paymentLinkEnvKey);
  const protocolsHref = resolvePaymentLink(SEVEN_PROTOCOLS.paymentLinkEnvKey);
  const innerCircle = COACHING_PRODUCTS[0];
  const innerCircleHref = resolvePaymentLink(innerCircle?.paymentLinkEnvKey);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Products"
          titleTop="Every product."
          titleHighlight="Every price."
          subtitle="Ebooks from $12 · Kings Counsel AI $15/mo · The Playbook $185 · Built Different $65 · The Inner Circle $150/mo · The Empire $997."
        />
      </Reveal>

      <div className="mt-14 grid gap-16">
        <section id="seven-protocols" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-stone/40 p-8 sm:p-10">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="eyebrow">{SEVEN_PROTOCOLS.eyebrow}</p>
                  <h2 className="mt-2 font-royal text-3xl font-black uppercase text-white sm:text-4xl">
                    {SEVEN_PROTOCOLS.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {SEVEN_PROTOCOLS.description}
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-4 rounded-xl border border-white/10 bg-black/40 p-6">
                  <div>
                    <p className="font-royal text-4xl font-black text-gold">
                      ${SEVEN_PROTOCOLS.priceEachUsd}
                      <span className="ml-2 text-lg font-semibold text-white/50">
                        each
                      </span>
                    </p>
                    <p className="mt-2 font-royal text-3xl font-black text-gold">
                      ${SEVEN_PROTOCOLS.priceBundleUsd}
                      <span className="ml-2 text-sm font-semibold text-white/50">
                        all 7
                      </span>
                    </p>
                  </div>
                  {protocolsHref ? (
                    <a
                      href={protocolsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold font-semibold text-black hover:bg-goldLight"
                    >
                      Get all 7 · ${SEVEN_PROTOCOLS.priceBundleUsd}
                    </a>
                  ) : (
                    <span className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 text-xs uppercase tracking-[0.2em] text-white/45">
                      Bundle checkout setup pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="counsel" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-stone/40 p-8 sm:p-10">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="eyebrow">{COUNSEL_AI.eyebrow}</p>
                  <h2 className="mt-2 font-royal text-3xl font-black uppercase text-white sm:text-4xl">
                    {COUNSEL_AI.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {COUNSEL_AI.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-emerald-400">
                    First {COUNSEL_AI.trialDays} days free.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/40 p-6">
                  <p className="font-royal text-5xl font-black text-gold">
                    ${COUNSEL_AI.priceUsd}
                    <span className="text-lg text-white/50">{COUNSEL_AI.cadence}</span>
                  </p>
                  {counselHref ? (
                    <a
                      href={counselHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-md bg-gold px-5 font-semibold text-black hover:bg-goldLight"
                    >
                      <Sparkles className="h-4 w-4" /> Start trial
                    </a>
                  ) : (
                    <span className="inline-flex h-12 items-center rounded-md border border-white/15 px-5 text-xs uppercase tracking-[0.2em] text-white/45">
                      Setup pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="the-playbook" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-stone/60 p-8 shadow-[0_0_60px_rgba(212,175,55,0.12)] sm:p-10">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <div className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-black shimmer-gold">
                <Crown className="h-3 w-3" /> Best starter value
              </div>

              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="eyebrow">{THE_PLAYBOOK.eyebrow}</p>
                  <h2 className="mt-2 font-royal text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
                    {THE_PLAYBOOK.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {THE_PLAYBOOK.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {THE_PLAYBOOK.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-black/40 p-7">
                  <p className="text-sm text-white/40 line-through">
                    Value: ${THE_PLAYBOOK.originalPriceUsd}+
                  </p>
                  <p className="font-royal text-6xl font-black text-gold">
                    ${THE_PLAYBOOK.priceUsd}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                    one time · {THE_PLAYBOOK.saveLabel}
                  </p>
                  {playbookHref ? (
                    <a
                      href={playbookHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gold font-semibold text-black hover:bg-goldLight"
                    >
                      <Crown className="h-4 w-4" /> Get The Playbook
                    </a>
                  ) : (
                    <span className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md border border-white/15 text-xs uppercase tracking-[0.22em] text-white/45">
                      Setup pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="built-different" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-stone/40 p-10">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="eyebrow">{GYM_NUTRITION_PLAN.eyebrow}</p>
                  <h2 className="mt-2 font-royal text-3xl font-black uppercase text-white sm:text-4xl">
                    {GYM_NUTRITION_PLAN.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {GYM_NUTRITION_PLAN.description}
                  </p>
                  <p className="mt-3 text-sm text-white/50">
                    Also included inside The Empire.
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/40 p-6">
                  <p className="font-royal text-5xl font-black text-gold">
                    ${GYM_NUTRITION_PLAN.priceUsd}
                  </p>
                  {gymHref ? (
                    <a
                      href={gymHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-md bg-gold px-5 font-semibold text-black hover:bg-goldLight"
                    >
                      Get Built Different
                    </a>
                  ) : (
                    <span className="inline-flex h-12 items-center rounded-md border border-white/15 px-5 text-xs uppercase tracking-[0.2em] text-white/45">
                      Setup pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="inner-circle" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-ruby/30 bg-stone/40 p-10">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="eyebrow">{INNER_CIRCLE.eyebrow}</p>
                  <h2 className="mt-2 font-royal text-3xl font-black uppercase text-white sm:text-4xl">
                    {INNER_CIRCLE.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {innerCircle?.description ?? INNER_CIRCLE.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {INNER_CIRCLE.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-white/65"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-black/40 p-7">
                  <p className="text-sm text-white/40 line-through">
                    Value: ${INNER_CIRCLE.originalPriceUsd}+
                  </p>
                  <p className="font-royal text-5xl font-black text-gold">
                    ${INNER_CIRCLE.priceUsd}
                    <span className="text-xl text-white/50">
                      {INNER_CIRCLE.cadence}
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-emerald-400">
                    Month to month · cancel anytime
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    {innerCircleHref ? (
                      <a
                        href={innerCircleHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold font-semibold text-black hover:bg-goldLight"
                      >
                        Join The Inner Circle
                      </a>
                    ) : (
                      <span className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 text-xs uppercase tracking-[0.2em] text-white/45">
                        Checkout setup pending
                      </span>
                    )}
                    <a
                      href={SITE.coaching.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/40 font-semibold text-white hover:bg-white/5"
                    >
                      <Calendar className="h-4 w-4" /> Book on Calendly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="the-empire" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold/50 bg-stone/50 p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gold" />
              <div className="absolute right-6 top-6 rounded-full bg-ruby/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-ruby border border-ruby/40">
                {THE_EMPIRE.scarcity}
              </div>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="eyebrow">{THE_EMPIRE.eyebrow}</p>
                  <h2 className="mt-2 font-royal text-3xl font-black uppercase text-white sm:text-4xl">
                    {THE_EMPIRE.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {THE_EMPIRE.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {THE_EMPIRE.includes.map((item) => (
                      <li key={item} className="text-sm text-white/65">
                        · {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-white/50">
                    Split via Affirm or Afterpay — pay in installments and start
                    today.
                  </p>
                </div>
                <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-black/40 p-7">
                  <p className="text-sm text-white/40 line-through">
                    Value: ${THE_EMPIRE.originalPriceUsd}+
                  </p>
                  <p className="font-royal text-5xl font-black text-gold">
                    ${THE_EMPIRE.priceUsd}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                    {THE_EMPIRE.cadence}
                  </p>
                  {empireHref ? (
                    <a
                      href={empireHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gold font-semibold text-black hover:bg-goldLight"
                    >
                      Apply for The Empire
                    </a>
                  ) : (
                    <span className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md border border-white/15 text-xs uppercase tracking-[0.2em] text-white/45">
                      Setup pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="ebooks" className="scroll-mt-24">
          <Reveal>
            <SectionHeader
              eyebrow="Ebooks"
              titleTop="Seven playbooks."
              titleHighlight="$12 each."
              subtitle="Buy individually below, or get all seven in The 7 Protocols bundle above."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EBOOKS.map((p, i) => (
              <Reveal key={p.id} stagger={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/portal"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-gold/40 bg-white/[0.04] px-7 font-semibold text-white hover:bg-white/[0.08]"
          >
            Already a member? Open the portal
          </Link>
        </div>
      </div>
    </div>
  );
}
