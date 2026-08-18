import { cn } from "@/lib/utils";

/**
 * Content column. Measured off the reference (2x export, so halved):
 *  - body sections run 171 -> 2749  =>  1288px column, 88px page gutter
 *  - the nav runs a little wider,  138 -> 2789  =>  1326px column, 69px gutter
 * max-w includes the horizontal padding so the *content* lands on those numbers.
 */
export function Container({
  className,
  wide,
  ...props
}: React.ComponentProps<"div"> & { wide?: boolean }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        // 1288 + 2*32  /  1326 + 2*32
        wide ? "max-w-[1390px]" : "max-w-[1352px]",
        className,
      )}
      {...props}
    />
  );
}
