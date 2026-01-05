import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Studios } from "@/components/sections/Studios";
import { Pricing } from "@/components/sections/Pricing";
import { SEO } from "@/components/sections/SEO";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/layout/Footer";
import { getPayload } from "payload";
import config from "@/payload.config";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const homeData = await payload.findGlobal({
    slug: "home",
  });

  return {
    title:
      homeData?.meta?.title ||
      "54BCN | Personal Branding & Contenu Vidéo Clé-en-main",
    description:
      homeData?.meta?.description ||
      "54BCN accompagne dirigeants et entrepreneurs dans la création d'un personal brand puissant. Podcast, YouTube, Shorts — une seule session, tout le contenu du mois.",
    keywords:
      homeData?.meta?.keywords ||
      "personal branding, studio podcast Barcelone, production vidéo, shorts, YouTube, podcast",
    openGraph: {
      title:
        homeData?.meta?.openGraphTitle ||
        "54BCN | Personal Branding & Contenu Vidéo Clé-en-main",
      description:
        homeData?.meta?.openGraphDescription ||
        "Podcast, YouTube, Shorts — une seule session studio, tout le contenu du mois. Une équipe clé-en-main pour dirigeants et entrepreneurs.",
      type: "website",
    },
  };
}

export default async function Home() {
  const payload = await getPayload({ config });
  const homeData = await payload.findGlobal({
    slug: "home",
  });

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero data={homeData.hero} />
      <Stats data={homeData.stats} />
      <Studios data={homeData.studios} />
      <Pricing data={homeData.pricing} />
      <SEO data={homeData.seo} />
      {/* <Booking data={homeData.booking} /> */}
      <Footer data={homeData.footer} />
    </main>
  );
}
