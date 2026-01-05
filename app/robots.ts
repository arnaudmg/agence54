import type { MetadataRoute } from "next";

function getSiteUrl(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_URL;

  if (!fromEnv) return "http://localhost:3000";
  if (fromEnv.startsWith("http://") || fromEnv.startsWith("https://"))
    return fromEnv.replace(/\/$/, "");
  return `https://${fromEnv}`.replace(/\/$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

