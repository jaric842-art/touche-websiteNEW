/*
 * Booking Section — Touché Beauty Salon
 * Luxurious full-width CTA with generated salon background photo
 * Dark overlay for text contrast
 */

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Sparkles, Phone, Mail } from "lucide-react";

// Generated hero background
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/touche_hero_bg_4546e124.jpg";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Booking() {
  return (
    <section id="boeken" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Touché salon sfeer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.15_0.03_20)/0.82]" />
        <div className="absolute inset-0 bg-[oklch(0.62_0.09_15)/0.10]" />
      </div>

      {/* Decorative gold corners */}
      <div className="absolute top-12 left-12 w-16 h-16 border-l border-t border-[oklch(0.78_0.07_70)/0.4]" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-r border-b border-[oklch(0.78_0.07_70)/0.4]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <FadeUp>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="gold-line" />
            <span className="section-label text-[oklch(0.78_0.07_70)]">Maak een afspraak</span>
            <div className="gold-line" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Gun jezelf een moment van{" "}
            <span className="italic text-[oklch(0.88_0.04_15)]">pure verzorging.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="font-body text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Boek vandaag nog je behandeling bij Touché en ontdek het verschil van echte persoonlijke aandacht, topkwaliteit en een warme sfeer.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://www.fresha.com/nl/a/touche-herentals-zandstraat-101-eakki2rj/booking?menu=true&share=true&pId=1051753&cartId=4445d76b-2c31-4eb2-b236-5dcff68d0a67"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 justify-center text-base py-4 px-8"
            >
              <Sparkles size={16} />
              Maak je afspraak
            </a>
            <a
              href="tel:0474381712"
              className="btn-outline-white flex items-center gap-2 justify-center text-base py-4 px-8"
            >
              <Phone size={16} />
              0474 38 17 12
            </a>
          </div>
        </FadeUp>

        {/* Contact quick links */}
        <FadeUp delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/50">
            <a href="tel:0474381712" className="flex items-center gap-2 hover:text-white/80 transition-colors font-body text-sm">
              <Phone size={14} />
              0474 38 17 12
            </a>
            <span className="text-white/20">·</span>
            <a href="mailto:Emmely.custers@outlook.be" className="flex items-center gap-2 hover:text-white/80 transition-colors font-body text-sm">
              <Mail size={14} />
              Emmely.custers@outlook.be
            </a>
            <span className="text-white/20">·</span>
            <span className="font-body text-sm">Zandstraat 101, Herentals</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
