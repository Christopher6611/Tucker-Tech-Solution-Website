import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} – Tucker Tech Solution`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm uppercase tracking-wider text-[var(--color-secondary)] font-semibold">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-white/70">{post.date}</p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-[var(--text-primary)]
              prose-p:text-[var(--text-body)]
              prose-a:text-[var(--color-secondary)]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Back to Blog */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-medium transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </>
  );
}