import { motion } from 'framer-motion'
import Avatar from './Avatar'
import { profile } from '../data'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen flex flex-col overflow-hidden px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-7 sm:pb-8 md:pb-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-signal-cyan"
      >
        {profile.role}
      </motion.p>

      {/* Massive full-width heading, slides in from the left while rising into place */}
      <div className="mt-4 sm:mt-2 md:-mt-1">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ x: '-8%', y: '100%' }}
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display hero-heading font-bold leading-[0.95] tracking-tight whitespace-nowrap w-full text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw]"
          >
            Hi, I&apos;m
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ x: '-8%', y: '100%' }}
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 0.38, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display hero-heading font-bold leading-[0.95] tracking-tight whitespace-nowrap w-full text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw]"
          >
            Nidhi.
          </motion.h1>
        </div>
      </div>

      {/* Portrait floats full-bleed behind everything, no card/border/bg — just the character */}
      <Avatar />

      <div className="relative z-20 mt-auto flex justify-between items-end gap-4 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="pointer-events-auto text-muted font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.05rem)' }}
        >
          {profile.tagline}
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="pointer-events-auto inline-flex items-center justify-center rounded-full px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-ink bg-gradient-to-r from-signal-cyan to-signal-violet hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  )
}
