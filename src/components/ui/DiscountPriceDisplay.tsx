type DiscountPriceDisplayProps = {
  /** Struck compare-at text, e.g. "$100 VALUE" */
  compareAtLabel: string;
  /** Current sell price, e.g. "$27.99" */
  currentPrice: string;
  /** Red savings badge, e.g. "SAVE 72%" */
  badge: string;
  /** Optional second line under the main price (products page). */
  secondaryLine?: string;
  /** Optional fine print under the price block (products page). */
  finePrint?: string;
  /** Larger type for homepage funnel cards. */
  size?: "card" | "hero";
};

/**
 * Crossed-out value + current gold price + red savings badge.
 * On narrow screens stacks compare-at above current when needed;
 * on wider screens keeps them on one wrapping row.
 */
export function DiscountPriceDisplay({
  compareAtLabel,
  currentPrice,
  badge,
  secondaryLine,
  finePrint,
  size = "card",
}: DiscountPriceDisplayProps) {
  const currentClass =
    size === "hero"
      ? "font-display text-2xl font-bold text-gold sm:text-3xl"
      : "font-display text-xl font-bold text-gold sm:text-2xl";
  const compareClass =
    size === "hero"
      ? "text-sm font-semibold text-white/40 line-through decoration-white/40 sm:text-base"
      : "text-xs font-semibold text-white/40 line-through decoration-white/40 sm:text-sm";

  return (
    <div>
      <div className="flex flex-col gap-1.5 min-[380px]:flex-row min-[380px]:flex-wrap min-[380px]:items-baseline min-[380px]:gap-x-2.5 min-[380px]:gap-y-1">
        <span className={compareClass}>{compareAtLabel}</span>
        <span className="inline-flex flex-wrap items-center gap-2">
          <span className={currentClass}>
            <span className="mr-1.5 text-[0.65em] font-semibold uppercase tracking-[0.08em] text-gold/80">
              Now
            </span>
            {currentPrice}
          </span>
          <span className="inline-flex shrink-0 items-center rounded-sm bg-ruby px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
            {badge}
          </span>
        </span>
      </div>
      {secondaryLine ? (
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
          {secondaryLine}
        </p>
      ) : null}
      {finePrint ? (
        <p className="mt-1.5 text-xs leading-relaxed text-white/50">{finePrint}</p>
      ) : null}
    </div>
  );
}
