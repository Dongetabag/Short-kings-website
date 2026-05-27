"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  PRODUCT_TIERS,
  type ProductTier,
  type TierProduct,
} from "@/lib/product-tiers";

export type ResolvedTierProduct = TierProduct & { href: string | null };

type ResolvedTier = Omit<ProductTier, "products"> & {
  products: ResolvedTierProduct[];
};

type Props = {
  tiers: ResolvedTier[];
};

export function ProductTierPicker({ tiers }: Props) {
  const [activeId, setActiveId] = useState<ResolvedTier["id"]>("tier-1");
  const active = tiers.find((t) => t.id === activeId) ?? tiers[0];

  return (
    <div className="mt-12">
      <div
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
        role="tablist"
        aria-label="Product tiers"
      >
        {tiers.map((tier) => {
          const selected = tier.id === activeId;
          return (
            <button
              key={tier.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${tier.id}-panel`}
              id={`${tier.id}-tab`}
              onClick={() => setActiveId(tier.id)}
              className={`rounded-sm border px-4 py-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                selected
                  ? "border-gold bg-gold/10"
                  : "border-white/15 bg-panel hover:border-ruby/40"
              }`}
            >
              <span
                className={`text-[10px] font-black uppercase tracking-[0.22em] ${
                  selected ? "text-gold" : "text-white/45"
                }`}
              >
                {tier.label}
              </span>
              <span className="mt-1 block font-royal text-lg font-bold uppercase leading-tight text-white">
                {tier.shortLabel}
              </span>
              <span className="mt-1 block text-[11px] leading-snug text-white/50">
                {tier.step}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`${active.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${active.id}-tab`}
        className="mt-8"
      >
        <div
          className={
            active.products.length > 1
              ? "grid gap-6 lg:grid-cols-2"
              : "max-w-3xl mx-auto"
          }
        >
          {active.products.map((product) => (
            <TierProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TierProductCard({ product }: { product: ResolvedTierProduct }) {
  const isExternal =
    product.href?.startsWith("http") || product.href?.startsWith("https");
  const ctaHref = product.href ?? `/products${product.productsAnchor}`;

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-sm border border-gold/30 bg-panel p-7">
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
        {product.eyebrow}
      </p>
      <h3 className="mt-2 font-royal text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
        {product.title}
      </h3>
      <p className="mt-2 text-sm font-semibold text-ruby">{product.forWho}</p>
      <p className="mt-3 text-sm leading-7 text-white/65">{product.description}</p>

      {product.includes?.length ? (
        <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
          {product.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-white/70"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {product.nudge ? (
        <p className="mt-5 border-l-2 border-ruby/60 pl-3 text-xs italic leading-6 text-white/45">
          {product.nudge}
        </p>
      ) : null}

      <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-royal text-4xl font-black text-gold">
            {product.priceLabel}
          </p>
          {product.priceNote ? (
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/40">
              {product.priceNote}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          {product.href && isExternal ? (
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-black hover:bg-goldLight"
            >
              {product.cta}
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="inline-flex h-11 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-black hover:bg-goldLight"
            >
              {product.cta}
            </Link>
          )}
          <Link
            href={`/products${product.productsAnchor}`}
            className="text-center text-[11px] uppercase tracking-[0.16em] text-white/40 hover:text-gold"
          >
            Full details →
          </Link>
        </div>
      </div>
    </article>
  );
}
