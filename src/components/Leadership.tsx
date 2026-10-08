import FadeIn from './FadeIn'
import { leadership } from '../data'

export default function Leadership() {
  return (
    <section id="leadership" className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-28 border-t border-hairline">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-6">03 &mdash; Leadership</p>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2 className="font-display grad-text font-bold leading-[0.95] tracking-tight text-[12vw] sm:text-6xl md:text-7xl mb-12">
            Leadership.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-5">
          {leadership.map((item, i) => (
            <FadeIn key={item.organization} delay={i * 0.08}>
              <div className="bg-panel/50 border border-hairline rounded-2xl p-6 sm:p-8">
                <p className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-signal-cyan mb-3">
                  {item.role}
                </p>
                <h3 className="font-display text-xl sm:text-2xl text-mist">{item.organization}</h3>
                {item.meta && (
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted mt-2">{item.meta}</p>
                )}
                {item.description && (
                  <p className="text-muted text-base sm:text-lg leading-relaxed mt-3 max-w-3xl">
                    {item.description}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
