import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionDivider } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import {
  CapabilityCard,
  type Capability,
} from "@/components/sections/capability-card";

const LEAD = "A dedicated Accountant or VA who handles";
const CLOSING = "so nothing falls through the cracks while you focus on the business.";

const CAPABILITIES: Capability[] = [
  {
    title: "Admin & Finance",
    tagline: "Bookkeeping. Contracts. Payroll. Projects.",
    lead: LEAD,
    bullets: [
      "Executive Assistant",
      "Admin Tasks",
      "Personal Tasks",
      "Reporting",
      "Contracts, etc.",
    ],
    closing: CLOSING,
    image: {
      src: "/images/person-1.webp",
      alt: "Bookkeeper holding folders and a calculator in front of a brick wall",
    },
    imagePosition: "top",
  },
  {
    title: "Sales & Growth",
    tagline: "Cold Outreach. Meetings Booked. Pipeline Filled.",
    lead: LEAD,
    bullets: [
      "Prospecting",
      "Cold Outreach",
      "Qualification",
      "Booking Demos",
    ],
    closing: CLOSING,
    image: {
      src: "/images/person-2.webp",
      alt: "Sales representative smiling with arms folded",
    },
    imagePosition: "bottom",
  },
  {
    title: "Creative & Design",
    tagline: "On-Brand, On-Time, Every Time.",
    lead: LEAD,
    bullets: [
      "Graphic Design",
      "Social Media",
      "Paid Ads",
      "Strategy and Execution",
    ],
    closing: CLOSING,
    image: {
      src: "/images/person-3.webp",
      alt: "Designer reviewing printed layouts at a studio desk",
    },
    imagePosition: "top",
  },
];

export function Capabilities() {
  return (
    <>
      <SectionDivider />
      <Section
        id="roles"
        aria-labelledby="capabilities-heading"
        className="scroll-mt-[64px] bg-white pt-10 pb-16 lg:scroll-mt-[74px] lg:pt-9 lg:pb-[148px]"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="capabilities-heading"
              lead="What your Talently"
              accent="Hire can do for you."
            />
          </Reveal>

          {/* Flush 3-up: no gutter, matching the reference. */}
          <ul className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:mt-[45px] lg:grid-cols-3">
            {CAPABILITIES.map((capability, i) => (
              <Reveal
                as="li"
                key={capability.title}
                delay={140 + i * 130}
                className="flex"
              >
                <CapabilityCard capability={capability} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
