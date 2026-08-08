import { Phone, Envelope, WhatsappLogo, MapPin } from "@phosphor-icons/react/dist/ssr";

export default function QuickContact() {
  return (
    <section className="py-16 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – contact details */}
          <div>
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[var(--color-secondary)]" />
                <span className="text-body">+232 76 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Envelope size={20} className="text-[var(--color-secondary)]" />
                <span className="text-body">info@tuckertechsolution.com</span>
              </div>
              <div className="flex items-center gap-3">
                <WhatsappLogo size={20} className="text-[var(--color-secondary)]" />
                <span className="text-body">+232 76 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[var(--color-secondary)]" />
                <span className="text-body">123 Wilkinson Road, Freetown, Sierra Leone</span>
              </div>
            </div>
          </div>

          {/* Right – quick contact form */}
          <div className="bg-[var(--bg-main)] dark:bg-dark-surface rounded-2xl p-8 shadow-card">
            <h3 className="text-h4 text-[var(--text-primary)] mb-4">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-body)] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg bg-transparent text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-body)] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg bg-transparent text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-body)] mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-lg bg-transparent text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}