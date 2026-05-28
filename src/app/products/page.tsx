import Script from "next/script";
import { ProductsPageView } from "@/components/products/ProductsPageView";

export default function ProductsPage() {
  return (
    <>
      <Script
        src="https://embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      />
      <ProductsPageView />
    </>
  );
}
