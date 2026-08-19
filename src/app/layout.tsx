import type { Metadata } from "next";
import { Inter, Ancizar_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ancizar = Ancizar_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-ancizar",
  display: "swap",
});

// The reference sets its numerals and the "Explore features" CTA in a
// typewriter mono.
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talently — Hire Top 2% South African Talent for 70% Less",
  description:
    "Full-time, native English talent, working your timezone, vetted before you ever see their profile. No upfront fee, you only pay once you hire.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${ancizar.variable} ${jetbrains.variable}`}>
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
