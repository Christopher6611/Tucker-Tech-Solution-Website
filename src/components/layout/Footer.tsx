import Link from "next/link";
import {
  Phone,
  Envelope,
  MapPin,
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";

const serviceLinks = [
  { href: "/services/web-development", label: "Website Development" },
  { href: "/services/software-development", label: "Software Development" },
  { href: "/services/networking", label: "Networking" },
  { href: "/services/cloud-computing", label: "Cloud Computing" },
  { href: "/services/cybersecurity", label: "Cybersecurity" },
  { href: "/services/it-consultancy", label: "IT Consultancy" },
  { href: "/services/technical-support", label: "Technical Support" },
];

const industryLinks = [
  { href: "/industries/education", label: "Education" },
  { href: "/industries/healthcare", label: "Healthcare" },
  { href: "/industries/government", label: "Government" },
  { href: "/industries/finance", label: "Finance" },
  { href: "/industries/retail", label: "Retail" },
  { href: "/industries/mining", label: "Mining" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Support Center" },
  { href: "/request-quote", label: "Request a Quote" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-alt)] dark:bg-dark-surface border-t border-[var(--border-color)] dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 – Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-primary-light)]">
                Tucker
              </span>
              <span className="text-2xl font-light text-[var(--text-body)] dark:text-dark-text">
                Tech Solution
              </span>
            </Link>
            <p className="text-body-sm text-[var(--text-body)] dark:text-dark-muted mb-4">
              Professional IT solutions for businesses, government, and
              institutions. Empowering your digital future.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="Twitter"
              >
                <TwitterLogo size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 – Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] dark:text-dark-text mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--text-body)] dark:text-dark-muted hover:text-[var(--color-primary)] dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Industries */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] dark:text-dark-text mb-4">
              Industries
            </h4>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--text-body)] dark:text-dark-muted hover:text-[var(--color-primary)] dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] dark:text-dark-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--text-body)] dark:text-dark-muted hover:text-[var(--color-primary)] dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 – Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] dark:text-dark-text mb-4">
              Newsletter
            </h4>
            <p className="text-body-sm text-[var(--text-body)] dark:text-dark-muted mb-4">
              Subscribe for tech insights and company updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2.5 border border-[var(--border-color)] dark:border-dark-border rounded-lg bg-[var(--bg-main)] dark:bg-dark-bg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] text-sm"
                required
              />
              <button
                type="submit"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border-color)] dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Tucker Tech Solution. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}