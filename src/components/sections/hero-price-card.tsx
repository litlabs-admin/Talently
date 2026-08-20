import { cn } from "@/lib/utils";

const ROLES = [
  { title: "VA", price: "$1,999/mo" },
  { title: "SDR", price: "$1,999/mo" },
  { title: "Designer", price: "$1,999/mo" },
] as const;

/**
 * "Your next hire" card from the reference, animated.
 *
 * Geometry solved off the export (design px): card 522 wide, 40px side
 * padding, 32px top, "$65,000/yr" 30/700, "$24,000/yr" 70px Ancizar italic,
 * body 18/25, three 132x56 chips on a 24px gap.
 *
 * Motion: one 6.5s master cycle, repeated. The strike draws across the old
 * price, the new price wipes in, the rule wipes, copy and chips rise, a
 * highlight travels the chips, a sheen crosses the card, then everything
 * fades out just before the cycle restarts. The first pass doubles as the
 * page-load entrance. No float or bounce; the card stays put. Everything
 * collapses to the resting state under prefers-reduced-motion.
 */
export function HeroPriceCard({ className }: { className?: string }) {
  return (
    <div className={cn("tl-card-in w-full lg:w-[522px]", className)}>
        <div
          className="relative overflow-hidden bg-white px-6 pt-7 pb-7 lg:px-10 lg:pt-8 lg:pb-10"
          style={{ boxShadow: "0 30px 70px -30px rgb(1 26 57 / 0.5)" }}
        >
          {/* sheen ------------------------------------------------------ */}
          <span
            aria-hidden
            className="tl-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3
                       bg-gradient-to-r from-transparent via-black/[0.05] to-transparent"
          />

          <p className="relative text-[15px] leading-6 text-body lg:text-[16px]">
            Your next hire
          </p>

          <p className="relative mt-3 inline-block text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-ink lg:mt-[18px] lg:text-[30px]">
            <span className="relative">
              $65,000/yr
              <span
                aria-hidden
                className="tl-strike absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-ink"
              />
            </span>
            <span className="sr-only"> — previously</span>
          </p>

          <p className="tl-price relative mt-1 font-serif text-[46px] leading-[1.1] font-normal italic text-ink lg:mt-1.5 lg:text-[74px]">
            $24,000/yr
          </p>

          <div
            aria-hidden
            className="tl-rule relative mt-5 h-px w-full bg-hairline lg:mt-[22px]"
          />

          <p className="tl-copy relative mt-5 max-w-[400px] text-[16px] leading-[1.42] text-body lg:mt-6 lg:text-[18px] lg:leading-[25px]">
            Same quality. Native English. College-educated. Vetted through real
            work scenarios before you ever meet them.
          </p>

          <ul className="relative mt-6 grid grid-cols-3 gap-3 lg:mt-[30px] lg:gap-6">
            {ROLES.map((role, i) => (
              <li
                key={role.title}
                className="tl-chip relative flex h-[52px] flex-col items-center justify-center gap-px overflow-hidden bg-ink-warm px-2 text-white lg:h-14"
                style={
                  {
                    "--tl-chip-in": `${0.75 + i * 0.1}s`,
                    "--tl-chip-hi": `${2.6 + i * 0.4}s`,
                  } as React.CSSProperties
                }
              >
                <span className="text-[13px] leading-tight lg:text-[14px]">
                  {role.title}
                </span>
                <span className="font-serif text-[12px] leading-tight italic lg:text-[13px]">
                  {role.price}
                </span>
                <span
                  aria-hidden
                  className="tl-chip-bar absolute inset-x-0 bottom-0 h-[2px] bg-white/70"
                  style={
                    { "--tl-chip-hi": `${2.6 + i * 0.4}s` } as React.CSSProperties
                  }
                />
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}
