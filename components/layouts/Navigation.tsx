import Link from "next/link"

function Navigation() {
  return (
    <header className="text-center px-4">
      <Link href="/" className="inline-block text-4xl sm:text-[57px] my-4 sm:my-0">LOGO</Link>
      <nav className="w-full flex flex-wrap justify-center items-center gap-x-4 gap-y-2 uppercase text-sm md:text-lg md:mt-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/" className="hover:underline">About Us</Link>
        <Link href="/" className="hover:underline">Pillars of Islam</Link>
        <Link href="/" className="hover:underline">Gallery</Link>
        <Link href="/" className="hover:underline">Event & Blog</Link>
        <Link href="/" className="hover:underline">Contact</Link>
      </nav>
    </header>
  )
}

export default Navigation