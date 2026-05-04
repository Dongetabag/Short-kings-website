import { listOrders } from "@/lib/admin-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = { title: "Orders · Admin" };

export default async function OrdersPage() {
  const orders = await listOrders();
  const total = orders.filter((o) => o.status === "paid").reduce((acc, o) => acc + o.amount, 0);

  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        eyebrow="The Treasury"
        titleTop="Orders"
        titleHighlight={`($${total})`}
        subtitle="Every transaction the Empire has accepted. Refunds link to the Stripe dashboard."
      />

      <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-stone/40">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-left text-[11px] uppercase tracking-[0.18em] text-white/45">
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Order ID</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {orders.map((o) => (
              <tr key={o.id} className="text-white/80">
                <td className="px-5 py-4 text-white/55">{o.date}</td>
                <td className="px-5 py-4 font-mono text-xs text-white/55">{o.id}</td>
                <td className="px-5 py-4 text-white/80">{o.email}</td>
                <td className="px-5 py-4 text-white">{o.product}</td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] ${
                      o.status === "paid"
                        ? "border border-emerald/30 bg-emerald/10 text-emerald"
                        : o.status === "refunded"
                          ? "border border-ruby/30 bg-ruby/10 text-ruby"
                          : "border border-white/15 bg-white/5 text-white/55"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-right font-medium text-gold">${o.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/30">
        Mock orders. Phase 2 wires the Stripe webhook to populate this table live.
      </p>
    </div>
  );
}
