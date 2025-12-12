"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

export function Studios() {
  return (
    <section id="studio" className="py-20 bg-black border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">
              Lieu de tournage
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Le Studio 54.
            </h3>
            <p className="text-xl text-zinc-400">
              Un espace premium, optimisé pour les podcasts et contenus vidéo.
              Caméras, micros, prompteurs, tout est prêt pour vous.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 text-zinc-300">
              <MapPin className="w-5 h-5 text-white" />
              <span>Barcelone, Casp 54</span>
            </div>
          </div>
        </div>

        {/* Studio Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-900 rounded-none overflow-hidden border border-zinc-800 group"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/studio.jpg"
              alt="Studio 54"
              fill
              className="object-cover opacity-80"
            />
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Decorative elements simulating equipment/lights - Kept on top of image */}
          <div className="absolute top-0 right-1/4 w-1 h-32 bg-gradient-to-b from-blue-500/50 to-transparent blur-md z-10" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-900/40 blur-[80px] rounded-full z-10 mix-blend-screen" />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span className="text-white font-bold text-9xl opacity-10 tracking-tighter mix-blend-overlay">
              54
            </span>
          </div>

          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-sm z-20">
            <h4 className="text-white font-bold text-2xl mb-2">
              Notre matériel
            </h4>
            <p className="text-zinc-300 text-sm font-medium">
              3 Caméras 4K • Micros Shure SM7B • Éclairage Aputure
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
