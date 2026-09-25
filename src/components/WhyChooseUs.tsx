import React from 'react';
import { Sparkles, Utensils, Award, ShieldCheck, HeartHandshake, Smile, Truck, Flame } from 'lucide-react';
import { YamamaLogo } from './YamamaLogo';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Smile,
      title: 'Peaceful Mind & Feel-Good Ambience',
      description: 'A serene, welcoming environment in Angadippuram thoughtfully designed for families to unwind, chat, and dine in pure comfort.',
      color: 'text-[#FCD34D]',
      badge: '01'
    },
    {
      icon: Flame,
      title: 'Speciality Bishawari Combos',
      description: 'Slow flame-roasted shawaya paired with aromatic long-grain spiced Bishawari basmati rice, starting at just ₹180.',
      color: 'text-[#EA580C]',
      badge: '02'
    },
    {
      icon: Truck,
      title: 'Free Home Delivery (12pm to 12am)',
      description: 'Hot, fresh food delivered right to your doorstep anywhere across Angadippuram and neighboring areas with no delivery charge.',
      color: 'text-emerald-400',
      badge: '03'
    },
    {
      icon: ShieldCheck,
      title: '100% Halal & Daily Fresh Meats',
      description: 'Clean kitchen standards, zero frozen cuts, and rigorous food hygiene ensuring wholesome meals you can trust completely.',
      color: 'text-[#F59E0B]',
      badge: '04'
    },
    {
      icon: Sparkles,
      title: 'Refreshing Bene Tibi Mojitos',
      description: 'Signature chilled handcrafted drinks like Green Apple, Blue Curacao, and Passion Fruit to perfectly complement your grills.',
      color: 'text-[#FCD34D]',
      badge: '05'
    },
    {
      icon: HeartHandshake,
      title: 'Warm & Attentive Service',
      description: 'Courteous staff, easy WhatsApp ordering, fast service, and dedicated family dining spaces on Calicut Road.',
      color: 'text-[#EA580C]',
      badge: '06'
    }
  ];

  return (
    <section className="py-20 bg-[#0A0706] relative border-t border-[#EA580C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160E09] border border-[#EA580C]/30 text-xs font-semibold text-[#FCD34D] uppercase tracking-wider mb-3 shadow-lg">
            <YamamaLogo size="xs" />
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>The Yamama Hospitality Promise</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            WHY DINE AT <span className="flame-gradient-text">YAMAMA SHAWAYA</span>
          </h2>

          <p className="mt-3 text-base text-[#FAF5EC]/75">
            More than just dining — it is the comforting warmth of open fire, authentic Arabian flavors, and heartfelt hospitality.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-7 rounded-2xl bg-gradient-to-b from-[#160E09] to-[#0F0A07] border border-[#EA580C]/20 hover:border-[#EA580C]/55 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#EA580C]/15 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0A0706] border border-[#EA580C]/30 flex items-center justify-center group-hover:border-[#EA580C]/70 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.3)] transition-all">
                      <Icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-xs font-black tracking-widest text-[#EA580C]/80 font-mono">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#FBBF24] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#FAF5EC]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#EA580C]/70 font-semibold">
                  <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Yamama Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
