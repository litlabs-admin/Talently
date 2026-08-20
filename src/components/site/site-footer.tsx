import Link from "next/link";
import { Logo } from "@/components/site/logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/site/social-icons";
import { cn } from "@/lib/utils";

const COMPANY = [
  { label: "Why Talently", href: "/#why-talently" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Book a Call", href: "/contact" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Talently/61568111953811/",
    Icon: FacebookIcon,
    className: "bg-[#3757cb] hover:bg-[#4767db]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hirewithtalently/",
    Icon: LinkedinIcon,
    className: "bg-[#0a66c2] hover:bg-[#1a76d2]",
  },
  // TODO: swap in the real Instagram profile URL once credentials arrive.
  {
    label: "Instagram",
    href: "#",
    Icon: InstagramIcon,
    className: "bg-[#4b4b4b] hover:bg-[#5d5d5d]",
  },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[17px] leading-[24px] font-semibold tracking-[-0.01em] text-white lg:text-[19px]">
      {children}
    </h3>
  );
}

const LINK =
  "inline-block max-w-full break-words text-[15px] leading-[22px] text-white/72 transition-colors duration-200 hover:text-white";

/**
 * Pure-black footer. Its top 119px sit behind the Post CTA card, so the
 * padding here is measured from the black band's real top edge, not from the
 * card: 300px down to the logo in the reference.
 */
export function SiteFooter() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-[1341px] px-5 sm:px-10 lg:px-8">
        {/* Columns ---------------------------------------------------- */}
        <div className="pt-sec-lg pb-sec-sm lg:px-14 lg:pb-sec-md">
          <div className="grid grid-cols-2 [&>*]:min-w-0 gap-x-6 gap-y-11 md:gap-x-8 md:gap-y-14 lg:grid-cols-[636fr_295fr_234fr] lg:gap-x-0 lg:gap-y-0">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <Logo className="gap-3" />
              <p className="mt-6 max-w-[292px] text-[15px] leading-[23px] text-white/65 lg:mt-[32px]">
                Connecting great businesses with South Africa&rsquo;s top
                talent. Full-time, vetted, and ready to work your hours.
              </p>
              <ul className="mt-7 flex items-center gap-[13px] lg:mt-[26px]">
                {SOCIALS.map(({ label, href, Icon, className }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      aria-label={label}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className={cn(
                        "flex size-[37px] items-center justify-center rounded-full text-white transition-[background-color,transform] duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                        className,
                      )}
                    >
                      <Icon className="size-[17px]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <nav aria-label="Company">
              <ColumnHeading>Company</ColumnHeading>
              <ul className="mt-[18px] space-y-[4px] lg:mt-[34px]">
                {COMPANY.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={LINK}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <ColumnHeading>Contact</ColumnHeading>
              <ul className="mt-[18px] space-y-[9px] lg:mt-[39px]">
                <li className="text-[15px] leading-[22px] text-white/72">
                  Toronto, Ontario, Canada
                </li>
                <li>
                  <a href="mailto:dan@hirewithtalently.com" className={LINK}>
                    dan@hirewithtalently.com
                  </a>
                </li>
                <li>
                  <Link href="/privacy-policy" className={LINK}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className={LINK}>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal ------------------------------------------------------ */}
        <div className="h-px w-full bg-white/45" />
        <p className="py-8 text-center text-[15px] leading-[24px] text-white sm:text-[17px] lg:py-[40px] lg:text-[19px]">
          &copy; 2026 Talently. All rights reserved. Made for founders
          who&rsquo;d rather build than recruit.
        </p>
      </div>
    </footer>
  );
}
