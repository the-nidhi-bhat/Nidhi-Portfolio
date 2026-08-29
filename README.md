# Nidhi Portfolio

Nidhi's personal developer portfolio — an animated, dark-mode showcase of selected work, skills, hackathons, and ways to get in touch.

Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Repository

[github.com/the-nidhi-bhat/Nidhi-Portfolio](https://github.com/the-nidhi-bhat/Nidhi-Portfolio)

## Run locally

```bash
git clone https://github.com/the-nidhi-bhat/Nidhi-Portfolio.git
cd Nidhi-Portfolio
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`. Open it in your browser to view the portfolio.

## Build for production

```bash
npm run build
npm run preview
```

The production-ready site is generated in `dist/`.

## Deploy

### Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import `the-nidhi-bhat/Nidhi-Portfolio`.
3. Keep the detected Vite settings, then select **Deploy**.

### Netlify

1. Import the GitHub repository in [Netlify](https://app.netlify.com/start).
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy the site.

### GitHub Pages

For a project site at `https://the-nidhi-bhat.github.io/Nidhi-Portfolio/`, set Vite's base path before building:

```ts
// vite.config.ts
export default defineConfig({
  base: '/Nidhi-Portfolio/',
  plugins: [react()],
})
```

Then deploy the generated `dist/` folder with a GitHub Actions workflow, or use Vercel/Netlify for the simplest deployment flow.

## Customize

- **Personal details, bio, links, projects, skills, achievements, and marquee cards:** edit [`src/data.ts`](src/data.ts)
- **Hero, navigation, and section layouts:** edit the matching files in [`src/components`](src/components)
- **Typography, color palette, gradients, and animations:** edit [`src/index.css`](src/index.css) and [`tailwind.config.js`](tailwind.config.js)
- **Avatar image:** replace [`src/assets/avatar.png`](src/assets/avatar.png)
- **Resume download:** replace [`public/Nidhi_Resume.pdf`](public/Nidhi_Resume.pdf), keeping the filename unchanged

## Features

- Animated hero with cursor-reactive avatar artwork
- Scroll-reveal About section and animated project cards
- Skills, featured work, hackathon achievements, and social links
- Responsive desktop and mobile navigation
- Reduced-motion support for a more accessible experience

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Fontshare (Clash Display and Switzer)

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Type-checks and creates a production build |
| `npm run preview` | Serves the production build locally |
