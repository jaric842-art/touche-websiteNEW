/*
 * Navigation — Touché Beauty Salon
 * Sticky frosted-glass nav with real Touché logo
 * Smooth scroll to sections, mobile hamburger menu
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

// Real logo from touchebeautysalon.be
const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663488381809/KSMkqH6mZzVDZTcKRMb8Hh/logo_86ba9547.png";

const navLinks = [
  { label: "Over Touché", href: "#over" },
  { label: "Diensten", href: "#diensten" },
  { label: "Prijzen", href: "#prijzen" },
  { label: "Galerij", href: "#galerij" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/92 backdrop-blur-md shadow-sm border-b border-[oklch(0.90_0.02_50)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-3 group"
            >
              <img
                src={LOGO}
                alt="Touché Beauty Salon"
                className="h-12 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-body text-sm font-semibold tracking-wide transition-colors duration-200 relative group ${
                    scrolled ? "text-[oklch(0.35_0.04_20)]" : "text-white"
                  } hover:text-[oklch(0.62_0.09_15)]`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[oklch(0.62_0.09_15)] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:0474381712"
                className={`hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors ${
                  scrolled ? "text-[oklch(0.62_0.09_15)]" : "text-white/80 hover:text-white"
                }`}
              >
                <Phone size={14} />
                <span className="hidden md:inline">0474 38 17 12</span>
              </a>
              <a
                href="https://www.fresha.com/nl/a/touche-herentals-zandstraat-101-eakki2rj/booking?menu=true&share=true&pId=1051753&cartId=4445d76b-2c31-4eb2-b236-5dcff68d0a67"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex btn-primary text-xs py-2.5 px-5"
              >
                Boek je afspraak
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-sm transition-colors ${
                  scrolled ? "text-[oklch(0.35_0.04_20)]" : "text-white"
                } hover:text-[oklch(0.62_0.09_15)]`}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/97 backdrop-blur-md border-b border-[oklch(0.90_0.02_50)] shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 px-2 font-body text-base text-[oklch(0.35_0.04_20)] hover:text-[oklch(0.62_0.09_15)] border-b border-[oklch(0.93_0.02_50)] last:border-0 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4">
                <a
                  href="https://www.fresha.com/nl/a/touche-herentals-zandstraat-101-eakki2rj/booking?menu=true&share=true&pId=1051753&cartId=4445d76b-2c31-4eb2-b236-5dcff68d0a67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center inline-flex"
                >
                  Boek je afspraak
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
