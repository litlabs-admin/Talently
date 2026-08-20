import type { Metadata } from "next";

import { LegalContent } from "@/components/sections/legal-content";
import { LegalIntro } from "@/components/sections/legal-intro";
import { PostCta } from "@/components/sections/post-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { termsHero, termsSections } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service — Talently",
  description: termsHero.intro,
};

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader solid />
      <main className="pt-[64px] lg:pt-[74px]">
        <LegalIntro
          headingId="terms-heading"
          title={termsHero.title}
          intro={termsHero.intro}
          effectiveDate={termsHero.effectiveDate}
        />
        <LegalContent
          sections={termsSections}
          closingQuestion="Questions about these terms?"
        />
        <PostCta />
      </main>
      <SiteFooter />
    </>
  );
}
