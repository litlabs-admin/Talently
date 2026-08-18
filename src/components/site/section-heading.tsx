import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Sans (Inter Bold) line. */
  lead: React.ReactNode;
  /** Ancizar Serif italic line that follows it. */
  accent: React.ReactNode;
  id?: string;
  className?: string;
};

/**
 * The recurring two-line section header: an Inter Bold line above an Ancizar
 * Serif italic line. 52px / 60px leading on desktop, measured off the reference.
 */
export function SectionHeading({
  lead,
  accent,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={cn(
        "text-[32px] leading-[1.12] font-bold tracking-[-0.03em] text-ink",
        "sm:text-[42px] lg:text-[52px] lg:leading-[60px]",
        className,
      )}
    >
      {lead}
      <br />
      <em className="display-serif">{accent}</em>
    </h2>
  );
}
