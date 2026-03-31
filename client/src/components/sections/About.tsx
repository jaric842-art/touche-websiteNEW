/*
 * About Section — Touché Beauty Salon
 * Asymmetric layout: photo left, story right
 * Uses Emmely's actual portrait from touchebeautysalon.be
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Smile, Star } from "lucide-react";

// Real photos from touchebeautysalon.be
const EMMELY_PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/emmely_portrait_2246a2bd.jpg";
const EMMELY_WORKING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/emmely_work_576c636e.jpg";

const values = [
  { icon: Heart, label: "Passie voor beauty", desc: "Schoonheid is geen werk — het is een roeping." },
  { icon: Award, label: "Topkwaliteit producten", desc: "Alleen de beste merken voor duurzame resultaten." },
  { icon: Smile, label: "Warme ontvangst", desc: "Een kop koffie en een gezellige babbel horen erbij." },
  { icon: Star, label: "Oog voor detail", desc: "Elk detail telt — van de vorm tot de afwerking." },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

export default function About() {
  return (
    <section id="over" className="py-24 lg:py-32 bg-[oklch(0.98_0.008_80)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Photos */}
          <FadeUp>
            <div className="relative">
              {/* Main portrait */}
              <div className="relative z-10 rounded-sm overflow-hidden shadow-xl">
                <img
                  src={EMMELY_PORTRAIT}
                  alt="Emmely — eigenares van Touché Beauty Salon"
                  className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                />
                {/* Subtle rose overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.62_0.09_15)/0.10] to-transparent" />
              </div>

              {/* Secondary photo — offset */}
              <div className="absolute -bottom-8 -right-6 w-44 h-52 rounded-sm overflow-hidden shadow-lg border-4 border-white z-20">
                <img
                  src={EMMELY_WORKING}
                  alt="Emmely aan het werk"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gold accent corner */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[oklch(0.78_0.07_70)] opacity-60" />

              {/* Rating badge */}
              <div className="absolute top-6 -right-4 bg-white shadow-lg rounded-sm px-4 py-3 z-20">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[oklch(0.78_0.07_70)] text-xs">★</span>
                  ))}
                </div>
                <p className="font-display text-sm font-semibold text-[oklch(0.25_0.03_20)]">4.9 / 5</p>
                <p className="font-body text-xs text-[oklch(0.55_0.04_30)]">Klantbeoordelingen</p>
              </div>
            </div>
          </FadeUp>

          {/* Right: Story */}
          <div className="flex flex-col gap-8">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3 mb-2">
                <div className="gold-line" />
                <span className="section-label">Over Touché</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.03_20)] leading-tight">
                Waar passie voor beauty<br />
                <span className="italic text-[oklch(0.62_0.09_15)]">en zorg samenkomen.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="font-body text-base text-[oklch(0.45_0.04_25)] leading-relaxed">
                Touché is de plek waar passie voor beauty en oog voor detail samenkomen. Emmely creëert met zorg, precisie en een warm gevoel behandelingen die niet alleen mooi zijn, maar ook echt een verwenmoment vormen.
              </p>
              <p className="font-body text-base text-[oklch(0.45_0.04_25)] leading-relaxed mt-4">
                Haar liefde voor nagels en beauty begon al op jonge leeftijd en is alleen maar sterker geworden. Vandaag mag ze elke dag doen wat ze het allerliefst doet: haar klanten verder helpen, advies geven en ervoor zorgen dat ze met een glimlach naar buiten gaan. Een gezellige babbel en een kop koffie horen daar natuurlijk ook bij.
              </p>
            </FadeUp>

            {/* Values grid */}
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {values.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="group p-4 bg-[oklch(0.97_0.01_60)] rounded-sm border border-[oklch(0.90_0.02_50)] hover:border-[oklch(0.72_0.08_15)] hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-[oklch(0.93_0.03_15)] flex items-center justify-center mb-3 group-hover:bg-[oklch(0.62_0.09_15)] transition-colors">
                      <Icon size={14} className="text-[oklch(0.62_0.09_15)] group-hover:text-white transition-colors" />
                    </div>
                    <p className="font-display text-sm font-semibold text-[oklch(0.25_0.03_20)] mb-1">{label}</p>
                    <p className="font-body text-xs text-[oklch(0.55_0.04_30)] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.fresha.com/nl/a/touche-herentals-zandstraat-101-eakki2rj/booking?menu=true&share=true&pId=1051753&cartId=4445d76b-2c31-4eb2-b236-5dcff68d0a67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Maak een afspraak
                </a>
                <div className="h-px flex-1 bg-[oklch(0.90_0.02_50)]" />
                <p className="font-body text-xs text-[oklch(0.65_0.04_30)] italic">— Emmely</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
