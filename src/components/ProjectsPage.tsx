// import { motion } from 'motion/react';
// import { ArrowUpRight, BrainCircuit, HeartPulse, Network, ShieldCheck, Sparkles, WandSparkles, Zap } from 'lucide-react';

// interface ProjectsPageProps {
//   onNavigate: (page: string) => void;
// }

// const upcomingProjects = [
//   {
//     title: 'Human-Guided AI Workbench',
//     area: 'Responsible AI',
//     description:
//       'A concept for AI-assisted work where people can review, guide, and understand each step before it moves forward.',
//     icon: BrainCircuit,
//   },
//   {
//     title: 'Regulated Workflow Studio',
//     area: 'Workflow automation',
//     description:
//       'An exploration of configurable workflows designed around review, approvals, and traceable decisions in regulated settings.',
//     icon: ShieldCheck,
//   },
//   {
//     title: 'Digital Balance Companion',
//     area: 'Digital wellness',
//     description:
//       'A possible toolkit for helping people reflect on digital habits and shape healthier routines around technology.',
//     icon: HeartPulse,
//   },
// ];

// const futureProjects = [
//   {
//     title: 'Immersive Spatial Experiences',
//     area: 'Immersive design',
//     description:
//       'A future-facing design concept exploring interactive spaces for presenting products, places, and complex ideas.',
//     icon: WandSparkles,
//   },
//   {
//     title: 'Energy Insight Exchange',
//     area: 'Energy management',
//     description:
//       'An early concept for bringing energy-use signals into a clearer view to support informed planning and decisions.',
//     icon: Zap,
//   },
//   {
//     title: 'Verifiable Records Network',
//     area: 'Trusted records',
//     description:
//       'A concept for making important digital records easier to verify, share with permission, and keep auditable.',
//     icon: Network,
//   },
// ];

// export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
//   const expressInterest = (projectTitle: string) => {
//     try {
//       sessionStorage.setItem('quetax_project_interest', projectTitle);
//     } catch {
//       // Contact form remains available even when sessionStorage is blocked.
//     }
//     onNavigate('contact');
//   };

//   const renderProjects = (
//     projects: typeof upcomingProjects,
//     actionLabel: string,
//     sectionId: string,
//     sectionTitle: string,
//     sectionDescription: string,
//   ) => (
//     <section id={sectionId} className="scroll-mt-24 mb-12">
//       <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//         <div>
//           <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">Concept portfolio</p>
//           <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">{sectionTitle}</h2>
//         </div>
//         <p className="max-w-xl text-xs leading-relaxed text-neutral-700 sm:text-sm">{sectionDescription}</p>
//       </div>

//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//         {projects.map((project, index) => {
//           const Icon = project.icon;
//           return (
//             <motion.article
//               key={project.title}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: '-30px' }}
//               transition={{ duration: 0.4, delay: index * 0.06 }}
//               className="flex flex-col justify-between border border-white/55 bg-white/45 p-5 shadow-lg backdrop-blur-xl transition-colors hover:bg-white/65 sm:p-6"
//             >
//               <div>
//                 <div className="mb-5 flex items-start justify-between gap-4">
//                   <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/60 bg-blue-100/60 px-3 py-1 text-[10px] font-semibold text-blue-900">
//                     <Icon className="h-3.5 w-3.5" />
//                     {project.area}
//                   </span>
//                   <Sparkles className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
//                 </div>
//                 <h3 className="mb-2 text-base font-bold text-neutral-950 sm:text-lg">{project.title}</h3>
//                 <p className="mb-6 text-xs leading-relaxed text-neutral-800 sm:text-sm">{project.description}</p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => expressInterest(project.title)}
//                 className="inline-flex min-h-11 w-fit items-center gap-2 border border-neutral-900 px-4 py-2 text-xs font-semibold text-neutral-950 transition-colors hover:bg-neutral-950 hover:text-white"
//               >
//                 {actionLabel}
//                 <ArrowUpRight className="h-4 w-4" />
//               </button>
//             </motion.article>
//           );
//         })}
//       </div>
//     </section>
//   );

//   return (
//     <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
//       <motion.header
//         initial={{ opacity: 0, y: 18 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45 }}
//         className="mb-10 border border-white/55 bg-white/45 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
//       >
//         <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
//           <Sparkles className="h-4 w-4" /> QuetaX project concepts
//         </p>
//         <h1 className="mb-3 max-w-3xl text-2xl font-bold text-neutral-950 sm:text-4xl">Ideas in progress, possibilities ahead.</h1>
//         <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 sm:text-base">
//           A view into themes QuetaX is exploring. These concepts are exploratory, not announcements of available products or delivery dates. Tell us which direction interests you.
//         </p>
//         <nav aria-label="Project sections" className="mt-6 flex flex-wrap gap-3">
//           <a href="#upcoming-projects" className="border border-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-950 hover:text-white">Upcoming concepts</a>
//           <a href="#future-projects" className="border border-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-950 hover:text-white">Future explorations</a>
//         </nav>
//       </motion.header>

//       {renderProjects(
//         upcomingProjects,
//         'Register Interest',
//         'upcoming-projects',
//         'Upcoming concepts',
//         'Areas QuetaX is considering for focused exploration. Scope and availability can be discussed through the contact form.',
//       )}
//       {renderProjects(
//         futureProjects,
//         'Explore the Concept',
//         'future-projects',
//         'Future explorations',
//         'Longer-horizon ideas across emerging digital experiences, resource insight, and trustworthy information.',
//       )}
//     </main>
//   );
// }

// export default ProjectsPage;

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BrainCircuit, HeartPulse, Network, ShieldCheck, Sparkles, WandSparkles, Zap, Info, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

interface Project {
  title: string;
  area: string;
  description: string;
  icon: React.ElementType;
}

const upcomingProjects: Project[] = [
  {
    title: 'Human-Guided AI Workbench',
    area: 'Responsible AI',
    description:
      'A concept for AI-assisted work where people can review, guide, and understand each step before it moves forward.',
    icon: BrainCircuit,
  },
  {
    title: 'Regulated Workflow Studio',
    area: 'Workflow automation',
    description:
      'An exploration of configurable workflows designed around review, approvals, and traceable decisions in regulated settings.',
    icon: ShieldCheck,
  },
  {
    title: 'Digital Balance Companion',
    area: 'Digital wellness',
    description:
      'A possible toolkit for helping people reflect on digital habits and shape healthier routines around technology.',
    icon: HeartPulse,
  },
];

const futureProjects: Project[] = [
  {
    title: 'Immersive Spatial Experiences',
    area: 'Immersive design',
    description:
      'A future-facing design concept exploring interactive spaces for presenting products, places, and complex ideas.',
    icon: WandSparkles,
  },
  {
    title: 'Energy Insight Exchange',
    area: 'Energy management',
    description:
      'An early concept for bringing energy-use signals into a clearer view to support informed planning and decisions.',
    icon: Zap,
  },
  {
    title: 'Verifiable Records Network',
    area: 'Trusted records',
    description:
      'A concept for making important digital records easier to verify, share with permission, and keep auditable.',
    icon: Network,
  },
];

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const expressInterest = (projectTitle: string) => {
    try {
      sessionStorage.setItem('quetax_project_interest', projectTitle);
    } catch {
      // Contact form remains available even when sessionStorage is blocked.
    }
    onNavigate('contact');
  };

  const renderProjects = (
    projects: Project[],
    actionLabel: string,
    sectionId: string,
    sectionTitle: string,
    sectionDescription: string,
    accent: 'blue' | 'emerald',
  ) => {
    const accentStyles =
      accent === 'blue'
        ? {
            eyebrow: 'text-blue-300',
            badgeBg: 'bg-blue-500/15 border-blue-400/30',
            badgeIcon: 'text-blue-700',
            dot: 'bg-blue-600',
            button: 'bg-blue-600 hover:bg-blue-700',
          }
        : {
            eyebrow: 'text-emerald-300',
            badgeBg: 'bg-emerald-500/15 border-emerald-400/30',
            badgeIcon: 'text-emerald-700',
            dot: 'bg-emerald-600',
            button: 'bg-emerald-600 hover:bg-emerald-700',
          };

    return (
      <section id={sectionId} className="scroll-mt-24 mb-12">
        <div className="mb-5 flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={`mb-1 text-[11px] font-bold uppercase tracking-[0.16em] ${accentStyles.eyebrow}`}>
              Concept Portfolio
            </p>
            <h2 className="text-xl font-bold text-white sm:text-2xl tracking-tight">{sectionTitle}</h2>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-neutral-300 sm:text-sm font-medium">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between rounded-2xl border border-white/50 bg-white/40 p-6 shadow-xl backdrop-blur-xl transition-colors duration-200 hover:bg-white/55 hover:shadow-2xl text-neutral-950"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${accentStyles.badgeBg}`}>
                      <Icon className={`w-4 h-4 ${accentStyles.badgeIcon}`} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-900/5 text-neutral-700 border border-neutral-900/10">
                      {project.area}
                    </span>
                  </div>

                  <h3 className="mb-2 text-base font-bold text-neutral-950 leading-snug">{project.title}</h3>
                  <p className="mb-6 text-xs leading-relaxed text-neutral-800 font-medium">{project.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => expressInterest(project.title)}
                  className={`inline-flex items-center justify-center gap-2 text-xs font-bold text-white px-4 py-2.5 rounded-full transition-all active:scale-95 cursor-pointer shadow-sm ${accentStyles.button}`}
                >
                  <span>{actionLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </motion.article>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-10 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-blue-500/15 text-blue-800 border border-blue-400/30 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-700" />
          <span>QUETAX PROJECT CONCEPTS</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 mb-3">
          Ideas in progress, possibilities ahead.
        </h1>
        <p className="text-sm sm:text-base text-neutral-900 max-w-3xl leading-relaxed font-medium mb-6">
          A view into themes QuetaX is exploring. These concepts are exploratory, not announcements of available products or delivery dates. Tell us which direction interests you.
        </p>

        <nav aria-label="Project sections" className="flex flex-wrap gap-2.5">
          <a href="#upcoming-projects" className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 bg-white/60 hover:bg-white/80 px-4 py-2 rounded-full border border-white/60 shadow-sm backdrop-blur-md transition-all active:scale-95">Upcoming Concepts</a>
          <a href="#future-projects" className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 bg-white/60 hover:bg-white/80 px-4 py-2 rounded-full border border-white/60 shadow-sm backdrop-blur-md transition-all active:scale-95">Future Explorations</a>
        </nav>
      </motion.div>

      {renderProjects(
        upcomingProjects,
        'Register Interest',
        'upcoming-projects',
        'Upcoming Concepts',
        'Areas QuetaX is considering for focused exploration. Scope and availability can be discussed through the contact form.',
        'blue',
      )}

      {renderProjects(
        futureProjects,
        'Explore the Concept',
        'future-projects',
        'Future Explorations',
        'Longer-horizon ideas across emerging digital experiences, resource insight, and trustworthy information.',
        'emerald',
      )}

      {/* Disclaimer */}
      <div className="rounded-2xl p-5 border border-white/40 bg-white/20 backdrop-blur-md mb-10 flex items-start gap-3">
        <Info className="w-4 h-4 text-neutral-200 shrink-0 mt-0.5" />
        <p className="text-xs text-neutral-200 leading-relaxed font-medium">
          These concepts are under research, validation or planning. Features, timelines and availability may change, and none of the above represents a committed launch date, customer count or guaranteed outcome.
        </p>
      </div>

      {/* Closing CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/50 shadow-2xl backdrop-blur-xl bg-white/40 text-neutral-950 text-center"
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 mb-2">
          Collaborate on a Project
        </h2>
        <p className="text-xs sm:text-sm text-neutral-900 max-w-xl mx-auto mb-5 font-medium leading-relaxed">
          Interested in partnering, piloting, or learning more about any of these concepts? Reach out and let's talk.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-xl active:scale-95 cursor-pointer"
        >
          <span>Discuss a Project</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}

export default ProjectsPage;