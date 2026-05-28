import type { ComponentType } from "react";
import {
  BookOpen,
  Crown,
  Dumbbell,
  Flame,
  Heart,
  Shirt,
  Sparkles,
  Sword,
} from "lucide-react";
import { EBOOKS, FITNESS_PROGRAMS } from "@/lib/products";
import { PILLARS } from "@/lib/media-pillars";

export type CatalogItem = {
  id: string;
  title: string;
  subtitle: string;
  type: "ebook" | "fitness" | "video-course" | "ai" | "coaching";
  icon: ComponentType<{ className?: string }>;
  /** Where to send the user when they open this item. */
  href: string;
  /** Cover image for the catalog card. */
  cover?: string;
  /** "8 lessons", "Self-paced", etc. */
  meta: string[];
  /** Override default CTA label (Begin / Continue / Revisit). */
  actionLabel?: string;
  /** Out of 100. v1: a stable mock. Phase 2 reads from DB. */
  progress: number;
  entitlement:
    | "bundle"
    | "counsel-ai"
    | "coaching"
    | "fitness-library"
    | "free";
};

export type CatalogSection = {
  slug: string;
  title: string;
  blurb: string;
  items: CatalogItem[];
};

const PILLAR_COVERS: Record<string, string> = {
  dating: "/media/dating/dating-moment-1.jpg",
  lifestyle: "/media/lifestyle/alex-portrait-1.jpg",
  gym: "/media/gym/gym-1.jpg",
  "throne-room": "/media/throne-room/style-1.jpg",
};

const PILLAR_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  dating: Heart,
  lifestyle: Sparkles,
  gym: Dumbbell,
  "throne-room": Shirt,
};

export const CATALOG: CatalogSection[] = [
  {
    slug: "pillars",
    title: "The Four Pillars",
    blurb:
      "Every pillar of the system as a course. Reels, chapters, and rituals. Train one a week, run all four together.",
    items: Object.values(PILLARS).map((p) => ({
      id: `pillar-${p.slug}`,
      title: `${p.pageTitleTop} ${p.pageTitleHighlight}`,
      subtitle: p.pageSubtitle,
      type: "video-course",
      icon: PILLAR_ICONS[p.slug] ?? Crown,
      href: p.href,
      cover: PILLAR_COVERS[p.slug],
      meta: ["3 chapters", "Watch + train", "Updated weekly"],
      progress: ({ dating: 64, lifestyle: 28, gym: 12, "throne-room": 0 } as Record<
        string,
        number
      >)[p.slug] ?? 0,
      entitlement: "bundle",
    })),
  },
  {
    slug: "playbooks",
    title: "Dating Ebooks",
    blurb:
      "The five written ebooks that ship with The Full Library. Read sequentially or jump to your situation.",
    items: EBOOKS.map((p, idx) => ({
      id: p.id,
      title: p.title,
      subtitle: p.tagline,
      type: "ebook",
      icon: idx === 0 ? Sword : BookOpen,
      href: p.file?.href ?? "/portal/library",
      cover: undefined,
      meta: ["PDF", `~${28 + idx * 6} pages`, "Instant download"],
      progress: idx === 0 ? 100 : idx === 1 ? 45 : 0,
      actionLabel: "Read",
      entitlement: "bundle",
    })),
  },
  {
    slug: "counsel",
    title: "King's Counsel",
    blurb:
      "Your AI advisor. Trained on every pillar. Always on.",
    items: [
      {
        id: "counsel-ai",
        title: "King's Counsel AI",
        subtitle:
          "Ask it texts, profile audits, first-date plans, mindset reframes. Stays in your portal.",
        type: "ai",
        icon: Sparkles,
        href: "/portal/counsel",
        cover: "/media/dating/dating-moment-2.jpg",
        meta: ["Streaming", "Free 7 days", "Sonnet 4.5"],
        progress: 0,
        entitlement: "counsel-ai",
      },
      {
        id: "coaching-1on1",
        title: "1-on-1 Coaching",
        subtitle:
          "Forty-five minutes, direct. Bring the situation. Leave with a written game plan.",
        type: "coaching",
        icon: Crown,
        href: "/portal/calendar",
        cover: "/media/lifestyle/axel-lifestyle-1.jpg",
        meta: ["45 min", "Calendly", "$150/session"],
        progress: 0,
        entitlement: "coaching",
      },
    ],
  },
  {
    slug: "fitness",
    title: "Fitness Library",
    blurb:
      "Five free programs from the SKE library. Pick a split and run it for six weeks.",
    items: FITNESS_PROGRAMS.map((p, idx) => ({
      id: p.id,
      title: p.title,
      subtitle: p.tagline,
      type: "fitness",
      icon: Flame,
      href: p.file?.href ?? "/portal/library",
      cover: ["/media/gym/gym-1.jpg", "/media/gym/gym-2.jpg", "/media/gym/gym-3.jpg", "/media/gym/gym-4.jpg", "/media/gym/gym-5.jpg"][idx],
      meta: ["PDF", "6-week block", "Free with bundle"],
      progress: idx === 0 ? 100 : 0,
      entitlement: "fitness-library",
    })),
  },
];
