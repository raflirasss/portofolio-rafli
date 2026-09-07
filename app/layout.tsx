import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafli's Porto",
  description:
    "Portfolio of Rafli Rashadifa, a software engineer building intelligent products and modern web experiences.",
  keywords: [
    "Rafli Rashadifa",
    "Software Engineer",
    "AI",
    "Full Stack Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Rafli Rashadifa — Software Engineer & AI Enthusiast",
    description:
      "Intelligent software, AI-powered applications, and modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
