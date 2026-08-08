import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog – Tucker Tech Solution",
  description:
    "Read our latest articles on cybersecurity, cloud computing, software development, digital transformation, and IT trends.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Insights & Updates
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Stay informed with the latest technology trends, expert advice, and company news.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post (first one) */}
          {blogPosts.length > 0 && (
            <div className="mb-16">
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="group block bg-[var(--bg-alt)] dark:bg-dark-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/30 flex items-center justify-center">
                    <span className="text-[var(--text-muted)]">[Featured Image]</span>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                      {blogPosts[0].category}
                    </span>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-body text-[var(--text-body)] mt-3">{blogPosts[0].excerpt}</p>
                    <p className="text-sm text-[var(--text-muted)] mt-4">{blogPosts[0].date}</p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Remaining Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-[var(--bg-alt)] dark:bg-dark-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 flex items-center justify-center">
                  <span className="text-sm text-[var(--text-muted)]">[Image]</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-2">
                    <span className="font-semibold text-[var(--color-secondary)]">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-h4 text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-body-sm text-[var(--text-body)]">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}