import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Eye, X, CheckCircle2, Truck, Award, Shield, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const RestaurantShowcase: React.FC = () => {
  const [isMenuCardModalOpen, setIsMenuCardModalOpen] = useState(false);

  return (
    <section id="ambience" className="py-20 bg-gradient-to-b from-[#0A0706] via-[#120B08] to-[#0A0706] relative overflow-hidden border-t border-[#EA580C]/20">
      {/* Warm Ambient Fire Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#EA580C]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#DC2626]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18100B] border border-[#EA580C]/35 text-xs font-bold uppercase tracking-widest text-[#FCD34D] mb-4 shadow-xl">
            <YamamaLogo size="xs" />
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Angadippuram ⇄ Thirurkad Route • Calicut Road</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            FEEL-GOOD AMBIENCE & <span className="flame-gradient-text">PEACEFUL DINING</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#FAF5EC]/80 leading-relaxed font-normal">
            Step into our warm, rustic restaurant on Calicut Road. Designed with soothing ambient hearth lighting, comfortable family seating, and open-charcoal fire craft.
          </p>
        </div>

        {/* Two-Column Showcase: Real Restaurant Building & Official Menu Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Restaurant Exterior & Ambience */}
          <div className="lg:col-span-7 bg-[#140D09] rounded-3xl border border-[#EA580C]/25 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#EA580C]/55 transition-all">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#1A110C]">
              <img
                src={RESTAURANT_INFO.restaurantExteriorImage}
                alt="Yamama Shawaya Restaurant Exterior on Calicut Road, Angadippuram"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140D09] via-transparent to-black/40" />

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-[#EA580C]/30 text-xs font-bold text-[#FCD34D] flex items-center gap-1.5 shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Angadippuram ⇄ Thirurkad Route</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Free Home Delivery</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                <span className="px-3 py-1 rounded-lg bg-black/75 backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Live Charcoal Hearth & Easy Car Parking</span>
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 font-semibold">
                  Open 12pm - 12am
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-7">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#EA580C] uppercase tracking-wider">
                <Flame className="w-4 h-4 text-[#EA580C]" />
                <span>The Yamama Experience</span>
              </div>

              <h3 className="font-display font-black text-2xl text-white group-hover:text-[#FBBF24] transition-colors">
                Authentic Flame Roasting in a Peaceful Atmosphere
              </h3>

              <p className="mt-3 text-sm text-[#FAF5EC]/75 leading-relaxed">
                Located right by the landmark Calicut Road at Oradampalam-Valiyaveetilpadi, conveniently situated between Angadippuram and Thirurkad. Whether you're dining with family or picking up takeaway, you'll love the warm glow, aroma of authentic charcoal grilling, and prompt hospitality.
              </p>

              {/* 3 Value Pillars */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#0E0906] border border-[#EA580C]/20 text-center">
                  <div className="text-xl font-black text-[#FCD34D] mb-0.5">100%</div>
                  <div className="text-[11px] font-bold text-white/90 uppercase tracking-wide">Halal & Fresh</div>
                  <div className="text-[10px] text-white/50 mt-0.5">Zero frozen chicken</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0E0906] border border-[#EA580C]/20 text-center">
                  <div className="text-xl font-black text-[#EA580C] mb-0.5">12h</div>
                  <div className="text-[11px] font-bold text-white/90 uppercase tracking-wide">12 PM - 12 AM</div>
                  <div className="text-[10px] text-white/50 mt-0.5">Non-stop service</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0E0906] border border-[#EA580C]/20 text-center">
                  <div className="text-xl font-black text-emerald-400 mb-0.5">FREE</div>
                  <div className="text-[11px] font-bold text-white/90 uppercase tracking-wide">Home Delivery</div>
                  <div className="text-[10px] text-white/50 mt-0.5">Angadippuram & Thirurkad</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="px-5 py-2.5 rounded-xl bg-[#0A0706] hover:bg-[#1A110C] text-[#FCD34D] border border-[#EA580C]/40 text-xs font-bold transition-all flex items-center gap-2 tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya, I would like to reserve a family table.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Table / Order Enquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Official Printed Menu Card Showcase */}
          <div className="lg:col-span-5 bg-[#140D09] rounded-3xl border border-[#EA580C]/25 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#EA580C]/55 transition-all">
            <div>
              <div className="p-6 pb-4 border-b border-[#EA580C]/15 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider block">
                    Authentic Printed Menu
                  </span>
                  <h3 className="font-display font-black text-xl text-white">
                    Official Yamama Menu Card
                  </h3>
                </div>
                <YamamaLogo size="sm" />
              </div>

              {/* Menu Card Preview Graphic with Zoom Click */}
              <div
                onClick={() => setIsMenuCardModalOpen(true)}
                className="relative aspect-[4/3] bg-[#0E0906] p-4 flex items-center justify-center cursor-pointer group/zoom overflow-hidden"
              >
                <img
                  src={RESTAURANT_INFO.menuCardImage}
                  alt="Official Yamama Shawaya Printed Menu Card"
                  referrerPolicy="no-referrer"
                  className="max-h-full w-auto object-contain rounded-xl shadow-2xl border border-white/10 group-hover/zoom:scale-105 transition-transform duration-300"
                />

                {/* Hover Overlay with View Icon */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white">
                  <div className="w-12 h-12 rounded-full bg-[#EA580C] flex items-center justify-center shadow-xl">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-amber-200">
                    Click to View Full Menu Card
                  </span>
                </div>
              </div>

              {/* Highlights from Menu */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0906] border border-[#EA580C]/20">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-[#EA580C]" />
                    <span className="text-xs font-bold text-white">Half Portion Shawaya Combo</span>
                  </div>
                  <span className="text-xs font-black text-[#FBBF24] tabular-nums">₹ 340</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0906] border border-[#EA580C]/20">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-[#EA580C]" />
                    <span className="text-xs font-bold text-white">Full Portion Shawaya Combo</span>
                  </div>
                  <span className="text-xs font-black text-[#FBBF24] tabular-nums">₹ 660</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0906] border border-[#EA580C]/20">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-[#EA580C]" />
                    <span className="text-xs font-bold text-white">Quarter Portion Shawaya Combo</span>
                  </div>
                  <span className="text-xs font-black text-[#FBBF24] tabular-nums">₹ 180</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0906] border border-[#EA580C]/20">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-xs font-bold text-white">Bene Tibi Mojitos & Shakes</span>
                  </div>
                  <span className="text-xs font-black text-emerald-400 tabular-nums">From ₹ 70</span>
                </div>
              </div>
            </div>

            {/* View Full Card Button */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setIsMenuCardModalOpen(true)}
                className="w-full py-3 rounded-xl bg-[#1A110C] hover:bg-[#251811] text-[#FCD34D] hover:text-white border border-[#EA580C]/40 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <Eye className="w-4 h-4 text-[#EA580C]" />
                <span>Enlarge Official Menu Card</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full Resolution Menu Card Preview */}
      {isMenuCardModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-[#120B08] rounded-3xl border border-[#EA580C]/40 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            <div className="p-4 px-6 border-b border-[#EA580C]/20 flex items-center justify-between bg-[#1A110C]">
              <div className="flex items-center gap-2">
                <YamamaLogo size="xs" />
                <h4 className="font-display font-black text-white text-base">
                  Yamama Shawaya — Official Printed Menu Card
                </h4>
              </div>
              <button
                onClick={() => setIsMenuCardModalOpen(false)}
                className="p-1.5 rounded-lg bg-[#2A180F] text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#0A0706]">
              <img
                src={RESTAURANT_INFO.menuCardImage}
                alt="Yamama Shawaya Full Menu Card"
                referrerPolicy="no-referrer"
                className="max-w-full h-auto object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            <div className="p-4 px-6 border-t border-[#EA580C]/20 bg-[#140D09] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-white/70">
                Calicut Road, Angadippuram • Phone: <strong className="text-[#FBBF24]">{RESTAURANT_INFO.phone}</strong>
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya, I am looking at your menu card and would like to order.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold"
                >
                  Order on WhatsApp
                </a>
                <button
                  onClick={() => setIsMenuCardModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#231711] text-white hover:bg-[#301F17] font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
