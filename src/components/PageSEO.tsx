/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { NavPage } from '../types';

const SITE_URL = 'https://quetax.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/tidel_neo_monument.jpg`;

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

export const PAGE_META: Record<NavPage, PageMeta> = {
  home: {
    title: 'QuetaX — Websites, Apps & Custom Software Development',
    description:
      'QuetaX builds and ships websites, mobile apps, and custom software fast. Based in Villupuram, Tamil Nadu, serving clients across India and globally.',
    path: '/',
  },
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
  projects: {
    title: 'Upcoming and Future Projects | QuetaX',
    description: 'Explore QuetaX concepts in responsible AI, regulated workflow automation, digital wellness, immersive design, energy management and trusted records.',
    path: '/projects',
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

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function usePageSEO(page: NavPage) {
  useEffect(() => {
    const meta = PAGE_META[page];
    if (!meta) return;

    document.title = meta.title;
    setMetaTag('name', 'description', meta.description);
    setCanonical(`${SITE_URL}${meta.path}`);

    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', `${SITE_URL}${meta.path}`);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'QuetaX');
    setMetaTag('property', 'og:image', DEFAULT_OG_IMAGE);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', DEFAULT_OG_IMAGE);
  }, [page]);
}