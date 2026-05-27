import { Hero } from "@/components/sections/Hero";
import { StatsAuthority } from "@/components/sections/StatsAuthority";
import { Challenge } from "@/components/sections/Challenge";
import { RoyalArsenal } from "@/components/sections/RoyalArsenal";
import { CounselPreview } from "@/components/sections/CounselPreview";
import { MediaGrid } from "@/components/sections/MediaGrid";
import { RoyalCourt } from "@/components/sections/RoyalCourt";
import { FinalCta } from "@/components/sections/FinalCta";
import { FloatingSectionFrame } from "@/components/ui/FloatingSectionFrame";
import {
  DATING_TILES,
  LIFESTYLE_TILES,
  GYM_TILES,
  THRONE_TILES,
  MANUAL_PLAYBACK_PILLARS,
  PILLARS,
} from "@/lib/media-pillars";

/** Homepage shows first three tiles per pillar; full sets live on pillar pages. */
const HOME_TILE_CAP = 3;

export default function Home() {
  return (
    <>
      <FloatingSectionFrame preset="hero">
        <Hero />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="stats">
        <StatsAuthority />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="pain">
        <Challenge />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="offer">
        <RoyalArsenal />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="counsel">
        <CounselPreview />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="proof">
        <RoyalCourt />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="media">
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
        />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="media">
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
        />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="media">
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
        />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="media">
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
          variant={PILLARS["throne-room"].variant}
          manualPlayback={MANUAL_PLAYBACK_PILLARS.includes("throne-room")}
        />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="close">
        <FinalCta />
      </FloatingSectionFrame>
    </>
  );
}
