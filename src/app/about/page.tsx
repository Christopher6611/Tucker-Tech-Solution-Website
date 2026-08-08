import { Metadata } from "next";
import {
  Lightbulb,
  Heart,
  ShieldCheck,
  Gear,
  Handshake,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About Us – Tucker Tech Solution",
  description:
    "Learn about Tucker Tech Solution's mission, vision, core values, and our journey to becoming a trusted technology partner.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new ideas and cutting-edge technology to solve real‑world problems.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Honesty, transparency, and ethical conduct guide every decision we make.",
  },
  {
    icon: ShieldCheck,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, ensuring quality in every project.",
  },
  {
    icon: Gear,
    title: "Reliability",
    description:
      "When you partner with us, you can count on us to deliver on time, every time.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Your success is our success. We work closely with you to achieve your goals.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We listen to your needs and analyse your challenges.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our experts craft a tailored solution just for you.",
  },
  {
    number: "03",
    title: "Develop",
    description: "We build, test, and refine your solution with agile methods.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    description: "We launch your solution and provide ongoing maintenance.",
  },
];

const leadership = [
  {
    name: "John Tucker",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years in IT infrastructure and digital transformation.",
    image: "/images/team/ceo.jpg",
  },
  {
    name: "Mary Kamara",
    role: "CTO",
    bio: "Full‑stack architect and cloud expert, passionate about scalable solutions.",
    image: "/images/team/cto.jpg",
  },
  {
    name: "David Sesay",
    role: "Head of Operations",
    bio: "Ensuring smooth delivery and client satisfaction across all projects.",
    image: "/images/team/ops.jpg",
  },
  {
    name: "Fatima Bangura",
    role: "Lead Designer",
    bio: "Creative mind behind user experiences that delight and convert.",
    image: "/images/team/design.jpg",
  },
];

const timeline = [
  { year: "2014", event: "Founded in Freetown, Sierra Leone" },
  { year: "2016", event: "Completed first government contract" },
  { year: "2018", event: "Expanded to cloud and cybersecurity" },
  { year: "2020", event: "Launched School Management System" },
  { year: "2023", event: "Reached 150+ projects across 10 countries" },
  { year: "2026", event: "Awarded Top IT Firm in Sierra Leone" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Tucker Tech Solution
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            A dedicated team of technologists committed to driving your digital
            success.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-h2 text-[var(--text-primary)] mb-6">
                Our Story
              </h2>
              <p className="text-body text-[var(--text-body)] mb-4">
                Tucker Tech Solution began in 2014 with a simple idea: technology
                should be accessible, reliable, and empowering for every
                organisation in Sierra Leone and beyond.
              </p>
              <p className="text-body text-[var(--text-body)] mb-4">
                What started as a small IT support shop has grown into a
                full‑service technology company trusted by government ministries,
                universities, hospitals, and businesses across Africa.
              </p>
              <p className="text-body text-[var(--text-body)]">
                Today, our team of certified engineers and developers delivers
                world‑class websites, custom software, network infrastructure,
                cloud solutions, and cybersecurity – all under one roof.
              </p>
            </div>
            <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-2xl flex items-center justify-center">
              <span className="text-lg text-[var(--text-muted)]">
                [Company Photo / Office Image]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--bg-alt)] dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[var(--bg-main)] dark:bg-dark-bg rounded-2xl p-10 shadow-card">
              <h2 className="font-display text-h3 text-[var(--color-primary)] dark:text-[var(--color-primary-light)] mb-4">
                Our Mission
              </h2>
              <p className="text-body text-[var(--text-body)]">
                To bridge the gap between ambition and technology by providing
                reliable, innovative IT solutions that accelerate growth.
              </p>
            </div>
            <div className="bg-[var(--bg-main)] dark:bg-dark-bg rounded-2xl p-10 shadow-card">
              <h2 className="font-display text-h3 text-[var(--color-primary)] dark:text-[var(--color-primary-light)] mb-4">
                Our Vision
              </h2>
              <p className="text-body text-[var(--text-body)]">
                To be the most trusted technology partner in Africa, known for
                transforming organisations through digital excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
              Our Core Values
            </h2>
            <p className="text-body text-[var(--text-body)] max-w-2xl mx-auto">
              The principles that guide every project and interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-[var(--bg-alt)] dark:bg-dark-surface rounded-xl p-6 text-center hover:shadow-card-hover transition-shadow"
              >
                <v.icon size={36} className="text-[var(--color-secondary)] mx-auto mb-3" />
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                  {v.title}
                </h3>
                <p className="text-body-sm text-[var(--text-body)]">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-h2 mb-4">Why We Exist</h2>
          <p className="text-lg md:text-xl text-white/90">
            We believe that every business deserves access to technology that
            works. We exist to level the playing field – delivering enterprise‑grade
            IT to organisations of all sizes, with a personal touch.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
              How We Work
            </h2>
            <p className="text-body text-[var(--text-body)] max-w-2xl mx-auto">
              A proven approach that ensures your project is delivered
              successfully.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="text-center relative">
                <span className="text-5xl font-bold text-[var(--color-primary)]/20 dark:text-[var(--color-primary-light)]/20 block mb-4">
                  {step.number}
                </span>
                <h3 className="text-h4 text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-body-sm text-[var(--text-body)]">
                  {step.description}
                </p>
                {idx < processSteps.length - 1 && (
                  <ArrowRight
                    size={24}
                    className="hidden lg:block absolute top-8 -right-4 text-[var(--color-secondary)]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-[var(--bg-alt)] dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-body text-[var(--text-body)] max-w-2xl mx-auto">
              The people behind our success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-[var(--bg-main)] dark:bg-dark-bg rounded-2xl p-6 text-center shadow-card"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/30 mb-4 flex items-center justify-center">
                  <span className="text-xs text-[var(--text-muted)]">Photo</span>
                </div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  {person.name}
                </h3>
                <p className="text-sm text-[var(--color-secondary)] mb-2">
                  {person.role}
                </p>
                <p className="text-body-sm text-[var(--text-body)]">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-h2 text-[var(--text-primary)] text-center mb-12">
            Our Journey
          </h2>
          <div className="relative border-l-2 border-[var(--color-secondary)] ml-4">
            {timeline.map((item, i) => (
              <div key={i} className="mb-10 ml-8 relative">
                <div className="absolute -left-[2.15rem] top-1 w-4 h-4 rounded-full bg-[var(--color-secondary)] border-2 border-white dark:border-dark-bg" />
                <span className="text-sm font-bold text-[var(--color-secondary)]">
                  {item.year}
                </span>
                <p className="text-body text-[var(--text-body)] mt-1">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[var(--bg-alt)] dark:bg-dark-surface text-center">
        <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-body text-[var(--text-body)] mb-8">
          Let's discuss how we can help your organisation thrive.
        </p>
        <a
          href="/request-quote"
          className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Get a Free Quote
        </a>
      </section>
    </>
  );
}