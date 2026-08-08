import { ShieldCheck, Gear, Headset, ChartLineUp } from "@phosphor-icons/react/dist/ssr";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description:
      "Over a decade of experience delivering enterprise‑grade technology to businesses of every size.",
  },
  {
    icon: Gear,
    title: "Tailored Solutions",
    description:
      "We don’t believe in one‑size‑fits‑all. Every solution is crafted to meet your unique goals.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always ready to help, day or night, to keep your operations running.",
  },
  {
    icon: ChartLineUp,
    title: "Proven Results",
    description:
      "We measure our success by your growth. See real results from our portfolio of 150+ completed projects.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
            Why Choose Tucker Tech Solution?
          </h2>
          <p className="text-body text-[var(--text-body)] max-w-2xl mx-auto">
            We combine innovation, reliability, and a personal touch to deliver IT services that truly empower your organisation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-[var(--bg-main)] dark:bg-dark-surface rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-[var(--border-color)] dark:border-dark-border"
            >
              <item.icon size={32} className="text-[var(--color-secondary)] mb-4" weight="duotone" />
              <h3 className="text-h4 text-[var(--text-primary)] mb-3">{item.title}</h3>
              <p className="text-body-sm text-[var(--text-body)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}