import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { ActionButton } from "@/components/site/action-button";
import { RocketIcon } from "@/components/site/rocket-icon";
import { StepCard, type Step } from "@/components/sections/step-card";

const STEPS: Step[] = [
  {
    number: "01",
    title: "Free Consultation",
    body: "Tell us your needs and ideal candidate profile.",
    chip: "30 min Call",
    image: {
      src: "/images/step-1.webp",
      alt: "Two colleagues reviewing a document together at a desk",
    },
  },
  {
    number: "02",
    title: "Talent Sourcing",
    body: "We source and vet candidates from our network.",
    chip: "5-7 days",
    image: {
      src: "/images/step-2.webp",
      alt: "A smiling candidate in a rust-coloured shirt",
    },
  },
  {
    number: "03",
    title: "Review & Hire",
    body: "Interview your shortlist and pick your favorite.",
    chip: "1-2 weeks",
    image: {
      src: "/images/step-3.webp",
      alt: "A candidate speaking during a video interview",
    },
  },
  {
    number: "04",
    title: "Onboard & Pay",
    body: "We handle the contract, payroll, and compliance.",
    chip: "Ongoing Support",
    image: {
      src: "/images/step-4.webp",
      alt: "A new hire settled in at her workplace",
    },
  },
];

/**
 * The reference stacks three hairlines between the dark chapter and this
 * section: the foot of the dark band, then two rules 43px apart.
 */
function StepsLeadIn() {
  return (
    <>
      <div aria-hidden className="h-[22px] w-full lg:h-[44px]" />
      <div
        aria-hidden
        className="h-6 w-full border-y border-hairline lg:h-[43px]"
      />
    </>
  );
}

export function ConsultationToHire() {
  return (
    <>
      <StepsLeadIn />
      <Section
        id="how-it-works"
        aria-labelledby="steps-heading"
        className="scroll-mt-[64px] bg-white pt-12 pb-16 sm:pt-16 lg:scroll-mt-[74px] lg:pt-[51px] lg:pb-[124px]"
      >
        <Container>
          <Reveal>
            {/* 52/61 display — a touch tighter than the dark chapter's 52/63. */}
            <h2
              id="steps-heading"
              className="text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[44px] lg:leading-[54px] xl:text-[52px] xl:leading-[61px]"
            >
              From Consultation
              <br />
              to Hire, <em className="display-serif-md">in just 2 weeks.</em>
            </h2>
          </Reveal>

          {/* Four columns, 12.5px gutter — the panels almost touch. */}
          <ol className="mt-11 grid grid-cols-1 gap-[12.5px] sm:grid-cols-2 lg:mt-[107px] lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.number}
                delay={120 + i * 140}
                className="flex"
              >
                <StepCard step={step} />
              </Reveal>
            ))}
          </ol>

          {/* Closing line and CTA, centred as one 888px group. */}
          <Reveal
            delay={180}
            className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-[33px] lg:mt-[98px]"
          >
            <p className="max-w-[470px] text-center text-[17px] leading-[1.4] text-ink sm:text-left lg:text-[18px]">
              Start working with your new hire in as little as 2 weeks.
            </p>
            <ActionButton
              variant="dark"
              href="#book-a-call"
              className="w-full gap-3 sm:w-auto lg:h-[62px] lg:w-[388px] lg:gap-3 lg:px-0 lg:text-[18px]"
            >
              Start Your Hiring Journey Today
              <RocketIcon className="size-[20px] shrink-0" />
            </ActionButton>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
