/*
 * Pricing Section — Touché Beauty Salon
 * Elegant tabbed price tables with category navigation
 * All prices from the brief
 */

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

type PriceItem = { name: string; price: string; note?: string };
type PriceCategory = { id: string; label: string; items: PriceItem[] };

const categories: PriceCategory[] = [
  {
    id: "gelnagels",
    label: "Gelnagels",
    items: [
      { name: "Gellak", price: "€35" },
      { name: "Eigen nagels", price: "€45" },
      { name: "Met verlenging", price: "€65" },
      { name: "Bijwerking 3 weken", price: "€45" },
      { name: "Bijwerking 4 weken", price: "€50" },
      { name: "Bijwerking 5 weken", price: "€55" },
      { name: "Herstelling", price: "+€2", note: "per nagel" },
    ],
  },
  {
    id: "biab",
    label: "BIAB",
    items: [
      { name: "BIAB Naturel", price: "€40" },
      { name: "BIAB + Kleur", price: "€45" },
      { name: "BIAB + French", price: "€50" },
    ],
  },
  {
    id: "pedicure",
    label: "Pedicure",
    items: [
      { name: "Pedicure", price: "€35" },
      { name: "Pedicure met gellak", price: "€50" },
      { name: "Gellak tenen", price: "€25" },
    ],
  },
  {
    id: "gelaat",
    label: "Gelaatsverzorging",
    items: [
      { name: "Inclusief wenkbrauwen", price: "€50" },
      { name: "Zonder wenkbrauwen", price: "€45" },
    ],
  },
  {
    id: "extras",
    label: "Extra's",
    items: [
      { name: "French", price: "+€5" },
      { name: "Nail art simple", price: "+€5" },
      { name: "Nail art normal", price: "+€10" },
      { name: "Nail art extreme", price: "Op aanvraag" },
    ],
  },
  {
    id: "overige",
    label: "Overige",
    items: [
      { name: "Lash lift + kleuren", price: "€50" },
      { name: "Kleuren wenkbrauwen", price: "€18" },
      { name: "Verwijderen gellak", price: "€15" },
      { name: "Verwijderen gelnagels", price: "€20" },
    ],
  },
];

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

export default function Pricing() {
  const [active, setActive] = useState("gelnagels");
  const activeCategory = categories.find((c) => c.id === active)!;

  const scrollToBooking = () => {
    const el = document.querySelector("#boeken");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="prijzen" className="py-24 lg:py-32 bg-[oklch(0.98_0.008_80)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Prijslijst</span>
              <div className="gold-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.03_20)] mb-4">
              Transparante <span className="italic text-[oklch(0.62_0.09_15)]">prijzen</span>
            </h2>
            <p className="font-body text-base text-[oklch(0.45_0.04_25)] max-w-lg mx-auto">
              Eerlijke prijzen voor topkwaliteit behandelingen. Geen verrassingen — enkel een verwenmoment.
            </p>
          </div>
        </FadeUp>

        {/* Category Tabs */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-10 px-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`font-body text-xs sm:text-sm font-500 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-sm border transition-all duration-200 whitespace-nowrap ${
                  active === cat.id
                    ? "bg-[oklch(0.62_0.09_15)] text-white border-[oklch(0.62_0.09_15)] shadow-md"
                    : "bg-white text-[oklch(0.45_0.04_25)] border-[oklch(0.90_0.02_50)] hover:border-[oklch(0.72_0.08_15)] hover:text-[oklch(0.62_0.09_15)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Price Table */}
        <FadeUp delay={0.15}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-sm border border-[oklch(0.90_0.02_50)] shadow-sm overflow-hidden"
          >
            {/* Table header */}
            <div className="bg-[oklch(0.96_0.01_55)] px-8 py-5 border-b border-[oklch(0.90_0.02_50)]">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-[oklch(0.62_0.09_15)] rounded-full" />
                <h3 className="font-display text-xl font-semibold text-[oklch(0.25_0.03_20)]">
                  {activeCategory.label}
                </h3>
              </div>
            </div>

            {/* Items */}
            <div className="divide-y divide-[oklch(0.93_0.01_60)]">
              {activeCategory.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between px-8 py-4 hover:bg-[oklch(0.98_0.005_60)] transition-colors"
                >
                  <div>
                    <span className="font-body text-base text-[oklch(0.30_0.03_20)]">{item.name}</span>
                    {item.note && (
                      <span className="font-body text-xs text-[oklch(0.60_0.04_30)] ml-2">({item.note})</span>
                    )}
                  </div>
                  <span
                    className={`font-display text-base font-semibold ${
                      item.price === "Op aanvraag"
                        ? "text-[oklch(0.60_0.04_30)] italic text-sm"
                        : "text-[oklch(0.62_0.09_15)]"
                    }`}
                  >
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Footer note */}
            <div className="px-8 py-4 bg-[oklch(0.97_0.008_70)] border-t border-[oklch(0.90_0.02_50)]">
              <p className="font-body text-xs text-[oklch(0.60_0.04_30)] italic">
                * Alle prijzen zijn inclusief BTW. Bij twijfel over de juiste behandeling, neem gerust contact op.
              </p>
            </div>
          </motion.div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.25}>
          <div className="text-center mt-10">
            <button onClick={scrollToBooking} className="btn-primary">
              Boek je behandeling
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
