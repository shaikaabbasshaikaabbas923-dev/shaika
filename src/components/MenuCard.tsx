import React, { useState } from 'react';
import { Plus, Check, Flame, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  onQuickView?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart, onQuickView }) => {
  const [imageError, setImageError] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      onClick={() => onQuickView && onQuickView(item)}
      className="group bg-gradient-to-b from-[#18110D] to-[#100A07] rounded-2xl border border-[#EA580C]/20 hover:border-[#EA580C]/55 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#EA580C]/15 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Food Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C120C]">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
          />
        ) : (
          /* Styled Fallback Container */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1C120C] to-[#100906] p-6 text-center">
            <Flame className="w-10 h-10 text-[#EA580C] mb-2 animate-pulse" />
            <span className="text-sm font-bold text-white/90">{item.name}</span>
            <span className="text-xs text-[#F59E0B] mt-1 font-semibold">{item.category}</span>
          </div>
        )}

        {/* Ambient Hearth Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100A07] via-transparent to-black/35" />

        {/* Status Indicators (Top-Left) */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center z-10">
          {item.isSpecial && (
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#EA580C] to-[#DC2626] text-white rounded-md shadow-md flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-200" />
              Special
            </span>
          )}
          {item.isPopular && !item.isSpecial && (
            <span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-[#F59E0B] text-[#0A0706] rounded-md shadow-md">
              Popular
            </span>
          )}
          {item.isSpicy && (
            <span className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-[#0A0706]/90 text-[#EA580C] border border-[#EA580C]/40 rounded-md backdrop-blur-sm flex items-center gap-0.5">
              <Flame className="w-3 h-3 text-[#EA580C]" />
              Spicy
            </span>
          )}
        </div>

        {/* Veg / Non-Veg Indicator (Top-Right) */}
        <div className="absolute top-3 right-3 z-10">
          <div
            className={`w-5 h-5 rounded-md flex items-center justify-center border-2 ${
              item.isVegetarian
                ? 'border-emerald-500 bg-black/85'
                : 'border-[#EA580C] bg-black/85'
            }`}
            title={item.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                item.isVegetarian ? 'bg-emerald-500' : 'bg-[#EA580C]'
              }`}
            />
          </div>
        </div>

        {/* Portion Size Tag */}
        {item.portionSize && (
          <div className="absolute bottom-2.5 left-3 z-10">
            <span className="text-[11px] font-medium text-white/90 bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded border border-[#EA580C]/25">
              {item.portionSize}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category / Dish Tag */}
          <div className="flex items-center justify-between text-xs text-[#FAF5EC]/55 mb-1.5">
            <span className="text-[#EA580C] font-semibold text-[11px] uppercase tracking-wide">
              {item.category}
            </span>
            {item.rating && (
              <span className="flex items-center gap-1 text-amber-300 font-bold">
                ⭐ {item.rating}
              </span>
            )}
          </div>

          {/* Dish Name */}
          <h3 className="font-display font-bold text-lg text-white group-hover:text-[#FBBF24] transition-colors leading-snug">
            {item.name}
          </h3>

          {/* Arabic Name if available */}
          {item.arabicName && (
            <p className="text-xs text-amber-200/60 font-serif mt-0.5 font-medium">
              {item.arabicName}
            </p>
          )}

          {/* Short Description */}
          <p className="mt-2 text-xs text-[#FAF5EC]/70 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Bottom Price & Add to Cart Action */}
        <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-black text-xl text-[#FCD34D] tabular-nums">
              ₹{item.price}
            </span>
            {item.originalPrice && (
              <span className="text-xs text-white/40 line-through tabular-nums">
                ₹{item.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`p-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
              added
                ? 'bg-emerald-600 text-white shadow-emerald-900/40'
                : 'fire-btn-primary text-white hover:scale-105 active:scale-95'
            }`}
            title="Add to order"
            aria-label={`Add ${item.name} to order`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
