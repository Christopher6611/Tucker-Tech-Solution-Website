import Link from "next/link";

const projects = [
  {
    title: "E-Government Portal",
    category: "Web Development",
    image: "/images/projects/project-1.jpg", // Placeholder
    href: "/portfolio/e-government-portal",
  },
  {
    title: "Hospital Management System",
    category: "Software Development",
    image: "/images/projects/project-2.jpg",
    href: "/portfolio/hospital-management",
  },
  {
    title: "University Network Upgrade",
    category: "Networking",
    image: "/images/projects/project-3.jpg",
    href: "/portfolio/university-network",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
            Our Recent Work
          </h2>
          <p className="text-body text-[var(--text-body)] max-w-2xl mx-auto">
            See how we've helped businesses and institutions transform with technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block bg-[var(--bg-alt)] dark:bg-dark-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white/70 text-sm">
                {/* Replace with actual image */}
                [Project Screenshot]
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                  {project.category}
                </span>
                <h3 className="text-h4 text-[var(--text-primary)] mt-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-secondary)] mt-3 font-medium">
                  View Case Study →
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}