import Footer from "@/components/layouts/Footer";
import Contact from "@/components/pages/home/Contact";
import EventAndBlog from "@/components/pages/home/EventAndBlog";
import Gallery from "@/components/pages/home/Gallery";
import Hero from "@/components/pages/home/Hero";
import History from "@/components/pages/home/History";
import Pillars from "@/components/pages/home/Pillars";
import Timings from "@/components/pages/home/Timings";

export default function Home() {
  return (
    <>
      <Hero />
      <Timings />
      <History />
      <div className="bg-white py-10">
        <Pillars />
        <Gallery />
        <EventAndBlog />
      </div>
      <Contact />
      <Footer />
    </>
  )
}
