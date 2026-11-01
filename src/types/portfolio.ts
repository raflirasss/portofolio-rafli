/**
 * Content types for the portfolio.
 *
 * Everything shown on the site is described by these interfaces and lives in
 * src/data/portfolio.ts. Fields marked with `?` are optional — leave them out
 * and the UI simply hides that piece.
 */
import type { ImageMetadata } from 'astro';
import type { IconName } from '../utils/icons';

/**
 * An image can be either:
 * - an imported file from src/assets (recommended — Astro optimizes it), or
 * - a string path to a file in /public, e.g. "/images/projects/cover.jpg".
 */
export type ImageSource = ImageMetadata | string;

export interface ImageAsset {
  src: ImageSource;
  alt: string;
  /** CSS object-position used when the image is cropped, e.g. "50% 30%" to keep a face in frame. */
  position?: string;
}

/**
 * Short text that may contain *asterisks* around words. Those words are rendered
 * in the italic serif accent font, e.g. "Code with a *marketer's* eye."
 */
export type AccentText = string;

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'facebook'
  | 'shop'
  | 'tiktok'
  | 'youtube'
  | 'x'
  | 'dribbble'
  | 'website'
  | 'email'
  | 'whatsapp';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Full URL. Leave empty ("") to hide this link everywhere. */
  url: string;
  /** Optional handle shown next to the label, e.g. "@rafli". */
  handle?: string;
}

export interface PersonalInfo {
  fullName: string;
  /** Short name used in compact places (nav, footer). */
  shortName: string;
  /** 2–4 letters. Four letters render as a 2×2 monogram (e.g. "TMRR"). */
  monogram: string;
  /** One-line role shown in the hero meta row and SEO. */
  role: string;
  email: string;
  /** Local format is fine (e.g. 0851…). It is converted using `whatsappCountryCode`. */
  whatsapp: string;
  whatsappCountryCode: string;
  /** Pre-filled message when someone opens WhatsApp from the site. */
  whatsappMessage?: string;
  location?: string;
  /** Small status pill in the hero, e.g. "Open to opportunities". Omit to hide. */
  availability?: string;
  /** Main portrait — shown in the About section. */
  photo?: ImageAsset;
  /** Spoken / written languages, shown in About quick facts. */
  languages?: string[];
}

export interface CvInfo {
  /** Path to the PDF inside /public. Download buttons hide automatically if the file is missing. */
  path: string;
  /** File name suggested to the browser when downloading. */
  downloadName: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: AccentText;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string };
  /** Words orbiting the monogram and scrolling in the marquee. */
  disciplines: string[];
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface AboutContent {
  statement: AccentText;
  paragraphs: string[];
  facts: QuickFact[];
}

export interface SkillCategory {
  title: string;
  icon: IconName;
  description?: string;
  skills: string[];
}

export type ProjectStatus = 'Live' | 'Completed' | 'In progress' | 'Planning' | 'Ongoing' | 'Research';

export interface GalleryImage extends ImageAsset {
  caption?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  /** Picks the icon. Use 'shop' for marketplaces like Shopee or Tokopedia. */
  platform: SocialPlatform;
}

export interface ProjectDetailBlock {
  heading: string;
  /** A paragraph, or a list of bullet points. */
  body: string | string[];
}

export interface Project {
  /** URL-friendly id, used for /projects/<slug>. Must be unique. */
  slug: string;
  title: string;
  /** One or two sentences for the card. */
  summary: string;
  /** Longer intro used on the project page. Falls back to `summary`. */
  description?: string;
  /** Used for the filter chips on the homepage. */
  category: string;
  tags: string[];
  /** Technologies used. Leave empty ([]) to hide the list until you fill it in. */
  tech: string[];
  status?: ProjectStatus;
  year?: string;
  role?: string;
  /** Company you made this for / while working at, e.g. "PT Kinawa Argo International". */
  company?: string;
  /** Real cover image. Without one, a generated cover is drawn using `palette`. */
  cover?: ImageAsset;
  /** Two colors for the generated cover gradient. */
  palette: [string, string];
  links?: {
    live?: string;
    repo?: string;
    /** Other places to see the work, e.g. Instagram, Facebook or a marketplace store. */
    more?: ProjectLink[];
  };
  details?: ProjectDetailBlock[];
  /** Extra screenshots shown full-width on the project page. */
  gallery?: GalleryImage[];
  /** Featured projects take a full row on large screens. */
  featured?: boolean;
}

export type ExperienceType =
  | 'Full-time'
  | 'Part-time'
  | 'Internship'
  | 'Freelance'
  | 'Contract'
  | 'Volunteer'
  | 'Organization';

export interface Experience {
  role: string;
  organization: string;
  type?: ExperienceType;
  /** Free text, e.g. "Jan 2024 — Present". */
  period: string;
  location?: string;
  url?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  /** Slugs of projects made in this role — each gets a link to its project page. */
  projects?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  /** e.g. "3.59 / 4.00" */
  gpa?: string;
  description?: string;
  highlights?: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  /** Kind of credential, e.g. "Course completion certificate". */
  kind?: string;
  /** Free text, e.g. "March 2025". */
  date: string;
  /** Free text, e.g. "June 2027". */
  validUntil?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  /** Preview image of the certificate (e.g. the first page of the PDF). */
  image?: ImageAsset;
  /** Path to the original PDF in /public, e.g. "/documents/certificates/aws.pdf". */
  file?: string;
  tags?: string[];
}

export interface Milestone {
  title: string;
  organization: string;
  /** Free text, e.g. "August 2026". */
  date: string;
  /** Large decorative year next to the milestone. */
  year?: string;
  image: ImageAsset;
  caption?: string;
  description?: string;
  facts?: QuickFact[];
}

export interface SectionCopy {
  /** Label used in the section eyebrow (and the navigation unless `navLabel` is set). */
  label: string;
  /** Shorter label for the navigation, if `label` is long. */
  navLabel?: string;
  title: AccentText;
  intro?: string;
}

export interface SectionsContent {
  about: SectionCopy;
  skills: SectionCopy;
  projects: SectionCopy;
  experience: SectionCopy;
  education: SectionCopy;
  milestones: SectionCopy;
  certificates: SectionCopy;
  contact: SectionCopy & { cta: string };
}

export interface SeoConfig {
  /** Production URL without trailing slash. Used for canonical URLs, sitemap and OG. */
  siteUrl: string;
  title: string;
  /** Appended to sub-page titles: "Arenesia — <titleSuffix>". */
  titleSuffix: string;
  description: string;
  keywords: string[];
  /** Image in /public, ideally 1200×630. */
  ogImage: string;
  locale: string;
  lang: string;
  twitterHandle?: string;
}

export interface Portfolio {
  personal: PersonalInfo;
  cv: CvInfo;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  milestones: Milestone[];
  certificates: Certificate[];
  socials: SocialLink[];
  sections: SectionsContent;
  seo: SeoConfig;
}
