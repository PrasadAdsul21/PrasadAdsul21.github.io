import Link from "next/link";
import {
  ExternalLink,
  FlaskConical,
  Briefcase,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { PROJECTS } from "@/lib/data";

const TYPE_ICONS: Record<string, React.ReactNode> = {
  "Professional Project": <Briefcase size={12} />,
  "Proof of Concept": <FlaskConical size={12} />,
  "AI Integration Project": <Cpu size={12} />,
  "Independent Project": <GithubIcon className="w-3 h-3" />,
};

const TYPE_COLORS: Record<string, string> = {
  "Professional Project": "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
  "Proof of Concept": "bg-amber-500/15 border-amber-500/30 text-amber-300",
  "AI Integration Project": "bg-purple-500/15 border-purple-500/30 text-purple-300",
  "Independent Project": "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
};

export default function ProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label justify-center">
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
            Featured Work
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
          </p>
          <h2 id="projects-heading" className="section-title">
            Projects &{" "}
            <span className="gradient-text">Engineering Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A showcase of enterprise backend systems, AI/GenAI applications, and full-stack solutions built with clean architecture and scalability in mind.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/PrasadAdsul21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors border border-white/[0.08] rounded-lg px-5 py-3 hover:border-indigo-500/30 hover:bg-indigo-500/5"
          >
            <GithubIcon className="w-4 h-4" />
            View all repositories on GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const typeColor = TYPE_COLORS[project.type] || "bg-slate-500/15 border-slate-500/30 text-slate-300";
  const typeIcon = TYPE_ICONS[project.type] || <Briefcase size={12} />;

  return (
    <article className="card-glass-hover p-6 flex flex-col group">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border mb-2 ${typeColor}`}
          >
            {typeIcon}
            {project.type}
          </span>
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">{project.category}</p>
        </div>
        {/* Availability indicator */}
        {project.githubUrl && (
          <div className="flex-shrink-0 mt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/[0.05] transition-all"
              aria-label={`GitHub: ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
        {project.shortDescription}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.slice(0, 6).map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
        {project.technologies.length > 6 && (
          <span className="tech-tag opacity-60">
            +{project.technologies.length - 6}
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/[0.05]">
        <Link
          href={`/projects/${project.id}`}
          className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
        >
          View Details
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        {project.demoUrl && (
          <>
            <span className="w-px h-3 bg-white/[0.1]" aria-hidden="true" />
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Demo
              <ExternalLink size={12} />
            </a>
          </>
        )}
      </div>
    </article>
  );
}
