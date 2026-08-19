import Image from "next/image";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";

/**
 * "Hear It From Our Founder" — the closing half of the "Real People" chapter,
 * which is why it shares that section's white ground and is separated from it
 * by a 65px hairline band rather than the usual 47px divider.
 *
 * 779px between hairlines. On the 1288 body column:
 *
 *   left   68.5 -> 635.5   the founder portrait, 567 x 648.5 (7:8, the source
 *                          asset uncropped), top edge at 65.5
 *   right  712.5           a 462-wide copy column, dropped 68 below the photo's
 *                          top so the eyebrow sits level with the flag's first
 *                          green field
 *
 *   133  eyebrow / 178 quote glyph / 237 the 30/31 display / 330 body copy
 *   568  attribution, then 65 of tail under the photo
 */
export function FounderTestimonial() {
  return (
    <Section
      id="founder"
      aria-labelledby="founder-heading"
      className="scroll-mt-[64px] bg-white pt-12 pb-14 sm:pt-14 lg:scroll-mt-[74px] lg:pt-[65px] lg:pb-[65px]"
    >
      <Container>
        <div className="sm:grid sm:grid-cols-2 sm:items-start sm:gap-x-10 lg:grid-cols-[635.5px_1fr] lg:gap-x-[77px]">
          <Reveal distance={20} className="lg:pl-[68px]">
            {/* 7:8 — the asset is used whole, no crop, no radius, no frame. */}
            <div className="relative aspect-[567/648] w-full overflow-hidden lg:max-w-[567px]">
              <Image
                src="/images/testimonial.webp"
                alt="Dan, founder of Talently, in front of a South African flag"
                fill
                sizes="(min-width: 1024px) 567px, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </Reveal>

          <div className="mt-9 max-w-[462px] sm:mt-0 sm:pt-1 lg:pt-[68px]">
            <Reveal delay={120}>
              <p className="text-[14px] leading-none text-muted lg:text-[15px]">
                Hear It From Our Founder
              </p>

              <span
                aria-hidden
                className="mt-[12px] block font-serif text-[60px] leading-[0.85] text-[#c9c9c9] lg:mt-[14px] lg:text-[68px]"
              >
                &ldquo;
              </span>
            </Reveal>

            <Reveal delay={220} distance={20}>
              <blockquote>
                <h2
                  id="founder-heading"
                  className="mt-[14px] text-[26px] leading-[1.06] font-bold tracking-[-0.025em] text-ink lg:mt-[11px] lg:text-[30px] lg:leading-[31px]"
                >
                  Built by someone who felt
                  <br />
                  this problem firsthand.
                </h2>

                <p className="mt-6 text-[16px] leading-[1.55] text-ink lg:mt-[33px] lg:text-[17px] lg:leading-[26.5px]">
                  Talently was founded after seeing how many great companies
                  were stuck choosing between overpaying for local talent or
                  gambling on freelancers who&rsquo;d disappear mid-project.
                  Today, Talently connects North American businesses with
                  vetted, full-time South African professionals, with one
                  mission: help ambitious companies build great teams without
                  the traditional cost or risk of hiring.
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={320} distance={16} rootMargin="0px">
              <div className="mt-6 lg:mt-[18px]">
                <p className="text-[19px] leading-[1.2] font-bold tracking-[-0.02em] text-ink lg:text-[21px]">
                  &mdash; Dan
                </p>
                <p className="mt-[10px] font-serif text-[18px] leading-[1.2] text-muted lg:mt-[13px] lg:text-[20px]">
                  Founder, Talently
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
