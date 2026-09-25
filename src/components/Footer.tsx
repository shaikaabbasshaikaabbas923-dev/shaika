import React from 'react';
import { Instagram, Facebook, MessageSquare, Youtube, ArrowUp, MapPin, Phone, Mail, Clock, Truck, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Speciality', href: '#speciality' },
    { label: 'Menu', href: '#menu' },
    { label: 'Ambience', href: '#ambience' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Photos', href: '#photos' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#070403] text-white border-t border-[#EA580C]/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#EA580C]/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <YamamaLogo size="md" withBadgeGlow={true} />
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-white leading-none">
                  YAMAMA <span className="flame-gradient-text">SHAWAYA</span>
                </span>
                <span className="text-[11px] tracking-widest text-[#FCD34D] font-bold uppercase mt-1 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#EA580C]" />
                  <span>Refill Your Energy • Wood-Fired Hearth</span>
                </span>
              </div>
            </div>

            <p className="text-sm font-medium text-white/90 max-w-sm">
              Authentic open-flame rotisserie shawaya, slow-roasted over live charcoal in a peaceful, family-friendly ambience.
            </p>

            <p className="text-xs text-[#FAF5EC]/65 max-w-sm leading-relaxed">
              Located on the Calicut Road between Angadippuram and Thirurkad (Oradampalam - Valiyaveetilpadi). Serving signature slow-roasted chicken with fragrant spiced Bishawari rice combos, fresh Kubus, chilled Bene Tibi mojitos, and free home delivery daily.
            </p>

            {/* Speciality Combos Summary */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider block mb-1">
                ⭐ House Speciality Combos:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-2.5 py-1 rounded-lg bg-[#140D09] border border-[#EA580C]/30 text-white">
                  Half: <strong className="text-[#FBBF24]">₹340</strong>
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#140D09] border border-[#EA580C]/30 text-white">
                  Full: <strong className="text-[#FBBF24]">₹660</strong>
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#140D09] border border-[#EA580C]/30 text-white">
                  Quarter: <strong className="text-[#FBBF24]">₹180</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#FCD34D] flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#EA580C]" />
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/70 hover:text-[#FBBF24] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#EA580C] text-sm">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#FCD34D] flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#EA580C]" />
              <span>Contact & Timings</span>
            </h4>

            <div className="space-y-3 text-xs text-[#FAF5EC]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>
                  Oradampalam-Valiyaveetilpadi, Calicut Road (Angadippuram – Thirurkad Route), Malappuram, Kerala - 679321
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <div className="flex items-center gap-2">
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-white hover:text-[#FBBF24] font-bold tabular-nums">
                    {RESTAURANT_INFO.phone}
                  </a>
                  <span className="text-white/30">/</span>
                  <a href={`tel:${RESTAURANT_INFO.phone2Raw}`} className="text-white hover:text-[#FBBF24] font-bold tabular-nums">
                    {RESTAURANT_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-white hover:text-[#FBBF24]">
                  {RESTAURANT_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span className="text-white font-medium">
                  12:00 PM to 12:00 AM Daily
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-emerald-400 font-semibold">
                <Truck className="w-4 h-4 shrink-0" />
                <span>Free Home Delivery (Angadippuram & Thirurkad)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#140D09] border border-[#EA580C]/30 flex items-center justify-center text-white/80 hover:text-white hover:border-[#EA580C] hover:bg-[#1E130D] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#EA580C]" />
              </a>
              <a
                href={RESTAURANT_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#140D09] border border-[#EA580C]/30 flex items-center justify-center text-white/80 hover:text-white hover:border-[#EA580C] hover:bg-[#1E130D] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-[#EA580C]" />
              </a>
              <a
                href={RESTAURANT_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#140D09] border border-[#EA580C]/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-500 hover:bg-[#1E130D] transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF5EC]/50">
          <p>© {new Date().getFullYear()} YAMAMA SHAWAYA. All rights reserved. Oradampalam-Valiyaveetilpadi, Calicut Road (Angadippuram ⇄ Thirurkad Route).</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#140D09] hover:bg-[#1E130D] text-white hover:text-[#FCD34D] border border-[#EA580C]/30 transition-all cursor-pointer font-bold uppercase tracking-wider text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#EA580C]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
