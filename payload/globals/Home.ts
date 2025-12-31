import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Page d\'accueil',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      label: 'Section Hero',
      type: 'group',
      fields: [
        {
          name: 'titleLine1',
          label: 'Titre - Ligne 1',
          type: 'text',
          defaultValue: 'PERSONAL BRANDING',
        },
        {
          name: 'titleLine2',
          label: 'Titre - Ligne 2',
          type: 'text',
          defaultValue: '& CONTENU VIDÉO',
        },
        {
          name: 'titleLine3',
          label: 'Titre - Ligne 3 (Gris)',
          type: 'text',
          defaultValue: 'CLÉ-EN-MAIN.',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          defaultValue: "54BCN accompagne dirigeants et entrepreneurs dans la création d'un personal brand puissant.",
        },
        {
          name: 'youtubeVideoId',
          label: 'ID Vidéo YouTube',
          type: 'text',
          defaultValue: 'FGRvP8eoPdw',
          admin: {
            description: 'L\'ID se trouve à la fin de l\'URL youtube (ex: dQw4w9WgXcQ)',
          },
        },
      ],
    },
    {
      name: 'stats',
      label: 'Section Concept (Stats)',
      type: 'group',
      fields: [
        {
            name: 'targetTitle',
            label: 'Titre Cible (petit)',
            type: 'text',
            defaultValue: 'Pour les dirigeants confirmés.',
        },
        {
            name: 'mainTitle',
            label: 'Titre Principal',
            type: 'text',
            defaultValue: 'Pas de one-shot, pas de frais cachés.',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            defaultValue: 'Nous construisons un système de visibilité, pas juste des vidéos. Notre offre s\'adresse aux dirigeants dont l\'activité est établie, mais le temps compté.',
        },
        {
            name: 'processTitle',
            label: 'Titre Processus',
            type: 'text',
            defaultValue: 'Processus Mensuel',
        },
        {
            name: 'steps',
            label: 'Étapes du processus',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    label: 'Titre',
                    type: 'text',
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea',
                }
            ]
        }
      ]
    },
    {
        name: 'studios',
        label: 'Section Studios',
        type: 'group',
        fields: [
            {
                name: 'label',
                label: 'Label (petit)',
                type: 'text',
                defaultValue: 'Lieu de tournage',
            },
            {
                name: 'title',
                label: 'Titre Principal',
                type: 'text',
                defaultValue: 'Le Studio 54.',
            },
            {
                name: 'description',
                label: 'Description',
                type: 'textarea',
                defaultValue: 'Un espace premium, optimisé pour les podcasts et contenus vidéo. Caméras, micros, prompteurs, tout est prêt pour vous.',
            },
            {
                name: 'location',
                label: 'Localisation',
                type: 'text',
                defaultValue: 'Barcelone, Casp 54',
            },
            {
                name: 'equipmentTitle',
                label: 'Titre Matériel',
                type: 'text',
                defaultValue: 'Notre matériel',
            },
            {
                name: 'equipmentList',
                label: 'Liste Matériel',
                type: 'text',
                defaultValue: '3 Caméras 4K • Micros Shure SM7B • Éclairage Aputure',
            }
        ]
    },
    {
        name: 'pricing',
        label: 'Section Tarifs',
        type: 'group',
        fields: [
             {
                name: 'label',
                label: 'Label (petit)',
                type: 'text',
                defaultValue: 'Tarifs & Packs',
            },
            {
                name: 'titleLine1',
                label: 'Titre Ligne 1',
                type: 'text',
                defaultValue: '3 packs mensuels.',
            },
            {
                name: 'titleLine2',
                label: 'Titre Ligne 2',
                type: 'text',
                defaultValue: 'Clairs & Scalables.',
            },
            {
                name: 'description',
                label: 'Description',
                type: 'text',
                defaultValue: 'Engagement mensuel. Tout est inclus. Pas de frais cachés.',
            },
            {
                name: 'packs',
                label: 'Packs',
                type: 'array',
                fields: [
                    {
                        name: 'title',
                        label: 'Titre',
                        type: 'text',
                    },
                    {
                        name: 'price',
                        label: 'Prix',
                        type: 'text',
                    },
                    {
                        name: 'period',
                        label: 'Période',
                        type: 'text',
                        defaultValue: '/ mois',
                    },
                    {
                        name: 'subtitle',
                        label: 'Sous-titre',
                        type: 'text',
                    },
                    {
                        name: 'description',
                        label: 'Description',
                        type: 'textarea',
                    },
                    {
                        name: 'highlight',
                        label: 'Mettre en avant ?',
                        type: 'checkbox',
                    },
                    {
                        name: 'features',
                        label: 'Fonctionnalités',
                        type: 'array',
                        fields: [
                            {
                                name: 'text',
                                label: 'Texte',
                                type: 'text',
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'booking',
        label: 'Section Réservation',
        type: 'group',
        fields: [
            {
                name: 'label',
                label: 'Label (petit)',
                type: 'text',
                defaultValue: 'Nos Offres',
            },
             {
                name: 'titleLine1',
                label: 'Titre Ligne 1',
                type: 'text',
                defaultValue: 'Démarrer votre',
            },
            {
                name: 'titleLine2',
                label: 'Titre Ligne 2',
                type: 'text',
                defaultValue: 'accompagnement.',
            },
             {
                name: 'description',
                label: 'Description',
                type: 'textarea',
                defaultValue: 'Nous limitons nos places à 8-10 clients premium pour garantir la qualité. Réservez un appel pour vérifier votre éligibilité.',
            },
        ]
    },
    {
        name: 'footer',
        label: 'Pied de page',
        type: 'group',
        fields: [
             {
                name: 'description',
                label: 'Description Agence',
                type: 'textarea',
                defaultValue: 'Personal Branding & Contenu Vidéo Clé-en-main. Pour dirigeants et entrepreneurs francophones.',
            },
            {
                name: 'email',
                label: 'Email de contact',
                type: 'email',
                defaultValue: 'hello@agence54.com',
            },
             {
                name: 'addressLine1',
                label: 'Adresse Ligne 1',
                type: 'text',
                defaultValue: 'Studio 54',
            },
             {
                name: 'addressLine2',
                label: 'Adresse Ligne 2',
                type: 'text',
                defaultValue: 'Barcelone, Casp 54',
            }
        ]
    }
  ],
}
