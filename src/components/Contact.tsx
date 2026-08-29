import { Github, Linkedin, Mail, FileDown } from 'lucide-react'
import FadeIn from './FadeIn'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 sm:px-8 md:px-12 py-28 sm:py-40">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-6">04 &mdash; Contact</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-display grad-text font-bold leading-[0.95] tracking-tight text-[13vw] sm:text-7xl md:text-8xl mb-8">
            Let&apos;s build something.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto mb-12">
            {profile.status}. If you&apos;re working on something in AI/ML or full-stack and want another
            builder in the room, say hi.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-ink bg-gradient-to-r from-signal-cyan to-signal-violet hover:opacity-90 transition-opacity"
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href="/Nidhi_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium border border-hairline text-mist hover:bg-white/5 transition-colors"
            >
              <FileDown size={16} /> Resume
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center gap-6 text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-signal-cyan transition-colors">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-signal-cyan transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-signal-cyan transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </FadeIn>
      </div>

      <p className="text-center font-mono text-[10px] tracking-[0.2em] uppercase text-muted/60 mt-24">
        Designed &amp; built by {profile.name} &middot; {new Date().getFullYear()}
      </p>
    </section>
  )
}
