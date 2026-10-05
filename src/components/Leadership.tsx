import FadeIn from './FadeIn'
import { leadership } from '../data'
import { Users, Award, Code } from 'lucide-react'

export default function Leadership() {
  return (
    <section id="leadership" className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-28 border-t border-hairline">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-10">Leadership & community</p>
        </FadeIn>
        <div className="flex flex-col gap-6">
          {leadership.map((item, i) => (
            <FadeIn key={item.organization} delay={i * 0.08}>
              <div className="bg-panel/50 border border-hairline rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-signal-violet/20 text-signal-violet">
                        <Users size={18} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl text-mist">{item.organization}</h3>
                        <p className="font-mono text-xs uppercase tracking-wide text-signal-cyan">{item.chapter}</p>
                      </div>
                    </div>
                    <p className="font-mono text-sm text-muted">{item.period} · {item.role}</p>
                  </div>
                  <div className="flex items-center gap-3 text-muted font-mono text-xs uppercase tracking-widest whitespace-nowrap">
                    <span className="flex items-center gap-1">{item.role}</span>
                  </div>
                </div>
                <p className="text-muted text-base sm:text-lg leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}