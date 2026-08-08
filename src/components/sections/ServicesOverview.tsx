"use client";

import { useState } from "react";
import Link from "next/link";
import { Code, Cloud, Headset, Palette } from "@phosphor-icons/react";

// Re-use the same categories as in the header (simplified for homepage)
const categories = [
  {
    id: "development",
    label: "Development",
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
    label: "Infrastructure",
    icon: Cloud,
    services: [
      { title: "Networking", href: "/services/networking" },
      { title: "Cloud Computing", href: "/services/cloud-computing" },
      { title: "Cybersecurity", href: "/services/cybersecurity" },
      { title: "CCTV Installation", href: "/services/cctv" },
    ],
  },
  {
    id: "support",
    label: "Support & Consulting",
    icon: Headset,
    services: [
      { title: "IT Consultancy", href: "/services/it-consultancy" },
      { title: "Technical Support", href: "/services/technical-support" },
      { title: "Computer Repairs", href: "/services/computer-repairs" },
      { title: "Database Design", href: "/services/database-design" },
    ],
  },
  {
    id: "digital",
    label: "Digital & Creative",
    icon: Palette,
    services: [
      { title: "Domain Registration", href: "/services/domain-registration" },
      { title: "Web Hosting", href: "/services/web-hosting" },
      { title: "SEO", href: "/services/seo" },
      { title: "Graphic Design", href: "/services/graphic-design" },
    ],
  },
];

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section className="py-20 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
            Everything IT, Under One Roof
          </h2>
          <p className="text-body text-[var(--text-body)] max-w-2xl mx-auto">
            Explore our comprehensive range of services tailored to your needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === cat.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--bg-alt)] text-[var(--text-body)] hover:bg-gray-100 dark:bg-dark-surface dark:text-dark-muted dark:hover:bg-dark-border"
              }`}
            >
              <cat.icon size={20} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service grid for active tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories
            .find((c) => c.id === activeTab)
            ?.services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block bg-[var(--bg-alt)] dark:bg-dark-surface rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-transparent hover:border-[var(--color-primary)]"
              >
                <h3 className="text-h4 text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-body-sm text-[var(--text-muted)]">
                  Learn more →
                </p>
              </Link>
            ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}