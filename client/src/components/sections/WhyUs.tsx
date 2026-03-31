/*
 * WhyUs Section — Touché Beauty Salon
 * Elegant feature grid with icons and descriptions
 * Warm blush background with gold accents
 */

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Heart, Gem, Eye, MessageCircle, Sparkles, Star } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Persoonlijke ervaring",
    desc: "Elke klant is uniek. Emmely neemt de tijd om te luisteren naar jouw wensen en geeft eerlijk advies op maat.",
  },
  {
    icon: Gem,
    title: "Topkwaliteit producten",
    desc: "Alleen de beste merken en materialen worden gebruikt voor resultaten die lang meegaan en er fantastisch uitzien.",
  },
  {
    icon: Eye,
    title: "Oog voor detail",
    desc: "Van de eerste streek tot de laatste afwerking — elk detail telt. Perfectie is geen toeval, het is een keuze.",
  },
  {
    icon: MessageCircle,
    title: "Professioneel advies",
    desc: "Twijfel je over welke behandeling het beste bij jou past? Emmely begeleidt je met kennis en eerlijkheid.",
  },
  {
    icon: Sparkles,
    title: "Ontspannen sfeer",
    desc: "Een bezoek aan Touché is meer dan een behandeling — het is een moment van rust, verwennerij en aandacht.",
  },
  {
    icon: Star,
    title: "Duurzame resultaten",
    desc: "Mooie nagels en een stralende huid die weken meegaan. Kwaliteit die je terugziet en voelt.",
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

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-[oklch(0.93_0.03_15)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="section-label">Waarom Touché</span>
              <div className="gold-line" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.25_0.03_20)] mb-4">
              Meer dan een salon —{" "}
              <span className="italic text-[oklch(0.55_0.09_15)]">een ervaring</span>
            </h2>
            <p className="font-body text-base text-[oklch(0.40_0.04_20)] max-w-xl mx-auto leading-relaxed">
              Bij Touché staat jouw welzijn centraal. Ontdek waarom klanten keer op keer terugkomen.
            </p>
          </div>
        </FadeUp>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div className="group bg-white/70 backdrop-blur-sm p-7 rounded-sm border border-white/80 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.93_0.03_15)] border border-[oklch(0.85_0.05_15)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.62_0.09_15)] group-hover:border-[oklch(0.62_0.09_15)] transition-all duration-300">
                  <Icon size={20} className="text-[oklch(0.55_0.09_15)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[oklch(0.25_0.03_20)] mb-3">{title}</h3>
                <p className="font-body text-sm text-[oklch(0.45_0.04_25)] leading-relaxed">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
