import { listMembers } from "@/lib/admin-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = { title: "Members · Admin" };

export default async function MembersPage() {
  const members = await listMembers();
  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        eyebrow="The Royal Court"
        titleTop="Members"
        titleHighlight={`(${members.length})`}
        subtitle="Every King in the Empire. Click a row in Phase 2 to view their session history."
      />

      <div className="mt-10 overflow-hidden rounded-xl border border-white/10 bg-stone/40">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] text-left text-[11px] uppercase tracking-[0.18em] text-white/45">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Height · City</th>
              <th className="px-5 py-3">Joined</th>
              <th className="px-5 py-3">Last active</th>
              <th className="px-5 py-3 text-right">LTV</th>
              <th className="px-5 py-3">Entitlements</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {members.map((m) => (
              <tr key={m.id} className="text-white/80 hover:bg-white/[0.02]">
                <td className="px-5 py-4 font-medium text-white">{m.name}</td>
                <td className="px-5 py-4 text-white/65">{m.email}</td>
                <td className="px-5 py-4 text-white/55">{m.height} · {m.city}</td>
                <td className="px-5 py-4 text-white/55">{m.joinedAt}</td>
                <td className="px-5 py-4 text-white/55">{m.lastActive}</td>
                <td className="px-5 py-4 text-right font-medium text-gold">${m.ltv}</td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-1">
                    {m.entitlements.map((e) => (
                      <span
                        key={e}
                        className="inline-flex items-center rounded-full border border-gold/30 bg-gold/[0.08] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-gold"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/30">
        Mock data. Phase 2 wires Neon Postgres + NextAuth.
      </p>
    </div>
  );
}
