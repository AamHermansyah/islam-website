import Image from "next/image"
import Link from "next/link"

function History() {
  return (
    <section id="history" className="relative">
      <div className="absolute right-0 inset-y-40 sm:inset-y-14 aspect-[9/16] z-10">
        <Image
          src="/images/history-pattern.png"
          alt="history-pattern"
          fill={true}
          className="object-contain object-right"
        />
      </div>
      <div className="w-full flex">
        <div className="hidden lg:block basis-[45%]" />
        <div className="lg:basis-[55%] py-20 sm:py-32 z-10 px-10">
          <span className="text-[15px] font-openSans font-bold tracking-wide">
            Few Words About
          </span>
          <h2 className="font-bold text-4xl sm:text-6xl tracking-widest sm:leading-[140%]">
            History Of Center
          </h2>
          <div className="w-full max-w-[580px] space-y-6 mt-4 sm:mt-8 sm:text-lg">
            <p className="font-openSans font-normal tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <h6 className="uppercase">The Mosque is the #1 Islamic Center in the Country!</h6>
            <div className="grid sm:grid-cols-2 gap-2 sm:gap-8">
              <ul className="sm:pl-4 list-inside list-disc font-openSans font-normal space-y-2">
                <li>Astonishing Facilities</li>
                <li>Leads Charity Events</li>
                <li>Feeding HungryPeople </li>
              </ul>
              <ul className="sm:pl-4 list-inside list-disc font-openSans font-normal space-y-2">
                <li>Astonishing Facilities</li>
                <li>Leads Charity Events</li>
                <li>Feeding HungryPeople </li>
              </ul>
              <div className="mt-8 sm:mt-4 font-openSans font-normal">
                <Link href="/" className="w-max rounded-md lg:rounded-xl bg-main-light py-3 px-10 lg:px-16 text-base md:text-lg hover:bg-opacity-80 transition active:scale-95">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block absolute inset-y-0 aspect-square opacity-50 lg:opacity-100">
        <Image
          src="/images/history.png"
          alt="history-bg"
          fill={true}
          className="object-cover object-left"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-[#361515] to-transparent from-55%" />
    </section>
  )
}

export default History