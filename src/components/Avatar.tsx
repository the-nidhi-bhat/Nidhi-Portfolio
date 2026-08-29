import Magnet from './Magnet'
import avatarImg from '../assets/avatar.png'

export default function Avatar() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-10 top-[58%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none"
    >
      {/* ambient halo behind the cutout — soft light only, no shape, no box */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[70%] h-[70%] rounded-full bg-signal-violet/20 blur-[90px]" />
      </div>

      <Magnet padding={150} strength={5} className="pointer-events-auto">
        <img
          src={avatarImg}
          alt="Nidhi"
          draggable={false}
          className="select-none w-[240px] sm:w-[320px] md:w-[420px] lg:w-[480px] h-auto object-contain"
        />
      </Magnet>
    </div>
  )
}
