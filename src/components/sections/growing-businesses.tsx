import Image from "next/image";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";

type Segment = {
  src: string;
  alt: string;
  title: string;
  body: string;
};

const SEGMENTS: Segment[] = [
  {
    src: "/images/business-1.webp",
    alt: "Three colleagues reviewing printed charts around a cafe table",
    title: "Startups",
    body: "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
  },
  {
    src: "/images/business-2.webp",
    alt: "A phone showing a card payment resting against a laptop on a storefront checkout",
    title: "E-commerce Brands",
    body: "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
  },
  {
    src: "/images/business-3.webp",
    alt: "A shop owner packing an order at a desk beside a laptop",
    title: "D2C Businesses",
    body: "A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows.",
  },
];

/**
 * "Built for Growing Businesses".
 *
 * Geometry solved off Talantely-Landing_Page.png (2x export, values halved).
 * 663px between the hairline bands, on the usual 1288px body column:
 *
 *   44   centred heading, 50/62 — the same display step as "Every Role You"
 *   44   then three 420.5 x 245 photos on a 13.75px gutter (1289 total)
 *   15   title 26/32
 *   21   body 15/23, two lines, wrapping naturally inside the column
 *   154  tail
 *
 * The photos are the reference's 1.716 crop, which is the source asset's own
 * aspect — so they are used whole: no radius, no border, no frame, no card.
 * The type hangs straight off the image edge, flush left, and that shared left
 * edge is the only thing holding a column together.
 */
export function GrowingBusinesses() {
  return (
    <Section
      id="who-its-for"
      aria-labelledby="growing-heading"
      className="scroll-mt-[64px] bg-white pt-10 pb-16 sm:pt-12 sm:pb-20 lg:scroll-mt-[74px] lg:pt-[44px] lg:pb-[154px]"
    >
      <Container>
        <Reveal distance={28}>
          <h2
            id="growing-heading"
            className="text-center text-[32px] leading-[1.12] font-bold tracking-[-0.025em] text-ink sm:text-[40px] lg:text-[50px] lg:leading-[62px] lg:tracking-[-0.02em]"
          >
            Built for Growing Businesses
          </h2>
        </Reveal>

        <ul className="mt-9 grid grid-cols-1 gap-x-[13.75px] gap-y-10 sm:mt-10 md:grid-cols-3 md:gap-y-0 lg:mt-[44px]">
          {SEGMENTS.map((segment, i) => (
            <Reveal
              as="li"
              key={segment.title}
              delay={180 + i * 160}
              distance={26}
            >
              {/* 1.716 — the asset uncropped. Square corners, no frame. */}
              <div className="relative aspect-[841/490] w-full overflow-hidden bg-surface">
                <Image
                  src={segment.src}
                  alt={segment.alt}
                  fill
                  sizes="(min-width: 1024px) 421px, (min-width: 768px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>

              <h3 className="mt-[13px] text-[22px] leading-[1.2] font-bold tracking-[-0.02em] text-ink sm:text-[24px] md:text-[20px] lg:mt-[15px] lg:text-[26px] lg:leading-[32px]">
                {segment.title}
              </h3>

              <p className="mt-[16px] text-[15px] leading-[22px] text-ink lg:mt-[21px] lg:leading-[23px]">
                {segment.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
