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
  PILLARS,
} from "@/lib/media-pillars";

/**
 * Funnel order (attention → third-party proof → pain → product preview →
 * social proof → offer → differentiation → close). Mirrors Eleven Views pacing.
 *
 * Each pillar shows 4 tiles on the homepage and links to its full Realm page.
 */
const HOME_TILE_CAP = 4;

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
        />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="proof">
        <RoyalCourt />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="offer">
        <RoyalArsenal />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="counsel">
        <CounselPreview />
      </FloatingSectionFrame>

      <FloatingSectionFrame preset="close">
        <FinalCta />
      </FloatingSectionFrame>
    </>
  );
}
