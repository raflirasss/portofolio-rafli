/**
 * Small helpers that turn the raw content in src/data/portfolio.ts into
 * what components need. Components import from here instead of re-deriving.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { portfolio } from '../data/portfolio';
import type { Project, SectionsContent, SocialLink } from '../types/portfolio';

const {
  personal,
  sections,
  projects,
  experience,
  education,
  milestones,
  certificates,
  skills,
  socials,
  seo,
  cv,
} = portfolio;

/* ── Text ─────────────────────────────────────────────────────────────── */

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

/** Escapes text and turns *word* into the italic serif accent. Use with `set:html`. */
export function accent(text: string): string {
  return escapeHtml(text).replace(/\*(.+?)\*/g, '<em class="accent-serif">$1</em>');
}

/** Removes the *accent* markers, e.g. for plain-text titles. */
export const plain = (text: string) => text.replace(/\*/g, '');

/** True for values still containing a "[placeholder]". */
export const isPlaceholder = (value?: string) => !!value && /\[.+\]/.test(value);

/* ── Links ────────────────────────────────────────────────────────────── */

export function whatsappLink(number = personal.whatsapp, message = personal.whatsappMessage) {
  const digits = number.replace(/\D/g, '');
  const international = digits.startsWith('0')
    ? personal.whatsappCountryCode + digits.slice(1)
    : digits;
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${international}${query}`;
}

/** 085163138747 → 0851-6313-8747 */
export function formatPhone(number = personal.whatsapp) {
  const digits = number.replace(/\D/g, '');
  return digits.replace(/^(\d{4})(\d{4})(\d+)$/, '$1-$2-$3');
}

export const mailtoLink = (email = personal.email) => `mailto:${email}`;

/** Socials with a URL filled in. */
export const activeSocials: SocialLink[] = socials.filter((social) => social.url.trim() !== '');

/**
 * True when the CV file really exists in /public. Checked at build time, so the
 * download buttons never point at a missing file.
 */
export const cvAvailable = existsSync(join(process.cwd(), 'public', cv.path));

export const isExternal = (href: string) => /^https?:\/\//.test(href);

/** Absolute URL on the production site, used for canonical/OG tags. */
export const absoluteUrl = (path = '/') => new URL(path, seo.siteUrl + '/').toString();

/* ── Sections & navigation ────────────────────────────────────────────── */

export type SectionId = keyof SectionsContent;

const sectionHasContent: Record<SectionId, boolean> = {
  about: true,
  skills: skills.length > 0,
  projects: projects.length > 0,
  experience: experience.length > 0,
  education: education.length > 0,
  milestones: milestones.length > 0,
  certificates: certificates.length > 0,
  contact: true,
};

export const isSectionEnabled = (id: SectionId) => sectionHasContent[id];

const sectionOrder: SectionId[] = [
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'milestones',
  'certificates',
  'contact',
];

/** Visible sections, numbered in order — used for nav links and "(01)" eyebrows. */
export const visibleSections = sectionOrder
  .filter(isSectionEnabled)
  .map((id, index) => ({
    id,
    label: sections[id].navLabel ?? sections[id].label,
    number: String(index + 1).padStart(2, '0'),
  }));

export const sectionNumber = (id: SectionId) =>
  visibleSections.find((section) => section.id === id)?.number ?? '';

export const navItems = [
  { id: 'top', label: 'Home', href: '/#top' },
  ...visibleSections.map((section) => ({
    id: section.id,
    label: section.label,
    href: `/#${section.id}`,
  })),
];

/* ── Projects ─────────────────────────────────────────────────────────── */

export const projectUrl = (project: Project) => `/projects/${project.slug}/`;

export const projectCategories = [...new Set(projects.map((project) => project.category))];

export function getProjectNeighbours(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: projects[(index + 1) % projects.length],
  };
}

/** Initials for generated covers: "Human Activity Detection" → "HA". */
export const initials = (text: string) =>
  text
    .split(/[\s&—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('');
