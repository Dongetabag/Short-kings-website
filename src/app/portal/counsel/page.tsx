import { CounselChat } from "@/components/portal/CounselChat";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = { title: "King's Counsel" };

export default function CounselPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <SectionHeader
        eyebrow="Always-on advisor"
        titleTop="King's"
        titleHighlight="Counsel."
        subtitle="Trained on the Short Kings system. Ask it anything. Texts. Profiles. First-date plans. Mindset reframes."
      />
      <div className="mt-10">
        <CounselChat />
      </div>
    </div>
  );
}
