"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  data?: {
    titleLine1?: string | null;
    titleLine2?: string | null;
    titleLine3?: string | null;
    description?: string | null;
    youtubeVideoId?: string | null;
  };
}

export function Hero({ data }: HeroProps) {
  const {
    titleLine1 = "PERSONAL BRANDING",
    titleLine2 = "& CONTENU VIDÉO",
    titleLine3 = "CLÉ-EN-MAIN.",
    description = "Agence 54 accompagne dirigeants et entrepreneurs dans la création d’un personal brand puissant.",
    youtubeVideoId = "FGRvP8eoPdw",
  } = data || {};

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />{" "}
        {/* Dark Overlay */}
        <iframe
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 opacity-60 grayscale md:w-[150%] md:h-[150%]"
          src={`https://www.youtube.com/embed/${youtubeVideoId}?start=6&autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: "none" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-start text-left">
        {/* Main Title */}
        <div className="max-w-5xl mb-8 space-y-2">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white"
          >
            {titleLine1}
            <br />
            {titleLine2}
            <br />
            <span className="text-zinc-500">{titleLine3}</span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl text-lg sm:text-xl text-zinc-300 mb-10 leading-relaxed border-l-2 border-zinc-700 pl-6"
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-base px-8 h-14 bg-white text-black hover:bg-zinc-200 rounded-none"
          >
            Découvrir nos offres
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-base px-8 h-14 gap-2 rounded-none border-zinc-700 hover:bg-zinc-900"
          >
            Voir le studio <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
