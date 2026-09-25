import React, { useState, useEffect, useCallback } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Food' | 'Kitchen' | 'Ambiance'>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  }, [activeLightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handlePrev, handleNext]);

  return (
    <section id="photos" className="py-20 bg-[#0A0706] border-t border-[#EA580C]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160E09] border border-[#EA580C]/30 text-xs font-semibold text-[#FCD34D] uppercase tracking-wider mb-3 shadow-lg">
            <YamamaLogo size="xs" />
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Angadippuram Gallery & Ambience</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            A GLIMPSE OF <span className="flame-gradient-text">OUR HEARTH & FOOD</span>
          </h2>

          <p className="mt-2 text-base text-[#FAF5EC]/75">
            Take a visual tour through our live charcoal rotisserie, signature dishes, and feel-good dining atmosphere.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {(['All', 'Food', 'Kitchen', 'Ambiance'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white border-[#EA580C] shadow-lg shadow-[#EA580C]/25 scale-102'
                  : 'bg-[#140D09] hover:bg-[#1E130D] text-[#FAF5EC]/70 hover:text-[#FCD34D] border-[#EA580C]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#160E09] border border-[#EA580C]/25 hover:border-[#EA580C]/60 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#EA580C]/15"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Ambient Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0706] via-transparent to-black/25 opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Category Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-sm text-[#FCD34D] border border-[#EA580C]/30 rounded-md">
                  {item.category}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#F59E0B]" />
              </div>

              {/* Title and Description at bottom */}
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <h4 className="font-display font-bold text-sm text-white group-hover:text-[#FBBF24] transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#FAF5EC]/70 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/60 text-white/80 hover:text-white border border-white/20 transition-all z-20 cursor-pointer"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#18110D]/80 hover:bg-[#251811] text-white border border-[#EA580C]/30 transition-all z-20 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#18110D]/80 hover:bg-[#251811] text-white border border-[#EA580C]/30 transition-all z-20 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image and Caption */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-[#EA580C]/40 shadow-2xl bg-[#0A0706]">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-white">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-[#FAF5EC]/70 mt-1 max-w-md">
                {filteredItems[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
