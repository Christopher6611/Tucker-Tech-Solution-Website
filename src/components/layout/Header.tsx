"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  List,
  X,
  Sun,
  Moon,
  MagnifyingGlass,
  CaretDown,
  CaretRight,
} from "@phosphor-icons/react";
import { clsx } from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Services",
    type: "dropdown",
    columns: [
      {
        title: "Development",
        items: [
          { href: "/services/web-development", label: "Website Development" },
          { href: "/services/software-development", label: "Software Development" },
          { href: "/services/web-applications", label: "Web Applications" },
          { href: "/services/mobile-apps", label: "Mobile Apps" },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          { href: "/services/networking", label: "Networking" },
          { href: "/services/structured-cabling", label: "Structured Cabling" },
          { href: "/services/server-installation", label: "Server Installation" },
          { href: "/services/cloud-computing", label: "Cloud Computing" },
          { href: "/services/cybersecurity", label: "Cybersecurity" },
          { href: "/services/cctv", label: "CCTV Installation" },
        ],
      },
      {
        title: "Support & Consulting",
        items: [
          { href: "/services/it-consultancy", label: "IT Consultancy" },
          { href: "/services/technical-support", label: "Technical Support" },
          { href: "/services/computer-repairs", label: "Computer Repairs" },
          { href: "/services/software-installation", label: "Software Installation" },
          { href: "/services/database-design", label: "Database Design" },
          { href: "/services/system-administration", label: "System Administration" },
        ],
      },
      {
        title: "Digital & Creative",
        items: [
          { href: "/services/domain-registration", label: "Domain Registration" },
          { href: "/services/web-hosting", label: "Web Hosting" },
          { href: "/services/email-hosting", label: "Email Hosting" },
          { href: "/services/seo", label: "SEO" },
          { href: "/services/graphic-design", label: "Graphic Design" },
          { href: "/services/printing", label: "Printing Services" },
          { href: "/services/digital-transformation", label: "Digital Transformation" },
        ],
      },
    ],
  },
  {
    label: "Products",
    type: "dropdown",
    columns: [
      {
        title: "Software Solutions",
        items: [
          { href: "/products/school-management", label: "School Management System" },
          { href: "/products/hospital-management", label: "Hospital Management System" },
          { href: "/products/inventory-system", label: "Inventory System" },
          { href: "/products/point-of-sale", label: "Point of Sale" },
          { href: "/products/mining-erp", label: "Mining ERP" },
          { href: "/products/loan-management", label: "Loan Management System" },
          { href: "/products/hr-management", label: "HR Management System" },
        ],
      },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header shadow/background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change (via link click)
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--bg-main)]/90 backdrop-blur-md shadow-header dark:bg-dark-bg/90"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-primary-light)]">
                Tucker
              </span>
              <span className="text-2xl font-light text-[var(--text-body)] dark:text-dark-text">
                Tech Solution
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                if (link.type === "dropdown") {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--text-body)] hover:text-[var(--color-primary)] dark:text-dark-muted dark:hover:text-white transition-colors rounded-lg"
                      >
                        {link.label}
                        <CaretDown size={14} />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-[var(--bg-main)] dark:bg-dark-surface rounded-2xl shadow-card-hover border border-[var(--border-color)] dark:border-dark-border p-6 z-10">
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {link.columns.map((col) => (
                              <div key={col.title}>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                                  {col.title}
                                </h4>
                                <ul className="space-y-2">
                                  {col.items.map((item) => (
                                    <li key={item.href}>
                                      <Link
                                        href={item.href}
                                        className="block text-sm text-[var(--text-body)] dark:text-dark-text hover:text-[var(--color-secondary)] dark:hover:text-[var(--color-secondary-dark)] transition-colors"
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="px-3 py-2 text-sm font-medium text-[var(--text-body)] dark:text-dark-muted hover:text-[var(--color-primary)] dark:hover:text-white transition-colors rounded-lg"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                aria-label="Search"
                className="p-2 text-[var(--text-body)] dark:text-dark-muted hover:text-[var(--color-primary)] dark:hover:text-white transition-colors"
              >
                <MagnifyingGlass size={20} />
              </button>

              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 text-[var(--text-body)] dark:text-dark-muted hover:text-[var(--color-primary)] dark:hover:text-white transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <Link
                href="/request-quote"
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-sm hover:shadow-md"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 text-[var(--text-body)] dark:text-dark-muted"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="p-2"
              >
                <List size={24} className="text-[var(--text-primary)]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[var(--bg-main)] dark:bg-dark-surface shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-[var(--color-primary)]">
                Tucker Tech
              </span>
              <button onClick={closeMobileMenu} aria-label="Close menu">
                <X size={24} className="text-[var(--text-primary)]" />
              </button>
            </div>
            <nav className="space-y-2">
              {navLinks.map((link) => {
                if (link.type === "dropdown") {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex items-center justify-between w-full py-3 text-base font-medium text-[var(--text-primary)]"
                      >
                        {link.label}
                        <CaretDown
                          size={16}
                          className={clsx(
                            "transition-transform",
                            activeDropdown === link.label && "rotate-180"
                          )}
                        />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="pl-4 space-y-3">
                          {link.columns.map((col) => (
                            <div key={col.title}>
                              <h5 className="text-xs uppercase font-semibold text-[var(--text-muted)] mt-3 mb-1">
                                {col.title}
                              </h5>
                              {col.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={closeMobileMenu}
                                  className="block py-1.5 text-sm text-[var(--text-body)] hover:text-[var(--color-primary)] dark:text-dark-muted dark:hover:text-white"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={closeMobileMenu}
                    className="block py-3 text-base font-medium text-[var(--text-primary)] border-b border-[var(--border-color)]"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/request-quote"
                onClick={closeMobileMenu}
                className="block mt-6 w-full text-center bg-[var(--color-accent)] text-white font-semibold py-3 rounded-lg"
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}