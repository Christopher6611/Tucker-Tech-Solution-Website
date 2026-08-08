import { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Software Products – Tucker Tech Solution",
  description:
    "Explore our ready-made software solutions: School Management, Hospital Management, POS, Inventory, Mining ERP, Loan Management, HR System.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Software Products
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Purpose‑built solutions that solve real business problems. Ready to deploy, easy to customize.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group block bg-[var(--bg-alt)] dark:bg-dark-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/30 flex items-center justify-center text-sm text-[var(--text-muted)]">
                  [{product.name} Screenshot]
                </div>
                <div className="p-6">
                  <h3 className="text-h4 text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-body-sm text-[var(--text-body)]">{product.tagline}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-[var(--color-secondary)]">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}