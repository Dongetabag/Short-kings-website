# Short Kings Empire

Brand hub, sales funnel, client portal, and admin console for **Short Kings Empire**.

> Always read [`../SHORT-KINGS-FUNNEL-PLAYBOOK.md`](../SHORT-KINGS-FUNNEL-PLAYBOOK.md) before
> writing copy or shipping a section. The playbook locks the voice, funnel order, pricing,
> and the things that get a build rejected.

---

## What lives here

| Area | Routes | Purpose |
|---|---|---|
| Public funnel | `/`, `/products`, `/gallery`, `/journal`, `/journal/[slug]` | Hero, pillars, offer, proof, close. Sells the bundle, captures leads. |
| Client portal | `/portal`, `/portal/library`, `/portal/counsel`, `/portal/calendar`, `/portal/account` | Where buyers consume what they paid for. Auth-gated in Phase 2. |
| Admin console | `/admin`, `/admin/members`, `/admin/orders`, `/admin/content`, `/admin/leads`, `/admin/counsel`, `/admin/kpis`, `/admin/playbook` | Members, orders, content, leads, KPIs. Allowlist-gated. |
| APIs | `/api/counsel/chat`, `/api/leads`, `/api/stripe/webhook` | Counsel streaming chat (Anthropic), lead capture, Stripe events. |

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind v4** with the Royal token system in [`src/app/globals.css`](src/app/globals.css)
- **Cinzel** (display) + **Inter** (body) via `next/font/google`
- **lucide-react** icons (loose JSX components)
- **Anthropic SDK** for the King's Counsel
- **Stripe** for checkout + webhooks (env-gated)
- **NextAuth v5** for magic-link auth (Phase 2)
- **Resend** for transactional email (Phase 2)
- **Neon Postgres** for members/orders/leads (Phase 2)

## Quickstart

```bash
pnpm install
cp .env.example .env.local      # fill in keys as they come available
pnpm dev                         # http://localhost:3000
```

Without keys the app boots cleanly and degrades:

- Counsel chat returns 503 with a clear `setup-pending` message.
- Stripe buttons show "Setup pending" instead of crashing.
- Admin tables show mock data from [`src/lib/admin-data.ts`](src/lib/admin-data.ts).

## Build

```bash
pnpm audit:ai-tells              # blocking — fails on em-dashes / banned vocab
pnpm build                       # next build
```

The AI-tell audit (`scripts/ai-tell-audit.sh`) is required before every deploy.
It enforces the rules in the playbook so the brand voice does not drift.

## Layout

```
src/
  app/                            # routes
    api/                          # streaming chat, leads, stripe webhook
    admin/                        # admin console
    portal/                       # member portal
    journal/[slug]/               # blog
    gallery/, products/           # public funnel
  components/
    Nav.tsx, Footer.tsx
    sections/                     # Hero, StatsAuthority, Challenge, RoyalArsenal,
                                  # CounselPreview, MediaGrid, RoyalCourt, FinalCta,
                                  # GalleryGrid
    portal/                       # PortalShell, CounselChat, PortalSpotlight
    admin/                        # AdminShell
    ui/                           # Button, Reveal, SectionHeader, FloatingSectionFrame
  lib/
    site.ts                       # SITE config + nav links
    products.ts                   # ebooks, fitness, payment-link helper
    counsel.ts                    # Counsel persona (matches existing MASTER_AGENT)
    media-pillars.ts              # 4 content-pillar tile sets
    gallery-tiles.ts              # gallery + portal-spotlight helpers
    journal.ts                    # blog posts (in-source for now)
    admin-data.ts                 # mock data layer (swap for Neon in Phase 2)
    auth.ts                       # session helper (NextAuth v5 in Phase 2)
public/
  media/                          # videos + images for the four pillars + testimonials
  products/ebooks, fitness/       # downloadable PDFs
scripts/
  ai-tell-audit.sh                # build gate
  generate-media-catalog.mjs      # rebuilds src/lib/media-catalog.json
```

## How to ship a copy change

1. Edit the section component or `src/lib/site.ts`.
2. Run `pnpm audit:ai-tells`. If it fails, the playbook says why.
3. Run `pnpm build`. If types fail, fix the type, not the build script.
4. Commit. Vercel auto-deploys the preview.

## How to add a product

1. Add the entry to `EBOOKS` or `FITNESS_PROGRAMS` in [`src/lib/products.ts`](src/lib/products.ts).
2. Drop the PDF in `public/products/ebooks/` or `public/products/fitness/`.
3. Add a Stripe payment-link env var like `STRIPE_PAYMENT_LINK_<ID>` and reference
   it via `paymentLinkEnvKey`. Until set, the button shows "Setup pending".

## How to add a Journal post

1. Append a `JournalPost` entry to `src/lib/journal.ts`.
2. The `/journal` index and `/journal/[slug]` route generate at build time.
3. Phase 4 swaps this for MDX in `content/journal/`.

## Deploy

Deployment target: **Vercel preview URL** (until the production domain is wired).
First deploy:

```bash
vercel --prod=false
```

Add env vars in the Vercel dashboard from `.env.example`. Anything not yet
provisioned can stay blank — the app's fallbacks are designed for that.

## Phase status

- ✅ Phase 1 — Public funnel rebuild (this commit)
- ✅ Phase 2 — Client portal scaffolding (Counsel chat live when ANTHROPIC_API_KEY is set)
- ✅ Phase 3 — Admin console scaffolding (mock data, ready for Neon)
- ⏳ Phase 4 — Magic-link auth, Stripe entitlements, KPI events, MDX journal
