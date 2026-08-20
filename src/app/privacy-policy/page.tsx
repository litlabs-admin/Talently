import type { Metadata } from "next";

import { LegalContent } from "@/components/sections/legal-content";
import { LegalIntro } from "@/components/sections/legal-intro";
import { PostCta } from "@/components/sections/post-cta";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { privacyHero, privacySections } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Talently",
  description: privacyHero.intro,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="pt-[64px] lg:pt-[74px]">
        <LegalIntro
          headingId="privacy-heading"
          title={privacyHero.title}
          intro={privacyHero.intro}
          effectiveDate={privacyHero.effectiveDate}
        />
        <LegalContent
          sections={privacySections}
          closingQuestion="Questions about this policy?"
        />
        <PostCta />
      </main>
      <SiteFooter />
    </>
  );
}
