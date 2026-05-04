import { PillarPage } from "@/components/sections/PillarPage";
import { PILLARS, THRONE_TILES } from "@/lib/media-pillars";

export const metadata = {
  title: PILLARS["throne-room"].navLabel,
  description: PILLARS["throne-room"].pageSubtitle,
};

export default function ThroneRoomPage() {
  return <PillarPage pillar={PILLARS["throne-room"]} tiles={THRONE_TILES} />;
}
