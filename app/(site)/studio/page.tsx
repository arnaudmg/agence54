import { Metadata } from "next";
import { StudioPage } from "@/components/pages/StudioPage";
import { Footer } from "@/components/layout/Footer";
import { getPayload } from "payload";
import config from "@/payload.config";

export const metadata: Metadata = {
  title: "Studio de Podcast à Barcelone | Enregistrement Professionnel | 54BCN",
  description: "Découvrez notre studio de podcast professionnel à Barcelone. Équipement haut de gamme, décor premium et accompagnement complet pour vos podcasts vidéo et contenus audio.",
  keywords: "studio podcast Barcelone, enregistrement podcast Espagne, studio vidéo Barcelone, location studio podcast, podcast professionnel Barcelone",
  openGraph: {
    title: "Studio de Podcast Professionnel à Barcelone | 54BCN",
    description: "Studio d'enregistrement premium au cœur de Barcelone. Podcasts vidéo, interviews, contenus audio - tout inclus.",
    type: "website",
  },
};

export const dynamic = 'force-dynamic';

export default async function Studio() {
  const payload = await getPayload({ config });
  const homeData = await payload.findGlobal({
    slug: 'home',
  });

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <StudioPage />
      <Footer data={homeData.footer} />
    </main>
  );
}

