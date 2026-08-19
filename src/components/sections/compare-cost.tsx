import Image from "next/image";

import { ActionButton } from "@/components/site/action-button";
import { Container } from "@/components/site/container";
import { PercentIcon } from "@/components/site/proof-icons";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionDivider } from "@/components/site/section";

/**
 * "Why Pay $65,000/Year" — the two cost cards either side of the VS badge.
 *
 * Measured off the reference (2x export, halved): the pair sits on a 1176px
 * column (58px inside the 1288px body container), two 528x318 cards with a
 * 120px channel between them carrying a hairline and the VS mark.
 */
export function CompareCost() {
  return (
    <>
      <SectionDivider />
      <Section
        id="compare"
        aria-labelledby="compare-heading"
        className="scroll-mt-[64px] bg-white pt-9 pb-20 sm:pt-12 lg:scroll-mt-[74px] lg:pt-[30px] lg:pb-[200px]"
      >
        <Container>
          <Reveal>
            {/* 56/66 display, centred over the card pair. */}
            <h2
              id="compare-heading"
              className="mx-auto max-w-[13ch] text-center text-[32px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:max-w-none sm:text-[42px] lg:text-[50px] lg:leading-[60px] xl:text-[56px] xl:leading-[66px]"
            >
              Why Pay $65,000/Year When{" "}
              <br className="hidden sm:inline" />
              You Could Pay $24,000?
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] leading-[1.45] text-ink lg:mt-[16px] lg:text-[19px]">
              Same quality. Native English. College-educated. $41K back in your
              pocket, every year.
            </p>
          </Reveal>

          {/* Card pair ------------------------------------------------- */}
          <div className="mx-auto mt-10 grid max-w-[1176px] grid-cols-1 sm:mt-[76px] lg:grid-cols-[1fr_120px_1fr]">
            <Reveal delay={200} className="flex">
              <CostCard
                label="US Hire"
                price="$65,000"
                struck
                body="Higher salaries, benefits, payroll taxes, and recruiting costs add up quickly."
                className="bg-ink"
              />
            </Reveal>

            {/* The channel: hairline broken by the VS mark. Horizontal on
                mobile, vertical from lg up. */}
            <Reveal
              delay={280}
              distance={0}
              className="flex flex-row items-center justify-center gap-[14px] py-6 lg:flex-col lg:py-0"
            >
              <span
                aria-hidden
                className="h-px flex-1 bg-ink lg:h-auto lg:w-px lg:flex-1"
              />
              <Image
                src="/images/vs-badge.png"
                alt=""
                width={119}
                height={161}
                className="h-[52px] w-auto shrink-0 lg:h-[80px]"
              />
              <span
                aria-hidden
                className="h-px flex-1 bg-ink lg:h-auto lg:w-px lg:flex-1"
              />
            </Reveal>

            <Reveal delay={360} className="flex">
              <CostCard
                label="Talently Hire"
                price="$24,000"
                body="Get college-educated, English-speaking talent for a fraction of the annual cost."
              >
                <Image
                  src="/images/compare-gradient.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 528px, 100vw"
                  className="-z-10 object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-black/25 via-black/5 to-transparent"
                />
              </CostCard>
            </Reveal>
          </div>

          {/* Closing line and CTA, centred as one group. */}
          <Reveal
            delay={200}
            className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-[29px] lg:mt-[49px]"
          >
            <p className="text-center text-[16px] leading-[1.4] text-ink sm:text-left lg:text-[19px]">
              Start working with your new hire in as little as 2 weeks.
            </p>
            <ActionButton
              variant="dark"
              href="/contact"
              className="w-full gap-3 sm:w-auto lg:h-[44px] lg:w-[388px] lg:gap-[14px] lg:px-0 lg:text-[17px]"
            >
              See the Math for Your Hire
              <PercentIcon className="size-[18px] shrink-0" />
            </ActionButton>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

type CostCardProps = {
  label: string;
  price: string;
  body: string;
  /** Rules the price through, as the US column does in the reference. */
  struck?: boolean;
  className?: string;
  children?: React.ReactNode;
};

function CostCard({
  label,
  price,
  body,
  struck,
  className,
  children,
}: CostCardProps) {
  return (
    <article
      className={[
        "relative isolate flex w-full flex-col overflow-hidden text-white",
        "px-7 pt-9 pb-8 sm:px-[41px] sm:pt-[52px] sm:pb-[44px]",
        "min-h-[250px] sm:min-h-[290px] lg:min-h-[318px]",
        className ?? "",
      ].join(" ")}
    >
      {children}

      <p className="text-[17px] leading-none lg:text-[20px]">{label}</p>

      <p className="relative mt-6 inline-flex w-fit text-[42px] leading-[1] font-bold tracking-[-0.02em] sm:text-[52px] lg:mt-[34px] lg:text-[64px]">
        {price}
        {struck ? (
          <span
            aria-hidden
            className="absolute top-1/2 -left-[3px] h-[4px] w-[calc(100%+6px)] -translate-y-1/2 -rotate-[2deg] bg-white lg:h-[5px]"
          />
        ) : null}
      </p>

      <p className="mt-6 max-w-[430px] text-[15px] leading-[1.5] text-white/90 lg:mt-[30px] lg:text-[19px] lg:leading-[29px]">
        {body}
      </p>
    </article>
  );
}
