import FadeIn from './FadeIn'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-28 border-t border-hairline">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-10">Certifications &amp; learning</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-px bg-hairline rounded-2xl overflow-hidden">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.issuer} delay={index * 0.05} className={`bg-ink p-6 sm:p-8 ${index === certifications.length - 1 ? 'sm:col-span-2' : ''}`}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-signal-cyan mb-2">{cert.issuer}</p>
              <h2 className="font-display text-lg text-mist">{cert.name}</h2>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}