import Link from "next/link";

const posts = [
  {
    title: "5 Cybersecurity Threats Every Business Should Know in 2026",
    date: "12 Jan 2026",
    category: "Cybersecurity",
    excerpt: "Stay ahead of attackers with these essential security practices.",
    href: "/blog/cybersecurity-threats-2026",
  },
  {
    title: "Why Cloud Migration is No Longer Optional for SMEs",
    date: "03 Jan 2026",
    category: "Cloud Computing",
    excerpt: "Learn how moving to the cloud can reduce costs and boost productivity.",
    href: "/blog/cloud-migration-smes",
  },
  {
    title: "How Custom Software Can Streamline Your Operations",
    date: "28 Dec 2025",
    category: "Software Development",
    excerpt: "Off-the-shelf solutions often fall short. Discover the power of custom development.",
    href: "/blog/custom-software-benefits",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
            Insights & Updates
          </h2>
          <p className="text-body text-[var(--text-body)] max-w-2xl mx-auto">
            Stay informed with the latest technology trends and expert advice.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group block bg-[var(--bg-alt)] dark:bg-dark-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 flex items-center justify-center text-sm text-[var(--text-muted)]">
                [Blog Image]
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-2">
                  <span className="font-semibold text-[var(--color-secondary)]">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-h4 text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-sm text-[var(--text-body)]">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </section>
  );
}