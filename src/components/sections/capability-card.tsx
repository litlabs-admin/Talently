import Image from "next/image";

import { ActionButton } from "@/components/site/action-button";
import { RocketIcon } from "@/components/site/rocket-icon";
import { cn } from "@/lib/utils";

export type Capability = {
  title: string;
  /** Bold one-liner under the title. */
  tagline: string;
  /** Shared lead-in above the bullet list. */
  lead: string;
  bullets: string[];
  closing: string;
  image: { src: string; alt: string };
  /** "top" puts the photo above the panel; "bottom" flips it (middle column). */
  imagePosition: "top" | "bottom";
};

const Photo = ({
  image,
  className,
}: {
  image: Capability["image"];
  className?: string;
}) => (
  <div
    className={cn(
      // Shorter crop when stacked so the mobile section doesn't run long.
      "relative aspect-[16/10] w-full overflow-hidden bg-surface lg:aspect-[429/335]",
      className,
    )}
  >
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes="(min-width: 1024px) 430px, (min-width: 640px) 50vw, 100vw"
      className="object-cover"
    />
  </div>
);

/**
 * One column of the capability grid. Columns sit flush — no gutter — as in the
 * reference; the checkerboard comes from flipping `imagePosition` on the
 * middle column.
 *
 * Measured: column 429.5 wide, photo 335 tall, panel padding 36, content
 * column 357.5, rule-to-button block pinned to the bottom, button 242.5x41.5.
 */
export function CapabilityCard({ capability }: { capability: Capability }) {
  const { title, tagline, lead, bullets, closing, image, imagePosition } =
    capability;

  return (
    <article className="flex h-full flex-col bg-surface">
      {/* Stacked, the photo always leads. The checkerboard only kicks in once
          the three columns sit side by side. */}
      <Photo
        image={image}
        className={imagePosition === "bottom" ? "lg:order-last" : undefined}
      />

      <div className="flex flex-1 flex-col px-6 pt-7 pb-7 sm:px-8 lg:px-9 lg:pt-9 lg:pb-9">
        <h3 className="font-serif text-[26px] leading-[1.1] font-normal text-ink lg:text-[38px]">
          {title}
        </h3>

        <p className="mt-5 text-[15px] leading-[1.3] font-bold text-ink lg:mt-[30px] lg:text-[17px]">
          {tagline}
        </p>

        <p className="mt-4 text-[15px] leading-[1.45] text-body lg:mt-[26px] lg:text-[16px]">
          {lead}
        </p>

        <ul className="mt-4 list-disc pl-7 text-[15px] leading-[24px] text-body marker:text-body lg:mt-[24px] lg:text-[16px] lg:leading-[25px]">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <p className="mt-4 text-[15px] leading-[1.45] text-body lg:mt-[22px] lg:text-[16px] lg:leading-[25px]">
          {closing}
        </p>

        {/* Rule + CTA pin to the bottom so all three columns line up. */}
        <div className="mt-7 lg:mt-auto lg:pt-[30px]">
          <div aria-hidden className="h-px w-full bg-black/20" />
          <ActionButton
            variant="dark"
            href="/contact"
            className="mt-5 w-full gap-3 sm:w-auto lg:mt-[26px] lg:h-[42px] lg:w-[242px] lg:gap-3 lg:px-0 lg:text-[17px]"
          >
            Start Hiring
            <RocketIcon className="size-[18px] shrink-0" />
          </ActionButton>
        </div>
      </div>

    </article>
  );
}
