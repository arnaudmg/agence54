import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { Home } from "./payload/globals/Home";
import { Studio } from "./payload/globals/Studio";
import { Blog } from "./payload/collections/Blog";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users",
    meta: {
      titleSuffix: " - 54BCN",
    },
  },
  editor: lexicalEditor(),
  collections: [
    {
      slug: "users",
      auth: true,
      access: {
        delete: () => false,
        update: () => false,
      },
      fields: [],
    },
    {
      slug: "media",
      upload: {
        mimeTypes: ["image/*", "video/*", "application/pdf"],
        imageSizes: [
          {
            name: "thumbnail",
            width: 400,
            height: 300,
            position: "centre",
          },
          {
            name: "card",
            width: 768,
            height: 512,
            position: "centre",
          },
          {
            name: "hero",
            width: 1920,
            height: 1080,
            position: "centre",
          },
        ],
        adminThumbnail: "thumbnail",
      },
      fields: [
        {
          name: "alt",
          type: "text",
          required: true,
          admin: {
            description: "Texte alternatif pour l'accessibilité (SEO)",
          },
        },
        {
          name: "caption",
          type: "text",
          admin: {
            description: "Légende de l'image (optionnel)",
          },
        },
      ],
      access: {
        read: () => true,
      },
    },
    Blog,
  ],
  globals: [Home, Studio],
  secret: process.env.PAYLOAD_SECRET || "YOUR_SECRET_HERE",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
