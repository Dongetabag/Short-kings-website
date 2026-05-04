import { PillarPage } from "@/components/sections/PillarPage";
import { PILLARS, DATING_TILES } from "@/lib/media-pillars";

export const metadata = {
  title: PILLARS.dating.navLabel,
  description: PILLARS.dating.pageSubtitle,
};

export default function DatingPage() {
  return <PillarPage pillar={PILLARS.dating} tiles={DATING_TILES} />;
}
