import { GraduationCap, MapPin, Briefcase, Code2, Lightbulb } from "lucide-react";
import { PERSONAL } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <p className="section-label">
              <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
              About Me
            </p>
            <h2 id="about-heading" className="section-title mb-6">
              Building reliable software{" "}
              <span className="gradient-text">from the ground up</span>
            </h2>

            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a Software Engineer based in{" "}
                <span className="text-slate-200 font-medium">Pune, Maharashtra</span>{" "}
                with over 2 years of professional experience building backend applications,
                REST APIs, and enterprise web systems.
              </p>
              <p>
                My primary focus is{" "}
                <span className="text-slate-200 font-medium">
                  .NET and C# backend engineering
                </span>
                : designing clean, maintainable application architectures using ASP.NET Core
                Web API, Entity Framework Core, and SQL Server. I care about code organization,
                clear API contracts, and data models that reflect the actual problem domain.
              </p>
              <p>
                Beyond backend work, I have hands-on experience integrating{" "}
                <span className="text-slate-200 font-medium">
                  AI and GenAI capabilities
                </span>{" "}
                — including retrieval-augmented generation, LLM integrations, knowledge graph
                systems, and document intelligence pipelines — into real application workflows.
                I see these as powerful tools for building smarter software, not replacements
                for solid engineering fundamentals.
              </p>
              <p>
                I enjoy understanding a problem domain before writing code, thinking carefully
                about how a system will be maintained and evolved, and working on software that
                solves real problems clearly and reliably.
              </p>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="space-y-4">
            {/* Profile card with Avatar */}
            <div className="card-glass p-6">
              {"avatar" in PERSONAL && PERSONAL.avatar && (
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/[0.06]">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-indigo-500/40 bg-navy-800 shadow-lg shadow-indigo-500/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={PERSONAL.avatar}
                        alt={PERSONAL.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-[#050816] rounded-full"
                      title="Available for work"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{PERSONAL.name}</h3>
                    <p className="text-xs text-indigo-400 font-mono font-medium">{PERSONAL.title}</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                      <MapPin size={13} className="text-indigo-400 flex-shrink-0" />
                      {PERSONAL.location}
                    </p>
                  </div>
                </div>
              )}

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <Briefcase size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    {PERSONAL.experience} professional software engineering experience
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <GraduationCap size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    {PERSONAL.education.degree},{" "}
                    <span className="text-slate-400">{PERSONAL.education.institution}</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* What I do */}
            <div className="card-glass p-6">
              <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
                What I Work On
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    icon: <Code2 size={15} className="text-indigo-400 flex-shrink-0" />,
                    text: "Backend APIs and service-layer logic in C# / .NET",
                  },
                  {
                    icon: <Code2 size={15} className="text-violet-400 flex-shrink-0" />,
                    text: "Clean Architecture and SOLID-based application design",
                  },
                  {
                    icon: <Code2 size={15} className="text-blue-400 flex-shrink-0" />,
                    text: "Database schema design and EF Core data access",
                  },
                  {
                    icon: <Lightbulb size={15} className="text-amber-400 flex-shrink-0" />,
                    text: "LLM, RAG, and knowledge graph integrations (Python)",
                  },
                  {
                    icon: <Lightbulb size={15} className="text-purple-400 flex-shrink-0" />,
                    text: "Document intelligence and NLP pipelines",
                  },
                ].map(({ icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    {icon}
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering philosophy */}
            <div className="card-glass p-6 border-l-2 border-indigo-500/50">
              <p className="text-sm text-slate-400 leading-relaxed italic">
                &ldquo;I try to write code that&apos;s easy to read, test, and change.
                Good architecture is about deferring decisions that don&apos;t need to be made
                yet, and making the ones you do make clearly visible.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
