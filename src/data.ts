export const profile = {
  name: 'Nidhi',
  role: 'CSBS Student | Frontend Developer | AI + Web',
  tagline: 'I build practical web experiences with frontend + AI.',
  location: 'Belagavi, Karnataka',
  email: 'the.nidhi.bhat@gmail.com',
  resume: '/Nidhi_Resume.pdf',
  github: 'https://github.com/the-nidhi-bhat',
  linkedin: 'https://linkedin.com/in/the-nidhi-bhat',
  portfolio: 'https://nidhi-portfolio-rosy.vercel.app',
  status: 'Open to Frontend Development & AI/Web Development Internships',
}

export const about = {
  paragraphs: [
    "I'm a Computer Science & Business Systems student at VTU Belagavi and a frontend-focused developer who enjoys building practical web applications with AI.",
    "I learn by building — from AI-powered crop health and explainable audit systems to developer tools, weather applications, and cloud-based products.",
    "I've built and led projects through hackathons and technical competitions, including Smart India Hackathon, IBM Bob 2.0, and CloudBuild.",
    "I'm also a Co-Organizer for GDGoC VTU Belagavi 2026–27, where I work on building and supporting a student developer community.",
  ],
  highlights: [
    { value: '8.95', label: 'Semester 1 SGPA' },
    { value: '8.42', label: 'Semester 2 SGPA' },
    { value: '4', label: 'Featured Projects' },
    { value: '2029', label: 'Expected Graduation' },
  ],
  currentlyLearning: ['React', 'Next.js', 'TypeScript', 'AI Integration', 'DSA'],
}

export const skillGroups = [
  {
    label: 'Frontend',
    tag: 'FRONTEND',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'Programming',
    tag: 'PROGRAMMING',
    items: ['Python', 'C', 'Java'],
  },
  {
    label: 'AI / GenAI',
    tag: 'AI',
    items: ['Generative AI', 'Prompt Engineering', 'Gemini', 'OpenAI API', 'AI Application Integration'],
  },
  {
    label: 'Data / Visualization',
    tag: 'DATA',
    items: ['Chart.js', 'Data Visualization'],
  },
  {
    label: 'Tools',
    tag: 'TOOLS',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    label: 'Cloud / Backend Exposure',
    tag: 'CLOUD',
    items: ['Firebase', 'Supabase', 'AWS', 'Amazon Bedrock', 'FastAPI', 'PostgreSQL'],
  },
]

export type Project = {
  index: string
  name: string
  category: string
  status: string
  description: string
  problem: string
  role: string
  tech: string[]
  achievement: string
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'INVOX',
    category: 'AI-Assisted GST Invoicing',
    status: 'SHIPPED',
    description:
      'An AI-assisted invoicing application designed for Indian small businesses. It converts WhatsApp-style Hinglish/English orders into structured invoice data, lets the user review the extraction, applies deterministic GST validation, and generates an invoice/payment workflow.',
    problem:
      'Small businesses struggle with manual GST invoicing — orders come via WhatsApp in informal language, and creating compliant invoices is time-consuming and error-prone.',
    role: 'Solo Builder',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Python', 'AWS Lambda', 'API Gateway', 'Amazon Bedrock', 'AWS Amplify'],
    achievement: '🥈 2nd Place — CloudBuild AI Virtual Build-a-Thon 2026',
    github: 'https://github.com/the-nidhi-bhat/Invox',
    live: 'https://invox.antideploy.app/',
  },
  {
    index: '02',
    name: 'Legacy Code Whisperer',
    category: 'AI Developer Tool',
    status: 'SHIPPED',
    description:
      'An AI-assisted developer tool designed to help understand and modernize legacy code by providing explanations, analysis, and modernization-oriented assistance.',
    problem:
      'Developers spend significant time understanding legacy codebases with poor documentation. This tool uses AI to explain, analyze, and assist with modernization.',
    role: 'Team Lead / Builder',
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'AI/LLM Integration'],
    achievement: 'IBM Bob 2.0 — Team Lead / Builder',
    github: 'https://github.com/the-nidhi-bhat/Codexmatrix-IBM-Bob-Hackathon',
    live: 'https://legacy-code-whisperer-mu.vercel.app/',
  },
  {
    index: '03',
    name: 'AgriN',
    category: 'AI Crop Health Companion',
    status: 'IN DEVELOPMENT',
    description:
      'An AI-assisted crop health platform where users can provide an image of an affected crop leaf and receive AI-powered disease identification and practical crop guidance. Current supported crops include Tomato, Chili, and Paddy with bilingual support including Kannada.',
    problem:
      'Farmers lack accessible, immediate crop disease diagnosis. AgriN provides AI vision-based disease identification with practical guidance in local languages.',
    role: 'Solo Builder',
    tech: ['TypeScript', 'React', 'Next.js', 'Gemini', 'Firebase', 'AI Vision'],
    achievement: 'Active Project — AI Vision + Bilingual Support',
    github: 'https://github.com/the-nidhi-bhat/agrin-crop-advisor',
    live: 'https://agrin-crop-advisor.vercel.app/',
  },
  {
    index: '04',
    name: 'MPLADS Sentinel',
    category: 'Explainable Audit Platform',
    status: 'IN DEVELOPMENT',
    description:
      'An explainable audit-prioritization platform designed around MPLADS data. It analyzes signals such as cost, timeline, expenditure/progress, agency and spatial patterns to help prioritize projects that may require closer audit attention.',
    problem:
      'Audit agencies need to prioritize which MPLADS projects warrant investigation. This platform uses ML to detect anomalies and explain why specific projects need human review.',
    role: 'Team Lead — Phantom Syndicate',
    tech: ['Python', 'FastAPI', 'pandas', 'scikit-learn', 'PostgreSQL', 'SQLAlchemy', 'Next.js', 'TypeScript'],
    achievement: 'Smart India Hackathon 2026 — Internal Round Cleared',
    github: 'https://github.com/the-nidhi-bhat/mplads-sentinel',
  },
]

export const moreProjects = [
  {
    name: 'Sky Predict',
    description: 'A weather intelligence web application with real-time weather data, forecasts, climate trends, interactive visualizations and an AI-style weather assistant.',
    tech: ['JavaScript', 'Open-Meteo', 'Chart.js'],
    github: 'https://github.com/the-nidhi-bhat/SKY-PREDICT-JARVIS',
    live: 'https://the-nidhi-bhat.github.io/SKY-PREDICT-JARVIS/',
  },
  {
    name: 'Mindful Haven',
    description: 'A student-focused wellness web application with features such as mood tracking, journaling, guided breathing, meditation and support resources.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    github: 'https://github.com/the-nidhi-bhat/Mind-Haven',
  },
  {
    name: 'Cryptography RSA',
    description: 'An RSA cryptography implementation exploring key generation, encryption and decryption. Secured 3rd place at National Mathematics Day.',
    tech: ['JavaScript', 'Cryptography', 'RSA'],
    github: 'https://github.com/the-nidhi-bhat/cryptography-rsa',
  },
  {
    name: 'Liminal',
    description: 'A design-focused experimental project exploring UI/UX patterns and interactions.',
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/the-nidhi-bhat/liminal',
  },
  {
    name: 'CodexMatrix Redesign',
    description: 'Frontend redesign improving interface structure, visual systems, responsiveness, and UX.',
    tech: ['TypeScript', 'Frontend', 'UI/UX'],
    github: 'https://github.com/the-nidhi-bhat/codexmatrix-redesign-abtalks',
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
  { issuer: 'upGrad', name: 'Generative AI Foundations' },
  { issuer: 'AWS', name: 'ML & AI Fundamentals' },
  { issuer: 'HP LIFE', name: 'AI' },
  { issuer: 'HP LIFE', name: 'Data Science' },
  { issuer: 'HP LIFE', name: 'Cybersecurity' },
  { issuer: 'HP LIFE', name: 'Critical Thinking' },
  { issuer: 'Google Cloud', name: 'Gemini Badge / Arcade' },
  { issuer: 'HackerRank', name: 'Python Basic' },
  { issuer: 'Qualcomm', name: 'AI Upskilling' },
]

export const achievements = [
  { title: 'CloudBuild AI Virtual Build-a-Thon 2026', detail: '🥈 2nd Place — INVOX · Solo Builder' },
  { title: 'Quantum Summit', detail: '🥈 2nd Place — Presentation' },
  { title: 'National Mathematics Day', detail: '🥉 3rd Place — RSA Cryptography' },
  { title: 'Smart India Hackathon 2026', detail: '🇮🇳 Internal Round Cleared — Team Lead · Phantom Syndicate · MPLADS Sentinel' },
  { title: 'Vibe Hacks 2.0', detail: '🏅 Top 1,000 / 3,000 Teams' },
  { title: 'IBM Bob 2.0', detail: '🤖 Team Lead / Builder — Legacy Code Whisperer' },
]

export const leadership = [
  {
    organization: 'Google Developer Groups on Campus (GDGoC)',
    chapter: 'VTU Belagavi',
    role: 'Co-Organizer',
    period: '2026–27',
    description: 'Working with the chapter team to support student developers, organize technical initiatives, and help build a stronger developer community on campus.',
  },
]

export const marqueeItems = [
  { label: 'INVOX', meta: '🥈 CloudBuild 2026 · AI Invoicing' },
  { label: 'Legacy Code Whisperer', meta: 'IBM Bob 2.0 · AI Dev Tool' },
  { label: 'AgriN', meta: 'AI Crop Health · Kannada Support' },
  { label: 'MPLADS Sentinel', meta: 'SIH 2026 · Explainable Audit' },
  { label: 'Sky Predict', meta: 'Weather Intelligence · Chart.js' },
  { label: 'Mindful Haven', meta: 'Student Wellness · Firebase' },
  { label: 'Cryptography RSA', meta: '🥉 National Mathematics Day' },
  { label: 'GDGoC VTU', meta: 'Co-Organizer 2026–27' },
]