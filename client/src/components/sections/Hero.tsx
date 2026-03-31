/*
 * Hero Section — Touché Beauty Salon
 * Full-viewport asymmetric layout: text left, salon photo right
 * Uses real salon interior photo from touchebeautysalon.be
 */

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

// Real photos from touchebeautysalon.be
const HERO_SALON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/hero_salon_8bcf4c6c.jpg";
const NAILS_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/touche_nails_hero_fcdf809e.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[oklch(0.15_0.02_20)]">
      {/* Background salon photo */}
      <div className="absolute inset-0">
        <img
          src={HERO_SALON}
          alt="Touché Beauty Salon interieur"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: dark left for text, lighter right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_20)/0.90] via-[oklch(0.12_0.02_20)/0.70] to-[oklch(0.12_0.02_20)/0.30]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_20)/0.5] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">


            {/* Eyebrow - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden sm:flex items-center gap-3 mb-5"
            >
              <div className="gold-line" />
              <span className="section-label text-[oklch(0.78_0.07_70)]">Beauty Salon · Herentals</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Jouw moment van{" "}
              <span className="italic text-[oklch(0.88_0.04_15)]">schoonheid,</span>
              <br />
              rust en perfectie.
            </motion.h1>



            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
            <a
              href="https://www.fresha.com/nl/a/touche-herentals-zandstraat-101-eakki2rj/booking?menu=true&share=true&pId=1051753&cartId=4445d76b-2c31-4eb2-b236-5dcff68d0a67"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <Sparkles size={15} />
              Boek je afspraak
            </a>
              <button
                onClick={() => scrollToSection("#diensten")}
                className="btn-outline-white"
              >
                Ontdek de behandelingen
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("#over")}
        >
          <span className="font-body text-xs text-white/50 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
