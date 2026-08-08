import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers – Tucker Tech Solution",
  description: "Join our team of technology professionals. Explore job openings and internship opportunities.",
};

const openings = [
  { title: "Full-Stack Developer", type: "Full-time", location: "Freetown" },
  { title: "Network Engineer", type: "Full-time", location: "Freetown" },
  { title: "Cybersecurity Analyst", type: "Contract", location: "Remote" },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Careers</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Build your career with Tucker Tech Solution. We value innovation, collaboration, and growth.</p>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-main)] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-6">Open Positions</h2>
            {openings.length > 0 ? (
              <div className="space-y-4">
                {openings.map((job, i) => (
                  <div key={i} className="flex justify-between items-center bg-[var(--bg-alt)] dark:bg-dark-surface p-4 rounded-xl shadow-card">
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">{job.title}</p>
                      <p className="text-sm text-[var(--text-body)]">{job.type} – {job.location}</p>
                    </div>
                    <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-[var(--color-primary-light)]">Apply</button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-body text-[var(--text-body)]">No open positions right now. Check back soon.</p>
            )}
          </div>

          <div>
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">Internships</h2>
            <p className="text-body text-[var(--text-body)] mb-4">We offer internships for students and recent graduates. Send your CV to careers@tuckertechsolution.com.</p>
          </div>

          <div>
            <h2 className="font-display text-h2 text-[var(--text-primary)] mb-4">Our Culture</h2>
            <p className="text-body text-[var(--text-body)]">We foster a supportive, learning-focused environment where your ideas matter. Continuous training and flexible work arrangements are part of our DNA.</p>
          </div>
        </div>
      </section>
    </>
  );
}