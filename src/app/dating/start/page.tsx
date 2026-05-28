import Script from "next/script";
import { DatingFunnelFlow } from "@/components/dating-funnel/DatingFunnelFlow";
import { resolvePaymentLink } from "@/lib/products";
import {
  INNER_CIRCLE,
  SEVEN_PROTOCOLS,
  THE_PLAYBOOK,
} from "@/lib/site";

export const metadata = {
  title: "Dating assessment",
  description:
    "Two-minute assessment for shorter men — get a personalized Short Kings offer from Axel's system.",
};

export default function DatingStartPage() {
  const paymentLinks = {
    "seven-protocols": resolvePaymentLink(SEVEN_PROTOCOLS.paymentLinkEnvKey),
    "the-playbook": resolvePaymentLink(THE_PLAYBOOK.paymentLinkEnvKey),
    "inner-circle": resolvePaymentLink(INNER_CIRCLE.paymentLinkEnvKey),
    "the-empire": null,
  };

  return (
    <>
      <Script src="https://embed.typeform.com/next/embed.js" strategy="lazyOnload" />
      <DatingFunnelFlow paymentLinks={paymentLinks} />
    </>
  );
}
