import { cn } from "@/lib/utils";

/**
 * The full-bleed hairline band that separates every section in the reference:
 * two 1px rules ~47px apart.
 */
export function SectionDivider() {
  return (
    <div
      aria-hidden
      className="h-6 w-full border-y border-hairline lg:h-[47px]"
    />
  );
}

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("relative", className)} {...props} />;
}
