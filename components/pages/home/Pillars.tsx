import Image from "next/image"

function Pillars() {
  return (
    <section id="pillars" className="relative py-14 px-4 container mx-auto z-[1]">
      <div className="text-center">
        <span className="text-[15px] font-openSans font-bold tracking-wide text-main-light">
          Associated Mosque
        </span>
        <h2 className="font-black text-4xl sm:text-6xl tracking-widest sm:leading-[140%] text-main">
          Pillars Of Islam
        </h2>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-16">
        <div className="w-[162px]">
          <div className="relative w-full aspect-square">
            <Image
              src="/icons/shahadah.svg"
              alt="shahadah-icon"
              fill={true}
              className="object-contain"
            />
          </div>
          <h4 className="text-black text-lg text-center mt-14 uppercase">
            Shahadah
            <br />
            (Faith)
          </h4>
        </div>
        <div className="w-[162px]">
          <div className="relative w-full aspect-square">
            <Image
              src="/icons/pray.svg"
              alt="pray-icon"
              fill={true}
              className="object-contain"
            />
          </div>
          <h4 className="text-black text-lg text-center mt-14 uppercase">
            Salah
            <br />
            (Prayer)
          </h4>
        </div>
        <div className="w-[162px]">
          <div className="relative w-full aspect-square">
            <Image
              src="/icons/fast.svg"
              alt="fast-icon"
              fill={true}
              className="object-contain"
            />
          </div>
          <h4 className="text-black text-lg text-center mt-14 uppercase">
            Sawm
            <br />
            (Fasting)
          </h4>
        </div>
        <div className="w-[162px]">
          <div className="relative w-full aspect-square">
            <Image
              src="/icons/zakat.svg"
              alt="zakat-icon"
              fill={true}
              className="object-contain"
            />
          </div>
          <h4 className="text-black text-lg text-center mt-14 uppercase">
            Zakat
            <br />
            (Almsgiving)
          </h4>
        </div>
        <div className="w-[162px]">
          <div className="relative w-full aspect-square">
            <Image
              src="/icons/hajj.svg"
              alt="hajj-icon"
              fill={true}
              className="object-contain"
            />
          </div>
          <h4 className="text-black text-lg text-center mt-14 uppercase">
            Pilgrimage
            <br />
            (Pilgrimage)
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Pillars