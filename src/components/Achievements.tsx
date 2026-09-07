import FadeIn from './FadeIn'
import { achievements } from '../data'
import { Trophy } from 'lucide-react'

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-28 border-t border-hairline">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-10">Hackathons &amp; recognition</p>
        </FadeIn>
        <div className="flex flex-col divide-y divide-hairline">
          {achievements.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.05}>
              <div className="flex items-start sm:items-center gap-5 py-6">
                <Trophy size={18} className="text-signal-amber mt-1 sm:mt-0 flex-shrink-0" />
                <div>
                  <p className="font-display text-base sm:text-lg text-mist">{a.title}</p>
                  <p className="text-muted text-sm mt-1">{a.detail}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
