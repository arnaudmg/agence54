import { Metadata } from "next";
import { StudioPage } from "@/components/pages/StudioPage";
import { Footer } from "@/components/layout/Footer";
import { getPayload } from "payload";
import config from "@/payload.config";

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const studioData = await payload.findGlobal({
    slug: "studio",
  });

  return {
    title:
      studioData?.meta?.title ||
      "Studio de Podcast à Barcelone | Enregistrement Professionnel | 54BCN",
    description:
      studioData?.meta?.description ||
      "Découvrez notre studio de podcast professionnel à Barcelone. Équipement haut de gamme, décor premium et accompagnement complet pour vos podcasts vidéo et contenus audio.",
    keywords:
      studioData?.meta?.keywords ||
      "studio podcast Barcelone, enregistrement podcast Espagne, studio vidéo Barcelone, location studio podcast, podcast professionnel Barcelone",
    openGraph: {
      title:
        studioData?.meta?.openGraphTitle ||
        "Studio de Podcast Professionnel à Barcelone | 54BCN",
      description:
        studioData?.meta?.openGraphDescription ||
        "Studio d'enregistrement premium au cœur de Barcelone. Podcasts vidéo, interviews, contenus audio - tout inclus.",
      type: "website",
    },
  };
}

export default async function Studio() {
  const payload = await getPayload({ config });
  const [homeData, studioData] = await Promise.all([
    payload.findGlobal({ slug: "home" }),
    payload.findGlobal({ slug: "studio" }),
  ]);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <StudioPage data={studioData} pricingData={homeData.pricing} />
      <Footer data={homeData.footer} />
    </main>
  );
}

