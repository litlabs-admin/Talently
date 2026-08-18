import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/sections/hero";
import { Capabilities } from "@/components/sections/capabilities";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Capabilities />
      </main>
    </>
  );
}
