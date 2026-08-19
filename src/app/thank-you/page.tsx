import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "You're Booked — Talently",
  description:
    "Thanks for booking your free consultation with Talently. We've emailed you the date, time, and meeting link.",
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-[26px] lg:size-[30px]"
    >
      <path
        d="M5 12.5l4.5 4.5L19 7"
        fill="none"
        stroke="#171717"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Post-submit confirmation. A single centred moment on the scenic photo,
 * shown untinted — dark ink text carries the contrast instead. No nav or
 * footer to compete with it.
 */
export default function ThankYouPage() {
  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden py-20 text-center">
      <Image
        src="/images/thank-you-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <Container className="flex flex-col items-center">
        <Reveal distance={16}>
          <span className="flex size-[62px] items-center justify-center rounded-full bg-[#FFC633] lg:size-[72px]">
            <CheckIcon />
          </span>
        </Reveal>

        <Reveal delay={90} distance={20} className="mt-8 lg:mt-9">
          <h1 className="max-w-[720px] text-[30px] leading-[1.14] font-bold tracking-[-0.03em] text-ink sm:text-[40px] lg:text-display-lg">
            Thank You for Booking Your Free Consultation!
          </h1>
        </Reveal>

        <Reveal delay={180} distance={18} className="mt-6 lg:mt-7">
          <p className="max-w-[620px] text-[16px] leading-[1.5] text-ink/85 lg:text-[18px] lg:leading-[26px]">
            We&rsquo;ll walk you through how Talently finds, vets, and
            shortlists South Africa&rsquo;s top 2% talent, so you can build
            your dream team without the guesswork, the overhead, or the price
            tag.
          </p>
        </Reveal>

        <Reveal delay={260} distance={14} className="mt-8 lg:mt-9">
          <p className="text-[15px] leading-[1.5] text-ink/65 lg:text-[16px]">
            We&rsquo;ve emailed you the exact date, time, and meeting link for
            your call.
          </p>
        </Reveal>

        <Reveal delay={340} distance={12} className="mt-10 lg:mt-11">
          <Link
            href="/"
            className="group inline-flex h-[48px] items-center justify-center rounded-none border border-ink/60 px-8 text-[16px] font-semibold tracking-[-0.01em] text-ink transition-[background-color,border-color,transform] duration-200 ease-out hover:border-ink hover:bg-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink active:scale-[0.985] lg:text-[17px]"
          >
            Back to Homepage
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
