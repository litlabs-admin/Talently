"use client";

import { useEffect, useState } from "react";

import type { LegalSection } from "@/lib/content/legal";
import { cn } from "@/lib/utils";

/**
 * Sticky table of contents for the legal pages.
 *
 * Anchor links only — the smooth scroll comes free from `scroll-behavior:
 * smooth` on <html>, and each section carries a `scroll-mt` that clears the
 * fixed nav. On top of that, an IntersectionObserver marks whichever section
 * currently owns the reading band so the list tracks you down the page.
 *
 * The observer's band is the slice of viewport between the nav and 55% down;
 * the section whose heading last crossed into it wins. Under
 * prefers-reduced-motion nothing here changes — the highlight is a colour
 * swap, not movement.
 */
export function LegalToc({ sections }: { sections: LegalSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (nodes.length === 0) return;

    // Order is stable, so track visibility in a set and always report the
    // first one still on screen — that keeps the highlight from flickering
    // back and forth when two short sections are visible at once.
    const visible = new Set<string>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const first = sections.find((s) => visible.has(s.id));
        if (first) setActiveId(first.id);
      },
      { rootMargin: "-84px 0px -45% 0px", threshold: 0 },
    );

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <div className="sticky top-[104px]">
        <p className="font-mono text-[11px] tracking-[0.1em] text-muted uppercase">
          On this page
        </p>
        <ol className="mt-5 space-y-[11px]">
          {sections.map((section) => {
            const active = section.id === activeId;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "group flex gap-2.5 text-[14px] leading-[1.35] transition-colors duration-200",
                    active ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[12px] tabular-nums transition-colors duration-200",
                      active ? "text-accent" : "text-muted/70 group-hover:text-accent",
                    )}
                  >
                    {section.number}
                  </span>
                  <span
                    className={cn(
                      "min-w-0 border-b border-transparent pb-px transition-colors duration-200",
                      active && "border-accent",
                    )}
                  >
                    {section.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
