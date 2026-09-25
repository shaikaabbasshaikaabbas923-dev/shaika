import React, { useState } from 'react';
import { X, Star, Check, Flame, MapPin, Sparkles, ExternalLink, ThumbsUp } from 'lucide-react';
import { Review } from '../types';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState<'Angadippuram' | 'Thirurkad' | 'Valiyaveetilpadi' | 'Other'>('Angadippuram');
  const [customLocation, setCustomLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [dishRecommended, setDishRecommended] = useState('Shawaya Chicken with Bishawari Rice (Half Portion ₹340)');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const popularDishes = [
    'Shawaya with Bishawari Rice (Half ₹340)',
    'Shawaya with Bishawari Rice (Full ₹660)',
    'Shawaya with Bishawari Rice (Quarter ₹180)',
    'Shawaya Chicken with Kubus',
    'Bene Tibi Passion Fruit Mojito',
    'Mumbai Special Mojito',
    'Charcoal Shish Tawook'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const chosenLocation = location === 'Other' ? (customLocation.trim() || 'Nearby Area') : location;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      location: chosenLocation,
      rating,
      text: text.trim(),
      date: 'Just now',
      dishRecommended: dishRecommended.trim() || 'Shawaya Chicken with Bishawari Rice',
      role: `Guest from ${chosenLocation}`,
      verified: true,
      isNew: true,
      category: dishRecommended.toLowerCase().includes('mojito') ? 'Mojito' : 'Shawaya'
    };

    onSubmitReview(newReview);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setText('');
      setCustomLocation('');
      setRating(5);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-b from-[#18110D] via-[#120B08] to-[#0A0706] border border-[#EA580C]/35 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto no-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl">
              <Check className="w-9 h-9" />
            </div>
            <h4 className="font-display font-bold text-2xl text-white">
              Thank You for Your Review!
            </h4>
            <p className="text-xs text-[#FAF5EC]/80 max-w-sm mx-auto">
              Your feedback is now live on our website! Thank you for supporting Yamama Shawaya on the Angadippuram – Thirurkad route.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-4 h-4 text-[#EA580C]" />
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                Yamama Shawaya • Guest Feedback
              </span>
            </div>
            <h3 className="font-display font-black text-2xl text-white">
              Add Your Customer Review
            </h3>
            <p className="text-xs text-[#FAF5EC]/60 mt-1">
              Share your dining or home delivery experience with our slow-roasted shawaya and spiced Bishawari rice.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Star Rating */}
              <div>
                <label className="block text-xs font-bold text-[#FAF5EC]/80 uppercase tracking-wider mb-2">
                  Overall Rating *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer transition-transform hover:scale-125"
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= (hoverRating || rating)
                            ? 'fill-[#F59E0B] text-[#F59E0B]'
                            : 'text-white/20'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-[#FCD34D] font-bold ml-2">
                    {rating === 5
                      ? '5.0 ★ Exceptional! Highly Recommend'
                      : rating === 4
                      ? '4.0 ★ Very Good Food & Service'
                      : rating === 3
                      ? '3.0 ★ Good'
                      : 'Needs Improvement'}
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#FAF5EC]/80 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shaheer K. / Dr. Anoop"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EA580C]"
                />
              </div>

              {/* Location: Angadippuram, Thirurkad, etc. */}
              <div>
                <label className="block text-xs font-bold text-[#FAF5EC]/80 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Your Location / Area *</span>
                  <span className="text-[10px] text-[#F59E0B]">Angadippuram ⇄ Thirurkad Route</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['Angadippuram', 'Thirurkad', 'Valiyaveetilpadi', 'Other'] as const).map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setLocation(loc)}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        location === loc
                          ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-md'
                          : 'bg-[#0A0706] text-[#FAF5EC]/70 border-[#EA580C]/20 hover:border-[#EA580C]/40'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>

                {location === 'Other' && (
                  <input
                    type="text"
                    placeholder="Enter your town (e.g. Perinthalmanna, Mankada)"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    className="w-full mt-2 px-4 py-2 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#EA580C]"
                  />
                )}
              </div>

              {/* Favorite Dish Ordered */}
              <div>
                <label className="block text-xs font-bold text-[#FAF5EC]/80 uppercase tracking-wider mb-1.5">
                  Dish Ordered or Recommended
                </label>
                <input
                  type="text"
                  placeholder="e.g. Shawaya Chicken with Bishawari Rice (Half Portion ₹340)"
                  value={dishRecommended}
                  onChange={(e) => setDishRecommended(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EA580C] mb-2"
                />

                {/* Quick Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {popularDishes.slice(0, 4).map((dish) => (
                    <button
                      key={dish}
                      type="button"
                      onClick={() => setDishRecommended(dish)}
                      className="text-[10px] px-2 py-1 rounded-lg bg-[#140D09] hover:bg-[#20150F] text-[#FAF5EC]/70 hover:text-[#FCD34D] border border-white/10 transition-colors"
                    >
                      + {dish}
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-bold text-[#FAF5EC]/80 uppercase tracking-wider mb-1.5">
                  Your Review / Experience *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell others what you loved about the food, flame flavor, delivery speed, or dining atmosphere..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EA580C] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 fire-btn-primary text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95"
              >
                <Flame className="w-4 h-4 text-amber-200" />
                <span>Submit Customer Review</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
