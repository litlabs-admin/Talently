"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  /** Stagger, in ms. */
  delay?: number;
  /** How far it travels up, in px. */
  distance?: number;
  className?: string;
  as?: "div" | "li" | "section" | "header";
  children: React.ReactNode;
};

/**
 * Fades + lifts its children the first time they scroll into view, then stops
 * observing. Under prefers-reduced-motion the content is simply visible from
 * the start — that override is pure CSS, so it holds even before hydration.
 */
export function Reveal({
  delay = 0,
  distance = 24,
  className,
  as: Tag = "div",
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      // Fire a little before the element is fully on screen.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn(
        "motion-safe:transition-[opacity,transform] motion-safe:duration-[900ms]",
        "motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100",
        shown ? "opacity-100" : "translate-y-(--tl-d) opacity-0",
        className,
      )}
      style={
        {
          transitionDelay: `${delay}ms`,
          "--tl-d": `${distance}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
