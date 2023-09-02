import Image from "next/image"

function Contact() {
  return (
    <section id="contact" className="relative bg-main">
      <div className="absolute right-0 inset-y-0 w-[55%]">
        <Image
          src="/images/contact.png"
          alt="contact-bg"
          fill={true}
          className="object-cover object-right"
        />
      </div>
      <div className="absolute left-0 inset-y-14 aspect-[9/16] z-[1]">
        <Image
          src="/images/contact-pattern.png"
          alt="contact-pattern"
          fill={true}
          className="object-contain object-left"
        />
      </div>
      <div
        className="relative grid lg:grid-cols-2"
        style={{
          background: 'linear-gradient(90deg, #361515 50.65%, rgba(54, 21, 21, 0.94) 56.03%, rgba(54, 21, 21, 0.00) 95.34%)'
        }}
      >
        <div className="w-full px-10 py-20 lg:py-40 z-[2]">
          <div className="relative w-full max-w-[565px] mx-auto">
            <h2 className="font-black text-4xl sm:text-6xl xl:text-[80px] tracking-wider leading-[140%]">
              Contact Us
            </h2>
            <div className="w-full lg:max-w-[480px] mt-8">
              <form action="" className="font-openSans font-normal md:text-lg space-y-3 md:space-y-6">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border-2 border-main-light text-black rounded-lg focus:ring-main-light focus:outline-none block w-full py-2 md:py-3 px-4 md:px-6"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-50 border-2 border-main-light text-black rounded-lg focus:ring-main-light focus:outline-none block w-full py-2 md:py-3 px-4 md:px-6"
                  placeholder="Title/Subject"
                  required
                />
                <textarea
                  id="message"
                  className="bg-gray-50 border-2 border-main-light text-black rounded-lg focus:ring-main-light focus:outline-none block w-full py-2 md:py-3 px-4 md:px-6 resize-none h-[185px]"
                  placeholder="Write your message..."
                  required
                ></textarea>
                <button className="rounded-md md:rounded-xl bg-main-light py-2 md:py-3 px-10 md:px-14 md:text-lg hover:bg-opacity-80 transition active:scale-95">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact