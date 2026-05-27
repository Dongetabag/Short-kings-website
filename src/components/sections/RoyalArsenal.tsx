import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductTierPicker } from "@/components/sections/ProductTierPicker";
import { PRODUCT_TIERS } from "@/lib/product-tiers";
import { resolvePaymentLink } from "@/lib/products";

export function RoyalArsenal() {
  const tiers = PRODUCT_TIERS.map((tier) => ({
    ...tier,
    products: tier.products.map((product) => ({
      ...product,
      href: product.paymentLinkEnvKey
        ? resolvePaymentLink(product.paymentLinkEnvKey)
        : null,
    })),
  }));

  return (
    <section id="products" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeader
            eyebrow="Products"
            titleTop="Choose your"
            titleHighlight="tier."
            subtitle="Tap a tier to see what's included — from ebooks and AI through coaching and The Empire."
          />
        </Reveal>

        <Reveal>
          <ProductTierPicker tiers={tiers} />
        </Reveal>

        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex h-11 items-center rounded-md border border-gold/40 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:border-gold hover:bg-white/[0.04]"
            >
              View full product list
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
