import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/reveal";

/** The handset that trails the CTA label in the reference. */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M21.5 16.9v2.6a1.7 1.7 0 0 1-1.9 1.7 17 17 0 0 1-7.4-2.6 16.7 16.7 0 0 1-5.1-5.1A17 17 0 0 1 4.5 6a1.7 1.7 0 0 1 1.7-1.9h2.6a1.7 1.7 0 0 1 1.7 1.5c.1.9.3 1.7.6 2.5a1.7 1.7 0 0 1-.4 1.8l-1.1 1.1a13.7 13.7 0 0 0 5.1 5.1l1.1-1.1a1.7 1.7 0 0 1 1.8-.4c.8.3 1.6.5 2.5.6a1.7 1.7 0 0 1 1.4 1.7Z" />
    </svg>
  );
}

/**
 * The final conversion moment. A single wide image card that starts on the
 * white page and sinks its last 119px into the black footer, so the two read
 * as one ending rather than two stacked blocks.
 *
 * Measured off the reference (2x export, halved):
 *   card 1213 x 418, sharp corners, no overlay — the asset is already dark
 *   75px of white above it, 119px of black beneath it
 */
export function PostCta() {
  return (
    <section id="post-cta" className="relative bg-white pt-sec-sm lg:pt-sec-lg">
      {/* The black the card sinks into — the footer's band, started early. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-14 bg-black sm:h-20 lg:h-[119px]"
      />

      <div className="relative mx-auto w-full max-w-[1341px] px-5 sm:px-10 lg:px-16">
        <div data-card className="relative isolate flex min-h-[340px] flex-col items-center justify-center overflow-hidden px-5 py-12 text-center sm:min-h-[380px] sm:px-10 sm:py-14 lg:min-h-[418px] lg:px-12 lg:pt-[59px] lg:pb-[73px]">
          <Image
            src="/images/post-cta-footer-bg.webp"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1213px"
            className="-z-10 object-cover object-[50%_38%] lg:object-center"
          />

          <Reveal delay={0} distance={16} rootMargin="0px 0px -6% 0px">
            <p className="display-serif-md text-[16px] leading-[1.35] text-white/70 sm:text-[19px] lg:text-[22px] lg:leading-[26px]">
              Get Started
            </p>
          </Reveal>

          <Reveal
            delay={110}
            distance={22}
            rootMargin="0px 0px -6% 0px"
            className="mt-5 sm:mt-7 lg:mt-[42px]"
          >
            <h2 className="text-[24px] leading-[1.12] font-bold tracking-[-0.03em] text-white sm:text-[28px] lg:text-display-md">
              Ready to Build Your Dream Team?
            </h2>
          </Reveal>

          <Reveal
            delay={240}
            distance={18}
            rootMargin="0px 0px -6% 0px"
            className="mt-4 sm:mt-6 lg:mt-[39px]"
          >
            <p className="mx-auto max-w-[520px] text-[15px] leading-[1.5] text-white/90 sm:text-[17px] lg:max-w-[724px] lg:text-[19px] lg:leading-[23px]">
              Join hundreds of companies saving 70% on talent costs while
              accessing South Africa&rsquo;s top 2% professionals.
            </p>
          </Reveal>

          <Reveal
            delay={380}
            distance={14}
            rootMargin="0px 0px -6% 0px"
            className="mt-7 sm:mt-8 lg:mt-[37px]"
          >
            <Link
              href="/contact"
              className="group inline-flex h-[52px] w-[240px] items-center justify-center gap-[10px] rounded-none bg-white text-[17px] font-semibold tracking-[-0.01em] text-ink transition-[background-color,transform] duration-200 ease-out hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.985] lg:h-[46px] lg:w-[272px] lg:text-[19px]"
            >
              Book a Call
              <PhoneIcon className="size-[18px] transition-transform duration-200 ease-out group-hover:-rotate-12 lg:size-[19px]" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
