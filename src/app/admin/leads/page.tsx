import { Download } from "lucide-react";
import { listLeads } from "@/lib/admin-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = { title: "Leads · Admin" };

export default async function LeadsPage() {
  const leads = await listLeads();

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-end justify-between gap-4">
        <SectionHeader
          eyebrow="Inbox"
          titleTop="Lead"
          titleHighlight="Capture."
          subtitle="Every email captured by the funnel and the lead magnet. Export to CSV when ready."
        />
        <button className="inline-flex h-11 items-center gap-2 rounded-md bg-gold px-5 text-sm font-semibold text-black hover:bg-goldLight">
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-stone/40">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-left text-[11px] uppercase tracking-[0.18em] text-white/45">
              <th className="px-5 py-3">Received</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Source</th>
              <th className="px-5 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {leads.map((l) => (
              <tr key={l.id}>
                <td className="px-5 py-4 text-white/55">{l.receivedAt}</td>
                <td className="px-5 py-4 text-white">{l.email}</td>
                <td className="px-5 py-4 text-white/65">{l.source}</td>
                <td className="px-5 py-4 text-white/55">{l.notes ?? ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
