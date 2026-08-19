/**
 * Solid pictograms used by the "The Only Way to Hire" cards, drawn to match
 * the filled (not stroked) glyphs in the reference. All are authored on a
 * 24x24 grid and painted with `currentColor`.
 */

type IconProps = { className?: string };

const base = (className?: string) => ({
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true as const,
  className,
});

/** Savings — piggy bank. */
export function PiggyIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M15.9 5.3c-.62-.13-1.27-.2-1.94-.2-4.53 0-8.2 2.98-8.2 6.65 0 1.7.79 3.26 2.09 4.43V19a.9.9 0 0 0 .9.9h1.83a.9.9 0 0 0 .9-.9v-.7c.8.17 1.63.25 2.48.25.5 0 .98-.03 1.45-.09v.54a.9.9 0 0 0 .9.9h1.83a.9.9 0 0 0 .9-.9v-1.76c.87-.6 1.55-1.34 1.98-2.18h.68a.9.9 0 0 0 .9-.9v-2.36a.9.9 0 0 0-.9-.9h-.7c-.5-1.02-1.33-1.9-2.4-2.55l.62-2.65a.72.72 0 0 0-1.02-.82l-2.3 1.1Zm2.35 5.1a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
      <path d="M4.9 9.55C3.72 9.2 2.86 8.2 2.86 7.02c0-.44.5-.68.85-.42 1 .76 1.9 1.66 2.6 2.68.25.35-.02.79-.42.68l-.99-.41Z" />
    </svg>
  );
}

/** Brightest — eight-point rosette ring with a star at its centre. */
export function RosetteStarIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.00 1.20 L15.16 4.36 L19.64 4.36 L19.64 8.84 L22.80 12.00 L19.64 15.16 L19.64 19.64 L15.16 19.64 L12.00 22.80 L8.84 19.64 L4.36 19.64 L4.36 15.16 L1.20 12.00 L4.36 8.84 L4.36 4.36 L8.84 4.36 Z M12.00 4.30 L14.26 6.56 L17.44 6.56 L17.44 9.74 L19.70 12.00 L17.44 14.26 L17.44 17.44 L14.26 17.44 L12.00 19.70 L9.74 17.44 L6.56 17.44 L6.56 14.26 L4.30 12.00 L6.56 9.74 L6.56 6.56 L9.74 6.56 Z"
      />
      <path d="M12.00 7.00 L13.23 10.30 L16.76 10.45 L14.00 12.65 L14.94 16.05 L12.00 14.10 L9.06 16.05 L10.00 12.65 L7.24 10.45 L10.77 10.30 Z" />
    </svg>
  );
}

/** Assurance — shield, half solid. */
export function ShieldHalfIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 1.8 3.6 5.2v6.1c0 4.6 3.4 8.6 8.4 10.9 5-2.3 8.4-6.3 8.4-10.9V5.2L12 1.8Zm0 1.95 6.6 2.67v4.89c0 3.63-2.6 6.9-6.6 8.9V3.75Z" />
    </svg>
  );
}

/** Timing — hourglass with a check. */
export function HourglassCheckIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5.4 2.4h13.2a.9.9 0 0 1 0 1.8h-.6v1.3c0 2.05-1.06 3.94-2.79 5l-.83.5.83.5c.35.21.67.46.96.73a5.6 5.6 0 0 0-4.42 6.97H6.6v-1.3c0-2.05 1.06-3.94 2.79-5l.83-.5-.83-.5A5.86 5.86 0 0 1 6.6 5.5V4.2h-.6a.9.9 0 1 1 0-1.8Zm.6 17h5.02c.16.6.42 1.16.75 1.65H5.4a.9.9 0 1 1 0-1.8h.6v.15Z" />
      <path d="M17.5 13.6a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2Zm2.06 3.1-2.4 2.62a.72.72 0 0 1-1.06.01l-1.2-1.26a.72.72 0 1 1 1.04-1l.68.72 1.88-2.06a.72.72 0 1 1 1.06.97Z" />
    </svg>
  );
}

/** Growth — ascending bars with a rising arrow. */
export function GrowthIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="2.6" y="12.2" width="3" height="9.2" rx=".7" />
      <rect x="7.4" y="8.4" width="3" height="13" rx=".7" />
      <rect x="12.2" y="14.4" width="3" height="7" rx=".7" />
      <path d="M21.4 2.6h-4.7a.85.85 0 1 0 0 1.7h2.35l-5.3 5.3-2.6-2.6a.85.85 0 0 0-1.2 0L5.1 11.85a.85.85 0 0 0 1.2 1.2l4.25-4.24 2.6 2.6a.85.85 0 0 0 1.2 0l5.9-5.9V7.9a.85.85 0 1 0 1.7 0V3.45a.85.85 0 0 0-.85-.85Z" />
    </svg>
  );
}

/** Diversity — smiling mask. */
export function MaskSmileIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.6 2.6h12.8a3 3 0 0 1 3 3v9.05c0 3.73-3.02 6.75-6.75 6.75h-5.3A3.75 3.75 0 0 1 5.6 17.65V2.6Zm3.55 6.35a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm5.7 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm-6.9 5.1a.8.8 0 0 0-.77 1.02 5.05 5.05 0 0 0 9.68 0 .8.8 0 0 0-.77-1.02H7.95Z"
      />
    </svg>
  );
}

/** Badge-and-ribbon seal used on the "See how we vet" button. */
export function SealCheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M12 2.3 15.4 4h3.3v3.3L21.7 10 20 13.3l1.7 3.3-3 1.7v-.3" />
      <path d="M12 2.3 8.6 4H5.3v3.3L2.3 10 4 13.3 2.3 16.6l3 1.7v-.3" />
      <path d="m8.9 10.7 2.1 2.2 4-4.3" />
      <path d="M7.8 17.1v4.6l4.2-1.7 4.2 1.7v-4.6" />
    </svg>
  );
}

/** Thin arrow used in stat rows and the "Everything Handled" list. */
export function ThinArrow({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M4 12h15M13.5 6.5 19.5 12l-6 5.5" />
    </svg>
  );
}

/** Guarantee band — solid shield with a ringed check. */
export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 1.6 3.3 5.1v6.4c0 4.8 3.5 9 8.7 11.3 5.2-2.3 8.7-6.5 8.7-11.3V5.1L12 1.6Zm0 4.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2Z" />
      <path d="M12 7.9a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm1.94 2.36-2.2 2.63a.7.7 0 0 1-1.04.04l-1.03-1.05a.7.7 0 1 1 1-.98l.48.49 1.72-2.05a.7.7 0 1 1 1.07.92Z" />
    </svg>
  );
}

/** Guarantee band — payment card struck through. */
export function NoFeeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M2.6 6.5h18.8v11H2.6z" />
      <path d="M2.6 10.4h18.8" />
      <path d="M5.8 14.3h4.6" />
      <path d="M20.6 3.4 3.9 20.9" />
    </svg>
  );
}

/** Guarantee band — speedometer. */
export function GaugeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <circle cx="12" cy="12" r="9.4" />
      <path d="m16.4 7.6-4.5 3.6" fill="none" />
      <circle cx="11.4" cy="12.4" r="1.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Percent mark used by the "See the Math for Your Hire" button. */
export function PercentIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M19 5 5 19" />
      <circle cx="7.6" cy="7.6" r="2.9" />
      <circle cx="16.4" cy="16.4" r="2.9" />
    </svg>
  );
}
