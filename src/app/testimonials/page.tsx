import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = {
  title: "Reviews",
  description:
    "Real reviews from members. Real heights, real cities, real outcomes.",
};

const PHOTO_CARDS = [
  {
    id: "marcus-t",
    photo: "/media/testimonials/member-1.png",
    productTag: "1-on-1 Coaching",
    quote:
      "My Hinge was embarrassing before this. Wrong photos, no bio, opening with hey. Axel rebuilt the whole thing. Within two weeks I had more matches than the previous six months combined.",
    name: "Marcus T.",
    detail: "5'6 · Dallas, TX",
    firstWin: "First win: 21 days",
  },
  {
    id: "james-r",
    photo: "/media/testimonials/member-2.png",
    productTag: "1-on-1 Coaching",
    quote:
      "I messaged Axel on a Thursday night panicking about a first date the next day. He walked me through the whole thing. Venue, how to open, when to go for the second date close. She texted me first the next morning.",
    name: "James R.",
    detail: "5'5 · Atlanta, GA",
    firstWin: "First win: 14 days",
  },
  {
    id: "kevin-m",
    photo: "/media/testimonials/member-3.png",
    productTag: "3 Month Transformation",
    quote:
      "I came into the Empire program wanting to fix my dating life but the gym program hit first. I lost 12 pounds in six weeks and that physical change did something to me mentally that I did not expect. Once my body changed my confidence shifted. Then the dating framework gave me the frame to back it up. The way I carry myself now, the way I walk into a room, the way women respond to me. None of it looks like the man I was three months ago.",
    name: "Kevin M.",
    detail: "5'8 · Puerto Rico",
    firstWin: "First win: 60 days",
  },
  {
    id: "rafael-g",
    photo: "/media/testimonials/member-4.png",
    productTag: "3 Month Transformation",
    quote:
      "My biggest issue was never really dating. It was how I saw myself. I had been carrying extra weight for years and it was quietly destroying my confidence before I even opened my mouth. The nutrition and gym program changed that. I lost the weight, rebuilt my body, and for the first time started feeling like I deserved to be in the room. Two months into the program I met someone. We have been together ever since. I genuinely did not think that was possible for me before this.",
    name: "Rafael G.",
    detail: "5'5 · San Antonio, TX",
    firstWin: "First win: 38 days",
  },
] as const;

const NO_PHOTO_CARDS = [
  {
    id: "david-k",
    productTag: "Approach Like a King",
    quote:
      "I used to freeze up the second I saw a girl I wanted to talk to. This ebook killed that completely. The opener structure is so simple that you stop overthinking and just go. Three approaches my first week out.",
    name: "David K.",
    detail: "5'7 · Chicago, IL",
    firstWin: "First win: 30 days",
  },
  {
    id: "ryan-s",
    productTag: "The Playbook",
    quote:
      "There is so much advice online for guys like me and none of it felt built for someone my height. I did not know where to start or what to trust. The Playbook put everything in one place and gave me a system I could actually follow. My Hinge matches got better, my confidence stopped feeling forced, and for the first time I was just being myself on dates instead of performing. That shift changed everything.",
    name: "Ryan S.",
    detail: "5'6 · Brooklyn, NY",
    firstWin: "First win: 45 days",
  },
] as const;

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.16),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Reviews</p>
            <h1 className="mt-3 font-royal text-5xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-7xl">
              Short men. Real wins. No exceptions.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Real heights. Real cities. Real outcomes. Every man here ran the
              system and sent back the proof.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
              <Stat label="Reviews on file" value="6" />
              <Stat label="Five star reviews" value="6/6" />
              <Stat label="Fastest first win" value="14 days" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-5 md:grid-cols-2">
            {PHOTO_CARDS.map((card, i) => (
              <Reveal key={card.id} stagger={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <article className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40">
                  <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
                  <div className="relative aspect-[16/10] w-full bg-black">
                    <Image
                      src={card.photo}
                      alt={card.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full border border-gold/30 bg-gold/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-gold">
                      {card.productTag}
                    </span>
                    <p className="mt-4 text-sm leading-7 text-white/80">{card.quote}</p>
                    <footer className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                      <div className="leading-tight">
                        <p className="font-royal text-sm font-bold text-white">{card.name}</p>
                        <p className="text-xs text-white/50">{card.detail}</p>
                      </div>
                      <span className="rounded-full border border-gold/30 bg-gold/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-gold">
                        {card.firstWin}
                      </span>
                    </footer>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {NO_PHOTO_CARDS.map((card, i) => (
              <Reveal key={card.id} stagger={(((i % 2) + 1) as 1 | 2)}>
                <article className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-6">
                  <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
                  <span className="rounded-full border border-gold/30 bg-gold/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-gold">
                    {card.productTag}
                  </span>
                  <p className="mt-4 text-sm leading-7 text-white/80">{card.quote}</p>
                  <footer className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                    <div className="leading-tight">
                      <p className="font-royal text-sm font-bold text-white">{card.name}</p>
                      <p className="text-xs text-white/50">{card.detail}</p>
                    </div>
                    <span className="rounded-full border border-gold/30 bg-gold/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-gold">
                      {card.firstWin}
                    </span>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-xl border border-gold/25 bg-stone/40 p-7 text-center sm:p-9">
              <h2 className="font-royal text-3xl font-black uppercase leading-[0.95] text-white sm:text-5xl">
                Add your name to the list.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/65">
                Run the system. Send us the win. We will feature you.
              </p>
              <Link
                href="https://calendly.com/shortkingsempire/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-semibold text-black hover:bg-goldLight"
              >
                Apply for 1-on-1 coaching
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-3 sm:p-5">
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <p className="font-royal text-2xl font-black text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/45 sm:text-xs sm:tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}
