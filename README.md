# Prasad Adsul — Professional Portfolio

A modern, professional portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom design tokens)
- **Icons**: Lucide React
- **Hosting**: GitHub Pages

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── projects/
│       └── [id]/
│           └── page.tsx    # Project detail pages
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ApproachSection.tsx
│   └── ContactSection.tsx
├── lib/
│   └── data.ts             # All portfolio content
└── public/
    ├── Prasad_Adsul_DotNet-AI_Engineer_CV.pdf  # Main CV
    └── robots.txt
```

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type check
npm run type-check

# Build for production
npm run build
```

## 📄 CV / Resume

The CV is hosted at `public/Prasad_Adsul_DotNet-AI_Engineer_CV.pdf` and accessible on the site via direct link or download buttons.

## 🚢 Deployment (GitHub Pages)

The site uses `output: "export"` for static HTML generation, suitable for GitHub Pages.

### Option A: GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out/
      - uses: actions/deploy-pages@v4
```

Then in GitHub Settings → Pages, set source to **GitHub Actions**.

### Option B: Manual

```bash
npm run build        # Generates ./out directory
# Push ./out contents to gh-pages branch
```

## ✏️ Content Updates

All portfolio content lives in [`lib/data.ts`](./lib/data.ts). Update:
- `PERSONAL` — name, email, social links
- `PROJECTS` — project entries
- `SKILLS` — technology groups
- `ENGINEERING_PRINCIPLES` — approach section items

## 📧 Contact

prasadadsul81@gmail.com
