/**
 * The 4.5-star row on the testimonial cards.
 *
 * Measured off Talantely-Landing_Page.png: 23.5px glyphs on a ~8px gutter,
 * #FFC633, the fifth one filled to its vertical midline and empty (not
 * outlined, not greyed) on the other side.
 */
const STAR_PATH =
  "M12 1.6l3.176 6.435 7.102 1.032-5.14 5.01 1.213 7.073L12 17.81l-6.352 3.34 1.214-7.073-5.14-5.01 7.102-1.032L12 1.6z";

function Star({ id, fill }: { id: string; fill: "full" | "half" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-[18px] shrink-0 sm:size-[20px] lg:size-[22px] xl:size-[23.5px]"
    >
      {fill === "half" && (
        <defs>
          <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#FFC633" />
            <stop offset="50%" stopColor="#FFC633" stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
      <path d={STAR_PATH} fill={fill === "half" ? `url(#${id})` : "#FFC633"} />
    </svg>
  );
}

export function RatingStars({ id, rating = 4.5 }: { id: string; rating?: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div
      className="flex items-center gap-[5px] lg:gap-[8px]"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} id={`${id}-f${i}`} fill="full" />
      ))}
      {half && <Star id={`${id}-half`} fill="half" />}
    </div>
  );
}

/** The muted "…" affordance sitting opposite the stars. */
export function MoreDots() {
  return (
    <span aria-hidden className="flex items-center gap-[3px] lg:gap-[3.5px]">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block size-[5px] rounded-full bg-[#919191] lg:size-[6px]"
        />
      ))}
    </span>
  );
}

/** The green "verified" tick that follows the reviewer's name. */
export function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-label="Verified review"
      role="img"
      className="size-[18px] shrink-0 lg:size-[23px]"
    >
      <circle cx="12" cy="12" r="12" fill="#00AB31" />
      <path
        d="M6.8 12.3l3.4 3.4 6.8-6.8"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
