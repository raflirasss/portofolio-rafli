/**
 * Exports the portfolio as one A4 PDF.
 *
 *   npm run pdf
 *
 * Builds the site, serves it locally, opens /print/ in Chrome or Edge and saves
 * export/Portfolio-<Name>.pdf. Set PDF_BROWSER to a browser executable to use a
 * different Chrome/Edge/Chromium install.
 */
import { existsSync, mkdirSync } from 'node:fs';
import { build, preview } from 'astro';
import puppeteer from 'puppeteer-core';

const PORT = 4329;
const OUTPUT = 'export/Portfolio-Teuku-Muhammad-Rafli-Rashadifa.pdf';

const browserCandidates = [
  process.env.PDF_BROWSER,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const executablePath = browserCandidates.find((path) => existsSync(path));
if (!executablePath) {
  console.error('No Chrome/Edge found. Set PDF_BROWSER to the browser executable path.');
  process.exit(1);
}

await build({ logLevel: 'warn' });
const server = await preview({ server: { port: PORT }, logLevel: 'warn' });
const browser = await puppeteer.launch({ executablePath, headless: true });

try {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
  await page.goto(`http://localhost:${PORT}/print/`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);

  mkdirSync('export', { recursive: true });
  await page.pdf({
    path: OUTPUT,
    preferCSSPageSize: true,
    printBackground: true,
    tagged: true,
    outline: true,
  });
  console.log(`PDF saved to ${OUTPUT}`);
} finally {
  await browser.close();
  await server.stop();
}
