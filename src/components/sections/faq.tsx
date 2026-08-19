"use client";

import { useId, useState } from "react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "What's the difference between Recruiting and Staffing pricing?",
    a: "Recruiting is a one-time fee (25% of annual salary) where you handle payroll and HR yourself. Staffing is $850/month and includes contracts, payroll, benefits, and compliance handled entirely by us.",
  },
  {
    q: "What happens if a hire doesn't work out?",
    a: "You get a free replacement. We keep sourcing and shortlisting until the fit clicks — on Recruiting that runs through your guarantee window, and on Staffing for as long as the placement is live.",
  },
  {
    q: "Is this legally compliant for hiring internationally?",
    a: "Yes. On Staffing we employ the person in South Africa, so contracts, taxes, benefits, and local labour law sit with us. You never have to open an entity or run foreign payroll.",
  },
  {
    q: "How long does it typically take to hire?",
    a: "Most roles are shortlisted within a week. You interview a vetted handful rather than a pile of applications, so the average search closes in two to three weeks from the first call.",
  },
  {
    q: "What roles can I hire for through Talently?",
    a: "Executive assistants, sales and SDR, customer support, finance and bookkeeping, marketing, and operations — the full-time, in-your-timezone roles that keep a growing business moving.",
  },
];

/**
 * "Frequently asked questions".
 *
 * Geometry solved off Talantely-Landing_Page.png (2x export, values halved).
 * A 1220px column — narrower than the usual 1288 body measure, and centred:
 * a left-aligned display line (sans, then an upright serif "questions"), then
 * two columns: an 807px accordion, a 30px gutter, and a 382px "more
 * questions?" card that stretches to the list's height. Vertical spacing comes
 * from the shared section scale in globals.css.
 *
 * Accordion items are 70px tall closed, 6px radius, 1px #D0D0D0, on a 15px
 * rhythm; the open one grows to ~149 to carry two lines of 15/30 answer.
 * The reference shows exactly one panel open, so this is a single-open
 * accordion — opening a question closes the last.
 *
 * The reveal is a grid-template-rows 0fr -> 1fr transition rather than a
 * max-height guess, so the panel travels its true height and the column
 * (and the card beside it) resettle without a jump.
 */
export function Faq() {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <Section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-[64px] bg-white pt-sec-sm pb-sec-sm lg:scroll-mt-[74px] lg:pt-sec-md lg:pb-sec-md"
    >
      <Container>
        <div className="mx-auto w-full max-w-[1220px]">
          <Reveal distance={28}>
            <h2
              id="faq-heading"
              className="text-[28px] leading-[1.14] font-bold tracking-[-0.025em] text-ink sm:text-[34px] lg:text-display-lg"
            >
              Frequently asked{" "}
              <span className="font-serif font-normal tracking-[-0.01em]">
                questions
              </span>
            </h2>
          </Reveal>

          <div className="mt-head-sm flex flex-col gap-8 lg:mt-head-md lg:flex-row lg:items-stretch lg:gap-[30px]">
            {/* ---- the accordion ---------------------------------------- */}
            <ul className="flex flex-1 flex-col gap-[10px] lg:gap-[15px]">
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                const panelId = `${uid}-panel-${i}`;
                const buttonId = `${uid}-button-${i}`;

                return (
                  <Reveal
                    as="li"
                    key={item.q}
                    delay={140 + i * 90}
                    distance={18}
                  >
                    <div className="rounded-[6px] border border-[#d0d0d0]">
                      <h3>
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpen(isOpen ? -1 : i)}
                          className="flex w-full cursor-pointer items-center gap-4 px-4 py-4 text-left sm:px-5 lg:px-[22px] lg:py-[20px]"
                        >
                          <span className="flex-1 text-[16px] leading-[24px] font-semibold tracking-[-0.01em] text-ink sm:text-[17px] lg:text-[18px] lg:leading-[26px] xl:text-[20px] xl:leading-[28px]">
                            {item.q}
                          </span>
                          <svg
                            aria-hidden
                            viewBox="0 0 24 24"
                            className={[
                              "size-[19px] shrink-0 text-[#3a3a3a] lg:size-[21px]",
                              "motion-safe:transition-transform motion-safe:duration-[420ms]",
                              "motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
                              isOpen ? "rotate-45" : "rotate-0",
                            ].join(" ")}
                          >
                            <path
                              d="M12 4v16M4 12h16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="square"
                            />
                          </svg>
                        </button>
                      </h3>

                      {/* 0fr -> 1fr: the panel animates to its own height. */}
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={[
                          "grid motion-safe:transition-[grid-template-rows,opacity]",
                          "motion-safe:duration-[420ms] motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        ].join(" ")}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 pb-4 text-[14px] leading-[24px] text-[#606060] sm:px-5 lg:px-[22px] lg:pb-[20px] lg:text-[15px] lg:leading-[28px] xl:pr-[40px] xl:leading-[30px]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            {/* ---- the "more questions?" card --------------------------- */}
            <Reveal
              delay={420}
              distance={22}
              className="w-full lg:w-[340px] lg:shrink-0 xl:w-[382px]"
            >
              <div className="flex h-full flex-col items-center rounded-[6px] border border-[#d0d0d0] px-6 py-8 text-center lg:px-[24px] lg:py-[30px]">
                <svg
                  aria-hidden
                  viewBox="0 0 64 60"
                  className="mt-2 h-[52px] w-[56px] shrink-0 text-ink lg:mt-[34px] lg:h-[60px] lg:w-[64px]"
                >
                  <path d="M0 0h64v50H24L0 60V0z" fill="currentColor" />
                </svg>

                <p className="mt-8 text-[18px] leading-[26px] font-bold tracking-[-0.015em] text-ink lg:mt-[35px] lg:text-[20px] lg:leading-[28px]">
                  Do you have more questions?
                </p>

                <p className="mt-3 max-w-[300px] text-[14px] leading-[26px] text-[#606060] lg:mt-[19px] lg:text-[15px] lg:leading-[30px]">
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform to help realize.
                </p>

                <a
                  href="/contact"
                  className="mt-10 flex h-[62px] w-full items-center justify-center bg-accent text-[15px] font-medium text-white transition-opacity hover:opacity-90 lg:mt-auto lg:h-[72px]"
                >
                  Shoot a Direct Mail
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
