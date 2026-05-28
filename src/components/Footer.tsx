import Image from "next/image";
import Link from "next/link";
import { Camera, Music2, Video } from "lucide-react";
import { SITE } from "@/lib/site";

const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE.social.instagram, icon: Camera },
  { label: "TikTok", href: SITE.social.tiktok, icon: Music2 },
  { label: "YouTube", href: SITE.social.youtube, icon: Video },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-ruby/25 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="relative h-8 w-8 shrink-0">
                <Image
                  src="/media/logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </span>
              <p className="font-royal text-sm tracking-[0.18em] text-white">
                SHORT KINGS EMPIRE
              </p>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/55">{SITE.tagline}</p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <p className="eyebrow">Products</p>
            <Link href="/products#the-playbook" className="text-white/65 hover:text-white">
              The Playbook
            </Link>
            <Link href="/products#ebooks" className="text-white/65 hover:text-white">
              Dating Ebooks
            </Link>
            <Link href="/products#counsel" className="text-white/65 hover:text-white">
              King&apos;s Counsel AI
            </Link>
            <Link href="/products#inner-circle" className="text-white/65 hover:text-white">
              The Inner Circle
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <p className="eyebrow">Explore</p>
            <Link href="/gym" className="text-white/65 hover:text-white">
              Gym
            </Link>
            <Link href="/lifestyle" className="text-white/65 hover:text-white">
              Lifestyle
            </Link>
            <Link href="/throne-room" className="text-white/65 hover:text-white">
              Style
            </Link>
            <Link href="/gallery" className="text-white/65 hover:text-white">
              Gallery
            </Link>
            <Link href="/portal" className="text-white/65 hover:text-white">
              Member Portal
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="text-white/65 hover:text-white"
            >
              Contact
            </a>
            <div className="mt-2 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] text-white/75 transition hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40 sm:text-left">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
