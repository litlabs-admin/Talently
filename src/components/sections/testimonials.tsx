import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import {
  MoreDots,
  RatingStars,
  VerifiedBadge,
} from "@/components/site/rating-stars";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Our South African EA handles everything I used to drown in. I finally have my mornings back, and she costs a third of what I was quoted locally."',
    name: "Jessica Adams",
    role: "Founder Growthlabs",
    rating: 4.5,
  },
  {
    quote:
      '"Our South African EA handles everything I used to drown in. I finally have my mornings back, and she costs a third of what I was quoted locally."',
    name: "Michael Chen",
    role: "Head of Sales, TechFlow Inc",
    rating: 4.5,
  },
  {
    quote:
      '"Our South African EA handles everything I used to drown in. I finally have my mornings back, and she costs a third of what I was quoted locally."',
    name: "Sarah Mitchell",
    role: "COO, ScaleUp SaaS",
    rating: 4.5,
  },
];

/**
 * "Companies Building Faster / With Talently".
 *
 * Geometry solved off Talantely-Landing_Page.png (2x export, values halved).
 * 795px between the hairline bands, on the usual 1288px body column:
 *
 *   46   centred two-line display — sans, then an *upright* serif line
 *        (0.81em, not the italic used everywhere else on the page)
 *   70   then three 420 x 447 plates
 *   140  tail
 *
 * Each plate is a flat #F1F1F1 field — square corners, no radius, no shadow —
 * with the review itself floated inside it as a 368 x 320 hairline box, inset
 * 26px horizontally and 64px vertically. The box carries no fill of its own:
 * the grey reads straight through it, so the border is the only thing drawing
 * the card. That inset frame is the whole idea of the section and is what
 * keeps it from collapsing into a generic three-up testimonial grid.
 *
 * Inside the frame, measured from its top edge:
 *   32   the 4.5-star row, with the muted "..." pushed to the far side
 *   18   the quote, 20/26, five lines in the reference measure
 *   36   the author row: 43px avatar, 13px gutter, name 24 + role 17
 *   37   tail
 */
export function Testimonials() {
  return (
    <Section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-[64px] bg-white pt-10 pb-16 sm:pt-12 sm:pb-20 lg:scroll-mt-[74px] lg:pt-[46px] lg:pb-[110px] xl:pb-[140px]"
    >
      <Container>
        <Reveal distance={28}>
          <h2
            id="testimonials-heading"
            className="text-center text-[30px] leading-[1.14] font-bold tracking-[-0.025em] text-ink sm:text-[38px] lg:text-[46px] lg:leading-[44px] xl:text-[50px] xl:leading-[46px]"
          >
            Companies Building Faster
            <span className="mt-1 block font-serif text-[0.88em] font-normal tracking-[-0.01em] lg:mt-0">
              With Talently
            </span>
          </h2>
        </Reveal>

        <ul className="mx-auto mt-9 grid max-w-[440px] grid-cols-1 gap-[14px] sm:mt-11 md:max-w-none md:grid-cols-3 lg:mt-[60px] xl:mt-[70px]">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={180 + i * 150}
              distance={26}
              className="flex"
            >
              {/* The grey plate. Square corners — nothing on this page rounds. */}
              <div className="flex w-full bg-[#f1f1f1] px-5 py-8 sm:px-6 sm:py-10 md:px-[14px] md:py-[26px] lg:px-[20px] lg:py-[46px] xl:px-[26px] xl:py-[64px]">
                {/* The review itself: a hairline frame, no fill of its own. */}
                <figure className="flex w-full flex-col border border-[#d9d9d9] px-5 pt-6 pb-6 sm:px-7 md:px-[18px] md:pt-[20px] md:pb-[22px] lg:px-[28px] lg:pt-[28px] lg:pb-[32px] xl:px-[38px] xl:pt-[32px] xl:pb-[30px]">
                  <div className="flex items-center justify-between">
                    <RatingStars id={`stars-${i}`} rating={t.rating} />
                    <MoreDots />
                  </div>

                  <blockquote className="mt-[14px] text-[15px] leading-[23px] text-[#606060] md:mt-[12px] md:text-[13px] md:leading-[19px] lg:mt-[16px] lg:text-[16px] lg:leading-[23px] xl:mt-[18px] xl:text-[20px] xl:leading-[26px]">
                    {t.quote}
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-[10px] md:mt-[22px] md:gap-[8px] lg:mt-[30px] lg:gap-[11px] xl:mt-[32px] xl:gap-[13px]">
                    <span
                      aria-hidden
                      className="size-[38px] shrink-0 rounded-full bg-[#d9d9d9] md:size-[28px] lg:size-[36px] xl:size-[43px]"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-[6px] lg:gap-[8px]">
                        <span className="truncate text-[18px] leading-[24px] font-bold tracking-[-0.02em] text-ink md:text-[15px] md:leading-[20px] lg:text-[20px] lg:leading-[26px] xl:text-[24px] xl:leading-[30px]">
                          {t.name}
                        </span>
                        <VerifiedBadge />
                      </div>
                      <p className="mt-[2px] truncate text-[13px] leading-[18px] text-[#a9a9a9] md:text-[11px] lg:text-[14px] lg:leading-[19px] xl:text-[17px] xl:leading-[22px]">
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
