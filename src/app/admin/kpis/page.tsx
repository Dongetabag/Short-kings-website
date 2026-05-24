import { TrendingUp, Eye, MousePointerClick, ShoppingCart, Crown, Calendar } from "lucide-react";
import { getKpis } from "@/lib/admin-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = { title: "KPIs · Admin" };

export default async function KpisPage() {
  const k = await getKpis();
  const heroCtr = ((k.heroCtaClicks30d / k.visitors30d) * 100).toFixed(1);
  const productConvRate = ((k.bundleConversions30d / k.productsViews30d) * 100).toFixed(2);

  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        eyebrow="Funnel KPIs"
        titleTop="The site's"
        titleHighlight="vital signs."
        subtitle="Last 30 days. Numbers will populate live in Phase 2 when Vercel Analytics + the custom event log come online."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={Eye} label="Visitors 30d" value={k.visitors30d.toLocaleString()} />
        <Stat icon={MousePointerClick} label="Hero CTA clicks" value={k.heroCtaClicks30d.toLocaleString()} sub={`${heroCtr}% CTR`} />
        <Stat icon={ShoppingCart} label="Products views" value={k.productsViews30d.toLocaleString()} />
        <Stat icon={Crown} label="Bundle conversions" value={k.bundleConversions30d} sub={`${productConvRate}% rate`} />
        <Stat icon={TrendingUp} label="Counsel subs" value={k.counselSubs} />
        <Stat icon={Calendar} label="Coaching sessions 30d" value={k.coachingSessions30d} />
        <Stat icon={Crown} label="Revenue 30d" value={`$${k.revenue30dUsd.toLocaleString()}`} highlight />
        <Stat icon={TrendingUp} label="ARPU 30d" value={`$${(k.revenue30dUsd / Math.max(1, k.bundleConversions30d + k.counselSubs)).toFixed(0)}`} />
      </div>

      <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-white/30">
        Mock totals. Wire @vercel/analytics + custom funnel events in Phase 4.
      </p>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border p-5 ${
        highlight
          ? "border-gold/40 bg-gold/[0.06] shadow-[0_0_30px_rgba(212,175,55,0.12)]"
          : "border-white/10 bg-stone/40"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <Icon className={`h-5 w-5 ${highlight ? "text-gold" : "text-gold/80"}`} />
      <p className="mt-3 font-royal text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">{label}</p>
      {sub ? <p className="mt-0.5 text-[10px] text-white/30">{sub}</p> : null}
    </div>
  );
}
