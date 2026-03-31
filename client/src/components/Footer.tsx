/*
 * Footer — Touché Beauty Salon
 * Elegant dark footer with rose gold accents
 * Logo, nav links, social icons, contact info
 */

import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

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

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[oklch(0.18_0.02_20)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={LOGO}
              alt="Touché Beauty Salon"
              className="h-14 w-auto mb-5 brightness-0 invert"
            />
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              Premium beauty- en nagelsalon in Herentals. Persoonlijke service, topkwaliteit en een luxueuze ervaring voor elke klant.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.instagram.com/touche_beautysalon?igsh=bHdrYWE5cWtrbjhr&utm_source=qr" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[oklch(0.72_0.08_15)] hover:bg-[oklch(0.72_0.08_15)/0.2] transition-all">
                <Instagram size={15} className="text-white/70" />
              </a>
              <a href="https://www.facebook.com/people/Touché-Beautysalon/61581854203640/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[oklch(0.72_0.08_15)] hover:bg-[oklch(0.72_0.08_15)/0.2] transition-all">
                <Facebook size={15} className="text-white/70" />
              </a>
              <a href="https://www.tiktok.com/@touche_beautysalon?_r=1&_t=ZG-91P19K2CedE" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[oklch(0.72_0.08_15)] hover:bg-[oklch(0.72_0.08_15)/0.2] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/70">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 tracking-wide">Navigatie</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm text-white/55 hover:text-[oklch(0.88_0.04_15)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 tracking-wide">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[oklch(0.72_0.08_15)] mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-white/55 leading-relaxed">
                  Zandstraat 101<br />2200 Herentals
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[oklch(0.72_0.08_15)] flex-shrink-0" />
                <a href="tel:0474381712" className="font-body text-sm text-white/55 hover:text-white/80 transition-colors">
                  0474 38 17 12
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[oklch(0.72_0.08_15)] flex-shrink-0" />
                <a href="mailto:Emmely.custers@outlook.be" className="font-body text-sm text-white/55 hover:text-white/80 transition-colors break-all">
                  Emmely.custers@outlook.be
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/35">
            © {new Date().getFullYear()} Touché Beauty Salon — Emmely Custers. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-body text-xs text-white/35">Gemaakt met</span>
            <span className="text-[oklch(0.72_0.08_15)] text-xs">♥</span>
            <span className="font-body text-xs text-white/35">in Herentals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
