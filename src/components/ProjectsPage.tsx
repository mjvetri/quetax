import { motion } from 'motion/react';
import { ArrowUpRight, BrainCircuit, HeartPulse, Network, ShieldCheck, Sparkles, WandSparkles, Zap } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

const upcomingProjects = [
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

const futureProjects = [
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
    projects: typeof upcomingProjects,
    actionLabel: string,
    sectionId: string,
    sectionTitle: string,
    sectionDescription: string,
  ) => (
    <section id={sectionId} className="scroll-mt-24 mb-12">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">Concept portfolio</p>
          <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">{sectionTitle}</h2>
        </div>
        <p className="max-w-xl text-xs leading-relaxed text-neutral-700 sm:text-sm">{sectionDescription}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col justify-between border border-white/55 bg-white/45 p-5 shadow-lg backdrop-blur-xl transition-colors hover:bg-white/65 sm:p-6"
            >
              <div>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/60 bg-blue-100/60 px-3 py-1 text-[10px] font-semibold text-blue-900">
                    <Icon className="h-3.5 w-3.5" />
                    {project.area}
                  </span>
                  <Sparkles className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-base font-bold text-neutral-950 sm:text-lg">{project.title}</h3>
                <p className="mb-6 text-xs leading-relaxed text-neutral-800 sm:text-sm">{project.description}</p>
              </div>
              <button
                type="button"
                onClick={() => expressInterest(project.title)}
                className="inline-flex min-h-11 w-fit items-center gap-2 border border-neutral-900 px-4 py-2 text-xs font-semibold text-neutral-950 transition-colors hover:bg-neutral-950 hover:text-white"
              >
                {actionLabel}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.article>
          );
        })}
      </div>
    </section>
  );

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-10 border border-white/55 bg-white/45 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
      >
        <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
          <Sparkles className="h-4 w-4" /> QuetaX project concepts
        </p>
        <h1 className="mb-3 max-w-3xl text-2xl font-bold text-neutral-950 sm:text-4xl">Ideas in progress, possibilities ahead.</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-800 sm:text-base">
          A view into themes QuetaX is exploring. These concepts are exploratory, not announcements of available products or delivery dates. Tell us which direction interests you.
        </p>
        <nav aria-label="Project sections" className="mt-6 flex flex-wrap gap-3">
          <a href="#upcoming-projects" className="border border-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-950 hover:text-white">Upcoming concepts</a>
          <a href="#future-projects" className="border border-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-950 hover:text-white">Future explorations</a>
        </nav>
      </motion.header>

      {renderProjects(
        upcomingProjects,
        'Register Interest',
        'upcoming-projects',
        'Upcoming concepts',
        'Areas QuetaX is considering for focused exploration. Scope and availability can be discussed through the contact form.',
      )}
      {renderProjects(
        futureProjects,
        'Explore the Concept',
        'future-projects',
        'Future explorations',
        'Longer-horizon ideas across emerging digital experiences, resource insight, and trustworthy information.',
      )}
    </main>
  );
}

export default ProjectsPage;