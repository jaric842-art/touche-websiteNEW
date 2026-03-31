/*
 * FAQ Section — Touché Beauty Salon
 * Elegant accordion with smooth animations
 * Professional, reassuring answers in Dutch
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Kunnen kunstnagels mijn eigen nagels beschadigen?",
    a: "Bij een correcte plaatsing en professionele verwijdering vormen kunstnagels geen risico voor je eigen nagels. In mijn salon werk ik altijd met de juiste technieken en hoogwaardige producten om je nagels optimaal te beschermen. Regelmatige bijwerkingen zijn bovendien essentieel om je nagels gezond en sterk te houden.",
  },
  {
    q: "Vanaf welke leeftijd mag ik kunstnagels laten zetten?",
    a: "Voor klanten jonger dan 16 jaar is toestemming van een ouder of voogd vereist. Ik raad aan om te wachten tot de nagels volledig zijn uitgegroeid, wat doorgaans rond de leeftijd van 16 jaar het geval is. Twijfel je? Neem gerust contact op voor persoonlijk advies.",
  },
  {
    q: "Hoelang blijven mijn kunstnagels erop zitten?",
    a: "Gelnagels en BIAB gaan gemiddeld 3 tot 5 weken mee, afhankelijk van je nagels en dagelijkse activiteiten. Ik adviseer een bijwerking om de 3 à 4 weken om de nagels mooi en sterk te houden. Met de juiste verzorging thuis kan je de levensduur verder verlengen.",
  },
  {
    q: "Doet het plaatsen van kunstnagels pijn?",
    a: "Nee, het plaatsen van kunstnagels is volledig pijnloos wanneer het correct wordt uitgevoerd. Ik werk met zachte technieken en zorg ervoor dat je je op elk moment comfortabel voelt. Heb je gevoelige nagels of specifieke bezorgdheden? Laat het me zeker weten vóór de behandeling.",
  },
  {
    q: "Kan ik alles doen met mijn kunstnagels?",
    a: "Kunstnagels zijn ontworpen om je dagelijkse activiteiten niet te hinderen. Je kan gewoon typen, koken, sporten en je huishoudelijke taken uitvoeren. Wel is het aan te raden om nagels niet als gereedschap te gebruiken en handschoenen te dragen bij intensief contact met water of chemicaliën. Zo geniet je zo lang mogelijk van je mooie resultaat.",
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[oklch(0.98_0.008_80)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Veelgestelde vragen</span>
              <div className="gold-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.03_20)] mb-4">
              Jouw vragen,{" "}
              <span className="italic text-[oklch(0.62_0.09_15)]">beantwoord</span>
            </h2>
            <p className="font-body text-base text-[oklch(0.45_0.04_25)] max-w-lg mx-auto">
              Heb je nog andere vragen? Neem gerust contact op — ik help je graag verder.
            </p>
          </div>
        </FadeUp>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div
                className={`bg-white rounded-sm border transition-all duration-300 overflow-hidden ${
                  openIndex === i
                    ? "border-[oklch(0.72_0.08_15)/0.4] shadow-md"
                    : "border-[oklch(0.90_0.02_50)] hover:border-[oklch(0.80_0.05_15)]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-[oklch(0.25_0.03_20)] pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    openIndex === i ? "bg-[oklch(0.62_0.09_15)]" : "bg-[oklch(0.93_0.02_50)]"
                  }`}>
                    {openIndex === i
                      ? <Minus size={13} className="text-white" />
                      : <Plus size={13} className="text-[oklch(0.55_0.04_30)]" />
                    }
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-7 pb-6">
                        <div className="w-full h-px bg-[oklch(0.90_0.02_50)] mb-4" />
                        <p className="font-body text-sm text-[oklch(0.45_0.04_25)] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
