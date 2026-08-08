"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";

const steps = ["Contact Info", "Service & Budget", "Project Details", "Review"];

export default function RequestQuotePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
    files: [] as File[],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        files: Array.from(e.target.files!),
      }));
    }
  };

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to API
    alert("Quote request submitted! We'll get back to you within 24 hours.");
    // Reset form
    setCurrentStep(0);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      service: "",
      budget: "",
      timeline: "",
      description: "",
      files: [],
    });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] dark:bg-dark-bg pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Request a Quote
          </h1>
          <p className="text-body text-[var(--text-body)] max-w-2xl mx-auto">
            Tell us about your project and we'll provide a tailored proposal.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-12 relative">
          {steps.map((step, idx) => (
            <div
              key={step}
              className="flex-1 text-center relative z-10"
            >
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors ${
                  idx <= currentStep
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                    : "bg-transparent border-[var(--border-color)] text-[var(--text-muted)]"
                }`}
              >
                {idx < currentStep ? (
                  <CheckCircle size={18} />
                ) : (
                  idx + 1
                )}
              </div>
              <span
                className={`hidden sm:block mt-2 text-xs font-medium ${
                  idx <= currentStep
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
          {/* Progress bar line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-[var(--border-color)] -z-0">
            <div
              className="h-full bg-[var(--color-primary)] transition-all duration-300"
              style={{
                width: `${(currentStep / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-[var(--bg-alt)] dark:bg-dark-surface rounded-2xl p-8 shadow-card">
            {/* Step 1: Contact Info */}
            {currentStep === 0 && (
              <div className="space-y-5">
                <h2 className="font-display text-h3 text-[var(--text-primary)] mb-4">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-dark-bg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-dark-bg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-dark-bg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-dark-bg"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Sierra Leone"
                      className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-dark-bg"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service & Budget */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <h2 className="font-display text-h3 text-[var(--text-primary)] mb-4">
                  Service & Budget
                </h2>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-dark-bg"
                  >
                    <option value="">Select a service...</option>
                    <option value="web-development">Website Development</option>
                    <option value="software">Custom Software</option>
                    <option value="networking">Networking</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="consulting">IT Consultancy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Estimated Budget (USD)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-dark-bg"
                  >
                    <option value="">Select range...</option>
                    <option value="<1k">Less than $1,000</option>
                    <option value="1k-5k">$1,000 – $5,000</option>
                    <option value="5k-20k">$5,000 – $20,000</option>
                    <option value="20k+">$20,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Timeline
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="timeline"
                        value="urgent"
                        checked={formData.timeline === "urgent"}
                        onChange={handleChange}
                        className="accent-[var(--color-primary)]"
                      />
                      Urgent (&lt; 1 month)
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="timeline"
                        value="normal"
                        checked={formData.timeline === "normal"}
                        onChange={handleChange}
                        className="accent-[var(--color-primary)]"
                      />
                      Normal (1–3 months)
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="timeline"
                        value="flexible"
                        checked={formData.timeline === "flexible"}
                        onChange={handleChange}
                        className="accent-[var(--color-primary)]"
                      />
                      Flexible
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Project Details */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <h2 className="font-display text-h3 text-[var(--text-primary)] mb-4">
                  Project Details
                </h2>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Describe your project, goals, and any specific requirements..."
                    className="w-full px-4 py-2.5 border rounded-lg bg-white dark:bg-dark-bg resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Upload Documents (optional)
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-primary)] file:text-white hover:file:bg-[var(--color-primary-light)]"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h2 className="font-display text-h3 text-[var(--text-primary)] mb-4">
                  Review Your Request
                </h2>
                <div className="grid grid-cols-2 gap-3 text-body-sm">
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Name:</span>{" "}
                    {formData.name}
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Company:</span>{" "}
                    {formData.company || "—"}
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Email:</span>{" "}
                    {formData.email}
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Phone:</span>{" "}
                    {formData.phone || "—"}
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Country:</span>{" "}
                    {formData.country || "—"}
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Service:</span>{" "}
                    {formData.service}
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Budget:</span>{" "}
                    {formData.budget || "—"}
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Timeline:</span>{" "}
                    {formData.timeline || "—"}
                  </div>
                </div>
                <div>
                  <span className="font-medium text-[var(--text-primary)]">Description:</span>
                  <p className="text-body-sm text-[var(--text-body)] mt-1">
                    {formData.description}
                  </p>
                </div>
                {formData.files.length > 0 && (
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Files:</span>
                    <ul className="list-disc list-inside text-body-sm">
                      {formData.files.map((f, i) => (
                        <li key={i}>{f.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-[var(--border-color)]">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2.5 border border-[var(--border-color)] rounded-lg text-[var(--text-body)] hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
                >
                  Previous
                </button>
              )}
              <div className="ml-auto">
                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-2.5 rounded-lg transition-colors"
                  >
                    Submit Request
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}