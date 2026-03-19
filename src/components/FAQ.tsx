"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 px-4">
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

        {/* shadcn Accordion */}
        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <AccordionItem
                value={i}
                className="rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-[#F8FAFC] font-medium hover:no-underline [&>svg]:text-slate-400">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-sm leading-relaxed text-[#94A3B8]"
                  >
                    {faq.a}
                  </motion.p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
