import React from 'react';
import { Flame, ArrowRight, UtensilsCrossed, Sparkles, MessageSquare, MapPin, Truck } from 'lucide-react';
import { YamamaLogo } from './YamamaLogo';
import { EmberSparks } from './EmberSparks';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOrderNow: () => void;
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onViewMenu }) => {
  return (
    <section id="overview" className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0A0706]">
      {/* Background Image with Ambient Fire Hearth Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_shawaya_chicken_1790232717345.jpg"
          alt="Yamama Shawaya slow-roasted chicken over glowing charcoal fire embers"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-40 brightness-75 contrast-125"
        />
        {/* Layered Hearth Fire Gradients for deep rustic ambience */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0706] via-[#0A0706]/90 to-[#0A0706]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0706]/90 via-transparent to-[#0A0706]" />

        {/* Ambient Fire Coals Radial Lighting */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-t from-[#EA580C]/25 via-[#DC2626]/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-hearth-pulse" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#F59E0B]/12 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-10 w-[350px] h-[350px] bg-[#C2410C]/18 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Floating Live Ember Sparks */}
      <EmberSparks count={24} className="opacity-90" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Top Mascot Logo & Location Tag */}
        <div className="flex flex-col items-center mb-6">
          <div className="mb-4 drop-shadow-[0_12px_35px_rgba(234,88,12,0.35)]">
            <YamamaLogo size="xl" withBadgeGlow={true} />
          </div>

          {/* Rustic Fire-Roasted Trust Anchor */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#18110D]/90 border border-[#EA580C]/35 backdrop-blur-md shadow-2xl text-xs sm:text-sm font-semibold tracking-wider text-[#FCD34D] uppercase">
            <Flame className="w-4 h-4 text-[#EA580C] animate-pulse" />
            <span>Angadippuram ⇄ Thirurkad • Calicut Road</span>
            <span className="text-white/20">•</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" />
              <span>Free Delivery</span>
            </span>
          </div>
        </div>

        {/* Main Brand Title with Radiant Hearth Fire Grading */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase drop-shadow-2xl">
          YAMAMA <span className="flame-gradient-text drop-shadow-[0_6px_30px_rgba(234,88,12,0.45)]">SHAWAYA</span>
        </h1>

        {/* Rustic Fire Element Motto */}
        <div className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#DC2626]/20 via-[#EA580C]/25 to-[#DC2626]/20 border border-[#EA580C]/40 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FCD34D] shadow-lg">
          <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
          <span>SLOW-ROASTED OVER LIVE CHARCOAL EMBERS</span>
          <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
        </div>

        {/* Supporting Headline */}
        <p className="mt-5 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FAF5EC] max-w-3xl mx-auto tracking-normal">
          Smoky. Tender. <span className="text-[#EA580C]">Forged by Open Flame.</span>
        </p>

        {/* Ambience & Description */}
        <p className="mt-3 text-base sm:text-lg md:text-xl text-[#FAF5EC]/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Savor signature slow-roasted Shawaya chicken marinated in authentic Arabian spices, paired with hot Bishawari rice and refreshing Bene Tibi mojitos in a peaceful, firelit atmosphere.
        </p>

        {/* Speciality Highlight Banner with Rustic Cast Iron Aesthetic */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-2.5 sm:p-3 rounded-2xl bg-[#140D09]/90 border border-[#EA580C]/35 backdrop-blur-md max-w-2xl mx-auto text-xs sm:text-sm shadow-2xl">
          <span className="text-[#F59E0B] font-black uppercase tracking-wide flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-[#EA580C]" />
            <span>Signature Combos:</span>
          </span>
          <span className="text-white/90 font-medium">Half: <strong className="text-[#FBBF24]">₹340</strong></span>
          <span className="text-[#EA580C]/40">•</span>
          <span className="text-white/90 font-medium">Full: <strong className="text-[#FBBF24]">₹660</strong></span>
          <span className="text-[#EA580C]/40">•</span>
          <span className="text-white/90 font-medium">Quarter: <strong className="text-[#FBBF24]">₹180</strong></span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
          <button
            onClick={onOrderNow}
            className="w-full sm:w-auto px-7 py-3.5 fire-btn-primary text-white font-extrabold text-sm sm:text-base tracking-wide rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <Flame className="w-4 h-4 text-amber-200" />
            <span>ORDER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya Angadippuram, I want to enquire about today\'s special menu and place an order.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base tracking-wide rounded-xl shadow-xl shadow-emerald-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP ENQUIRY</span>
          </a>

          <button
            onClick={onViewMenu}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#18110D]/80 hover:bg-[#251811] text-white hover:text-[#FBBF24] font-bold text-sm sm:text-base tracking-wide rounded-xl border border-[#EA580C]/30 hover:border-[#EA580C]/70 backdrop-blur-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#F59E0B]" />
            <span>VIEW MENU</span>
          </button>
        </div>

        {/* Rustic Hearth Hearthline Divider */}
        <div className="mt-12 flex items-center justify-center gap-4 max-w-md mx-auto opacity-75">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#EA580C]/50 to-transparent" />
          <Flame className="w-4 h-4 text-[#EA580C]" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#EA580C]/50 to-transparent" />
        </div>

        {/* Trust Statement */}
        <div className="mt-4">
          <p className="text-xs sm:text-sm font-semibold text-[#FAF5EC]/85 tracking-widest uppercase">
            Live Charcoal Fire <span className="text-[#EA580C] mx-2">•</span> 14 Arabian Spices <span className="text-[#EA580C] mx-2">•</span> 100% Halal Fresh
          </p>
        </div>
      </div>
    </section>
  );
};
