import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white/[0.02] border-t border-white/[0.06]">
      {/* Gradient fade at top */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(10,14,26,0.8), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: logo + copyright */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/app-icon.png"
              alt="PepStack logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm text-slate-400">
              &copy; 2026 PepStack. All rights reserved.
            </span>
          </div>

          {/* Right: links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
