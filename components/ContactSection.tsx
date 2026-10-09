import { Mail, MapPin, Send, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-label justify-center">
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
            Get In Touch
            <span className="w-8 h-px bg-indigo-500" aria-hidden="true" />
          </p>
          <h2 id="contact-heading" className="section-title">
            Let&apos;s{" "}
            <span className="gradient-text">connect</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            I&apos;m currently open to full-time software engineering opportunities —
            particularly .NET/backend roles, or positions where backend and AI capabilities
            intersect. Feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email card */}
          <a
            href={`mailto:${PERSONAL.email}`}
            className="card-glass-hover p-6 flex items-start gap-4 group"
            aria-label={`Send email to ${PERSONAL.email}`}
          >
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-1">Email</h3>
              <p className="text-sm text-indigo-400 break-all">{PERSONAL.email}</p>
              <p className="text-xs text-slate-500 mt-1">Best for initial contact</p>
            </div>
          </a>

          {/* LinkedIn card */}
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass-hover p-6 flex items-start gap-4 group"
            aria-label="LinkedIn profile"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-1">LinkedIn</h3>
              <p className="text-sm text-blue-400">Prasad Adsul</p>
              <p className="text-xs text-slate-500 mt-1">Professional network</p>
            </div>
          </a>

          {/* GitHub card */}
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass-hover p-6 flex items-start gap-4 group"
            aria-label="GitHub profile"
          >
            <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-400 group-hover:bg-slate-500/20 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-1">GitHub</h3>
              <p className="text-sm text-slate-400">@PrasadAdsul21</p>
              <p className="text-xs text-slate-500 mt-1">Code and projects</p>
            </div>
          </a>

          {/* Location card */}
          <div className="card-glass p-6 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-1">Location</h3>
              <p className="text-sm text-slate-400">{PERSONAL.location}</p>
              {PERSONAL.availableForWork && (
                <div className="flex items-center gap-1.5 mt-1">
                  <span
                    className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"
                    aria-hidden="true"
                  />
                  <p className="text-xs text-emerald-400">Open to opportunities</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${PERSONAL.email}?subject=Software Engineering Opportunity&body=Hi Prasad,%0D%0A%0D%0AI came across your portfolio and wanted to reach out regarding a software engineering opportunity.%0D%0A%0D%0A`}
              className="btn-primary"
            >
              <Send size={16} />
              Send an Email
            </a>
            <a
              href={PERSONAL.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Currently based in Pune, India. Open to remote and hybrid full-time positions.
          </p>
        </div>
      </div>
    </section>
  );
}
