"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-slate-100 hover:text-indigo-400 transition-colors"
          aria-label="Prasad Adsul — Home"
        >
          <span className="p-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
            <Code2 size={16} className="text-indigo-400" />
          </span>
          <span className="hidden sm:block font-mono text-sm">
            <span className="text-indigo-400">prasad</span>
            <span className="text-slate-400">.dev</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-slate-100 hover:bg-white/[0.05] rounded-lg transition-all duration-200 font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium border border-indigo-500/40 text-indigo-300 rounded-lg hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-200"
          >
            View CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/[0.05] transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#050816]/95 backdrop-blur-md">
          <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-slate-400 hover:text-slate-100 hover:bg-white/[0.05] rounded-lg transition-all"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-2 pt-2 border-t border-white/[0.06]">
              <a
                href={PERSONAL.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm text-indigo-300 font-medium"
              >
                View CV →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
