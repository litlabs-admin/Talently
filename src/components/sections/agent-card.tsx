import Image from "next/image";

import { RocketIcon } from "@/components/site/rocket-icon";
import { cn } from "@/lib/utils";

export type Agent = {
  /** Serif eyebrow above the name. */
  role: string;
  name: string;
  price: string;
  /** Tailwind classes for the price badge fill + label colour. */
  priceClassName: string;
  /** Exactly two — the reference sets them at two fixed widths. */
  chips: [Chip, Chip];
  image: { src: string; alt: string };
};

type Chip = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

/**
 * One person from "Real People, Ready to Start".
 *
 * Measured off the reference (2x export, halved). The card is 313 x 532.5 on
 * a 313-wide column, and reads top to bottom as:
 *
 *   0      photo, 313 x 194.5 (the source crops are 1733x1079, used whole)
 *   236    role + name, with the price badge riding the same line but bled
 *          to the card's right edge — the one element that ignores the inset
 *   336.5  two chips, 35 tall, at fixed 178 / 194 widths (the second is
 *          always the wider of the pair, whatever its label says)
 *   460.5  hairline
 *   472.5  Hire button, 46.5 tall
 *   519    13.5 of tail
 *
 * Everything else sits on a 21px side inset.
 */
export function AgentCard({ agent }: { agent: Agent }) {
  const [chipA, chipB] = agent.chips;

  return (
    <article className="flex h-full w-full flex-col bg-surface pb-[13px] lg:pb-[13.5px]">
      <div className="relative aspect-[1733/1079] w-full overflow-hidden">
        <Image
          src={agent.image.src}
          alt={agent.image.alt}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Name block. The badge bleeds right, so the row is not padded — the
          text half carries the inset instead. */}
      <div className="mt-[24px] flex items-start justify-between gap-3 lg:mt-[41px]">
        <div className="min-w-0 pl-[21px]">
          <p className="font-serif text-[16px] leading-[1.15] text-ink lg:text-[17px]">
            {agent.role}
          </p>
          <p className="mt-[3px] truncate text-[25px] leading-[1.15] font-bold tracking-[-0.02em] text-ink lg:text-[28px]">
            {agent.name}
          </p>
        </div>

        <p
          className={cn(
            "flex h-[46px] w-[118px] shrink-0 items-center justify-center",
            "font-serif text-[20px] font-bold whitespace-nowrap",
            "lg:h-[51px] lg:w-[128px] lg:text-[22px]",
            agent.priceClassName,
          )}
        >
          {agent.price}
        </p>
      </div>

      <div className="mt-[30px] flex flex-col gap-[5.5px] pl-[21px] lg:mt-[48px]">
        <ChipPill chip={chipA} className="w-[168px] lg:w-[178px]" />
        <ChipPill chip={chipB} className="w-[184px] lg:w-[194px]" />
      </div>

      {/* Foot: pinned so uneven copy above can never unalign the four CTAs. */}
      <div className="mt-auto px-[21px] pt-[30px] lg:pt-[48px]">
        <div aria-hidden className="h-px w-full bg-hairline" />
        <a
          href="#book-a-call"
          className="group mt-[12px] flex h-[46px] w-full items-center justify-center gap-[14px] bg-ink-warm text-[19px] font-medium tracking-[-0.01em] text-white transition-opacity hover:opacity-90 lg:h-[46.5px] lg:text-[21px]"
        >
          Hire {agent.name}
          <RocketIcon className="size-[22px] shrink-0 transition-transform duration-200 ease-out group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
        </a>
      </div>
    </article>
  );
}

function ChipPill({ chip, className }: { chip: Chip; className?: string }) {
  const { icon: Icon, label } = chip;

  return (
    <span
      className={cn(
        "flex h-[35px] items-center gap-[10px] bg-[#6e6e6e] pl-[13px] text-white",
        className,
      )}
    >
      <Icon className="size-[17px] shrink-0" />
      <span className="text-[14px] leading-none font-bold italic tracking-[-0.01em]">
        {label}
      </span>
    </span>
  );
}
