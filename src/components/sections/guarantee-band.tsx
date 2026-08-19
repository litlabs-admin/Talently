import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import {
  GaugeIcon,
  NoFeeIcon,
  ShieldCheckIcon,
} from "@/components/site/proof-icons";
import { SectionDivider } from "@/components/site/section";

type Guarantee = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const GUARANTEES: Guarantee[] = [
  {
    icon: ShieldCheckIcon,
    title: "Free Replacement",
    body: "If a hire doesn't work out, within 90 days",
  },
  {
    icon: NoFeeIcon,
    title: "No Upfront fee",
    body: "You only pay once you've actually hired",
  },
  {
    icon: GaugeIcon,
    title: "48-Hour Shortlist",
    body: "See real candidates before you commit",
  },
];

/**
 * The short reassurance strip under the cost comparison: three icon rows in a
 * 220px band, split by two full-height hairlines, closed by the usual pair of
 * rules before the next chapter.
 */
export function GuaranteeBand() {
  return (
    <>
      <SectionDivider />
      <section
        aria-label="Hiring guarantees"
        className="border-b border-hairline bg-white"
      >
        <Container>
          <ul className="grid grid-cols-1 divide-y divide-hairline lg:h-[220px] lg:grid-cols-3 lg:py-[27px] lg:divide-x lg:divide-y-0">
            {GUARANTEES.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={120 + i * 120}
                className={[
                  "flex items-center gap-[16px] py-7 lg:gap-[21px] lg:py-0",
                  i === 0 ? "lg:justify-start" : "",
                  i === 1 ? "lg:justify-center" : "",
                  i === 2 ? "lg:justify-end" : "",
                ].join(" ")}
              >
                <Icon className="size-[36px] shrink-0 text-ink lg:size-[44px]" />
                <div>
                  <h3 className="text-[19px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink lg:text-[21px]">
                    {title}
                  </h3>
                  <p className="mt-[7px] text-[15px] leading-[1.3] font-medium text-ink italic lg:mt-[9px] lg:text-[17px]">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      {/* 22px closing strip, as between every chapter in the reference. */}
      <div aria-hidden className="h-[22px] w-full border-b border-hairline" />
    </>
  );
}
