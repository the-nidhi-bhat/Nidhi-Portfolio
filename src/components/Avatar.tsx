import Magnet from './Magnet'
import avatarImg from '../assets/avatar.png'

export default function Avatar() {
  return (
    <div
      className="absolute left-1/2 top-[26%] z-30 -translate-x-1/2 pointer-events-none sm:top-[24%] md:top-[22%]"
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
          className="select-none h-auto w-[78vw] max-w-[400px] object-contain sm:w-[57vw] sm:max-w-[500px] md:w-[50vw] md:max-w-[560px] lg:w-[42vw]"
        />
      </Magnet>
    </div>
  )
}
