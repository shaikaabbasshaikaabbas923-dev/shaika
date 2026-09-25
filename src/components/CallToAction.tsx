import React from 'react';
import { ArrowRight, Flame, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

interface CallToActionProps {
  onOrderNow: () => void;
  onContactUs: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOrderNow, onContactUs }) => {
  return (
    <section className="py-20 bg-[#0A0706] relative overflow-hidden border-t border-[#EA580C]/20">
      {/* Warm Ambient Fire Hearth Glows */}
      <div className="absolute inset-0 bg-radial-at-c from-[#1F120A] via-[#0A0706] to-[#0A0706]" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#EA580C]/18 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#DC2626]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#1A110C] via-[#140D09] to-[#0E0906] border-2 border-[#EA580C]/35 shadow-2xl shadow-black/80 relative overflow-hidden">
          {/* Decorative Corner Ember Ornaments */}
          <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-[#EA580C]/25 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-[#DC2626]/20 to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0706]/80 border border-[#EA580C]/30 text-xs font-bold uppercase tracking-wider text-[#FCD34D] mb-6 shadow-lg">
            <YamamaLogo size="xs" />
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Angadippuram • Calicut Road</span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-tight">
            HUNGRY? <span className="flame-gradient-text">REFILL YOUR ENERGY.</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-base sm:text-xl text-[#FAF5EC]/85 max-w-2xl mx-auto font-medium">
            Order your favourite YAMAMA SHAWAYA flame-roasted combos, fragrant Bishawari rice feasts, and chilled Bene Tibi mojitos today.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
            <button
              onClick={onOrderNow}
              className="w-full sm:w-auto px-7 py-4 fire-btn-primary text-white font-extrabold text-sm sm:text-base tracking-wide rounded-xl shadow-xl hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Flame className="w-4 h-4 text-amber-200" />
              <span>ORDER NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya, I want to order Shawaya combos for delivery or takeaway.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base tracking-wide rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/30"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WHATSAPP ORDER</span>
            </a>
          </div>

          {/* Timing & Free Delivery Assurance */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#FAF5EC]/75 font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Open 12:00 PM – 12:00 AM Daily</span>
            </span>
            <span className="text-[#EA580C]/40">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span>Free Delivery in Angadippuram</span>
            </span>
            <span className="text-[#EA580C]/40">•</span>
            <span className="flex items-center gap-1.5">
              <span>Call: <strong className="text-white tabular-nums">{RESTAURANT_INFO.phone}</strong></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
