# Shahd Usama — Portfolio

A recruiter-focused portfolio site built for the **Summer Internship Program – Customer Support
Engineer**. React + Vite + Tailwind CSS, with subtle Framer Motion animation.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The build output lands in `dist/` — deploy that folder to any static host
(Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

## Editing content

Every fact on the site — name, education, skills, experience, projects,
certifications, leadership, contact details — lives in one place:

```
src/data/content.js
```

Update the CV facts there and every section that uses them updates
automatically. Component files under `src/components/` control layout and
styling only; they don't hardcode content.

## Replacing the downloadable CV

The Hero section's **Download CV** button points to `public/Shahd_Usama_CV.pdf`.
Swap that file for an updated CV export (keep the same filename, or update the
`href` in `src/components/Hero.jsx`).

## Design system

Defined in `tailwind.config.js`:

- **Colors** — `navy` (primary brand, matches the source CV's #1F3864), `cyan`
  (accent), `slate`/`ink` (neutrals).
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (labels,
  dates, tags — a nod to the networking/CLI world the content lives in).

## Folder structure

```
src/
  components/     # one component per section, plus shared UI (Navbar, Reveal, SectionHeading, ScrollToTop)
  data/
    content.js    # single source of truth for all copy
  App.jsx         # composes sections in order
  main.jsx        # React entry point
  index.css       # Tailwind layers + small global utilities
public/
  Shahd_Usama_CV.pdf
```
