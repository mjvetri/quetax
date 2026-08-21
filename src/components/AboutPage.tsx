import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Cpu, Flame, ArrowUpRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const stats = [
    { value: '200+', label: 'Products Shipped', sub: 'Across 18 industries' },
    { value: '14 Days', label: 'Average MVP Sprint', sub: 'From spec to live deployment' },
    { value: '99.98%', label: 'Infrastructure Uptime', sub: 'Fault-tolerant cloud setup' },
    { value: '$450M+', label: 'Client Capital Raised', sub: 'By venture-backed partners' },
  ];

  const values = [
    {
      icon: Zap,
      title: 'High-Velocity Engineering',
      desc: 'We cut the bureaucracy. Direct communication with senior engineers means features move from whiteboard to staging in hours, not weeks.',
    },
    {
      icon: ShieldCheck,
      title: 'Production-Grade Architecture',
      desc: 'Speed never compromises security or stability. Every line of TypeScript and cloud infrastructure is tested, scalable, and audit-ready.',
    },
    {
      icon: Cpu,
      title: 'Modern Technology Stack',
      desc: 'We specialize in React, Node, TypeScript, Distributed Cloud, and modern AI pipelines engineered for sub-second performance.',
    },
    {
      icon: Flame,
      title: 'Founder-First Ownership',
      desc: 'You retain 100% intellectual property, clean modular codebases, and comprehensive CI/CD pipelines from day one.',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Top Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-8 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-blue-500/15 text-blue-800 border border-blue-400/30 mb-4 backdrop-blur-md">
          <Zap className="w-3.5 h-3.5 text-blue-700" />
          <span>ABOUT QUETAX</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-4 leading-tight">
          We build software at the speed of your ambition.
        </h1>

        <p className="text-sm sm:text-base text-neutral-900 max-w-3xl leading-relaxed mb-6 font-medium">
          QuetaX was founded with a singular purpose: eliminate the sluggishness and overhead of traditional agencies. We partner with fast-growing startups and ambitious enterprise teams to design, architect, and ship world-class web applications, mobile platforms, and custom software systems in record time.
        </p>

        {/* Action Button */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-all duration-200 group shadow-md active:scale-95 cursor-pointer"
          >
            <span>Partner With Us</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white/50 hover:bg-white/70 text-neutral-900 px-5 py-2.5 rounded-full transition-all duration-200 border border-white/60 shadow-sm backdrop-blur-md active:scale-95 cursor-pointer"
          >
            <span>Explore Case Studies</span>
          </button>
        </div>
      </motion.div>

      {/* Stats Grid with Staggered Scroll Motion */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/50 shadow-lg backdrop-blur-xl bg-white/40 text-neutral-950 hover:bg-white/60 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight mb-1">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-neutral-950 mb-0.5">
              {item.label}
            </div>
            <div className="text-[11px] text-neutral-800 font-medium">
              {item.sub}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Values & Principles with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
      >
        <h2 className="text-lg sm:text-2xl font-bold text-neutral-950 mb-2">Our Core Principles</h2>
        <p className="text-xs sm:text-sm text-neutral-800 font-medium mb-6">
          Engineered for teams who refuse to wait months for product iteration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 sm:p-5 rounded-xl border border-white/50 bg-white/40 hover:bg-white/65 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-md shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 text-blue-700 border border-blue-300/50 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-950 mb-1.5">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
