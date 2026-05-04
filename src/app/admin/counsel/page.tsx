import { listCounselLogs } from "@/lib/admin-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Flag, MessageSquare } from "lucide-react";

export const metadata = { title: "Counsel Logs · Admin" };

export default async function CounselLogsPage() {
  const logs = await listCounselLogs();

  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        eyebrow="Counsel Audit"
        titleTop="Conversation"
        titleHighlight="Logs."
        subtitle="Read-only access to recent Counsel sessions. Used to tune the system prompt and catch off-brand replies."
      />

      <div className="mt-10 grid gap-4">
        {logs.map((l) => (
          <article
            key={l.id}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-6"
          >
            <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-royal text-sm font-bold text-white">
                  {l.email}
                </p>
                <p className="text-xs text-white/50">
                  Started {l.startedAt} · {l.messages} messages
                </p>
              </div>
              <div className="flex items-center gap-2">
                {l.flagged ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-ruby/40 bg-ruby/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ruby">
                    <Flag className="h-3 w-3" /> Flagged
                  </span>
                ) : null}
                <button className="inline-flex h-9 items-center gap-2 rounded-md border border-white/15 px-3 text-xs uppercase tracking-[0.16em] text-white/70 hover:text-white">
                  <MessageSquare className="h-3 w-3" /> Open thread
                </button>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/65">
              <span className="text-gold">Last reply: </span>{l.lastMessage}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
