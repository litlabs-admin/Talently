import { cn } from "@/lib/utils";

/**
 * The continuous #171717 band that carries "The Only Way to Hire" straight
 * into "Everything Handled". Keeping both sections inside one wrapper is what
 * makes the transition read as a single dark chapter in the reference.
 */
export function DarkBand({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("bg-ink", className)} {...props} />;
}

/**
 * Content column for the dark band. Measured off the reference: the band runs
 * a touch narrower than the white sections — 1193px against their 1288px.
 */
export function DarkContainer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1257px] px-5 sm:px-8", className)}
      {...props}
    />
  );
}
