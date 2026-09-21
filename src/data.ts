export const profile = {
  name: 'Nidhi',
  role: 'Computer Science & Business Systems · AI & Data Science · Software',
  tagline: 'I build practical AI-powered and software applications that solve real-world problems.',
  location: 'Belagavi, Karnataka',
  email: 'the.nidhi.bhat@gmail.com',
  resume: '/Nidhi_Resume.pdf',
  github: 'https://github.com/the-nidhi-bhat',
  linkedin: 'https://linkedin.com/in/the-nidhi-bhat',
  status: 'Open to AI/ML & full-stack internships',
}

export const about = {
  paragraphs: [
    "I'm a Computer Science & Business Systems student at VTU, working toward AI & Data Science alongside software development. I learn by building — taking messy real-world problems and turning them into practical, working apps.",
    "My work spans an AI crop-health platform with Kannada support (AgriN), an explainable audit-prioritization tool for SIH (MPLADS Sentinel), and wellness and weather products shipped under hackathon time constraints. I also practise DSA and problem-solving to build the fundamentals underneath the projects.",
  ],
  highlights: [
    { value: '8.95', label: 'Semester 1 SGPA' },
    { value: '8.42', label: 'Semester 2 SGPA' },
    { value: '6', label: 'Projects' },
    { value: '2029', label: 'Expected graduation' },
  ],
  currentlyLearning: ['Java', 'DSA', 'Data Science', 'AI/ML'],
}

export const skillGroups = [
  {
    label: 'Languages',
    tag: 'LANG',
    items: ['Python', 'C', 'C++', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Platforms',
    tag: 'PLATFORM',
    items: ['Vercel', 'Supabase', 'Firebase', 'Google Cloud', 'AWS'],
  },
  {
    label: 'Tools',
    tag: 'TOOLS',
    items: ['SQL', 'Git', 'GitHub', 'Figma', 'VS Code'],
  },
  {
    label: 'Exploring',
    tag: 'LEARNING',
    items: ['React', 'Next.js', 'FastAPI', 'AI / ML', 'Data Science', 'DSA'],
  },
]

export type Project = {
  index: string
  name: string
  category: string
  status: string
  description: string
  tech: string[]
  github?: string
  live?: string
  readouts: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'AgriN',
    category: 'Featured · AI / Agriculture / Bilingual',
    status: 'IN PROGRESS',
    description:
      'AI-assisted crop health platform that analyzes photos of affected leaves and delivers plain-language disease guidance — in English and Kannada. Built on Supabase with row-level security, private image storage, and server-side Gemini analysis.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Gemini API'],
    github: 'https://github.com/the-nidhi-bhat/agrin-crop-advisor',
    readouts: [
      { label: 'FOCUS', value: 'Crop health · AI vision' },
      { label: 'LANGUAGE', value: 'English + Kannada' },
      { label: 'BACKEND', value: 'Supabase Edge Functions' },
    ],
  },
  {
    index: '02',
    name: 'MPLADS Sentinel',
    category: 'Featured · AI / Data Analysis / Explainable Risk Analysis',
    status: 'IN PROGRESS',
    description:
      'AI-powered audit-prioritization platform for MPLADS funds, built for Smart India Hackathon 2026. Analyzes project data for cost, timeline, spatial, agency, and progress-expenditure anomalies, and explains why a project may deserve human investigation.',
    tech: ['Python', 'FastAPI', 'scikit-learn', 'pandas', 'PostgreSQL', 'SQLAlchemy', 'Next.js', 'TypeScript'],
    github: 'https://github.com/the-nidhi-bhat/mplads-sentinel',
    readouts: [
      { label: 'BUILT FOR', value: 'SIH 2026' },
      { label: 'ROLE', value: 'Team Lead' },
      { label: 'TEAM', value: '6 people' },
    ],
  },
  {
    index: '03',
    name: 'Sky Predict',
    category: 'Featured · NASA Space Apps 2025',
    status: 'SHIPPED',
    description:
      'A weather intelligence web app built for NASA Space Apps Challenge 2025 — real-time data, 7-day forecasts, 6-month climate trends, interactive charts, and a JARVIS-style AI weather chatbot, built under hackathon time constraints.',
    tech: ['JavaScript', 'Open-Meteo API', 'Chart.js', 'AI chatbot'],
    github: 'https://github.com/the-nidhi-bhat/SKY-PREDICT-JARVIS',
    live: 'https://the-nidhi-bhat.github.io/SKY-PREDICT-JARVIS/',
    readouts: [
      { label: 'EVENT', value: 'NASA Space Apps' },
      { label: 'MODE', value: 'Team hackathon' },
    ],
  },
  {
    index: '04',
    name: 'Mindful Haven',
    category: 'Featured · Wellness',
    status: 'SHIPPED',
    description:
      'A student-focused mental wellness web app — mood tracking, journaling, guided breathing, meditation, and crisis-support resources in a calming, mobile-friendly interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/the-nidhi-bhat/Mind-Haven',
    live: 'https://the-nidhi-bhat.github.io/Mind-Haven/',
    readouts: [
      { label: 'FOCUS', value: 'Student wellbeing' },
      { label: 'STACK', value: 'Firebase' },
    ],
  },
]

export const moreProjects = [
  {
    name: 'CodexMatrix Redesign',
    description: 'Frontend redesign improving interface structure, visual systems, responsiveness, and UX.',
    tech: ['TypeScript', 'Frontend', 'UI/UX'],
    github: 'https://github.com/the-nidhi-bhat/codexmatrix-redesign-abtalks',
  },
  {
    name: 'Cryptography RSA',
    description: 'A JavaScript implementation of RSA key generation, encryption, and decryption, built for Mathematics Day — secured 3rd place.',
    tech: ['JavaScript', 'Cryptography', 'RSA'],
    github: 'https://github.com/the-nidhi-bhat/cryptography-rsa',
  },
]

export const education = [
  {
    institution: 'Visvesvaraya Technological University (VTU)',
    qualification: 'B.E. Computer Science & Business Systems',
    details: ['Expected Graduation: 2029', 'Semester 1 SGPA: 8.95', 'Semester 2 SGPA: 8.42'],
  },
  {
    institution: 'Y.B. Annigeri PU Science & Commerce College',
    qualification: 'Class XII (2nd PUC), Science & Commerce',
    details: ['89.5%'],
  },
]

export const certifications = [
  { issuer: 'Anthropic', name: 'AI Fluency: Framework & Foundations' },
  { issuer: 'Adobe', name: 'University Hackathon 2026 — Participant' },
  { issuer: 'upGrad', name: 'Generative AI Foundations' },
  { issuer: 'AWS', name: 'Fundamentals of ML & AI' },
  { issuer: 'Google Cloud', name: 'Skill Badges' },
  { issuer: 'NASA', name: 'Space Apps Challenge 2025 — Participant' },
  { issuer: 'HackerRank', name: 'Python — Skill Badges' },
  { issuer: 'HP LIFE', name: 'Cybersecurity Awareness' },
]

export const achievements = [
  { title: 'Smart India Hackathon 2026 — MPLADS Sentinel', detail: 'Team lead & primary presenter · advanced to the 4th internal round' },
  { title: 'NASA Space Apps Challenge 2025 — Sky Predict', detail: 'Participant, built a weather intelligence app' },
  { title: 'Mathematics Day — Cryptography RSA', detail: '3rd Place' },
  { title: 'Hack With India — Vibe Hacks 2.0', detail: 'Top 1000 of 3000 teams' },
  { title: 'Quantum Summit', detail: '2nd Place, Presentation' },
  { title: 'Google DevFest Belgaum 2025', detail: 'Participant' },
  { title: 'Build with AI — Google Developer Groups', detail: 'Participant' },
  { title: 'ViCODATHON — AB Talks', detail: 'Participant' },
]

export const marqueeItems = [
  { label: 'AgriN', meta: 'AI crop health · Kannada + English' },
  { label: 'MPLADS Sentinel', meta: 'Anomaly detection · SIH 2026' },
  { label: 'Mindful Haven', meta: 'Wellness platform · Firebase' },
  { label: 'Sky Predict', meta: 'NASA Space Apps 2025' },
  { label: 'CodexMatrix Redesign', meta: 'UI/UX rebuild' },
  { label: 'Cryptography RSA', meta: '3rd place · Mathematics Day' },
  { label: 'Top 1000 / 3000 teams', meta: 'Vibe Hacks 2.0' },
]
