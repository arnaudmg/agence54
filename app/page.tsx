import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Studios } from "@/components/sections/Studios";
import { Pricing } from "@/components/sections/Pricing";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <Stats />
      <Studios />
      <Pricing />
      <Booking />
      <Footer />
    </main>
  );
}
