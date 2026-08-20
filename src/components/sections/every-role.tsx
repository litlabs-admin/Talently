import Image from "next/image";

import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";

type Role = {
  name: string;
  blurb: string;
  price: string;
};

const ROLES: Role[] = [
  {
    name: "Virtual Assistant",
    blurb: "Inbox, calendar, project coordination, and admin support",
    price: "$2,000/mo",
  },
  {
    name: "SDR",
    blurb: "Forecast performance and goal alignment",
    price: "$2,000/mo",
  },
  {
    name: "Account Manager",
    blurb: "Generate ESG disclosures, automate frameworks",
    price: "$2,000/mo",
  },
  {
    name: "Graphic Designer",
    blurb: "Surface insights and operational next steps",
    price: "$2,000/mo",
  },
  {
    name: "Accounting / Finance",
    blurb: "Surface insights and operational next steps",
    price: "$2,000/mo",
  },
];

/**
 * "Every Role You Need to Scale".
 *
 * Geometry solved off Talantely-Landing_Page.png (2x export, values halved).
 * On the 1288px body column the section splits 652 | 17 | 619:
 *
 *   left   87.5 -> 739.5   heading (inset 52px) + the 652x439 photo
 *   right  757   -> 1376   intro copy, then the role list inset a further 70px
 *                          so its rules run 827.5 -> 1376
 *
 * The photo's top edge and the list's first rule both land at +199.5 from the
 * section top — that shared line is what holds the two columns together.
 *
 * The reference is a flat frame, so it can neither confirm nor deny a pinned
 * left column; what it does show is a 638px-tall left stack beside a 1388px
 * list. Sticky is the reading that keeps the composition balanced through the
 * whole scroll, and because the sticky element is a grid item bounded by the
 * section, it releases on its own at the section's foot — no fixed
 * positioning, no scroll listener, no nested scroller.
 */
export function EveryRole() {
  return (
    <Section
      id="every-role"
      aria-labelledby="roles-heading"
      className="scroll-mt-[64px] bg-white pt-sec-sm pb-sec-sm lg:scroll-mt-[74px] lg:pt-sec-xs lg:pb-sec-md"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-[minmax(0,652fr)_minmax(0,619fr)] lg:gap-x-[17px]">
          {/* Left: heading + photo. Sticky from lg up, bounded by the grid,
              so it lets go exactly at the section's last hairline. */}
          <div className="lg:sticky lg:top-[92px] lg:self-start">
            <Reveal distance={28}>
              <h2
                id="roles-heading"
                className="text-[28px] leading-[1.12] font-bold tracking-[-0.025em] text-ink sm:text-[34px] lg:pt-[14px] lg:pl-[52px] lg:text-display-lg lg:tracking-[-0.02em]"
              >
                Every Role You{" "}
                <span className="block display-serif-xl font-normal">
                  need to Scale
                </span>
              </h2>
            </Reveal>

            <Reveal delay={220} distance={28}>
              <div className="relative mt-8 aspect-[652/439] w-full overflow-hidden lg:mt-[45px]">
                <Image
                  src="/images/roles-group.webp"
                  alt="Four colleagues reviewing a document together in an office"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right: intro copy, then the list. Plain document flow — it is
              the tall column, so it is what sets the section height. */}
          <div className="mt-10 lg:mt-0">
            <Reveal delay={120}>
              <p className="max-w-[585px] text-[16px] leading-[1.45] text-ink lg:pt-[40px] lg:text-[18px] lg:leading-[26px]">
                Pick a role below and book your free consultation, we&rsquo;ll
                bring you a vetted shortlist within 48 hours.
              </p>

              <p className="mt-5 max-w-[568px] lg:mt-[34px] lg:pr-[43px] lg:text-right">
                <a
                  href="#terms"
                  className="group inline-flex items-baseline gap-[6px] font-serif text-[16px] italic underline underline-offset-[3px] decoration-from-font text-ink transition-opacity hover:opacity-70 lg:text-[20px]"
                >
                  Terms &amp; conditions apply
                  <span
                    aria-hidden
                    className="not-italic transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
                  >
                    &#8594;
                  </span>
                </a>
              </p>
            </Reveal>

            <ul className="mt-head-sm border-b border-hairline lg:mt-head-md lg:ml-[70px]">
              {ROLES.map((role, i) => (
                <RoleRow key={role.name} role={role} index={i} />
              ))}
            </ul>

            <Reveal delay={80}>
              <a
                href="#features"
                className="mt-6 flex h-[52px] w-full max-w-[331px] items-center justify-center gap-[10px] bg-black font-mono text-[15px] tracking-[-0.01em] text-white transition-opacity hover:opacity-90 lg:mt-[23px] lg:ml-[70px] lg:h-[48px] lg:text-[17px]"
              >
                <span
                  aria-hidden
                  className="size-[5px] shrink-0 bg-white"
                />
                Explore features
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * One role, hung off a top hairline: title, blurb, price chip, then the
 * booking link ranged right.
 */
function RoleRow({ role, index }: { role: Role; index: number }) {
  return (
    <Reveal as="li" distance={18} className="block border-t border-hairline">
      <div className="group pt-5 pb-6 lg:pt-[18px] lg:pb-[22px]">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[18px] leading-[26px] font-bold text-ink lg:text-[20px] lg:leading-[28px]">
            {role.name}
          </h3>
          <span
            aria-hidden
            className="mt-[3px] shrink-0 font-mono text-[12px] leading-none text-[#6c6c6c] lg:mt-[6px] lg:text-[13px]"
          >
            {String(index + 1).padStart(3, "0")}
          </span>
        </div>

        <p className="mt-2 text-[16px] leading-[1.45] text-ink lg:mt-[8px] lg:text-[18px] lg:leading-[26px]">
          {role.blurb}
        </p>

        <p className="mt-3 flex h-[46px] w-[190px] items-center justify-center bg-[#e6e6e6] font-serif text-[21px] font-bold italic text-ink lg:mt-[15px] lg:h-[50px] lg:w-[214px] lg:text-[24px]">
          {role.price}
        </p>

        <div className="mt-3 flex justify-end lg:mt-[13px]">
          <a
            href="/contact"
            className="text-[18px] leading-[26px] text-ink underline underline-offset-[4px] decoration-from-font transition-opacity hover:opacity-70 lg:text-[20px] lg:leading-[28px]"
          >
            Book this role
          </a>
        </div>
      </div>
    </Reveal>
  );
}
