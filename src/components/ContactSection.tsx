import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, Check, ExternalLink, Navigation, Truck, Sparkles, Flame, Compass, Car, CornerDownRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formLocation, setFormLocation] = useState<'Angadippuram' | 'Thirurkad' | 'Other'>('Angadippuram');
  const [formType, setFormType] = useState<'Home Delivery' | 'Table Reservation' | 'Party / Bulk Order'>('Home Delivery');
  const [formMessage, setFormMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    // Direct to WhatsApp with rich pre-formatted inquiry text
    const text = encodeURIComponent(
      `Hello Yamama Shawaya!\n*Inquiry Type:* ${formType}\n*Location:* ${formLocation}\n*Name:* ${formName}\n*Phone:* ${formPhone}\n*Details:* ${formMessage || 'N/A'}`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${text}`, '_blank');

    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormName('');
      setFormPhone('');
      setFormMessage('');
    }, 4000);
  };

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Yamama Shawaya Oradampalam Valiyaveetilpadi Calicut Road Angadippuram Thirurkad Kerala 679321')}`;
  const directionsFromAngadippuramUrl = `https://www.google.com/maps/dir/Angadippuram,+Kerala/Yamama+Shawaya+Valiyaveetilpadi+Angadippuram`;
  const directionsFromThirurkadUrl = `https://www.google.com/maps/dir/Thirurkad,+Kerala/Yamama+Shawaya+Valiyaveetilpadi+Angadippuram`;

  return (
    <section id="contact" className="py-20 bg-[#0A0706] relative border-t border-[#EA580C]/20 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#EA580C]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#C2410C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160E09] border border-[#EA580C]/35 text-xs font-bold text-[#FCD34D] uppercase tracking-wider mb-3 shadow-lg">
            <YamamaLogo size="xs" />
            <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>Angadippuram ⇄ Thirurkad Route • Calicut Road</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            LOCATION & <span className="flame-gradient-text">HOW TO REACH US</span>
          </h2>

          <p className="mt-2 text-base text-[#FAF5EC]/75">
            Conveniently situated on the main Calicut Road connecting Angadippuram and Thirurkad. Dine-in with ample parking or order free home delivery.
          </p>
        </div>

        {/* Direction Cards: Angadippuram and Thirurkad Guides */}
        <div className="mb-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#18110D] via-[#140D09] to-[#18110D] border border-[#EA580C]/30 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EA580C]/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0A0706] border border-[#EA580C]/40 flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 text-[#EA580C] animate-spin-slow" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider block">
                    Travel Directions
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                    Angadippuram ⇄ Thirurkad Direction Guide
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 text-xs text-white/80 font-medium flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Ample Car Parking Available</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Delivery: Angadippuram & Thirurkad</span>
                </span>
              </div>
            </div>

            {/* 2 Road Direction Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Direction from Angadippuram */}
              <div className="p-6 rounded-2xl bg-[#0E0906] border border-[#EA580C]/25 hover:border-[#EA580C]/60 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C]/15 text-[#FCD34D] border border-[#EA580C]/30 text-xs font-bold uppercase tracking-wider">
                      <CornerDownRight className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>From Angadippuram</span>
                    </span>
                    <span className="text-xs font-bold text-white/70 bg-black/50 px-2.5 py-1 rounded-lg">
                      ~2.5 km (4-5 mins)
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white group-hover:text-[#FBBF24] transition-colors">
                    Angadippuram Town / Railway Station ➔ Yamama
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-[#FAF5EC]/75 leading-relaxed">
                    Head out from Angadippuram Junction on the <strong>Calicut Road towards Thirurkad</strong>. Travel approximately <strong>2.5 km</strong>. Yamama Shawaya is situated prominently on the <strong>right side</strong> at <strong>Oradampalam - Valiyaveetilpadi</strong> with easy roadside car parking.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#FAF5EC]/50 font-medium">Landmark: Valiyaveetilpadi Stop</span>
                  <a
                    href={directionsFromAngadippuramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1F140E] hover:bg-[#2C1D14] text-[#FCD34D] border border-[#EA580C]/35 text-xs font-bold transition-all shadow-md"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Navigate from Angadippuram</span>
                  </a>
                </div>
              </div>

              {/* Direction from Thirurkad */}
              <div className="p-6 rounded-2xl bg-[#0E0906] border border-[#EA580C]/25 hover:border-[#EA580C]/60 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C]/15 text-[#FCD34D] border border-[#EA580C]/30 text-xs font-bold uppercase tracking-wider">
                      <CornerDownRight className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>From Thirurkad</span>
                    </span>
                    <span className="text-xs font-bold text-white/70 bg-black/50 px-2.5 py-1 rounded-lg">
                      ~3.5 km (5-6 mins)
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white group-hover:text-[#FBBF24] transition-colors">
                    Thirurkad Junction ➔ Yamama
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-[#FAF5EC]/75 leading-relaxed">
                    From Thirurkad, drive along the <strong>Calicut Road towards Angadippuram</strong>. Continue for approx <strong>3.5 km</strong>. You will reach <strong>Oradampalam - Valiyaveetilpadi</strong>, and Yamama Shawaya will be on your <strong>left side</strong> with luminous red & black facade and live rotisserie grill.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#FAF5EC]/50 font-medium">Landmark: Oradampalam Roadside</span>
                  <a
                    href={directionsFromThirurkadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1F140E] hover:bg-[#2C1D14] text-[#FCD34D] border border-[#EA580C]/35 text-xs font-bold transition-all shadow-md"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Navigate from Thirurkad</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information & Interactive Quick Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Details & Direct Call Lines */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Action Buttons: Phone 1, Phone 2 & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Primary Call */}
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="p-5 rounded-2xl bg-[#140D09] border border-[#EA580C]/30 hover:border-[#EA580C]/70 transition-all flex items-center gap-4 group shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A0706] border border-[#EA580C]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-[#EA580C]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider block">
                    Direct Line 1 (Orders)
                  </span>
                  <span className="font-black text-lg text-white group-hover:text-[#FBBF24] transition-colors tabular-nums">
                    {RESTAURANT_INFO.phone}
                  </span>
                  <span className="text-[11px] text-emerald-400 block mt-0.5">● Tap to Call</span>
                </div>
              </a>

              {/* Secondary Call */}
              <a
                href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                className="p-5 rounded-2xl bg-[#140D09] border border-[#EA580C]/30 hover:border-[#EA580C]/70 transition-all flex items-center gap-4 group shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A0706] border border-[#EA580C]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-[#EA580C]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider block">
                    Direct Line 2 (Delivery)
                  </span>
                  <span className="font-black text-lg text-white group-hover:text-[#FBBF24] transition-colors tabular-nums">
                    {RESTAURANT_INFO.phone2}
                  </span>
                  <span className="text-[11px] text-emerald-400 block mt-0.5">● Tap to Call</span>
                </div>
              </a>
            </div>

            {/* Direct WhatsApp Enquiry Card */}
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya, I am reaching out from the Angadippuram - Thirurkad area for an order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-[#140D09] to-emerald-950/70 border border-emerald-500/40 hover:border-emerald-400 transition-all flex items-center justify-between group shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 text-white shadow-lg group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp Orders & Queries
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded uppercase">Instant</span>
                  </div>
                  <p className="text-xs text-[#FAF5EC]/70 mt-0.5">
                    WhatsApp kitchen manager: +91 9747362101
                  </p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Detailed Address Card */}
            <div className="p-6 rounded-2xl bg-[#140D09] border border-[#EA580C]/25 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A0706] border border-[#EA580C]/35 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#EA580C]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider block">
                    Restaurant Address
                  </span>
                  <h4 className="font-display font-bold text-lg text-white mt-1">
                    YAMAMA SHAWAYA
                  </h4>
                  <p className="text-sm text-[#FAF5EC]/90 mt-1 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-[#FAF5EC]/65 mt-1">
                    {RESTAURANT_INFO.addressDetails}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={googleMapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F140E] hover:bg-[#2C1D14] text-[#FCD34D] border border-[#EA580C]/35 text-xs font-bold transition-all shadow-md"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>Open Live in Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>

                    <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/50 text-xs text-white/70">
                      <Truck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Free Delivery: Angadippuram & Thirurkad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Timings Info Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Working Hours */}
              <div className="p-5 rounded-2xl bg-[#140D09] border border-[#EA580C]/25 shadow-xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0A0706] border border-[#EA580C]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#FAF5EC]/50 uppercase tracking-wider block">
                    Working Hours
                  </span>
                  <span className="text-sm font-bold text-white block mt-0.5">
                    12:00 PM – 12:00 AM
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold block">
                    Open Daily for Lunch & Dinner
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#140D09] border border-[#EA580C]/25 shadow-xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0A0706] border border-[#EA580C]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#EA580C]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#FAF5EC]/50 uppercase tracking-wider block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-xs font-bold text-white hover:text-[#FBBF24] transition-colors block mt-0.5 truncate max-w-[160px]"
                    title={RESTAURANT_INFO.email}
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                  <span className="text-[11px] text-[#FAF5EC]/50 block">Inquiries & Feedback</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Quick Booking Form */}
          <div className="lg:col-span-6 bg-[#140D09] rounded-3xl border border-[#EA580C]/30 p-7 sm:p-9 shadow-2xl relative">
            <div className="flex items-center justify-between pb-5 border-b border-[#EA580C]/15 mb-6">
              <div>
                <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider block">
                  Direct Kitchen Connect
                </span>
                <h3 className="font-display font-black text-2xl text-white">
                  Send Instant Inquiry
                </h3>
              </div>
              <YamamaLogo size="sm" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type of Inquiry */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/70 mb-2">
                  What are you looking for?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Home Delivery', 'Table Reservation', 'Party / Bulk Order'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormType(type)}
                      className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        formType === type
                          ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white border-[#EA580C] shadow-md'
                          : 'bg-[#0A0706] text-[#FAF5EC]/70 border-[#EA580C]/20 hover:border-[#EA580C]/50'
                      }`}
                    >
                      {type === 'Home Delivery' ? 'Delivery' : type === 'Table Reservation' ? 'Table' : 'Party'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location: Angadippuram or Thirurkad */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/70 mb-1.5">
                  Your Area / Location
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Angadippuram', 'Thirurkad', 'Other'] as const).map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setFormLocation(loc)}
                      className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        formLocation === loc
                          ? 'bg-[#1F140E] text-[#FCD34D] border-[#EA580C]/60 shadow-sm'
                          : 'bg-[#0A0706] text-[#FAF5EC]/60 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/70 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mohammed Farhan"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C]/50 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/70 mb-1.5">
                  Your Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9747362101"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C]/50 transition-colors tabular-nums"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/70 mb-1.5">
                  Order Details or Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify Shawaya combo (Half ₹340, Full ₹660, Quarter ₹180), number of guests, or address details..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C]/50 transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={formSent}
                className="w-full py-4 fire-btn-primary text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl disabled:opacity-50 hover:scale-[1.01] active:scale-95"
              >
                {formSent ? (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    <span>Inquiry Sent! Opening WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-amber-200" />
                    <span>Send Inquiry to Kitchen via WhatsApp</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-[#FAF5EC]/50 mt-2">
                Clicking will open WhatsApp directly with your request details pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
