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

## Deploy to GitHub Pages

For a project site at `https://the-nidhi-bhat.github.io/Nidhi-Portfolio/`, set Vite's base path before building:

```ts
// vite.config.ts
export default defineConfig({
  base: '/Nidhi-Portfolio/',
  plugins: [react()],
})
```

Then deploy the generated `dist/` folder with a GitHub Actions workflow.

## Customize

- **Personal details, bio, links, projects, skills, achievements, and marquee cards:** edit [`src/data.ts`](src/data.ts)
- **Hero, navigation, and section layouts:** edit the matching files in [`src/components`](src/components)
- **Typography, color palette, gradients, and animations:** edit [`src/index.css`](src/index.css) and [`tailwind.config.js`](tailwind.config.js)
- **Avatar image:** replace [`src/assets/avatar.png`](src/assets/avatar.png)
- **Resume download:** replace [`public/Nidhi_Resume.pdf`](public/Nidhi_Resume.pdf), keeping the filename unchanged
