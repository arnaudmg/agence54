"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mic, Video, Sparkles, Calendar } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

type SEOIconKey = "mic" | "video" | "sparkles" | "calendar";

type SEOSectionData = {
  content?: {
    eyebrow?: string | null;
    titleLine1?: string | null;
    titleLine2?: string | null;
    description?: string | null;
  } | null;
  features?: Array<{
    icon?: SEOIconKey | string | null;
    title?: string | null;
    description?: string | null;
  }> | null;
  trustIndicators?: Array<{
    value?: string | null;
    label?: string | null;
  }> | null;
  faq?: {
    eyebrow?: string | null;
    title?: string | null;
    items?: FAQItem[] | null;
  } | null;
};

const defaultSEOData: SEOSectionData = {
  content: {
    eyebrow: "Pourquoi nous choisir",
    titleLine1: "Le personal branding qui travaille",
    titleLine2: "pendant que vous dormez.",
    description:
      "Votre expertise mérite d'être vue. Nous transformons vos idées en contenu vidéo impactant qui construit votre autorité et attire vos clients idéaux. Podcast, YouTube, Shorts — une seule session, tout le contenu du mois.",
  },
  features: [
    {
      icon: "mic",
      title: "Studio professionnel",
      description: "Équipement haut de gamme, acoustique optimisée",
    },
    {
      icon: "video",
      title: "Production complète",
      description: "Du script au montage, tout est géré",
    },
    {
      icon: "sparkles",
      title: "Stratégie éditoriale",
      description: "Angles, hooks et formats qui performent",
    },
    {
      icon: "calendar",
      title: "Régularité garantie",
      description: "Publication planifiée, présence constante",
    },
  ],
  trustIndicators: [
    { value: "100+", label: "vidéos produites" },
    { value: "30+", label: "entrepreneurs accompagnés" },
    { value: "1M+", label: "vues générées" },
  ],
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Tout ce que vous devez savoir.",
    items: [
      {
        question: "Comment se déroule une session d'enregistrement ?",
        answer:
          "Chaque session se déroule dans notre studio professionnel à Barcelone. Vous arrivez, on s'occupe de tout : préparation du set, lumières, son, cadrage. Vous n'avez qu'à parler. En 3 à 6 heures selon votre pack, on capture tout le contenu du mois. Scripts, angles et hooks sont préparés en amont pour maximiser votre temps.",
      },
      {
        question: "Qu'est-ce qui est inclus dans les packs mensuels ?",
        answer:
          "Tout est inclus : la session studio, les scripts et angles éditoriaux, le montage complet des formats longs (YouTube ou Podcast), les shorts optimisés pour chaque plateforme, les miniatures et covers, ainsi que la planification de publication. Pas de frais cachés, pas de surprises.",
      },
      {
        question: "Dois-je m'engager sur une longue durée ?",
        answer:
          "Non, nos packs sont sur engagement mensuel. Vous pouvez arrêter quand vous voulez. Cependant, les meilleurs résultats en personal branding se construisent sur la durée. La régularité est la clé : c'est pourquoi nous recommandons un minimum de 3 mois pour voir des résultats significatifs.",
      },
      {
        question: "Pour qui sont faits ces packs ?",
        answer:
          "Nos packs s'adressent aux dirigeants, entrepreneurs et experts qui veulent développer leur personal brand sans y passer des heures. Si vous avez de l'expertise à partager mais pas le temps de gérer la production, le montage et la stratégie de contenu, nous sommes votre équipe clé-en-main.",
      },
    ],
  },
};

function FAQAccordion({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
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

const iconMap: Record<SEOIconKey, typeof Mic> = {
  mic: Mic,
  video: Video,
  sparkles: Sparkles,
  calendar: Calendar,
};

export function SEO({ data }: { data?: SEOSectionData }) {
  const merged: SEOSectionData = {
    ...defaultSEOData,
    ...(data ?? {}),
    content: {
      ...(defaultSEOData.content ?? {}),
      ...(data?.content ?? {}),
    },
    faq: {
      ...(defaultSEOData.faq ?? {}),
      ...(data?.faq ?? {}),
    },
    features:
      (data?.features && data.features.length > 0
        ? data.features
        : defaultSEOData.features) ?? [],
    trustIndicators:
      (data?.trustIndicators && data.trustIndicators.length > 0
        ? data.trustIndicators
        : defaultSEOData.trustIndicators) ?? [],
  };

  const faqItems = merged.faq?.items ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(
    faqItems.length > 0 ? 0 : null
  );

  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">
              {merged.content?.eyebrow}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
              {merged.content?.titleLine1}
              <br />
              <span className="text-zinc-500">
                {merged.content?.titleLine2}
              </span>
            </h3>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {merged.content?.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {(merged.features ?? []).map((feature, index) => {
              const key = (feature.icon ?? "mic") as SEOIconKey;
              const Icon = iconMap[key] ?? Mic;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border border-zinc-800 hover:border-zinc-700 transition-colors group"
                >
                  <Icon className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-zinc-500">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-center text-sm text-zinc-500">
            {(merged.trustIndicators ?? []).map((item, idx) => (
              <div key={idx} className="contents">
                <div>
                  <span className="block text-2xl font-bold text-white mb-1">
                    {item.value}
                  </span>
                  {item.label}
                </div>
                {idx < (merged.trustIndicators ?? []).length - 1 && (
                  <div className="w-px h-12 bg-zinc-800 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">
              {merged.faq?.eyebrow}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
              {merged.faq?.title}
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
