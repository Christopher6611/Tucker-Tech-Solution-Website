import { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Cloud,
  Headset,
  Palette,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Our Services – Tucker Tech Solution",
  description:
    "Comprehensive IT services: website development, software, networking, cloud, cybersecurity, IT consulting, graphic design, and more.",
};

const serviceCategories = [
  {
    id: "development",
    title: "Development",
    icon: Code,
    services: [
      { title: "Website Development", href: "/services/web-development" },
      { title: "Software Development", href: "/services/software-development" },
      { title: "Web Applications", href: "/services/web-applications" },
      { title: "Mobile Apps", href: "/services/mobile-apps" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: Cloud,
    services: [
      { title: "Networking", href: "/services/networking" },
      { title: "Cloud Computing", href: "/services/cloud-computing" },
      { title: "Cybersecurity", href: "/services/cybersecurity" },
      { title: "CCTV Installation", href: "/services/cctv" },
      { title: "Structured Cabling", href: "/services/structured-cabling" },
      { title: "Server Installation", href: "/services/server-installation" },
    ],
  },
  {
    id: "support",
    title: "Support & Consulting",
    icon: Headset,
    services: [
      { title: "IT Consultancy", href: "/services/it-consultancy" },
      { title: "Technical Support", href: "/services/technical-support" },
      { title: "Computer Repairs", href: "/services/computer-repairs" },
      { title: "Software Installation", href: "/services/software-installation" },
      { title: "Database Design", href: "/services/database-design" },
      { title: "System Administration", href: "/services/system-administration" },
    ],
  },
  {
    id: "digital",
    title: "Digital & Creative",
    icon: Palette,
    services: [
      { title: "Domain Registration", href: "/services/domain-registration" },
      { title: "Web Hosting", href: "/services/web-hosting" },
      { title: "Email Hosting", href: "/services/email-hosting" },
      { title: "SEO", href: "/services/seo" },
      { title: "Graphic Design", href: "/services/graphic-design" },
      { title: "Printing Services", href: "/services/printing" },
      { title: "Digital Transformation", href: "/services/digital-transformation" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Everything IT, Under One Roof. Explore our comprehensive range of
            professional technology solutions.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((cat, idx) => (
        <section
          key={cat.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-[var(--bg-main)]" : "bg-[var(--bg-alt)]"} dark:bg-dark-bg dark:bg-dark-surface`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <cat.icon size={32} className="text-[var(--color-secondary)]" />
              <h2 className="font-display text-h2 text-[var(--text-primary)]">
                {cat.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block bg-[var(--bg-main)] dark:bg-dark-surface rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-[var(--border-color)] dark:border-dark-border"
                >
                  <h3 className="text-h4 text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--color-secondary)] font-medium">
                    Learn more →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-[var(--bg-main)] dark:bg-dark-bg text-center">
        <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-body text-[var(--text-body)] mb-8">
          Not sure what you need? Let's discuss your project.
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