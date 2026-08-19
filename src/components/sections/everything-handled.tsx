import Image from "next/image";

import { Reveal } from "@/components/site/reveal";
import { ThinArrow } from "@/components/site/proof-icons";
import { DarkContainer } from "@/components/sections/dark-band";

const HANDLED = [
  "Candidate vetting and shortlisting",
  "Interview coordination",
  "Employment contracts",
  "Payroll processing",
  "Tax and compliance handling",
  "Ongoing HR support",
];

/**
 * Second half of the dark chapter. Measured off the reference: a 556px copy
 * column beside a 500x508 photo with a 77px gutter, the list built from
 * 70.5px rows separated by hairlines.
 */
export function EverythingHandled() {
  return (
    <section
      id="whats-included"
      aria-labelledby="everything-handled-heading"
      className="scroll-mt-[64px] pt-24 pb-20 sm:pt-32 lg:scroll-mt-[74px] lg:pt-[160px] lg:pb-[150px] xl:pt-[210px] xl:pb-[195px]"
    >
      <DarkContainer>
        <div className="grid gap-y-11 lg:grid-cols-[minmax(0,1.11fr)_minmax(0,1fr)] lg:gap-x-10 lg:gap-y-0 xl:grid-cols-[556px_500px] xl:gap-x-[77px]">
          <Reveal className="order-1 lg:col-start-1 lg:row-start-1">
            <h2
              id="everything-handled-heading"
              className="text-[34px] leading-[1.1] font-bold tracking-[-0.03em] text-white sm:text-[44px] lg:leading-[54px] xl:text-[52px] xl:leading-[63px]"
            >
              Everything Handled,
              <br />
              Nothing Left <em className="display-serif-lg">for You to</em>
              <br />
              <em className="display-serif-lg">Figure Out</em>
            </h2>
          </Reveal>

          <Reveal
            delay={220}
            className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-[62px]"
          >
            <div className="relative aspect-[500/508] w-full overflow-hidden bg-ink-warm xl:w-[500px]">
              <Image
                src="/images/group-pic.webp"
                alt="A team of five gathered around a laptop, reviewing work together"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <ul className="order-3 border-t border-white/25 lg:col-start-1 lg:row-start-2 lg:mt-[65px]">
            {HANDLED.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={120 + i * 90}
                distance={16}
                className="flex h-[62px] items-center gap-[23px] border-b border-white/25 lg:h-[70.5px]"
              >
                <ThinArrow className="size-[18px] shrink-0 text-white" />
                <span className="text-[17px] leading-[1.3] text-white sm:text-[19px] lg:text-[20px]">
                  {item}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </DarkContainer>
    </section>
  );
}
