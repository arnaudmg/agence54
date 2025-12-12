"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const targets = [
  "Entrepreneurs & CEOs",
  "Indépendants Premium",
  "CA Existant & Validé",
  "Peu de temps disponible",
];

const principles = [
  {
    title: "1. Édito & Stratégie",
    desc: "Nous préparons vos scripts, angles et hooks. Vous validez.",
  },
  {
    title: "2. Tournage Studio",
    desc: "Vous venez au Studio 54. Vous parlez. C'est tout.",
  },
  {
    title: "3. Post-Production",
    desc: "Montage dynamique, sous-titres, formats courts et longs.",
  },
  {
    title: "4. Diffusion",
    desc: "Nous publions pour vous. Analyse mensuelle et optimisation.",
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="concept"
      ref={ref}
      className="py-20 md:py-32 bg-zinc-950 border-b border-white/5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left: Cible */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">
              Pour les dirigeants confirmés.
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
              Pas de one-shot, pas de frais cachés.
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Nous construisons un système de visibilité, pas juste des vidéos.
              Notre offre s'adresse aux dirigeants dont l'activité est établie,
              mais le temps compté.
            </p>
          </motion.div>

          {/* Right: Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-8">
              Processus Mensuel
            </h2>
            <div className="space-y-8 border-l border-zinc-800 pl-8 relative">
              {principles.map((p, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-800 border-4 border-black group-hover:bg-white transition-colors" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    {p.title}
                  </h4>
                  <p className="text-zinc-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
