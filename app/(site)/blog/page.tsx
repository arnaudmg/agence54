import { getPayload } from "payload";
import config from "@/payload.config";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const payload = await getPayload({ config });

  const posts = await payload.find({
    collection: "blog",
    sort: "-publishedDate",
  });

  const homeData = await payload.findGlobal({
    slug: "home",
  });

  return (
    <main className="flex min-h-screen flex-col bg-black pt-24">
      <div className="container mx-auto px-4 md:px-6 py-12 flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tighter">
          Blog
        </h1>
        {posts.docs.length === 0 ? (
          <p className="text-zinc-400">Aucun article pour le moment.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.docs.map((post: any) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="h-full bg-zinc-900/50 border border-white/10 rounded-lg p-6 transition-all duration-300 hover:bg-zinc-900 hover:border-white/20">
                  {post.publishedDate && (
                    <div className="mb-4 text-sm text-zinc-500 font-mono">
                      {new Date(post.publishedDate).toLocaleDateString(
                        "fr-FR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 leading-tight">
                    {post.title}
                  </h2>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer data={homeData.footer} />
    </main>
  );
}
