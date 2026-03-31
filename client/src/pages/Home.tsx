/*
 * Home Page — Touché Beauty Salon
 * Assembles all sections in order
 * Design: Soft Modernism / Contemporary Minimalist Luxury
 */

import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/WhyUs";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.98_0.008_80)]">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}
