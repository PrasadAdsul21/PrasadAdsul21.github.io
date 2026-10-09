import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prasadadsul21.github.io"),
  title: {
    default: "Prasad Adsul — Software Engineer | .NET & Backend",
    template: "%s | Prasad Adsul",
  },
  description:
    "Software Engineer specializing in .NET, C#, ASP.NET Core Web API, and backend engineering. Also builds AI/GenAI integrations using LLMs, RAG, and intelligent automation.",
  keywords: [
    ".NET Software Engineer",
    "C# Developer",
    "ASP.NET Core Web API",
    "Backend Software Engineer",
    "REST API Development",
    "Entity Framework",
    "SQL Server",
    "AI GenAI Integration",
    "Prasad Adsul",
    "Pune",
  ],
  authors: [{ name: "Prasad Adsul" }],
  creator: "Prasad Adsul",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prasadadsul21.github.io",
    title: "Prasad Adsul — Software Engineer | .NET & Backend",
    description:
      "Software Engineer specializing in .NET, C#, ASP.NET Core Web API, and backend engineering with AI/GenAI integration experience.",
    siteName: "Prasad Adsul Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prasad Adsul — Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasad Adsul — Software Engineer | .NET & Backend",
    description:
      "Software Engineer specializing in .NET, C#, ASP.NET Core Web API, and backend engineering.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-[#050816] text-slate-200 antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
