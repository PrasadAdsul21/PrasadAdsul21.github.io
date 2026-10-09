import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Layers,
  Target,
  Users,
  Code2,
  Wrench,
  Info,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { PROJECTS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return {};

  return {
    title: `${project.title} — Prasad Adsul`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back nav */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors mb-10 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                {project.type}
              </span>
              <span className="text-slate-600 text-xs">{project.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Actions */}
            {(project.githubUrl || project.demoUrl) && (
              <div className="flex items-center gap-3 flex-wrap">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <GithubIcon className="w-[15px] h-[15px]" />
                    View on GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            )}
          </header>

          {/* Tech stack */}
          <section aria-labelledby="tech-heading" className="mb-10">
            <h2
              id="tech-heading"
              className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2"
            >
              <Code2 size={14} className="text-indigo-400" />
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Project Visuals & Screenshots */}
          {"images" in project && project.images && (project.images as string[]).length > 0 && (
            <section aria-labelledby="gallery-heading" className="mb-12">
              <h2
                id="gallery-heading"
                className="text-xl font-bold text-slate-100 mb-5 flex items-center gap-2"
              >
                <Layers size={18} className="text-indigo-400" />
                Project Screenshots & System Visuals
              </h2>
              <div
                className={`grid gap-4 ${
                  (project.images as string[]).length === 1
                    ? "grid-cols-1"
                    : (project.images as string[]).length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {(project.images as string[]).map((imgUrl: string, idx: number) => (
                  <div
                    key={idx}
                    className="card-glass overflow-hidden group border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-[#080d20]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgUrl}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-xs text-indigo-200 font-medium">
                          Visual {idx + 1} of {(project.images as string[]).length}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-10" />

          {/* Problem */}
          {project.problem && (
            <section aria-labelledby="problem-heading" className="mb-10">
              <h2
                id="problem-heading"
                className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2"
              >
                <Target size={18} className="text-indigo-400" />
                Problem & Context
              </h2>
              <p className="text-slate-400 leading-relaxed">{project.problem}</p>
            </section>
          )}

          {/* My contributions */}
          {project.myContributions && project.myContributions.length > 0 && (
            <section aria-labelledby="contributions-heading" className="mb-10">
              <h2
                id="contributions-heading"
                className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2"
              >
                <Users size={18} className="text-indigo-400" />
                My Individual Contributions
              </h2>
              <ul className="space-y-3">
                {project.myContributions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-indigo-400 flex-shrink-0 mt-1"
                    />
                    <span className="text-slate-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Architecture */}
          {"architecture" in project && project.architecture && (
            <section aria-labelledby="arch-heading" className="mb-10">
              <h2
                id="arch-heading"
                className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2"
              >
                <Layers size={18} className="text-indigo-400" />
                Technical Architecture
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.architecture.overview}
              </p>

              {project.architecture.layers && (
                <div className="space-y-4">
                  {project.architecture.layers.map((layer: { name: string; description: string }, i: number) => (
                    <div key={i} className="card-glass p-5">
                      <h3 className="font-semibold text-slate-200 text-sm mb-2">
                        {layer.name}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Challenges */}
          {"challenges" in project && project.challenges && project.challenges.length > 0 && (
            <section aria-labelledby="challenges-heading" className="mb-10">
              <h2
                id="challenges-heading"
                className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2"
              >
                <Wrench size={18} className="text-indigo-400" />
                Engineering Challenges
              </h2>
              <ul className="space-y-3">
                {(project.challenges as string[]).map((challenge: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle
                      size={16}
                      className="text-violet-400 flex-shrink-0 mt-1"
                    />
                    <span className="text-slate-400 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Known limitations */}
          {"knownLimitations" in project && project.knownLimitations && (project.knownLimitations as string[]).length > 0 && (
            <section aria-labelledby="limitations-heading" className="mb-10">
              <h2
                id="limitations-heading"
                className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2"
              >
                <Info size={18} className="text-amber-400" />
                Known Limitations
              </h2>
              <ul className="space-y-3">
                {(project.knownLimitations as string[]).map((limit: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle
                      size={16}
                      className="text-amber-400 flex-shrink-0 mt-1"
                    />
                    <span className="text-slate-400 leading-relaxed">{limit}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Back nav */}
          <div className="mt-16 pt-8 border-t border-white/[0.06] flex justify-between items-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              All Projects
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Discuss this project →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
