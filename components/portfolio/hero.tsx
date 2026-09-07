"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Menu, ScanFace, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, whatsappUrl } from "./data";

export function AINetwork() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 1440 840"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient
          id="node"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(720 420) rotate(90) scale(420 720)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3B82F6" stopOpacity=".26" />
          <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="840" fill="url(#node)" />
      <g stroke="#60A5FA" strokeOpacity=".20" strokeWidth="1">
        <path
          className="network-line"
          d="M130 220L330 130L490 280L690 170L870 330L1050 140L1300 270"
        />
        <path
          className="network-line"
          d="M-20 560L230 470L410 610L620 430L790 590L1040 450L1460 570"
        />
        <path
          className="network-line"
          d="M330 130L230 470M490 280L410 610M690 170L620 430M870 330L790 590M1050 140L1040 450"
        />
      </g>
      <g fill="#93C5FD">
        {[
          [130, 220, 3],
          [330, 130, 4],
          [490, 280, 3],
          [690, 170, 5],
          [870, 330, 4],
          [1050, 140, 3],
          [1300, 270, 4],
          [230, 470, 3],
          [410, 610, 4],
          [620, 430, 3],
          [790, 590, 4],
          [1040, 450, 3],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r}>
            <animate
              attributeName="opacity"
              values=".3;1;.3"
              dur={`${3 + (i % 3)}s`}
              begin={`${i * 0.25}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  );
}

export function ProfileFrame() {
  return (
    <div
      className="relative mx-auto w-full max-w-[min(520px,92vw)]"
      aria-label="Profile photo frame for Rafli Rashadifa"
    >
      <div className="absolute -inset-8 rounded-[2.75rem] bg-blue-500/[.13] blur-3xl" />
      <div className="float-slow relative aspect-[4/3] overflow-hidden rounded-[2.35rem] border border-blue-300/25 bg-[#10131b] p-2 shadow-[0_0_0_1px_rgba(255,255,255,.05),0_30px_80px_rgba(0,0,0,.55),0_0_70px_rgba(59,130,246,.16)]">
        <div className="relative h-full overflow-hidden rounded-[1.85rem] border border-white/[.07] bg-[#0c0d12]">
          <img
            src="/foto-rafli.png"
            alt="Rafli Rashadifa"
            className="h-full w-full object-cover"
            decoding="async"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0)_42%,rgba(9,9,11,.72)_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(147,197,253,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,.08)_1px,transparent_1px)] [background-size:30px_30px]" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/10 pt-4">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[.25em] text-blue-300/80">
                Bachelor's Degree in Informatics Engineering
              </p>
              <p className="mt-1 text-sm font-semibold tracking-tight text-white">
                Teuku Muhammad Rafli Rashadifa
              </p>
            </div>
            <ScanFace className="h-5 w-5 text-blue-300" strokeWidth={1.3} />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-3 left-1 sm:-left-4 flex items-center gap-2 rounded-xl border border-white/[.1] bg-[#11131a]/90 px-3 py-2 shadow-xl backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
        </span>
        <span className="text-xs text-zinc-300">Hire me to open full potential</span>
      </div>
    </div>
  );
}

export function Navbar({
  menuOpen,
  setMenuOpen,
  onNavigate,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onNavigate: (section: string) => void;
}) {
  return (
    <>
      <nav
        className="relative z-20 mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Rafli Rashadifa home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-500 text-xs font-bold text-white shadow-[0_5px_18px_rgba(59,130,246,.35)]">
            R
          </span>
          <span className="text-sm font-semibold tracking-[-.03em] text-white">
            Rafli's <span className="text-zinc-500">Portofolio</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onNavigate(item.toLowerCase())}
              className="text-[13px] text-zinc-400 transition-colors hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button asChild size="sm">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Contact me
            </a>
          </Button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-300 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>
      {menuOpen && (
        <div className="fixed inset-x-4 top-[4.7rem] z-40 rounded-2xl border border-white/10 bg-[#121217]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onNavigate(item.toLowerCase());
              }}
              key={item}
              className="block w-full rounded-lg px-3 py-3 text-left text-sm text-zinc-300 hover:bg-white/[.05]"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export function HeroContent({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-4 text-sm font-medium text-zinc-400">
          Hi, I&apos;m <span className="text-zinc-100">Rafli Rashadifa</span>
        </p>
        <h1 className="max-w-3xl text-[clamp(2.7rem,12vw,6.65rem)] font-semibold leading-[.93] tracking-[-.075em] text-zinc-50 sm:text-[clamp(3.4rem,7.3vw,6.65rem)]">
          Engineering
          <br />
          <span className="gradient-shift bg-gradient-to-r from-blue-300 via-[#a9c9ff] to-blue-500 bg-clip-text text-transparent">
            intelligence,
          </span>
          <br />
          into reality.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          I build intelligent software, AI-powered applications, and modern web
          experiences with clarity at every layer.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button onClick={() => onNavigate("projects")}>
            View projects <ArrowDownRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
