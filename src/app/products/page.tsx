import Link from "next/link";
import { Crown, Sparkles, Calendar, Check, FileDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BUNDLE, COUNSEL_AI, COACHING, SITE } from "@/lib/site";
import { EBOOKS, FITNESS_PROGRAMS, type Product, resolvePaymentLink } from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
  const href = resolvePaymentLink(product.paymentLinkEnvKey);
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
        <p className="mt-3 text-xs leading-6 text-white/45">{product.description}</p>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="font-royal text-2xl font-black text-gold">
          {product.priceUsd > 0 ? `$${product.priceUsd}` : "Free"}
        </p>
        {product.priceUsd > 0 ? (
          href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-gold px-4 text-sm font-semibold text-black hover:bg-goldLight"
            >
              Obtain · ${product.priceUsd}
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
        ) : null}
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const bundleHref = resolvePaymentLink(BUNDLE.paymentLinkEnvKey);
  const counselHref = resolvePaymentLink(COUNSEL_AI.paymentLinkEnvKey);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal>
        <SectionHeader
          eyebrow="The Royal Arsenal"
          titleTop="Pick Your"
          titleHighlight="Path to the Throne"
          subtitle="Five playbooks. One AI. One private audience. The Empire arms you for what's next."
        />
      </Reveal>

      <div className="mt-14 grid gap-16">
        {/* Bundle */}
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
                    <span className="block">The Empire</span>
                    <span className="block gold-gradient">Bundle.</span>
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {BUNDLE.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {BUNDLE.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-black/40 p-7">
                  <p className="text-sm text-white/40 line-through">
                    ${BUNDLE.originalPriceUsd} if bought separately
                  </p>
                  <p className="font-royal text-6xl font-black text-gold">
                    ${BUNDLE.priceUsd}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/40">
                    One-time payment · instant delivery
                  </p>
                  {bundleHref ? (
                    <a
                      href={bundleHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gold font-semibold text-black hover:bg-goldLight"
                    >
                      <Crown className="h-4 w-4" /> Claim the Crown
                    </a>
                  ) : (
                    <span className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md border border-white/15 text-xs uppercase tracking-[0.22em] text-white/45">
                      Setup pending · Stripe configuring
                    </span>
                  )}
                  <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-white/30">
                    7-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Ebooks */}
        <section id="ebooks" className="scroll-mt-24">
          <Reveal>
            <SectionHeader
              eyebrow="Dating"
              titleTop="The Five"
              titleHighlight="Playbooks"
              subtitle="Twenty dollars each. Or sixty for all five inside the bundle."
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

        {/* Counsel AI */}
        <section id="counsel" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-stone/40 p-8 sm:p-10">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="eyebrow">{COUNSEL_AI.eyebrow}</p>
                  <h2 className="mt-2 font-royal text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl">
                    <span className="block">King&apos;s Counsel</span>
                    <span className="block gold-gradient">AI.</span>
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    {COUNSEL_AI.description}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-emerald">
                    First {COUNSEL_AI.trialDays} days free
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/40 p-6">
                  <div>
                    <p className="font-royal text-5xl font-black text-gold">
                      ${COUNSEL_AI.priceUsd}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      {COUNSEL_AI.cadence}
                    </p>
                  </div>
                  {counselHref ? (
                    <a
                      href={counselHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-md bg-gold px-5 font-semibold text-black hover:bg-goldLight"
                    >
                      <Sparkles className="h-4 w-4" /> Summon
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

        {/* Coaching */}
        <section id="coaching" className="scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-ruby/30 bg-stone/40 p-10 text-center">
              <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
              <span aria-hidden className="icon-crown-mask mx-auto inline-block h-10 w-10 bg-gold" />
              <p className="mt-3 eyebrow">{COACHING.eyebrow}</p>
              <h2 className="mt-1 font-royal text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl">
                <span className="block">1-on-1</span>
                <span className="block gold-gradient">Royal Counsel</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/65">
                {COACHING.description}
              </p>
              <a
                href={SITE.coaching.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-semibold text-black hover:bg-goldLight"
              >
                <Calendar className="h-4 w-4" /> Request Audience · ${COACHING.priceUsd}
              </a>
            </div>
          </Reveal>
        </section>

        {/* Fitness, free */}
        <section id="fitness" className="scroll-mt-24">
          <Reveal>
            <SectionHeader
              eyebrow="Fitness"
              titleTop="Free Programs from"
              titleHighlight="The Royal Treasury"
              subtitle="The body backs the frame. Five programs. No charge. Compound lifts, sane volume, real progress on paper."
            />
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FITNESS_PROGRAMS.map((p, i) => (
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
            Already a King? Enter the Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
