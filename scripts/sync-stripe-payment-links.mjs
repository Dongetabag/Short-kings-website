#!/usr/bin/env node
/**
 * Sync Short Kings Empire Stripe Products + Payment Links to match the site catalog.
 *
 * Creates (or reuses by metadata.ske_env_key) products, prices, and payment links
 * for every paid offer, then prints the Vercel env var values to set.
 *
 * Usage:
 *   STRIPE_SECRET_KEY=sk_live_... node scripts/sync-stripe-payment-links.mjs
 *   STRIPE_SECRET_KEY=sk_live_... node scripts/sync-stripe-payment-links.mjs --dry-run
 *   STRIPE_SECRET_KEY=sk_live_... SITE_URL=https://short-kings-website.vercel.app \
 *     node scripts/sync-stripe-payment-links.mjs
 *
 * Requires Axel Cruz's Stripe account secret (not the Eleven Views desk key).
 * Never commit the secret. After run, paste the printed URLs into Vercel
 * (or re-run with --write-env-file /tmp/ske-stripe.env for vercel env add).
 */

import { writeFileSync } from "node:fs";

const DRY_RUN = process.argv.includes("--dry-run");
const WRITE_ENV = process.argv.find((a) => a.startsWith("--write-env-file="));
const ENV_OUT = WRITE_ENV ? WRITE_ENV.split("=")[1] : null;

const SECRET = process.env.STRIPE_SECRET_KEY || "";
const SITE_URL = (
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://short-kings-website.vercel.app"
).replace(/\/$/, "");

if (!SECRET && !DRY_RUN) {
  console.error(
    "Missing STRIPE_SECRET_KEY. Use Axel's Stripe live secret (sk_live_…)."
  );
  process.exit(1);
}

/** @typedef {{
 *   envKey: string,
 *   productId: string,
 *   name: string,
 *   description: string,
 *   amountCents: number,
 *   recurring?: { interval: 'month' | 'year' },
 * }} CatalogItem */

/** Catalog mirrors src/lib/products.ts + src/lib/site.ts (ELE-1068 8-ebook refresh). */
/** @type {CatalogItem[]} */
const CATALOG = [
  {
    envKey: "STRIPE_PAYMENT_LINK_SHE_REPLIED",
    productId: "she-replied-now-what",
    name: "The Text That Lands",
    description:
      "The complete texting system: openers, momentum, and the exact messages that get her off the app and onto a date.",
    amountCents: 1500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_APPROACH",
    productId: "approach-like-a-king",
    name: "The Standing Man",
    description:
      "The complete approach system: the 5-second rule, the openers, and the frame that turns nervous into natural.",
    amountCents: 1500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_CONVERSATION",
    productId: "attraction-conversation",
    name: "What She's Actually Thinking",
    description:
      "Female psychology decoded: what she's actually attracted to, how she tests you, and how to read her before she says a word.",
    amountCents: 1500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_FIRST_DATE",
    productId: "first-date-blueprint",
    name: "Dating Decoded",
    description:
      "The first date system: where to go, what to say, and how to become the man she can't replace.",
    amountCents: 1500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_UNSHAKEABLE",
    productId: "unshakeable",
    name: "The Inner Game",
    description:
      "Confidence, frame, and discipline: the mindset reps that make rejection feel like weather instead of a verdict.",
    amountCents: 1500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_SWIPE_RIGHT",
    productId: "swipe-right-on-yourself",
    name: "The Swipe",
    description:
      "The algorithm, the photos, and the bio: the exact dating app profile system for men who keep getting swiped past.",
    amountCents: 1500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_PRESENCE",
    productId: "presence-code",
    name: "Dress Tall",
    description:
      "The style, wardrobe, and grooming system built for a shorter frame — real and perceived height, no gym required.",
    amountCents: 1500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_SHORT_KING",
    productId: "short-king",
    name: "Short King",
    description:
      "Height is not the variable. The belief underneath the whole library, plus the map back into every other book.",
    amountCents: 1500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_EBOOK_BUNDLE",
    productId: "seven-protocols",
    name: "The 8 Protocols",
    description:
      "All 8 Short Kings ebooks. Instant download. The Text That Lands, The Standing Man, What She's Actually Thinking, Dating Decoded, The Inner Game, The Swipe, Dress Tall, Short King.",
    amountCents: 10000,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_BUNDLE",
    productId: "the-playbook",
    name: "The Playbook",
    description:
      "The complete self-paced system. All 8 ebooks + 2 coaching calls + Style Guide + 30-day tracker. Execute independently.",
    amountCents: 18500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_BUILT_DIFFERENT",
    productId: "built-different",
    name: "Built Different",
    description:
      "Fully structured gym + nutrition program on Trainerize. Built for shorter guys: proportions, density, macros.",
    amountCents: 6500,
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_MONTHLY_COACHING",
    productId: "inner-circle",
    name: "The Inner Circle",
    description:
      "4 coaching calls a month, unlimited WhatsApp, personalized game plan, all 8 ebooks free on signup. Cancel anytime.",
    amountCents: 15000,
    recurring: { interval: "month" },
  },
  {
    envKey: "STRIPE_PAYMENT_LINK_TRANSFORMATION_3MO",
    productId: "the-empire",
    name: "The Empire",
    description:
      "Done-with-you, 3 months. Weekly calls, real-time text + profile review, body language and style work, full system included.",
    amountCents: 99700,
  },
];

async function stripe(method, path, form = null) {
  const url = `https://api.stripe.com/v1/${path}`;
  /** @type {RequestInit} */
  const init = {
    method,
    headers: {
      Authorization: `Bearer ${SECRET}`,
      ...(form ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
  };
  if (form) init.body = new URLSearchParams(form).toString();
  const res = await fetch(url, init);
  const body = await res.json();
  if (!res.ok) {
    const msg = body?.error?.message || JSON.stringify(body);
    throw new Error(`${method} ${path}: ${msg}`);
  }
  return body;
}

function thanksUrl(productId) {
  return `${SITE_URL}/thanks?product=${encodeURIComponent(productId)}&session={CHECKOUT_SESSION_ID}`;
}

async function findProductByEnvKey(envKey) {
  let startingAfter = null;
  for (;;) {
    const q = new URLSearchParams({ limit: "100", active: "true" });
    if (startingAfter) q.set("starting_after", startingAfter);
    const page = await stripe("GET", `products?${q}`);
    for (const p of page.data) {
      if (p.metadata?.ske_env_key === envKey) return p;
    }
    if (!page.has_more) return null;
    startingAfter = page.data[page.data.length - 1].id;
  }
}

async function ensureProduct(item) {
  const existing = await findProductByEnvKey(item.envKey);
  if (existing) {
    if (DRY_RUN) {
      console.log(`  [dry-run] update product ${existing.id} → ${item.name}`);
      return existing;
    }
    return stripe("POST", `products/${existing.id}`, {
      name: item.name,
      description: item.description,
      "metadata[ske_env_key]": item.envKey,
      "metadata[ske_product_id]": item.productId,
      "metadata[source]": "ske-sync-stripe-payment-links",
    });
  }
  if (DRY_RUN) {
    console.log(`  [dry-run] create product ${item.name}`);
    return { id: `prod_dry_${item.productId}` };
  }
  return stripe("POST", "products", {
    name: item.name,
    description: item.description,
    "metadata[ske_env_key]": item.envKey,
    "metadata[ske_product_id]": item.productId,
    "metadata[source]": "ske-sync-stripe-payment-links",
  });
}

async function ensurePrice(item, productId) {
  if (DRY_RUN) {
    console.log(
      `  [dry-run] create price $${(item.amountCents / 100).toFixed(2)} on ${productId}`
    );
    return { id: `price_dry_${item.productId}` };
  }
  /** @type {Record<string, string>} */
  const form = {
    product: productId,
    currency: "usd",
    unit_amount: String(item.amountCents),
    "metadata[ske_env_key]": item.envKey,
    "metadata[ske_product_id]": item.productId,
  };
  if (item.recurring) {
    form["recurring[interval]"] = item.recurring.interval;
  }
  return stripe("POST", "prices", form);
}

async function createPaymentLink(item, priceId) {
  if (DRY_RUN) {
    console.log(`  [dry-run] create payment link for ${item.envKey}`);
    return {
      id: `plink_dry_${item.productId}`,
      url: `https://buy.stripe.com/dry_${item.productId}`,
    };
  }
  return stripe("POST", "payment_links", {
    "line_items[0][price]": priceId,
    "line_items[0][quantity]": "1",
    "after_completion[type]": "redirect",
    "after_completion[redirect][url]": thanksUrl(item.productId),
    allow_promotion_codes: "true",
    "metadata[ske_env_key]": item.envKey,
    "metadata[ske_product_id]": item.productId,
    "metadata[source]": "ske-sync-stripe-payment-links",
  });
}

async function main() {
  console.log(`Site thanks base: ${SITE_URL}`);
  console.log(`Mode: ${DRY_RUN ? "DRY-RUN" : "LIVE"}`);
  console.log(`Catalog items: ${CATALOG.length}\n`);

  /** @type {Record<string, string>} */
  const envMap = {};

  for (const item of CATALOG) {
    console.log(`→ ${item.envKey}`);
    console.log(`  ${item.name} · $${(item.amountCents / 100).toFixed(2)}${item.recurring ? "/mo" : ""}`);
    const product = await ensureProduct(item);
    const price = await ensurePrice(item, product.id);
    const link = await createPaymentLink(item, price.id);
    envMap[item.envKey] = link.url;
    console.log(`  url: ${link.url}\n`);
  }

  console.log("─── Vercel env values (Production + Preview) ───");
  for (const [k, v] of Object.entries(envMap)) {
    console.log(`${k}=${v}`);
  }

  if (ENV_OUT) {
    const body = Object.entries(envMap)
      .map(([k, v]) => `${k}=${v}`)
      .join("\n");
    writeFileSync(ENV_OUT, body + "\n", { mode: 0o600 });
    console.log(`\nWrote ${ENV_OUT}`);
  }

  console.log(`
Next:
  1. Set each STRIPE_PAYMENT_LINK_* in Vercel (Production + Preview).
  2. Add STRIPE_PAYMENT_LINK_SHORT_KING if it was missing.
  3. Redeploy without build cache so /products bakes in the new URLs.
  4. Smoke-test one $15 ebook checkout page title + amount, then the $100 bundle.
`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
