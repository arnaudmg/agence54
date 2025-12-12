"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import { CheckCircle2 } from "lucide-react";

interface StatsProps {
  data?: {
    targetTitle?: string | null;
    mainTitle?: string | null;
    description?: string | null;
    processTitle?: string | null;
    steps?:
      | {
          title?: string | null;
          description?: string | null;
        }[]
      | null;
  };
}

export function Stats({ data }: StatsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    targetTitle = "Pour les dirigeants confirmés.",
    mainTitle = "Pas de one-shot, pas de frais cachés.",
    description = "Nous construisons un système de visibilité, pas juste des vidéos. Notre offre s'adresse aux dirigeants dont l'activité est établie, mais le temps compté.",
    processTitle = "Processus Mensuel",
    steps = [],
  } = data || {};

  const defaultSteps = [
    {
      title: "1. Édito & Stratégie",
      description: "Nous préparons vos scripts, angles et hooks. Vous validez.",
    },
    {
      title: "2. Tournage Studio",
      description: "Vous venez au Studio 54. Vous parlez. C'est tout.",
    },
    {
      title: "3. Post-Production",
      description: "Montage dynamique, sous-titres, formats courts et longs.",
    },
    {
      title: "4. Diffusion",
      description:
        "Nous publions pour vous. Analyse mensuelle et optimisation.",
    },
  ];

  const stepsToDisplay = steps && steps.length > 0 ? steps : defaultSteps;

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
              {targetTitle}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
              {mainTitle}
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              {description}
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
              {processTitle}
            </h2>
            <div className="space-y-8 border-l border-zinc-800 pl-8 relative">
              {stepsToDisplay.map((p, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-800 border-4 border-black group-hover:bg-white transition-colors" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    {p.title}
                  </h4>
                  <p className="text-zinc-400">{p.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
