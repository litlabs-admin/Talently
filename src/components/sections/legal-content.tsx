import Link from "next/link";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { LegalToc } from "@/components/sections/legal-toc";
import { companyDetails, type LegalBlock, type LegalSection } from "@/lib/content/legal";
import { cn } from "@/lib/utils";

/**
 * Body of a legal page: a numbered, sticky table of contents beside the
 * sections themselves. Reading typography, no marketing chrome — this is a
 * reference document people scan, search, and deep-link into, not a page
 * that sells.
 *
 * Each section fades in on scroll with a small per-section stagger, capped so
 * the eleventh one is no slower to arrive than the third.
 */
export function LegalContent({
  sections,
  closingQuestion,
}: {
  sections: LegalSection[];
  /** Line above the mailto at the foot of the page. */
  closingQuestion: string;
}) {
  return (
    <Section className="bg-white">
      <Container className="pt-sec-sm pb-sec-md lg:pt-sec-md lg:pb-sec-lg">
        <div className="grid gap-y-10 lg:grid-cols-[224px_minmax(0,860px)] lg:gap-x-[64px]">
          <LegalToc sections={sections} />

          <div className="min-w-0">
            {sections.map((section, i) => (
              <article
                key={section.id}
                id={section.id}
                className={cn(
                  "scroll-mt-[88px] lg:scroll-mt-[104px]",
                  i > 0 && "mt-11 border-t border-hairline pt-11 lg:mt-14 lg:pt-14",
                )}
              >
                <Reveal delay={Math.min(i, 3) * 70}>
                  <p className="font-mono text-[12px] tracking-[0.1em] text-accent tabular-nums">
                    {section.number}
                  </p>
                  <h2 className="mt-2.5 text-[22px] leading-[1.16] font-bold tracking-[-0.025em] text-ink lg:text-[27px]">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-[16px] leading-[1.6] text-body lg:text-[17px] lg:leading-[27px]">
                    {section.blocks.map((block, j) => (
                      <LegalBlockView key={j} block={block} />
                    ))}
                  </div>
                </Reveal>
              </article>
            ))}

            <Reveal
              delay={120}
              className="mt-11 border-t border-hairline pt-10 lg:mt-14 lg:pt-12"
              // The last block on the page can sit inside the observer's
              // bottom band and never fire, so relax it here.
              rootMargin="0px 0px 0px 0px"
            >
              <p className="text-[15px] leading-[22px] text-muted lg:text-[16px]">
                {closingQuestion}
              </p>
              <a
                href={`mailto:${companyDetails.email}`}
                className="mt-2 inline-block border-b border-accent/40 pb-px text-[18px] font-semibold tracking-[-0.01em] text-ink transition-colors duration-200 hover:border-accent lg:text-[19px]"
              >
                {companyDetails.email}
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;

    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden
                className="mt-[0.62em] size-[5px] shrink-0 rounded-full bg-accent"
              />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "rows":
      return (
        <div className="overflow-hidden border border-hairline">
          {block.rows.map((row, i) => (
            <div
              key={row.left}
              className={cn(
                "grid gap-1 px-5 py-3.5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6",
                i > 0 && "border-t border-hairline",
                i % 2 === 1 && "bg-surface",
              )}
            >
              <span className="text-[15px] leading-[22px] text-ink lg:text-[16px]">
                {row.left}
              </span>
              <span className="font-mono text-[12px] tracking-[0.04em] text-muted sm:text-right">
                {row.right}
              </span>
            </div>
          ))}
        </div>
      );

    case "address":
      return (
        <div className="border border-hairline bg-surface px-5 py-4 text-[15px] leading-[24px] text-body not-italic lg:text-[16px]">
          <p className="font-semibold text-ink">
            {companyDetails.tradingAs}, trading name of {companyDetails.legalName}
          </p>
          {companyDetails.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            {companyDetails.jurisdiction}, company number {companyDetails.companyNumber}
          </p>
          <p>
            Registration reference:{" "}
            {companyDetails.registrationReference === "pending" ? (
              <span className="text-muted italic">
                pending — this reference will be added once it is issued
              </span>
            ) : (
              companyDetails.registrationReference
            )}
          </p>
          <p>
            Email:{" "}
            <Link
              href={`mailto:${companyDetails.email}`}
              className="border-b border-accent/40 pb-px text-ink transition-colors duration-200 hover:border-accent"
            >
              {companyDetails.email}
            </Link>
          </p>
        </div>
      );

    default:
      return null;
  }
}
