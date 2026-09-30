import { Check, X } from "lucide-react";
import Link from "next/link";
import { DiscountPriceDisplay } from "@/components/ui/DiscountPriceDisplay";
import type { CompareRow } from "@/lib/offer-links";

export type OfferDiscountPrice = {
  compareAtLabel: string;
  currentPrice: string;
  badge: string;
  secondaryLine?: string;
  finePrint?: string;
};

type ProductOfferCardProps = {
  id?: string;
  tag: string;
  name: string;
  forLine: string;
  description: string;
  /** Muted delivery detail shown between description and price. */
  deliveryNote?: string;
  includes?: readonly string[];
  /** When set, shows included (gold check) vs not (grey X + strikethrough). */
  compareRows?: CompareRow[];
  /** Lock description height so side by side comparison checklists align. */
  descriptionMinClass?: string;
  price?: string;
  priceNote?: string;
  discountPrice?: OfferDiscountPrice;
  cta: string;
  href?: string;
  external?: boolean;
  featured?: boolean;
};

export function ProductOfferCard({
  id,
  tag,
  name,
  forLine,
  description,
  deliveryNote,
  includes,
  compareRows,
  descriptionMinClass,
  price,
  priceNote,
  discountPrice,
  cta,
  href,
  external,
  featured,
}: ProductOfferCardProps) {
  const borderClass = featured
    ? "border-gold/50 shadow-[0_0_40px_rgba(212,175,55,0.1)]"
    : "border-gold/20";

  const ctaClass = featured
    ? "inline-flex min-h-11 w-full items-center justify-center rounded-md bg-gold px-5 text-sm font-semibold text-black hover:bg-goldLight"
    : "inline-flex min-h-11 w-full items-center justify-center rounded-md border border-gold/40 bg-white/[0.04] px-5 text-sm font-semibold text-white hover:bg-white/[0.08]";

  const rows =
    compareRows ??
    includes?.map((label) => ({ label, included: true as boolean }));

  return (
    <article
      id={id}
      className={`relative flex h-full flex-col overflow-hidden rounded-xl border bg-stone/40 p-5 sm:p-6 ${borderClass}`}
    >
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" aria-hidden />
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/80">
        {tag}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold uppercase text-white sm:text-2xl">
        {name}
      </h3>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
        {forLine}
      </p>
      <p
        className={`mt-3 text-sm leading-7 text-white/65 ${descriptionMinClass ?? ""}`}
      >
        {description}
      </p>
      {deliveryNote ? (
        <p className="mt-3 text-xs leading-relaxed text-white/45">{deliveryNote}</p>
      ) : null}
      {rows && rows.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {rows.map((row) => (
            <li
              key={row.label}
              className={`flex min-h-[1.35rem] items-start gap-2 text-sm leading-snug ${
                row.included ? "text-white/70" : "text-white/35"
              }`}
            >
              {row.included ? (
                <Check
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
                  aria-hidden
                />
              ) : (
                <X
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/35"
                  aria-hidden
                />
              )}
              <span className={row.included ? undefined : "line-through"}>
                {row.label}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-auto border-t border-white/10 pt-5">
        {discountPrice ? (
          <DiscountPriceDisplay
            compareAtLabel={discountPrice.compareAtLabel}
            currentPrice={discountPrice.currentPrice}
            badge={discountPrice.badge}
            secondaryLine={discountPrice.secondaryLine}
            finePrint={discountPrice.finePrint}
          />
        ) : (
          <>
            <p className="font-display text-xl font-bold uppercase text-gold sm:text-2xl">
              {price}
            </p>
            {priceNote ? (
              <p className="mt-1 text-xs leading-relaxed text-white/50">
                {priceNote}
              </p>
            ) : null}
          </>
        )}
        {href ? (
          <Link
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={`mt-4 ${ctaClass}`}
          >
            {cta}
          </Link>
        ) : (
          <span className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/15 text-[10px] uppercase tracking-[0.2em] text-white/45">
            Checkout setup pending
          </span>
        )}
      </div>
    </article>
  );
}
