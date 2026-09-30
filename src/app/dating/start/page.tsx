import Script from "next/script";
import { DatingFunnelFlow } from "@/components/dating-funnel/DatingFunnelFlow";
import { OFFER_LINKS } from "@/lib/offer-links";

export const metadata = {
  title: "Dating assessment",
  description:
    "Two-minute assessment for shorter men. Get a personalized Short Kings offer from Axel's system.",
};

export default function DatingStartPage() {
  const paymentLinks = {
    "dating-system": OFFER_LINKS.datingSystem,
    "strategy-call": OFFER_LINKS.strategyCall,
    "inner-circle": OFFER_LINKS.coaching,
    "the-empire": OFFER_LINKS.empire,
  };

  return (
    <>
      <Script src="https://embed.typeform.com/next/embed.js" strategy="lazyOnload" />
      <DatingFunnelFlow paymentLinks={paymentLinks} />
    </>
  );
}
