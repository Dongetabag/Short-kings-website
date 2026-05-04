import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

/**
 * Stripe webhook handler.
 *
 * v1 verifies signature when STRIPE_WEBHOOK_SECRET is set; otherwise
 * acknowledges with a 503 so Stripe knows to retry once keys are wired.
 *
 * Phase 2 lights this up to:
 *   - Create a member record on `checkout.session.completed`
 *   - Grant `bundle` / `counsel-ai` entitlements
 *   - Send the welcome magic-link email via Resend
 */
export async function POST(req: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const sig = req.headers.get("stripe-signature");

  if (!secret || !webhookSecret) {
    return NextResponse.json(
      { error: "setup-pending", message: "Stripe not configured" },
      { status: 503 }
    );
  }
  if (!sig) {
    return NextResponse.json({ error: "missing-signature" }, { status: 400 });
  }

  const stripe = new Stripe(secret);
  const raw = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json(
      {
        error: "bad-signature",
        message: err instanceof Error ? err.message : "verify failed",
      },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed":
      // TODO Phase 2: grant entitlement + send magic link
      console.log("[stripe] checkout completed", event.data.object.id);
      break;
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      console.log("[stripe] subscription", event.type, event.data.object.id);
      break;
    default:
      console.log("[stripe] event", event.type);
  }

  return NextResponse.json({ ok: true });
}
