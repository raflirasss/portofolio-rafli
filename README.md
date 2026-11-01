# Teuku Muhammad Rafli Rashadifa — Portfolio

A personal portfolio built with **Astro**, **TypeScript**, **Tailwind CSS v4** and **Lucide** icons.
It's a static site with no backend, database or API, ready to deploy on **Vercel**.

All content lives in **one file**: [`src/data/portfolio.ts`](src/data/portfolio.ts).

---

## Contents

- [Quick start](#quick-start)
- [Before you publish — checklist](#before-you-publish--checklist)
- [Project structure](#project-structure)
- [Customizing content](#customizing-content)
  1. [Profile information](#1-change-your-profile-information)
  2. [Add a project](#2-add-a-new-project)
  3. [Add a certificate](#3-add-a-new-certificate)
  4. [Add work experience](#4-add-work-experience)
  5. [Change your CV](#5-change-your-cv-pdf)
  6. [Social links](#6-change-social-media-links)
  7. [Colors, fonts & theme](#7-customize-colors-fonts-and-theme)
  8. [Images](#8-add-or-replace-images)
- [SEO](#seo)
- [Deploying to Vercel](#deploying-to-vercel)
- [Design & interaction notes](#design--interaction-notes)

---

## Quick start

Requirements: **Node.js 22.12+** (Node 24 recommended) and npm.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:4321.

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload                      |
| `npm run build`   | Type-check (`astro check`) and build to `dist/`           |
| `npm run preview` | Serve the production build locally                        |
| `npm run assets`  | Regenerate favicon PNGs and the Open Graph image          |

---

## Before you publish — checklist

Your CV, photos, the Dicoding certificate and the NAN Ocean screenshot are already in
place. What's left is marked `TODO` in `src/data/portfolio.ts`:

- [ ] `socials`: your GitHub and LinkedIn URLs (empty links are hidden automatically)
- [ ] `projects` → NAN Ocean Services: list the technologies you used (`tech: []` hides the list), plus year and role
- [ ] `projects` → Human Activity Detection, BKF Cafe Supplies, Arenesia: confirm status, add tech, links and covers when ready
- [ ] `skills` → "Web & Software": add the languages and frameworks you use
- [ ] `personal.availability`: confirm the "Open to opportunities" pill, or remove it
- [ ] `seo.siteUrl`: set to `https://rafliras.vercel.app` (the URL on your CV). Change it if you deploy elsewhere.
- [ ] Optional: run `npm run assets` if you change your name or monogram (it updates the OG image)

---

## Project structure

```
├── public/                       ← served as-is, never processed
│   ├── documents/
│   │   ├── cv.pdf                                         ← your CV
│   │   └── certificates/dicoding-aws-cloud-practitioner.pdf
│   ├── favicon.svg, favicon-32.png, apple-touch-icon.png
│   └── og-image.png              ← social preview image (1200×630)
├── scripts/generate-assets.mjs   ← regenerates favicons + OG image
├── src/
│   ├── assets/                   ← images, optimized by Astro at build time
│   │   ├── profile/rafli-profile.png
│   │   ├── achievements/graduation-2026.jpg
│   │   ├── projects/nan-ocean-homepage.png
│   │   └── certificates/dicoding-aws-cloud-practitioner.png   ← preview of the PDF
│   ├── components/
│   │   ├── cards/                ← ProjectCard, SkillCard, CertificateCard
│   │   ├── layout/               ← BaseHead (SEO + theme script), Footer
│   │   ├── navigation/           ← Navbar, MobileMenu, ThemeToggle
│   │   ├── sections/             ← Hero, About, Skills, Projects, Experience, Education, Milestones, Certificates, Contact
│   │   └── ui/                   ← Button, Tag, Icon, BrandIcon, Logo, ProjectCover, SmartImage…
│   ├── data/portfolio.ts         ← ★ ALL CONTENT ★
│   ├── layouts/BaseLayout.astro  ← fonts, global CSS, nav, footer
│   ├── pages/
│   │   ├── index.astro           ← one-page portfolio
│   │   ├── projects/[slug].astro ← a detail page for every project
│   │   ├── 404.astro
│   │   └── robots.txt.ts
│   ├── scripts/main.ts           ← interactions (theme, nav, reveal, filter, copy…)
│   ├── styles/global.css         ← design tokens, base styles, motion
│   ├── types/portfolio.ts        ← TypeScript types for the content
│   └── utils/                    ← content helpers + icon registry
├── astro.config.ts
└── vercel.json
```

Components contain no personal content. They all read from `portfolio.ts` through
`src/utils/content.ts`.

---

## Customizing content

Open `src/data/portfolio.ts`. Your editor autocompletes and checks every field against
`src/types/portfolio.ts`, so mistakes show up as red squiggles (and `npm run build` fails on them).

**Tips**

- Optional fields (marked `?` in the types) can be deleted. The UI hides them.
- An **empty array** hides the whole section **and** its navigation link (for example `certificates: []`).
- In titles, wrap words in `*asterisks*` to set them in the italic serif accent:
  `title: 'Selected *work*.'`

### 1. Change your profile information

```ts
personal: {
  fullName: 'Teuku Muhammad Rafli Rashadifa',
  shortName: 'Rafli',
  monogram: 'TMRR',            // 4 letters → 2×2 logo; 1–3 letters → single line
  role: 'Informatics Engineering · Web, Software & Digital Marketing',
  email: 'rrashadifa@gmail.com',
  whatsapp: '085163138747',    // local format is fine…
  whatsappCountryCode: '62',   // …it becomes wa.me/6285163138747
  whatsappMessage: "Hi Rafli, …",
  location: 'City, Country',         // optional
  availability: 'Open to opportunities', // optional pill in the hero
  languages: ['Indonesian', 'English'],  // optional, shown in About
},
```

The hero copy is under `hero`, the About text under `about`, and the section headings
under `sections`.

### 2. Add a new project

Add an object to the `projects` array. Cards, filter chips and the detail page at
`/projects/<slug>/` are all generated from it.

```ts
{
  slug: 'my-new-project',              // unique, URL-safe
  title: 'My New Project',
  summary: 'One or two sentences for the card.',
  description: 'Longer intro for the project page (optional).',
  category: 'Web & Software',          // new categories create new filter chips
  tags: ['Web App', 'Dashboard'],
  tech: ['Astro', 'TypeScript', 'Supabase'],
  status: 'Completed',                 // 'Completed' | 'In progress' | 'Planning' | 'Ongoing' | 'Research'
  year: '2026',
  role: 'Frontend developer',
  palette: ['#6366f1', '#0f172a'],     // colors for the generated cover
  cover: { src: myCover, alt: 'Dashboard screenshot' }, // optional real image
  links: {
    live: 'https://example.com',
    repo: 'https://github.com/you/repo',
  },
  details: [
    { heading: 'Problem', body: 'A paragraph…' },
    { heading: 'What I built', body: ['A bullet', 'Another bullet'] },
  ],
  featured: true,                      // optional — takes a full row on desktop
},
```

The order of the array is the order on the site. To remove a project, delete its object.

### 3. Add a new certificate

1. Put the PDF in `public/documents/certificates/`.
2. Optionally add a preview image (for example a PNG of the first page) in `src/assets/certificates/` and import it at the top of `portfolio.ts`.
3. Add an entry:

```ts
import rwdPreview from '../assets/certificates/freecodecamp-rwd.png';
// …
certificates: [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    kind: 'Course completion certificate',             // optional label next to the issuer
    date: 'March 2026',
    validUntil: 'March 2029',                          // optional
    credentialId: 'ABC-123',                           // optional
    credentialUrl: 'https://…',                        // optional → "Verify credential" button
    description: 'What the course covered.',           // optional
    image: { src: rwdPreview, alt: 'Responsive Web Design certificate' }, // optional preview
    file: '/documents/certificates/freecodecamp-rwd.pdf', // optional → "View PDF" button
    tags: ['Web Development'],
  },
  // …more
],
```

With one certificate, the card uses a wide layout. With two or more, it switches to a grid.

### 3b. Add an achievement or milestone

The "Achievements & Milestones" section reads `milestones`. Each entry needs a photo:

```ts
import awardPhoto from '../assets/achievements/award-2027.jpg';
// …
milestones: [
  {
    title: 'Best Capstone Project',
    organization: 'STT Terpadu Nurul Fikri',
    date: 'March 2027',
    year: '2027',                                     // large outlined year
    image: { src: awardPhoto, alt: 'Describe the photo', position: '50% 30%' },
    caption: 'Short caption under the photo.',
    description: 'One or two sentences.',
    facts: [{ label: 'Category', value: 'Research' }],
  },
],
```

Entries alternate image left and right on desktop.

### 4. Add work experience

Add entries to `experience`, most recent first:

```ts
{
  role: 'Web Developer Intern',
  organization: 'Company name',
  type: 'Internship',          // Full-time | Part-time | Internship | Freelance | Contract | Volunteer | Organization
  period: 'Jul 2025 — Sep 2025',
  location: 'Remote',          // optional
  url: 'https://company.com',  // optional, links the organization name
  description: 'What you did, in one or two sentences.',
  highlights: ['Something specific you built'], // optional bullets
  tags: ['Astro', 'TypeScript'],                // optional
},
```

Education works the same way, in the `education` array.

### 5. Change your CV PDF

The easiest way is to overwrite `public/documents/cv.pdf` with your new CV, keeping the same file name.
If the file is ever missing, every "Download CV" button hides itself (checked at build time),
so the site never links to a broken file.

To use a different file name, put the file in `public/documents/` and update:

```ts
cv: {
  path: '/documents/Rafli-CV-2026.pdf',
  downloadName: 'CV-Teuku-Muhammad-Rafli-Rashadifa.pdf', // name the visitor's browser saves it as
},
```

The hero button, the navbar "CV" button and the mobile menu all use this.

### 6. Change social media links

```ts
socials: [
  { platform: 'github',    label: 'GitHub',    url: 'https://github.com/your-username' },
  { platform: 'linkedin',  label: 'LinkedIn',  url: 'https://www.linkedin.com/in/your-handle' },
  { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/…', handle: '@you' },
  { platform: 'tiktok',    label: 'TikTok',    url: '' },  // empty = hidden
],
```

Supported platforms: `github`, `linkedin`, `instagram`, `tiktok`, `youtube`, `x`,
`dribbble`, `website`, `email`, `whatsapp`. Socials appear in the Contact section,
the footer and the mobile menu. Email and WhatsApp in Contact come from `personal`.

### 7. Customize colors, fonts and theme

**Colors** are CSS variables at the top of [`src/styles/global.css`](src/styles/global.css):

```css
:root {                 /* light mode */
  --bg: #f4f2ed;        /* page background (warm paper) */
  --ink: #0e0e10;       /* main text */
  --muted: #5f5f67;     /* secondary text */
  --accent: #2f45f5;    /* signature color: links, highlights, accents */
  --warm: #f0551f;      /* small secondary highlight */
  …
}
[data-theme='dark'] {   /* dark mode */
  --bg: #09090b;
  --accent: #93a0ff;
  …
}
```

They're available as Tailwind classes, for example `bg-bg`, `text-ink`, `text-muted`,
`border-line` and `text-accent`. Keep text-to-background contrast at 4.5:1 or higher for
accessibility. If you change the accent color, update `ACCENT` in
`scripts/generate-assets.mjs` and run `npm run assets` so the favicon and OG image match.

**Fonts** are self-hosted with Fontsource (no Google Fonts request):

1. Install a font: `npm install @fontsource-variable/<font-name>`
2. Swap the import in `src/layouts/BaseLayout.astro`
3. Update `--font-sans`, `--font-serif` or `--font-mono` in `src/styles/global.css`

Current fonts: **Inter Tight** (sans), **Instrument Serif** (italic accents) and
**JetBrains Mono** (labels).

**Theme behavior:** the first visit follows the system setting. The visitor's choice is
saved in `localStorage` (`theme` key). The toggle uses a circular reveal where the browser
supports View Transitions, and falls back to a color fade elsewhere.

### 8. Add or replace images

All images live in `src/assets/` and are imported at the top of `portfolio.ts`. At build
time Astro converts them to WebP in several sizes and lazy-loads them. The original files
are never sent to visitors, so you can keep high-quality originals there.

| Image                 | File                                                   |
| --------------------- | ------------------------------------------------------ |
| Profile portrait      | `src/assets/profile/rafli-profile.png`                 |
| Graduation photo      | `src/assets/achievements/graduation-2026.jpg`          |
| NAN Ocean screenshot  | `src/assets/projects/nan-ocean-homepage.png`           |
| Dicoding preview      | `src/assets/certificates/dicoding-aws-cloud-practitioner.png` |

**Replace a photo:** overwrite the file and keep the same name. Nothing else changes.

**Add a new image** (for example a project cover):

```ts
import myProjectCover from '../assets/projects/my-project.jpg';
// …
{ slug: 'my-project', cover: { src: myProjectCover, alt: 'Describe the screenshot' }, … }
```

**Crop control:** `position` sets which part of the image stays in frame when it's cropped
(CSS `object-position`), for example `position: '50% 30%'` keeps a face near the top in view.
Images are never stretched. They're cropped with `object-fit: cover`.

Displayed shapes: portrait **4:5** (About), project covers **16:11**,
milestone photos **4:5**, certificate previews **A4 landscape**. Always write a meaningful
`alt`. Without a photo or cover, the site shows a designed placeholder (monogram art or a
generated gradient cover) instead of a stock image.

(A plain string path to a file in `public/` also works, e.g. `src: '/my-image.jpg'`, but it
skips optimization.)

---

## SEO

- Title, description, keywords and the canonical URL come from `seo` in `portfolio.ts`
- Open Graph and Twitter cards use `public/og-image.png` (1200×630)
- JSON-LD `Person` structured data, including your social profiles
- `sitemap-index.xml` is generated at build time (`@astrojs/sitemap`)
- `robots.txt` is generated from `seo.siteUrl`
- Semantic landmarks, one `h1` per page, a skip link, and focus styles
- Fonts are self-hosted, there's no client framework, and JS is a single small module

---

## Deploying to Vercel

1. Push this folder to a GitHub repository:

   ```bash
   git init
   ```

   ```bash
   git add . && git commit -m "Initial portfolio"
   ```

   ```bash
   git remote add origin https://github.com/<you>/<repo>.git && git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects **Astro** automatically (also set in `vercel.json`):
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.
5. Copy the production URL (or add your custom domain under _Settings → Domains_), put it in
   `seo.siteUrl`, then commit and push. Vercel redeploys automatically.

You can also deploy from the CLI: `npm i -g vercel`, then run `vercel` (preview) or
`vercel --prod`.

---

## Design & interaction notes

- **Concept: "Editorial meets interface."** Oversized tight display type, italic serif
  accents, mono labels, generous whitespace and a single signature accent color
- **Hero:** an oversized name with a line-by-line reveal, followed by a marquee of disciplines
- **Navigation:** a floating glass pill with a sliding active indicator (scrollspy). It hides
  on scroll down and returns on scroll up. On mobile it becomes a full-screen menu with
  staggered links
- **Projects:** a cursor spotlight on cards, cover zoom, category filter with animated
  re-layout (View Transitions), and a detail page whose cover morphs from the card
- **Motion:** scroll reveals use `IntersectionObserver`. Everything respects
  `prefers-reduced-motion`, and content is never hidden when JavaScript is off
- **Accessibility:** keyboard-friendly menu (Escape closes it, focus is managed), visible
  focus rings, `aria-current` on nav links, live-region announcements for the filter and
  copy-email, and contrast-checked colors in both themes
