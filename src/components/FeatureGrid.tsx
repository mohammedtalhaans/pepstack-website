"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

/* ---------- SVG Icons ---------- */
function SyringeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function BarChartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function TrendingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function CalculatorIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
    </svg>
  );
}

function DocumentIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

/* ---------- Mini mockups for large cards ---------- */
function MiniHomeScreen() {
  return (
    <div className="mt-4 rounded-xl bg-[#0F1629] border border-white/[0.06] p-3 text-[10px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-400">Today</span>
        <span className="text-emerald-400 font-semibold">3/4 done</span>
      </div>
      <div className="space-y-1.5">
        {[
          { name: "BPC-157", dose: "250 mcg", done: true },
          { name: "TB-500", dose: "750 mcg", done: true },
          { name: "GHK-Cu", dose: "200 mcg", done: true },
          { name: "Ipamorelin", dose: "300 mcg", done: false },
        ].map((d) => (
          <div key={d.name} className="flex items-center justify-between rounded-lg bg-white/[0.04] px-2.5 py-1.5">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${d.done ? "bg-emerald-400" : "bg-white/20"}`} />
              <span className="text-slate-200">{d.name}</span>
            </div>
            <span className="text-slate-500">{d.dose}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniChatScreen() {
  return (
    <div className="mt-4 rounded-xl bg-[#0F1629] border border-white/[0.06] p-3 text-[10px]">
      <div className="space-y-2">
        <div className="flex justify-end">
          <div className="rounded-lg bg-violet-500/20 px-2.5 py-1.5 text-slate-200 max-w-[80%]">
            Can I stack BPC-157 and TB-500?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-slate-300 max-w-[80%]">
            Yes! BPC-157 and TB-500 are commonly stacked for enhanced recovery. They work synergistically...
          </div>
        </div>
        <div className="flex items-center gap-1.5 pt-1">
          <div className="flex-1 rounded-full bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-slate-500">
            Ask PepStack AI...
          </div>
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Spotlight feature card ---------- */
const CARD_COLORS: Record<number, string> = {
  0: "124,58,237",   // violet
  1: "236,72,153",   // pink
  2: "6,182,212",    // cyan
  3: "16,185,129",   // emerald
  4: "245,158,11",   // amber
  5: "59,130,246",   // blue
};

function SpotlightCard({
  children,
  className = "",
  index,
}: {
  children: React.ReactNode;
  className?: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isHovered = useMotionValue(0);

  const color = CARD_COLORS[index] || "124,58,237";

  const spotlightBg = useTransform(
    [mouseX, mouseY, isHovered],
    ([x, y, hovered]: number[]) =>
      hovered
        ? `radial-gradient(350px circle at ${x}px ${y}px, rgba(${color},0.12), transparent 60%)`
        : "none"
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => isHovered.set(1)}
      onMouseLeave={() => isHovered.set(0)}
      className={`group relative rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl p-6 transition-shadow hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] overflow-hidden ${className}`}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
        style={{ background: spotlightBg }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/* ---------- Main section ---------- */
export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-32 md:py-40 px-4">
      {/* Background glow */}
      <div
        className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #06B6D4, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything You <span className="text-gradient">Need</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            A complete toolkit for managing your peptide protocols with confidence.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Large card 1: Smart Dosing */}
          <SpotlightCard index={0}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400">
                <SyringeIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#F8FAFC] font-semibold text-lg">Smart Dosing</h3>
                <p className="text-[#94A3B8] text-sm">Track every dose, every day</p>
              </div>
            </div>
            <MiniHomeScreen />
          </SpotlightCard>

          {/* Large card 2: PepStack AI */}
          <SpotlightCard index={1}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center text-pink-400">
                <SparkleIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[#F8FAFC] font-semibold text-lg">PepStack AI</h3>
                <p className="text-[#94A3B8] text-sm">Your personal peptide advisor</p>
              </div>
            </div>
            <MiniChatScreen />
          </SpotlightCard>
        </div>

        {/* 4 small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Bloodwork */}
          <SpotlightCard index={2}>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 mb-3">
              <BarChartIcon />
            </div>
            <h3 className="text-[#F8FAFC] font-semibold text-base mb-1">Bloodwork</h3>
            <p className="text-[#94A3B8] text-sm">Track 20+ markers</p>
          </SpotlightCard>

          {/* Weight & Symptoms */}
          <SpotlightCard index={3}>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-3">
              <TrendingIcon />
            </div>
            <h3 className="text-[#F8FAFC] font-semibold text-base mb-1">Weight &amp; Symptoms</h3>
            <p className="text-[#94A3B8] text-sm">See the full picture</p>
          </SpotlightCard>

          {/* Dose Calculator */}
          <SpotlightCard index={4}>
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 mb-3">
              <CalculatorIcon />
            </div>
            <h3 className="text-[#F8FAFC] font-semibold text-base mb-1">Dose Calculator</h3>
            <p className="text-[#94A3B8] text-sm">Never guess again</p>
          </SpotlightCard>

          {/* Medical Export */}
          <SpotlightCard index={5}>
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 mb-3">
              <DocumentIcon />
            </div>
            <h3 className="text-[#F8FAFC] font-semibold text-base mb-1">Medical Export</h3>
            <p className="text-[#94A3B8] text-sm">Share with your doctor</p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
