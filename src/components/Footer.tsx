import Image from "next/image";
import Link from "next/link";
import { Camera, Music2, Video } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ruby/25 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
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
            <p className="text-sm text-white/55 leading-6">{SITE.tagline}</p>
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
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <p className="eyebrow">Follow</p>
            <div className="flex gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/65 hover:border-gold/40 hover:text-gold"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/65 hover:border-gold/40 hover:text-gold"
              >
                <Music2 className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/65 hover:border-gold/40 hover:text-gold"
              >
                <Video className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="font-royal tracking-[0.2em] text-gold/70">
            DATING ISN&apos;T RANDOM. IT&apos;S A SYSTEM.
          </p>
        </div>
      </div>
    </footer>
  );
}
