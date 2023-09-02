'use client'

import Image from "next/image"
import Link from "next/link"
import Masonry from "react-masonry-css"

const breakpoints = {
  default: 3,
  1024: 3,
  850: 1,
}

function Gallery() {
  return (
    <section id="gallery" className="relative">
      <div className="absolute inset-0 -translate-y-[50%]">
        <Image
          src="/images/gallery-pattern-1.png"
          alt="gallery-pattern-1"
          fill={true}
          className="object-contain object-right"
        />
      </div>
      <div className="absolute inset-0 translate-y-[35%]">
        <Image
          src="/images/gallery-pattern-2.png"
          alt="gallery-pattern-2"
          fill={true}
          className="object-contain object-left"
        />
      </div>
      <div className="relative py-14 px-4 lg:container mx-auto md:text-center">
        <div className="text-center">
          <span className="text-[15px] font-openSans font-bold tracking-wide text-main-light">
            Associated Mosque
          </span>
          <h2 className="font-black text-4xl sm:text-6xl tracking-widest sm:leading-[140%] text-main">
            Our Gallery
          </h2>
          <p className="max-w-[893px] mx-auto font-openSans font-normal tracking-wide sm:text-lg mt-4 sm:mt-10 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-4 lg:gap-6 mt-10"
        >
          <div className="relative w-full h-[409px] mb-4 lg:mb-6">
            <Image
              src="/images/gallery-1.png"
              alt="gallery-1"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[206px] mb-4 lg:mb-6">
            <Image
              src="/images/gallery-2.png"
              alt="gallery-2"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[307px] mb-4 lg:mb-6">
            <Image
              src="/images/gallery-3.png"
              alt="gallery-3"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[206px] mb-4 lg:mb-6">
            <Image
              src="/images/gallery-4.png"
              alt="gallery-4"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[409px] mb-4 lg:mb-6">
            <Image
              src="/images/gallery-5.png"
              alt="gallery-5"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[307px] mb-4 lg:mb-6">
            <Image
              src="/images/gallery-6.png"
              alt="gallery-6"
              fill={true}
              className="object-cover"
            />
          </div>
        </Masonry>
        <div className="mt-10 lg:mt-20 font-openSans font-normal text-center">
          <Link href="/" className="w-max rounded-md lg:rounded-xl bg-main-light py-3 px-10 md:text-lg hover:bg-opacity-80 transition active:scale-95">
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery