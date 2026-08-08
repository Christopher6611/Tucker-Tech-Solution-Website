import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found" };
  return { title: `${industry.title} Solutions – Tucker Tech Solution` };
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {industry.title} Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">{industry.description}</p>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-h2 text-[var(--text-primary)] mb-6">Relevant Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.services.map((serviceSlug) => (
              <Link
                key={serviceSlug}
                href={`/services/${serviceSlug}`}
                className="bg-[var(--bg-alt)] dark:bg-dark-surface rounded-xl p-4 shadow-card hover:shadow-card-hover transition"
              >
                <p className="font-medium text-[var(--text-primary)] capitalize">{serviceSlug.replace(/-/g, " ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {industry.caseStudySlug && (
        <section className="py-16 bg-[var(--bg-alt)] dark:bg-dark-surface text-center">
          <p className="text-body text-[var(--text-body)] mb-4">See how we helped a client in this industry.</p>
          <Link
            href={`/portfolio/${industry.caseStudySlug}`}
            className="inline-block bg-[var(--color-accent)] text-white font-semibold px-6 py-3 rounded-lg"
          >
            View Case Study
          </Link>
        </section>
      )}
    </>
  );
}