import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prasad Adsul — Software Engineer | .NET & Backend",
  description:
    "Software Engineer specializing in .NET, C#, ASP.NET Core Web API, and backend engineering. Builds AI/GenAI integrations using LLMs, RAG, and intelligent automation. Based in Pune, India.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Divider */}
        <div className="divider-gradient" aria-hidden="true" />

        <AboutSection />

        <div className="divider-gradient" aria-hidden="true" />

        <ProjectsSection />

        <div className="divider-gradient" aria-hidden="true" />

        <SkillsSection />

        <div className="divider-gradient" aria-hidden="true" />

        <ApproachSection />

        <div className="divider-gradient" aria-hidden="true" />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
