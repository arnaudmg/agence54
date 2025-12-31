import { getPayload } from "payload";
import config from "@/payload.config";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | 54BCN - Conseils Personal Branding & Podcast",
  description: "Découvrez nos articles sur le personal branding, la création de podcasts et la stratégie de contenu vidéo pour entrepreneurs.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const payload = await getPayload({ config });

  const posts = await payload.find({
    collection: "blog",
    sort: "-publishedDate",
    where: {
      status: {
        equals: "published",
      },
    },
  });

  const homeData = await payload.findGlobal({
    slug: "home",
  });

  return (
    <main className="flex min-h-screen flex-col bg-black pt-24">
      <div className="container mx-auto px-4 md:px-6 py-12 flex-grow">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">
            Blog
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Nos derniers articles<span className="text-zinc-500">.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Conseils, stratégies et insights sur le personal branding, les podcasts et la création de contenu vidéo.
          </p>
        </div>

        {posts.docs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">Aucun article publié pour le moment.</p>
            <p className="text-zinc-600 mt-2">Revenez bientôt !</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.docs.map((post: any) => {
              const featuredImage = post.featuredImage as any;
              
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="h-full bg-black border border-zinc-800 transition-all duration-300 hover:border-zinc-700 overflow-hidden flex flex-col">
                    {/* Image */}
                    {featuredImage?.url ? (
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={featuredImage.sizes?.card?.url || featuredImage.url}
                          alt={featuredImage.alt || post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    ) : (
                      <div className="aspect-video bg-zinc-900 flex items-center justify-center">
                        <span className="text-zinc-700 text-sm">Pas d'image</span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {post.publishedDate && (
                        <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
                          <Calendar className="w-3 h-3" />
                          <time dateTime={post.publishedDate}>
                            {new Date(post.publishedDate).toLocaleDateString("fr-FR", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 leading-tight tracking-tight">
                        {post.title}
                      </h3>

                      {post.excerpt && (
                        <p className="text-zinc-500 text-sm line-clamp-2 mb-4 flex-1">
                          {post.excerpt}
                        </p>
                      )}

                      <div className="flex items-center text-white text-sm font-medium mt-auto pt-4 border-t border-zinc-800 group-hover:text-zinc-300">
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <Footer data={homeData.footer} />
    </main>
  );
}
