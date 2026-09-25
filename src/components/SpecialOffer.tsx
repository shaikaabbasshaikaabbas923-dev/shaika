import React from 'react';
import { Flame, ArrowRight, Clock, Truck, ShieldCheck, Plus, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import { YamamaLogo } from './YamamaLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface SpecialOfferProps {
  onOrderSpecial: (item: MenuItem) => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onOrderSpecial }) => {
  const specialityCombos: MenuItem[] = [
    {
      id: 'shawaya-rice-half',
      name: 'Shawaya Chicken with Bishawari Rice (Half Portion)',
      arabicName: 'شواية نصف دجاج مع أرز بيشاوري',
      category: 'Shawaya Combos',
      description: 'Our #1 best-selling speciality! Half portion flame-roasted juicy Shawaya chicken served on fragrant spiced Bishawari rice, fresh Kubus, homemade Toum garlic paste, and spicy salad.',
      price: 340,
      originalPrice: 380,
      image: '/src/assets/images/yamama_special_platter_1790232732880.jpg',
      isSpecial: true,
      isPopular: true,
      rating: 5.0,
      portionSize: 'Half Portion • Serves 1-2',
      badge: 'Signature House Favourite'
    },
    {
      id: 'shawaya-rice-full',
      name: 'Shawaya Chicken with Bishawari Rice (Full Portion)',
      arabicName: 'شواية دجاج كاملة مع أرز بيشاوري',
      category: 'Shawaya Combos',
      description: 'Whole flame-roasted chicken infused with our 14-spice secret marinade, served atop a generous platter of aromatic Bishawari rice, 3 fresh Kubus, garlic toum, and pickled chillies.',
      price: 660,
      originalPrice: 720,
      image: '/src/assets/images/hero_shawaya_chicken_1790232717345.jpg',
      isSpecial: true,
      isPopular: true,
      rating: 5.0,
      portionSize: 'Full Portion • Serves 3-4',
      badge: 'Grand Family Feast'
    },
    {
      id: 'shawaya-rice-quarter',
      name: 'Shawaya Chicken with Bishawari Rice (Quarter Portion)',
      arabicName: 'شواية ربع دجاج مع أرز بيشاوري',
      category: 'Shawaya Combos',
      description: 'Crispy succulent quarter chicken portion served with seasoned Bishawari basmati rice, warm Kubus, authentic garlic dip, and salad. Perfect personal hearty lunch or dinner.',
      price: 180,
      originalPrice: 200,
      image: '/src/assets/images/hero_shawaya_chicken_1790232717345.jpg',
      isSpecial: true,
      isPopular: true,
      rating: 4.9,
      portionSize: 'Quarter Portion • Serves 1',
      badge: 'Solo Satisfier'
    }
  ];

  return (
    <section id="speciality" className="py-20 bg-gradient-to-b from-[#0A0706] via-[#120B08] to-[#0A0706] relative overflow-hidden border-y border-[#EA580C]/20">
      {/* Decorative Fire Glow Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#EA580C]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#DC2626]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18100B] border border-[#EA580C]/35 text-[#FCD34D] text-xs font-bold uppercase tracking-widest mb-3 shadow-xl">
            <YamamaLogo size="xs" />
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Signature Fire-Roasted Speciality</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            OUR SPECIALITY: <span className="flame-gradient-text">BISHAWARI RICE & SHAWAYA</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#FAF5EC]/80">
            Slow flame-roasted chicken infused with secret Arabian spices, served over fragrant long-grain Bishawari rice.
          </p>

          {/* Quick Perks Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/90">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#140D09] border border-[#EA580C]/25 shadow-md">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free Home Delivery</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#140D09] border border-[#EA580C]/25 shadow-md">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Open 12:00 PM to 12:00 AM Daily</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#140D09] border border-[#EA580C]/25 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Fresh Halal Meat</span>
            </span>
          </div>
        </div>

        {/* 3 Speciality Combo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {specialityCombos.map((combo) => (
            <div
              key={combo.id}
              className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 relative group ${
                combo.id === 'shawaya-rice-half'
                  ? 'bg-gradient-to-b from-[#22150E] via-[#170E09] to-[#0F0906] border-2 border-[#EA580C]/60 shadow-2xl shadow-[#EA580C]/20 scale-102 lg:-translate-y-2'
                  : 'bg-gradient-to-b from-[#1A110C] to-[#0E0906] border border-[#EA580C]/30 hover:border-[#EA580C]/60 shadow-xl hover:shadow-2xl'
              }`}
            >
              {/* Highlight Badge for Top Item */}
              {combo.id === 'shawaya-rice-half' && (
                <div className="bg-gradient-to-r from-[#EA580C] via-[#DC2626] to-[#B91C1C] text-white text-[11px] font-black uppercase tracking-widest text-center py-1.5 flex items-center justify-center gap-1.5 shadow-md">
                  <Flame className="w-3.5 h-3.5" />
                  <span>MOST ORDERED SPECIALITY • REFILL YOUR ENERGY</span>
                  <Flame className="w-3.5 h-3.5" />
                </div>
              )}

              {/* Combo Image with Flame Glow */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#18110D]">
                <img
                  src={combo.image}
                  alt={combo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120B08] via-transparent to-black/30" />

                {/* Portion Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-[#EA580C]/40 text-xs font-bold text-[#FCD34D] shadow-lg flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>{combo.portionSize}</span>
                  </span>
                </div>

                {/* Price Tag with Glowing Amber Flare */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  {combo.originalPrice && (
                    <span className="text-xs line-through text-white/50 bg-black/70 px-2 py-0.5 rounded tabular-nums">
                      ₹{combo.originalPrice}
                    </span>
                  )}
                  <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white font-black text-lg tracking-tight shadow-xl flex items-center gap-0.5 tabular-nums">
                    <span>₹</span>
                    <span>{combo.price}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider">
                      {combo.badge}
                    </span>
                    <span className="text-xs text-amber-300 flex items-center gap-1 font-bold">
                      ⭐ {combo.rating} (500+ orders)
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-white group-hover:text-[#FBBF24] transition-colors leading-snug">
                    {combo.name}
                  </h3>

                  <p className="text-xs text-amber-200/60 font-serif mt-1 font-semibold">
                    {combo.arabicName}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#FAF5EC]/75 leading-relaxed">
                    {combo.description}
                  </p>

                  {/* Included Items Checklist with Hearth Flare */}
                  <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-xs text-white/80">
                    <div className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>Slow-roasted Shawaya chicken with natural smoky crisp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>Aromatic long-grain Bishawari basmati rice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>Fresh hot Kubus bread & creamy Toum garlic paste</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => onOrderSpecial(combo)}
                    className="flex-1 py-3 px-4 fire-btn-primary text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Bag • ₹{combo.price}</span>
                  </button>

                  <a
                    href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello Yamama Shawaya Angadippuram, I want to order: ${combo.name} (₹${combo.price}). Please confirm delivery.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white transition-all shadow-md flex items-center justify-center"
                    title="Order this combo via WhatsApp"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Home Delivery Banner Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#18110D] via-[#21140E] to-[#18110D] border border-[#EA580C]/35 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#EA580C]/20 border border-[#EA580C]/50 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-[#EA580C]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Free Home Delivery in Angadippuram</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded uppercase">No Charge</span>
              </h4>
              <p className="text-xs text-[#FAF5EC]/70 mt-0.5">
                Delivering steaming hot combos from 12:00 PM to 12:00 AM daily.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="px-5 py-2.5 rounded-xl bg-[#0F0A07] hover:bg-[#1B120C] text-[#FCD34D] border border-[#EA580C]/40 text-xs font-bold transition-all tabular-nums"
            >
              📞 {RESTAURANT_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya, I want to order for home delivery.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-md"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
