import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-display text-h2 mb-4">
          Let's Build Something Great Together
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Ready to transform your business with technology? Our team is standing by to discuss your project.
        </p>
        <Link
          href="/request-quote"
          className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg text-button transition-all shadow-lg hover:shadow-xl"
        >
          Schedule a Free Consultation
        </Link>
      </div>
    </section>
  );
}