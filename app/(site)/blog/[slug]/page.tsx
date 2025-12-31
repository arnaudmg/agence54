import { getPayload } from "payload";
import config from "@/payload.config";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import { RichText } from "@/components/ui/RichText";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const posts = await payload.find({
    collection: "blog",
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  });

  if (!posts.docs.length) {
    return { title: "Article non trouvé" };
  }

  const post = posts.docs[0];
  const featuredImage = post.featuredImage as any;

  return {
    title: `${post.title} | Blog 54BCN`,
    description: post.excerpt || `Découvrez "${post.title}" sur le blog de 54BCN.`,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: "article",
      publishedTime: post.publishedDate || undefined,
      images: featuredImage?.url ? [{ url: featuredImage.url }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const posts = await payload.find({
    collection: "blog",
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  });

  if (!posts.docs.length) {
    notFound();
  }

  const post = posts.docs[0];
  const featuredImage = post.featuredImage as any;
  
  const homeData = await payload.findGlobal({
    slug: "home",
  });

  return (
    <main className="flex min-h-screen flex-col bg-black pt-24">
      <article className="flex-grow">
        {/* Header */}
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>

          <header className="mb-8">
            {post.publishedDate && (
              <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-zinc-400 mt-6 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>
        </div>

        {/* Featured Image */}
        {featuredImage?.url && (
          <div className="w-full mb-12">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
              <div className="relative aspect-video overflow-hidden border border-zinc-800">
                <Image
                  src={featuredImage.url}
                  alt={featuredImage.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </div>
              {featuredImage.caption && (
                <p className="text-center text-sm text-zinc-500 mt-3 italic">
                  {featuredImage.caption}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 max-w-4xl pb-16">
          <div className="prose prose-invert prose-lg max-w-none">
            <RichText data={post.content as any} />
          </div>
        </div>
      </article>

      <Footer data={homeData.footer} />
    </main>
  );
}
