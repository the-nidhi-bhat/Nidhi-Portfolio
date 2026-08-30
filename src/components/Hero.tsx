import { motion } from 'framer-motion'
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

      {/* Keep the introduction as one wide line, with the portrait immediately below it. */}
      <div className="relative z-20 mt-4 sm:mt-2 md:-mt-1">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ x: '-8%', y: '100%' }}
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display hero-heading w-full whitespace-nowrap font-bold leading-[0.95] tracking-tight text-[12.6vw] sm:text-[10.8vw] md:text-[15.5vw] lg:text-[17vw]"
          >
            HI, I&apos;M NIDHI
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
          transition={{ delay: 0.65, duration: 0.6 }}
          className="pointer-events-auto inline-flex min-h-11 items-center rounded-full border border-signal-violet bg-signal-violet/20 px-5 sm:px-7 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-mist shadow-[0_0_28px_rgba(124,92,252,0.35)] transition-colors hover:bg-signal-violet hover:text-white"
        >
          Contact me
        </motion.a>
      </div>
    </section>
  )
}
