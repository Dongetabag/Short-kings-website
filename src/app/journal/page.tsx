import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { POSTS } from "@/lib/journal";

export const metadata = {
  title: "Journal",
  description:
    "Tactical writing on dating, style, mindset, and fitness for short kings.",
};

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal>
        <SectionHeader
          eyebrow="The Journal"
          titleTop="Field notes for"
          titleHighlight="short kings."
          subtitle="Tactical writing. Real situations. Real moves. No filler."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p, i) => (
          <Reveal key={p.slug} stagger={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
            <Link
              href={`/journal/${p.slug}`}
              className="group block h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 transition hover:-translate-y-1 hover:border-gold/40"
            >
              {p.cover ? (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              ) : null}
              <div className="p-6">
                <p className="eyebrow">{p.category} · {p.readMinutes} min</p>
                <h3 className="mt-2 font-royal text-lg font-bold leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {p.excerpt}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
