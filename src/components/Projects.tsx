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
        <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
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

        <p className="text-mist/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
          {project.description}
        </p>

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

          <div className="flex flex-wrap items-center gap-4">
            {project.readouts.map((r) => (
              <div key={r.label} className="font-mono text-[10px] tracking-widest uppercase leading-tight">
                <div className="text-muted">{r.label}</div>
                <div className="text-signal-cyan">{r.value}</div>
              </div>
            ))}
            <div className="flex items-center gap-3 ml-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-xs font-mono uppercase tracking-widest hover:border-signal-cyan/50 hover:text-signal-cyan transition-colors"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 text-xs font-mono uppercase tracking-widest hover:border-signal-cyan/50 hover:text-signal-cyan transition-colors"
                >
                  Live <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="relative px-5 sm:px-8 md:px-12 pt-28 sm:pt-36 pb-10">
      <div className="max-w-5xl mx-auto mb-10">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-6">03 &mdash; Work</p>
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
        <div className="grid sm:grid-cols-2 gap-4">
          {moreProjects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.06}>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} on GitHub`}
                className="group block h-full rounded-2xl border border-hairline p-6 hover:border-signal-cyan/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display text-lg text-mist">{p.name}</h4>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-signal-cyan">
                    GitHub <ArrowUpRight size={14} />
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-muted px-2 py-1 rounded-full border border-hairline">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
