import React, { useState } from 'react';
import { Flame, ShieldCheck, Heart, Sparkles, ChefHat, MapPin, Smile, Sun } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 bg-[#0A0706] relative border-t border-[#EA580C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story, Food & Peaceful Ambience */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160E09] border border-[#EA580C]/30 text-xs font-semibold text-[#FCD34D] uppercase tracking-wider mb-3 w-fit shadow-lg">
              <YamamaLogo size="xs" />
              <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Peaceful Dining • Angadippuram ⇄ Thirurkad Route</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
              ABOUT <span className="flame-gradient-text">YAMAMA SHAWAYA</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#FAF5EC]/90 leading-relaxed font-medium">
              YAMAMA SHAWAYA was born from a deep love for elemental fire roasting — slow charcoal heat, fragrant smoke, and ancient Arabian culinary tradition. We craft each dish to delight your tastebuds and bring genuine peace of mind in a warm, welcoming ambience.
            </p>

            {/* Three Warm Pillars */}
            <div className="mt-8 space-y-5">
              {/* Pillar 1: Feel-Good Ambience for Peaceful Mind */}
              <div className="flex gap-4 p-5 rounded-2xl bg-[#140D09] border border-[#EA580C]/20 hover:border-[#EA580C]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#0A0706] border border-[#EA580C]/30 flex items-center justify-center shrink-0">
                  <Smile className="w-6 h-6 text-[#FCD34D]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>Feel-Good Atmosphere & Peaceful Mind</span>
                    <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Ambience</span>
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#FAF5EC]/70 leading-relaxed">
                    Designed with gentle firelit warmth, comfortable family dining booths, and a tranquil courtyard setting where you can slow down and savour delicious food without rush.
                  </p>
                </div>
              </div>

              {/* Pillar 2: The Fire & The Spices */}
              <div className="flex gap-4 p-5 rounded-2xl bg-[#140D09] border border-[#EA580C]/20 hover:border-[#EA580C]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#0A0706] border border-[#EA580C]/30 flex items-center justify-center shrink-0">
                  <Flame className="w-6 h-6 text-[#EA580C]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>Live Charcoal Flame Roasting</span>
                    <span className="text-[10px] text-[#FCD34D] font-semibold uppercase tracking-wider bg-[#EA580C]/15 px-2 py-0.5 rounded border border-[#EA580C]/30">Open Fire</span>
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#FAF5EC]/70 leading-relaxed">
                    100% Halal fresh chicken marinated for hours in 14 secret Arabian herbs and spices, then rotated slowly over glowing charcoal embers until crisply caramelized outside and delightfully tender inside.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Fast Free Delivery & Extended Hours */}
              <div className="flex gap-4 p-5 rounded-2xl bg-[#140D09] border border-[#EA580C]/20 hover:border-[#EA580C]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#0A0706] border border-[#EA580C]/30 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>12:00 PM – 12:00 AM • Free Home Delivery</span>
                    <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Daily</span>
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#FAF5EC]/70 leading-relaxed">
                    Enjoy piping-hot meals at home or office. We offer fast, complimentary delivery in and around Angadippuram and Thirurkad for all your lunch and late-night dinner cravings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-[#140D09] border border-[#EA580C]/30 shadow-2xl p-2 group hover:border-[#EA580C]/60 transition-all">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#18110D]">
                {!imageError ? (
                  <img
                    src="/src/assets/images/about_shawaya_spices_1790232749721.jpg"
                    alt="Authentic Arabian Spices & Fresh Shawaya at Yamama"
                    onError={() => setImageError(true)}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#1A110C] p-6 text-center">
                    <YamamaLogo size="xl" />
                    <h4 className="font-display font-black text-xl text-white mt-4">
                      YAMAMA SHAWAYA
                    </h4>
                    <p className="text-xs text-[#FCD34D] mt-1">Refill Your Energy</p>
                  </div>
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0706] via-transparent to-transparent" />

                {/* Floating Stamp */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0A0706]/90 backdrop-blur-md border border-[#EA580C]/35">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#991B1C] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-lg">
                      <Flame className="w-6 h-6 text-amber-200" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-white text-sm">
                        Crafted with Passion
                      </h4>
                      <p className="text-xs text-[#FAF5EC]/70">
                        Oradampalam-Valiyaveetilpadi, Calicut Road, Angadippuram
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
