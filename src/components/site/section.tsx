import { cn } from "@/lib/utils";

/**
 * The full-bleed spacer band that separates every section.
 */
export function SectionDivider() {
  return (
    <div
      aria-hidden
      className="h-4 w-full lg:h-[28px]"
    />
  );
}

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("relative", className)} {...props} />;
}
