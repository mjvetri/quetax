import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, GitBranch, Terminal, CheckCircle2, Rocket, ArrowRight, MessageSquareCode } from 'lucide-react';
import { ProcessStep } from '../types';

interface ProcessPageProps {
  onNavigate: (page: string) => void;
}

export function ProcessPage({ onNavigate }: ProcessPageProps) {
  const steps: ProcessStep[] = [
    {
      step: '01',
      duration: 'Days 1 - 2',
      title: 'Discovery, Scoping & Architecture Blueprint',
      summary:
        'We convert your business requirements into clear technical specifications, database schema diagrams, API contracts, and a defined sprint roadmap.',
      milestones: [
        'Technical specification document',
        'Database schema & security model',
        'Direct Slack/Discord engineer channel setup',
        'Sprint milestone delivery calendar',
      ],
    },
    {
      step: '02',
      duration: 'Days 3 - 5',
      title: 'High-Fidelity UI/UX & Interactive Prototype',
      summary:
        'Our product designers craft responsive Figma components and a functional prototype to lock in user journeys before writing production code.',
      milestones: [
        'Component design system & responsive layout',
        'Clickable prototype for rapid stakeholder sign-off',
        'Design token definitions (Tailwind compatible)',
        'Accessibility & WCAG compliance check',
      ],
    },
    {
      step: '03',
      duration: 'Days 6 - 12',
      title: 'High-Velocity Full-Stack Engineering',
      summary:
        'Senior engineers build your application with clean TypeScript, automated test coverage, and continuous staging preview builds.',
      milestones: [
        'Daily git commits & live staging URL access',
        'Unit, integration, and end-to-end test suites',
        'Third-party API & auth integrations',
        'Performance optimization & sub-second latency tuning',
      ],
    },
    {
      step: '04',
      duration: 'Days 13 - 14',
      title: 'Production Hardening & Global Launch',
      summary:
        'We deploy to your dedicated cloud infrastructure, configure monitoring alerts, hand over 100% repository rights, and initiate post-launch warranty.',
      milestones: [
        'Cloud infrastructure setup (Docker/Cloud Run/AWS)',
        'Domain, SSL & CDN edge routing',
        'Full IP and repository transfer',
        '30-day post-launch dedicated support SLA',
      ],
    },
  ];

  const benefits = [
    { title: 'Direct Senior Access', desc: 'No account managers or middlemen. You speak directly with the engineers writing your code.' },
    { title: '100% Code Ownership', desc: 'All intellectual property, documentation, and repositories belong entirely to your company.' },
    { title: 'Daily Video Updates', desc: 'Loom walkthroughs and live staging previews ensure you see actual progress every 24 hours.' },
    { title: '30-Day SLA Guarantee', desc: 'We monitor production stability and provide immediate bug resolution post-launch.' },
  ];

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
          <Clock className="w-3.5 h-3.5 text-blue-700" />
          <span>FAST-TRACK METHODOLOGY</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
          From Concept to Production in 14 Days
        </h1>
        <p className="text-sm sm:text-base text-neutral-900 max-w-3xl leading-relaxed font-medium">
          A disciplined, battle-tested software engineering process designed to eliminate waste, avoid scope creep, and get your product into users' hands in record time.
        </p>
      </motion.div>

      {/* Step Timeline with Scroll In-View Reveals */}
      <div className="space-y-4 mb-8">
        {steps.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950 flex flex-col md:flex-row gap-6 md:items-start hover:bg-white/65 hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Step Number & Duration */}
            <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2 shrink-0 md:w-36">
              <span className="text-2xl sm:text-3xl font-black text-blue-700 font-mono">
                {item.step}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-800 border border-blue-400/30 font-bold backdrop-blur-md">
                {item.duration}
              </span>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-base sm:text-xl font-bold text-neutral-950 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed mb-4">
                {item.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-white/40">
                {item.milestones.map((m, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2 text-xs text-neutral-900 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust & Guarantee Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl backdrop-blur-xl bg-white/40 text-neutral-950 mb-8"
      >
        <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-4">
          Why Founders & CTOs Trust Our Delivery Model
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/50 border border-white/60 backdrop-blur-md">
              <h4 className="text-xs sm:text-sm font-bold text-neutral-950 mb-1">
                {b.title}
              </h4>
              <p className="text-xs text-neutral-800 font-medium leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-6"
      >
        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-xl group active:scale-95 cursor-pointer"
        >
          <span>Reserve Your Sprint Slot</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </div>
  );
}

export default ProcessPage;
