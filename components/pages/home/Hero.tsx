import Navigation from "@/components/layouts/Navigation"
import Image from "next/image"
import Link from "next/link"

function Hero() {
  return (
    <div id="home" className="relative overflow-x-hidden">
      <div className="absolute inset-0 bg-main-dark">
        <Image
          src="/images/hero.png"
          alt="hero-bg"
          fill={true}
          className="object-cover opacity-40"
        />
      </div>
      <div className="absolute w-full max-w-[1078px] aspect-video left-[50%] -translate-x-[50%]">
        <Image
          src="/images/header-pattern.png"
          alt="header-pattern"
          fill={true}
          className="object-contain object-top"
        />
      </div>
      <div className="relative py-2 md:py-12 container mx-auto  min-h-screen">
        <Navigation />
        <section id="hero" className="text-center max-w-[1037px] mx-auto mt-20 sm:mt-28 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-black tracking-[2.4px] leading-[110%]">
            “AND HE HAS MADE ME BLESSED WHEREEVER I AM”
          </h1>
          <h6 className="font-openSans text-lg md:text-[22px] my-10 font-normal tracking-wider">
            QURAN 19:31
          </h6>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 font-openSans font-normal mb-20">
            <Link href="/" className="w-full sm:w-auto rounded-md lg:rounded-xl bg-main-light py-3 px-16 md:text-lg hover:bg-opacity-80 transition active:scale-95">
              Login
            </Link>
            <Link href="/" className="w-full sm:w-auto rounded-md lg:rounded-xl bg-main-light py-3 px-16 md:text-lg hover:bg-opacity-80 transition active:scale-95">
              Register
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero