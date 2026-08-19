import { SectionDivider } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";
import { DarkBand } from "@/components/sections/dark-band";
import { OnlyWayToHire } from "@/components/sections/only-way-to-hire";
import { EverythingHandled } from "@/components/sections/everything-handled";
import { ConsultationToHire } from "@/components/sections/consultation-to-hire";
import { CompareCost } from "@/components/sections/compare-cost";
import { GuaranteeBand } from "@/components/sections/guarantee-band";
import { CompetitorComparison } from "@/components/sections/competitor-comparison";
import { Pricing } from "@/components/sections/pricing";
import { EveryRole } from "@/components/sections/every-role";
import { RealPeople } from "@/components/sections/real-people";
import { FounderTestimonial } from "@/components/sections/founder-testimonial";
import { GrowingBusinesses } from "@/components/sections/growing-businesses";
import { StillNotConvinced } from "@/components/sections/still-not-convinced";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { PostCta } from "@/components/sections/post-cta";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Capabilities />
        {/* Both proof sections share one continuous dark band. */}
        <DarkBand>
          <OnlyWayToHire />
          <EverythingHandled />
        </DarkBand>
        <ConsultationToHire />
        <CompareCost />
        <GuaranteeBand />
        <CompetitorComparison />
        <Pricing />
        <EveryRole />
        <SectionDivider />
        {/* The people and the founder read as one chapter: a narrower band
            between them than the usual section divider. */}
        <RealPeople />
        <div
          aria-hidden
          className="h-5 w-full lg:h-[36px]"
        />
        <FounderTestimonial />
        <SectionDivider />
        <GrowingBusinesses />
        <SectionDivider />
        <StillNotConvinced />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Faq />
        <SectionDivider />
        <PostCta />
      </main>
      <SiteFooter />
    </>
  );
}
