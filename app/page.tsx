"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CursorGlow, ModalShell } from "@/components/portfolio/shared";
import {
  AINetwork,
  HeroContent,
  Navbar,
  ProfileFrame,
} from "@/components/portfolio/hero";
import { AboutSection } from "@/components/portfolio/about";
import { ProjectsSection } from "@/components/portfolio/projects";
import { SkillsSection } from "@/components/portfolio/skills";
import { ExperienceSection } from "@/components/portfolio/experience";
import { ContactSection } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 55, damping: 22 });
  const springY = useSpring(y, { stiffness: 55, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);
  const onHeroMove = (event: React.MouseEvent<HTMLElement>) => {
    if (activePanel) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <main
      onMouseMove={onHeroMove}
      className={`relative isolate h-screen overflow-x-hidden overflow-y-auto bg-canvas lg:overflow-hidden ${activePanel ? "modal-open" : ""}`}
    >
      <CursorGlow />
      <div className="page-grid pointer-events-none absolute inset-x-0 top-0 z-0 h-[900px]" />
      <div className="noise pointer-events-none fixed inset-0 z-30" />
      <div className="hero-aura pointer-events-none absolute inset-x-0 top-0 z-0 h-[800px]" />
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={setActivePanel}
      />
      <section
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl items-center gap-8 px-4 pb-10 pt-8 sm:gap-12 sm:px-5 sm:pb-16 sm:pt-10 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[1.06fr_.94fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-8"
      >
        <AINetwork />
        <HeroContent onNavigate={setActivePanel} />
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          className="relative lg:justify-self-end"
        >
          <ProfileFrame />
        </motion.div>
      </section>
      <Footer />
      <ModalShell
        open={activePanel !== null}
        title={
          activePanel
            ? `${activePanel.charAt(0).toUpperCase()}${activePanel.slice(1)}`
            : "Portfolio"
        }
        onClose={() => setActivePanel(null)}
      >
        {activePanel === "about" && <AboutSection />}
        {activePanel === "projects" && <ProjectsSection />}
        {activePanel === "skills" && <SkillsSection />}
        {activePanel === "experience" && <ExperienceSection />}
        {activePanel === "contact" && <ContactSection />}
      </ModalShell>
    </main>
  );
}
