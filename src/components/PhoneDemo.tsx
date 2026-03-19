"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/* ---------- Phone screen mockups ---------- */

function HomeScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0F1629] text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] text-slate-400">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3.5 h-2 border border-slate-400 rounded-sm relative">
            <div className="absolute inset-0.5 bg-emerald-400 rounded-[1px]" />
          </div>
        </div>
      </div>
      <div className="px-4 pt-3 pb-2">
        <p className="text-[10px] text-slate-400">Good morning</p>
        <p className="text-sm font-semibold">Alex</p>
      </div>
      <div className="mx-4 mb-3 rounded-xl bg-white/[0.06] border border-white/[0.08] p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-slate-300">Current Cycle</span>
          <span className="text-[10px] text-emerald-400 font-semibold">Day 20 / 28</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/10">
          <div className="h-full rounded-full w-[71%]" style={{ background: "linear-gradient(90deg, #7C3AED, #EC4899)" }} />
        </div>
      </div>
      <div className="px-4 space-y-2 flex-1">
        <p className="text-[10px] font-medium text-slate-400 mb-1">Today&apos;s Doses</p>
        {[
          { name: "BPC-157", dose: "250 mcg \u00b7 SubQ", color: "bg-violet-500/20", done: true },
          { name: "TB-500", dose: "750 mcg \u00b7 SubQ", color: "bg-pink-500/20", done: false },
          { name: "GHK-Cu", dose: "200 mcg \u00b7 Topical", color: "bg-cyan-500/20", done: false },
        ].map((d) => (
          <div key={d.name} className="flex items-center gap-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] p-2.5">
            <div className={`w-7 h-7 rounded-lg ${d.color} flex items-center justify-center`}>
              <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-medium">{d.name}</p>
              <p className="text-[9px] text-slate-400">{d.dose}</p>
            </div>
            {d.done ? (
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="w-4 h-4 rounded-full border border-white/10" />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around border-t border-white/[0.06] py-2 mt-2">
        {["Home", "Log", "Stats", "AI"].map((tab, i) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded-md ${i === 0 ? "bg-violet-500/30" : "bg-white/10"}`} />
            <span className={`text-[8px] ${i === 0 ? "text-violet-400" : "text-slate-500"}`}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalculatorScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0F1629] text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] text-slate-400">
        <span>9:41</span>
        <div className="w-3.5 h-2 border border-slate-400 rounded-sm relative">
          <div className="absolute inset-0.5 bg-emerald-400 rounded-[1px]" />
        </div>
      </div>
      <div className="px-4 pt-3 pb-3">
        <p className="text-sm font-semibold">Dose Calculator</p>
        <p className="text-[10px] text-slate-400">Reconstitution helper</p>
      </div>
      <div className="px-4 space-y-3 flex-1">
        <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-3">
          <p className="text-[9px] text-slate-400 mb-1">Peptide</p>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium">BPC-157</span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300">5 mg vial</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-3">
            <p className="text-[9px] text-slate-400 mb-1">BAC Water</p>
            <p className="text-[11px] font-medium">2.0 mL</p>
          </div>
          <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-3">
            <p className="text-[9px] text-slate-400 mb-1">Desired Dose</p>
            <p className="text-[11px] font-medium">250 mcg</p>
          </div>
        </div>
        <div className="rounded-xl p-3" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.15))" }}>
          <p className="text-[9px] text-slate-300 mb-1">Draw Volume</p>
          <p className="text-lg font-bold text-white">0.10 mL</p>
          <p className="text-[9px] text-slate-400">10 units on a U-100 syringe</p>
        </div>
        <div className="rounded-xl bg-cyan-500/[0.08] border border-cyan-500/[0.12] p-2.5">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[9px] text-cyan-300">Concentration: 2.5 mg/mL</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around border-t border-white/[0.06] py-2 mt-2">
        {["Home", "Log", "Stats", "AI"].map((tab, i) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded-md ${i === 1 ? "bg-violet-500/30" : "bg-white/10"}`} />
            <span className={`text-[8px] ${i === 1 ? "text-violet-400" : "text-slate-500"}`}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BloodworkScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0F1629] text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] text-slate-400">
        <span>9:41</span>
        <div className="w-3.5 h-2 border border-slate-400 rounded-sm relative">
          <div className="absolute inset-0.5 bg-emerald-400 rounded-[1px]" />
        </div>
      </div>
      <div className="px-4 pt-3 pb-3">
        <p className="text-sm font-semibold">Bloodwork</p>
        <p className="text-[10px] text-slate-400">Latest panel: Mar 15</p>
      </div>
      <div className="px-4 space-y-2 flex-1">
        {/* Mini chart */}
        <div className="rounded-xl bg-white/[0.06] border border-white/[0.08] p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-medium text-slate-300">IGF-1 Trend</span>
            <span className="text-[9px] text-emerald-400">+18%</span>
          </div>
          <div className="flex items-end gap-1 h-10">
            {[30, 35, 42, 38, 50, 55, 62, 58, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i === 8 ? "linear-gradient(180deg, #7C3AED, #EC4899)" : "rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
        </div>
        {/* Markers */}
        {[
          { name: "Testosterone", val: "850 ng/dL", status: "Optimal", color: "text-emerald-400" },
          { name: "IGF-1", val: "285 ng/mL", status: "High", color: "text-amber-400" },
          { name: "GH", val: "3.2 ng/mL", status: "Optimal", color: "text-emerald-400" },
          { name: "Liver ALT", val: "28 U/L", status: "Normal", color: "text-emerald-400" },
        ].map((m) => (
          <div key={m.name} className="flex items-center justify-between rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2">
            <div>
              <p className="text-[11px] font-medium">{m.name}</p>
              <p className="text-[9px] text-slate-400">{m.val}</p>
            </div>
            <span className={`text-[9px] font-semibold ${m.color}`}>{m.status}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around border-t border-white/[0.06] py-2 mt-2">
        {["Home", "Log", "Stats", "AI"].map((tab, i) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded-md ${i === 2 ? "bg-violet-500/30" : "bg-white/10"}`} />
            <span className={`text-[8px] ${i === 2 ? "text-violet-400" : "text-slate-500"}`}>{tab}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIChatScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0F1629] text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] text-slate-400">
        <span>9:41</span>
        <div className="w-3.5 h-2 border border-slate-400 rounded-sm relative">
          <div className="absolute inset-0.5 bg-emerald-400 rounded-[1px]" />
        </div>
      </div>
      <div className="px-4 pt-3 pb-3 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold">PepStack AI</p>
          <p className="text-[9px] text-emerald-400">Online</p>
        </div>
      </div>
      <div className="px-4 space-y-2.5 flex-1 overflow-hidden">
        <div className="flex justify-end">
          <div className="rounded-xl rounded-tr-sm bg-violet-500/20 px-3 py-2 text-[10px] text-slate-200 max-w-[80%]">
            My IGF-1 came back at 285. Is that too high?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="rounded-xl rounded-tl-sm bg-white/[0.06] px-3 py-2 text-[10px] text-slate-300 max-w-[85%] space-y-1.5">
            <p>Based on your panel, 285 ng/mL is slightly above the reference range (115-307).</p>
            <p>Given your current protocol with Ipamorelin, this is expected. Your liver markers are normal, which is a good sign.</p>
            <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 px-2 py-1.5 text-[9px] text-amber-300">
              Consider discussing dosage adjustment with your provider at your next visit.
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-xl rounded-tr-sm bg-violet-500/20 px-3 py-2 text-[10px] text-slate-200 max-w-[80%]">
            Should I lower my dose?
          </div>
        </div>
      </div>
      <div className="px-4 pb-3 pt-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 text-[10px] text-slate-500">
            Ask PepStack AI...
          </div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Step data ---------- */
const steps = [
  {
    title: "Smart Dashboard",
    description: "See your entire protocol at a glance. Track active cycles, today\u2019s doses, and adherence streaks \u2014 all from one beautiful home screen.",
    accent: "from-violet-500 to-pink-500",
  },
  {
    title: "Precision Calculator",
    description: "Enter your vial size and desired dose \u2014 get exact draw volumes instantly. No more risky reconstitution math.",
    accent: "from-pink-500 to-amber-500",
  },
  {
    title: "Bloodwork Insights",
    description: "Log 20+ biomarkers, visualize trends over time, and see at a glance which values are optimal, normal, or need attention.",
    accent: "from-cyan-500 to-emerald-500",
  },
  {
    title: "PepStack AI",
    description: "Ask anything about your protocol. Get personalized insights based on your doses, bloodwork, and symptoms \u2014 powered by AI.",
    accent: "from-violet-500 to-cyan-500",
  },
];

const screens = [HomeScreen, CalculatorScreen, BloodworkScreen, AIChatScreen];

/* ---------- Main component ---------- */
export default function PhoneDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to active step index (0-3)
  const activeIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 1, 2, 3]);

  return (
    <section ref={containerRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #EC4899, transparent 70%)" }}
        />

        <div className="w-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: text panels */}
          <div className="relative h-[300px] md:h-[400px] flex items-center">
            {steps.map((step, i) => (
              <StepText
                key={step.title}
                step={step}
                index={i}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Right: sticky phone */}
          <div className="flex justify-center">
            <div className="relative w-[260px] sm:w-[280px]">
              <Image
                src="/mockup.png"
                alt="PepStack app"
                width={280}
                height={572}
                className="w-full h-auto relative z-0"
              />
              <div className="absolute inset-[3.5%] top-[2.8%] bottom-[2.8%] z-10 rounded-[32px] overflow-hidden">
                {screens.map((Screen, i) => (
                  <ScreenLayer key={i} index={i} activeIndex={activeIndex}>
                    <Screen />
                  </ScreenLayer>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Step text with fade ---------- */
function StepText({
  step,
  index,
  scrollProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each step occupies ~25% of the scroll
  const start = index * 0.25;
  const fadeIn = start + 0.05;
  const fadeOut = start + 0.2;
  const end = start + 0.25;

  const opacity = useTransform(
    scrollProgress,
    [start, fadeIn, fadeOut, end],
    [0, 1, 1, 0]
  );
  // Keep last step visible
  const finalOpacity = index === 3
    ? useTransform(scrollProgress, [start, fadeIn, 1], [0, 1, 1])
    : opacity;

  const y = useTransform(
    scrollProgress,
    [start, fadeIn, fadeOut, end],
    [30, 0, 0, -30]
  );
  const finalY = index === 3
    ? useTransform(scrollProgress, [start, fadeIn, 1], [30, 0, 0])
    : y;

  return (
    <motion.div
      style={{ opacity: finalOpacity, y: finalY }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className={`inline-flex items-center gap-2 mb-4`}>
        <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent`}>
          0{index + 1}
        </span>
        <div className="w-8 h-px bg-gradient-to-r from-white/30 to-transparent" />
      </div>
      <h3 className="text-2xl md:text-4xl font-bold text-[#F8FAFC] mb-4">{step.title}</h3>
      <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-md">
        {step.description}
      </p>
    </motion.div>
  );
}

/* ---------- Screen layer with crossfade ---------- */
function ScreenLayer({
  index,
  activeIndex,
  children,
}: {
  index: number;
  activeIndex: MotionValue<number>;
  children: React.ReactNode;
}) {
  const opacity = useTransform(activeIndex, (latest: number) => {
    const diff = Math.abs(latest - index);
    if (diff < 0.5) return 1;
    if (diff < 1) return 1 - (diff - 0.5) * 2;
    return 0;
  });

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}
