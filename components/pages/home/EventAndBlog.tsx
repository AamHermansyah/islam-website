import { FaLocationPin, FaCalendarDays } from 'react-icons/fa6'
import { FaUserAlt } from 'react-icons/fa'
import { BiSolidTimeFive } from 'react-icons/bi'
import Image from 'next/image'

function EventAndBlog() {
  return (
    <section id="events" className="relative py-14 px-4 lg:container mx-auto md:text-center">
      <div className="text-center text-black font-openSans font-bold">
        <span className="text-[15px] tracking-wide">
          Events & Blog
        </span>
        <h2 className="font-black text-4xl sm:text-6xl tracking-widest sm:leading-[140%] text-main">
          Our Events & Blog
        </h2>
      </div>
      <div className="w-full max-w-[1210px] mx-auto mt-10">
        <div className="w-full flex flex-col md:flex-row items-start gap-6">
          <div className="md:basis-[50%] lg:basis-[60%]" style={{ boxShadow: '3px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="relative w-full aspect-[16/6]">
              <Image
                src="/images/blog-1.png"
                alt="blog-1"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="w-full text-left text-black p-8 lg:p-14">
              <h4 className="text-[22px] tracking-wider text-main">
                Is Islam Old Philosophy?
              </h4>
              <div className="w-full flex items-center gap-10 font-openSans font-normal my-2 tracking-wider">
                <span className="flex items-center gap-2">
                  <FaCalendarDays className="text-main-light" />
                  Jan 6, 2022
                </span>
                <span className="flex items-center gap-2">
                  <FaUserAlt className="text-main-light" />
                  Imam Ullah
                </span>
              </div>
              <p className="font-openSans font-normal my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
              <button className="font-openSans font-normal tracking-wider my-1 text-main-light">
                View Detail
              </button>
            </div>
          </div>
          <div className="w-full md:basis-[50%] lg:basis-[40%] bg-main px-6 py-[43px] space-y-10">
            <div className="w-full flex gap-6 pb-10 border-b-2 border-white/70">
              <div className="uppercase basis-[55px] sm:basis-[95px]">
                <span className="block text-4xl sm:text-6xl">15</span>
                <span className="block text-xl sm:text-[28px]">Jan</span>
              </div>
              <div className="w-full text-left">
                <h4 className="text-[22px] tracking-wider">
                  Is Islam Old Philosophy?
                </h4>
                <div className="w-full flex flex-col sm:flex-row gap-1 justify-between text-[15px] font-openSans font-normal my-2 tracking-wider">
                  <span className="flex items-center gap-2">
                    <FaLocationPin />
                    Park Lane, London
                  </span>
                  <span className="flex items-center gap-2">
                    <BiSolidTimeFive fontSize={18} />
                    Imam Ullah
                  </span>
                </div>
                <button className="font-openSans font-normal text-[15px] tracking-wider my-1">
                  View Detail
                </button>
              </div>
            </div>
            <div className="w-full flex gap-6 pb-10 border-b-2 border-white/70">
              <div className="uppercase basis-[55px] sm:basis-[95px]">
                <span className="block text-4xl sm:text-6xl">22</span>
                <span className="block text-xl sm:text-[28px]">Jan</span>
              </div>
              <div className="w-full text-left">
                <h4 className="text-[22px] tracking-wider">
                  Is Islam Old Philosophy?
                </h4>
                <div className="w-full flex flex-col sm:flex-row gap-1 justify-between text-[15px] font-openSans font-normal my-2 tracking-wider">
                  <span className="flex items-center gap-2">
                    <FaLocationPin />
                    Park Lane, London
                  </span>
                  <span className="flex items-center gap-2">
                    <BiSolidTimeFive fontSize={18} />
                    Imam Ullah
                  </span>
                </div>
                <button className="font-openSans font-normal text-[15px] tracking-wider my-1">
                  View Detail
                </button>
              </div>
            </div>
            <div className="w-full flex gap-6">
              <div className="uppercase basis-[55px] sm:basis-[95px]">
                <span className="block text-4xl sm:text-6xl">26</span>
                <span className="block text-xl sm:text-[28px]">Jan</span>
              </div>
              <div className="w-full text-left">
                <h4 className="text-[22px] tracking-wider">
                  Is Islam Old Philosophy?
                </h4>
                <div className="w-full flex flex-col sm:flex-row gap-1 justify-between text-[15px] font-openSans font-normal my-2 tracking-wider">
                  <span className="flex items-center gap-2">
                    <FaLocationPin />
                    Park Lane, London
                  </span>
                  <span className="flex items-center gap-2">
                    <BiSolidTimeFive fontSize={18} />
                    Imam Ullah
                  </span>
                </div>
                <button className="font-openSans font-normal text-[15px] tracking-wider my-1">
                  View Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventAndBlog