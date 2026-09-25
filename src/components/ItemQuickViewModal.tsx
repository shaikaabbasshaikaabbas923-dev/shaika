import React, { useState } from 'react';
import { X, Plus, Minus, Flame, Check, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemQuickViewModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, qty: number) => void;
}

export const ItemQuickViewModal: React.FC<ItemQuickViewModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-b from-[#18110D] via-[#120B08] to-[#0A0706] border border-[#EA580C]/35 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white/70 hover:text-white border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Food Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1E120C]">
          {!imageError ? (
            <img
              src={item.image}
              alt={item.name}
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#18110D]">
              <Flame className="w-12 h-12 text-[#EA580C] mb-2" />
              <span className="font-bold text-white">{item.name}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120B08] via-transparent to-black/35" />

          {/* Badge */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#EA580C]/30 text-xs font-bold text-[#FCD34D] flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{item.category}</span>
            </span>
          </div>

          {/* Portion Size */}
          {item.portionSize && (
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 rounded-lg bg-black/85 text-xs text-white/90 border border-white/10">
                {item.portionSize}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display font-black text-2xl text-white">
                {item.name}
              </h3>
              {item.arabicName && (
                <p className="text-sm text-amber-200/60 font-serif mt-0.5">
                  {item.arabicName}
                </p>
              )}
            </div>

            <div className="text-right">
              <span className="font-black text-2xl text-[#FCD34D] tabular-nums">
                ₹{item.price}
              </span>
              {item.originalPrice && (
                <span className="text-xs text-white/40 line-through block tabular-nums">
                  ₹{item.originalPrice}
                </span>
              )}
            </div>
          </div>

          <p className="mt-4 text-sm text-[#FAF5EC]/75 leading-relaxed">
            {item.description}
          </p>

          {/* Quantity and Add to Bag Row */}
          <div className="mt-6 pt-5 border-t border-[#EA580C]/20 flex items-center gap-4">
            {/* Stepper */}
            <div className="flex items-center gap-3 bg-[#0A0706] rounded-xl p-1.5 border border-[#EA580C]/30">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-white/5 cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-6 text-center font-bold text-sm text-white tabular-nums">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-white/5 cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add Button */}
            <button
              onClick={handleAdd}
              className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'fire-btn-primary text-white hover:scale-[1.02] active:scale-95'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Order</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Order • ₹{item.price * qty}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
