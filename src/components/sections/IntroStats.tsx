"use client";

import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "", label: "Years Experience" },
];

export default function IntroStats() {
  return (
    <section className="py-20 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column – text */}
          <div>
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-6">
              Technology That Moves Your Business Forward
            </h2>
            <p className="text-body text-[var(--text-body)] mb-6 leading-relaxed">
              Tucker Tech Solution is a full‑service technology company dedicated to
              helping businesses, governments, and institutions thrive in the digital
              age. We combine deep technical expertise with a genuine commitment to
              your success.
            </p>
            <p className="text-body text-[var(--text-body)]">
              From custom software to network infrastructure, our team of certified
              engineers delivers reliable, scalable solutions that make a real
              difference.
            </p>
          </div>

          {/* Right column – counters */}
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="space-y-2">
      <span className="block font-display text-4xl md:text-5xl font-bold text-[var(--color-primary)] dark:text-[var(--color-primary-light)]">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-[var(--text-muted)]">{label}</span>
    </div>
  );
}