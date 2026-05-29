import Link from "next/link";
import { Users, ShoppingCart, BarChart3, ArrowRight, Clapperboard } from "lucide-react";
import { listMembers, listOrders, getKpis } from "@/lib/admin-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import catalog from "@/lib/media-catalog.json";

export const metadata = { title: "Admin Overview" };

export default async function AdminOverview() {
  const [members, orders, kpis] = await Promise.all([
    listMembers(),
    listOrders(),
    getKpis(),
  ]);

  const recentOrders = orders.slice(0, 5);

  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        eyebrow="Admin"
        titleTop="The site,"
        titleHighlight="at a glance."
        subtitle="Members, orders, content, and leads. All the levers in one console."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={Users} label="Members" value={members.length} sub="entitled" />
        <Stat icon={ShoppingCart} label="Orders 30d" value={orders.length} sub="incl. refunded" />
        <Stat icon={BarChart3} label="Revenue 30d" value={`$${kpis.revenue30dUsd.toLocaleString()}`} sub="all sources" />
        <Stat icon={Clapperboard} label="Media indexed" value={catalog.count} sub="public/media" />
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Card title="Recent orders" href="/admin/orders">
          <ul className="mt-3 divide-y divide-white/10">
            {recentOrders.map((o) => (
              <li key={o.id} className="flex items-center justify-between py-3 text-sm">
                <div>
                  <p className="text-white">{o.email}</p>
                  <p className="text-xs text-white/50">{o.product}</p>
                </div>
                <div className="text-right">
                  <p className="text-white">${o.amount}</p>
                  <p className={`text-[10px] uppercase tracking-[0.18em] ${o.status === "paid" ? "text-emerald" : o.status === "refunded" ? "text-ruby" : "text-white/40"}`}>
                    {o.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Members" href="/admin/members">
          <ul className="mt-3 space-y-3 text-sm">
            {members.slice(0, 3).map((m) => (
              <li key={m.id} className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-white">{m.name}</p>
                  <p className="text-xs text-white/50">{m.email} · LTV ${m.ltv}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Quick actions" href="/admin/content">
          <ul className="mt-3 space-y-2 text-sm text-white/65">
            <li>· <Link href="/admin/content" className="hover:text-white">Upload an ebook or video</Link></li>
            <li>· <Link href="/admin/leads" className="hover:text-white">Export today&apos;s leads</Link></li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-5">
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <Icon className="h-5 w-5 text-gold" />
      <p className="mt-3 font-royal text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">{label}</p>
      {sub ? <p className="mt-0.5 text-[10px] text-white/30">{sub}</p> : null}
    </div>
  );
}

function Card({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <article className="relative overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-6">
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <div className="flex items-center justify-between">
        <h3 className="font-royal text-base font-bold text-white">{title}</h3>
        <Link href={href} className="inline-flex items-center gap-1 text-xs text-gold hover:gap-2">
          See all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      {children}
    </article>
  );
}
