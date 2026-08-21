import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, ArrowUpRight, TrendingUp, Cpu, Smartphone, Globe, Shield } from 'lucide-react';
import { ProjectItem } from '../types';

interface WorkPageProps {
  onNavigate: (page: string) => void;
}

export function WorkPage({ onNavigate }: WorkPageProps) {
  const projects: ProjectItem[] = [
    {
      id: 'finpulse',
      title: 'FinPulse — Real-Time Algorithmic Trading Terminal',
      category: 'Web',
      client: 'Apex Financial Technologies',
      description:
        'A high-frequency web trading dashboard processing 50,000+ live market ticks per second with zero browser frame drops using WebGL and WebSockets.',
      stats: { label: 'Latency Reduction', value: '-68%' },
      tags: ['React 19', 'TypeScript', 'WebSockets', 'Canvas / WebGL', 'FastAPI'],
      imageBg: 'from-blue-900/60 to-slate-900/80',
    },
    {
      id: 'nexus-ai',
      title: 'Nexus — Autonomous Enterprise Sales Copilot',
      category: 'AI & Cloud',
      client: 'VentureScale Global',
      description:
        'Multi-agent workflow automating RFP analysis, contract validation, and lead enrichment across 12,000+ enterprise deals monthly.',
      stats: { label: 'Time Saved / Week', value: '42 hrs' },
      tags: ['Gemini API', 'TypeScript', 'PostgreSQL', 'LangGraph', 'Docker'],
      imageBg: 'from-indigo-900/60 to-purple-950/80',
    },
    {
      id: 'omniflow',
      title: 'OmniFlow — Freight & Cold-Chain Logistics Hub',
      category: 'Custom Software',
      client: 'TransPacific Supply Lines',
      description:
        'Custom enterprise ERP coordinating 340+ vessels and automated warehouse checkpoints with real-time IoT temperature telemetry.',
      stats: { label: 'Spoilage Avoidance', value: '$2.8M' },
      tags: ['Go', 'Node.js', 'Distributed SQL', 'Kafka', 'React'],
      imageBg: 'from-emerald-950/60 to-slate-900/80',
    },
    {
      id: 'velohealth',
      title: 'PulseSync — HIPAA-Compliant Telehealth & Diagnostics',
      category: 'Mobile',
      client: 'HealthFrontier Labs',
      description:
        'Cross-platform mobile application supporting encrypted video triage, prescription routing, and direct Bluetooth glucose/vital synchronization.',
      stats: { label: 'Active Monthly Patients', value: '380K' },
      tags: ['React Native', 'WebRTC', 'End-to-End Encryption', 'Firebase', 'iOS/Android'],
      imageBg: 'from-cyan-950/60 to-blue-950/80',
    },
    {
      id: 'hyperpay',
      title: 'HyperPay — Zero-Friction B2B Cross-Border Settlement',
      category: 'Web',
      client: 'Global Treasury Engine',
      description:
        'Instant multicurrency invoicing and liquidity management interface for tier-1 merchants processing $40M+ monthly.',
      stats: { label: 'Transaction Speed', value: '1.2 sec' },
      tags: ['Next.js', 'Tailwind CSS', 'Stripe Connect', 'Edge Functions', 'PostgreSQL'],
      imageBg: 'from-blue-950/60 to-neutral-900/80',
    },
    {
      id: 'cadence-iot',
      title: 'Cadence — Autonomous Drone Fleet Monitoring',
      category: 'Custom Software',
      client: 'AeroDynamics AI',
      description:
        'Real-time mission control system managing 120+ autonomous inspection drones streaming live 4K computer-vision feeds.',
      stats: { label: 'Incident Detection', value: '99.4%' },
      tags: ['TypeScript', 'Three.js', 'WebRTC', 'Kubernetes', 'Redis'],
      imageBg: 'from-slate-900/60 to-sky-950/80',
    },
  ];

  const categories = ['All', 'Web', 'Mobile', 'Custom Software', 'AI & Cloud'] as const;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
          <Layers className="w-3.5 h-3.5 text-blue-700" />
          <span>PROVEN TRACK RECORD</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-2">
              Featured Case Studies & Work
            </h1>
            <p className="text-xs sm:text-sm text-neutral-900 max-w-2xl leading-relaxed font-medium">
              Explore how we've helped fast-growth startups and high-impact enterprises ship scalable products at unprecedented velocity.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shrink-0 self-start md:self-auto active:scale-95 cursor-pointer"
          >
            <span>Start Your Build</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-neutral-950 text-white font-semibold shadow-md scale-105'
                  : 'bg-white/50 hover:bg-white/70 text-neutral-900 border border-white/60 backdrop-blur-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid with Staggered Scroll Animations */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl sm:rounded-3xl p-6 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950 flex flex-col justify-between hover:border-blue-400/80 hover:bg-white/65 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div>
                {/* Category & Stat */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-800 border border-blue-400/30 backdrop-blur-md">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-900 font-bold bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{project.stats.label}: {project.stats.value}</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-700 mb-1 font-semibold">
                  {project.client}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-2 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-900 font-medium leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/40">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/50 text-neutral-900 border border-white/60 font-medium backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default WorkPage;
