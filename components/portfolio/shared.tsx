"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { X } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.2em] text-blue-400">
          <span className="h-px w-5 bg-blue-400" />
          {eyebrow}
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-.05em] text-zinc-50 sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-9%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CursorGlow() {
  const [pointer, setPointer] = useState({ x: 50, y: 15 });
  useEffect(() => {
    const move = (event: PointerEvent) =>
      setPointer({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return (
    <div
      className="cursor-glow pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={
        {
          "--glow-x": `${pointer.x}px`,
          "--glow-y": `${pointer.y}px`,
        } as CSSProperties
      }
    />
  );
}

export function SkillBar({
  name,
  value,
  delay,
}: {
  name: string;
  value: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-between text-xs">
        <span className="font-medium text-zinc-300">{name}</span>
        <span className="text-zinc-600">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300 shadow-[0_0_12px_rgba(59,130,246,.36)]"
        />
      </div>
    </div>
  );
}

export function ModalShell({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <div className="absolute inset-0 bg-[#050507]/88" />
          <motion.div
            className="modal-scroll-area relative z-10 max-h-[calc(100svh-1rem)] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/[.12] bg-[#0b0c11] shadow-[0_30px_100px_rgba(0,0,0,.65)] [will-change:transform,opacity] sm:max-h-[calc(100svh-4rem)] sm:rounded-[2rem]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/[.08] bg-[#0b0c11] px-5 py-4 sm:px-7">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">
                {title}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/[.1] text-zinc-400 transition-colors hover:border-blue-300/30 hover:text-white"
                aria-label={`Close ${title}`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
