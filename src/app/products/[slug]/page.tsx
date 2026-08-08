import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} – Tucker Tech Solution`,
    description: product.tagline,
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {product.tagline}
          </p>
          <Link
            href="/request-quote"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-6">
              Overview
            </h2>
            <p className="text-body text-[var(--text-body)]">{product.description}</p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-2xl flex items-center justify-center">
            <span className="text-[var(--text-muted)]">[Product Screenshot]</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--bg-alt)] dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-h2 text-[var(--text-primary)] text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feat) => (
              <div
                key={feat.title}
                className="bg-[var(--bg-main)] dark:bg-dark-bg rounded-xl p-6 shadow-card"
              >
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                  {feat.title}
                </h3>
                <p className="text-body-sm text-[var(--text-body)]">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-h3 text-[var(--text-primary)] mb-6">Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {product.technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-[var(--bg-alt)] dark:bg-dark-surface rounded-full text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (if available) */}
      {product.pricing && (
        <section className="py-20 bg-[var(--bg-alt)] dark:bg-dark-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-h2 text-[var(--text-primary)] text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {product.pricing.map((plan) => (
                <div
                  key={plan.plan}
                  className="bg-[var(--bg-main)] dark:bg-dark-bg rounded-2xl p-8 shadow-card text-center"
                >
                  <h3 className="text-h4 text-[var(--text-primary)]">{plan.plan}</h3>
                  <p className="text-3xl font-bold text-[var(--color-primary)] my-4">{plan.price}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="text-body-sm text-[var(--text-body)]">{f}</li>
                    ))}
                  </ul>
                  <Link
                    href="/request-quote"
                    className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-h2 text-[var(--text-primary)] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {product.faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-[var(--bg-alt)] dark:bg-dark-surface rounded-xl p-6 shadow-card group"
              >
                <summary className="font-semibold text-[var(--text-primary)] cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[var(--color-secondary)] text-xl ml-4 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-body-sm text-[var(--text-body)] mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-center">
        <h2 className="font-display text-h2 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-white/90 mb-8">
          Request a free demo and see how {product.name} can transform your operations.
        </p>
        <Link
          href="/request-quote"
          className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Request a Demo
        </Link>
      </section>
    </>
  );
}