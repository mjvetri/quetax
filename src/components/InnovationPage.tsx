import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Cpu, Activity, Zap, Terminal, Shield, RefreshCw, Layers } from 'lucide-react';
import { InnovationItem } from '../types';
import { SeoAioGeoSection } from './SeoAioGeoSection';

interface InnovationPageProps {
  onNavigate: (page: string) => void;
}

export function InnovationPage({ onNavigate }: InnovationPageProps) {
  const innovations: InnovationItem[] = [
    {
      id: 'agentic-pipelines',
      title: 'Autonomous Multi-Agent Orchestration',
      tagline: 'Self-healing, parallelized backend workflows with Gemini Flash 2.5',
      status: 'In Production',
      description:
        'We engineer multi-agent systems where dedicated AI workers plan, code-check, execute, and verify complex operations without human bottlenecks.',
      highlight: 'Sub-400ms end-to-end agent decision loop with structured JSON schemas.',
    },
    {
      id: 'local-first-crdt',
      title: 'Local-First Collaborative State (CRDTs)',
      tagline: 'Instant UI feedback with zero network latency, synced seamlessly when online',
      status: 'In Production',
      description:
        'Eliminating spinner fatigue. Apps execute state changes instantly in IndexedDB and reconcile changes across distributed clients with Conflict-Free Replicated Data Types.',
      highlight: '0ms perceptual write latency; multi-tenant conflict resolution.',
    },
    {
      id: 'edge-subsecond',
      title: 'Sub-Millisecond Edge Routing & KV Cache',
      tagline: 'Smart geographic request dispatching across 300+ global edge locations',
      status: 'Active R&D',
      description:
        'Static and dynamic data served from the server closest to your user, with automated edge-side JWT authentication and cache-invalidation rings.',
      highlight: '< 15ms global TTFB (Time to First Byte) worldwide.',
    },
    {
      id: 'zero-downtime-canary',
      title: 'Autonomous Zero-Downtime Rollouts',
      tagline: 'AI-monitored telemetry rollbacks during high-volume deployments',
      status: 'Experimental',
      description:
        'Continuous deployment engine that spins up ephemeral staging environments, runs 1,000 synthetic transactions, and auto-promotes only when error rates remain 0.00%.',
      highlight: 'Automated 1-click safe production canary migrations.',
    },
  ];

  // Interactive Live Latency / Throughput Simulator
  const [activeMetric, setActiveMetric] = useState({
    latency: 18,
    throughput: 42800,
    activeAgents: 14,
    status: 'OPTIMAL',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => ({
        latency: Math.floor(14 + Math.random() * 8),
        throughput: Math.floor(41000 + Math.random() * 3500),
        activeAgents: Math.floor(12 + Math.random() * 6),
        status: 'OPTIMAL',
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
          <Sparkles className="w-3.5 h-3.5 text-blue-700" />
          <span>QUETAX LABS & R&D</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
          Pushing The Boundaries Of Speed & Scale
        </h1>
        <p className="text-sm sm:text-base text-neutral-900 max-w-3xl leading-relaxed mb-6 font-medium">
          We don't just use standard tools — our research labs constantly prototype, benchmark, and deploy cutting-edge software paradigms into production systems.
        </p>

        {/* Live System Telemetry Banner */}
        <div className="rounded-xl p-4 border border-white/50 bg-white/40 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-bold text-neutral-950">
              Live Edge Performance Monitor: <strong className="text-emerald-700">STATUS {activeMetric.status}</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs">
            <div>
              <span className="text-neutral-700 font-medium">Global Edge Latency:</span>{' '}
              <strong className="text-blue-800 font-mono font-bold">{activeMetric.latency}ms</strong>
            </div>
            <div>
              <span className="text-neutral-700 font-medium">Live RPS Throughput:</span>{' '}
              <strong className="text-blue-800 font-mono font-bold">{activeMetric.throughput.toLocaleString()} req/s</strong>
            </div>
            <div className="hidden sm:block">
              <span className="text-neutral-700 font-medium">Active AI Agents:</span>{' '}
              <strong className="text-blue-800 font-mono font-bold">{activeMetric.activeAgents}</strong>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Innovation Cards with Staggered Scroll Motion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {innovations.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950 flex flex-col justify-between hover:bg-white/65 hover:-translate-y-1 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${
                    item.status === 'In Production'
                      ? 'bg-emerald-500/15 text-emerald-800 border-emerald-400/30 font-bold'
                      : item.status === 'Active R&D'
                      ? 'bg-blue-500/15 text-blue-800 border-blue-400/30 font-bold'
                      : 'bg-purple-500/15 text-purple-800 border-purple-400/30 font-bold'
                  }`}
                >
                  {item.status}
                </span>
                <span className="text-[11px] text-neutral-700 font-mono font-semibold">
                  LABS-2026.4
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-1">
                {item.title}
              </h3>
              <p className="text-xs font-bold text-blue-800 mb-3">
                {item.tagline}
              </p>
              <p className="text-xs text-neutral-900 font-medium leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/50 border border-white/60 backdrop-blur-md">
              <div className="text-[11px] text-neutral-700 font-bold uppercase tracking-wider mb-1">
                Engineering Highlight
              </div>
              <div className="text-xs text-neutral-950 font-mono font-bold">
                {item.highlight}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SEO, AIO & GEO Framework Section with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <SeoAioGeoSection />
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl p-6 sm:p-8 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <h3 className="text-base sm:text-lg font-bold text-neutral-950">Have an ambitious technological vision?</h3>
          <p className="text-xs sm:text-sm text-neutral-800 font-medium">
            Let's prototype your architecture or proof-of-concept in less than 7 days.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shrink-0 whitespace-nowrap active:scale-95 cursor-pointer"
        >
          <span>Schedule Architecture Review</span>
        </button>
      </motion.div>
    </div>
  );
}

export default InnovationPage;
