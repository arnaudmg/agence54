"use client";

import { motion } from "framer-motion";
import { Pricing } from "@/components/sections/Pricing";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ContactPopup, useContactPopup } from "@/components/ui/ContactPopup";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Mic2,
  Camera,
  Lightbulb,
  Monitor,
  Headphones,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Play,
} from "lucide-react";

const equipment = [
  {
    icon: Camera,
    title: "3 Caméras 4K",
    description: "Sony FX3 & A7S III pour une qualité cinématographique",
  },
  {
    icon: Mic2,
    title: "Micros Broadcast",
    description: "Shure SM7B & Rode Procaster pour un son cristallin",
  },
  {
    icon: Lightbulb,
    title: "Éclairage Pro",
    description: "Aputure 600D & néons RGB pour une ambiance parfaite",
  },
  {
    icon: Monitor,
    title: 'Prompteur 21"',
    description: "Lecture fluide pour des prises parfaites",
  },
  {
    icon: Headphones,
    title: "Monitoring Audio",
    description: "Casques Beyerdynamic & monitoring temps réel",
  },
  {
    icon: Users,
    title: "Configuration Multi-invités",
    description: "Jusqu'à 4 personnes simultanément",
  },
];

const features = [
  "Studio climatisé et insonorisé",
  "Lounge confortable pour vos invités",
  "WiFi haut débit & connexion fibre",
  "À 5 min de Passeig de Gràcia",
  "On s'occupe de tout, vous venez juste avec votre idée",
];

const packs = [
  {
    id: "pack1",
    name: "Pack 1",
    price: "1 000",
    tagline: "Présence régulière sans friction",
    description:
      "Pour entrepreneurs qui veulent être visibles sans exploser leur agenda.",
    features: [
      "1 session / mois (3h)",
      "1 format long (YouTube 5 min ou Podcast 30 min)",
      "4 shorts / mois",
      "Scripts + angles + hooks",
      "Montage complet",
      "Miniature & Covers",
      "Planification",
    ],
    popular: false,
  },
  {
    id: "pack2",
    name: "Pack 2",
    price: "2 000",
    tagline: "Visibilité x2 + Ligne éditoriale",
    description: "Pour ceux qui veulent structurer leur personal brand.",
    features: [
      "2 sessions / mois (4h)",
      "2 formats longs (YouTube 5 min ou Podcast 30 min)",
      "8 shorts / mois",
      "Scripts + angles + hooks",
      "Montage complet",
      "Miniature & Covers",
      "Planification",
      "Analyse mensuelle + optimisations",
    ],
    popular: true,
  },
  {
    id: "pack3",
    name: "Pack 3",
    price: "4 000",
    tagline: "Domination sectorielle",
    description: "Pour leaders & experts très visibles.",
    features: [
      "3 sessions / mois (6h)",
      "4 formats longs (YouTube 5 min ou Podcast 30 min)",
      "20 shorts / mois",
      "Scripts + angles + hooks",
      "Montage complet",
      "Miniature & Covers",
      "Planification",
      "Analyse mensuelle + optimisations",
    ],
    popular: false,
  },
];

export function StudioPage() {
  const contactPopup = useContactPopup();

  return (
    <>
      <ContactPopup isOpen={contactPopup.isOpen} onClose={contactPopup.close} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-black" />
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">
                  <MapPin className="w-4 h-4" />
                  Barcelone, Espagne
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95] mb-6"
              >
                Le Studio de Podcast
                <br />
                <span className="text-zinc-500">N°1 à Barcelone.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed"
              >
                Un espace de tournage professionnel au cœur de Barcelone.
                Équipement broadcast, décor premium et accompagnement expert
                pour créer des podcasts qui marquent les esprits.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={contactPopup.open}
                  className="h-14 px-8 bg-white text-black hover:bg-zinc-200 rounded-none"
                >
                  Réserver une visite
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 rounded-none border-zinc-700 hover:bg-zinc-900 gap-2"
                >
                  <Play className="w-4 h-4" />
                  Voir le studio en vidéo
                </Button>
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-zinc-900 border border-zinc-800 relative overflow-hidden">
                <Image
                  src="/studio.jpg"
                  alt="Studio de podcast 54BCN à Barcelone"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Decorative overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-white font-bold text-lg">
                    Studio 54
                  </span>
                  <p className="text-zinc-400 text-sm">
                    Carrer de Casp, 54 - Barcelone
                  </p>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-zinc-800 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-8 bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-zinc-400">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4 block"
            >
              Équipement Professionnel
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tighter text-white"
            >
              Du matériel broadcast
              <br />
              <span className="text-zinc-500">pour un rendu premium.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-950 border border-zinc-800 p-6 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-none flex items-center justify-center mb-4 group-hover:bg-zinc-800 transition-colors">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4 block">
                Visite Virtuelle
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                Découvrez notre espace<span className="text-zinc-500">.</span>
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={contactPopup.open}
              className="rounded-none border-zinc-700 hover:bg-zinc-900 gap-2"
            >
              Planifier une visite <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-stretch">
            {/* Large horizontal image on the left */}
            <div className="bg-zinc-900 border border-zinc-800 relative overflow-hidden">
              <div className="aspect-[3/2] md:h-full relative">
                <Image
                  src="/DSC00025.JPG"
                  alt="Vue principale du studio de podcast"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right column - 2 images stacked */}
            <div className="flex flex-col gap-4">
              {/* Image 1 - Espace tournage */}
              <div className="bg-zinc-900 border border-zinc-800 relative overflow-hidden">
                <div className="aspect-[16/9] relative w-full">
                  <Image
                    src="/C0167T01.JPG"
                    alt="Espace tournage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Image 2 - Régie */}
              <div className="bg-zinc-900 border border-zinc-800 relative overflow-hidden">
                <div className="aspect-[16/9] relative w-full">
                  <Image
                    src="/C0161T01.JPG"
                    alt="Régie"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-zinc-900 border border-zinc-800 relative overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5234567890123!2d2.1702!3d41.3927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f73c5e5c5b%3A0x1234567890abcdef!2sCarrer%20de%20Casp%2C%2054%2C%2008010%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4 block">
                Localisation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
                Au cœur de Barcelone,
                <br />
                <span className="text-zinc-500">à deux pas de l'Eixample.</span>
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Notre studio de podcast est idéalement situé dans le quartier de
                l'Eixample, l'un des quartiers les plus accessibles de
                Barcelone. À 5 minutes à pied du Passeig de Gràcia et
                parfaitement desservi par les transports en commun.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Adresse</h4>
                    <p className="text-zinc-500 text-sm">
                      Carrer de Casp, 54 - 08010 Barcelone
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Horaires</h4>
                    <p className="text-zinc-500 text-sm">
                      Lun - Ven : 9h - 20h
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-white text-black hover:bg-zinc-200 rounded-none h-12 px-6"
              >
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Carrer+de+Casp+54+Barcelona+Spain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Obtenir l'itinéraire
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing />

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-black border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Prêt à construire votre visibilité digitale
            <br />
            <span className="text-zinc-500">à Barcelone ?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10"
          >
            Découvrez nos packs mensuels et démarrez dès aujourd'hui. Tournage,
            montage, diffusion : notre équipe gère l'intégralité de votre
            production pour un personal branding qui vous fait gagner en
            visibilité et en crédibilité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={contactPopup.open}
              className="h-14 px-10 bg-white text-black hover:bg-zinc-200 rounded-none text-base"
            >
              Choisir mon pack
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
