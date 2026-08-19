import { cn } from "@/lib/utils";

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("relative", className)} {...props} />;
}
