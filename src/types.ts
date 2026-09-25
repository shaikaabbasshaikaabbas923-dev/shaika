export type MenuCategory = 
  | 'All'
  | 'Shawaya Combos'
  | 'Shawaya & Kubus'
  | 'Bishawari Rice'
  | 'Mojitos (Bene Tibi)'
  | 'Mojitos'
  | 'Grills & Rolls'
  | 'Sides & Dips'
  | 'Special Items';

export interface MenuItem {
  id: string;
  name: string;
  arabicName?: string;
  category: MenuCategory;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  isSpecial?: boolean;
  rating?: number;
  portionSize?: string;
  badge?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  comment?: string;
  verified?: boolean;
  date: string;
  role?: string;
  dishRecommended?: string;
  location?: string;
  isNew?: boolean;
  category?: 'Shawaya' | 'Family' | 'Delivery' | 'Mojito' | 'General';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Kitchen' | 'Ambiance' | 'Restaurant';
  image: string;
  description: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  motto?: string;
  logo?: string;
  phone: string;
  phoneRaw: string;
  phone2?: string;
  phone2Raw?: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: string;
  addressDetails: string;
  menuCardImage?: string;
  restaurantExteriorImage?: string;
  currencySymbol?: string;
  freeDelivery?: boolean;
  openingHours: {
    timing: string;
    weekdays: string;
    weekends: string;
    ramadanSpecial?: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    whatsapp: string;
    youtube: string;
  };
}
