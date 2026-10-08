import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import FadeIn from './FadeIn'
import { projects, moreProjects, type Project } from '../data'

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })
  const targetScale = 1 - (total - 1 - index) * 0.035
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={ref}
      className="sticky top-20 sm:top-28 h-[78vh] flex items-center"
      style={{ top: `${5 + index * 2.2}rem` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[28px] sm:rounded-[36px] border border-hairline bg-panel p-6 sm:p-10 md:p-12 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
      >
        <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white/10">
              {project.index}
            </span>
            <div>
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-signal-cyan mb-1.5">
                {project.category}
              </p>
              <h3 className="font-display text-2xl sm:text-4xl md:text-5xl text-mist">{project.name}</h3>
            </div>
          </div>

          <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-hairline text-muted whitespace-nowrap">
            {project.status}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-signal-cyan mb-2">Problem</p>
            <p className="text-mist/90 text-base sm:text-lg leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-signal-cyan mb-2">Solution</p>
            <p className="text-mist/90 text-base sm:text-lg leading-relaxed">{project.description}</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-signal-cyan mb-2">Role</p>
          <p className="text-mist/90 text-base sm:text-lg leading-relaxed">{project.role}</p>
        </div>

        <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] text-muted px-2.5 py-1 rounded-full border border-hairline"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:items-end sm:ml-1">
            <div className="font-mono text-[10px] tracking-widest uppercase leading-tight text-center sm:text-left w-full sm:w-auto">
              <div className="text-muted mb-1">Achievement</div>
              <div className="text-signal-cyan">{project.achievement}</div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-3 text-xs font-mono uppercase tracking-widest hover:border-signal-cyan/50 hover:text-signal-cyan transition-colors whitespace-nowrap"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-signal-cyan/50 bg-signal-cyan/10 px-4 py-3 text-xs font-mono uppercase tracking-widest text-signal-cyan hover:bg-signal-cyan/20 transition-colors whitespace-nowrap"
                >
                  Live Demo <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function OtherProjectCard({ project, index }: { project: typeof moreProjects[0]; index: number }) {
  return (
    <FadeIn key={project.name} delay={index * 0.06}>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name} on GitHub`}
        className="group block h-full rounded-2xl border border-hairline p-6 hover:border-signal-cyan/40 transition-colors"
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-display text-lg text-mist">{project.name}</h4>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-signal-cyan">
            GitHub <ArrowUpRight size={14} />
          </span>
        </div>
        <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[10px] text-muted px-2 py-1 rounded-full border border-hairline">
              {t}
            </span>
          ))}
        </div>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 py-3 font-mono text-[10px] uppercase tracking-widest text-signal-cyan hover:text-signal-violet transition-colors"
          >
            Live Demo <ArrowUpRight size={12} />
          </a>
        )}
      </a>
    </FadeIn>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative px-5 sm:px-8 md:px-12 pt-28 sm:pt-36 pb-10">
      <div className="max-w-5xl mx-auto mb-10">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-6">04 &mdash; Work</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-display grad-text font-bold leading-[0.95] tracking-tight text-[12vw] sm:text-6xl md:text-7xl">
            Featured projects.
          </h2>
        </FadeIn>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} total={projects.length} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-24 sm:mt-32">
        <FadeIn>
          <h3 className="font-display text-2xl sm:text-3xl text-mist mb-8">More on GitHub</h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moreProjects.map((p, i) => (
            <OtherProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}