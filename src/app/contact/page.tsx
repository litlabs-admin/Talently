import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionDivider } from "@/components/site/section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PostCta } from "@/components/sections/post-cta";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact — Talently",
  description:
    "Tell us what you need and we'll bring a vetted shortlist to your free consultation. No upfront fee, you only pay once you hire.",
};

/**
 * Contact page.
 *
 * The 1288 column splits 875 / 45 / 368 —
 * heading + supporting copy + form on the left, a single tall portrait crop of
 * the landscape on the right, its height tied to the form's.
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
          <Container className="pt-9 pb-12 sm:pt-12 lg:pt-[46px] lg:pb-[70px]">
            {/* 875 / 45 / 368 — the heading block sits on row 1, the form
                and the crop share row 2 so the image top rides 14px above the
                first field label and its foot lands with the form's. */}
            <div className="lg:grid lg:grid-cols-[875px_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-[45px]">
              <div className="min-w-0 lg:col-span-2 lg:col-start-1 lg:row-start-1">
                <Reveal distance={16}>
                  <p className="display-serif text-[15px] leading-[22px] text-muted lg:text-[19px] lg:leading-[26px]">
                    &#92; Contact Us
                  </p>
                </Reveal>

                {/* The reference pushes the subtitle well clear of the
                    heading: its block starts 692px into the 1288 column and
                    stops ~85px short of the crop, not on the form's grid. */}
                <div className="mt-[26px] flex flex-col gap-y-5 sm:flex-row sm:items-start sm:gap-x-[52px] lg:mt-[39px]">
                  <Reveal delay={90} className="min-w-0">
                    <h1
                      id="contact-heading"
                      className="text-[34px] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[42px] lg:text-[52px] lg:leading-[64px] lg:tracking-[-0.035em] lg:whitespace-nowrap"
                    >
                      Let&rsquo;s find your next
                      <br />
                      <em className="display-serif-md">South African Hire.</em>
                    </h1>
                  </Reveal>

                  <Reveal
                    delay={180}
                    className="sm:ml-auto sm:min-w-0 sm:pt-[10px] lg:mr-[85px] lg:w-[511px] lg:shrink-0 lg:pt-[26px]"
                  >
                    <p className="max-w-[470px] text-[16px] leading-[1.45] text-ink lg:max-w-none lg:text-[17px] lg:leading-[23px]">
                      Tell us what you need, we&rsquo;ll bring a vetted
                      shortlist to your free consultation. No upfront fee, you
                      only pay once you hire.
                    </p>
                  </Reveal>
                </div>
              </div>

              <Reveal
                delay={260}
                className="mt-10 min-w-0 lg:col-start-1 lg:row-start-2 lg:mt-[75px]"
              >
                <ContactForm />
              </Reveal>

              {/* The crop: a tall portrait window on the landscape, square
                  corners, cover-cropped so it never distorts. */}
              <Reveal
                delay={340}
                distance={20}
                className="mt-10 min-w-0 lg:col-start-2 lg:row-start-2 lg:mt-[75px]"
              >
                <div className="relative h-[300px] w-full overflow-hidden sm:h-[420px] lg:-mt-[14px] lg:h-[calc(100%+14px)] lg:min-h-[627px]">
                  <Image
                    src="/images/contact-scene.webp"
                    alt="A hillside looking out over vineyards and a lake in the Western Cape"
                    fill
                    sizes="(max-width: 1024px) 100vw, 368px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        <SectionDivider />
        <PostCta />
      </main>
      <SiteFooter />
    </>
  );
}
