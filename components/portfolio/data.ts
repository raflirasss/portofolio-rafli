export const navItems = ["About", "Projects", "Skills", "Experience", "Contact"];

export const whatsappUrl =
  "https://wa.me/6285163138747?text=Halo%20Rafli%2C%20saya%20ingin%20berdiskusi%20tentang%20sebuah%20project.";

export const skills = [
  ["Python", 92],
  ["TypeScript", 89],
  ["React / Next.js", 91],
  ["Computer Vision", 86],
  ["Laravel", 82],
  ["SQL & Docker", 84],
] as const;

export const stacks = ["PY", "TS", "R", "N", "L", "CV", "YO", "SQL", "D", "GIT"];
export const stackLabels = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Laravel",
  "OpenCV",
  "YOLO",
  "SQL",
  "Docker",
  "Git",
];

export const projects = [
  {
    id: "vision",
    index: "01",
    title: "VisionTrack",
    type: "Computer vision platform",
    description:
      "A real-time visual intelligence layer that turns video streams into clear, actionable signals.",
    tags: ["Python", "YOLO", "OpenCV"],
    tone: "blue",
  },
  {
    id: "orbit",
    index: "02",
    title: "Orbit OS",
    type: "Full-stack workspace",
    description:
      "A focused command center for projects, decisions, and the work that moves teams forward.",
    tags: ["Next.js", "TypeScript", "SQL"],
    tone: "violet",
  },
  {
    id: "signal",
    index: "03",
    title: "Signal API",
    type: "Developer infrastructure",
    description:
      "A clean, resilient backend foundation designed for fast-moving products and reliable data flows.",
    tags: ["Laravel", "Docker", "REST"],
    tone: "slate",
  },
];

export const timeline = [
  [
    "Now",
    "Independent engineering",
    "Designing and shipping intelligent digital products with a focus on utility, clarity, and durable architecture.",
  ],
  [
    "Focus",
    "AI & computer vision",
    "Exploring practical visual intelligence—from data pipelines and detection to product-ready interfaces.",
  ],
  [
    "Foundation",
    "Full-stack development",
    "Building polished web applications across React, Next.js, Laravel, databases, and deployment tooling.",
  ],
] as const;
