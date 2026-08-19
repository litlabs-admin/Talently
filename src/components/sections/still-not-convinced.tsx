import Image from "next/image";
import { PhoneCall } from "lucide-react";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";

/**
 * "Still Not Convinced?" — the closing CTA.
 *
 * Geometry solved off Talantely-Landing_Page.png (2x export, values halved).
 * The banner: 1212.5 wide, 2.906:1 — which is `post cta bg.png`'s own aspect,
 * so the photograph is laid in whole, not cropped. It is a layered background
 * (fill + object-cover), never an inline <img>: the copy sits on top of it,
 * centred.
 *
 * Inside the banner, measured from its top edge:
 *   89.5 italic serif eyebrow
 *   142  the 38/50 display, sans then upright serif
 *   288  a 272 x 46 white button, square corners
 *
 * The stack sits high rather than optically centred — 83px of open field is
 * left under the button, where the photograph's sunlit meadow carries the eye
 * out of the page. On narrow viewports the fixed aspect is dropped for a
 * min-height so the type can breathe without the photo being over-cropped.
 */
export function StillNotConvinced() {
  return (
    <Section
      id="book-a-call"
      aria-labelledby="cta-heading"
      className="scroll-mt-[64px] bg-white pt-sec-sm pb-sec-sm lg:scroll-mt-[74px] lg:pt-sec-md lg:pb-sec-md"
    >
      <Container>
        <Reveal distance={22} className="mx-auto w-full lg:max-w-[1212px]">
          <div className="relative isolate flex min-h-[420px] w-full flex-col items-center overflow-hidden px-5 py-14 text-center sm:min-h-[460px] sm:px-8 lg:aspect-[6718/2311] lg:min-h-0 lg:justify-start lg:px-10 lg:py-0 lg:pt-[86px]">
            <Image
              src="/images/post-cta-bg.webp"
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 1024px) 1212px, 100vw"
              className="-z-10 object-cover object-center"
            />
            {/* The plate is already dark under the type; a whisper of scrim
                only guarantees the contrast on the widest crops. */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-black/15 lg:bg-transparent"
            />

            <p className="font-serif text-[15px] leading-[20px] font-normal text-white/70 italic lg:text-[16px]">
              Still Not Convinced?
            </p>

            <h2
              id="cta-heading"
              className="mt-[18px] max-w-[880px] text-[24px] leading-[1.24] font-bold tracking-[-0.02em] text-white sm:text-[28px] lg:mt-[25px] lg:text-display-md lg:leading-[50px]"
            >
              Try a Talently hire risk-free. No upfront
              <br className="hidden lg:inline" />{" "}
              fee,{" "}
              <span className="font-serif text-[1.08em] font-normal tracking-[-0.005em]">
                only pay once you hire.
              </span>
            </h2>

            <Reveal
              delay={420}
              distance={14}
              rootMargin="0px"
              className="mt-9 w-full lg:mt-[57px]"
            >
              <a
                href="/contact"
                className="mx-auto flex h-[52px] w-full max-w-[272px] items-center justify-center gap-[10px] bg-white text-[16px] font-medium tracking-[-0.01em] text-ink transition-opacity hover:opacity-90 lg:h-[46px] lg:text-[17px]"
              >
                Book a Call
                <PhoneCall aria-hidden className="size-[17px] shrink-0" />
              </a>
            </Reveal>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
