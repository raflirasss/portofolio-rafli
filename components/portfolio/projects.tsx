"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, whatsappUrl } from "./data";
import { ProjectPreview } from "./project-preview";
import { Reveal, SectionHeading } from "./shared";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Building useful things with an edge."
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1 text-sm text-zinc-400 hover:text-white sm:flex"
          >
            Discuss a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </SectionHeading>
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-white/[.09] bg-[#101014] transition-all duration-500 hover:-translate-y-1 hover:border-blue-300/30 hover:shadow-[0_0_0_1px_rgba(96,165,250,.08),0_25px_65px_rgba(0,0,0,.42),0_0_32px_rgba(59,130,246,.1)]",
              index === 0 && "lg:col-span-2",
            )}
            delay={index * 0.08}
          >
            <div
              className={cn(
                "overflow-hidden border-b border-white/[.08]",
                index === 0 ? "h-[245px] sm:h-[310px]" : "h-[210px]",
              )}
            >
              <div className="h-full transition-transform duration-700 group-hover:scale-[1.045]">
                <ProjectPreview id={project.id} tone={project.tone} />
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.17em] text-blue-300">
                    {project.index} — {project.type}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-.045em] text-white">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 text-zinc-500" />
              </div>
              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[.08] bg-white/[.025] px-2.5 py-1 text-[11px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/raflirasss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </a>
                  <a
                    href="https://youtu.be/HZLDjw3zvac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-300"
                  >
                    Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
