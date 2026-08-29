import FadeIn from './FadeIn'
import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 sm:px-8 md:px-12 py-28 sm:py-36 bg-panel/40 border-y border-hairline">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-6">02 &mdash; Toolkit</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-display grad-text font-bold leading-[0.95] tracking-tight text-[12vw] sm:text-6xl md:text-7xl mb-16">
            What I build with.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-px bg-hairline rounded-2xl overflow-hidden">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.08} className="bg-ink p-8 sm:p-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl sm:text-2xl text-mist">{group.label}</h3>
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted border border-hairline rounded-full px-2.5 py-1">
                  {group.tag}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs sm:text-sm text-muted px-3 py-1.5 rounded-full border border-hairline hover:text-signal-cyan hover:border-signal-cyan/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
