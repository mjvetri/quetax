// @license SPDX-License-Identifier: Apache-2.0
//
// Runs automatically after `npm run build` (npm auto-runs "postbuild").
// Generates a real static index.html per route (dist/about/index.html,
// dist/services/index.html, ...) so search engines AND AI crawlers that
// don't execute JavaScript still see a unique <title>, meta description,
// canonical URL, and Open Graph tags for every page — not just the homepage.
//
// IMPORTANT: keep PAGE_META below in sync with src/components/PageSEO.tsx.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const templatePath = path.join(distDir, 'index.html');

const SITE_URL = 'https://quetax.com';

const PAGE_META = {
  about: {
    title: 'About QuetaX — Our Team & Story',
    description:
      'Learn about QuetaX, a software development studio based at Tidel Neo, Villupuram, Tamil Nadu, building web, mobile, and custom software products.',
    path: '/about',
  },
  services: {
    title: 'Services — Web, Mobile & Custom Software Development | QuetaX',
    description:
      'Explore QuetaX services: website development, mobile app development, custom software engineering, and cloud/AI solutions.',
    path: '/services',
  },
  work: {
    title: 'Our Work — Case Studies & Projects | QuetaX',
    description:
      'Browse case studies and projects delivered by QuetaX across web, mobile, custom software, and AI & cloud engagements.',
    path: '/work',
  },
  innovation: {
    title: 'Innovation & R&D | QuetaX',
    description:
      'See what QuetaX is building in R&D — experimental products and active innovation initiatives.',
    path: '/innovation',
  },
  process: {
    title: 'Our Process — How QuetaX Delivers Projects',
    description:
      'A look at how QuetaX plans, builds, and ships projects — from kickoff to launch, step by step.',
    path: '/process',
  },
  contact: {
    title: 'Contact QuetaX — Start a Project',
    description:
      'Get in touch with QuetaX to start your next website, app, or custom software project. Based in Villupuram, Tamil Nadu, India.',
    path: '/contact',
  },
};

if (!existsSync(templatePath)) {
  console.error('[prerender] dist/index.html not found — run `vite build` first.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf8');

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildPageHtml(meta) {
  let html = template;
  const url = `${SITE_URL}${meta.path}`;

  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(meta.title)}</title>`);
  html = html.replace(
    /<meta name="title" content=".*?" \/>/,
    `<meta name="title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
  );

  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`);
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${url}" />\n  </head>`);
  }
  if (html.includes('property="og:url"')) {
    html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);
  } else {
    html = html.replace('</head>', `    <meta property="og:url" content="${url}" />\n  </head>`);
  }

  return html;
}

let count = 0;
for (const [slug, meta] of Object.entries(PAGE_META)) {
  const outDir = path.join(distDir, slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, 'index.html'), buildPageHtml(meta), 'utf8');
  count++;
}

let homeHtml = template;
const homeUrl = `${SITE_URL}/`;
if (homeHtml.includes('rel="canonical"')) {
  homeHtml = homeHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${homeUrl}" />`);
} else {
  homeHtml = homeHtml.replace('</head>', `    <link rel="canonical" href="${homeUrl}" />\n  </head>`);
}
if (homeHtml.includes('property="og:url"')) {
  homeHtml = homeHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${homeUrl}" />`);
} else {
  homeHtml = homeHtml.replace('</head>', `    <meta property="og:url" content="${homeUrl}" />\n  </head>`);
}
writeFileSync(templatePath, homeHtml, 'utf8');

console.log(`[prerender] Generated ${count} static route pages with unique SEO meta tags in dist/.`);