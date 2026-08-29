import { useEffect, useRef, useState, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  className?: string
}

/**
 * Mouse-following magnetic hover effect.
 * Tracks cursor position relative to the element's center and nudges the
 * element toward it once the cursor comes within `padding` px of its edges.
 * Eases back to rest on mouse leave / when the cursor moves away.
 */
export default function Magnet({ children, padding = 150, strength = 3, className = '' }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2

      const withinX = e.clientX > rect.left - padding && e.clientX < rect.right + padding
      const withinY = e.clientY > rect.top - padding && e.clientY < rect.bottom + padding

      if (withinX && withinY) {
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        setTransform({ x: dx / strength, y: dy / strength })
        setActive(true)
      } else {
        setTransform({ x: 0, y: 0 })
        setActive(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, strength])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
