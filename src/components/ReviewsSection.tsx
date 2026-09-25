import React, { useState } from 'react';
import { Star, MessageSquarePlus, Quote, Flame, MapPin, CheckCircle, ExternalLink, ThumbsUp, Sparkles, Filter } from 'lucide-react';
import { Review } from '../types';
import { YamamaLogo } from './YamamaLogo';

interface ReviewsSectionProps {
  reviews: Review[];
  onOpenWriteReview: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onOpenWriteReview }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Angadippuram & Thirurkad' | 'Shawaya' | 'Family' | 'Delivery'>('All');

  const filteredReviews = reviews.filter((rev) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Angadippuram & Thirurkad') {
      const loc = (rev.location || '').toLowerCase();
      const txt = (rev.text || '').toLowerCase();
      return loc.includes('angadippuram') || loc.includes('thirurkad') || txt.includes('angadippuram') || txt.includes('thirurkad');
    }
    if (activeFilter === 'Shawaya') {
      return rev.category === 'Shawaya' || (rev.dishRecommended || '').toLowerCase().includes('shawaya');
    }
    if (activeFilter === 'Family') {
      return rev.category === 'Family' || (rev.role || '').toLowerCase().includes('family') || (rev.text || '').toLowerCase().includes('ambien');
    }
    if (activeFilter === 'Delivery') {
      return rev.category === 'Delivery' || (rev.text || '').toLowerCase().includes('delivery');
    }
    return true;
  });

  const averageRating = 4.9;
  const totalReviewsCount = 850 + (reviews.length - 8);

  const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Yamama Shawaya Angadippuram Thirurkad Kerala')}`;

  return (
    <section id="reviews" className="py-20 bg-[#0A0706] relative border-t border-[#EA580C]/20 overflow-hidden">
      {/* Ambient Flame Glow Backdrop */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160E09] border border-[#EA580C]/30 text-xs font-semibold text-[#FCD34D] uppercase tracking-wider mb-3 shadow-lg">
              <YamamaLogo size="xs" />
              <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>4.9 / 5.0 Rating • Angadippuram & Thirurkad Patrons</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              CUSTOMER <span className="flame-gradient-text">REVIEWS & EXPERIENCES</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#FAF5EC]/75 max-w-2xl">
              Authentic feedback from food lovers visiting on Calicut Road between Angadippuram & Thirurkad, and families enjoying fast home delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenWriteReview}
              className="px-6 py-3 fire-btn-primary text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>ADD CUSTOMER REVIEW</span>
            </button>

            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-[#18110D] hover:bg-[#251811] text-[#FCD34D] border border-[#EA580C]/35 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Google Reviews</span>
            </a>
          </div>
        </div>

        {/* Rating Summary Banner */}
        <div className="mb-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#18110D] via-[#120B08] to-[#18110D] border border-[#EA580C]/25 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Big Score */}
            <div className="md:col-span-4 flex items-center gap-5 border-b md:border-b-0 md:border-r border-[#EA580C]/20 pb-5 md:pb-0 md:pr-6">
              <div className="text-center">
                <span className="font-display font-black text-5xl sm:text-6xl text-white block tabular-nums leading-none">
                  {averageRating.toFixed(1)}
                </span>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-[11px] text-[#FAF5EC]/60 block mt-1">out of 5.0</span>
              </div>

              <div className="space-y-1">
                <span className="text-sm font-bold text-white block">Guest Satisfaction</span>
                <span className="text-xs text-[#FCD34D] font-semibold block">
                  ★ Based on {totalReviewsCount}+ Verified Diners
                </span>
                <p className="text-[11px] text-[#FAF5EC]/60 leading-tight">
                  #1 Charcoal Rotisserie & Bishawari Rice across Angadippuram & Thirurkad
                </p>
              </div>
            </div>

            {/* Middle Feature Highlights */}
            <div className="md:col-span-5 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#0E0906] border border-[#EA580C]/15 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EA580C]/20 text-[#EA580C] flex items-center justify-center font-bold text-xs shrink-0">
                  🍗
                </div>
                <div>
                  <span className="font-bold text-white block">Juicy Shawaya</span>
                  <span className="text-[10px] text-[#FAF5EC]/60">Crispy skin & toum dip</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0E0906] border border-[#EA580C]/15 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-[#F59E0B] flex items-center justify-center font-bold text-xs shrink-0">
                  🍚
                </div>
                <div>
                  <span className="font-bold text-white block">Bishawari Rice</span>
                  <span className="text-[10px] text-[#FAF5EC]/60">Spiced aromatic basmati</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0E0906] border border-[#EA580C]/15 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                  ⚡
                </div>
                <div>
                  <span className="font-bold text-white block">Fast Free Delivery</span>
                  <span className="text-[10px] text-[#FAF5EC]/60">Angadippuram & Thirurkad</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0E0906] border border-[#EA580C]/15 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EA580C]/20 text-[#FCD34D] flex items-center justify-center font-bold text-xs shrink-0">
                  🌙
                </div>
                <div>
                  <span className="font-bold text-white block">12am Late Night</span>
                  <span className="text-[10px] text-[#FAF5EC]/60">Peaceful family seating</span>
                </div>
              </div>
            </div>

            {/* Right Quick Add CTA */}
            <div className="md:col-span-3 flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-[#0A0706] border border-[#EA580C]/20">
              <span className="text-xs font-bold text-white mb-1">Dined with us recently?</span>
              <p className="text-[11px] text-[#FAF5EC]/60 mb-2.5">Share your feedback & recommend your favorite dish!</p>
              <button
                onClick={onOpenWriteReview}
                className="w-full py-2 px-3 rounded-xl bg-[#1F140E] hover:bg-[#2C1D14] text-[#FCD34D] hover:text-white border border-[#EA580C]/40 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Submit Your Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/50 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>

          {(['All', 'Angadippuram & Thirurkad', 'Shawaya', 'Family', 'Delivery'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white border-[#EA580C] shadow-lg shadow-[#EA580C]/25'
                  : 'bg-[#140D09] text-[#FAF5EC]/70 border-[#EA580C]/20 hover:border-[#EA580C]/50 hover:text-white'
              }`}
            >
              {filter === 'All' ? `All Reviews (${reviews.length})` : filter}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => {
            const initials = rev.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2);

            return (
              <div
                key={rev.id}
                className={`bg-gradient-to-b from-[#18110D] to-[#100906] rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between relative group ${
                  rev.isNew
                    ? 'border-[#EA580C] ring-1 ring-[#EA580C]/50'
                    : 'border-[#EA580C]/20 hover:border-[#EA580C]/50'
                }`}
              >
                <Quote className="absolute top-5 right-5 w-8 h-8 text-white/5 group-hover:text-[#EA580C]/20 transition-colors pointer-events-none" />

                <div>
                  {/* Top Tag Row: Rating + Location / New Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    {/* Star Rating Row */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(rev.rating)
                              ? 'fill-[#F59E0B] text-[#F59E0B]'
                              : 'text-white/20'
                          }`}
                        />
                      ))}
                      <span className="text-xs font-bold text-[#FCD34D] ml-1.5 tabular-nums">
                        {rev.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Location or New Tag */}
                    <div className="flex items-center gap-1.5">
                      {rev.isNew && (
                        <span className="px-2 py-0.5 rounded-md bg-[#EA580C] text-white text-[10px] font-black uppercase tracking-wider animate-pulse">
                          New
                        </span>
                      )}
                      {rev.location && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#20150F] border border-[#EA580C]/30 text-[10px] font-bold text-[#FCD34D]">
                          <MapPin className="w-2.5 h-2.5 text-[#EA580C]" />
                          <span>{rev.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-[#FAF5EC]/85 italic leading-relaxed">
                    "{rev.text || rev.comment}"
                  </p>

                  {/* Recommended Dish Tag */}
                  {rev.dishRecommended && (
                    <div className="mt-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0C0805] border border-[#EA580C]/20 text-[11px] text-[#F59E0B] font-medium">
                      <ThumbsUp className="w-3 h-3 text-[#EA580C]" />
                      <span className="text-white/60">Ordered:</span>
                      <span className="font-semibold text-[#FCD34D] truncate max-w-[200px]">
                        {rev.dishRecommended}
                      </span>
                    </div>
                  )}
                </div>

                {/* Author Info */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EA580C] to-[#991B1C] text-white font-bold text-xs flex items-center justify-center border border-white/20 shadow-md">
                      {initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#FBBF24] transition-colors flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        {rev.verified && (
                          <span title="Verified Customer" className="inline-flex">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] text-[#FAF5EC]/50 font-medium">
                        {rev.role || (rev.location ? `Guest from ${rev.location}` : 'Verified Customer')}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] text-[#EA580C]/70 font-semibold tabular-nums">
                    {rev.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action for Reviews */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-[#140D09] border border-[#EA580C]/30 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-left">
              <YamamaLogo size="sm" />
              <div>
                <h4 className="text-sm font-bold text-white">Have you tried Yamama Shawaya?</h4>
                <p className="text-xs text-[#FAF5EC]/65">Help fellow food lovers in Angadippuram & Thirurkad know what to order!</p>
              </div>
            </div>

            <button
              onClick={onOpenWriteReview}
              className="px-5 py-2.5 fire-btn-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer shrink-0"
            >
              Add Your Review Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
