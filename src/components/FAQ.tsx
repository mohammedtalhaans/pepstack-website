"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is PepStack?",
    a: "PepStack is a comprehensive peptide protocol tracking app that helps you log doses, monitor bloodwork, track symptoms, and optimize your protocols with AI-powered insights.",
  },
  {
    q: "When does PepStack launch?",
    a: "We're targeting Q2 2026 for our initial iOS release. Pre-order customers will get early access before the public launch.",
  },
  {
    q: "How does the pre-order work?",
    a: "Your $10 secures a full year of PepStack Pro at the lowest price we'll ever offer. You'll be charged now and your subscription begins the day we launch.",
  },
  {
    q: "What platforms will PepStack support?",
    a: "iOS at launch, with Android following shortly after. We're also exploring a web companion app for desktop users.",
  },
  {
    q: "Is my health data secure?",
    a: "Absolutely. All data is encrypted end-to-end and stored securely. We never sell or share your personal health information with third parties.",
  },
  {
    q: "Can I cancel my pre-order?",
    a: "Yes, you can cancel anytime before launch for a full refund. After launch, our 30-day money-back guarantee still applies.",
  },
  {
    q: "What's included in PepStack Pro?",
    a: "Everything: dose tracking, AI assistant, bloodwork and symptom logging, medical PDF export, priority support, and all future features we release.",
  },
];

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-5 shrink-0">
      {/* Horizontal bar (always visible) */}
      <span className="absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 rounded-full bg-[#94A3B8] transition-colors" />
      {/* Vertical bar (rotates away when open) */}
      <motion.span
        animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-1/2 h-5 w-0.5 -translate-x-1/2 rounded-full bg-[#94A3B8]"
      />
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative py-24 px-4">
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-extrabold text-[#F8FAFC] mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="text-[#F8FAFC] font-medium">{faq.q}</span>
                <PlusMinusIcon open={openIndex === i} />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[#94A3B8]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
