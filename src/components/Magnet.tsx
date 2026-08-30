import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  /** Phone tilt, in degrees, that produces the maximum movement. */
  gyroRange?: number
}

type MotionPermission = 'idle' | 'prompt' | 'granted' | 'unavailable'

type DeviceOrientationWithPermission = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

/** Desktop follows the cursor; mobile follows phone tilt, with finger-drag fallback. */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  gyroRange = 20,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const baseOrientation = useRef<{ beta: number; gamma: number } | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)
  const [motionPermission, setMotionPermission] = useState<MotionPermission>('idle')

  const reset = useCallback(() => {
    setActive(false)
    setPosition({ x: 0, y: 0 })
  }, [])

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    if (event.beta === null || event.gamma === null) return

    if (!baseOrientation.current) {
      baseOrientation.current = { beta: event.beta, gamma: event.gamma }
    }

    const clamp = (value: number) => Math.max(-gyroRange, Math.min(gyroRange, value))
    const maxOffset = 40
    const deltaBeta = event.beta - baseOrientation.current.beta
    const deltaGamma = event.gamma - baseOrientation.current.gamma

    setActive(true)
    setPosition({
      x: (clamp(deltaGamma) / gyroRange * maxOffset) / (strength / 3),
      y: (clamp(deltaBeta) / gyroRange * maxOffset) / (strength / 3),
    })
  }, [gyroRange, strength])

  const handleTouchMove = useCallback((event: TouchEvent) => {
    const element = ref.current
    const touch = event.touches[0]
    if (!element || !touch) return

    const rect = element.getBoundingClientRect()
    setActive(true)
    setPosition({
      x: (touch.clientX - (rect.left + rect.width / 2)) / strength,
      y: (touch.clientY - (rect.top + rect.height / 2)) / strength,
    })
  }, [strength])

  useEffect(() => {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (coarsePointer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleMouseMove = (event: MouseEvent) => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const withinX = event.clientX > rect.left - padding && event.clientX < rect.right + padding
      const withinY = event.clientY > rect.top - padding && event.clientY < rect.bottom + padding

      if (withinX && withinY) {
        setActive(true)
        setPosition({ x: (event.clientX - centerX) / strength, y: (event.clientY - centerY) / strength })
      } else {
        reset()
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, reset, strength])

  useEffect(() => {
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!coarsePointer || reducedMotion) return

    const orientation = window.DeviceOrientationEvent as DeviceOrientationWithPermission | undefined
    if (!orientation) {
      setMotionPermission('unavailable')
    } else if (typeof orientation.requestPermission === 'function') {
      // iOS requires this call to be made from an explicit tap.
      setMotionPermission('prompt')
    } else {
      setMotionPermission('granted')
    }

    const element = ref.current
    element?.addEventListener('touchmove', handleTouchMove, { passive: true })
    element?.addEventListener('touchend', reset, { passive: true })
    element?.addEventListener('touchcancel', reset, { passive: true })

    return () => {
      element?.removeEventListener('touchmove', handleTouchMove)
      element?.removeEventListener('touchend', reset)
      element?.removeEventListener('touchcancel', reset)
    }
  }, [handleTouchMove, reset])

  useEffect(() => {
    if (motionPermission !== 'granted') return

    baseOrientation.current = null
    window.addEventListener('deviceorientation', handleOrientation, { passive: true })
    return () => window.removeEventListener('deviceorientation', handleOrientation)
  }, [handleOrientation, motionPermission])

  const requestMotionPermission = async () => {
    const orientation = window.DeviceOrientationEvent as DeviceOrientationWithPermission | undefined
    if (!orientation?.requestPermission) return

    try {
      const permission = await orientation.requestPermission()
      setMotionPermission(permission === 'granted' ? 'granted' : 'unavailable')
    } catch {
      setMotionPermission('unavailable')
    }
  }

  return (
    <div
      ref={ref}
      className={`relative ${className}`.trim()}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
      {motionPermission === 'prompt' && (
        <button
          type="button"
          onClick={requestMotionPermission}
          className="absolute left-1/2 top-full mt-2 min-h-11 -translate-x-1/2 whitespace-nowrap rounded-full border border-mist/60 bg-ink/80 px-4 font-mono text-xs uppercase tracking-wide text-mist backdrop-blur-sm transition-colors hover:border-signal-cyan hover:text-signal-cyan"
        >
          Tap to enable motion
        </button>
      )}
    </div>
  )
}
