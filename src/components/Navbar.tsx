import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, ChevronRight, MessageSquare, MapPin, Clock, Truck, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Speciality', href: '#speciality' },
    { label: 'Menu', href: '#menu' },
    { label: 'Ambience', href: '#ambience' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0706]/95 backdrop-blur-md border-b border-[#EA580C]/25 shadow-2xl shadow-black/80 py-2.5'
            : 'bg-gradient-to-b from-[#0A0706]/95 via-[#0A0706]/85 to-transparent py-3'
        }`}
      >
        {/* Top Micro-Bar for Location, Timing, Free Delivery and Quick Contacts */}
        <div className="hidden md:block border-b border-[#EA580C]/15 pb-1.5 mb-2 text-[11px] text-[#FAF5EC]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[#FCD34D] font-medium">
                <MapPin className="w-3 h-3 text-[#EA580C]" />
                <span>Angadippuram ⇄ Thirurkad Route (Calicut Rd)</span>
              </span>
              <span className="text-[#EA580C]/30">•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#F59E0B]" />
                <span>12:00 PM – 12:00 AM Daily</span>
              </span>
              <span className="text-[#EA580C]/30">•</span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Truck className="w-3 h-3" />
                <span>Free Home Delivery</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white/60">Delivery & Enquiries:</span>
              <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-white hover:text-[#FBBF24] font-bold tabular-nums transition-colors">
                {RESTAURANT_INFO.phone}
              </a>
              <span className="text-white/30">/</span>
              <a href={`tel:${RESTAURANT_INFO.phone2Raw}`} className="text-white hover:text-[#FBBF24] font-bold tabular-nums transition-colors">
                {RESTAURANT_INFO.phone2}
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Mark */}
            <a
              href="#overview"
              onClick={(e) => handleNavClick(e, '#overview')}
              className="flex items-center gap-2.5 group transition-transform active:scale-95"
            >
              <YamamaLogo size="sm" withBadgeGlow={true} />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white leading-none">
                  YAMAMA <span className="flame-gradient-text">SHAWAYA</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#FAF5EC]/70 font-bold uppercase mt-0.5 flex items-center gap-1">
                  <Flame className="w-2.5 h-2.5 text-[#EA580C]" />
                  <span>Wood-Fired & Rotisserie</span>
                  <span className="text-[#EA580C]">•</span>
                  <span className="hidden sm:inline text-white/40">Angadippuram</span>
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase font-bold tracking-wider text-[#FAF5EC]/75 hover:text-[#FBBF24] transition-colors relative py-1 group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EA580C] to-[#F59E0B] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Interactive Affordances & Actions */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Quick Enquiry Button */}
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya, I would like to make an enquiry or place an order.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#140D09] hover:bg-[#1E130D] text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all shadow-md"
                title="Direct WhatsApp Enquiry"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquiry</span>
              </a>

              {/* Cart Drawer Trigger Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl bg-[#18110D] hover:bg-[#231711] text-[#FAF5EC] hover:text-[#FBBF24] border border-[#EA580C]/25 transition-all cursor-pointer shadow-lg group"
                title="View Cart"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform text-[#F59E0B]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#EA580C] text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-lg border border-[#0A0706] animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Primary Call / Order Action */}
              <button
                onClick={onOpenOrderModal}
                className="hidden sm:flex items-center gap-2 px-4 py-2 fire-btn-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer hover:scale-105 active:scale-95 transition-all"
              >
                <Flame className="w-3.5 h-3.5 text-amber-200" />
                <span>Order Now</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-[#18110D] text-[#FAF5EC] hover:text-[#FBBF24] border border-[#EA580C]/30 cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-gradient-to-b from-[#140D09] via-[#0E0906] to-[#0A0706] border-l border-[#EA580C]/25 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#EA580C]/20">
                <div className="flex items-center gap-2">
                  <YamamaLogo size="sm" withBadgeGlow={true} />
                  <div>
                    <h3 className="font-display font-black text-lg text-white">
                      YAMAMA <span className="flame-gradient-text">SHAWAYA</span>
                    </h3>
                    <p className="text-[10px] text-[#F59E0B] font-semibold uppercase tracking-wider">
                      Live Charcoal Hearth
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-[#18110D] text-white/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="py-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between p-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white/90 hover:text-[#FBBF24] hover:bg-[#1A110C] border border-transparent hover:border-[#EA580C]/30 transition-all"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#EA580C]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-[#EA580C]/20 space-y-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya, I want to place an order.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-3 bg-[#18110D] hover:bg-[#221610] text-[#FBBF24] border border-[#EA580C]/40 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#EA580C]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
