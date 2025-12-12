"use client";

import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";

const pricingItems = [
  {
    title: "Pack 1",
    price: "1 000 €",
    period: "/ mois",
    subtitle: "Présence régulière sans friction",
    description: "Pour entrepreneurs qui veulent être visibles sans exploser leur agenda.",
    features: [
      "1 session / mois (3h)",
      "1 format long (YouTube 5 min ou Podcast 30 min)",
      "4 shorts / mois",
      "Scripts + angles + hooks",
      "Montage complet",
      "Miniature & Covers",
      "Planification"
    ]
  },
  {
    title: "Pack 2",
    price: "2 000 €",
    period: "/ mois",
    subtitle: "Visibilité x2 + Ligne éditoriale",
    description: "Pour ceux qui veulent structurer leur personal brand.",
    highlight: true,
    features: [
      "2 sessions / mois (4h)",
      "2 formats longs (YouTube 5 min ou Podcast 30 min)",
      "8 shorts / mois",
      "Scripts + angles + hooks",
      "Montage complet",
      "Miniature & Covers",
      "Planification",
      "Analyse mensuelle + optimisations"
    ]
  },
  {
    title: "Pack 3",
    price: "4 000 €",
    period: "/ mois",
    subtitle: "Domination sectorielle",
    description: "Pour leaders & experts très visibles.",
    features: [
      "3 sessions / mois (6h)",
      "4 formats longs (YouTube 5 min ou Podcast 30 min)",
      "20 shorts / mois",
      "Scripts + angles + hooks",
      "Montage complet",
      "Miniature & Covers",
      "Planification",
      "Analyse mensuelle + optimisations"
    ]
  }
];

export function Pricing() {
  return (
    <section id="offres" className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 text-left">
          <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">Tarifs & Packs</h2>
          <h3 className="text-4xl font-bold tracking-tighter text-white mb-6">
            3 packs mensuels.<br />
            Clairs & Scalables.
          </h3>
          <p className="text-zinc-400 text-lg">
            Engagement mensuel. Tout est inclus. Pas de frais cachés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingItems.map((item, index) => (
            <div 
              key={index}
              className={`relative p-8 flex flex-col items-start text-left group transition-all duration-300 ${
                item.highlight 
                  ? "bg-zinc-900 border border-zinc-700" 
                  : "bg-black border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {item.highlight && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider">
                  Populaire
                </div>
              )}
              
              <div className="mb-8 w-full">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white tracking-tighter">{item.price}</span>
                  <span className="text-zinc-500">{item.period}</span>
                </div>
                <p className="text-sm font-medium text-white mb-2">{item.subtitle}</p>
                <p className="text-sm text-zinc-500 leading-relaxed min-h-[40px]">{item.description}</p>
              </div>

              <div className="w-full h-px bg-zinc-800 mb-8" />

              <ul className="space-y-4 mb-10 flex-1 w-full">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={item.highlight ? "white" : "outline"} 
                className="w-full justify-between group-hover:px-6 transition-all duration-300"
              >
                Choisir ce pack <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
