import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center – Tucker Tech Solution",
  description: "Get help with technical issues. Browse FAQs, submit a ticket, or contact our support team.",
};

const faqs = [
  { q: "How do I request a service?", a: "Visit our Request a Quote page or call us directly." },
  { q: "What are your business hours?", a: "Monday–Friday: 8 AM – 6 PM, Saturday: 9 AM – 2 PM." },
  { q: "Do you offer remote support?", a: "Yes, we provide remote assistance via TeamViewer or AnyDesk." },
  { q: "How can I track my project?", a: "We will provide a project tracker link once your project starts." },
];

export default function SupportPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
          <p className="text-lg text-white/80">How can we help you?</p>
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="search"
              placeholder="Search FAQs..."
              className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-h3 text-[var(--text-primary)] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-[var(--bg-alt)] dark:bg-dark-surface p-4 rounded-xl shadow-card">
                  <summary className="font-medium text-[var(--text-primary)] cursor-pointer">{faq.q}</summary>
                  <p className="text-sm text-[var(--text-body)] mt-2">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-h3 text-[var(--text-primary)] mb-6">Submit a Ticket</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg bg-transparent text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--color-secondary)]" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg bg-transparent" />
              <select className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg bg-transparent">
                <option>Technical Issue</option>
                <option>Billing</option>
                <option>General Inquiry</option>
              </select>
              <textarea rows={3} placeholder="Describe your issue" className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg bg-transparent resize-none" />
              <button type="submit" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">Submit Ticket</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}