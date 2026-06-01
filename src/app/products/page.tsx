import Script from "next/script";
import { ProductsPageView } from "@/components/products/ProductsPageView";
import { EBOOKS, resolvePaymentLink } from "@/lib/products";
import { SEVEN_PROTOCOLS, THE_PLAYBOOK } from "@/lib/site";

/**
 * Server component. Resolves every payment-link env var on the server
 * (where process.env.STRIPE_PAYMENT_LINK_* is actually populated) and
 * passes the resolved URLs as props to the client-side view.
 *
 * Before this fix, ProductsPageView called resolvePaymentLink itself.
 * That worked during server render but produced null on client hydration
 * because Next.js does not inline non-NEXT_PUBLIC_ env vars in the browser.
 * Result: every "Buy" button hydrated back to "Setup pending".
 */
export default function ProductsPage() {
  const paymentLinks: Record<string, string | null> = {};
  const keys = [
    SEVEN_PROTOCOLS.paymentLinkEnvKey,
    THE_PLAYBOOK.paymentLinkEnvKey,
    ...EBOOKS.map((b) => b.paymentLinkEnvKey),
  ];
  for (const k of keys) {
    if (k) paymentLinks[k] = resolvePaymentLink(k);
  }

  return (
    <>
      <Script
        src="https://embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      />
      <ProductsPageView paymentLinks={paymentLinks} />
    </>
  );
}
