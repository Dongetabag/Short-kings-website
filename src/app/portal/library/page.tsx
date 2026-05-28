import { SectionHeader } from "@/components/ui/SectionHeader";
import { CourseCard } from "@/components/portal/CourseCard";
import { CATALOG } from "@/lib/portal-catalog";
import { getSessionUser } from "@/lib/auth";

export const metadata = { title: "Library" };

const EBOOK_ENTITLEMENTS = ["protocols", "playbook", "coaching", "empire"];
const COUNSEL_ENTITLEMENTS = ["kings-counsel", "playbook", "coaching", "empire"];

function hasAnyEntitlement(userEntitlements: Set<string>, required: string[]): boolean {
  return required.some((ent) => userEntitlements.has(ent));
}

export default async function LibraryPage() {
  const sessionUser = await getSessionUser();
  const userEntitlements = new Set(sessionUser?.entitlements ?? []);

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
              (() => {
                const isEbookSection = section.slug === "playbooks";
                const isCounselAi = section.slug === "counsel" && item.id === "counsel-ai";

                const locked = isEbookSection
                  ? !hasAnyEntitlement(userEntitlements, EBOOK_ENTITLEMENTS)
                  : isCounselAi
                    ? !hasAnyEntitlement(userEntitlements, COUNSEL_ENTITLEMENTS)
                    : false;

                const lockedActionLabel = isEbookSection ? "Read" : undefined;

                const lockedPrompt = isEbookSection
                  ? {
                      text: "Unlock with The 7 Protocols",
                      href: "https://short-kings-website.vercel.app/products#seven-protocols",
                    }
                  : isCounselAi
                    ? {
                        text: "Start your free 7-day trial",
                        href: "https://short-kings-website.vercel.app/products#counsel",
                      }
                    : undefined;

                return (
              <CourseCard
                key={item.id}
                item={item}
                locked={locked}
                lockedActionLabel={lockedActionLabel}
                lockedPrompt={lockedPrompt}
              />
                );
              })()
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
