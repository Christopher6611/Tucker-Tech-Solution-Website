import { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries Served – Tucker Tech Solution",
  description: "We provide IT solutions for education, healthcare, government, finance, mining, and many more industries.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Tailored technology solutions for diverse sectors. We understand your unique challenges.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group block bg-[var(--bg-alt)] dark:bg-dark-surface rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            >
              <h3 className="text-h4 text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-3">
                {ind.title}
              </h3>
              <p className="text-body-sm text-[var(--text-body)]">{ind.description.slice(0, 100)}...</p>
              <span className="inline-block mt-4 text-sm font-semibold text-[var(--color-secondary)]">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}