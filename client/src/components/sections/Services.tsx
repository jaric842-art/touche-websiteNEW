/*
 * Services Section — Touché Beauty Salon
 * 4-column grid of elegant service cards with hover reveal
 * Uses real photos from touchebeautysalon.be + generated images
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

// Real photos from touchebeautysalon.be
const NAIL_PINK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/nail_pink_glitter_9980189c.jpg";
const NAIL_DARK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/nail_dark_eb241ee7.jpg";
const NAIL_ART_REAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/nail_art_detail_7428ce9f.jpg";
const FACIAL_REAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/facial_b9a00f6d.jpg";
const WAXING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/waxing_ae9d11d5.jpg";
const EMMELY_WORK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/emmely_work_576c636e.jpg";
const LASH_LIFT_REAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/lash_lift_1c08b32a.webp";
// Generated images
const BIAB_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/touche_biab_nails_50d8c3cd.jpg";
const NAIL_ART_GEN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/touche_nail_art_53d1c169.jpg";

const services = [
  {
    id: "gelnagels",
    title: "Gelnagels",
    subtitle: "Vanaf €35",
    description: "Prachtige, duurzame gelnagels op maat. Of je nu kiest voor een subtiele nude of een opvallende kleur — het resultaat is altijd verzorgd en stijlvol.",
    image: NAIL_PINK,
    tag: "Bestseller",
  },
  {
    id: "biab",
    title: "BIAB",
    subtitle: "Vanaf €40",
    description: "Builder In A Bottle — de perfecte behandeling voor sterke, gezonde nagels met een prachtige finish. Ideaal voor wie zijn eigen nagels wil versterken.",
    image: BIAB_IMG,
    tag: "Populair",
  },
  {
    id: "nail-art",
    title: "Nail Art",
    subtitle: "Vanaf +€5",
    description: "Van subtiele accenten tot uitgebreide kunstwerken — nail art is de ultieme manier om je persoonlijkheid te uiten via je nagels.",
    image: NAIL_ART_GEN,
    tag: "Creatief",
  },
  {
    id: "pedicure",
    title: "Pedicure",
    subtitle: "Vanaf €35",
    description: "Een grondige en verzorgende pedicurebehandeling voor zachte, verwende voeten. Met of zonder gellak — jij kiest.",
    image: NAIL_DARK,
    tag: null,
  },
  {
    id: "gelaatsverzorging",
    title: "Gelaatsverzorging",
    subtitle: "Vanaf €45",
    description: "Een diepgaande gelaatsbehandeling die je huid reinigt, verzorgt en laat stralen. Inclusief optionele wenkbrauwbehandeling.",
    image: FACIAL_REAL,
    tag: null,
  },
  {
    id: "lash-lift",
    title: "Lash Lift",
    subtitle: "€50",
    description: "Laat je wimpers opkrullen en kleuren voor een open, uitgerust blik zonder mascara. Het resultaat houdt weken aan.",
    image: LASH_LIFT_REAL,
    tag: null,
  },
  {
    id: "waxing",
    title: "Waxing",
    subtitle: "Op aanvraag",
    description: "Professionele waxingbehandeling voor een gladde, verzorgde huid. Snel, effectief en met oog voor jouw comfort.",
    image: WAXING_IMG,
    tag: null,
  },
  {
    id: "verwijderen",
    title: "Verwijderen",
    subtitle: "Vanaf €15",
    description: "Veilig en zorgvuldig verwijderen van gellak of gelnagels, zonder schade aan je eigen nagels.",
    image: NAIL_ART_REAL,
    tag: null,
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

export default function Services() {
  const handleBooking = () => {
    window.open(
      "https://www.fresha.com/nl/a/touche-herentals-zandstraat-101-eakki2rj/booking?menu=true&share=true&pId=1051753&cartId=4445d76b-2c31-4eb2-b236-5dcff68d0a67",
      "_blank"
    );
  };

  return (
    <section id="diensten" className="py-24 lg:py-32 bg-[oklch(0.96_0.01_55)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Behandelingen</span>
              <div className="gold-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.03_20)] mb-4">
              Onze <span className="italic text-[oklch(0.62_0.09_15)]">diensten</span>
            </h2>
            <p className="font-body text-base text-[oklch(0.45_0.04_25)] max-w-xl mx-auto leading-relaxed">
              Van perfecte nagels tot ontspannende beauty-behandelingen — bij Touché vind je alles wat je nodig hebt om je op je best te voelen.
            </p>
          </div>
        </FadeUp>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <FadeUp key={service.id} delay={i * 0.07}>
              <div className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-[oklch(0.90_0.02_50)] hover:border-[oklch(0.72_0.08_15)/0.3]">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_20)/0.35] to-transparent" />
                  {service.tag && (
                    <span className="absolute top-3 left-3 bg-[oklch(0.62_0.09_15)] text-white font-body text-xs font-bold px-2.5 py-1 rounded-sm tracking-wide">
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold text-[oklch(0.25_0.03_20)]">{service.title}</h3>
                    <span className="font-body text-xs font-bold text-[oklch(0.62_0.09_15)] whitespace-nowrap ml-2 mt-0.5">{service.subtitle}</span>
                  </div>
                  <p className="font-body text-sm text-[oklch(0.50_0.04_25)] leading-relaxed mb-4">{service.description}</p>
                  <button
                    onClick={handleBooking}
                    className="flex items-center gap-1.5 font-body text-xs font-bold text-[oklch(0.62_0.09_15)] hover:text-[oklch(0.45_0.09_15)] transition-colors group/btn"
                  >
                    Boek nu
                    <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.2}>
          <div className="text-center mt-12">
            <button onClick={handleBooking} className="btn-primary">
              Bekijk alle prijzen & boek
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
