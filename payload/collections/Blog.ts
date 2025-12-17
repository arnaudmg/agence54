import { CollectionConfig } from "payload";
import {
  BlocksFeature,
  BoldFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  ParagraphFeature,
  UnderlineFeature,
} from "@payloadcms/richtext-lexical";

export const Blog: CollectionConfig = {
  slug: "blog",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          LinkFeature({}),
        ],
      }),
    },
  ],
};
