"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

/* ---------- Single rolling digit ---------- */
function SlotDigit({ digit, delay }: { digit: string; delay: number }) {
  const [currentDigit, setCurrentDigit] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const targetDigit = parseInt(digit, 10);

  useEffect(() => {
    if (!isInView || isNaN(targetDigit)) return;
    const motionVal = animate(0, targetDigit + 20, {
      duration: 1.2 + delay * 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => {
        setCurrentDigit(Math.round(v) % 10);
      },
      onComplete: () => {
        setCurrentDigit(targetDigit);
      },
    });
    return () => motionVal.stop();
  }, [isInView, targetDigit, delay]);

  if (isNaN(targetDigit)) {
    // Non-digit character (comma, etc)
    return <span className="inline-block">{digit}</span>;
  }

  return (
    <div ref={ref} className="relative inline-block w-[0.65em] h-[1.1em] overflow-hidden">
      <motion.div
        key={currentDigit}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {currentDigit}
      </motion.div>
    </div>
  );
}

/* ---------- Slot machine counter ---------- */
function SlotMachineCounter({ target }: { target: string }) {
  const chars = target.split("");
  return (
    <span className="inline-flex items-baseline">
      {chars.map((char, i) => (
        <SlotDigit key={i} digit={char} delay={i} />
      ))}
      <span>+</span>
    </span>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 mx-auto max-w-5xl px-4 py-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl px-8 py-5">
        {/* App Store badge */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="rounded-xl bg-white/[0.08] border border-white/[0.08] px-5 py-2.5 text-center">
            <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">
              App Store
            </p>
            <p className="text-sm font-bold text-[#F8FAFC]">Coming Soon</p>
          </div>
        </div>

        {/* Slot machine counter */}
        <div className="text-center">
          <p className="text-3xl font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
            <SlotMachineCounter target="2,000" />
          </p>
          <p className="text-sm text-[#94A3B8]">people pre-ordered</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <p className="text-sm text-[#F8FAFC] font-medium">
            4.9 <span className="text-[#94A3B8]">from beta testers</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
