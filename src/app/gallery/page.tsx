import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { buildExtendedGalleryTiles } from "@/lib/gallery-tiles";

export const metadata = {
  title: "Gallery",
  description: "The Empire's media archive. Filter by realm.",
};

export default function GalleryPage() {
  const tiles = buildExtendedGalleryTiles();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Gallery"
          titleTop="The Empire's"
          titleHighlight="Visual Archive"
          subtitle="Every realm, every reel. Filter to the one you came for."
        />
      </Reveal>

      <GalleryGrid tiles={tiles} />
    </div>
  );
}
