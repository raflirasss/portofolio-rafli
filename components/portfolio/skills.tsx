"use client";

import { Database, Network } from "lucide-react";
import { skills, stackLabels, stacks } from "./data";
import { Reveal, SectionHeading, SkillBar } from "./shared";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="A versatile toolkit, intentionally applied."
        />
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <Reveal className="rounded-3xl border border-white/[.09] bg-[#101014] p-6 sm:p-8">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm font-medium text-zinc-200">Core technologies</p>
            <Network className="h-5 w-5 text-blue-300" />
          </div>
          <div className="space-y-5">
            {skills.map(([name, value], index) => (
              <SkillBar key={name} name={name} value={value} delay={index * 0.08} />
            ))}
          </div>
        </Reveal>
        <Reveal
          className="rounded-3xl border border-white/[.09] bg-[#101014] p-6 sm:p-8"
          delay={0.1}
        >
          <div className="mb-9 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-200">Tech stack</p>
              <p className="mt-1 text-xs text-zinc-500">Tools I reach for</p>
            </div>
            <Database className="h-5 w-5 text-blue-300" />
          </div>
          <div className="grid grid-cols-5 gap-2.5">
            {stacks.map((item, index) => (
              <div
                key={item}
                className="group grid aspect-square place-items-center rounded-xl border border-white/[.08] bg-white/[.025] text-[11px] font-semibold text-zinc-400 hover:border-blue-300/35 hover:text-blue-200"
                title={stackLabels[index]}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 border-t border-white/[.07] pt-5 text-sm leading-6 text-zinc-500">
            The right tool is the one that keeps the product simple, the team moving,
            and the next decision easy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
