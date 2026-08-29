export const profile = {
  name: 'Nidhi',
  role: 'CSBS Student · AI & Data · Software',
  tagline: 'Building AI-powered tools that make complex data make sense.',
  location: 'Belagavi, Karnataka',
  email: 'the.nidhi.bhat@gmail.com',
  github: 'https://github.com/the-nidhi-bhat',
  linkedin: 'https://linkedin.com/in/the-nidhi-bhat',
  status: 'Open to AI/ML & full-stack internships',
}

export const about = {
  paragraphs: [
    "Computer Science & Business Systems student, driven by curiosity, creativity, and a constant urge to build. I love turning ideas into real experiences, learning whatever it takes along the way, and pushing technology beyond the obvious.",
  ],
}

export const skillGroups = [
  {
    label: 'Languages',
    tag: 'LANG',
    items: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    label: 'AI / Data',
    tag: 'AI+DATA',
    items: ['Generative AI', 'Prompt Engineering', 'Machine Learning', 'NLP', 'Graph Analysis (NetworkX)'],
  },
  {
    label: 'Web / Backend',
    tag: 'STACK',
    items: ['Next.js', 'React', 'FastAPI', 'PostgreSQL / PostGIS', 'Supabase', 'Node.js', 'Tailwind CSS'],
  },
  {
    label: 'Tools',
    tag: 'TOOLS',
    items: ['Git', 'GitHub', 'GitHub Pages', 'VS Code', 'Figma', 'Power BI', 'MS Office'],
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
    name: 'MPLADS Sentinel',
    category: 'Featured · AI/ML',
    status: 'IN PROGRESS',
    description:
      'AI-powered audit-prioritization platform for MPLADS funds. Analyzes project data for cost, timeline, spatial, agency, and relationship anomalies, and explains why a project may deserve human investigation.',
    tech: ['Python', 'FastAPI', 'PostgreSQL/PostGIS', 'Next.js', 'TypeScript', 'NetworkX', 'NLP'],
    github: 'https://github.com/the-nidhi-bhat/mplads-sentinel',
    readouts: [
      { label: 'BUILT FOR', value: 'SIH26102' },
      { label: 'ROLE', value: 'Team Lead' },
      { label: 'TEAM', value: '6 people' },
    ],
  },
  {
    index: '02',
    name: 'Mindful Haven',
    category: 'Featured · Wellness',
    status: 'SHIPPED',
    description:
      'A mental wellness platform for students, blending emotionally supportive content with a calming, non-clinical experience — mood tracking, journaling, guided breathing, and study planning.',
    tech: ['Next.js', 'React', 'AI', 'Supabase'],
    github: 'https://github.com/the-nidhi-bhat/Mind-Haven',
    live: 'https://the-nidhi-bhat.github.io/Mind-Haven',
    readouts: [
      { label: 'FOCUS', value: 'Student wellbeing' },
      { label: 'STACK', value: 'Full-stack' },
    ],
  },
  {
    index: '03',
    name: 'Sky Predict',
    category: 'Featured · NASA Space Apps 2025',
    status: 'SHIPPED',
    description:
      'A weather intelligence web app built for NASA Space Apps Challenge 2025 — real-time data, forecasts, charts, climate trends, predictions, and an AI chatbot, built under hackathon time constraints.',
    tech: ['JavaScript', 'Weather API', 'Data Viz', 'AI'],
    github: 'https://github.com/the-nidhi-bhat/SKY-PREDICT-JARVIS',
    live: 'https://the-nidhi-bhat.github.io/SKY-PREDICT-JARVIS',
    readouts: [
      { label: 'EVENT', value: 'NASA Space Apps' },
      { label: 'MODE', value: 'Team hackathon' },
    ],
  },
]

export const moreProjects = [
  {
    name: 'AgriN Crop Advisor',
    description: 'AI/agriculture project providing practical crop guidance based on agricultural inputs.',
    tech: ['TypeScript', 'AI', 'Agriculture'],
    github: 'https://github.com/the-nidhi-bhat/agrin-crop-advisor',
  },
  {
    name: 'Pixel Cat',
    description: 'Interactive creative web project focused on playful frontend interaction and visual design.',
    tech: ['TypeScript', 'Frontend', 'Interactive'],
    github: 'https://github.com/the-nidhi-bhat/pixel-cat',
  },
  {
    name: 'CodexMatrix Redesign',
    description: 'Frontend redesign improving interface structure, visual systems, responsiveness, and UX.',
    tech: ['TypeScript', 'Frontend', 'UI/UX'],
    github: 'https://github.com/the-nidhi-bhat/codexmatrix-redesign-abtalks',
  },
  {
    name: 'Cryptography RSA',
    description: 'A JavaScript implementation exploring RSA cryptography and public-key encryption principles.',
    tech: ['JavaScript', 'Cryptography', 'RSA'],
    github: 'https://github.com/the-nidhi-bhat/cryptography-rsa',
  },
]

export const achievements = [
  { title: 'Smart India Hackathon — SIH26102', detail: 'Team lead & primary presenter, MPLADS Sentinel' },
  { title: 'NASA Space Apps Challenge 2025', detail: 'Participant, built Sky Predict weather app' },
  { title: 'Hack With India — Vibe Hacks 2.0', detail: 'Top 1000 of 3000 teams' },
  { title: 'Google DevFest Belgaum 2025', detail: 'Participant' },
  { title: 'Build with AI — Google Developer Groups', detail: 'Participant' },
]

export const marqueeItems = [
  { label: 'MPLADS Sentinel', meta: 'Anomaly detection · SIH26102' },
  { label: 'Mindful Haven', meta: 'Wellness platform · Next.js' },
  { label: 'Sky Predict', meta: 'NASA Space Apps 2025' },
  { label: 'AgriN Crop Advisor', meta: 'AI · Agriculture' },
  { label: 'Pixel Cat', meta: 'Interactive frontend' },
  { label: 'CodexMatrix Redesign', meta: 'UI/UX rebuild' },
  { label: 'Cryptography RSA', meta: 'Public-key encryption' },
  { label: 'Top 1000 / 3000 teams', meta: 'Vibe Hacks 2.0' },
]
