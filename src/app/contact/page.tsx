import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PostCta } from "@/components/sections/post-cta";
import { CalBooking } from "@/components/sections/cal-booking";

export const metadata: Metadata = {
  title: "Contact — Talently",
  description:
    "Tell us what you need and we'll bring a vetted shortlist to your free consultation. No upfront fee, you only pay once you hire.",
};

/**
 * Contact page.
 *
 * Heading + supporting copy, then the embedded Cal booker across the full
 * 1288 column — the booker's own two-panel split (detail rail + calendar)
 * carries the horizontal rhythm the photo crop used to.
 */
export default function ContactPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="pt-[64px] lg:pt-[74px]">
        <Section
          aria-labelledby="contact-heading"
          className="bg-white"
        >
          <Container className="pt-sec-sm pb-sec-sm lg:pt-sec-md lg:pb-sec-md">
            <div className="min-w-0">
                <Reveal distance={16}>
                  <p className="display-serif text-[15px] leading-[22px] text-muted lg:text-[19px] lg:leading-[26px]">
                    &#92; Contact Us
                  </p>
                </Reveal>

              {/* The subtitle sits well clear of the heading and hangs off
                  the right edge of the column, as in the reference. */}
              <div className="mt-[26px] flex flex-col gap-y-5 sm:flex-row sm:items-start sm:gap-x-[52px] lg:mt-[39px]">
                <Reveal delay={90} className="min-w-0">
                  <h1
                    id="contact-heading"
                    className="text-[28px] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[34px] lg:text-display-lg lg:tracking-[-0.035em] lg:whitespace-nowrap"
                  >
                    Let&rsquo;s find your next
                    <br />
                    <em className="display-serif-md">South African Hire.</em>
                  </h1>
                </Reveal>

                <Reveal
                  delay={180}
                  className="sm:ml-auto sm:min-w-0 sm:pt-[10px] lg:w-[511px] lg:shrink-0 lg:pt-[26px]"
                >
                  <p className="max-w-[470px] text-[16px] leading-[1.45] text-ink lg:max-w-none lg:text-[17px] lg:leading-[23px]">
                    Tell us what you need, we&rsquo;ll bring a vetted shortlist
                    to your free consultation. No upfront fee, you only pay
                    once you hire.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={260} className="mt-head-sm min-w-0 lg:mt-head-md">
                <CalBooking />
              </Reveal>
            </div>
          </Container>
        </Section>

        <PostCta />
      </main>
      <SiteFooter />
    </>
  );
}
