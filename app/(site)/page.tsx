import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Studios } from "@/components/sections/Studios";
import { Pricing } from "@/components/sections/Pricing";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/layout/Footer";
import { getPayload } from "payload";
import config from "@/payload.config";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const payload = await getPayload({ config });
  const homeData = await payload.findGlobal({
    slug: 'home',
  });

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero data={homeData.hero} />
      <Stats data={homeData.stats} />
      <Studios data={homeData.studios} />
      <Pricing data={homeData.pricing} />
      <Booking data={homeData.booking} />
      <Footer data={homeData.footer} />
    </main>
  );
}
