import { PillarPage } from "@/components/sections/PillarPage";
import { PILLARS, LIFESTYLE_TILES } from "@/lib/media-pillars";

export const metadata = {
  title: PILLARS.lifestyle.navLabel,
  description: PILLARS.lifestyle.pageSubtitle,
};

export default function LifestylePage() {
  return <PillarPage pillar={PILLARS.lifestyle} tiles={LIFESTYLE_TILES} />;
}
