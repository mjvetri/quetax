import React, { useState } from 'react';
import { Search, Bot, MapPin, CheckCircle2, ExternalLink, Globe, Sparkles, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export function SeoAioGeoSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'seo' | 'aio' | 'geo'>('all');

  return (
    <div id="seo-aio-geo-section" className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950 mb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-blue-500/15 text-blue-800 border border-blue-400/30 mb-3 backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-blue-700" />
            <span>DISCOVERY & INDEXING ARCHITECTURE</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950">
            SEO, AIO & GEO Framework
          </h2>
          <p className="text-xs sm:text-sm text-neutral-800 font-medium mt-1">
            Engineered for top search engine rankings, LLM generative indexing, and local & global geographic discovery.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/60 border border-white/60 backdrop-blur-md self-start md:self-auto shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/40'
            }`}
          >
            All Pillars
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'seo'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/40'
            }`}
          >
            1. SEO
          </button>
          <button
            onClick={() => setActiveTab('aio')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'aio'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/40'
            }`}
          >
            2. AIO (AI Search)
          </button>
          <button
            onClick={() => setActiveTab('geo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'geo'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-neutral-700 hover:text-neutral-950 hover:bg-white/40'
            }`}
          >
            3. GEO (Location)
          </button>
        </div>
      </div>

      {/* Grid of Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {/* 1. SEO Card */}
        {(activeTab === 'all' || activeTab === 'seo') && (
          <div className="p-5 sm:p-6 rounded-2xl border border-white/60 bg-white/50 hover:bg-white/70 transition-all backdrop-blur-md flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-700 border border-blue-300/50 flex items-center justify-center">
                  <Search className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                  Search Engines
                </span>
              </div>

              <h3 className="text-base font-bold text-neutral-950 mb-1">
                1. SEO (Search Engine Optimization)
              </h3>
              <p className="text-xs text-neutral-700 font-semibold mb-4">
                Organic visibility across Google, Bing, and major search crawlers.
              </p>

              <ul className="space-y-3 text-xs text-neutral-900 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">Primary & Social Meta Tags:</strong> Added comprehensive meta titles, rich descriptions, targeted keywords, author/publisher credits, canonical references, and index/follow crawler directives.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">Open Graph & Twitter Cards:</strong> Configured rich og:title, og:description, og:image (<code className="font-mono text-[11px] bg-white/70 px-1 rounded">/images/tidel_neo_monument.jpg</code>), og:site_name, twitter:card (<code className="font-mono text-[11px] bg-white/70 px-1 rounded">summary_large_image</code>), and brand handles for social sharing across LinkedIn, WhatsApp, and X.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">XML Sitemap (<code className="font-mono text-[11px] bg-white/70 px-1 rounded">/sitemap.xml</code>):</strong> Generated a clean, prioritized search engine sitemap with page priorities, change frequencies, and Google image index tags.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">Robots Directives (<code className="font-mono text-[11px] bg-white/70 px-1 rounded">/robots.txt</code>):</strong> Set standard crawling rules supporting Googlebot, Bingbot, and modern web crawlers.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-[11px]">
              <span className="font-bold text-neutral-600">Sitemap Status:</span>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-800 underline"
              >
                <span>Inspect /sitemap.xml</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* 2. AIO Card */}
        {(activeTab === 'all' || activeTab === 'aio') && (
          <div className="p-5 sm:p-6 rounded-2xl border border-white/60 bg-white/50 hover:bg-white/70 transition-all backdrop-blur-md flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-700 border border-purple-300/50 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                  AI & LLM Indexing
                </span>
              </div>

              <h3 className="text-base font-bold text-neutral-950 mb-1">
                2. AIO (AI & Generative Search Optimization)
              </h3>
              <p className="text-xs text-neutral-700 font-semibold mb-4">
                Structured knowledge representation for Gemini, ChatGPT, Perplexity & Claude.
              </p>

              <ul className="space-y-3 text-xs text-neutral-900 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">Machine-Readable LLM Knowledge (<code className="font-mono text-[11px] bg-white/70 px-1 rounded">/llms.txt</code> & <code className="font-mono text-[11px] bg-white/70 px-1 rounded">/llms-full.txt</code>):</strong> Implemented the open llms.txt specification used by AI search platforms (Perplexity, ChatGPT Search, Gemini Search, Claude) to parse company services, tech stack competencies, sprint timelines, and contact workflows.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">AI Crawler Allow Rules:</strong> Explicitly permitted AI indexing bots (<code className="font-mono text-[11px] bg-white/70 px-1 rounded">GPTBot</code>, <code className="font-mono text-[11px] bg-white/70 px-1 rounded">PerplexityBot</code>, <code className="font-mono text-[11px] bg-white/70 px-1 rounded">ClaudeBot</code>, <code className="font-mono text-[11px] bg-white/70 px-1 rounded">Google-Extended</code>, <code className="font-mono text-[11px] bg-white/70 px-1 rounded">Applebot-Extended</code>) in <code className="font-mono text-[11px] bg-white/70 px-1 rounded">robots.txt</code>.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">FAQ Schema.org (<code className="font-mono text-[11px] bg-white/70 px-1 rounded">FAQPage</code>):</strong> Included structured Q&A entities in JSON-LD to power direct AI answers for queries about capabilities, turnaround speeds, and office location.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-[11px]">
              <span className="font-bold text-neutral-600">LLM Feed:</span>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-purple-700 hover:text-purple-800 underline"
              >
                <span>Inspect /llms.txt</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* 3. GEO Card */}
        {(activeTab === 'all' || activeTab === 'geo') && (
          <div className="p-5 sm:p-6 rounded-2xl border border-white/60 bg-white/50 hover:bg-white/70 transition-all backdrop-blur-md flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-700 border border-emerald-300/50 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                  Geo / Location
                </span>
              </div>

              <h3 className="text-base font-bold text-neutral-950 mb-1">
                3. GEO (Geographic / Local Location SEO)
              </h3>
              <p className="text-xs text-neutral-700 font-semibold mb-4">
                Local campus verification and multi-regional coverage targeting.
              </p>

              <ul className="space-y-3 text-xs text-neutral-900 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">Local Business & Professional Service JSON-LD:</strong> Embedded Schema.org structured data declaring the QuetaX Development Center at No.3, 1st Floor, Tidel Neo, Thiruchitrambalam-Koot Road, Vanur, Villupuram, Tamil Nadu 605111, India.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">Precise Geo Coordinates:</strong> Added latitude and longitude metadata (<code className="font-mono text-[11px] bg-white/70 px-1 rounded">12.0165, 79.8055</code>) alongside ICBM and <code className="font-mono text-[11px] bg-white/70 px-1 rounded">geo.position</code> headers.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-950">Regional Meta Tags:</strong> Declared <code className="font-mono text-[11px] bg-white/70 px-1 rounded">geo.region</code> (IN-TN), <code className="font-mono text-[11px] bg-white/70 px-1 rounded">geo.placename</code> (Villupuram, Tamil Nadu, India), operating hours, business contact data, and multi-region service coverage (Tamil Nadu, India, and Global Remote clients).
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-[11px]">
              <span className="font-bold text-neutral-600">Coordinates:</span>
              <a
                href="https://maps.google.com/?q=12.0165,79.8055"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 underline"
              >
                <span>12.0165° N, 79.8055° E</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Direct Resource Access Bar */}
      <div className="p-4 rounded-xl bg-white/50 border border-white/60 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-700" />
          <span className="font-bold text-neutral-900">Live Crawl Directives & Feeds:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/robots.txt"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-800 font-mono text-[11px] hover:bg-neutral-50 flex items-center gap-1 font-semibold"
          >
            <FileText className="w-3 h-3 text-neutral-500" />
            <span>robots.txt</span>
          </a>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-800 font-mono text-[11px] hover:bg-neutral-50 flex items-center gap-1 font-semibold"
          >
            <FileText className="w-3 h-3 text-neutral-500" />
            <span>sitemap.xml</span>
          </a>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-800 font-mono text-[11px] hover:bg-neutral-50 flex items-center gap-1 font-semibold"
          >
            <Bot className="w-3 h-3 text-purple-600" />
            <span>llms.txt</span>
          </a>
          <a
            href="/llms-full.txt"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-800 font-mono text-[11px] hover:bg-neutral-50 flex items-center gap-1 font-semibold"
          >
            <Bot className="w-3 h-3 text-purple-600" />
            <span>llms-full.txt</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SeoAioGeoSection;
