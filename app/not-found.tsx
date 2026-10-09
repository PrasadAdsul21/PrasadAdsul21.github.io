import Link from "next/link";
import type { Metadata } from "next";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found — Prasad Adsul",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          {/* 404 visual */}
          <div className="font-mono text-8xl font-bold gradient-text mb-4" aria-hidden="true">
            404
          </div>
          <h1 className="text-2xl font-bold text-slate-100 mb-3">Page not found</h1>
          <p className="text-slate-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              <Home size={16} />
              Go Home
            </Link>
            <Link
              href="/#projects"
              className="btn-secondary"
            >
              <ArrowLeft size={16} />
              View Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
