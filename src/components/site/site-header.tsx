"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Container } from "@/components/site/container";
import { Logo } from "@/components/site/logo";
import { ActionButton, ButtonArrow } from "@/components/site/action-button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader({ solid: alwaysSolid = false }: { solid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid once scrolled, or whenever the mobile sheet is open.
  const solid = alwaysSolid || scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out",
        solid
          ? "bg-ink-warm/95 supports-[backdrop-filter]:backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container
        wide
        className="tl-fade flex h-[64px] items-center justify-between sm:h-[74px]"
      >
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-[27px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-[18px] font-medium tracking-[-0.005em] text-white/95 transition-colors hover:text-white
                             after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left
                             after:scale-x-0 after:bg-white after:transition-transform after:duration-300
                             after:ease-out hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ActionButton href="/contact" className="lg:h-[46px] lg:gap-0.5 lg:px-9 lg:text-[18px]">
            Speak to our Founder
            <ButtonArrow />
          </ActionButton>
        </div>

        {/* Mobile ------------------------------------------------------- */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="inline-flex size-11 items-center justify-center text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <MenuIcon className="size-6" strokeWidth={1.75} />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full border-0 bg-ink-warm p-0 text-white sm:max-w-sm"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>

            <div className="flex h-full flex-col px-6 pt-6 pb-8">
              <Logo className="mb-10" />

              <nav aria-label="Mobile">
                <ul className="flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href} className="border-b border-white/10">
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-4 text-[22px] font-medium tracking-[-0.02em] text-white/95 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto pt-10">
                <ActionButton
                  href="/contact"
                  className="w-full gap-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Speak to our Founder
                  <ButtonArrow />
                </ActionButton>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
