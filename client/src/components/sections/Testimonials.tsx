/**
 * Testimonials Section — Touché Beauty Salon
 * Premium review cards with star ratings
 * Warm blush background, elegant typography
 */

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Leen Smets",
    rating: 5,
    date: "3 weken geleden",
    text: "De gelnagels zijn perfect aangebracht. Echt prachtig! Ze blijven ook vier weken mooi zitten. Ik krijg veel complimenten! Zeker een aanrader!",
    treatment: "Gelnagels",
  },
  {
    name: "Zoe Van den Bulck",
    rating: 5,
    date: "Een maand geleden",
    text: "Super tevreden! De nagels zijn altijd prachtig gedaan en van topkwaliteit. Emily is ook ongelooflijk vriendelijk en zorgt ervoor dat je je meteen op je gemak voelt. De lash lift was ook erg mooi en professioneel uitgevoerd. Zeker een aanrader!",
    treatment: "Gelnagels & Lash lift",
  },
  {
    name: "emma mortelmans",
    rating: 5,
    date: "Een maand geleden",
    text: "Ik kom hier graag! De service is altijd ongelooflijk aardig en de behandelingen zijn echt geweldig. Het is altijd een heerlijk moment voor mezelf. Zeker een aanrader!",
    treatment: "Beauty behandelingen",
  },
  {
    name: "Google Reviews",
    rating: 5,
    date: "5.0 / 5 (11 reviews)",
    text: "Alle klanten geven Touché Beauty Salon 5 sterren en prijzen de professionele service, kwaliteit en warme sfeer van Emmely.",
    treatment: "Alle behandelingen",
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

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[oklch(0.96_0.01_55)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Klantenervaringen</span>
              <div className="gold-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.03_20)] mb-4">
              Wat onze klanten{" "}
              <span className="italic text-[oklch(0.62_0.09_15)]">zeggen</span>
            </h2>
            {/* Rating summary */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[oklch(0.78_0.07_70)] text-lg">★</span>
                ))}
              </div>
              <span className="font-display text-xl font-bold text-[oklch(0.25_0.03_20)]">5.0</span>
              <span className="font-body text-sm text-[oklch(0.55_0.04_30)]">gemiddelde beoordeling (11 reviews)</span>
            </div>
          </div>
        </FadeUp>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <FadeUp key={review.name} delay={i * 0.08}>
              <div className="group bg-white p-6 rounded-sm border border-[oklch(0.90_0.02_50)] hover:shadow-lg hover:border-[oklch(0.80_0.05_15)] transition-all duration-300 h-full flex flex-col">
                {/* Quote icon */}
                <div className="w-8 h-8 rounded-full bg-[oklch(0.93_0.03_15)] flex items-center justify-center mb-4">
                  <Quote size={14} className="text-[oklch(0.62_0.09_15)]" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-[oklch(0.78_0.07_70)] text-sm">★</span>
                  ))}
                </div>

                {/* Review text */}
                <p className="font-body text-sm text-[oklch(0.45_0.04_25)] leading-relaxed mb-4 flex-grow">
                  "{review.text}"
                </p>

                {/* Author info */}
                <div className="border-t border-[oklch(0.90_0.02_50)] pt-3">
                  <p className="font-display text-sm font-semibold text-[oklch(0.25_0.03_20)]">
                    {review.name}
                  </p>
                  <p className="font-body text-xs text-[oklch(0.55_0.04_30)]">
                    {review.treatment} • {review.date}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
