"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 px-4">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/25 blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-[#EC4899]/20 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-[#06B6D4]/15 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent mb-5"
        >
          Start your protocol today.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-[#94A3B8] mb-10"
        >
          Join thousands who are taking control of their health.
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#EC4899] px-10 py-4 text-lg font-bold text-white shadow-lg shadow-[#7C3AED]/20 transition-shadow hover:shadow-xl hover:shadow-[#7C3AED]/30"
        >
          Pre-Order &mdash; $10/year
        </motion.a>
      </div>
    </section>
  );
}
