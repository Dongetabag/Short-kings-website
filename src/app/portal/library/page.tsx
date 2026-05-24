import { SectionHeader } from "@/components/ui/SectionHeader";
import { CourseCard } from "@/components/portal/CourseCard";
import { CATALOG } from "@/lib/portal-catalog";

export const metadata = { title: "Library" };

// v1 stub: assume the user owns the bundle, counsel-ai trial, and fitness library.
// Phase 2 reads real entitlements from NextAuth + Neon.
const OWNED_ENTITLEMENTS = new Set([
  "bundle",
  "counsel-ai",
  "fitness-library",
  "free",
]);

export default function LibraryPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <SectionHeader
        eyebrow="Library"
        titleTop="Your"
        titleHighlight="library."
        subtitle="Every pillar, ebook, and program you own. Open one. Train one. Run them all."
      />

      {CATALOG.map((section) => (
        <section key={section.slug} className="mt-14">
          <header className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{section.title}</p>
              <p className="mt-1 max-w-2xl text-sm text-white/55">
                {section.blurb}
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
              {section.items.length} {section.items.length === 1 ? "item" : "items"}
            </p>
          </header>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <CourseCard
                key={item.id}
                item={item}
                locked={!OWNED_ENTITLEMENTS.has(item.entitlement)}
              />
            ))}
          </div>
        </section>
      ))}

      <p className="mt-12 text-[11px] uppercase tracking-[0.22em] text-white/30">
        Progress is mocked while NextAuth wires up. Phase 2 reads it from the database.
      </p>
    </div>
  );
}
