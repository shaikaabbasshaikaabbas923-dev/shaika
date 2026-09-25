/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MessageSquare, Phone, Truck, Flame } from 'lucide-react';
import { MenuItem, CartItem, Review } from './types';
import { INITIAL_REVIEWS, RESTAURANT_INFO } from './data/restaurantData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { SpecialOffer } from './components/SpecialOffer';
import { RestaurantShowcase } from './components/RestaurantShowcase';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WriteReviewModal } from './components/WriteReviewModal';
import { ItemQuickViewModal } from './components/ItemQuickViewModal';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('yamama_customer_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge custom reviews on top of INITIAL_REVIEWS if unique
          const savedIds = new Set(parsed.map((r: Review) => r.id));
          const rest = INITIAL_REVIEWS.filter(r => !savedIds.has(r.id));
          return [...parsed, ...rest];
        }
      }
    } catch (e) {
      console.error('Error loading saved reviews', e);
    }
    return INITIAL_REVIEWS;
  });
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);

  // Cart total count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Add item to cart
  const handleAddToCart = (item: MenuItem, quantityToAdd = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.item.id === item.id
            ? { ...ci, quantity: ci.quantity + quantityToAdd }
            : ci
        );
      }
      return [...prevCart, { item, quantity: quantityToAdd }];
    });
  };

  // Add special combo deal to cart and open drawer
  const handleOrderSpecial = (specialItem: MenuItem) => {
    handleAddToCart(specialItem, 1);
    setIsCartOpen(true);
  };

  // Update quantity in cart
  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
    } else {
      setCart((prev) =>
        prev.map((ci) => (ci.item.id === itemId ? { ...ci, quantity: newQty } : ci))
      );
    }
  };

  // Clear cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Scroll helpers
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 90;
      const pos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: pos - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleAddNewReview = (newReview: Review) => {
    setReviews((prev) => {
      const updated = [newReview, ...prev];
      try {
        localStorage.setItem('yamama_customer_reviews', JSON.stringify(updated));
      } catch (e) {
        console.error('Error saving review', e);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0706] text-[#FAF5EC] flex flex-col font-sans selection:bg-[#EA580C] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={() => {
          if (cart.length > 0) {
            setIsCartOpen(true);
          } else {
            scrollToSection('speciality');
          }
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero / Overview Section with Fire Element & Ambient Embers */}
        <Hero
          onOrderNow={() => {
            if (cart.length > 0) {
              setIsCartOpen(true);
            } else {
              scrollToSection('speciality');
            }
          }}
          onViewMenu={() => scrollToSection('menu')}
        />

        {/* 2. Quick Highlights Section */}
        <Highlights />

        {/* 3. Speciality Section: Half Portion Combo ₹340, Full ₹660, Quarter ₹180 */}
        <SpecialOffer onOrderSpecial={handleOrderSpecial} />

        {/* 4. Restaurant Showcase: Real Building & Official Printed Menu Card */}
        <RestaurantShowcase />

        {/* 5. Complete Food & Mojito Menu Section */}
        <MenuSection
          onAddToCart={(item) => handleAddToCart(item, 1)}
          onQuickViewItem={(item) => setQuickViewItem(item)}
        />

        {/* 6. Customer Reviews Section */}
        <ReviewsSection
          reviews={reviews}
          onOpenWriteReview={() => setIsWriteReviewOpen(true)}
        />

        {/* 7. Photos / Gallery Section */}
        <GallerySection />

        {/* 8. About Yamama Shawaya */}
        <AboutSection />

        {/* 9. Why Choose Us */}
        <WhyChooseUs />

        {/* 10. Call-to-Action */}
        <CallToAction
          onOrderNow={() => {
            if (cart.length > 0) {
              setIsCartOpen(true);
            } else {
              scrollToSection('speciality');
            }
          }}
          onContactUs={() => scrollToSection('contact')}
        />

        {/* 11. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Enquiry & Call Quick Action Bar (Bottom-Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Free Home Delivery Micro-pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0706]/95 backdrop-blur-md border border-[#EA580C]/40 text-[11px] font-bold text-[#FCD34D] shadow-2xl">
          <Truck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Free Home Delivery (12pm - 12am)</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Direct Call Button */}
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="w-12 h-12 rounded-full bg-[#18110D] hover:bg-[#251811] text-[#FCD34D] border border-[#EA580C]/40 shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
            title={`Call ${RESTAURANT_INFO.phone}`}
            aria-label="Call Restaurant"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Direct WhatsApp Enquiry Button with Ember Glow */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Yamama Shawaya Angadippuram, I would like to make an enquiry or place an order.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-4 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-2xl shadow-emerald-950/60 border border-emerald-500/30 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            title="WhatsApp Enquiry"
            aria-label="WhatsApp Enquiry"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp Enquiry</span>
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping sm:hidden" />
          </a>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Write a Review Modal */}
      <WriteReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        onSubmitReview={handleAddNewReview}
      />

      {/* Item Quick View Modal */}
      <ItemQuickViewModal
        item={quickViewItem}
        onClose={() => setQuickViewItem(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
