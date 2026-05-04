import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import type { CatalogItem } from "@/lib/portal-catalog";

type Props = {
  item: CatalogItem;
  /** When the user does not own this entitlement, the card locks. */
  locked?: boolean;
};

export function CourseCard({ item, locked = false }: Props) {
  const Icon = item.icon;
  const isExternal = /^https?:\/\//.test(item.href);
  const Wrapper = locked
    ? ({ children }: { children: React.ReactNode }) => (
        <div className="group relative block h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 opacity-70">
          {children}
        </div>
      )
    : ({ children }: { children: React.ReactNode }) =>
        isExternal ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 transition hover:-translate-y-1 hover:border-gold/40"
          >
            {children}
          </a>
        ) : (
          <Link
            href={item.href}
            className="group relative block h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 transition hover:-translate-y-1 hover:border-gold/40"
          >
            {children}
          </Link>
        );

  return (
    <Wrapper>
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      {item.cover ? (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={item.cover}
            alt=""
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-gold text-black">
            <Icon className="h-4 w-4" />
          </div>
          {locked ? (
            <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <Lock className="h-3 w-3" /> Locked
            </div>
          ) : null}
        </div>
      ) : (
        <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-stone via-stone/60 to-stoneDeep">
          <Icon className="h-10 w-10 text-gold/80" />
          {locked ? (
            <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <Lock className="h-3 w-3" /> Locked
            </div>
          ) : null}
        </div>
      )}

      <div className="p-5">
        <h3 className="font-royal text-base font-bold text-white">
          {item.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/55">
          {item.subtitle}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.14em] text-white/40">
          {item.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>

        {item.progress > 0 ? (
          <div className="mt-4">
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gold"
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-gold/80">
              {item.progress}% complete
            </p>
          </div>
        ) : null}

        <p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition group-hover:gap-3">
          {locked ? "Claim Access" : item.progress >= 100 ? "Revisit" : item.progress > 0 ? "Continue" : "Begin"}
          <ArrowRight className="h-3.5 w-3.5" />
        </p>
      </div>
    </Wrapper>
  );
}
