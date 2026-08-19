import Image from "next/image";

import { ThinArrow } from "@/components/site/proof-icons";

export type Step = {
  /** "01" — sits over the photo, top left. */
  number: string;
  title: string;
  body: string;
  /** Duration chip at the foot of the panel. */
  chip: string;
  image: { src: string; alt: string };
};

/**
 * One column of the "From Consultation to Hire" timeline.
 *
 * Measured off the reference (2x export, halved): 313.5 wide, a 313.5x195
 * photo above a 251.5px grey panel, content inset 27 left / 35 right, and a
 * white 251.5x39 chip pinned to the foot so all four line up.
 */
export function StepCard({ step }: { step: Step }) {
  const { number, title, body, chip, image } = step;

  return (
    <article className="flex h-full w-full flex-col bg-surface">
      <div className="relative aspect-[313.5/195] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {/* Step number and its short rule, laid over the photo. */}
        <div className="absolute top-[14px] left-[14px] flex items-center gap-2">
          <span className="text-[19px] leading-none font-bold text-white">
            {number}
          </span>
          <span aria-hidden className="h-px w-[64px] bg-white/70" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-[24px] pt-[28px] pb-[18px] lg:px-[20px] lg:pt-[42px] lg:pb-[19px] xl:pr-[35px] xl:pl-[27px]">
        <h3 className="font-serif text-[23px] leading-[1.1] font-normal text-ink lg:text-[25px]">
          {title}
        </h3>

        <p className="mt-[20px] text-[15px] leading-[19px] text-body lg:text-[16px]">
          {body}
        </p>

        {/* Hairline + duration chip, pinned to the foot of the panel. */}
        <div className="mt-auto pt-[26px] lg:pt-[44px]">
          <div aria-hidden className="h-px w-full bg-black/15" />
          <p className="mt-[21px] flex min-h-[39px] items-center justify-center gap-[11px] bg-white px-3 py-1.5 text-center text-[19px] leading-[1.2] font-bold tracking-[-0.01em] text-ink lg:text-[17px] xl:text-[21px]">
            <ThinArrow className="size-[14px] shrink-0" />
            {chip}
          </p>
        </div>
      </div>
    </article>
  );
}
