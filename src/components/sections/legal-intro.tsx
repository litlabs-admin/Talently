import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";

/**
 * Shared intro for the legal pages — a centred editorial opener built around
 * one big display line: the heading at full width, then a short standfirst.
 * No eyebrow above it; on a page with one subject the label only delays the
 * heading that already says it.
 *
 * Unlike the marketing pages, the heading is set entirely in Inter Bold. The
 * sans/serif-italic pairing is a voice for selling; a legal document reads
 * plainer with one face.
 *
 * The heading runs a step larger than the site's `display-xl` (the hero step)
 * because it is the only thing on the screen — nothing competes with it, so
 * it can take the room. It scales with the viewport rather than stepping at
 * breakpoints, so the two words hold one line as far down as the type allows.
 */
export function LegalIntro({
  title,
  intro,
  effectiveDate,
  headingId,
}: {
  /** Set whole in Inter Bold — no serif accent on the legal pages. */
  title: string;
  intro: string;
  effectiveDate: string;
  headingId: string;
}) {
  return (
    <Section className="bg-white">
      <Container className="pt-sec-md pb-sec-xs lg:pt-[104px] lg:pb-sec-sm">
        <div className="mx-auto max-w-[1000px] text-center">
          <Reveal distance={16}>
            <h1
              id={headingId}
              className="text-[clamp(2.4rem,7.2vw,4.25rem)] leading-[1.03] font-bold tracking-[-0.038em] text-balance text-ink"
            >
              {title}
            </h1>
          </Reveal>

          <Reveal delay={90} distance={18} className="mt-6 lg:mt-8">
            <p className="mx-auto max-w-[660px] text-[16px] leading-[1.5] text-balance text-body lg:text-[19px] lg:leading-[28px]">
              {intro}
            </p>
          </Reveal>

          <Reveal delay={180} distance={14} className="mt-6 lg:mt-7">
            <p className="font-mono text-[12px] tracking-[0.1em] text-muted uppercase lg:text-[13px]">
              Effective {effectiveDate}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
