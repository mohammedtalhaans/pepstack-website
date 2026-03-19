"use client";

import { motion } from "framer-motion";

/* ---------- SVG Icons ---------- */
function AlertIcon() {
  return (
    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ClockAlertIcon() {
  return (
    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

/* ---------- Card components ---------- */
function PainCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group rounded-2xl p-5 bg-red-500/[0.06] border border-red-500/[0.12] backdrop-blur-xl hover:bg-red-500/[0.1] transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-[#F8FAFC] font-semibold text-base mb-1">{title}</h3>
          <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function SolutionCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group rounded-2xl p-5 bg-cyan-500/[0.06] border border-cyan-500/[0.12] backdrop-blur-xl hover:bg-cyan-500/[0.1] transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-[#F8FAFC] font-semibold text-base mb-1">{title}</h3>
          <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Connecting arrow SVG ---------- */
function ConnectingArrow({ index }: { index: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
      viewport={{ once: true }}
      className="hidden md:block absolute top-1/2 -translate-y-1/2 text-white/15"
      style={{ left: "calc(50% - 24px)", width: 48, height: 24 }}
      viewBox="0 0 48 24"
      fill="none"
    >
      <path
        d="M0 12 H38 M32 6 L42 12 L32 18"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeDasharray="4 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

/* ---------- Main section ---------- */
export default function ProblemSolution() {
  const painPoints = [
    {
      icon: <AlertIcon />,
      title: "Guessing doses?",
      description: "Reconstitution math is error-prone and risky",
    },
    {
      icon: <ClockAlertIcon />,
      title: "Forgetting injections?",
      description: "Missed doses break your protocol\u2019s effectiveness",
    },
    {
      icon: <EyeOffIcon />,
      title: "No bloodwork tracking?",
      description: "You can\u2019t optimize what you don\u2019t measure",
    },
  ];

  const solutions = [
    {
      icon: <TargetIcon />,
      title: "Precision Calculator",
      description: "Enter your peptide details, get exact draw volumes",
    },
    {
      icon: <BellIcon />,
      title: "Smart Reminders",
      description: "Never miss a dose with intelligent scheduling",
    },
    {
      icon: <ChartIcon />,
      title: "Full Bloodwork Suite",
      description: "Track markers, see trends, know your ranges",
    },
  ];

  return (
    <section className="relative py-16 md:py-28 px-4">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)" }}
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
            Why <span className="text-gradient">PepStack</span>?
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Peptide protocols are powerful — but only when done right.
          </p>
        </motion.div>

        {/* Two-column grid — solutions offset down for visual tension */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          {/* Pain points */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-red-400/80 text-sm font-semibold uppercase tracking-wider mb-4"
            >
              The problem
            </motion.p>
            {painPoints.map((item, i) => (
              <div key={item.title} className="relative">
                <PainCard icon={item.icon} title={item.title} description={item.description} index={i} />
                <ConnectingArrow index={i} />
              </div>
            ))}
          </div>

          {/* Solutions — offset ~40px lower */}
          <div className="space-y-4 md:mt-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-cyan-400/80 text-sm font-semibold uppercase tracking-wider mb-4"
            >
              The solution
            </motion.p>
            {solutions.map((item, i) => (
              <SolutionCard key={item.title} icon={item.icon} title={item.title} description={item.description} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
