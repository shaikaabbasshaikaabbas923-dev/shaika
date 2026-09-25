import React, { useState, useMemo } from 'react';
import { Search, Utensils, Sparkles, Filter, ChevronDown, ChevronUp, FileText, Phone, MessageSquare, Flame } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuCard } from './MenuCard';
import { YamamaLogo } from './YamamaLogo';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onQuickViewItem?: (item: MenuItem) => void;
}

const CATEGORIES: MenuCategory[] = [
  'All',
  'Shawaya Combos',
  'Shawaya & Kubus',
  'Bishawari Rice',
  'Mojitos (Bene Tibi)',
  'Mojitos',
  'Grills & Rolls',
  'Sides & Dips'
];

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onQuickViewItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'spicy'>('all');
  const [showAllItems, setShowAllItems] = useState(false);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      // Search query
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.arabicName && item.arabicName.includes(searchQuery));

      // Dietary filter
      const matchesDietary =
        dietaryFilter === 'all'
          ? true
          : dietaryFilter === 'veg'
          ? item.isVegetarian
          : item.isSpicy;

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  // Display subset or all
  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 12);

  return (
    <section id="menu" className="py-20 bg-[#0A0706] relative border-t border-[#EA580C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160E09] border border-[#EA580C]/30 text-xs font-semibold tracking-wider text-[#FCD34D] uppercase mb-3 shadow-lg">
            <YamamaLogo size="xs" />
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Master Crafted Arabic Cuisine & Mojitos</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            OUR <span className="flame-gradient-text">MENU</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#FAF5EC]/80 font-normal">
            Delicious flavours forged over flame • All prices in Indian Rupees (₹)
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-8 h-0.5 bg-[#EA580C]" />
            <Flame className="w-4 h-4 text-[#EA580C]" />
            <div className="w-8 h-0.5 bg-[#EA580C]" />
          </div>
        </div>

        {/* Search & Dietary Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#EA580C]/60" />
            <input
              type="text"
              placeholder="Search Shawaya, Rice, Mojitos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#140D09] border border-[#EA580C]/25 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C]/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dietary Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#140D09] border border-[#EA580C]/20 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white shadow-md font-bold'
                  : 'text-[#FAF5EC]/70 hover:text-white'
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-700 text-white shadow-md font-bold'
                  : 'text-[#FAF5EC]/70 hover:text-emerald-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Veg Only</span>
            </button>
            <button
              onClick={() => setDietaryFilter('spicy')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                dietaryFilter === 'spicy'
                  ? 'bg-[#EA580C] text-white shadow-md font-bold'
                  : 'text-[#FAF5EC]/70 hover:text-[#EA580C]'
              }`}
            >
              <Flame className="w-3 h-3 text-[#EA580C]" />
              <span>Spicy Picks</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#EA580C] via-[#DC2626] to-[#B91C1C] text-white border-[#EA580C] shadow-lg shadow-[#EA580C]/25 scale-102'
                  : 'bg-[#140D09] hover:bg-[#1E130D] text-[#FAF5EC]/70 hover:text-[#FCD34D] border-[#EA580C]/20 hover:border-[#EA580C]/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
                onQuickView={onQuickViewItem}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-[#140D09] rounded-3xl border border-[#EA580C]/25 max-w-md mx-auto p-8 shadow-xl">
            <Flame className="w-12 h-12 text-[#EA580C] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No dishes found</h3>
            <p className="text-xs text-[#FAF5EC]/60 mt-1">
              Try searching for something else or view all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setDietaryFilter('all');
              }}
              className="mt-4 px-4 py-2 fire-btn-primary text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View More / View Less Toggle */}
        {filteredItems.length > 12 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#140D09] hover:bg-[#1E130D] text-[#FCD34D] hover:text-white border border-[#EA580C]/35 hover:border-[#EA580C]/70 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xl hover:scale-105"
            >
              {showAllItems ? (
                <>
                  <span>Show Fewer Items</span>
                  <ChevronUp className="w-4 h-4 text-[#EA580C]" />
                </>
              ) : (
                <>
                  <span>View All {filteredItems.length} Dishes & Drinks</span>
                  <ChevronDown className="w-4 h-4 text-[#EA580C]" />
                </>
              )}
            </button>
          </div>
        )}

        {/* WhatsApp & Call Direct Order Prompt */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#140D09] via-[#1E130D] to-[#140D09] border border-[#EA580C]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
              Prefer ordering by phone or WhatsApp?
            </span>
            <p className="text-sm font-semibold text-white mt-0.5">
              Call our kitchen directly or send your order list on WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl bg-[#0A0706] hover:bg-[#1A110C] text-[#FCD34D] border border-[#EA580C]/40 text-xs font-bold transition-all flex items-center gap-2 tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#EA580C]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya, I want to order from the menu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
