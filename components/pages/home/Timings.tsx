import Image from "next/image"

function Timings() {
  return (
    <section id="timing">
      <div className="grid md:grid-cols-2">
        <div className="relative w-full px-10 py-14">
          <div className="absolute left-0 inset-y-0 aspect-[9/16]">
            <Image
              src="/images/timing-pattern.png"
              alt="timing-pattern"
              fill={true}
              className="object-contain object-left"
            />
          </div>
          <div className="relative w-full md:max-w-[565px] mx-auto">
            <span className="text-[15px] font-openSans font-bold tracking-wide">
              Associated Mosque
            </span>
            <h2 className="font-bold text-4xl sm:text-6xl tracking-widest sm:leading-[140%]">
              Namaz Timings
            </h2>
            <div className="w-full md:max-w-[450px]">
              <ul className="text-lg lg:text-[22px] tracking-widest font-openSans">
                <li className="w-full flex justify-between items-center gap-4 py-4 border-b-2 border-white/70">
                  <p>Fajr 05:46</p>
                  <span>05:46</span>
                </li>
                <li className="w-full flex justify-between items-center gap-4 py-4 border-b-2 border-white/70">
                  <p>Sunrise 07:04</p>
                  <span>07:04</span>
                </li>
                <li className="w-full flex justify-between items-center gap-4 py-4 border-b-2 border-white/70">
                  <p>Dhuhr</p>
                  <span>12:30</span>
                </li>
                <li className="w-full flex justify-between items-center gap-4 py-4 border-b-2 border-white/70">
                  <p>Asr 15:29</p>
                  <span>15:29</span>
                </li>
                <li className="w-full flex justify-between items-center gap-4 py-4 border-b-2 border-white/70">
                  <p>Maghrib 17:51</p>
                  <span>17:51</span>
                </li>
                <li className="w-full flex justify-between items-center gap-4 py-4 border-b-2 border-white/70">
                  <p>Isha&apos;a	19:09</p>
                  <span>19:09</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-full aspect-video md:aspect-auto">
          <div className="absolute inset-0 bg-main-dark">
            <Image
              src="/images/timing.png"
              alt="timing-bg"
              fill={true}
              className="object-cover opacity-40"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timings