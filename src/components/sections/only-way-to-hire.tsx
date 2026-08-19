import { Reveal } from "@/components/site/reveal";
import {
  GrowthIcon,
  HourglassCheckIcon,
  MaskSmileIcon,
  PiggyIcon,
  RosetteStarIcon,
  SealCheckIcon,
  ShieldHalfIcon,
} from "@/components/site/proof-icons";
import { ProofCard, type Proof } from "@/components/sections/proof-card";
import { DarkContainer } from "@/components/sections/dark-band";

const PROOFS: Proof[] = [
  {
    label: "Savings",
    title: "Save Up to 70%",
    body: "Access world-class talent at a fraction of local hiring costs.",
    stat: "$50K+",
    statCaption: "Saved annually per hire",
    icon: PiggyIcon,
    image: {
      src: "/images/scene-1.webp",
      alt: "Sunlit green valley of terraced farmland",
    },
  },
  {
    label: "Brightest",
    title: "Top 2% Talent",
    body: "Every candidate is tested through real work scenarios before you meet them.",
    stat: "90%",
    statCaption: "Client satisfaction rate",
    icon: RosetteStarIcon,
    image: {
      src: "/images/scene-2.webp",
      alt: "Deep red sunset burning over a treeline",
    },
  },
  {
    label: "Assurance",
    title: "Full-Service Solution",
    body: "We handle contracts, payroll, benefits, and compliance.",
    stat: "100%",
    statCaption: "Employment coverage",
    icon: ShieldHalfIcon,
    image: {
      src: "/images/scene-3.webp",
      alt: "Bright blue sky scattered with cloud",
    },
  },
  {
    label: "Timing",
    title: "Time-Zone Aligned",
    body: "South African hires work during your hours, not against them.",
    stat: "6-8 Hrs",
    statCaption: "Overlap with US/EST",
    icon: HourglassCheckIcon,
    image: {
      src: "/images/scene-4.webp",
      alt: "Golden morning mist over an open field",
    },
  },
  {
    label: "Growth",
    title: "Scale Effortlessly",
    body: "Grow your team fast without the overhead.",
    stat: "2 Weeks",
    statCaption: "Average time to hire",
    icon: GrowthIcon,
    image: {
      src: "/images/scene-5.webp",
      alt: "Star-filled violet night sky above a mountain ridge",
    },
  },
  {
    label: "Diversity",
    title: "Cultural Fit",
    body: "Native English speakers, college-educated, business-oriented.",
    stat: "500+",
    statCaption: "Successful Placements",
    icon: MaskSmileIcon,
    image: {
      src: "/images/scene-6.webp",
      alt: "Rolling green hills crossed by a single track",
    },
  },
];

export function OnlyWayToHire() {
  return (
    <section
      id="why-talently"
      aria-labelledby="only-way-heading"
      className="scroll-mt-[64px] pt-16 sm:pt-20 lg:scroll-mt-[74px] lg:pt-[70px]"
    >
      <DarkContainer>
        {/* Header: 52/63 display on the left, a short qualifier parked on the
            right-hand half — the reference drops it to sit with the second
            heading line rather than the first. */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <Reveal className="lg:max-w-[800px] lg:min-w-0">
            <h2
              id="only-way-heading"
              className="text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-white sm:text-[44px] lg:leading-[54px] xl:text-[52px] xl:leading-[63px]"
            >
              The Only Way to Hire
              <br />
              <em className="display-serif-lg">
                South Africa&rsquo;s Top 2%, Done for You
              </em>
            </h2>
          </Reveal>

          <Reveal
            delay={160}
            className="lg:w-[280px] lg:shrink-0 lg:pt-[39px] xl:w-[318px]"
          >
            <p className="max-w-[420px] text-[16px] leading-[1.45] text-white lg:leading-[25px] lg:text-[16px] lg:leading-[25px]">
              We vet, test, and shortlist candidates so you only ever see the
              best.
            </p>
          </Reveal>
        </div>

        {/* 3-up photographic grid, 39px gutter. */}
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:mt-[81px] lg:grid-cols-3 lg:gap-x-[39px] lg:gap-y-[34px]">
          {PROOFS.map((proof, i) => (
            <Reveal
              as="li"
              key={proof.label}
              delay={120 + (i % 3) * 130}
              className="flex"
            >
              <ProofCard proof={proof} />
            </Reveal>
          ))}
        </ul>

        {/* Rule — button — rule. */}
        <Reveal delay={120} className="mt-14 lg:mt-[86px]">
          <div className="flex items-center gap-[27px]">
            <span aria-hidden className="hidden h-px flex-1 bg-white/25 sm:block" />
            <a
              href="#how-it-works"
              className="group inline-flex h-[52px] w-full items-center justify-center gap-3 border border-white/45 px-7 text-[17px] font-semibold tracking-[-0.01em] whitespace-nowrap text-white transition-colors duration-200 ease-out hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto lg:h-[48px] lg:w-[377px] lg:px-0 lg:text-[19px]"
            >
              See how we vet top 2% talent
              <SealCheckIcon className="size-[26px] shrink-0" />
            </a>
            <span aria-hidden className="hidden h-px flex-1 bg-white/25 sm:block" />
          </div>
        </Reveal>
      </DarkContainer>
    </section>
  );
}
