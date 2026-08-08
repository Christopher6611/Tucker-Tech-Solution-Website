import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[#0A2F6E] to-[var(--color-secondary)] dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg">
      {/* Animated mesh overlay (CSS) */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,188,212,0.4),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,152,0,0.3),transparent_50%)] animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
          Empowering Your Digital Future.
          <br />
          <span className="text-[var(--color-secondary)] dark:text-[var(--color-secondary-dark)]">
            Engineered for Growth.
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
          From startups to enterprises, we deliver comprehensive IT solutions that
          drive results. Websites, software, networking, cloud &amp; more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "400ms" }}>
          <Link
            href="/request-quote"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg text-button transition-all shadow-lg hover:shadow-xl"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="inline-block border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-button transition-all backdrop-blur-sm hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}