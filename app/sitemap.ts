import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@/payload.config";

export const revalidate = 600; // refresh sitemap every 10 minutes

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const payload = await getPayload({ config });

  const items: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/studio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ];

  // Fetch ALL published blog posts (paginate to avoid missing anything)
  const limit = 100;
  let page = 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const res = await payload.find({
      collection: "blog",
      limit,
      page,
      sort: "-publishedDate",
      where: {
        status: { equals: "published" },
      },
    });

    for (const post of res.docs as any[]) {
      if (!post?.slug) continue;

      const lastModified =
        post.updatedAt || post.publishedDate || post.createdAt || undefined;

      items.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: lastModified ? new Date(lastModified) : undefined,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    if (!res.hasNextPage) break;
    page = res.nextPage ?? page + 1;
  }

  return items;
}

