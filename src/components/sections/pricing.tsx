import Image from "next/image";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionDivider } from "@/components/site/section";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  /** The oversized figure — "25%", "$850". */
  figure: string;
  /** The unit that sits on the figure's baseline. */
  unit: string;
  note: string;
  features: string[];
  /** The bordered, badged card. */
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Recruiting",
    figure: "25%",
    unit: "of annual salary",
    note: "One-time fee. You handle payroll and HR.",
    features: [
      "We source, vet, and shortlist candidates",
      "Interview coordination included",
      "Top 2% South African Talent, in your timezone",
      "Free replacement if it's not the right fit",
    ],
  },
  {
    name: "Staffing",
    figure: "$850",
    unit: "/month",
    note: "One flat fee, salary, payroll, and HR all included.",
    features: [
      "Fully embedded, dedicated to your team",
      "We employ them, you skip payroll, taxes, compliance",
      "A fraction of the cost of a US hire, same caliber",
      "Free replacement until it clicks",
    ],
    featured: true,
  },
];

/**
 * Pricing.
 *
 * Geometry solved off Talantely-Landing_Page.png (2x export, so design px are
 * the measured values halved): the pair of cards runs 1237px wide — two 596px
 * columns on a 45px gutter, 25px inside the 1288px body column — each 640px
 * tall with 64px side padding. The plain plan is a flat #f4f4f4 panel; the
 * featured one is white inside a 1px rule, with the gradient plate hung off
 * its top-right corner (325x76, flush right, 21px proud of the top edge) so it
 * eats the border rather than sitting on top of it.
 *
 * Section runs 1050px between the hairlines — a hair over one 900px viewport,
 * which is what the reference does, so it isn't squeezed to fit.
 */
export function Pricing() {
  return (
    <>
      <SectionDivider />
      <Section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="scroll-mt-[64px] bg-white pt-12 pb-14 sm:pt-16 sm:pb-20 lg:scroll-mt-[74px] lg:pt-[66px] lg:pb-[76px]"
      >
        <Container>
          <Reveal>
            <h2
              id="pricing-heading"
              className="text-center text-[30px] leading-[1.2] font-bold tracking-[-0.015em] text-ink sm:text-[40px] lg:text-[50px] lg:leading-[66px]"
            >
              No Charge Until You Find a{" "}
              <span className="block font-serif text-[0.94em] font-bold tracking-[0]">
                Candidate You Like
              </span>
            </h2>
          </Reveal>

          <Reveal delay={110}>
            <p className="mx-auto mt-3 max-w-[720px] text-center text-[15px] leading-[1.45] text-ink sm:text-[16px] lg:mt-[20px] lg:text-[18px] lg:leading-[24px]">
              Two ways to work with us, pick whichever fits how you want to
              manage payroll.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-[560px] grid-cols-1 gap-8 sm:mt-14 sm:gap-10 lg:mt-[69px] lg:max-w-[1237px] lg:grid-cols-2 lg:gap-[45px]">
            {PLANS.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} delay={180 + i * 140} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function PlanCard({ plan, delay }: { plan: Plan; delay: number }) {
  const featured = plan.featured;

  return (
    <Reveal
      delay={delay}
      distance={28}
      // The badge hangs 21px above the card, so the reveal box has to keep
      // room for it rather than clipping the plate.
      className={cn("relative", featured ? "pt-[21px]" : "lg:pt-[21px]")}
    >
      <div
        className={cn(
          "relative flex h-full flex-col px-7 pt-9 pb-9 sm:px-10 lg:px-[64px] lg:pt-[52px] lg:pb-[53px]",
          featured ? "border border-ink bg-white" : "bg-surface",
          "lg:min-h-[640px]",
        )}
      >
        {featured && <MostPopularPlate />}

        <p className="text-[17px] leading-[24px] text-ink lg:text-[19px] lg:leading-[26px]">
          {plan.name}
        </p>

        {/* Figure + unit share a baseline. */}
        <p className="mt-4 flex flex-wrap items-baseline gap-x-[8px] lg:mt-[20px]">
          <span className="text-[38px] leading-[44px] font-bold tracking-[-0.03em] text-ink lg:text-[47px] lg:leading-[52px]">
            {plan.figure}
          </span>
          <span className="text-[17px] leading-[24px] text-ink lg:text-[20px] lg:leading-[28px]">
            {plan.unit}
          </span>
        </p>

        <p
          className={cn(
            "mt-2 text-[15px] leading-[22px] lg:mt-[10px] lg:text-[20px] lg:leading-[28px]",
            featured ? "text-muted" : "text-[#a4a4a4]",
          )}
        >
          {plan.note}
        </p>

        <a
          href="#contact"
          className="mt-6 flex h-[48px] w-full max-w-[306px] items-center justify-center bg-ink text-[17px] leading-none font-bold text-white transition-opacity hover:opacity-90 lg:mt-[30px] lg:h-[50px] lg:text-[20px]"
        >
          Get Started
        </a>

        <ul className="mt-8 lg:mt-[43px]">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-[16px] border-t border-hairline py-4 text-[15px] leading-[1.35] text-ink lg:h-[69px] lg:gap-[22px] lg:py-0 lg:text-[17px]"
            >
              <ArrowRight className="w-[14px] shrink-0 text-ink" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/**
 * The "Most Popular" plate. The artwork is the whole badge — it is anchored to
 * the card's top-right corner and overlaps the border, so the card reads as
 * having a notched corner rather than a sticker pasted on it.
 */
function MostPopularPlate() {
  return (
    <div
      className="pointer-events-none absolute top-[-21px] right-[-1px] z-10
                 aspect-[1801/422] w-[220px] sm:w-[280px] lg:w-[325px]"
    >
      <Image
        src="/images/most-popular-bg.webp"
        alt=""
        fill
        sizes="325px"
        className="object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center text-[14px] leading-none font-bold text-ink sm:text-[17px] lg:text-[20px]">
        Most Popular
      </span>
    </div>
  );
}

/** The thin arrow that leads every feature row. */
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" fill="none" aria-hidden className={className}>
      <path
        d="M0 7h18M12.2 1 18.6 7l-6.4 6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
