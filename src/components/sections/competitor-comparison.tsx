import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";

const COLUMNS = [
  "Talently",
  "US Full-Time Hire",
  "International Agencies",
  "Upwork / Freelance",
] as const;

/** [Talently, US full-time, agencies, freelance] — true renders a check. */
type Row = { quality: string; values: [boolean, boolean, boolean, boolean] };

const ROWS: Row[] = [
  { quality: "Vetted, Top 2% Talent", values: [true, false, false, false] },
  { quality: "Time-Zone Aligned", values: [true, true, false, false] },
  { quality: "70% More Affordable", values: [true, false, false, true] },
  { quality: "Native English Speakers", values: [true, true, false, false] },
  {
    quality: "Payroll & Compliance Handled",
    values: [true, false, false, false],
  },
  { quality: "No Upfront Fee", values: [true, false, false, true] },
  { quality: "Free Replacement Guarantee", values: [true, false, false, false] },
  { quality: "Hired Within 2 Weeks", values: [true, false, false, true] },
];

/**
 * Shared column template. Measured off the reference: on the 1288px body
 * column the qualities cell runs 400px, the Talently column is a fixed 147px
 * (the width of its black header chip) and the three rivals split the rest at
 * 247px each — i.e. 1.62fr / 147px / 1fr / 1fr / 1fr.
 */
const GRID = "grid grid-cols-[1.62fr_147px_1fr_1fr_1fr]";

export function CompetitorComparison() {
  return (
    <Section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="scroll-mt-[64px] bg-white pt-sec-sm pb-sec-sm lg:scroll-mt-[74px] lg:pt-sec-md lg:pb-sec-md"
    >
      <Container>
        <Reveal>
          {/* Serif display: bold upright, then the same face at regular. */}
          <h2
            id="comparison-heading"
            className="text-center font-serif text-[28px] leading-[1.15] font-bold tracking-[-0.01em] text-ink sm:text-[34px] lg:text-display-lg"
          >
            Outperform.{" "}
            <span className="font-normal">Pay&nbsp;Less.</span>
          </h2>
        </Reveal>

        <Reveal delay={110}>
          <p className="mx-auto mt-4 max-w-[620px] text-center text-[16px] leading-[1.45] text-ink lg:mt-[34px] lg:text-[18px]">
            Here&apos;s how Talently stacks up against every other way to fill a
            role.
          </p>
        </Reveal>

        {/* Table ------------------------------------------------------- */}
        <Reveal delay={180} className="mt-head-sm lg:mt-head-lg">
          {/* Controlled horizontal scroll below lg; never the page itself. */}
          <div className="-mx-5 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0">
            <div
              className="min-w-[840px] bg-surface pb-10 lg:min-w-0 lg:pb-9"
            >
              {/* Header */}
              <div
                className={`${GRID} h-[74px] items-center lg:h-[68px]`}
              >
                <div
                  className="pl-[24px] text-[18px] leading-none text-ink lg:pl-[32px] lg:text-[20px]"
                >
                  Qualities
                </div>
                {COLUMNS.map((name, i) => (
                  <div
                    key={name}
                    className="flex items-center justify-center px-2"
                  >
                    {i === 0 ? (
                      <span className="flex h-[42px] w-full items-center justify-center bg-ink text-[17px] leading-none font-semibold text-white lg:text-[18px]">
                        {name}
                      </span>
                    ) : (
                      <span className="text-center text-[16px] leading-[1.2] text-ink lg:text-[18px]">
                        {name}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Body */}
              {ROWS.map((row, r) => (
                <Reveal
                  key={row.quality}
                  delay={80 + r * 70}
                  distance={12}
                  className={`${GRID} h-[54px] items-stretch border-t border-[#b7b7b7] lg:h-[50px]`}
                >
                  <div
                    className="flex items-center pr-4 pl-[24px] text-[16px] leading-[1.25] text-ink lg:pl-[32px] lg:text-[18px]"
                  >
                    {row.quality}
                  </div>
                  {row.values.map((yes, i) => (
                    <div
                      key={COLUMNS[i]}
                      className={`flex items-center justify-center ${
                        i === 0 ? "bg-white" : ""
                      }`}
                    >
                      {yes ? (
                        <>
                          <CheckMark className="w-[16px] text-body lg:w-[18px]" />
                          <span className="sr-only">{COLUMNS[i]}: yes</span>
                        </>
                      ) : (
                        <>
                          <span
                            aria-hidden
                            className="block h-[2px] w-[7px] bg-body"
                          />
                          <span className="sr-only">{COLUMNS[i]}: no</span>
                        </>
                      )}
                    </div>
                  ))}
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/** The tapered tick used in every affirmative cell. */
function CheckMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 22"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M0.8 11.6 4.1 8.6 9.2 14.2 20.6 0.9 23.3 3.2 9.6 20.4Z" />
    </svg>
  );
}
