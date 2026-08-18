import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Talently — home"
      className={cn(
        "inline-flex items-center gap-2.5 text-white transition-opacity hover:opacity-85 lg:gap-3",
        className,
      )}
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={44}
        height={44}
        priority
        className="size-9 lg:size-11"
      />
      {/* 23px / 700 / -0.02em — solved from the wordmark advance in the ref */}
      <span className="text-[20px] font-bold tracking-[-0.02em] lg:text-[23px]">
        Talently
      </span>
    </Link>
  );
}
