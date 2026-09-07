import FadeIn from './FadeIn'
import { education } from '../data'

export default function Education() {
  return (
    <section className="relative px-5 sm:px-8 md:px-12 py-24 sm:py-28 border-t border-hairline">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-signal-cyan mb-10">Education &amp; academics</p>
        </FadeIn>
        <div className="flex flex-col divide-y divide-hairline">
          {education.map((item) => (
            <FadeIn key={item.institution}>
              <div className="py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-8">
                <div>
                  <h2 className="font-display text-lg sm:text-xl text-mist">{item.institution}</h2>
                  <p className="text-muted text-sm mt-1">{item.qualification}</p>
                </div>
                <div className="flex flex-wrap sm:justify-end gap-x-5 gap-y-1 text-sm text-signal-cyan">
                  {item.details.map((detail) => <span key={detail}>{detail}</span>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}