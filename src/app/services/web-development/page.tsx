import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Devices,
  Lightning,
  MagnifyingGlass,
  Code,
  Database,
  PaintBrush,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Website Development – Tucker Tech Solution",
  description:
    "Custom, responsive websites that drive growth. Expert web development services including design, SEO, and maintenance.",
};

const benefits = [
  {
    icon: Devices,
    title: "Fully Responsive",
    desc: "Your website will look and perform perfectly on mobile, tablet, and desktop.",
  },
  {
    icon: Lightning,
    title: "Fast Loading",
    desc: "Optimised for speed to reduce bounce rates and improve user experience.",
  },
  {
    icon: MagnifyingGlass,
    title: "SEO-Friendly",
    desc: "Built with search engine best practices to help customers find you.",
  },
  {
    icon: PaintBrush,
    title: "Beautiful Design",
    desc: "Custom UI/UX that reflects your brand and converts visitors into customers.",
  },
];

const features = [
  "Custom design tailored to your brand identity",
  "Content Management System (CMS) integration",
  "E-commerce functionality (if needed)",
  "Contact forms and lead generation tools",
  "Blog and news sections",
  "Social media integration",
  "Analytics and tracking setup",
  "Security hardening and SSL certificates",
  "Ongoing maintenance and support",
];

const techIcons = ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "WordPress", "PHP", "MySQL", "Tailwind CSS"];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A standard business website typically takes 2–4 weeks, depending on complexity. E-commerce or custom web apps may take longer.",
  },
  {
    q: "Do you provide hosting and domain registration?",
    a: "Yes, we offer complete hosting solutions, domain registration, and professional email hosting as part of our service.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Absolutely. We can refresh your current site with a modern design, improved functionality, and better performance.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "All our websites are built mobile-first and tested across multiple devices to ensure a seamless experience.",
  },
];

const relatedIndustries = [
  { name: "Education", href: "/industries/education" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Finance", href: "/industries/finance" },
];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe size={48} className="mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Website Development
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Modern, high-performing websites that convert visitors into
            customers. We design and develop sites that grow your business.
          </p>
          <Link
            href="/request-quote"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-6">
              Your Digital Storefront
            </h2>
            <p className="text-body text-[var(--text-body)] mb-4">
              Your website is often the first impression customers have of your
              business. We create fast, beautiful, and user-friendly websites
              that reflect your brand and drive results.
            </p>
            <p className="text-body text-[var(--text-body)]">
              From simple landing pages to complex e-commerce platforms, our
              experienced developers deliver solutions tailored to your specific
              goals and budget.
            </p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-2xl flex items-center justify-center">
            <span className="text-lg text-[var(--text-muted)]">
              [Website Mockup Image]
            </span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[var(--bg-alt)] dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-h2 text-[var(--text-primary)] text-center mb-12">
            Benefits of Our Websites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <b.icon size={32} className="text-[var(--color-secondary)] mx-auto mb-3" />
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                  {b.title}
                </h3>
                <p className="text-body-sm text-[var(--text-body)]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-h2 text-[var(--text-primary)] text-center mb-12">
            What's Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <Code size={20} className="text-[var(--color-secondary)] mt-0.5" />
                <span className="text-body text-[var(--text-body)]">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-[var(--bg-alt)] dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-h2 text-[var(--text-primary)] mb-8">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {techIcons.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-[var(--bg-main)] dark:bg-dark-bg rounded-full text-sm font-medium text-[var(--text-body)] shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-h2 text-[var(--text-primary)] mb-8">
            Who We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedIndustries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="px-6 py-3 border border-[var(--border-color)] rounded-full text-sm font-medium text-[var(--text-body)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-alt)] dark:bg-dark-surface">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-h2 text-[var(--text-primary)] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-[var(--bg-main)] dark:bg-dark-bg rounded-xl p-6 shadow-card group"
              >
                <summary className="font-semibold text-[var(--text-primary)] cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[var(--color-secondary)] text-xl ml-4 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-body-sm text-[var(--text-body)] mt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-center">
        <h2 className="font-display text-h2 mb-4">
          Ready to Launch Your Website?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Let's create a stunning online presence for your business.
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