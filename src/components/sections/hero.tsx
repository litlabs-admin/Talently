import Image from "next/image";

import { Container } from "@/components/site/container";
import { ActionButton, ButtonArrow } from "@/components/site/action-button";
import { HeroPriceCard } from "@/components/sections/hero-price-card";

const TRUST_POINTS = ["Native English", "College Educated", "Time-Zone Aligned"];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-navy"
    >
      {/* Background ---------------------------------------------------- */}
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[50%_92%] lg:object-[50%_80%]"
      />
      {/* Navy wash: solid behind the nav and headline, clearing before the
          horizon so the grass reads exactly as it does in the reference. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy from-[30%] via-navy/70 via-[58%] to-transparent to-[82%]"
      />

      <Container className="relative flex flex-1 flex-col pt-[96px] pb-12 lg:pt-[147px] lg:pb-[52px]">
        <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          {/* Copy -------------------------------------------------------- */}
          <div className="lg:max-w-[640px] lg:shrink-0">
            {/* 62px / -0.035em / 63px leading. The serif runs at 0.92em so its
                (much larger) caps optically match the sans. */}
            <h1
              id="hero-heading"
              style={{ "--d": "0.15s" } as React.CSSProperties}
              className="tl-in text-[34px] leading-[1.06] font-bold tracking-[-0.03em] text-white sm:text-[44px] lg:text-display-xl lg:tracking-[-0.03em]"
            >
              Hire Top 2% <em className="display-serif">South</em>
              <br className="hidden lg:inline" />{" "}
              <em className="display-serif">African Talent</em> for
              <br className="hidden lg:inline" /> 70% Less
            </h1>

            <p style={{ "--d": "0.28s" } as React.CSSProperties} className="tl-in mt-5 max-w-[600px] text-[17px] leading-[1.45] text-white/90 lg:mt-[26px] lg:text-[18px] lg:leading-[21px]">
              Full-time, native English talent, working your timezone, vetted
              before you ever see their profile. No upfront fee, you only pay
              once you hire.
            </p>

            <div style={{ "--d": "0.4s" } as React.CSSProperties} className="tl-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-start lg:mt-[42px] lg:gap-[26px]">
              <ActionButton href="/contact" variant="light">
                Book Your Free Consultation
                <ButtonArrow />
              </ActionButton>
            </div>
          </div>

          {/* Animated card ------------------------------------------------ */}
          <HeroPriceCard className="lg:mt-[-20px] lg:shrink-0" />
        </div>

        {/* Trust row ------------------------------------------------------ */}
        <ul style={{ "--d": "0.6s" } as React.CSSProperties} className="tl-fade mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center lg:mt-auto lg:gap-x-[76px] lg:pt-16">
          {TRUST_POINTS.map((point) => (
            <li
              key={point}
              className="text-[16px] font-medium text-white lg:text-[18px]"
            >
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
