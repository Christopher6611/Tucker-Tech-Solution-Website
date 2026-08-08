"use client";

import { useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "Tucker Tech Solution transformed our online presence. Our new website has increased inquiries by 200%.",
    name: "Amara K.",
    role: "CEO",
    company: "K Enterprises",
  },
  {
    quote:
      "Their networking team set up our entire office infrastructure in record time. Professional and reliable.",
    name: "Fatima B.",
    role: "IT Manager",
    company: "Alliance NGO",
  },
  {
    quote:
      "The school management system they developed streamlined our operations. Highly recommended!",
    name: "Dr. Sesay",
    role: "Principal",
    company: "City High School",
  },
  {
    quote:
      "Excellent cybersecurity audit. They identified risks we didn't know existed and fixed them quickly.",
    name: "John M.",
    role: "CFO",
    company: "MicroFinance Ltd",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index: number) => setCurrent(index);

  return (
    <section className="py-20 bg-[var(--bg-alt)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-h2 text-[var(--text-primary)] mb-12">
          What Our Clients Say
        </h2>
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote */}
          <div className="min-h-[200px] flex flex-col justify-center">
            <p className="text-lg md:text-xl text-[var(--text-body)] italic leading-relaxed mb-8">
              “{testimonials[current].quote}”
            </p>
            <div>
              <p className="font-semibold text-[var(--text-primary)]">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                {testimonials[current].role}, {testimonials[current].company}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="Previous"
          >
            <CaretLeft size={24} />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="Next"
          >
            <CaretRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === current
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--border-color)]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}