import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, MessageSquare, Clock, MapPin, Truck, Flame } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { YamamaLogo } from './YamamaLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    total: number;
    itemsCount: number;
  } | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const deliveryFee = 0; // FREE home delivery!
  const total = subtotal + deliveryFee;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || (orderType === 'delivery' && !deliveryAddress)) {
      return;
    }

    const randomId = `YM-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrder({
      orderId: randomId,
      total,
      itemsCount: cart.reduce((sum, i) => sum + i.quantity, 0),
    });
  };

  const sendWhatsAppOrder = () => {
    if (!confirmedOrder) return;
    const itemsList = cart
      .map((i) => `• ${i.quantity}x ${i.item.name} (₹${i.item.price * i.quantity})`)
      .join('\n');

    const message = `*NEW ORDER FROM YAMAMA SHAWAYA ANGADIPPURAM*\nOrder Ref: #${confirmedOrder.orderId}\nCustomer: ${customerName} (${customerPhone})\nType: ${orderType.toUpperCase()} (Free Delivery)\n${orderType === 'delivery' ? `Delivery Address: ${deliveryAddress}\n` : ''}${orderNotes ? `Special Request: ${orderNotes}\n` : ''}\n*ITEMS:*\n${itemsList}\n\n*Total Amount: ₹${confirmedOrder.total}*`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCloseAndReset = () => {
    if (confirmedOrder) {
      onClearCart();
      setConfirmedOrder(null);
      setIsCheckingOut(false);
      setCustomerName('');
      setCustomerPhone('');
      setDeliveryAddress('');
      setOrderNotes('');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleCloseAndReset}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-gradient-to-b from-[#160E09] via-[#100A07] to-[#0A0706] border-l border-[#EA580C]/30 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-[#EA580C]/20 flex items-center justify-between bg-[#1A110C]">
            <div className="flex items-center gap-2.5">
              <YamamaLogo size="xs" />
              <div>
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-1.5">
                  <span>Your Order</span>
                  <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
                </h3>
                <span className="text-xs text-white/50">
                  {cart.length === 0 ? 'Empty bag' : `${cart.length} items`} • Angadippuram Outlet
                </span>
              </div>
            </div>

            <button
              onClick={handleCloseAndReset}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {confirmedOrder ? (
              /* Success / WhatsApp Dispatch State */
              <div className="py-8 text-center space-y-4 animate-scaleUp">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FCD34D]">
                    Order #{confirmedOrder.orderId}
                  </span>
                  <h4 className="font-display font-black text-2xl text-white mt-1">
                    Order Submitted!
                  </h4>
                  <p className="text-xs text-[#FAF5EC]/70 mt-1 max-w-xs mx-auto">
                    Click below to dispatch your order confirmation directly to our restaurant kitchen on WhatsApp.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0A0706] border border-[#EA580C]/30 text-left space-y-2 text-xs">
                  <div className="flex justify-between text-white/70">
                    <span>Order Type:</span>
                    <span className="font-bold text-white capitalize">{orderType} (Free Delivery)</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Customer:</span>
                    <span className="font-bold text-white">{customerName}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Contact:</span>
                    <span className="font-bold text-white tabular-nums">{customerPhone}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-white/70">
                      <span>Address:</span>
                      <span className="font-bold text-white truncate max-w-[200px]">{deliveryAddress}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-sm text-white">
                    <span>Total Amount:</span>
                    <span className="text-[#FBBF24] tabular-nums">₹ {confirmedOrder.total}</span>
                  </div>
                </div>

                <button
                  onClick={sendWhatsAppOrder}
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/30"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>

                <div className="text-xs text-white/50 space-y-1">
                  <p>Or call our counter to expedite:</p>
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-[#FCD34D] font-bold block tabular-nums">
                    {RESTAURANT_INFO.phone} / {RESTAURANT_INFO.phone2}
                  </a>
                </div>
              </div>
            ) : cart.length === 0 ? (
              /* Empty Cart State */
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#18110D] border border-[#EA580C]/25 flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-8 h-8 text-[#EA580C]" />
                </div>
                <h4 className="font-display font-bold text-base text-white">Your bag is empty</h4>
                <p className="text-xs text-[#FAF5EC]/50 mt-1 max-w-xs mx-auto">
                  Add some flame-roasted shawaya, Bishawari rice combos, or Bene Tibi mojitos to get started!
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 fire-btn-primary text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Form */
              <form id="checkout-form" onSubmit={handleCompleteOrder} className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between pb-2 border-b border-[#EA580C]/20">
                  <h4 className="font-display text-sm font-bold text-white">Checkout Details</h4>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#FCD34D] hover:underline cursor-pointer"
                  >
                    Back to items
                  </button>
                </div>

                {/* Pickup / Delivery Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#0A0706] border border-[#EA580C]/20 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      orderType === 'delivery'
                        ? 'bg-gradient-to-r from-[#EA580C] to-[#DC2626] text-white shadow-md'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Free Home Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      orderType === 'pickup'
                        ? 'bg-gradient-to-r from-[#EA580C] to-[#DC2626] text-white shadow-md'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Restaurant Pickup
                  </button>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#EA580C]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/70 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9747362101"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#EA580C] tabular-nums"
                  />
                </div>

                {/* Delivery Address */}
                {orderType === 'delivery' && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/70 mb-1">
                      Delivery Address in Angadippuram *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="House / Flat name, Street, Landmark..."
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#EA580C] resize-none"
                    />
                  </div>
                )}

                {/* Cooking Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#FAF5EC]/70 mb-1">
                    Special Cooking / Delivery Notes
                  </label>
                  <input
                    type="text"
                    placeholder="Extra Toum garlic paste, spicy crisp, etc."
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0A0706] border border-[#EA580C]/25 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </form>
            ) : (
              /* Itemized List */
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs pb-1 border-b border-white/5">
                  <span className="text-white/60">Selected Items ({cart.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-[#EA580C] hover:text-red-400 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Bag</span>
                  </button>
                </div>

                {cart.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="p-3 rounded-xl bg-[#140D09] border border-[#EA580C]/20 flex items-center gap-3"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-lg object-cover shrink-0 bg-[#1C120C]"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-xs text-white truncate">
                        {cartItem.item.name}
                      </h5>
                      <span className="text-[11px] text-[#FCD34D] font-bold block tabular-nums">
                        ₹{cartItem.item.price} each
                      </span>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-1.5 bg-[#0A0706] rounded-lg p-1 border border-[#EA580C]/30 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                        className="w-5 h-5 flex items-center justify-center text-white/70 hover:text-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-white w-4 text-center tabular-nums">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                        className="w-5 h-5 flex items-center justify-center text-white/70 hover:text-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-black text-white w-12 text-right shrink-0 tabular-nums">
                      ₹{cartItem.item.price * cartItem.quantity}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer Actions */}
          {!confirmedOrder && cart.length > 0 && (
            <div className="p-5 border-t border-[#EA580C]/20 bg-[#18110D] space-y-3">
              {/* Order Calculation */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#FAF5EC]/70">
                  <span>Subtotal:</span>
                  <span className="font-bold text-white tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#FAF5EC]/70">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3 h-3 text-emerald-400" />
                    <span>Home Delivery Fee:</span>
                  </span>
                  <span className="font-bold text-emerald-400 uppercase">FREE</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between font-extrabold text-base text-white">
                  <span>Grand Total:</span>
                  <span className="text-[#FBBF24] tabular-nums">₹{total}</span>
                </div>
              </div>

              {/* CTAs */}
              {isCheckingOut ? (
                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full py-3.5 fire-btn-primary text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Flame className="w-4 h-4 text-amber-200" />
                  <span>Confirm Order (Pay on Delivery)</span>
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="flex-1 py-3.5 fire-btn-primary text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
