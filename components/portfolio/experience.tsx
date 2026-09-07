"use client";

import { cn } from "@/lib/utils";
import { timeline } from "./data";
import { Reveal, SectionHeading } from "./shared";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32"
    >
      <Reveal>
        <SectionHeading eyebrow="Trajectory" title="Experience shaped by curiosity." />
      </Reveal>
      <Reveal className="rounded-3xl border border-white/[.09] bg-[#101014] p-6 sm:p-8">
        <div className="relative ml-2 border-l border-white/[.1] pl-7 sm:ml-4 sm:pl-10">
          {timeline.map(([period, title, description], index) => (
            <div key={title} className={cn("relative", index !== 2 && "pb-10")}>
              <span className="absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full border-2 border-[#101014] bg-blue-400 shadow-[0_0_0_3px_rgba(59,130,246,.18)] sm:-left-[2.8rem]" />
              <div className="grid gap-2 sm:grid-cols-[130px_1fr]">
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-300">
                  {period}
                </p>
                <div>
                  <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
