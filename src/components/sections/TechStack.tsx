const technologies = [
  "React", "Next.js", "Node.js", "Python", "Django",
  "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
  "Cisco", "MikroTik", "Ubuntu", "Windows Server", "MySQL",
  "PostgreSQL", "MongoDB", "Figma", "WordPress",
];

export default function TechStack() {
  return (
    <section className="py-12 bg-[var(--bg-main)] border-y border-[var(--border-color)] dark:border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-6">
          Technologies We Work With
        </p>
        <div className="flex space-x-12 animate-[scroll_30s_linear_infinite]">
          {/* Duplicate the list for seamless loop */}
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-[var(--text-muted)] dark:text-dark-muted font-medium text-lg whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}