import {
  Server,
  Zap,
  Database,
  Layout,
  Brain,
  Cloud,
} from "lucide-react";
import { SKILLS } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Server: <Server size={20} />,
  Zap: <Zap size={20} />,
  Database: <Database size={20} />,
  Layout: <Layout size={20} />,
  Brain: <Brain size={20} />,
  Cloud: <Cloud size={20} />,
};

const LEVEL_STYLES: Record<string, string> = {
  Primary: "text-indigo-300 font-medium",
  Applied: "text-violet-300",
  "Working knowledge": "text-slate-300",
  Familiar: "text-slate-400",
  Learning: "text-amber-400",
};

export default function SkillsSection() {
  const skillGroups = Object.values(SKILLS);

  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label justify-center">
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
            Technical Capabilities
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
          </p>
          <h2 id="skills-heading" className="section-title">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Technologies I work with professionally. Levels reflect actual usage rather than
            self-scored proficiency percentages.
          </p>
        </div>

        {/* Level legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.entries(LEVEL_STYLES).map(([level, cls]) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`text-xs font-medium ${cls}`}>{level}</span>
            </div>
          ))}
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className={`card-glass p-6 border ${group.border}`}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${group.color} text-slate-300`}
                >
                  {ICON_MAP[group.icon]}
                </div>
                <h3 className="font-semibold text-slate-200 text-sm">{group.label}</h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-sm text-slate-400">{skill.name}</span>
                    <span
                      className={`text-[11px] ${LEVEL_STYLES[skill.level] || "text-slate-500"}`}
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-xs text-slate-600 max-w-xl mx-auto">
          Skill levels are self-assessed based on professional use and hands-on implementation
          experience. &ldquo;Primary&rdquo; = used daily in production or professional projects.
          &ldquo;Learning&rdquo; = actively building skills.
        </p>
      </div>
    </section>
  );
}
