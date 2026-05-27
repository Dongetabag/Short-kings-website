import { Hero } from "@/components/sections/Hero";
import { StatsAuthority } from "@/components/sections/StatsAuthority";
import { Challenge } from "@/components/sections/Challenge";
import { RoyalArsenal } from "@/components/sections/RoyalArsenal";
import { MediaGrid } from "@/components/sections/MediaGrid";
import { RoyalCourt } from "@/components/sections/RoyalCourt";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionBand } from "@/components/ui/SectionBand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  DATING_TILES,
  LIFESTYLE_TILES,
  GYM_TILES,
  THRONE_TILES,
  MANUAL_PLAYBACK_PILLARS,
  PILLARS,
} from "@/lib/media-pillars";

const HOME_TILE_CAP = 3;

export default function Home() {
  return (
    <div className="funnel-flow">
      <SectionBand variant="hero">
        <Hero />
      </SectionBand>

      <SectionBand variant="alt">
        <StatsAuthority />
      </SectionBand>

      <SectionBand variant="red" id="challenge">
        <Challenge />
      </SectionBand>

      <SectionBand variant="gold">
        <RoyalArsenal />
      </SectionBand>

      <SectionBand variant="default">
        <RoyalCourt />
      </SectionBand>

      <SectionBand variant="alt" className="pb-8">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-4">
          <Reveal>
            <SectionHeader
              eyebrow="Proof in motion"
              titleTop="See the"
              titleHighlight="system work."
              subtitle="Dating, lifestyle, gym, and style — tap any reel on the homepage or open the full pillar page."
            />
          </Reveal>
        </div>
        <MediaGrid
          id="dating"
          eyebrow={PILLARS.dating.homeEyebrow}
          titleTop={PILLARS.dating.homeTitleTop}
          titleHighlight={PILLARS.dating.homeTitleHighlight}
          subtitle={PILLARS.dating.homeSubtitle}
          tiles={DATING_TILES}
          maxTiles={HOME_TILE_CAP}
          fullPageHref={PILLARS.dating.href}
          fullPageLabel={PILLARS.dating.ctaLabel}
          manualPlayback
          compact
        />
        <MediaGrid
          id="lifestyle"
          eyebrow={PILLARS.lifestyle.homeEyebrow}
          titleTop={PILLARS.lifestyle.homeTitleTop}
          titleHighlight={PILLARS.lifestyle.homeTitleHighlight}
          subtitle={PILLARS.lifestyle.homeSubtitle}
          tiles={LIFESTYLE_TILES}
          maxTiles={HOME_TILE_CAP}
          fullPageHref={PILLARS.lifestyle.href}
          fullPageLabel={PILLARS.lifestyle.ctaLabel}
          manualPlayback={MANUAL_PLAYBACK_PILLARS.includes("lifestyle")}
          compact
        />
        <MediaGrid
          id="gym"
          eyebrow={PILLARS.gym.homeEyebrow}
          titleTop={PILLARS.gym.homeTitleTop}
          titleHighlight={PILLARS.gym.homeTitleHighlight}
          subtitle={PILLARS.gym.homeSubtitle}
          tiles={GYM_TILES}
          maxTiles={HOME_TILE_CAP}
          fullPageHref={PILLARS.gym.href}
          fullPageLabel={PILLARS.gym.ctaLabel}
          manualPlayback={MANUAL_PLAYBACK_PILLARS.includes("gym")}
          compact
        />
        <MediaGrid
          id="throne-room"
          eyebrow={PILLARS["throne-room"].homeEyebrow}
          titleTop={PILLARS["throne-room"].homeTitleTop}
          titleHighlight={PILLARS["throne-room"].homeTitleHighlight}
          subtitle={PILLARS["throne-room"].homeSubtitle}
          tiles={THRONE_TILES}
          maxTiles={HOME_TILE_CAP}
          fullPageHref={PILLARS["throne-room"].href}
          fullPageLabel={PILLARS["throne-room"].ctaLabel}
          manualPlayback={MANUAL_PLAYBACK_PILLARS.includes("throne-room")}
          compact
        />
      </SectionBand>

      <SectionBand variant="red">
        <FinalCta />
      </SectionBand>
    </div>
  );
}
