import Link from "next/link";
import { GraduationCap, Storefront, Package } from "@phosphor-icons/react/dist/ssr";

const products = [
  {
    name: "School Management System",
    icon: GraduationCap,
    description: "Attendance, grading, timetable, and fee management for schools of all sizes.",
    href: "/products/school-management",
  },
  {
    name: "Point of Sale",
    icon: Storefront,
    description: "Fast, reliable POS for retail stores, restaurants, and supermarkets.",
    href: "/products/point-of-sale",
  },
  {
    name: "Inventory System",
    icon: Package,
    description: "Track stock, automate ordering, and manage warehouses efficiently.",
    href: "/products/inventory-system",
  },
];

export default function LatestProducts() {
  return (
    <section className="py-20 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
            Innovative Software Solutions
          </h2>
          <p className="text-body text-[var(--text-body)] max-w-2xl mx-auto">
            Purpose-built software products designed to solve real business problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group block bg-[var(--bg-main)] dark:bg-dark-surface rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border border-[var(--border-color)] dark:border-dark-border"
            >
              <product.icon size={40} className="text-[var(--color-secondary)] mb-4" weight="duotone" />
              <h3 className="text-h4 text-[var(--text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                {product.name}
              </h3>
              <p className="text-body-sm text-[var(--text-body)]">{product.description}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-[var(--color-secondary)]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}