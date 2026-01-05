import { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
  slug: "home",
  label: "Page d'accueil",
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
          defaultValue: "54BCN | Personal Branding & Contenu Vidéo Clé-en-main",
        },
        {
          name: "description",
          label: "Description (meta description)",
          type: "textarea",
          defaultValue:
            "54BCN accompagne dirigeants et entrepreneurs dans la création d'un personal brand puissant. Podcast, YouTube, Shorts — une seule session, tout le contenu du mois.",
        },
        {
          name: "keywords",
          label: "Mots-clés (séparés par des virgules)",
          type: "text",
          defaultValue:
            "personal branding, studio podcast Barcelone, production vidéo, shorts, YouTube, podcast",
        },
        {
          name: "openGraphTitle",
          label: "OpenGraph - Titre",
          type: "text",
          defaultValue: "54BCN | Personal Branding & Contenu Vidéo Clé-en-main",
        },
        {
          name: "openGraphDescription",
          label: "OpenGraph - Description",
          type: "textarea",
          defaultValue:
            "Podcast, YouTube, Shorts — une seule session studio, tout le contenu du mois. Une équipe clé-en-main pour dirigeants et entrepreneurs.",
        },
      ],
    },
    {
      name: "hero",
      label: "Section Hero",
      type: "group",
      fields: [
        {
          name: "titleLine1",
          label: "Titre - Ligne 1",
          type: "text",
          defaultValue: "PERSONAL BRANDING",
        },
        {
          name: "titleLine2",
          label: "Titre - Ligne 2",
          type: "text",
          defaultValue: "& CONTENU VIDÉO",
        },
        {
          name: "titleLine3",
          label: "Titre - Ligne 3 (Gris)",
          type: "text",
          defaultValue: "CLÉ-EN-MAIN.",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          defaultValue:
            "54BCN accompagne dirigeants et entrepreneurs dans la création d'un personal brand puissant.",
        },
        {
          name: "youtubeVideoId",
          label: "ID Vidéo YouTube",
          type: "text",
          defaultValue: "FGRvP8eoPdw",
          admin: {
            description:
              "L'ID se trouve à la fin de l'URL youtube (ex: dQw4w9WgXcQ)",
          },
        },
      ],
    },
    {
      name: "stats",
      label: "Section Concept (Stats)",
      type: "group",
      fields: [
        {
          name: "targetTitle",
          label: "Titre Cible (petit)",
          type: "text",
          defaultValue: "Pour les dirigeants confirmés.",
        },
        {
          name: "mainTitle",
          label: "Titre Principal",
          type: "text",
          defaultValue: "Pas de one-shot, pas de frais cachés.",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          defaultValue:
            "Nous construisons un système de visibilité, pas juste des vidéos. Notre offre s'adresse aux dirigeants dont l'activité est établie, mais le temps compté.",
        },
        {
          name: "processTitle",
          label: "Titre Processus",
          type: "text",
          defaultValue: "Processus Mensuel",
        },
        {
          name: "steps",
          label: "Étapes du processus",
          type: "array",
          fields: [
            {
              name: "title",
              label: "Titre",
              type: "text",
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
            },
          ],
        },
      ],
    },
    {
      name: "studios",
      label: "Section Studios",
      type: "group",
      fields: [
        {
          name: "label",
          label: "Label (petit)",
          type: "text",
          defaultValue: "Lieu de tournage",
        },
        {
          name: "title",
          label: "Titre Principal",
          type: "text",
          defaultValue: "Le Studio 54.",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          defaultValue:
            "Un espace premium, optimisé pour les podcasts et contenus vidéo. Caméras, micros, prompteurs, tout est prêt pour vous.",
        },
        {
          name: "location",
          label: "Localisation",
          type: "text",
          defaultValue: "Barcelone, Casp 54",
        },
        {
          name: "equipmentTitle",
          label: "Titre Matériel",
          type: "text",
          defaultValue: "Notre matériel",
        },
        {
          name: "equipmentList",
          label: "Liste Matériel",
          type: "text",
          defaultValue: "3 Caméras 4K • Micros Shure SM7B • Éclairage Aputure",
        },
      ],
    },
    {
      name: "pricing",
      label: "Section Tarifs",
      type: "group",
      fields: [
        {
          name: "label",
          label: "Label (petit)",
          type: "text",
          defaultValue: "Tarifs & Packs",
        },
        {
          name: "titleLine1",
          label: "Titre Ligne 1",
          type: "text",
          defaultValue: "3 packs mensuels.",
        },
        {
          name: "titleLine2",
          label: "Titre Ligne 2",
          type: "text",
          defaultValue: "Clairs & Scalables.",
        },
        {
          name: "description",
          label: "Description",
          type: "text",
          defaultValue:
            "Engagement mensuel. Tout est inclus. Pas de frais cachés.",
        },
        {
          name: "packs",
          label: "Packs",
          type: "array",
          fields: [
            {
              name: "title",
              label: "Titre",
              type: "text",
            },
            {
              name: "price",
              label: "Prix",
              type: "text",
            },
            {
              name: "period",
              label: "Période",
              type: "text",
              defaultValue: "/ mois",
            },
            {
              name: "subtitle",
              label: "Sous-titre",
              type: "text",
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
            },
            {
              name: "highlight",
              label: "Mettre en avant ?",
              type: "checkbox",
            },
            {
              name: "features",
              label: "Fonctionnalités",
              type: "array",
              fields: [
                {
                  name: "text",
                  label: "Texte",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "seo",
      label: "Section Pourquoi nous choisir + FAQ",
      type: "group",
      fields: [
        {
          name: "content",
          label: "Contenu",
          type: "group",
          fields: [
            {
              name: "eyebrow",
              label: "Label (petit, au-dessus du titre)",
              type: "text",
              defaultValue: "Pourquoi nous choisir",
            },
            {
              name: "titleLine1",
              label: "Titre - Ligne 1",
              type: "text",
              defaultValue: "Le personal branding qui travaille",
            },
            {
              name: "titleLine2",
              label: "Titre - Ligne 2 (gris)",
              type: "text",
              defaultValue: "pendant que vous dormez.",
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
              defaultValue:
                "Votre expertise mérite d'être vue. Nous transformons vos idées en contenu vidéo impactant qui construit votre autorité et attire vos clients idéaux. Podcast, YouTube, Shorts — une seule session, tout le contenu du mois.",
            },
          ],
        },
        {
          name: "features",
          label: "Features (icônes + texte)",
          type: "array",
          fields: [
            {
              name: "icon",
              label: "Icône",
              type: "select",
              options: [
                { label: "Micro", value: "mic" },
                { label: "Vidéo", value: "video" },
                { label: "Sparkles", value: "sparkles" },
                { label: "Calendrier", value: "calendar" },
              ],
              defaultValue: "mic",
              required: true,
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
        },
        {
          name: "trustIndicators",
          label: "Indicateurs de confiance",
          type: "array",
          fields: [
            {
              name: "value",
              label: "Valeur (ex: 100+)",
              type: "text",
              required: true,
            },
            {
              name: "label",
              label: "Label (ex: vidéos produites)",
              type: "text",
              required: true,
            },
          ],
          defaultValue: [
            { value: "100+", label: "vidéos produites" },
            { value: "30+", label: "entrepreneurs accompagnés" },
            { value: "1M+", label: "vues générées" },
          ],
        },
        {
          name: "faq",
          label: "FAQ",
          type: "group",
          fields: [
            {
              name: "eyebrow",
              label: "Label (petit)",
              type: "text",
              defaultValue: "Questions fréquentes",
            },
            {
              name: "title",
              label: "Titre",
              type: "text",
              defaultValue: "Tout ce que vous devez savoir.",
            },
            {
              name: "items",
              label: "Questions / Réponses",
              type: "array",
              fields: [
                {
                  name: "question",
                  label: "Question",
                  type: "text",
                  required: true,
                },
                {
                  name: "answer",
                  label: "Réponse",
                  type: "textarea",
                  required: true,
                },
              ],
              defaultValue: [
                {
                  question: "Comment se déroule une session d'enregistrement ?",
                  answer:
                    "Chaque session se déroule dans notre studio professionnel à Barcelone. Vous arrivez, on s'occupe de tout : préparation du set, lumières, son, cadrage. Vous n'avez qu'à parler. En 3 à 6 heures selon votre pack, on capture tout le contenu du mois. Scripts, angles et hooks sont préparés en amont pour maximiser votre temps.",
                },
                {
                  question:
                    "Qu'est-ce qui est inclus dans les packs mensuels ?",
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
          ],
        },
      ],
    },
    {
      name: "footer",
      label: "Pied de page",
      type: "group",
      fields: [
        {
          name: "description",
          label: "Description Agence",
          type: "textarea",
          defaultValue:
            "Personal Branding & Contenu Vidéo Clé-en-main. Pour dirigeants et entrepreneurs francophones.",
        },
        {
          name: "email",
          label: "Email de contact",
          type: "email",
          defaultValue: "contact@54bcn.com",
        },
        {
          name: "addressLine1",
          label: "Adresse Ligne 1",
          type: "text",
          defaultValue: "Studio 54",
        },
        {
          name: "addressLine2",
          label: "Adresse Ligne 2",
          type: "text",
          defaultValue: "Barcelone, Casp 54",
        },
      ],
    },
  ],
};
