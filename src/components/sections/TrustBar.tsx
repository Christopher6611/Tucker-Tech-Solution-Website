// Partner logos (placeholder text for now – replace with actual logos later)
const partners = [
  "Government Agency",
  "University of SL",
  "NGO Alliance",
  "Mining Corp",
  "Financial Bank",
  "Healthcare Plus",
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-8">
          Trusted by Leading Organisations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((name) => (
            <div
              key={name}
              className="text-[var(--text-muted)] dark:text-dark-muted font-semibold text-lg opacity-70 hover:opacity-100 transition-opacity cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}