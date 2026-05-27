import Link from "next/link";
import { Crown, Sparkles, Calendar, Check, FileDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  BUNDLE,
  COUNSEL_AI,
  COACHING,
  GYM_NUTRITION_PLAN,
  SITE,
  TRANSFORMATION_3MO,
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
  const bundleHref = resolvePaymentLink(BUNDLE.paymentLinkEnvKey);
  const counselHref = resolvePaymentLink(COUNSEL_AI.paymentLinkEnvKey);
  const gymHref = resolvePaymentLink(GYM_NUTRITION_PLAN.paymentLinkEnvKey);
  const transformHref = resolvePaymentLink(TRANSFORMATION_3MO.paymentLinkEnvKey);
  const monthlyCoaching = COACHING_PRODUCTS[0];
  const monthlyHref = resolvePaymentLink(monthlyCoaching?.paymentLinkEnvKey);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Products"
          titleTop="The full"
          titleHighlight="product suite."
          subtitle="Bundle, coaching, Built Different at $65, King's Counsel, and seven ebooks at $12 each — in the order below."
        />
      </Reveal>

      <div className="mt-14 grid gap-16">
        <section id="bundle" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-stone/60 p-8 shadow-[0_0_60px_rgba(212,175,55,0.12)] sm:p-10">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <div className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-black shimmer-gold">
                <Crown className="h-3 w-3" /> Best Value
              </div>

              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="eyebrow">{BUNDLE.eyebrow}</p>
                  <h2 className="mt-2 font-royal text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
                    {BUNDLE.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {BUNDLE.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {BUNDLE.includes.map((item) => (
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
                    ${BUNDLE.originalPriceUsd} value
                  </p>
                  <p className="font-royal text-6xl font-black text-gold">
                    ${BUNDLE.priceUsd}
                  </p>
                  {bundleHref ? (
                    <a
                      href={bundleHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gold font-semibold text-black hover:bg-goldLight"
                    >
                      <Crown className="h-4 w-4" /> Get the playbook
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

        <section id="monthly-coaching" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-ruby/30 bg-stone/40 p-10 text-center">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <p className="eyebrow">{COACHING.eyebrow}</p>
              <h2 className="mt-1 font-royal text-3xl font-black uppercase text-white sm:text-4xl">
                {COACHING.title}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/65">
                {monthlyCoaching?.description ?? COACHING.description}
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {monthlyHref ? (
                  <a
                    href={monthlyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-semibold text-black hover:bg-goldLight"
                  >
                    <Calendar className="h-4 w-4" /> Start coaching · $
                    {COACHING.priceUsd}
                    {COACHING.cadence}
                  </a>
                ) : (
                  <span className="inline-flex h-12 items-center rounded-md border border-white/15 px-7 text-xs uppercase tracking-[0.2em] text-white/45">
                    Checkout setup pending
                  </span>
                )}
                <a
                  href={SITE.coaching.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/40 px-7 font-semibold text-white hover:bg-white/5"
                >
                  <Calendar className="h-4 w-4" /> Book on Calendly
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="transformation-3-month" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-ruby/30 bg-stone/40 p-10">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="eyebrow">{TRANSFORMATION_3MO.eyebrow}</p>
                  <h2 className="mt-2 font-royal text-3xl font-black uppercase text-white sm:text-4xl">
                    {TRANSFORMATION_3MO.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {TRANSFORMATION_3MO.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {TRANSFORMATION_3MO.includes.map((item) => (
                      <li key={item} className="text-sm text-white/65">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/40 p-6">
                  <p className="font-royal text-4xl font-black text-gold">
                    ${TRANSFORMATION_3MO.priceUsd}
                  </p>
                  {transformHref ? (
                    <a
                      href={transformHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-md bg-gold px-5 font-semibold text-black hover:bg-goldLight"
                    >
                      Apply
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
                </div>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/40 p-6">
                  <p className="font-royal text-5xl font-black text-gold">
                    ${COUNSEL_AI.priceUsd}
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

        <section id="ebooks" className="scroll-mt-24">
          <Reveal>
            <SectionHeader
              eyebrow="Ebooks"
              titleTop="Seven playbooks."
              titleHighlight="$12 each."
              subtitle="From She Replied, Now What through Swipe Right on Yourself."
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
