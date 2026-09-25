import React from 'react';
import { Flame, Sparkles, Truck, ShieldCheck } from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: Flame,
      title: 'Live Charcoal Spit',
      description: 'Slow-roasted over authentic wood charcoal for an irresistible smoky aroma and juicy crunch.',
      color: 'text-[#EA580C]',
      badge: 'Open Fire Rotisserie'
    },
    {
      icon: Sparkles,
      title: 'Secret 14 Spices',
      description: 'Generations-old Arabian marinade infused deep into tender, farm-fresh chicken.',
      color: 'text-[#F59E0B]',
      badge: 'Signature Flavor'
    },
    {
      icon: Truck,
      title: 'Free Home Delivery',
      description: 'Hot, sizzling shawaya combos delivered fresh to your doorstep across Angadippuram & Thirurkad (12 PM – 12 AM).',
      color: 'text-emerald-400',
      badge: 'Zero Delivery Fee'
    },
    {
      icon: ShieldCheck,
      title: '100% Halal & Pure',
      description: 'Daily fresh meats prepared in a spotless kitchen with genuine care and peace of mind.',
      color: 'text-[#FBBF24]',
      badge: 'Uncompromising Quality'
    }
  ];

  return (
    <section className="py-12 bg-[#0A0706] border-y border-[#EA580C]/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl rustic-fire-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0F0A07] border border-[#EA580C]/25 flex items-center justify-center group-hover:border-[#EA580C]/60 group-hover:shadow-[0_0_15px_rgba(234,88,12,0.3)] transition-all">
                      <Icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-[#F59E0B] uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FBBF24] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#FAF5EC]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#EA580C]/80 font-medium">
                  <Flame className="w-3 h-3 text-[#EA580C]" />
                  <span>Yamama Fire Craft</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
