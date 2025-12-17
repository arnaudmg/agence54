import { getPayload } from "payload";
import config from "@/payload.config";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { RichText } from "@/components/ui/RichText";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const posts = await payload.find({
    collection: "blog",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  if (!posts.docs.length) {
    notFound();
  }

  const post = posts.docs[0];
  const homeData = await payload.findGlobal({
    slug: "home",
  });

  return (
    <main className="flex min-h-screen flex-col bg-black pt-24">
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl flex-grow">
        <Link
          href="/blog"
          className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour aux articles
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tighter">
              {post.title}
            </h1>
            {post.publishedDate && (
              <div className="text-zinc-500 font-mono">
                {new Date(post.publishedDate).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            )}
          </header>

          <div className="prose">
            <RichText data={post.content as any} />
          </div>
        </article>
      </div>
      <Footer data={homeData.footer} />
    </main>
  );
}
