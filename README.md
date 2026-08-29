# Nidhi Bhat — Portfolio

A cinematic, animated personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## What's in it

- **Hero** — huge gradient name treatment + a custom animated avatar (cursor-parallax, scanline sweep, hover "detection readouts" that nod to the anomaly-detection work in MPLADS Sentinel)
- **Marquee** — dual-direction scrolling strip of projects and stats
- **About** — scroll-driven word reveal
- **Skills** — grouped toolkit panels (Languages / AI+Data / Web+Backend / Tools)
- **Work** — sticky, stacking project cards for the three featured projects, plus a grid of the rest
- **Achievements** — hackathons and recognitions
- **Contact** — email, resume download, GitHub/LinkedIn

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # to check the production build locally
```

The build output goes to `dist/`.

## Deploy it (free, easy options)

**Vercel** (recommended, ~2 minutes):
1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset: Vite. Leave build settings as default. Deploy.

**Netlify**: same flow — import the repo, build command `npm run build`, publish directory `dist`.

**GitHub Pages**: you already use this for other projects — you'd need to add a `base` path in `vite.config.ts` matching your repo name, then deploy the `dist/` folder with `gh-pages` or a GitHub Action.

## Customizing content

All the text content (bio, skills, projects, achievements, links) lives in one place:
`src/data.ts` — edit that file to update anything without touching the components.

To swap the avatar image, replace `src/assets/avatar.jpeg` (keep the same filename, or update the import in `src/components/Avatar.tsx`).

Your resume PDF is in `public/Nidhi_Resume.pdf` — replace it any time with an updated version, keeping the same filename, and the "Resume" button in the Contact section will keep working.
