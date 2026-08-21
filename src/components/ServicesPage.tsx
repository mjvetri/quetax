import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Smartphone, Server, Sparkles, Layers, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';
import { SeoAioGeoSection } from './SeoAioGeoSection';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services: ServiceItem[] = [
    {
      id: 'web-apps',
      title: 'Full-Stack Web Applications',
      category: 'Web Engineering',
      description:
        'Custom web applications engineered with modern React, TypeScript, and high-performance server runtimes. Optimized for sub-second load times and seamless state handling.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
      deliverables: ['Responsive Progressive Web App', 'Interactive Data Dashboards', 'Serverless & REST/GraphQL APIs', 'Complete Test Suite'],
      timeline: '2 - 4 Weeks',
    },
    {
      id: 'mobile-apps',
      title: 'Native & Cross-Platform Mobile Apps',
      category: 'Mobile Development',
      description:
        'Fluid mobile applications for iOS and Android built on React Native and modern native bridges. Native gesture handling, biometric auth, and offline syncing built in.',
      technologies: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
      deliverables: ['App Store & Play Store Ready Builds', 'Push Notification Architecture', 'Offline-First Synchronization', 'In-App Payment Pipelines'],
      timeline: '3 - 6 Weeks',
    },
    {
      id: 'custom-software',
      title: 'Custom Enterprise Software & Cloud Engines',
      category: 'Backend & Cloud',
      description:
        'Tailored software solutions replacing legacy roadblocks. High-concurrency database schemas, message queues, workflow automation engines, and custom ERP/CRM tools.',
      technologies: ['Node.js / Go', 'Docker', 'Kubernetes', 'Cloud Run / AWS', 'Redis', 'Kafka'],
      deliverables: ['High-Throughput Microservices', 'Role-Based Access Control (RBAC)', 'Automated CI/CD Pipelines', 'Audit & Compliance Logging'],
      timeline: '4 - 8 Weeks',
    },
    {
      id: 'ai-integration',
      title: 'AI Systems & Intelligent Workflows',
      category: 'Applied AI',
      description:
        'Practical AI implementations: Multi-agent coordination, document intelligence, conversational copilot interfaces, and semantic vector search integrations.',
      technologies: ['Gemini 2.5/Flash', 'LangChain', 'Pinecone / Vector DBs', 'Python', 'FastAPI'],
      deliverables: ['Domain-Specific LLM Pipelines', 'Retrieval-Augmented Generation (RAG)', 'Automated Content & Data Extractors', 'Enterprise Privacy Guards'],
      timeline: '2 - 4 Weeks',
    },
    {
      id: 'seo-aio-geo',
      title: 'SEO, AIO & GEO Indexing Architecture',
      category: 'Search & Discovery',
      description:
        'End-to-end modern discoverability engineering: Search Engine Optimization (SEO), Generative AI Engine Optimization (AIO / llms.txt), and Local/Global Geographic entity mapping (GEO).',
      technologies: ['JSON-LD', 'Schema.org', 'llms.txt', 'Open Graph', 'XML Sitemaps', 'Robots.txt', 'GeoCoordinates'],
      deliverables: ['Meta & Social Card Framework', 'LLM-Ready Knowledge Feeds (/llms.txt)', 'Local Business & Geo Structured Data', 'High-Priority XML Sitemap'],
      timeline: '1 - 2 Weeks',
    },
  ];

  const [selectedService, setSelectedService] = useState<string>(services[0].id);
  const activeService = services.find((s) => s.id === selectedService) || services[0];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-8 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-blue-500/15 text-blue-800 border border-blue-400/30 mb-4 backdrop-blur-md">
          <Terminal className="w-3.5 h-3.5 text-blue-700" />
          <span>ENGINEERING CAPABILITIES</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
          Custom Development Services Built For Scale
        </h1>
        <p className="text-sm sm:text-base text-neutral-900 max-w-3xl leading-relaxed font-medium">
          From zero to production in record time. We take ownership of design, architecture, implementation, and deployment with zero boilerplate delays.
        </p>
      </motion.div>

      {/* Services Interactive Grid / Master Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Service Selector List */}
        <div className="lg:col-span-5 space-y-3">
          {services.map((s, idx) => {
            const isSelected = s.id === selectedService;
            return (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                onClick={() => setSelectedService(s.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 backdrop-blur-xl cursor-pointer ${
                  isSelected
                    ? 'border-blue-500/80 bg-blue-500/20 text-neutral-950 shadow-md ring-1 ring-blue-400/50 scale-[1.01]'
                    : 'border-white/50 bg-white/40 text-neutral-900 hover:bg-white/65 hover:border-white/70 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold tracking-wider text-blue-800 uppercase">
                    {s.category}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/50 text-neutral-900 border border-white/60 font-medium">
                    {s.timeline}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-950">
                  {s.title}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Active Service Detailed View with Animated Switcher */}
        <motion.div
          layout
          className="lg:col-span-7 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950 flex flex-col justify-between"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/15 text-blue-800 border border-blue-400/30 backdrop-blur-md">
                  {activeService.category}
                </span>
                <span className="text-xs text-neutral-800 font-medium">
                  Estimated Delivery: <strong className="text-neutral-950 font-bold">{activeService.timeline}</strong>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-3">
                {activeService.title}
              </h2>

              <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed mb-6">
                {activeService.description}
              </p>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-900 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2.5">
                  Target Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/50 text-neutral-950 border border-white/60 font-medium backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-4 border-t border-white/40 flex items-center justify-between">
            <span className="text-xs text-neutral-800 font-medium">
              Need a custom scope or stack?
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors group cursor-pointer"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* SEO, AIO & GEO Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <SeoAioGeoSection />
      </motion.div>
    </div>
  );
}

export default ServicesPage;
