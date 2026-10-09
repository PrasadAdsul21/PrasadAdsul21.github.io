import Link from "next/link";
import { Mail, Code2, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#050816]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
              <Code2 size={14} className="text-indigo-400" />
            </span>
            <span className="text-sm text-slate-400">
              <span className="text-indigo-400 font-mono">Prasad Adsul</span>
              {" — "}Software Engineer
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-200 transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-200 transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-slate-500 hover:text-slate-200 transition-colors"
              aria-label="Send email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600 flex items-center gap-1">
            © {year} Prasad Adsul. Built with{" "}
            <Heart size={11} className="text-indigo-400 fill-indigo-400" />
            Next.js
          </p>
        </div>

        {/* Nav links */}
        <nav
          className="mt-8 pt-8 border-t border-white/[0.04] flex flex-wrap justify-center gap-x-6 gap-y-2"
          aria-label="Footer navigation"
        >
          {[
            { href: "/#about", label: "About" },
            { href: "/#projects", label: "Projects" },
            { href: "/#skills", label: "Skills" },
            { href: "/#approach", label: "Approach" },
            { href: "/#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              {label}
            </Link>
          ))}
          <a
            href={PERSONAL.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            CV
          </a>
        </nav>
      </div>
    </footer>
  );
}
