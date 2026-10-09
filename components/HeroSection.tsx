"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Download, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL } from "@/lib/data";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const words = ["Backend APIs", "Clean Architecture", "AI Integrations", "Scalable Systems"];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      ref={ref}
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-12 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-20 right-20 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-60" />
        <div className="absolute top-40 right-48 w-1 h-1 bg-violet-400 rounded-full animate-ping opacity-40 [animation-delay:1s]" />
        <div className="absolute bottom-48 left-32 w-2 h-2 bg-indigo-300 rounded-full animate-ping opacity-30 [animation-delay:2s]" />
      </div>

      <div className="section-container text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
          {PERSONAL.availableForWork ? "Open to Full-Time Opportunities" : "Software Engineer"}
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          className={`text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 tracking-tight mb-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{PERSONAL.name}</span>
        </h1>

        {/* Animated subtitle */}
        <div
          className={`flex items-center justify-center gap-3 text-xl md:text-2xl text-slate-400 mb-4 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span>I build</span>
          <span
            key={wordIdx}
            className="text-indigo-400 font-semibold min-w-[200px] text-left"
            style={{ animation: "fadeIn 0.4s ease-out" }}
          >
            {words[wordIdx]}
          </span>
        </div>

        {/* Short bio */}
        <p
          className={`max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-10 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Software Engineer specializing in{" "}
          <span className="text-slate-200 font-medium">.NET, C#, and ASP.NET Core Web API</span>{" "}
          for backend systems and REST APIs. Also builds{" "}
          <span className="text-slate-200 font-medium">AI/GenAI integrations</span>{" "}
          — LLMs, RAG, knowledge graphs, and document intelligence pipelines.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-12 transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link href="/#projects" className="btn-primary">
            View Projects
            <ArrowRight size={16} />
          </Link>
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

        {/* Social links */}
        <div
          className={`flex items-center justify-center gap-6 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors group"
            aria-label="GitHub"
          >
            <GithubIcon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:block">GitHub</span>
          </a>
          <span className="w-px h-4 bg-slate-700" aria-hidden="true" />
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors group"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:block">LinkedIn</span>
          </a>
          <span className="w-px h-4 bg-slate-700" aria-hidden="true" />
          <a
            href={`mailto:${PERSONAL.email}`}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors group"
            aria-label="Email"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:block">{PERSONAL.email}</span>
          </a>
        </div>

        {/* Tech stack pills */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 delay-[600ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {["C#", ".NET", "ASP.NET Core", "SQL Server", "Entity Framework", "Python", "LLMs", "RAG"].map(
            (tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            )
          )}
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/#about"
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
