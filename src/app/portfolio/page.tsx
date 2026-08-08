import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio – Tucker Tech Solution",
  description:
    "Explore our completed projects: websites, software, networking, and IT solutions for clients across industries.",
};

// Filter categories (can be extended)
const categories = ["All", "Web Development", "Software Development", "Networking"];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            See how we've helped businesses and institutions transform with
            technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter buttons (static for now; client-side filtering can be added later) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-medium border border-[var(--border-color)] text-[var(--text-body)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group block bg-[var(--bg-alt)] dark:bg-dark-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/30 flex items-center justify-center text-sm text-[var(--text-muted)] relative overflow-hidden">
                  {/* Placeholder for project image */}
                  <span>[{project.title} Screenshot]</span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--color-primary)]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">View Case Study →</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                    {project.category}
                  </span>
                  <h3 className="text-h4 text-[var(--text-primary)] mt-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-[var(--text-body)] mt-1">
                    {project.client}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--bg-alt)] dark:bg-dark-surface text-center">
        <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
          Start Your Project Today
        </h2>
        <p className="text-body text-[var(--text-body)] mb-8">
          Let's discuss how we can help you achieve similar results.
        </p>
        <Link
          href="/request-quote"
          className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Request a Quote
        </Link>
      </section>
    </>
  );
}