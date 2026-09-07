import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'
import { profile } from '../data'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#work' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 sm:px-8 md:px-12 py-5 md:py-6"
      >
        <a href="#top" className="font-display text-lg tracking-tight text-mist">
          {profile.name}.
        </a>

        <div className="hidden md:flex items-center gap-6 font-mono text-xs tracking-[0.2em] uppercase text-muted">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-mist transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-signal-cyan">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan animate-blink-dot" />
          {profile.status}
        </div>

        <a
          href={profile.resume}
          download="Nidhi_Resume.pdf"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-signal-cyan/50 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-mist hover:border-signal-cyan hover:text-signal-cyan transition-colors"
        >
          <FileDown size={14} /> Resume
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] w-7"
        >
          <span
            className={`h-[2px] bg-mist transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`h-[2px] bg-mist transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-[2px] bg-mist transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </motion.nav>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-30 bg-ink/95 backdrop-blur-md flex flex-col justify-center items-start px-8 gap-8 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="font-display text-3xl text-mist"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
