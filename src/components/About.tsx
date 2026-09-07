import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="relative px-5 sm:px-8 md:px-12 py-28 sm:py-36">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-6">01 &mdash; About</p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="font-display grad-text font-bold leading-[0.95] tracking-tight text-[12vw] sm:text-6xl md:text-7xl mb-14">
            About me.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {about.paragraphs.map((p, i) => (
            <AnimatedText
              key={i}
              text={p}
              className="text-mist text-lg sm:text-xl md:text-2xl leading-relaxed font-light"
            />
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-hairline rounded-2xl overflow-hidden mt-14">
            {about.highlights.map((highlight) => (
              <div key={highlight.label} className="bg-ink p-5 sm:p-6">
                <p className="font-display text-3xl sm:text-4xl text-mist">{highlight.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2">{highlight.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
