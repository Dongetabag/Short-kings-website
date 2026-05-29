import type { MediaTile } from "@/components/sections/MediaGrid";
import catalog from "@/lib/media-catalog.json";
import {
  DATING_TILES,
  GYM_TILES,
  LIFESTYLE_TILES,
  THRONE_TILES,
} from "@/lib/media-pillars";

export type GalleryCategory =
  | "dating"
  | "lifestyle"
  | "gym"
  | "throne-room"
  | "gallery"
  | "testimonials"
  | "root";

export type GalleryTile = MediaTile & { category: GalleryCategory };

function inferCategory(url: string): GalleryCategory {
  if (url.includes("/dating/")) return "dating";
  if (url.includes("/lifestyle/")) return "lifestyle";
  if (url.includes("/gym/")) return "gym";
  if (url.includes("/throne-room/")) return "throne-room";
  if (url.includes("/gallery/")) return "gallery";
  if (url.includes("/testimonials/")) return "testimonials";
  return "root";
}

function humanTitle(url: string): string {
  const seg = url.split("/").pop() ?? url;
  const base = seg.replace(/\.[^.]+$/, "");
  const cleaned = base.replace(/copy/gi, "").replace(/\s+/g, " ").trim();
  const words = cleaned.replace(/[_-]+/g, " ").trim();
  if (!words) return "Empire media";
  return words.replace(/\b\w/g, (c) => c.toUpperCase()).slice(0, 96);
}

function isVideoUrl(url: string): boolean {
  return /\.(mp4|mov|webm)$/i.test(url);
}

const PILLAR_TILES: GalleryTile[] = [
  ...DATING_TILES.map((t) => ({ ...t, category: "dating" as const })),
  ...LIFESTYLE_TILES.map((t) => ({ ...t, category: "lifestyle" as const })),
  ...GYM_TILES.map((t) => ({ ...t, category: "gym" as const })),
  ...THRONE_TILES.map((t) => ({ ...t, category: "throne-room" as const })),
];

/** Pillar metadata first, then every other public/media asset for the full archive. */
export function buildExtendedGalleryTiles(): GalleryTile[] {
  const seen = new Set<string>();
  const out: GalleryTile[] = [];

  for (const t of PILLAR_TILES) {
    seen.add(t.src);
    out.push(t);
  }

  for (const url of catalog.urls) {
    if (seen.has(url)) continue;
    seen.add(url);
    const type = isVideoUrl(url) ? "video" : "image";
    const category = inferCategory(url);
    const subtitle =
      category === "gallery"
        ? "Empire archive"
        : category === "root"
          ? "Empire reel"
          : category === "testimonials"
            ? "Court"
            : undefined;

    out.push({
      src: url,
      type,
      title: humanTitle(url),
      subtitle,
      category,
    });
  }

  return out;
}

