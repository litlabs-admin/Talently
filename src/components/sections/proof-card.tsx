import Image from "next/image";

import { ThinArrow } from "@/components/site/proof-icons";

export type Proof = {
  /** Small eyebrow beside the icon. */
  label: string;
  title: string;
  body: string;
  /** Headline figure at the foot of the card. */
  stat: string;
  statCaption: string;
  icon: React.ComponentType<{ className?: string }>;
  image: { src: string; alt: string };
};

/**
 * A photographic tile from the "The Only Way to Hire" grid.
 *
 * Measured off the reference (2x export, halved): 367 x 338, content inset
 * 30 left / 78 right, hairlines above and below the stat block, and the stat
 * block pinned to the foot so all six cards line up regardless of how many
 * lines the body copy runs to.
 */
export function ProofCard({ proof }: { proof: Proof }) {
  const { label, title, body, stat, statCaption, icon: Icon, image } = proof;

  return (
    <article className="relative isolate flex min-h-[300px] w-full flex-col overflow-hidden bg-ink-warm pt-[26px] pr-[26px] pb-[30px] pl-[26px] sm:min-h-[330px] lg:min-h-[356px] lg:pt-8 lg:pr-[34px] lg:pb-[39px] lg:pl-[30px] xl:aspect-[367/338] xl:min-h-0 xl:pr-[78px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        className="-z-10 object-cover"
      />

      {/* Eyebrow: icon, label, then a rule filling the rest of the row. */}
      <div className="flex items-center gap-[10px]">
        <Icon className="size-[26px] shrink-0 text-white lg:size-[30px]" />
        <span className="text-[14px] leading-none font-normal text-white lg:text-[15px]">
          {label}
        </span>
        <span aria-hidden className="h-px flex-1 bg-white/45" />
      </div>

      <h3 className="mt-[26px] text-[21px] leading-[1.15] font-bold tracking-[-0.02em] text-white lg:mt-[33px] lg:text-[25px]">
        {title}
      </h3>

      <p className="mt-[14px] text-[13.5px] leading-[18px] text-white/95 lg:mt-[18px] lg:text-[14px]">
        {body}
      </p>

      {/* Stat block — hairline, figure, caption, hairline. Pinned to the foot. */}
      <div className="mt-auto pt-[26px]">
        <div aria-hidden className="h-px w-full bg-white/40" />

        <div className="mt-[18px] flex items-start gap-[14px] lg:mt-[20px]">
          <ThinArrow className="mt-[14px] size-[17px] shrink-0 text-white lg:mt-[16px]" />
          <div>
            <p className="text-[34px] leading-[1.02] font-bold tracking-[-0.025em] text-white lg:text-[42px]">
              {stat}
            </p>
            <p className="mt-[2px] text-[13.5px] leading-[1.25] text-white lg:text-[15px]">
              {statCaption}
            </p>
          </div>
        </div>

        <div aria-hidden className="mt-[18px] h-px w-full bg-white/40 lg:mt-[22px]" />
      </div>
    </article>
  );
}
