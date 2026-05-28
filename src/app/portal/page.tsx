import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Crown,
  Dumbbell,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { EBOOKS, FITNESS_PROGRAMS } from "@/lib/products";
import { PortalSpotlight } from "@/components/portal/PortalSpotlight";
import { portalSpotlightVideos } from "@/lib/gallery-tiles";
import { CourseCard } from "@/components/portal/CourseCard";
import { CATALOG } from "@/lib/portal-catalog";

export default function PortalDashboard() {
  // v1: assume bundle entitlement until auth wires real data
  const userName = "Alex";
  const spotlight = portalSpotlightVideos(6);

  // "Continue where you left off": items with progress strictly between 0 and 100.
  const inProgress = CATALOG.flatMap((s) => s.items)
    .filter((i) => i.progress > 0 && i.progress < 100)
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 3);

  // Featured: anything with a cover image, not yet started.
  const recommended = CATALOG.flatMap((s) => s.items)
    .filter((i) => i.progress === 0 && i.cover)
    .slice(0, 3);

  const totalItems = CATALOG.flatMap((s) => s.items).length;
  const completed = CATALOG.flatMap((s) => s.items).filter(
    (i) => i.progress >= 100
  ).length;
  const overallProgress = Math.round(
    CATALOG.flatMap((s) => s.items).reduce((acc, i) => acc + i.progress, 0) /
      totalItems
  );

  return (
    <div className="mx-auto max-w-6xl">
      <header>
        <p className="eyebrow">Welcome back</p>
        <h1 className="mt-2 font-royal text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
          <span className="block">Welcome back,</span>
          <span className="block gold-gradient">{userName}.</span>
        </h1>
        <p className="mt-3 text-sm text-white/60">
          Your portal is open. Pick up where you left off.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={TrendingUp} label="Progress" value={`${overallProgress}%`} sub={`${completed}/${totalItems} complete`} highlight />
        <Stat icon={BookOpen} label="Ebooks unlocked" value={`${EBOOKS.length}`} sub="bundle owner" />
        <Stat icon={Dumbbell} label="Fitness programs" value={`${FITNESS_PROGRAMS.length}`} sub="full library" />
        <Stat icon={Sparkles} label="Counsel sessions" value="0" sub="trial active" />
      </div>

      {/* Continue */}
      {inProgress.length > 0 ? (
        <section className="mt-12">
          <header className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Continue Where You Left Off</p>
              <p className="mt-1 text-sm text-white/55">
                You opened these recently. Pick one and finish the chapter.
              </p>
            </div>
            <Link
              href="/portal/library"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold hover:gap-3"
            >
              All in the Library <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </header>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inProgress.map((i) => (
              <CourseCard key={i.id} item={i} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Quick actions */}
      <section className="mt-12 grid gap-5 lg:grid-cols-2">
        <ActionCard
          icon={Sparkles}
          title="Open Counsel"
          body="Ask the AI a real question. Texts, dates, mindset, style."
          cta="Open the chat"
          href="/portal/counsel"
        />
        <ActionCard
          icon={Calendar}
          title="Book 1-on-1 coaching"
          body="45 minutes. Direct access. You leave with a written game plan."
          cta="Book a call"
          href={SITE.coaching.calendly}
          external
        />
      </section>

      {/* Recommended */}
      {recommended.length > 0 ? (
        <section className="mt-14">
          <header>
            <p className="eyebrow">Start a new pillar</p>
            <p className="mt-1 text-sm text-white/55">
              The system surfaces the next move. Pick the pillar that fits the week.
            </p>
          </header>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map((i) => (
              <CourseCard key={i.id} item={i} />
            ))}
          </div>
        </section>
      ) : null}

      <PortalSpotlight sources={spotlight} />

      <section className="mt-14 rounded-xl border border-gold/30 bg-stone/40 p-7">
        <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Crown className="h-6 w-6 text-gold" />
            <h2 className="mt-3 font-royal text-2xl font-bold text-white">
              New drops every Wednesday.
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              New Journal posts and Counsel updates land every Wednesday. The
              system compounds. So does your edge.
            </p>
          </div>
          <Link
            href="/journal"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-semibold text-black hover:bg-goldLight"
          >
            <BookOpen className="h-4 w-4" /> Read the Journal
          </Link>
        </div>
      </section>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border p-5 ${
        highlight
          ? "border-gold/40 bg-gold/[0.06] shadow-[0_0_30px_rgba(212,175,55,0.12)]"
          : "border-white/10 bg-stone/40"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <Icon className={`h-5 w-5 ${highlight ? "text-gold" : "text-gold/80"}`} />
      <p className="mt-3 font-royal text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
        {label}
      </p>
      {sub ? <p className="mt-0.5 text-[10px] text-white/30">{sub}</p> : null}
    </div>
  );
}

function ActionCard({
  icon: Icon,
  title,
  body,
  cta,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
}) {
  const cls =
    "group relative overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-7 transition hover:-translate-y-1 hover:border-gold/40";
  const inner = (
    <>
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <Icon className="h-7 w-7 text-gold" />
      <h3 className="mt-4 font-royal text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/65">{body}</p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:gap-3">
        {cta} <ArrowRight className="h-4 w-4" />
      </p>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
