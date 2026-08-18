import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "light" | "ghost" | "dark";

const VARIANTS: Record<Variant, string> = {
  // White fill, ink label — hero primary CTA and the nav CTA.
  light:
    "bg-white text-ink hover:bg-white/90 focus-visible:outline-white active:scale-[0.985]",
  // 1px hairline border over imagery — hero secondary CTA.
  ghost:
    "border border-white/60 text-white hover:border-white hover:bg-white/10 focus-visible:outline-white active:scale-[0.985]",
  dark: "bg-ink text-white hover:bg-ink-warm focus-visible:outline-ink active:scale-[0.985]",
};

type ActionButtonProps = {
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
};

/**
 * The one button in the system: square corners, no shadow, optional trailing
 * icon supplied as a child. 52px tall on touch, 48px from the sm breakpoint up
 * (the reference measures 47.5px).
 */
export function ActionButton({
  variant = "light",
  href,
  className,
  onClick,
  type = "button",
  children,
}: ActionButtonProps) {
  const classes = cn(
    "group inline-flex h-[52px] items-center justify-center gap-2 rounded-none px-6",
    "text-[17px] font-semibold tracking-[-0.01em] whitespace-nowrap",
    "transition-[background-color,border-color,transform,color] duration-200 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    // Desktop: 48px tall, 32px side padding, 21px label (measured off the ref).
    "lg:h-12 lg:gap-2 lg:px-[34px] lg:text-[19px]",
    VARIANTS[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

/** Trailing arrow that nudges on hover. */
export function ButtonArrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "transition-transform duration-200 ease-out group-hover:translate-x-1",
        className,
      )}
    >
      &#8594;
    </span>
  );
}
