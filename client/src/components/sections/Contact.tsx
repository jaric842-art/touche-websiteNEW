/*
 * Contact Section — Touché Beauty Salon
 * Contact details, opening hours, map embed
 * Warm ivory background, gold accents
 */

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

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

const hours = [
  { day: "Maandag", time: "Op afspraak" },
  { day: "Dinsdag", time: "Op afspraak" },
  { day: "Woensdag", time: "Op afspraak" },
  { day: "Donderdag", time: "Op afspraak" },
  { day: "Vrijdag", time: "Op afspraak" },
  { day: "Zaterdag", time: "Op afspraak" },
  { day: "Zondag", time: "Gesloten" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[oklch(0.98_0.008_80)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Contact & Locatie</span>
              <div className="gold-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.03_20)] mb-4">
              Vind ons in{" "}
              <span className="italic text-[oklch(0.62_0.09_15)]">Herentals</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div className="flex flex-col gap-8">
            {/* Contact details */}
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-sm border border-[oklch(0.90_0.02_50)] p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-[oklch(0.25_0.03_20)] mb-6">Contactgegevens</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[oklch(0.93_0.03_15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={15} className="text-[oklch(0.62_0.09_15)]" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-[oklch(0.35_0.03_20)] mb-0.5">Adres</p>
                      <p className="font-body text-base text-[oklch(0.25_0.03_20)]">Zandstraat 101</p>
                      <p className="font-body text-base text-[oklch(0.25_0.03_20)]">2200 Herentals, België</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[oklch(0.93_0.03_15)] flex items-center justify-center flex-shrink-0">
                      <Phone size={15} className="text-[oklch(0.62_0.09_15)]" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-[oklch(0.35_0.03_20)] mb-0.5">Telefoon</p>
                      <a href="tel:0474381712" className="font-body text-base text-[oklch(0.25_0.03_20)] hover:text-[oklch(0.62_0.09_15)] transition-colors">
                        0474 38 17 12
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[oklch(0.93_0.03_15)] flex items-center justify-center flex-shrink-0">
                      <Mail size={15} className="text-[oklch(0.62_0.09_15)]" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-[oklch(0.35_0.03_20)] mb-0.5">E-mail</p>
                      <a href="mailto:Emmely.custers@outlook.be" className="font-body text-base text-[oklch(0.25_0.03_20)] hover:text-[oklch(0.62_0.09_15)] transition-colors break-all">
                        Emmely.custers@outlook.be
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-7 pt-6 border-t border-[oklch(0.90_0.02_50)]">
                  <p className="font-body text-sm font-semibold text-[oklch(0.35_0.03_20)] mb-4">Volg Touché</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/touchebeautysalon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[oklch(0.93_0.03_15)] flex items-center justify-center hover:bg-[oklch(0.62_0.09_15)] transition-colors group"
                    >
                      <Instagram size={16} className="text-[oklch(0.62_0.09_15)] group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.facebook.com/touchebeautysalon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[oklch(0.93_0.03_15)] flex items-center justify-center hover:bg-[oklch(0.62_0.09_15)] transition-colors group"
                    >
                      <Facebook size={16} className="text-[oklch(0.62_0.09_15)] group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@touchebeautysalon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[oklch(0.93_0.03_15)] flex items-center justify-center hover:bg-[oklch(0.62_0.09_15)] transition-colors group"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[oklch(0.62_0.09_15)] group-hover:text-white transition-colors">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Opening hours */}
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-sm border border-[oklch(0.90_0.02_50)] p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={18} className="text-[oklch(0.62_0.09_15)]" />
                  <h3 className="font-display text-xl font-semibold text-[oklch(0.25_0.03_20)]">Openingsuren</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex items-center justify-between py-2 border-b border-[oklch(0.93_0.01_60)] last:border-0">
                      <span className="font-body text-sm text-[oklch(0.40_0.04_25)]">{day}</span>
                      <span className={`font-body text-sm font-semibold ${time === "Gesloten" ? "text-[oklch(0.60_0.04_30)] italic" : "text-[oklch(0.62_0.09_15)]"}`}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-[oklch(0.60_0.04_30)] mt-4 italic">
                  * Afspraken uitsluitend op reservatie. Bel of stuur een bericht voor beschikbaarheid.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right: Map */}
          <FadeUp delay={0.15}>
            <div className="rounded-sm overflow-hidden shadow-lg border border-[oklch(0.90_0.02_50)] h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.3!2d4.8350!3d51.1760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c15f5a5a5a5a5a%3A0x1234567890abcdef!2sZandstraat%20101%2C%202200%20Herentals!5e0!3m2!1snl!2sbe!4v1711648800000!5m2!1snl!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Touché Beauty Salon locatie — Zandstraat 101, Herentals"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
