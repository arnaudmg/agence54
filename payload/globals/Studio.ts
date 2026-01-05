import { GlobalConfig } from "payload";
import React from "react";

const uploadToMediaTooltip =
  "Pour une URL complète : allez dans Media (sidebar) → Create new → uploadez le fichier → remplissez les champs → sauvegardez → cliquez sur l’icône Copy URL qui apparaît au bout du nom de l’image → collez ce lien ici.";

const publicPathDescription = React.createElement(
  "span",
  null,
  "Chemin dans /public (ex: /studio.jpg) ou ",
  React.createElement(
    "span",
    {
      title: uploadToMediaTooltip,
      style: { textDecoration: "underline dotted", cursor: "help" },
    },
    "URL complète"
  ),
  "."
);

export const Studio: GlobalConfig = {
  slug: "studio",
  label: "Page Studio",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "meta",
      label: "SEO / Metadata",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Titre (meta title)",
          type: "text",
          defaultValue:
            "Studio de Podcast à Barcelone | Enregistrement Professionnel | 54BCN",
        },
        {
          name: "description",
          label: "Description (meta description)",
          type: "textarea",
          defaultValue:
            "Découvrez notre studio de podcast professionnel à Barcelone. Équipement haut de gamme, décor premium et accompagnement complet pour vos podcasts vidéo et contenus audio.",
        },
        {
          name: "keywords",
          label: "Mots-clés (séparés par des virgules)",
          type: "text",
          defaultValue:
            "studio podcast Barcelone, enregistrement podcast Espagne, studio vidéo Barcelone, location studio podcast, podcast professionnel Barcelone",
        },
        {
          name: "openGraphTitle",
          label: "OpenGraph - Titre",
          type: "text",
          defaultValue: "Studio de Podcast Professionnel à Barcelone | 54BCN",
        },
        {
          name: "openGraphDescription",
          label: "OpenGraph - Description",
          type: "textarea",
          defaultValue:
            "Studio d'enregistrement premium au cœur de Barcelone. Podcasts vidéo, interviews, contenus audio - tout inclus.",
        },
      ],
    },
    {
      name: "hero",
      label: "Hero",
      type: "group",
      fields: [
        {
          name: "locationLabel",
          label: "Localisation (label)",
          type: "text",
          defaultValue: "Barcelone, Espagne",
        },
        {
          name: "titleLine1",
          label: "Titre - Ligne 1",
          type: "text",
          defaultValue: "Le Studio de Podcast",
        },
        {
          name: "titleLine2",
          label: "Titre - Ligne 2 (gris)",
          type: "text",
          defaultValue: "N°1 à Barcelone.",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          defaultValue:
            "Un espace de tournage professionnel au cœur de Barcelone.\nÉquipement broadcast, décor premium et accompagnement expert\npour créer des podcasts qui marquent les esprits.",
        },
        {
          name: "primaryCtaText",
          label: "CTA principal - Texte",
          type: "text",
          defaultValue: "Réserver une visite",
        },
        {
          name: "secondaryCtaText",
          label: "CTA secondaire - Texte",
          type: "text",
          defaultValue: "Voir le studio en vidéo",
        },
        {
          name: "secondaryCtaUrl",
          label: "CTA secondaire - URL (optionnel)",
          type: "text",
          admin: {
            description:
              "Si vide, le bouton secondaire est masqué. Exemple: https://youtube.com/... ou /page",
          },
        },
        {
          name: "image",
          label: "Image Hero",
          type: "group",
          fields: [
            {
              name: "src",
              label: "Image - src",
              type: "text",
              defaultValue: "/studio.jpg",
              admin: {
                description: publicPathDescription,
              },
            },
            {
              name: "alt",
              label: "Image - alt",
              type: "text",
              defaultValue: "Studio de podcast 54BCN à Barcelone",
            },
            {
              name: "badgeTitle",
              label: "Badge - Titre",
              type: "text",
              defaultValue: "Studio 54",
            },
            {
              name: "badgeSubtitle",
              label: "Badge - Sous-titre",
              type: "text",
              defaultValue: "Carrer de Casp, 54 - Barcelone",
            },
          ],
        },
      ],
    },
    {
      name: "featuresStrip",
      label: "Bandeau Features",
      type: "group",
      fields: [
        {
          name: "items",
          label: "Liste",
          type: "array",
          fields: [
            {
              name: "text",
              label: "Texte",
              type: "text",
              required: true,
            },
          ],
          defaultValue: [
            { text: "Studio climatisé et insonorisé" },
            { text: "Matériel professionnel" },
            { text: "À 5 min de Passeig de Gràcia" },
            { text: "On s'occupe de tout, vous venez juste avec votre idée" },
          ],
        },
      ],
    },
    {
      name: "equipmentSection",
      label: "Section Équipement",
      type: "group",
      fields: [
        {
          name: "eyebrow",
          label: "Label (petit)",
          type: "text",
          defaultValue: "Équipement Professionnel",
        },
        {
          name: "titleLine1",
          label: "Titre - Ligne 1",
          type: "text",
          defaultValue: "Du matériel broadcast",
        },
        {
          name: "titleLine2",
          label: "Titre - Ligne 2 (gris)",
          type: "text",
          defaultValue: "pour un rendu premium.",
        },
        {
          name: "items",
          label: "Éléments",
          type: "array",
          fields: [
            {
              name: "icon",
              label: "Icône",
              type: "select",
              options: [
                { label: "Caméra", value: "camera" },
                { label: "Micro", value: "mic" },
                { label: "Ampoule", value: "lightbulb" },
                { label: "Moniteur", value: "monitor" },
                { label: "Casque", value: "headphones" },
                { label: "Utilisateurs", value: "users" },
              ],
              required: true,
              defaultValue: "camera",
            },
            {
              name: "title",
              label: "Titre",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Description",
              type: "text",
              required: true,
            },
          ],
          defaultValue: [
            {
              icon: "camera",
              title: "3 Caméras 4K",
              description:
                "Sony FX3 & A7S III pour une qualité cinématographique",
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
      ],
    },
    {
      name: "gallerySection",
      label: "Section Galerie",
      type: "group",
      fields: [
        {
          name: "eyebrow",
          label: "Label (petit)",
          type: "text",
          defaultValue: "Visite Virtuelle",
        },
        {
          name: "title",
          label: "Titre",
          type: "text",
          defaultValue: "Découvrez notre espace.",
        },
        {
          name: "ctaText",
          label: "Bouton - Texte",
          type: "text",
          defaultValue: "Planifier une visite",
        },
        {
          name: "images",
          label: "Images",
          type: "group",
          fields: [
            {
              name: "left",
              label: "Image gauche (grande)",
              type: "group",
              fields: [
                {
                  name: "src",
                  label: "src",
                  type: "text",
                  defaultValue: "/DSC00025.JPG",
                  admin: {
                    description: publicPathDescription,
                  },
                },
                {
                  name: "alt",
                  label: "alt",
                  type: "text",
                  defaultValue: "Vue principale du studio de podcast",
                },
              ],
            },
            {
              name: "rightTop",
              label: "Image droite - haut",
              type: "group",
              fields: [
                {
                  name: "src",
                  label: "src",
                  type: "text",
                  defaultValue: "/C0167T01.JPG",
                  admin: {
                    description: publicPathDescription,
                  },
                },
                {
                  name: "alt",
                  label: "alt",
                  type: "text",
                  defaultValue: "Espace tournage",
                },
              ],
            },
            {
              name: "rightBottom",
              label: "Image droite - bas",
              type: "group",
              fields: [
                {
                  name: "src",
                  label: "src",
                  type: "text",
                  defaultValue: "/C0161T01.JPG",
                  admin: {
                    description: publicPathDescription,
                  },
                },
                {
                  name: "alt",
                  label: "alt",
                  type: "text",
                  defaultValue: "Régie",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "locationSection",
      label: "Section Localisation",
      type: "group",
      fields: [
        {
          name: "mapEmbedUrl",
          label: "Google Maps - URL embed",
          type: "text",
          defaultValue:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5234567890123!2d2.1702!3d41.3927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f73c5e5c5b%3A0x1234567890abcdef!2sCarrer%20de%20Casp%2C%2054%2C%2008010%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890",
          admin: {
            description:
              "URL d'intégration Google Maps (embed). Collez l'URL du iframe.",
          },
        },
        {
          name: "eyebrow",
          label: "Label (petit)",
          type: "text",
          defaultValue: "Localisation",
        },
        {
          name: "titleLine1",
          label: "Titre - Ligne 1",
          type: "text",
          defaultValue: "Au cœur de Barcelone,",
        },
        {
          name: "titleLine2",
          label: "Titre - Ligne 2 (gris)",
          type: "text",
          defaultValue: "à deux pas de l'Eixample.",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          defaultValue:
            "Notre studio de podcast est idéalement situé dans le quartier de l'Eixample, l'un des quartiers les plus accessibles de Barcelone. À 5 minutes à pied du Passeig de Gràcia et parfaitement desservi par les transports en commun.",
        },
        {
          name: "addressTitle",
          label: "Adresse - Titre",
          type: "text",
          defaultValue: "Adresse",
        },
        {
          name: "addressText",
          label: "Adresse - Texte",
          type: "text",
          defaultValue: "Carrer de Casp, 54 - 08010 Barcelone",
        },
        {
          name: "hoursTitle",
          label: "Horaires - Titre",
          type: "text",
          defaultValue: "Horaires",
        },
        {
          name: "hoursText",
          label: "Horaires - Texte",
          type: "text",
          defaultValue: "Lun - Ven : 9h - 20h",
        },
        {
          name: "directionsUrl",
          label: "Bouton itinéraire - URL",
          type: "text",
          defaultValue:
            "https://www.google.com/maps/dir/?api=1&destination=Carrer+de+Casp+54+Barcelona+Spain",
        },
        {
          name: "directionsCtaText",
          label: "Bouton itinéraire - Texte",
          type: "text",
          defaultValue: "Obtenir l'itinéraire",
        },
      ],
    },
    {
      name: "finalCta",
      label: "CTA Final",
      type: "group",
      fields: [
        {
          name: "titleLine1",
          label: "Titre - Ligne 1",
          type: "text",
          defaultValue: "Prêt à construire votre visibilité digitale",
        },
        {
          name: "titleLine2",
          label: "Titre - Ligne 2 (gris)",
          type: "text",
          defaultValue: "à Barcelone ?",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          defaultValue:
            "Découvrez nos packs mensuels et démarrez dès aujourd'hui. Tournage, montage, diffusion : notre équipe gère l'intégralité de votre production pour un personal branding qui vous fait gagner en visibilité et en crédibilité.",
        },
        {
          name: "ctaText",
          label: "Bouton - Texte",
          type: "text",
          defaultValue: "Choisir mon pack",
        },
      ],
    },
  ],
};

