import { marqueeItems } from '../data'

function Row({ direction }: { direction: 'left' | 'right' }) {
  const tripled = [...marqueeItems, ...marqueeItems, ...marqueeItems]
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {tripled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[220px] sm:w-[260px] rounded-2xl border border-hairline bg-panel px-5 py-4"
          >
            <p className="font-display text-sm sm:text-base text-mist">{item.label}</p>
            <p className="font-mono text-[10px] tracking-widest uppercase text-muted mt-1.5">{item.meta}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="relative py-16 sm:py-20 border-y border-hairline">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10"
        style={{ background: 'linear-gradient(to right, #0A0A0F, transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10"
        style={{ background: 'linear-gradient(to left, #0A0A0F, transparent)' }}
      />
      <div className="flex flex-col gap-4">
        <Row direction="left" />
        <Row direction="right" />
      </div>
    </section>
  )
}
