"use client";

import { useId } from "react";
import { useRouter } from "next/navigation";

import { SelectField } from "@/components/ui/select-field";
import { cn } from "@/lib/utils";

/**
 * Contact form, measured off the reference (960px crop of the 1288 content
 * column => x1.449 to design px):
 *   label 18/24, 10px above its control
 *   control 44px tall, flat #DCDCDC fill, square corners, no border
 *   38px between rows, 52px between the two columns
 *   textarea 107px tall, full width
 *   submit 410 x 52, ink fill, centred under the two columns
 */

const ROLES = [
  "Virtual Assistant",
  "SDR / Sales Development",
  "Account Manager",
  "Graphic Designer",
  "Accounting / Finance",
  "Something else",
];

const SIZES = [
  "1 - 10 employees",
  "11 - 50 employees",
  "51 - 200 employees",
  "201 - 500 employees",
  "500+ employees",
];

const TIMELINES = [
  "As soon as possible",
  "Within 2 weeks",
  "Within a month",
  "1 - 3 months",
  "Just exploring",
];

const FIELD =
  "block h-[52px] w-full rounded-none border-0 bg-[#DCDCDC] px-4 text-[16px] text-ink " +
  "outline-none transition-[background-color,box-shadow] duration-200 ease-out " +
  "placeholder:text-[#8A8A8A] hover:bg-[#D4D4D4] " +
  "focus-visible:bg-[#D4D4D4] focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-ink)] " +
  "lg:h-[44px] lg:text-[17px]";

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-[10px] block text-[16px] leading-[22px] font-medium tracking-[-0.01em] text-ink lg:text-[18px] lg:leading-[24px]"
    >
      {children}
    </label>
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

export function ContactForm() {
  const uid = useId();
  const router = useRouter();
  const f = (n: string) => `${uid}-${n}`;

  return (
    <form
      noValidate={false}
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/thank-you");
      }}
      className="w-full"
    >
      <div className="grid grid-cols-1 gap-x-[52px] gap-y-[26px] sm:grid-cols-2 lg:gap-y-[26px]">
        <div>
          <Label htmlFor={f("name")}>Name</Label>
          <input
            id={f("name")}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={FIELD}
          />
        </div>

        <div>
          <Label htmlFor={f("email")}>Business Email</Label>
          <input
            id={f("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your full name"
            className={FIELD}
          />
        </div>

        <div>
          <Label htmlFor={f("phone")}>Phone number</Label>
          <input
            id={f("phone")}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+(00) 1234 123 1234"
            className={FIELD}
          />
        </div>

        <SelectField
          id={f("role")}
          name="role"
          label="Role you're hiring for"
          placeholder="Select Your Role"
          options={ROLES}
        />

        <SelectField
          id={f("size")}
          name="size"
          label="Size of the Company"
          placeholder="Select the size"
          options={SIZES}
        />

        <SelectField
          id={f("timeline")}
          name="timeline"
          label="Hiring timeline"
          placeholder="What's your preferred timeline"
          options={TIMELINES}
        />
      </div>

      <div className="mt-[26px] lg:mt-[26px]">
        <Label htmlFor={f("details")}>Any additional details?</Label>
        <textarea
          id={f("details")}
          name="details"
          rows={4}
          placeholder="Write your answer here.............."
          className={cn(FIELD, "h-[120px] resize-y py-3 lg:h-[107px]")}
        />
      </div>

      <div className="mt-9 flex flex-col items-center lg:mt-8">
        <button
          type="submit"
          className="group inline-flex h-[52px] w-full max-w-[410px] items-center justify-center gap-2 rounded-none bg-ink text-[17px] font-semibold tracking-[-0.01em] text-white transition-[background-color,transform] duration-200 ease-out hover:bg-ink-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink active:scale-[0.985] lg:text-[19px]"
        >
          See Available Times
          <span
            aria-hidden
            className="transition-transform duration-200 ease-out group-hover:translate-x-1"
          >
            &#8594;
          </span>
        </button>

        <p className="mt-[22px] text-center text-[15px] leading-[22px] font-semibold tracking-[-0.01em] text-ink lg:mt-[20px] lg:text-[17px]">
          <LockIcon className="mr-2 inline-block size-[15px] shrink-0 translate-y-[2px] text-[#C9A227] lg:size-4" />
          Your info is only used to prepare your consultation
        </p>
      </div>
    </form>
  );
}
