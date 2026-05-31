import Link from "next/link";
import { ArrowRight, CheckCircle2, Crown, Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Order confirmed",
  description: "Your purchase is complete. Here is what happens next.",
};

/**
 * Post-purchase landing. Stripe redirects every payment link here as:
 *   /thanks?product=<id>&session=<stripe_session_id>
 *
 * We resolve the product id to a tailored next-step message. The session id
 * is shown so support can match it to a Stripe transaction if needed.
 *
 * Entitlement provisioning + automatic ebook download links arrive in Phase 2
 * once NextAuth is wired and the webhook can mint per-user signed URLs.
 */

type NextStep = {
  title: string;
  body: string;
  cta: { label: string; href: string; external?: boolean };
  fineprint?: string;
};

const PRODUCT_FLOWS: Record<string, NextStep> = {
  "seven-protocols": {
    title: "All 7 Protocols are yours.",
    body: "We are emailing the download links to the address you used at checkout. Save the PDFs to your phone before you read them. Most clients start with Approach Like a King or She Replied, Now What.",
    cta: { label: "See the Reviews", href: "/testimonials" },
    fineprint: "Email landing in your inbox in under five minutes. Check spam if you do not see it.",
  },
  "the-playbook": {
    title: "Welcome to The Playbook.",
    body: "All 7 ebooks plus your 2 coaching calls are unlocked. We will email the ebook links shortly. To book your first 30-minute call with Axel, use the link below.",
    cta: { label: "Book your first call", href: SITE.coaching.calendly, external: true },
    fineprint: "Calendly opens in a new tab. Pick any open slot in the next 14 days.",
  },
  "built-different": {
    title: "Built Different is loading.",
    body: "Axel will email you a Trainerize invite within 24 hours. The app holds your training schedule, video demos, and the macros worksheet. Watch your inbox.",
    cta: { label: "Track delivery via support", href: `mailto:${SITE.email}`, external: true },
    fineprint: "Most invites go out within an hour. If you do not see it by tomorrow, email support@.",
  },
  "inner-circle": {
    title: "You are inside The Inner Circle.",
    body: "Your monthly subscription is active. First step: book your first coaching call with Axel using the link below. You will also receive a WhatsApp invite within 24 hours so we can run the unlimited messaging channel.",
    cta: { label: "Book your first call", href: SITE.coaching.calendly, external: true },
    fineprint: "Cancel anytime from your Stripe receipt email. WhatsApp invite comes from a +1 US number.",
  },
  "the-empire": {
    title: "Welcome to The Empire.",
    body: "Axel will personally reach out within 12 hours to kick off your 3 months. Expect a call, a WhatsApp invite, and a written game plan in your inbox by tomorrow.",
    cta: { label: "Pre-book your first weekly call", href: SITE.coaching.calendly, external: true },
    fineprint: "Limited to 5 active clients. You are one of them now.",
  },
  "she-replied-now-what": EBOOK_FLOW("She Replied, Now What"),
  "first-date-blueprint": EBOOK_FLOW("First Date Blueprint"),
  unshakeable: EBOOK_FLOW("Unshakeable"),
  "presence-code": EBOOK_FLOW("Presence Code"),
  "approach-like-a-king": EBOOK_FLOW("Approach Like a King"),
  "attraction-conversation": EBOOK_FLOW("Attraction Conversation"),
  "swipe-right-on-yourself": EBOOK_FLOW("Swipe Right on Yourself"),
};

function EBOOK_FLOW(title: string): NextStep {
  return {
    title: `${title} is yours.`,
    body: "Check the email you used at checkout. The download link is on its way. Most clients save the PDF to their phone and read in short blocks.",
    cta: { label: "See the next ebook", href: "/products" },
    fineprint: "Delivery within five minutes. Check spam if you do not see it.",
  };
}

const FALLBACK: NextStep = {
  title: "Your order is confirmed.",
  body: "We are processing your purchase and will email you the next steps shortly. If anything looks off, reach out to support.",
  cta: { label: "Back to the products", href: "/products" },
  fineprint: "Lost? Email support@shortkingsempire.com with your order ID.",
};

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; session?: string }>;
}) {
  const params = await searchParams;
  const productId = params.product?.toLowerCase().trim() ?? "";
  const sessionId = params.session?.trim();
  const flow = PRODUCT_FLOWS[productId] ?? FALLBACK;
  const orderRef = sessionId ? sessionId.slice(-8).toUpperCase() : null;
  const isExternal = flow.cta.external;

  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:py-28">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-emerald" />
          <p className="mt-6 text-xs uppercase tracking-[0.32em] text-gold">
            Order confirmed
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {flow.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            {flow.body}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {isExternal ? (
              <a
                href={flow.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-semibold text-black transition hover:bg-goldLight hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
              >
                <Crown className="h-4 w-4" />
                {flow.cta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                href={flow.cta.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold px-7 font-semibold text-black transition hover:bg-goldLight hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
              >
                <Crown className="h-4 w-4" />
                {flow.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gold/40 bg-white/[0.04] px-6 font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Back to home
            </Link>
          </div>

          {flow.fineprint ? (
            <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-white/35">
              {flow.fineprint}
            </p>
          ) : null}
        </div>

        {/* Receipt strip */}
        <section className="mt-16 grid gap-4 sm:grid-cols-3">
          <ReceiptCard
            icon={Mail}
            title="Receipt"
            body={`Sent to the email you used at checkout from Stripe.`}
          />
          <ReceiptCard
            icon={MessageCircle}
            title="Need help?"
            body={`Email support@shortkingsempire.com${orderRef ? ` with ref ${orderRef}` : ""}.`}
          />
          <ReceiptCard
            icon={Crown}
            title="What is next"
            body="Run the doctrine. Send Axel the win. Earn your title in the Court."
          />
        </section>

        {orderRef ? (
          <p className="mt-10 text-center text-[10px] uppercase tracking-[0.28em] text-white/30">
            Order reference · {orderRef}
          </p>
        ) : null}
      </div>
    </main>
  );
}

function ReceiptCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-xl border border-white/10 bg-stone/40 p-5">
      <div className="absolute inset-x-0 top-0 h-px crown-hairline" />
      <Icon className="h-5 w-5 text-gold" />
      <p className="mt-3 font-display text-sm font-semibold text-white">
        {title}
      </p>
      <p className="mt-1 text-xs leading-5 text-white/55">{body}</p>
    </article>
  );
}
