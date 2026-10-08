import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import Avatar from './Avatar'
import { profile } from '../data'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-dvh flex flex-col overflow-hidden px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-7 sm:pb-8 md:pb-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-signal-cyan"
      >
        {profile.role}
      </motion.p>

      <div className="relative z-20 mt-4 sm:mt-2 md:-mt-1">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ x: '-8%', y: '100%' }}
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display hero-heading w-full whitespace-nowrap text-center font-bold leading-[0.95] tracking-tight text-[12.6vw] sm:text-[10.8vw] md:text-[14.5vw] lg:text-[15.5vw]"
          >
            HI, I&apos;M NIDHI
          </motion.h1>
        </div>
      </div>

      <Avatar />

      <div className="relative z-20 mt-auto flex flex-col lg:flex-row justify-between items-end gap-4 pointer-events-none pb-4 lg:pb-0">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="pointer-events-auto text-muted font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[320px] lg:mb-4"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.05rem)' }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="pointer-events-auto flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 w-full sm:w-auto"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Nidhi on GitHub" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-hairline px-4 sm:px-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.12em] text-mist hover:border-signal-cyan hover:text-signal-cyan transition-colors w-full sm:w-auto justify-center">
            <Github size={14} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Nidhi on LinkedIn" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-hairline px-4 sm:px-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.12em] text-mist hover:border-signal-cyan hover:text-signal-cyan transition-colors w-full sm:w-auto justify-center">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href={profile.resume} download="Nidhi_Resume.pdf" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-hairline px-4 sm:px-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.12em] text-mist hover:border-signal-cyan hover:text-signal-cyan transition-colors w-full sm:w-auto justify-center">
            <Download size={14} /> Resume
          </a>
          <a href="#contact" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-hairline px-4 sm:px-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.12em] text-mist hover:border-signal-cyan hover:text-signal-cyan transition-colors w-full sm:w-auto justify-center">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}