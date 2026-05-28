import Script from "next/script";
import { FunnelHero } from "@/components/sections/funnel/FunnelHero";
import { FunnelResearchPillars } from "@/components/sections/funnel/FunnelResearchPillars";
import { FunnelSocialProof } from "@/components/sections/funnel/FunnelSocialProof";
import { FunnelManBehind } from "@/components/sections/funnel/FunnelManBehind";
import { FunnelOffer } from "@/components/sections/funnel/FunnelOffer";
import { FunnelCounsel } from "@/components/sections/funnel/FunnelCounsel";
import { FunnelFaq } from "@/components/sections/funnel/FunnelFaq";
import { FunnelFinalCta } from "@/components/sections/funnel/FunnelFinalCta";
import { SectionBand } from "@/components/ui/SectionBand";

export default function Home() {
  return (
    <>
      <Script
        src="https://embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      />
      <div className="funnel-flow">
      <SectionBand variant="hero">
        <FunnelHero />
      </SectionBand>

      <FunnelResearchPillars />

      <SectionBand variant="default">
        <FunnelSocialProof />
      </SectionBand>

      <FunnelManBehind />

      <SectionBand variant="gold">
        <FunnelOffer />
      </SectionBand>

      <FunnelCounsel />

      <SectionBand variant="alt">
        <FunnelFaq />
      </SectionBand>

      <SectionBand variant="red">
        <FunnelFinalCta />
      </SectionBand>
    </div>
    </>
  );
}
