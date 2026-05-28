import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AXEL_CALENDLY, AXEL_PORTRAIT } from "@/lib/home-funnel";

const FOR_YOU_IF = [
  "You've never had a girlfriend and don't know where to start",
  "You keep getting friend-zoned and can't figure out why",
  "You get matches but can't convert them to dates",
  "Your height has been quietly shrinking your confidence for years",
] as const;

export function FunnelManBehind() {
  return (
    <section className="border-y border-white/10 bg-panel py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-sm border border-gold/25 lg:mx-0">
              <Image
                src={AXEL_PORTRAIT}
                alt="Axel Cruz"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">The man behind the system</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                I was 18, never been with a woman, invisible to every girl I wanted
                {" "}&mdash; and I thought it was because of my height.
              </h2>
            </Reveal>

            <Reveal stagger={2}>
              <div className="mt-8 space-y-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                <p>
                  I grew up feeling like I was already disqualified. Too short. Too
                  skinny. Not enough. I watched other guys get the girl, hold the
                  attention, command the room and I told myself they had something I
                  couldn&apos;t build. I was the guy who became everyone&apos;s best
                  friend. Funny, loyal, always there. But never chosen.
                </p>
                <p>
                  I had never been with a woman at 18. Not because I didn&apos;t want
                  to. Because I genuinely didn&apos;t know how. I didn&apos;t have the
                  confidence, the presence, or the words. I just had a height I
                  couldn&apos;t change and a head full of excuses I didn&apos;t
                  realize I was making.
                </p>
              </div>
            </Reveal>

            <Reveal stagger={3}>
              <blockquote className="my-8 border-l-2 border-gold/60 bg-gold/5 py-4 pl-5 pr-4 text-base italic leading-relaxed text-white/85 sm:text-lg">
                &ldquo;I poured two months into one girl. Conversations, effort,
                everything I had. And she hit me with four words: I like you as a
                friend.&rdquo;
              </blockquote>
            </Reveal>

            <Reveal stagger={3}>
              <div className="space-y-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                <p>
                  A week later I saw her with another man. I want you to understand
                  what that moment felt like because if you&apos;ve been there, you
                  already know. He wasn&apos;t taller than me. He wasn&apos;t more
                  attractive. But he walked in like he owned the room. He held his
                  frame. He made her feel something through his presence alone,
                  through his words, his energy, the way he carried himself. And I
                  stood there trying to figure out what he had that I didn&apos;t.
                </p>
                <p>That question changed everything.</p>
                <p>
                  I stopped blaming my height and started building myself. I hit the
                  gym because I needed to feel like a different man in my own body.
                  I studied style specifically for shorter frames: the right cuts,
                  the right colors, the silhouettes that add presence without an
                  inch. I read every book on female psychology I could find. Then I
                  did something that scared me every single time. I started
                  approaching women cold. In my first year alone I approached over
                  100 women. Not because I was confident. Because I refused to stay
                  where I was. Over five years I approached over 500 women, went on
                  hundreds of dates, read dozens of books, and spent that entire
                  time studying relationship psychology at university. Slowly, rep by
                  rep, I became the man I used to watch from across the room.
                </p>
              </div>
            </Reveal>

            <Reveal stagger={4}>
              <blockquote className="my-8 border-l-2 border-gold/60 bg-gold/5 py-4 pl-5 pr-4 text-base italic leading-relaxed text-white/85 sm:text-lg">
                &ldquo;Then that same girl saw me again. I watched the regret move
                across her face in real time. That&apos;s when I knew the work was
                real.&rdquo;
              </blockquote>
            </Reveal>

            <Reveal stagger={4}>
              <div className="space-y-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                <p>
                  I built Short Kings Empire because I lived the loneliness. The
                  nights where I couldn&apos;t sleep. The depression that comes from
                  feeling like the deck is permanently stacked against you. And I
                  figured out through years of doing the work nobody handed me that
                  height was never the ceiling. It was my mindset, my frame, my
                  presence, and my understanding of women that was holding me back.
                  Not my inches.
                </p>
                <p>
                  Every dating coach you&apos;ll find online is 6 feet tall.
                  Naturally charming. Already holding cards they were born with.
                  Nobody was standing up specifically for short men and teaching
                  them the things that actually move the needle for us. That gap is
                  why I&apos;m here.
                </p>
              </div>
            </Reveal>

            <Reveal stagger={4}>
              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  This is for you if
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70 sm:text-base">
                  {FOR_YOU_IF.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ruby" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal stagger={4}>
              <div className="mt-10">
                <Link
                  href={AXEL_CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a call with Axel
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
