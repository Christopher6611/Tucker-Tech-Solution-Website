import { Metadata } from "next";
import {
  Phone,
  Envelope,
  MapPin,
  WhatsappLogo,
  Clock,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact Us – Tucker Tech Solution",
  description:
    "Get in touch with Tucker Tech Solution. Call, email, WhatsApp, or visit our office in Freetown, Sierra Leone.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-h3 text-[var(--text-primary)] mb-6">
                Send a Message
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-body)] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] dark:border-dark-border rounded-lg bg-transparent text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-body)] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] dark:border-dark-border rounded-lg bg-transparent text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-body)] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-[var(--border-color)] dark:border-dark-border rounded-lg bg-transparent text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                    placeholder="+232 76 123 456"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-body)] mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] dark:border-dark-border rounded-lg bg-transparent text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-body)] mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] dark:border-dark-border rounded-lg bg-transparent text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-h3 text-[var(--text-primary)] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone size={22} className="text-[var(--color-secondary)] mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Phone</p>
                      <p className="text-body-sm text-[var(--text-body)]">+232 76 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Envelope size={22} className="text-[var(--color-secondary)] mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Email</p>
                      <p className="text-body-sm text-[var(--text-body)]">
                        info@tuckertechsolution.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <WhatsappLogo size={22} className="text-[var(--color-secondary)] mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">WhatsApp</p>
                      <p className="text-body-sm text-[var(--text-body)]">+232 76 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={22} className="text-[var(--color-secondary)] mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Address</p>
                      <p className="text-body-sm text-[var(--text-body)]">
                        123 Wilkinson Road, Freetown, Sierra Leone
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={22} className="text-[var(--color-secondary)] mt-0.5" />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Business Hours</p>
                      <p className="text-body-sm text-[var(--text-body)]">
                        Monday – Friday: 8:00 AM – 6:00 PM
                      </p>
                      <p className="text-body-sm text-[var(--text-body)]">Saturday: 9:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-card h-64 bg-[var(--bg-alt)] dark:bg-dark-surface">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.454974871708!2d-13.234567!3d8.465678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjcnNTYuNCJOIDEzwrAxNCcwNC40Ilc!5e0!3m2!1sen!2s!4v1690000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}