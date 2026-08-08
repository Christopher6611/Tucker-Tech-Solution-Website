import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} – Tucker Tech Solution`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm uppercase tracking-wider text-[var(--color-secondary)] font-semibold">
            {project.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{project.client}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-6">
              Project Overview
            </h2>
            <p className="text-body text-[var(--text-body)]">{project.description}</p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-2xl flex items-center justify-center">
            <span className="text-[var(--text-muted)]">[Project Screenshot]</span>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-[var(--bg-alt)] dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-h3 text-[var(--text-primary)] mb-4">The Challenge</h3>
            <p className="text-body text-[var(--text-body)]">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-h3 text-[var(--text-primary)] mb-4">Our Solution</h3>
            <p className="text-body text-[var(--text-body)]">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-h2 text-[var(--text-primary)] mb-10">Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {project.results.map((result, i) => (
              <div key={i} className="p-6 bg-[var(--bg-alt)] dark:bg-dark-surface rounded-xl shadow-card">
                <p className="text-lg font-semibold text-[var(--text-primary)]">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-[var(--bg-alt)] dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-h3 text-[var(--text-primary)] mb-6">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-[var(--bg-main)] dark:bg-dark-bg rounded-full text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 bg-[var(--bg-main)] dark:bg-dark-bg">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-xl italic text-[var(--text-body)] mb-4">
              “{project.testimonial.quote}”
            </p>
            <p className="font-semibold text-[var(--text-primary)]">
              {project.testimonial.name}
            </p>
            <p className="text-sm text-[var(--text-muted)]">{project.testimonial.role}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-center">
        <h2 className="font-display text-h2 mb-4">Want a Similar Result?</h2>
        <a
          href="/request-quote"
          className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Start Your Project
        </a>
      </section>
    </>
  );
}