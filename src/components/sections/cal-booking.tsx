"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cal, { getCalApi } from "@calcom/embed-react";

/**
 * The booking step, embedded rather than linked out.
 *
 * Cal's own event-details rail is switched off (`hideEventTypeDetails`) and
 * rebuilt beside the booker in the site's own type, colour and spacing, so the
 * only thing the iframe still owns is the calendar + slot list. Those are
 * re-skinned through `cssVarsPerTheme` against the same values the rest of the
 * site uses: ink for the selected day and the primary button, #DCDCDC for
 * filled controls, hairline for the rules.
 *
 * On a successful booking we push to /thank-you ourselves rather than let Cal
 * render its own confirmation screen, so the visitor never leaves the site's
 * own design.
 *
 * Sizing: Cal measures its own content and posts the height back, so the
 * embed's height must stay `auto` and its overflow `hidden`. Pinning a height
 * (or setting `overflow: scroll`) makes the iframe scroll inside a box that
 * no longer matches its content, which is where both scrollbars came from.
 * The only fixed height here is the skeleton's, and it only applies until the
 * first real measurement arrives.
 */

const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK ?? "daniel-seligman-s6xyk0/catch-up";
const NAMESPACE = "talently-consultation";

/** Ink, hairline and surface, spelled as hex — the iframe can't see our vars. */
const CAL_VARS: Record<string, string> = {
  "cal-brand": "#171717",
  "cal-brand-emphasis": "#221d1d",
  "cal-brand-text": "#ffffff",

  "cal-bg": "#ffffff",
  "cal-bg-emphasis": "#dcdcdc",
  "cal-bg-subtle": "#f4f4f4",
  "cal-bg-muted": "#f4f4f4",
  "cal-bg-inverted": "#171717",
  "cal-bg-info": "#f4f4f4",

  "cal-border": "#e5e5e5",
  "cal-border-emphasis": "#171717",
  "cal-border-subtle": "#e5e5e5",
  "cal-border-muted": "#e5e5e5",
  "cal-border-booker": "#e5e5e5",

  "cal-text-emphasis": "#171717",
  "cal-text": "#171717",
  "cal-text-subtle": "#6b6b6b",
  "cal-text-muted": "#8a8a8a",
  "cal-text-inverted": "#ffffff",

  "cal-font-family": "Inter, ui-sans-serif, system-ui, sans-serif",

  /* Cal reads these where it supports them; the frame's own corners are
     rounded by `rounded-2xl` + `overflow-hidden` on the card either way. */
  "cal-radius": "12px",
  "cal-border-radius": "12px",
};

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M12 7v5.2l3.2 2"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <rect
        x="3"
        y="6"
        width="12"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <path
        d="M15 10.5l5-2.6v8.2l-5-2.6z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <path
        d="M4 4h7l9 9-7 7-9-9V4z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <circle cx="8.4" cy="8.4" r="1.4" fill="currentColor" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        d="M7 10V7.5a5 5 0 0 1 10 0V10"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <rect x="4.5" y="10" width="15" height="10.5" rx="1.5" fill="currentColor" />
    </svg>
  );
}

/** One line of the detail rail: 18px icon, 15/16px label. */
function Detail({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-2.5 text-[15px] leading-[22px] font-medium tracking-[-0.01em] text-ink lg:text-[16px]">
      <span className="size-[18px] shrink-0 text-ink/70">{icon}</span>
      {children}
    </li>
  );
}

/** The calendar's own skeleton, in the site's greys, while the iframe boots. */
function BookerSkeleton() {
  return (
    <div aria-hidden className="animate-pulse">
      <div className="h-[22px] w-[150px] rounded-lg bg-[#DCDCDC]" />
      <div className="mt-6 grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="h-9 rounded-lg bg-[#EDEDED]" />
        ))}
      </div>
    </div>
  );
}

export function CalBooking() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      if (cancelled) return;

      cal("ui", {
        theme: "light",
        layout: "month_view",
        // Our own rail replaces it — see the block at the top of the file.
        hideEventTypeDetails: true,
        cssVarsPerTheme: { light: CAL_VARS, dark: CAL_VARS },
        styles: { branding: { brandColor: "#171717" } },
      });

      cal("on", {
        action: "linkReady",
        callback: () => setReady(true),
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: () => router.push("/thank-you"),
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [router]);

  return (
    <div className="flex w-full flex-col">
      <div className="overflow-hidden rounded-2xl border border-hairline bg-white lg:grid lg:grid-cols-[340px_minmax(0,1fr)]">
        {/* Detail rail — Cal's left panel, rebuilt in the site's own type. */}
        <div className="min-w-0 border-b border-hairline p-6 sm:p-7 lg:border-r lg:border-b-0">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt=""
              width={40}
              height={40}
              className="size-9 shrink-0 rounded-lg"
            />
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-muted">
              Talently
            </span>
          </div>

          <h2 className="mt-4 text-[22px] leading-[1.15] font-bold tracking-[-0.025em] text-ink lg:mt-5 lg:text-[26px]">
            Free hiring{" "}
            <em className="display-serif-md">consultation.</em>
          </h2>

          <ul className="mt-4 flex flex-col gap-y-2.5 lg:mt-5 lg:gap-y-3">
            <Detail icon={<ClockIcon className="size-full" />}>
              20 minutes
            </Detail>
            <Detail icon={<VideoIcon className="size-full" />}>
              Google Meet
            </Detail>
            <Detail icon={<TagIcon className="size-full" />}>
              No upfront fee
            </Detail>
          </ul>

          <p className="mt-5 border-t border-hairline pt-5 text-[14px] leading-[21px] text-body lg:text-[15px] lg:leading-[22px]">
            Pick a time that suits you. We&rsquo;ll come to the call with a
            vetted shortlist for the role you&rsquo;re hiring &mdash; you only
            pay once you hire.
          </p>
        </div>

        {/* The booker itself. Same padding on all four sides as the rail;
            the height is whatever Cal measures its content to be. */}
        <div className="relative min-w-0 p-6 sm:p-7">
          {!ready && (
            <div className="absolute inset-6 sm:inset-7">
              <BookerSkeleton />
            </div>
          )}
          <div
            className={
              "min-w-0 transition-opacity duration-300 ease-out " +
              (ready ? "opacity-100" : "min-h-[460px] opacity-0")
            }
          >
            <Cal
              namespace={NAMESPACE}
              calLink={CAL_LINK}
              config={{ layout: "month_view", theme: "light" }}
              className="w-full [&_iframe]:rounded-xl"
              style={{ width: "100%", height: "auto", overflow: "hidden" }}
            />
          </div>
        </div>
      </div>

      <p className="mt-[22px] text-center text-[15px] leading-[22px] font-semibold tracking-[-0.01em] text-ink lg:mt-[24px] lg:text-[17px]">
        <LockIcon className="mr-2 inline-block size-[15px] shrink-0 translate-y-[2px] text-[#C9A227] lg:size-4" />
        Your info is only used to prepare your consultation
      </p>
    </div>
  );
}
