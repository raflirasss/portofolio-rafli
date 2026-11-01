/**
 * Regenerates the favicon PNGs and the Open Graph image from SVG templates.
 * Run with: npm run assets   (only needed if you change your name/monogram/colors)
 */
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const ACCENT = '#2f45f5';
const INK = '#0e0e10';
const PAPER = '#f4f2ed';
const NAME_TOP = 'Teuku Muhammad';
const NAME_BOTTOM = ['Rafli', 'Rashadifa'];
const ROLE = 'Informatics Engineering · Web, Software &amp; Digital Marketing';
const MONO = ['TM', 'RR'];

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="${ACCENT}"/>
  <g font-family="Consolas, 'JetBrains Mono', ui-monospace, monospace" font-weight="700" font-size="21" fill="#fff" text-anchor="middle" letter-spacing="1">
    <text x="32" y="29">${MONO[0]}</text>
    <text x="32" y="50">${MONO[1]}</text>
  </g>
</svg>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="0.85" cy="0.3" r="0.6">
      <stop offset="0" stop-color="${ACCENT}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g stroke="${INK}" stroke-opacity="0.08">
    ${Array.from({ length: 11 }, (_, i) => `<line x1="${(i + 1) * 100}" y1="0" x2="${(i + 1) * 100}" y2="630"/>`).join('')}
  </g>
  <g fill="none" stroke="${INK}" stroke-opacity="0.18">
    <circle cx="960" cy="230" r="170" stroke-dasharray="4 8"/>
    <circle cx="960" cy="230" r="110"/>
  </g>
  <circle cx="960" cy="230" r="62" fill="${INK}"/>
  <g font-family="Consolas, 'JetBrains Mono', monospace" font-weight="700" font-size="30" fill="${PAPER}" text-anchor="middle" letter-spacing="2">
    <text x="960" y="224">${MONO[0]}</text><text x="960" y="258">${MONO[1]}</text>
  </g>
  <circle cx="1130" cy="230" r="7" fill="#f0551f"/>
  <text x="72" y="96" font-family="Consolas, monospace" font-size="20" letter-spacing="2" fill="#5f5f67">(PORTFOLIO)</text>
  <g font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-weight="600" fill="${INK}" letter-spacing="-4">
    <text x="66" y="420" font-size="92">${NAME_TOP}</text>
    <text x="66" y="520" font-size="92">${NAME_BOTTOM[0]} <tspan font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-weight="400" fill="${ACCENT}" letter-spacing="-2">${NAME_BOTTOM[1]}</tspan></text>
  </g>
  <text x="72" y="580" font-family="'Segoe UI', Arial, sans-serif" font-size="24" fill="#34343a">${ROLE}</text>
</svg>`;

await writeFile('public/favicon.svg', favicon);
await sharp(Buffer.from(favicon)).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(Buffer.from(favicon)).resize(180, 180).flatten({ background: ACCENT }).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og-image.png');
console.log('Assets generated in /public');
