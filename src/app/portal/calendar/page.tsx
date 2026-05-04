import { Calendar, Crown } from "lucide-react";
import { SITE } from "@/lib/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = { title: "Calendar" };

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <SectionHeader
        eyebrow="Private Audience"
        titleTop="Book a"
        titleHighlight="Royal Counsel"
        subtitle="45 minutes. Direct access. You leave with a written game plan."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 overflow-hidden rounded-xl border border-gold/30 bg-stone/40">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4 text-sm text-white/65">
            <Calendar className="h-4 w-4 text-gold" /> Powered by Calendly
          </div>
          <iframe
            src={`${SITE.coaching.calendly}?embed_domain=shortkingsempire.com&embed_type=Inline`}
            title="Calendly"
            className="h-[720px] w-full bg-white"
          />
        </div>

        <aside className="rounded-xl border border-white/10 bg-stone/40 p-6">
          <Crown className="h-6 w-6 text-gold" />
          <p className="mt-3 font-royal text-lg text-white">What to bring</p>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-white/65">
            <li>One real situation. Recent. Detailed.</li>
            <li>Current Instagram or dating-app profile.</li>
            <li>A specific question you want answered.</li>
            <li>An open mind. Frame work is uncomfortable on purpose.</li>
          </ul>
          <a
            href={SITE.coaching.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold w-full px-4 font-semibold text-black hover:bg-goldLight"
          >
            <Calendar className="h-4 w-4" /> Open in new tab
          </a>
        </aside>
      </div>
    </div>
  );
}
