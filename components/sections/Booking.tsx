"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  ChevronRight,
  Package,
  User,
  Calendar,
} from "lucide-react";

const steps = [
  { id: 1, name: "Choix du Pack" },
  { id: 2, name: "Votre Profil" },
  { id: 3, name: "Appel Découverte" },
];

const packs = [
  {
    id: "pack1",
    name: "Pack 1",
    price: "1 000€/mois",
    desc: "1 session, 1 long, 4 shorts",
  },
  {
    id: "pack2",
    name: "Pack 2",
    price: "2 000€/mois",
    desc: "2 sessions, 2 longs, 8 shorts",
  },
  {
    id: "pack3",
    name: "Pack 3",
    price: "4 000€/mois",
    desc: "3 sessions, 4 longs, 20 shorts",
  },
];

export function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selection, setSelection] = useState({
    pack: "",
    name: "",
    linkedin: "",
    date: "",
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Info */}
          <div className="lg:w-1/3 pt-10">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">
              Nos Offres{" "}
            </h2>
            <h3 className="text-4xl font-bold tracking-tighter text-white mb-6">
              Démarrer votre
              <br />
              accompagnement.
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Nous limitons nos places à 8-10 clients premium pour garantir la
              qualité. Réservez un appel pour vérifier votre éligibilité.
            </p>

            <div className="space-y-6 border-l border-zinc-800 pl-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={cn(
                    "flex items-center gap-4 text-sm font-medium transition-colors",
                    currentStep === step.id ? "text-white" : "text-zinc-600"
                  )}
                >
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center border text-xs",
                      currentStep === step.id
                        ? "bg-white text-black border-white"
                        : currentStep > step.id
                        ? "bg-green-500 text-black border-green-500"
                        : "bg-transparent border-zinc-800"
                    )}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span className="uppercase tracking-wider">{step.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Wizard Form */}
          <div className="lg:w-2/3 w-full bg-black border border-zinc-800 p-8 md:p-12 min-h-[500px] flex flex-col relative">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-zinc-800 to-transparent opacity-50" />

            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1"
                >
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <Package className="w-6 h-6 text-zinc-500" />
                    Quel pack vous intéresse ?
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {packs.map((p) => (
                      <button
                        key={p.id}
                        onClick={() =>
                          setSelection({ ...selection, pack: p.id })
                        }
                        className={cn(
                          "flex items-center justify-between p-6 border transition-all text-left group hover:bg-zinc-900",
                          selection.pack === p.id
                            ? "bg-white text-black border-white hover:bg-white"
                            : "bg-black border-zinc-800 text-white"
                        )}
                      >
                        <div>
                          <span className="font-bold text-lg block mb-1">
                            {p.name}
                          </span>
                          <span
                            className={cn(
                              "text-sm",
                              selection.pack === p.id
                                ? "text-zinc-600"
                                : "text-zinc-500"
                            )}
                          >
                            {p.desc}
                          </span>
                        </div>
                        <span className="font-mono font-medium">{p.price}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1"
                >
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <User className="w-6 h-6 text-zinc-500" />
                    Qui êtes-vous ?
                  </h3>
                  <div className="space-y-6 max-w-md">
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400 uppercase tracking-wider">
                        Prénom & Nom
                      </label>
                      <input
                        type="text"
                        className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700"
                        placeholder="John Doe"
                        value={selection.name}
                        onChange={(e) =>
                          setSelection({ ...selection, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400 uppercase tracking-wider">
                        Lien LinkedIn / Site Web
                      </label>
                      <input
                        type="text"
                        className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700"
                        placeholder="linkedin.com/in/johndoe"
                        value={selection.linkedin}
                        onChange={(e) =>
                          setSelection({
                            ...selection,
                            linkedin: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex-1"
                >
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-zinc-500" />
                    Disponibilités
                  </h3>
                  <p className="text-zinc-400 mb-8">
                    Sélectionnez un créneau pour un appel de 15min. L'objectif
                    est de vérifier si notre offre correspond à vos besoins.
                  </p>

                  {/* Fake Calendar Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-lg mb-8">
                    {[14, 15, 16, 17, 18].map((d) => (
                      <button
                        key={d}
                        onClick={() =>
                          setSelection({ ...selection, date: `15/01 à ${d}h` })
                        }
                        className={cn(
                          "py-3 px-2 border text-sm text-center transition-all",
                          selection.date.includes(`${d}h`)
                            ? "bg-white text-black border-white"
                            : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600"
                        )}
                      >
                        <span className="block text-xs opacity-50 mb-1">
                          Jeu. 15
                        </span>
                        <span className="font-bold">{d}:00</span>
                      </button>
                    ))}
                  </div>

                  {selection.date && (
                    <div className="p-4 bg-green-900/20 border border-green-900/50 text-green-400 text-sm flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4" />
                      Appel de découverte le {selection.date}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 pt-8 border-t border-zinc-900 flex justify-end">
              <Button
                onClick={nextStep}
                disabled={
                  currentStep > 2 ||
                  (currentStep === 1 && !selection.pack) ||
                  (currentStep === 2 && !selection.name)
                }
                className="w-full sm:w-auto gap-2 bg-white text-black hover:bg-zinc-200 rounded-none px-8 h-12"
              >
                {currentStep === 3
                  ? "Confirmer la réservation"
                  : "Étape suivante"}{" "}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
