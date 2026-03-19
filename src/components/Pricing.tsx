"use client";

import { motion } from "framer-motion";

const features = [
  "Unlimited dose tracking",
  "PepStack AI assistant",
  "Bloodwork & symptom logging",
  "Medical PDF export",
  "Priority support",
  "All future features included",
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#10B981]"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-[#7C3AED]/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-[#EC4899]/15 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-md">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent mb-3">
            Early Bird Pricing
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Lock in the lowest price before launch
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl p-8"
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Early Bird
            </span>
          </div>

          {/* Price */}
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-extrabold text-[#F8FAFC]">
                $10
              </span>
              <span className="text-xl text-[#94A3B8]">/year</span>
            </div>
            <p className="mt-1 text-[#94A3B8] line-through">$49/year</p>
            <span className="mt-2 inline-block rounded-full bg-[#10B981]/15 px-3 py-0.5 text-sm font-semibold text-[#10B981]">
              Save 80%
            </span>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-[#F8FAFC] text-sm">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={async () => {
              const res = await fetch("/api/checkout", { method: "POST" });
              const data = await res.json();
              if (data.url) window.location.href = data.url;
            }}
            className="group relative block w-full overflow-hidden rounded-xl p-px cursor-pointer"
          >
            {/* Animated border */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#7C3AED] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
            <span className="relative block rounded-[11px] bg-gradient-to-r from-[#7C3AED] to-[#EC4899] px-6 py-3.5 text-center text-base font-bold text-white transition-shadow group-hover:shadow-lg group-hover:shadow-[#7C3AED]/25">
              Pre-Order Now &mdash; $10/year
            </span>
          </button>

          {/* Sub-text */}
          <p className="mt-4 text-center text-xs text-[#94A3B8]">
            30-day money-back guarantee &middot; Cancel anytime
          </p>
        </motion.div>

        {/* Urgency bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl px-6 py-4"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-[#F8FAFC] font-medium">
              Only{" "}
              <span className="text-[#EC4899] font-bold">127 of 500</span>{" "}
              early bird spots remaining
            </p>
          </div>
          <div className="h-2 w-full rounded-full bg-white/[0.08] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
