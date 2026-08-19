import {
  ChartColumnBig,
  Clipboard,
  Globe,
  GraduationCap,
  Hourglass,
  PhoneCall,
  Waypoints,
} from "lucide-react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { AgentCard, type Agent } from "@/components/sections/agent-card";

const AGENTS: Agent[] = [
  {
    role: "Virtual Assistant",
    name: "Lerato",
    price: "$2,000/mo",
    // The one badge the reference paints as a gradient rather than a flat fill.
    priceClassName:
      "bg-[linear-gradient(100deg,#2a0400_0%,#c62800_28%,#ff5d00_58%,#ffa100_100%)] text-white",
    chips: [
      { label: "Native English", icon: Globe },
      { label: "College Educated", icon: GraduationCap },
    ],
    image: {
      src: "/images/agent-1.webp",
      alt: "Lerato, a virtual assistant, smiling to camera",
    },
  },
  {
    role: "SDR",
    name: "James",
    price: "$2,000/mo",
    priceClassName: "bg-[#b2ff00] text-ink",
    chips: [
      { label: "Cold Calling", icon: PhoneCall },
      { label: "Salesforce", icon: ChartColumnBig },
    ],
    image: {
      src: "/images/agent-2.webp",
      alt: "James, a sales development rep, in a dark jacket",
    },
  },
  {
    role: "Account Manager",
    name: "Sarah",
    price: "$2,000/mo",
    priceClassName: "bg-[#ff5d00] text-white",
    chips: [
      { label: "Client Ready", icon: Globe },
      { label: "Full Time", icon: Hourglass },
    ],
    image: {
      src: "/images/agent-3.webp",
      alt: "Sarah, an account manager, in a blue headscarf",
    },
  },
  {
    role: "Assistant",
    name: "Nomvula",
    price: "$2,000/mo",
    priceClassName: "bg-[#0062ff] text-white",
    chips: [
      { label: "Detail-Obsessed", icon: Waypoints },
      { label: "Reporting", icon: Clipboard },
    ],
    image: {
      src: "/images/agent-4.webp",
      alt: "Nomvula, an assistant, in a burgundy top",
    },
  },
];

/**
 * "Real People, Ready to Start".
 *
 * The head is a two-column split on the 1288 body column — a 52/56 display at the usual 52px heading inset, and
 * a 560-wide copy block starting at 667 — then the four 313-wide cards run
 * edge to edge on the same 12.5px gutter the step cards use.
 *
 * The heading and the intro copy start on the same y; the four cards below
 * run 532.5 tall.
 */
export function RealPeople() {
  return (
    <Section
      id="real-people"
      aria-labelledby="real-people-heading"
      className="scroll-mt-[64px] bg-white pt-sec-sm pb-sec-xs lg:scroll-mt-[74px] lg:pt-sec-md"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-[667px_1fr]">
          <Reveal>
            <h2
              id="real-people-heading"
              className="text-[28px] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-[34px] lg:pl-[54px] lg:text-display-lg"
            >
              Real People,
              <br />
              Ready to Start
            </h2>
          </Reveal>

          <Reveal delay={140} className="mt-7 lg:mt-0">
            <p className="max-w-[585px] text-[16px] leading-[1.45] text-ink lg:text-[18px] lg:leading-[24px]">
              So teams triage &mdash; oldest and biggest balances first &mdash;
              while early-stage accounts sit untouched through the days that
              decide them.
            </p>

            <p className="mt-5 max-w-[585px] lg:mt-[38px] lg:max-w-[558px] lg:pr-[38px] lg:text-right">
              <a
                href="#terms"
                className="group inline-flex items-baseline gap-[6px] font-serif text-[16px] italic underline decoration-from-font underline-offset-[3px] text-ink transition-opacity hover:opacity-70 lg:text-[20px]"
              >
                Terms &amp; conditions apply
                <span
                  aria-hidden
                  className="not-italic transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
                >
                  &#8594;
                </span>
              </a>
            </p>
          </Reveal>
        </div>

        <ul className="mt-head-sm grid grid-cols-1 gap-[12.5px] sm:grid-cols-2 lg:mt-head-lg lg:grid-cols-4">
          {AGENTS.map((agent, i) => (
            <Reveal
              as="li"
              key={agent.name}
              delay={160 + i * 140}
              distance={22}
              className="flex"
            >
              <AgentCard agent={agent} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
