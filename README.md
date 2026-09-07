# Nidhi — AI/ML & Full-Stack Builder

Personal developer portfolio for Nidhi, a Computer Science & Business Systems student focused on AI, data, software development, and modern web applications. The site presents selected projects, technical skills, hackathon work, achievements, certifications, and contact links in a dark editorial interface.

**React · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide React · Vercel Analytics**

[View the repository](https://github.com/the-nidhi-bhat/Nidhi-Portfolio)

## ✨ About

The portfolio is designed to show practical AI/ML projects, web applications, hackathon work, technical skills, achievements, certifications, and ways to connect through email, GitHub, LinkedIn, and a downloadable resume.

## 🚀 Featured Projects

### MPLADS Sentinel

AI-powered audit-prioritization platform for MPLADS funds. It analyzes cost, timeline, spatial, agency, and relationship anomalies to explain why a project may deserve human investigation.

- **Technologies:** Python, FastAPI, PostgreSQL/PostGIS, Next.js, TypeScript, NetworkX, NLP
- **Status:** In progress
- **GitHub:** [Repository](https://github.com/the-nidhi-bhat/mplads-sentinel)

### Pixel Cat

Interactive creative web project focused on playful frontend interaction and visual design.

- **Technologies:** Next.js, React, TypeScript, interactive frontend
- **GitHub:** [Repository](https://github.com/the-nidhi-bhat/pixel-cat)
- **Live demo:** [pixel-cat-six.vercel.app](https://pixel-cat-six.vercel.app/)

### Sky Predict

Weather intelligence web app built for NASA Space Apps Challenge 2025, featuring real-time data, forecasts, charts, climate trends, predictions, and an AI chatbot.

- **Technologies:** JavaScript, Weather API, data visualization, AI
- **GitHub:** [Repository](https://github.com/the-nidhi-bhat/SKY-PREDICT-JARVIS)
- **Live demo:** [the-nidhi-bhat.github.io/SKY-PREDICT-JARVIS](https://the-nidhi-bhat.github.io/SKY-PREDICT-JARVIS/)

### Mindful Haven

Student-focused mental wellness platform with mood tracking, journaling, guided breathing, and study planning.

- **Technologies:** Next.js, React, AI, Supabase
- **GitHub:** [Repository](https://github.com/the-nidhi-bhat/Mind-Haven)
- **Live demo:** [the-nidhi-bhat.github.io/Mind-Haven](https://the-nidhi-bhat.github.io/Mind-Haven/)

## 🧩 More Projects

- **[AgriN Crop Advisor](https://github.com/the-nidhi-bhat/agrin-crop-advisor)** — AI/agriculture project providing practical crop guidance based on agricultural inputs. Technologies: TypeScript, AI, Agriculture.
- **[CodexMatrix Redesign](https://github.com/the-nidhi-bhat/codexmatrix-redesign-abtalks)** — Frontend redesign focused on interface structure, visual systems, responsiveness, and UX. Technologies: TypeScript, Frontend, UI/UX.
- **[Cryptography RSA](https://github.com/the-nidhi-bhat/cryptography-rsa)** — JavaScript implementation exploring RSA cryptography and public-key encryption principles. Technologies: JavaScript, Cryptography, RSA.

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Analytics:** `@vercel/analytics`
- **Build tooling:** PostCSS, Autoprefixer

## 🎨 Design & Features

- Dark editorial-inspired interface with cyan, violet, and amber accents
- Responsive layout with mobile navigation and visible focus states
- Animated hero, section reveals, word-by-word About text, and scrolling marquee
- Sticky project cards with scroll-based scaling
- Cursor, touch, and device-orientation interactions for the hero avatar
- GitHub and live-demo links for projects where available
- Education, certifications, hackathons, achievements, and contact sections
- Resume download, email, GitHub, LinkedIn, and Vercel Web Analytics integration
- Reduced-motion handling for the marquee, avatar motion, and indicator animation

## 📂 Project Structure

```text
.
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── Nidhi_Resume.pdf
└── src/
    ├── App.tsx
    ├── data.ts
    ├── index.css
    ├── main.tsx
    ├── assets/
    │   └── avatar.png
    └── components/
        ├── About.tsx
        ├── Achievements.tsx
        ├── AnimatedText.tsx
        ├── Avatar.tsx
        ├── Certifications.tsx
        ├── Contact.tsx
        ├── Education.tsx
        ├── FadeIn.tsx
        ├── Hero.tsx
        ├── Magnet.tsx
        ├── Marquee.tsx
        ├── Nav.tsx
        ├── Projects.tsx
        └── Skills.tsx
```

## ⚙️ Getting Started

```bash
git clone https://github.com/the-nidhi-bhat/Nidhi-Portfolio.git
cd Nidhi-Portfolio
npm install
npm run dev
```

Vite serves the development site at the local URL shown in the terminal, usually `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview
```

The build command runs TypeScript project checks and creates the Vite production output in `dist/`.

## Content & Customization

- Update profile details, skills, project records, education, certifications, achievements, and marquee content in [`src/data.ts`](src/data.ts).
- Update section components in [`src/components`](src/components).
- Update global colors, typography, gradients, motion utilities, and accessibility focus styles in [`src/index.css`](src/index.css) and [`tailwind.config.js`](tailwind.config.js).
- Replace the avatar at [`src/assets/avatar.png`](src/assets/avatar.png).
- Replace the downloadable resume at [`public/Nidhi_Resume.pdf`](public/Nidhi_Resume.pdf), keeping the filename unchanged.
