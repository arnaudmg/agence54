"use client";

import { motion } from "framer-motion";
import { Pricing } from "@/components/sections/Pricing";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ContactPopup, useContactPopup } from "@/components/ui/ContactPopup";
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

type EquipmentIconKey =
  | "camera"
  | "mic"
  | "lightbulb"
  | "monitor"
  | "headphones"
  | "users";

type StudioPageData = {
  hero?: {
    locationLabel?: string | null;
    titleLine1?: string | null;
    titleLine2?: string | null;
    description?: string | null;
    primaryCtaText?: string | null;
    secondaryCtaText?: string | null;
    secondaryCtaUrl?: string | null;
    image?: {
      src?: string | null;
      alt?: string | null;
      badgeTitle?: string | null;
      badgeSubtitle?: string | null;
    } | null;
  } | null;
  featuresStrip?: { items?: { text?: string | null }[] | null } | null;
  equipmentSection?: {
    eyebrow?: string | null;
    titleLine1?: string | null;
    titleLine2?: string | null;
    items?: {
      icon?: EquipmentIconKey | string | null;
      title?: string | null;
      description?: string | null;
    }[] | null;
  } | null;
  gallerySection?: {
    eyebrow?: string | null;
    title?: string | null;
    ctaText?: string | null;
    images?: {
      left?: { src?: string | null; alt?: string | null } | null;
      rightTop?: { src?: string | null; alt?: string | null } | null;
      rightBottom?: { src?: string | null; alt?: string | null } | null;
    } | null;
  } | null;
  locationSection?: {
    mapEmbedUrl?: string | null;
    eyebrow?: string | null;
    titleLine1?: string | null;
    titleLine2?: string | null;
    description?: string | null;
    addressTitle?: string | null;
    addressText?: string | null;
    hoursTitle?: string | null;
    hoursText?: string | null;
    directionsUrl?: string | null;
    directionsCtaText?: string | null;
  } | null;
  finalCta?: {
    titleLine1?: string | null;
    titleLine2?: string | null;
    description?: string | null;
    ctaText?: string | null;
  } | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    keywords?: string | null;
    openGraphTitle?: string | null;
    openGraphDescription?: string | null;
  } | null;
};

type PricingData = Parameters<typeof Pricing>[0]["data"];

const defaultStudioData: StudioPageData = {
  hero: {
    locationLabel: "Barcelone, Espagne",
    titleLine1: "Le Studio de Podcast",
    titleLine2: "N°1 à Barcelone.",
    description:
      "Un espace de tournage professionnel au cœur de Barcelone.\nÉquipement broadcast, décor premium et accompagnement expert\npour créer des podcasts qui marquent les esprits.",
    primaryCtaText: "Réserver une visite",
    secondaryCtaText: "Voir le studio en vidéo",
    secondaryCtaUrl: "",
    image: {
      src: "/studio.jpg",
      alt: "Studio de podcast 54BCN à Barcelone",
      badgeTitle: "Studio 54",
      badgeSubtitle: "Carrer de Casp, 54 - Barcelone",
    },
  },
  featuresStrip: {
    items: [
      { text: "Studio climatisé et insonorisé" },
      { text: "Matériel professionnel" },
      { text: "À 5 min de Passeig de Gràcia" },
      { text: "On s'occupe de tout, vous venez juste avec votre idée" },
    ],
  },
  equipmentSection: {
    eyebrow: "Équipement Professionnel",
    titleLine1: "Du matériel broadcast",
    titleLine2: "pour un rendu premium.",
    items: [
      {
        icon: "camera",
        title: "3 Caméras 4K",
        description: "Sony FX3 & A7S III pour une qualité cinématographique",
      },
      {
        icon: "mic",
        title: "Micros Broadcast",
        description: "Shure SM7B & Rode Procaster pour un son cristallin",
      },
      {
        icon: "lightbulb",
        title: "Éclairage Pro",
        description: "Aputure 600D & néons RGB pour une ambiance parfaite",
      },
      {
        icon: "monitor",
        title: 'Prompteur 21"',
        description: "Lecture fluide pour des prises parfaites",
      },
      {
        icon: "headphones",
        title: "Monitoring Audio",
        description: "Casques Beyerdynamic & monitoring temps réel",
      },
      {
        icon: "users",
        title: "Configuration Multi-invités",
        description: "Jusqu'à 4 personnes simultanément",
      },
    ],
  },
  gallerySection: {
    eyebrow: "Visite Virtuelle",
    title: "Découvrez notre espace.",
    ctaText: "Planifier une visite",
    images: {
      left: { src: "/DSC00025.JPG", alt: "Vue principale du studio de podcast" },
      rightTop: { src: "/C0167T01.JPG", alt: "Espace tournage" },
      rightBottom: { src: "/C0161T01.JPG", alt: "Régie" },
    },
  },
  locationSection: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5234567890123!2d2.1702!3d41.3927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f73c5e5c5b%3A0x1234567890abcdef!2sCarrer%20de%20Casp%2C%2054%2C%2008010%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890",
    eyebrow: "Localisation",
    titleLine1: "Au cœur de Barcelone,",
    titleLine2: "à deux pas de l'Eixample.",
    description:
      "Notre studio de podcast est idéalement situé dans le quartier de l'Eixample, l'un des quartiers les plus accessibles de Barcelone. À 5 minutes à pied du Passeig de Gràcia et parfaitement desservi par les transports en commun.",
    addressTitle: "Adresse",
    addressText: "Carrer de Casp, 54 - 08010 Barcelone",
    hoursTitle: "Horaires",
    hoursText: "Lun - Ven : 9h - 20h",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Carrer+de+Casp+54+Barcelona+Spain",
    directionsCtaText: "Obtenir l'itinéraire",
  },
  finalCta: {
    titleLine1: "Prêt à construire votre visibilité digitale",
    titleLine2: "à Barcelone ?",
    description:
      "Découvrez nos packs mensuels et démarrez dès aujourd'hui. Tournage, montage, diffusion : notre équipe gère l'intégralité de votre production pour un personal branding qui vous fait gagner en visibilité et en crédibilité.",
    ctaText: "Choisir mon pack",
  },
};

const equipmentIconMap: Record<EquipmentIconKey, typeof Camera> = {
  camera: Camera,
  mic: Mic2,
  lightbulb: Lightbulb,
  monitor: Monitor,
  headphones: Headphones,
  users: Users,
};

export function StudioPage({
  data,
  pricingData,
}: {
  data?: StudioPageData;
  pricingData?: PricingData;
}) {
  const contactPopup = useContactPopup();

  const merged: StudioPageData = {
    ...defaultStudioData,
    ...(data ?? {}),
    hero: { ...(defaultStudioData.hero ?? {}), ...(data?.hero ?? {}) },
    featuresStrip: {
      ...(defaultStudioData.featuresStrip ?? {}),
      ...(data?.featuresStrip ?? {}),
    },
    equipmentSection: {
      ...(defaultStudioData.equipmentSection ?? {}),
      ...(data?.equipmentSection ?? {}),
    },
    gallerySection: {
      ...(defaultStudioData.gallerySection ?? {}),
      ...(data?.gallerySection ?? {}),
      images: {
        ...(defaultStudioData.gallerySection?.images ?? {}),
        ...(data?.gallerySection?.images ?? {}),
      },
    },
    locationSection: {
      ...(defaultStudioData.locationSection ?? {}),
      ...(data?.locationSection ?? {}),
    },
    finalCta: { ...(defaultStudioData.finalCta ?? {}), ...(data?.finalCta ?? {}) },
  };

  const featureItems =
    merged.featuresStrip?.items && merged.featuresStrip.items.length > 0
      ? merged.featuresStrip.items
      : defaultStudioData.featuresStrip?.items ?? [];

  const equipmentItems =
    merged.equipmentSection?.items && merged.equipmentSection.items.length > 0
      ? merged.equipmentSection.items
      : defaultStudioData.equipmentSection?.items ?? [];

  const heroImage = merged.hero?.image ?? defaultStudioData.hero?.image;

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
                  {merged.hero?.locationLabel}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95] mb-6"
              >
                {merged.hero?.titleLine1}
                <br />
                <span className="text-zinc-500">{merged.hero?.titleLine2}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed"
              >
                {merged.hero?.description}
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
                  {merged.hero?.primaryCtaText}
                </Button>
                {merged.hero?.secondaryCtaUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 rounded-none border-zinc-700 hover:bg-zinc-900 gap-2"
                  >
                    <a
                      href={merged.hero.secondaryCtaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="w-4 h-4" />
                      {merged.hero.secondaryCtaText}
                    </a>
                  </Button>
                ) : null}
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
                  src={heroImage?.src || "/studio.jpg"}
                  alt={heroImage?.alt || "Studio de podcast 54BCN à Barcelone"}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Decorative overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-white font-bold text-lg">
                    {heroImage?.badgeTitle}
                  </span>
                  <p className="text-zinc-400 text-sm">
                    {heroImage?.badgeSubtitle}
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
            {featureItems.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {feature.text}
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
              {merged.equipmentSection?.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tighter text-white"
            >
              {merged.equipmentSection?.titleLine1}
              <br />
              <span className="text-zinc-500">
                {merged.equipmentSection?.titleLine2}
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentItems.map((item, idx) => {
              const key = (item.icon ?? "camera") as EquipmentIconKey;
              const Icon = equipmentIconMap[key] ?? Camera;

              return (
              <motion.div
                key={`${item.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-950 border border-zinc-800 p-6 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-none flex items-center justify-center mb-4 group-hover:bg-zinc-800 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm">{item.description}</p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4 block">
                {merged.gallerySection?.eyebrow}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                {merged.gallerySection?.title}
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={contactPopup.open}
              className="rounded-none border-zinc-700 hover:bg-zinc-900 gap-2"
            >
              {merged.gallerySection?.ctaText} <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-stretch">
            {/* Large horizontal image on the left */}
            <div className="bg-zinc-900 border border-zinc-800 relative overflow-hidden">
              <div className="aspect-[3/2] md:h-full relative">
                <Image
                  src={
                    merged.gallerySection?.images?.left?.src ||
                    defaultStudioData.gallerySection?.images?.left?.src ||
                    "/DSC00025.JPG"
                  }
                  alt={
                    merged.gallerySection?.images?.left?.alt ||
                    defaultStudioData.gallerySection?.images?.left?.alt ||
                    "Vue principale du studio de podcast"
                  }
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
                    src={
                      merged.gallerySection?.images?.rightTop?.src ||
                      defaultStudioData.gallerySection?.images?.rightTop?.src ||
                      "/C0167T01.JPG"
                    }
                    alt={
                      merged.gallerySection?.images?.rightTop?.alt ||
                      defaultStudioData.gallerySection?.images?.rightTop?.alt ||
                      "Espace tournage"
                    }
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Image 2 - Régie */}
              <div className="bg-zinc-900 border border-zinc-800 relative overflow-hidden">
                <div className="aspect-[16/9] relative w-full">
                  <Image
                    src={
                      merged.gallerySection?.images?.rightBottom?.src ||
                      defaultStudioData.gallerySection?.images?.rightBottom
                        ?.src ||
                      "/C0161T01.JPG"
                    }
                    alt={
                      merged.gallerySection?.images?.rightBottom?.alt ||
                      defaultStudioData.gallerySection?.images?.rightBottom
                        ?.alt ||
                      "Régie"
                    }
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
                src={
                  merged.locationSection?.mapEmbedUrl ||
                  defaultStudioData.locationSection?.mapEmbedUrl ||
                  ""
                }
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
                {merged.locationSection?.eyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6">
                {merged.locationSection?.titleLine1}
                <br />
                <span className="text-zinc-500">
                  {merged.locationSection?.titleLine2}
                </span>
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                {merged.locationSection?.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      {merged.locationSection?.addressTitle}
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      {merged.locationSection?.addressText}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      {merged.locationSection?.hoursTitle}
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      {merged.locationSection?.hoursText}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-white text-black hover:bg-zinc-200 rounded-none h-12 px-6"
              >
                <a
                  href={
                    merged.locationSection?.directionsUrl ||
                    defaultStudioData.locationSection?.directionsUrl ||
                    "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {merged.locationSection?.directionsCtaText}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing data={pricingData} />

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
            {merged.finalCta?.titleLine1}
            <br />
            <span className="text-zinc-500">{merged.finalCta?.titleLine2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10"
          >
            {merged.finalCta?.description}
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
              {merged.finalCta?.ctaText}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
