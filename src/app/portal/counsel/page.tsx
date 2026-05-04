import { CounselChat } from "@/components/portal/CounselChat";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = { title: "King's Counsel" };

export default function CounselPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <SectionHeader
        eyebrow="Royal Advisor, On Call"
        titleTop="The King's"
        titleHighlight="Counsel"
        subtitle="Trained on the Empire's frameworks. Ask it anything. Texts. Profiles. First-date plans. Mindset reframes."
      />
      <div className="mt-10">
        <CounselChat />
      </div>
    </div>
  );
}
