"use client";

import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "./data";
import { Reveal } from "./shared";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-300/20 bg-[linear-gradient(120deg,#101827_0%,#111827_48%,#0e1118_100%)] px-6 py-16 text-center shadow-[0_25px_80px_rgba(0,0,0,.4)] sm:px-12 sm:py-20">
          <div className="absolute left-1/2 top-0 h-48 w-[46%] -translate-x-1/2 rounded-full bg-blue-400/[.18] blur-[90px]" />
          <Sparkles className="relative mx-auto h-5 w-5 text-blue-200" />
          <p className="relative mt-5 text-[11px] font-semibold uppercase tracking-[.22em] text-blue-200">
            Start a conversation
          </p>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-[-.065em] text-white sm:text-5xl">
            Let&apos;s build something amazing together.
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-sm leading-6 text-blue-100/55">
            Have an ambitious idea or a complex problem? I&apos;d love to hear what
            you&apos;re working on.
          </p>
          <Button className="relative mt-8" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Send Chat
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
