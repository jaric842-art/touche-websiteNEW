/*
 * Gallery Section — Touché Beauty Salon
 * Masonry-style grid with filter tabs
 * Uses real photos from touchebeautysalon.be Mijn Werk page
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

// Real photos from touchebeautysalon.be Mijn Werk page
const GALLERY_NAIL_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/gallery_nail_1_94129a5b.jpeg";
const GALLERY_NAIL_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/gallery_nail_2_aaf75f9b.jpeg";
const GALLERY_NAIL_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/gallery_nail_3_44cf4422.jpeg";
const GALLERY_NAIL_4 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/gallery_nail_4_bce82649.jpeg";
const GALLERY_NAIL_5 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/gallery_nail_5_e18d6bd9.jpeg";
const GALLERY_SKIN_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/gallery_skin_1_472c36b6.jpeg";

type GalleryItem = { id: number; src: string; alt: string; category: string };

const galleryItems: GalleryItem[] = [
  { id: 1, src: GALLERY_NAIL_1, alt: "Nude gelnagels met accent", category: "Gelnagels" },
  { id: 2, src: GALLERY_NAIL_2, alt: "Burgundy nail art", category: "Nail Art" },
  { id: 3, src: GALLERY_NAIL_3, alt: "Natuurlijke gelnagels", category: "Gelnagels" },
  { id: 4, src: GALLERY_NAIL_4, alt: "Roze gelnagels met glitter", category: "Gelnagels" },
  { id: 5, src: GALLERY_NAIL_5, alt: "Nude met goud accenten", category: "Nail Art" },
  { id: 6, src: GALLERY_SKIN_1, alt: "Huidverzorging resultaat", category: "Gelaatsverzorging" },
];

const filters = ["Alles", "Gelnagels", "Nail Art", "Gelaatsverzorging"];

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

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Alles");

  const filtered = activeFilter === "Alles"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="galerij" className="py-24 lg:py-32 bg-[oklch(0.96_0.01_55)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Mijn Werk</span>
              <div className="gold-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.03_20)] mb-4">
              Resultaten die <span className="italic text-[oklch(0.62_0.09_15)]">voor zichzelf spreken</span>
            </h2>
            <p className="font-body text-base text-[oklch(0.45_0.04_25)] max-w-lg mx-auto">
              Een selectie van recente behandelingen — elk met dezelfde toewijding aan kwaliteit en detail.
            </p>
          </div>
        </FadeUp>

        {/* Filter Tabs */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-10 px-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-body text-xs sm:text-sm font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-sm border transition-all duration-200 whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-[oklch(0.62_0.09_15)] text-white border-[oklch(0.62_0.09_15)]"
                    : "bg-white text-[oklch(0.45_0.04_25)] border-[oklch(0.90_0.02_50)] hover:border-[oklch(0.72_0.08_15)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group relative overflow-hidden rounded-sm break-inside-avoid shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ display: 'block' }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[oklch(0.12_0.02_20)/0.0] group-hover:bg-[oklch(0.12_0.02_20)/0.35] transition-all duration-300 flex items-end">
                  <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-body text-xs text-white/90 bg-[oklch(0.62_0.09_15)/0.85] px-2.5 py-1 rounded-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Instagram CTA */}
        <FadeUp delay={0.2}>
          <div className="text-center mt-12">
            <p className="font-body text-sm text-[oklch(0.55_0.04_30)] mb-4">
              Volg Touché op Instagram voor dagelijkse inspiratie
            </p>
            <a
              href="https://www.instagram.com/touche_beautysalon?igsh=bHdrYWE5cWtrbjhr&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @touchebeautysalon
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
