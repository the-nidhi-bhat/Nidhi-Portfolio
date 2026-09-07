export const profile = {
  name: 'Nidhi',
  role: 'Computer Science & Business Systems · AI · Software',
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
    "I'm a Computer Science & Business Systems student focused on AI, software development, and data-driven applications. I enjoy turning ideas into working products through projects, hackathons, and continuous experimentation.",
  ],
  highlights: [
    { value: '8.95', label: 'Semester 1 SGPA' },
    { value: '8.42', label: 'Semester 2 SGPA' },
    { value: '7', label: 'Projects' },
    { value: '2029', label: 'Expected graduation' },
  ],
}

export const skillGroups = [
  {
    label: 'Languages',
    tag: 'LANG',
    items: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    label: 'AI & Data',
    tag: 'AI+DATA',
    items: ['Generative AI', 'Prompt Engineering', 'Machine Learning', 'NLP', 'Data Analysis', 'NetworkX / Graph Analysis'],
  },
  {
    label: 'Development',
    tag: 'STACK',
    items: ['React', 'Next.js', 'FastAPI', 'PostgreSQL / PostGIS', 'Supabase', 'Tailwind CSS'],
  },
  {
    label: 'Tools',
    tag: 'TOOLS',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Power BI'],
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
    category: 'Featured · AI / Data Analysis / Explainable Risk Analysis',
    status: 'IN PROGRESS',
    description:
      'AI-powered audit-prioritization platform for MPLADS funds. Analyzes project data for cost, timeline, spatial, agency, and relationship anomalies, and explains why a project may deserve human investigation.',
    tech: ['Python', 'FastAPI', 'PostgreSQL/PostGIS', 'Next.js', 'TypeScript', 'NetworkX', 'NLP'],
    github: 'https://github.com/the-nidhi-bhat/mplads-sentinel',
    readouts: [
      { label: 'BUILT FOR', value: 'SIH 2026' },
      { label: 'ROLE', value: 'Team Lead' },
      { label: 'TEAM', value: '6 people' },
    ],
  },
  {
    index: '02',
    name: 'Pixel Cat',
    category: 'Featured · Interactive',
    status: 'SHIPPED',
    description:
      'Interactive creative web project focused on playful frontend interaction and visual design.',
    tech: ['Next.js', 'React', 'TypeScript', 'Interactive frontend'],
    github: 'https://github.com/the-nidhi-bhat/pixel-cat',
    live: 'https://pixel-cat-six.vercel.app/',
    readouts: [
      { label: 'FOCUS', value: 'Creative frontend' },
      { label: 'MODE', value: 'Interactive' },
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
      'A mental wellness platform for students, blending emotionally supportive content with a calming, non-clinical experience — mood tracking, journaling, guided breathing, and study planning.',
    tech: ['Next.js', 'React', 'AI', 'Supabase'],
    github: 'https://github.com/the-nidhi-bhat/Mind-Haven',
    live: 'https://the-nidhi-bhat.github.io/Mind-Haven/',
    readouts: [
      { label: 'FOCUS', value: 'Student wellbeing' },
      { label: 'STACK', value: 'Full-stack' },
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
    description: 'A JavaScript implementation exploring RSA cryptography and public-key encryption principles.',
    tech: ['JavaScript', 'Cryptography', 'RSA'],
    github: 'https://github.com/the-nidhi-bhat/cryptography-rsa',
  },
  {
    name: 'AgriN Crop Advisor',
    description: 'AI/agriculture project providing practical crop guidance based on agricultural inputs.',
    tech: ['TypeScript', 'AI', 'Agriculture'],
    github: 'https://github.com/the-nidhi-bhat/agrin-crop-advisor',
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
  { issuer: 'AWS', name: 'Fundamentals of ML & AI' },
  { issuer: 'Google Cloud', name: 'Skill Badges' },
  { issuer: 'upGrad', name: 'Generative AI Foundations' },
  { issuer: 'HackerRank', name: 'Python (Basic)' },
  { issuer: 'HP LIFE', name: 'AI for Beginners, Data Science & Analytics, Cybersecurity Awareness, Critical Thinking in the AI Era' },
  { issuer: 'Be10x', name: 'AI Tools Workshop' },
]

export const achievements = [
  { title: 'Smart India Hackathon 2026 — MPLADS Sentinel', detail: 'Team lead & primary presenter' },
  { title: 'NASA Space Apps Challenge 2025 — Sky Predict', detail: 'Participant, built a weather intelligence app' },
  { title: 'Hack With India — Vibe Hacks 2.0', detail: 'Top 1000 of 3000 teams' },
  { title: 'Quantum Summit', detail: '2nd Place, Presentation' },
  { title: 'Google DevFest Belgaum 2025', detail: 'Participant' },
  { title: 'Build with AI — Google Developer Groups', detail: 'Participant' },
  { title: 'ViCODATHON — AB Talks', detail: 'Participant' },
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
