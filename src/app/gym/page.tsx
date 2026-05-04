import { PillarPage } from "@/components/sections/PillarPage";
import { PILLARS, GYM_TILES } from "@/lib/media-pillars";

export const metadata = {
  title: PILLARS.gym.navLabel,
  description: PILLARS.gym.pageSubtitle,
};

export default function GymPage() {
  return <PillarPage pillar={PILLARS.gym} tiles={GYM_TILES} />;
}
