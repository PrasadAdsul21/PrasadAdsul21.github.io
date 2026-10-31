import { Briefcase, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding" aria-labelledby="experience-heading">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label justify-center">
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
            Professional Background
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
          </p>
          <h2 id="experience-heading" className="section-title">
            Experience &{" "}
            <span className="gradient-text">Impact</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {EXPERIENCE.map((entry) => (
            <article key={entry.role} className="card-glass p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 mb-2">
                    <Briefcase size={16} aria-hidden="true" />
                    <span className="text-xs font-mono uppercase tracking-wider">{entry.company}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">{entry.role}</h3>
                  <p className="text-sm text-slate-500 mt-1">{entry.location}</p>
                </div>
                <p className="text-sm text-slate-400 sm:text-right">{entry.dates}</p>
              </div>

              <ul className="space-y-3 mb-5">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                {entry.technologies.map((technology) => (
                  <span key={technology} className="tech-tag">{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
