"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ---------- Floating pill component ---------- */
function FloatingPill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass rounded-full px-3 py-1.5 text-xs font-medium text-slate-200 whitespace-nowrap shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Simplified phone screen mockup ---------- */
function PhoneScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0F1629] text-white overflow-hidden">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] text-slate-400">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3.5 h-2 border border-slate-400 rounded-sm relative">
            <div className="absolute inset-0.5 bg-emerald-400 rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Greeting */}
      <div className="px-4 pt-3 pb-2">
        <p className="text-[10px] text-slate-400">Good morning</p>
        <p className="text-sm font-semibold">Alex</p>
      </div>

      {/* Cycle progress card */}
      <div className="mx-4 mb-3 rounded-xl bg-white/[0.06] border border-white/[0.08] p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-slate-300">
            Current Cycle
          </span>
          <span className="text-[10px] text-emerald-400 font-semibold">
            Day 20 / 28
          </span>
        </div>
        {/* Progress bar */}
        <div className="w-full h-1.5 rounded-full bg-white/10">
          <div
            className="h-full rounded-full"
            style={{
              width: "71%",
              background: "linear-gradient(90deg, #7C3AED, #EC4899)",
            }}
          />
        </div>
      </div>

      {/* Dose cards */}
      <div className="px-4 space-y-2 flex-1">
        <p className="text-[10px] font-medium text-slate-400 mb-1">
          Today&apos;s Doses
        </p>

        {/* BPC-157 */}
        <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] p-2.5">
          <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center text-[10px]">
            💉
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-medium">BPC-157</p>
            <p className="text-[9px] text-slate-400">250 mcg &middot; SubQ</p>
          </div>
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <svg
              className="w-2.5 h-2.5 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* TB-500 */}
        <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] p-2.5">
          <div className="w-7 h-7 rounded-lg bg-pink-500/20 flex items-center justify-center text-[10px]">
            💉
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-medium">TB-500</p>
            <p className="text-[9px] text-slate-400">750 mcg &middot; SubQ</p>
          </div>
          <div className="w-4 h-4 rounded-full border border-white/10" />
        </div>

        {/* GHK-Cu */}
        <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] p-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[10px]">
            💊
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-medium">GHK-Cu</p>
            <p className="text-[9px] text-slate-400">200 mcg &middot; Topical</p>
          </div>
          <div className="w-4 h-4 rounded-full border border-white/10" />
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around border-t border-white/[0.06] py-2 mt-2">
        {["Home", "Log", "Stats", "AI"].map((tab, i) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div
              className={`w-4 h-4 rounded-md ${
                i === 0 ? "bg-violet-500/30" : "bg-white/10"
              }`}
            />
            <span
              className={`text-[8px] ${
                i === 0 ? "text-violet-400" : "text-slate-500"
              }`}
            >
              {tab}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12 px-4">
      {/* Background gradient orbs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
      />
      <div
        className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] rounded-full opacity-25 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #EC4899, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #06B6D4, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="glass rounded-full px-4 py-1.5 mb-6 flex items-center gap-2"
        >
          <span className="text-sm">&#10024;</span>
          <span className="text-sm text-slate-300 font-medium">
            Coming Q2 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Your Peptide Protocol,{" "}
          <span className="text-gradient">On Autopilot</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed"
        >
          Track doses, log bloodwork, monitor symptoms — all in one beautiful
          app powered by AI.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-accent hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25"
          >
            Pre-Order — $10/year
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white border border-white/20 hover:bg-white/5 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Phone mockup area */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full max-w-sm mx-auto"
      >
        {/* Floating pills */}
        <div className="absolute -left-4 sm:-left-16 top-[20%] z-20 animate-float">
          <FloatingPill>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
            98% Adherence
          </FloatingPill>
        </div>
        <div
          className="absolute -right-4 sm:-right-14 top-[35%] z-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <FloatingPill>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 mr-1.5" />
            AI Powered
          </FloatingPill>
        </div>
        <div
          className="absolute -left-2 sm:-left-12 top-[55%] z-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <FloatingPill>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1.5" />
            Day 20 of 28
          </FloatingPill>
        </div>

        {/* Phone frame */}
        <div className="relative mx-auto w-[260px] sm:w-[280px] animate-float">
          {/* Mockup image frame */}
          <Image
            src="/mockup.png"
            alt="PepStack app mockup"
            width={280}
            height={572}
            className="w-full h-auto relative z-0"
            priority
          />
          {/* Rendered phone screen placed inside the mockup */}
          <div className="absolute inset-[3.5%] top-[2.8%] bottom-[2.8%] z-10 rounded-[32px] overflow-hidden">
            <PhoneScreen />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
