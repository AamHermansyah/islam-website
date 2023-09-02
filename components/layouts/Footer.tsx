'use client'

import Image from 'next/image'
import CustomCheckbox from '../core/form/CustomCheckbox'
import Link from 'next/link'
import { FaLocationPin } from 'react-icons/fa6'
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <section id="footer" className="relative bg-main">
      <div className="absolute inset-0">
        <Image
          src="/images/footer.png"
          alt="footer-bg"
          fill={true}
          className="object-cover object-right"
        />
      </div>
      <div
        className="relative pt-20"
        style={{ background: 'rgba(120, 45, 45, 0.80)' }}
      >
        <h2 className="font-bold text-4xl sm:text-6xl tracking-widest text-center">
          News Letter
        </h2>
        <p className="font-openSans font-normal text-center text-lg">
          Subscribe to our mailing list.
        </p>
        <form className="max-w-[666px] mx-auto font-openSans font-normal mt-10 px-4">
          <div className="bg-white rounded-xl flex justify-between overflow-hidden">
            <input
              type="email"
              className="text-black flex-auto py-3 sm:py-4 px-6 focus:outline-none"
              required
              placeholder="Your Email"
            />
            <button className="rounded-xl bg-main-light px-4 sm:px-10 text-sm md:text-lg hover:bg-opacity-80 transition">
              Sign Up
            </button>
          </div>
          <CustomCheckbox />
        </form>
        <footer className="mt-10 px-4 lg:container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:justify-items-center">
            <div>
              <h4 className="text-lg sm:text-[28px] tracking-widest uppercase">
                Contact Us
              </h4>
              <div className="w-full flex flex-col gap-2 text-sm sm:text-lg mt-4 font-openSans font-normal max-w-[265px]">
                <span className="flex items-start gap-2">
                  <FaLocationPin className="mt-1.5 text-xl w-6" />
                  12345 ABCDE Ab.#1234 Place, FL 12345
                </span>
                <span className="flex items-start gap-2">
                  <FaPhoneAlt className="mt-1.5" />
                  123-456-9870
                </span>
                <span className="flex items-start gap-2">
                  <MdEmail className="mt-1.5 text-xl" />
                  info@mosqueonline
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-lg sm:text-[28px] tracking-widest uppercase">
                Quick Links
              </h4>
              <nav className="w-full flex flex-col gap-2 text-sm sm:text-lg mt-4 font-openSans font-normal">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/" className="hover:underline">About Us</Link>
                <Link href="/" className="hover:underline">Pillars of Islam</Link>
                <Link href="/" className="hover:underline">Gallery</Link>
                <Link href="/" className="hover:underline">Event & Blog</Link>
                <Link href="/" className="hover:underline">Contact</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-lg sm:text-[28px] tracking-widest uppercase">
                Quick Links
              </h4>
              <nav className="w-full flex flex-col gap-2 text-sm sm:text-lg mt-4 font-openSans font-normal">
                <Link href="/" className="hover:underline">Namaz Timings</Link>
                <Link href="/" className="hover:underline">FAQ</Link>
              </nav>
            </div>
            <div>
              <h4 className="text-lg sm:text-[28px] tracking-widest uppercase">
                Follow Us
              </h4>
              <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-6">
                <Link href="/" className="sm:text-2xl">
                  <FaFacebookF />
                </Link>
                <Link href="/" className="sm:text-2xl">
                  <FaTwitter />
                </Link>
                <Link href="/" className="sm:text-2xl">
                  <FaInstagram />
                </Link>
                <Link href="/" className="sm:text-2xl">
                  <FaYoutube />
                </Link>
                <Link href="/" className="sm:text-2xl">
                  <FaLinkedinIn />
                </Link>
                <Link href="/" className="text-xl sm:text-3xl">
                  <FaGooglePlusG />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20 font-openSans font-normal text-center text-sm lg:text-lg">
            <span className="block py-6 lg:py-10 border-t-2 border-white/70">
              Copyright © 2022 mosques.online. <br className="block sm:hidden" />All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer