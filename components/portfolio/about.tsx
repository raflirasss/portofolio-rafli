"use client";

import { Code2, GraduationCap, Languages, Palette, Video } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";

const programmingLanguages = ["HTML", "CSS", "React.js", "Next.js"];
const creativeTools = ["CapCut", "Canva"];
const spokenLanguages = ["Indonesian — native", "English"];

function AboutCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/[.09] bg-[#101014] p-6 transition-colors hover:border-blue-300/25">
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/[.08] blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="relative flex items-center gap-3 text-zinc-100">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-blue-300/20 bg-blue-400/[.08] text-blue-300">
          {icon}
        </span>
        <h3 className="text-base font-semibold tracking-[-.03em]">{title}</h3>
      </div>
      <div className="relative mt-7">{children}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-white/[.09] bg-white/[.035] px-2.5 py-1.5 text-[11px] font-medium text-zinc-300">
      {children}
    </span>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"
    >
      <Reveal>
        <SectionHeading
          eyebrow="About me"
          title="A practical builder with a creative edge."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mb-8 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg">
          I build full-stack products with a focus on clear interfaces, reliable
          systems, and useful technology. Alongside software, I enjoy shaping visual
          stories through video and poster editing.
        </p>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal delay={0.1}>
          <AboutCard icon={<Code2 className="h-4 w-4" />} title="Programming languages">
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((language) => (
                <Tag key={language}>{language}</Tag>
              ))}
            </div>
            <div className="mt-7 border-t border-white/[.08] pt-5">
              <div className="mb-3 flex items-center gap-2 text-xs font-medium text-zinc-400">
                <Palette className="h-3.5 w-3.5 text-blue-300" /> Creative editing
              </div>
              <div className="flex flex-wrap gap-2">
                {creativeTools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </div>
          </AboutCard>
        </Reveal>

        <Reveal delay={0.16}>
          <AboutCard icon={<GraduationCap className="h-4 w-4" />} title="Education">
            <p className="text-lg font-medium leading-7 tracking-[-.025em] text-zinc-100">
              Bachelor of Informatics Engineering
            </p>
            <p className="mt-2 text-sm leading-6 text-blue-200/75">
              Sekolah Tinggi Teknologi Terpadu Nurul Fikri
            </p>
            <div className="mt-6 border-t border-white/[.08] pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-blue-300">
                Thesis topic
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Implementation of Human Activity Detection and Tracking for
                Administrative Area Monitoring Using YOLO
              </p>
              <p className="mt-3 text-xs leading-5 text-zinc-600">
                Case Study: PT PNM Mekaar
              </p>
            </div>
          </AboutCard>
        </Reveal>

        <Reveal delay={0.22}>
          <AboutCard icon={<Languages className="h-4 w-4" />} title="Spoken languages">
            <div className="space-y-3">
              {spokenLanguages.map((language) => (
                <div
                  key={language}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  {language}
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-center gap-2 border-t border-white/[.08] pt-5 text-xs text-zinc-500">
              <Video className="h-3.5 w-3.5 text-blue-300" /> Comfortable communicating
              across technical and creative work.
            </div>
          </AboutCard>
        </Reveal>
      </div>
    </section>
  );
}
