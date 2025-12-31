"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mic, Video, Sparkles, Calendar } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Comment se déroule une session d'enregistrement ?",
    answer: "Chaque session se déroule dans notre studio professionnel à Barcelone. Vous arrivez, on s'occupe de tout : préparation du set, lumières, son, cadrage. Vous n'avez qu'à parler. En 3 à 6 heures selon votre pack, on capture tout le contenu du mois. Scripts, angles et hooks sont préparés en amont pour maximiser votre temps.",
  },
  {
    question: "Qu'est-ce qui est inclus dans les packs mensuels ?",
    answer: "Tout est inclus : la session studio, les scripts et angles éditoriaux, le montage complet des formats longs (YouTube ou Podcast), les shorts optimisés pour chaque plateforme, les miniatures et covers, ainsi que la planification de publication. Pas de frais cachés, pas de surprises.",
  },
  {
    question: "Dois-je m'engager sur une longue durée ?",
    answer: "Non, nos packs sont sur engagement mensuel. Vous pouvez arrêter quand vous voulez. Cependant, les meilleurs résultats en personal branding se construisent sur la durée. La régularité est la clé : c'est pourquoi nous recommandons un minimum de 3 mois pour voir des résultats significatifs.",
  },
  {
    question: "Pour qui sont faits ces packs ?",
    answer: "Nos packs s'adressent aux dirigeants, entrepreneurs et experts qui veulent développer leur personal brand sans y passer des heures. Si vous avez de l'expertise à partager mais pas le temps de gérer la production, le montage et la stratégie de contenu, nous sommes votre équipe clé-en-main.",
  },
];

function FAQAccordion({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-white pr-8 group-hover:text-zinc-300 transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed pr-12">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SEO() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const features = [
    {
      icon: Mic,
      title: "Studio professionnel",
      description: "Équipement haut de gamme, acoustique optimisée",
    },
    {
      icon: Video,
      title: "Production complète",
      description: "Du script au montage, tout est géré",
    },
    {
      icon: Sparkles,
      title: "Stratégie éditoriale",
      description: "Angles, hooks et formats qui performent",
    },
    {
      icon: Calendar,
      title: "Régularité garantie",
      description: "Publication planifiée, présence constante",
    },
  ];

  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">
              Pourquoi nous choisir
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
              Le personal branding qui travaille<br />
              <span className="text-zinc-500">pendant que vous dormez.</span>
            </h3>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Votre expertise mérite d'être vue. Nous transformons vos idées en contenu vidéo 
              impactant qui construit votre autorité et attire vos clients idéaux. 
              Podcast, YouTube, Shorts — une seule session, tout le contenu du mois.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <feature.icon className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-zinc-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-center text-sm text-zinc-500">
            <div>
              <span className="block text-2xl font-bold text-white mb-1">100+</span>
              vidéos produites
            </div>
            <div className="w-px h-12 bg-zinc-800 hidden sm:block" />
            <div>
              <span className="block text-2xl font-bold text-white mb-1">30+</span>
              entrepreneurs accompagnés
            </div>
            <div className="w-px h-12 bg-zinc-800 hidden sm:block" />
            <div>
              <span className="block text-2xl font-bold text-white mb-1">1M+</span>
              vues générées
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">
              Questions fréquentes
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
              Tout ce que vous devez savoir.
            </h3>
          </div>

          <div className="border-t border-zinc-800">
            {faqItems.map((item, index) => (
              <FAQAccordion
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

