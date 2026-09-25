import { MenuItem, Review, GalleryItem, RestaurantInfo } from '../types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: 'YAMAMA SHAWAYA',
  tagline: 'Fresh. Juicy. Grilled to Perfection.',
  motto: 'Refill Your Energy',
  logo: '/src/assets/images/yamama_shawaya_logo_1790233261059.jpg',
  phone: '9747 36 21 01',
  phoneRaw: '919747362101',
  phone2: '9747 36 21 02',
  phone2Raw: '919747362102',
  whatsapp: '+91 97473 62101',
  whatsappRaw: '919747362101',
  email: 'yamamashawaya@gmail.com',
  address: 'Oradampalam-Valiyaveetilpadi, Calicut Road (Angadippuram – Thirurkad Route), Malappuram, Kerala - 679321',
  addressDetails: 'Located on the main Angadippuram – Thirurkad Road (Calicut Road) near Valiyaveetilpadi, Oradampalam. Easily accessible from both Angadippuram and Thirurkad with spacious car parking & AC family dining.',
  menuCardImage: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
  restaurantExteriorImage: '/src/assets/images/yamama_restaurant_exterior_1790246150837.jpg',
  currencySymbol: '₹',
  freeDelivery: true,
  openingHours: {
    timing: '12:00 PM to 12:00 AM',
    weekdays: 'Daily: 12:00 PM – 12:00 AM (Midnight)',
    weekends: 'Daily: 12:00 PM – 12:00 AM (Midnight)',
    ramadanSpecial: 'Special Iftar & Late Night dining open during seasons'
  },
  socialLinks: {
    instagram: 'https://instagram.com/yamamashawaya',
    facebook: 'https://facebook.com/yamamashawaya',
    whatsapp: 'https://wa.me/919747362101',
    youtube: 'https://youtube.com/@yamamashawaya'
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // --- Shawaya Combos (Our Speciality) ---
  {
    id: 'shawaya-rice-half',
    name: 'Shawaya Chicken with Bishawari Rice (Half Portion)',
    arabicName: 'شواية نصف دجاج مع أرز بيشاوري',
    category: 'Shawaya Combos',
    description: 'Our most popular speciality! Half portion flame-roasted juicy Shawaya chicken served on fragrant spiced Bishawari rice, fresh Kubus, homemade Toum garlic paste, and spicy salad.',
    price: 340,
    originalPrice: 380,
    image: '/src/assets/images/yamama_special_platter_1790232732880.jpg',
    isSpecial: true,
    isPopular: true,
    rating: 5.0,
    portionSize: 'Half Portion • Serves 1-2',
    badge: '⭐ Speciality Pick'
  },
  {
    id: 'shawaya-rice-full',
    name: 'Shawaya Chicken with Bishawari Rice (Full Portion)',
    arabicName: 'شواية دجاج كاملة مع أرز بيشاوري',
    category: 'Shawaya Combos',
    description: 'Whole flame-roasted chicken infused with our 14-spice secret marinade, served atop a generous platter of aromatic Bishawari rice, 3 fresh Kubus, garlic toum, and pickled chillies.',
    price: 660,
    originalPrice: 720,
    image: '/src/assets/images/hero_shawaya_chicken_1790232717345.jpg',
    isSpecial: true,
    isPopular: true,
    rating: 5.0,
    portionSize: 'Full Portion • Serves 3-4',
    badge: 'Feast Combo'
  },
  {
    id: 'shawaya-rice-quarter',
    name: 'Shawaya Chicken with Bishawari Rice (Quarter Portion)',
    arabicName: 'شواية ربع دجاج مع أرز بيشاوري',
    category: 'Shawaya Combos',
    description: 'Crispy succulent quarter chicken portion served with seasoned Bishawari basmati rice, warm Kubus, authentic garlic dip, and salad. Perfect personal hearty lunch or dinner.',
    price: 180,
    originalPrice: 200,
    image: '/src/assets/images/hero_shawaya_chicken_1790232717345.jpg',
    isSpecial: true,
    isPopular: true,
    rating: 4.9,
    portionSize: 'Quarter Portion • Serves 1',
    badge: 'Popular Single'
  },

  // --- Shawaya Chicken with Kubus ---
  {
    id: 'shawaya-kubus-full',
    name: 'Shawaya Chicken with Kubus (Full)',
    arabicName: 'شواية دجاج كاملة مع خبز كبوس',
    category: 'Shawaya & Kubus',
    description: 'Whole flame-grilled chicken roasted to golden tender perfection, accompanied by 4 freshly baked soft Kubus, signature toum garlic sauce, and crunchy pickled vegetables.',
    price: 460,
    image: '/src/assets/images/hero_shawaya_chicken_1790232717345.jpg',
    isPopular: true,
    rating: 4.9,
    portionSize: 'Full Portion • 4 Kubus'
  },
  {
    id: 'shawaya-kubus-half',
    name: 'Shawaya Chicken with Kubus (Half)',
    arabicName: 'نصف دجاج شواية مع خبز كبوس',
    category: 'Shawaya & Kubus',
    description: 'Half rotisserie spiced chicken served with 2 warm Kubus flatbreads, homemade garlic paste, and fresh seasoned salad.',
    price: 240,
    image: '/src/assets/images/hero_shawaya_chicken_1790232717345.jpg',
    isPopular: true,
    rating: 4.8,
    portionSize: 'Half Portion • 2 Kubus'
  },
  {
    id: 'shawaya-kubus-quarter',
    name: 'Shawaya Chicken with Kubus (Quarter)',
    arabicName: 'ربع دجاج شواية مع خبز كبوس',
    category: 'Shawaya & Kubus',
    description: 'Single portion quarter tender chicken with crispy skin, served with 1 fresh Kubus, garlic dip, and pickled turnip slice.',
    price: 130,
    image: '/src/assets/images/hero_shawaya_chicken_1790232717345.jpg',
    rating: 4.8,
    portionSize: 'Quarter Portion • 1 Kubus'
  },

  // --- Bishawari Rice Only ---
  {
    id: 'rice-bishawari-full',
    name: 'Bishawari Rice Only (Full Portion)',
    arabicName: 'أرز بيشاوري كامل فاخر',
    category: 'Bishawari Rice',
    description: 'Family bowl of long-grain aged basmati rice simmered in saffron, cardamom, cloves, and chicken bone stock, topped with fried onions and dry fruits.',
    price: 300,
    image: '/src/assets/images/yamama_special_platter_1790232732880.jpg',
    rating: 4.9,
    portionSize: 'Full Sharing Plate'
  },
  {
    id: 'rice-bishawari-half',
    name: 'Bishawari Rice Only (Half Portion)',
    arabicName: 'أرز بيشاوري نصف صحن',
    category: 'Bishawari Rice',
    description: 'Steaming bowl of fragrant Bishawari spiced basmati rice, rich in gentle aroma and authentic Northwest Frontier spices.',
    price: 160,
    image: '/src/assets/images/yamama_special_platter_1790232732880.jpg',
    rating: 4.8,
    portionSize: 'Half Plate'
  },
  {
    id: 'rice-bishawari-quarter',
    name: 'Bishawari Rice Only (Quarter Portion)',
    arabicName: 'أرز بيشاوري ربع صحن',
    category: 'Bishawari Rice',
    description: 'Individual portion of fragrant aromatic Bishawari rice. Perfect side dish with any Shawaya or grill order.',
    price: 90,
    image: '/src/assets/images/yamama_special_platter_1790232732880.jpg',
    rating: 4.7,
    portionSize: 'Quarter Plate'
  },

  // --- Mojitos (Bene Tibi Premium) ---
  {
    id: 'mojito-bene-greenapple',
    name: 'Bene Tibi Green Apple Mojito',
    arabicName: 'موهيتو تفاح أخضر بيني تيبي',
    category: 'Mojitos (Bene Tibi)',
    description: 'Crisp tangy green apple crush shaken with fresh garden mint, Persian lime juice, and bubbling sparkling soda.',
    price: 120,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    isPopular: true,
    rating: 4.9,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-bene-passionfruit',
    name: 'Bene Tibi Passion Fruit Mojito',
    arabicName: 'موهيتو باشون فروت فاخر',
    category: 'Mojitos (Bene Tibi)',
    description: 'Exotic tropical passion fruit pulp muddled with crushed ice, mint leaves, and refreshing fizz.',
    price: 120,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    isPopular: true,
    rating: 5.0,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-bene-watermelon',
    name: 'Bene Tibi Watermelon Mojito',
    arabicName: 'موهيتو بطيخ بيني تيبي',
    category: 'Mojitos (Bene Tibi)',
    description: 'Sweet fresh watermelon essence blended with refreshing mint, lemon wedge, and sparkling water.',
    price: 120,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.8,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-bene-blueberry',
    name: 'Bene Tibi Blueberry Mojito',
    arabicName: 'موهيتو توت أزرق',
    category: 'Mojitos (Bene Tibi)',
    description: 'Deep antioxidant rich blueberry reduction with crushed mint, lime, and chilled fizz.',
    price: 120,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.9,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-bene-strawberry',
    name: 'Bene Tibi Strawberry Mojito',
    arabicName: 'موهيتو فراولة طازجة',
    category: 'Mojitos (Bene Tibi)',
    description: 'Juicy summer strawberry puree with lime zests and aromatic garden mint.',
    price: 120,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.8,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-bene-blackberry',
    name: 'Bene Tibi Blackberry Mojito',
    arabicName: 'موهيتو بلاك بيري',
    category: 'Mojitos (Bene Tibi)',
    description: 'Rich dark blackberry nectar muddled with ice, lime, and carbonated refreshment.',
    price: 120,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.8,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-bene-mint',
    name: 'Bene Tibi Refreshing Mint Mojito',
    arabicName: 'موهيتو نعناع طازج',
    category: 'Mojitos (Bene Tibi)',
    description: 'Intense fresh crushed hill mint, concentrated citrus lemon, and sparkling club soda.',
    price: 120,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.9,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-bene-rose',
    name: 'Bene Tibi Persian Rose Mojito',
    arabicName: 'موهيتو الورد الطبيعي',
    category: 'Mojitos (Bene Tibi)',
    description: 'Delicate floral damask rose syrup infused with lemon, fresh mint, and cracked ice.',
    price: 120,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.7,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-bene-mango',
    name: 'Bene Tibi Alphonsa Mango Mojito',
    arabicName: 'موهيتو مانجو فاخر',
    category: 'Mojitos (Bene Tibi)',
    description: 'Ripe Alphonso mango sweet nectar mixed with sour lemon, cool mint, and fizz.',
    price: 120,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.9,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-bene-mumbai',
    name: 'Bene Tibi Mumbai Special Mojito',
    arabicName: 'موهيتو مومباي المميز الخاص',
    category: 'Mojitos (Bene Tibi)',
    description: 'Our top signature royal refresher! Layered tropical exotic syrups, zesty spices, chia seeds, and citrus garnish.',
    price: 220,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    isSpecial: true,
    isPopular: true,
    rating: 5.0,
    portionSize: 'Tall Glass • Chef Special',
    badge: 'Signature Refresher'
  },

  // --- Classic Mojitos ---
  {
    id: 'mojito-classic-mint',
    name: 'Classic Mint Mojito',
    arabicName: 'موهيتو نعناع كلاسيك',
    category: 'Mojitos',
    description: 'Crisp fresh mint leaves muddled with pure cane syrup, lime wedges, and chilled soda.',
    price: 80,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    isPopular: true,
    rating: 4.8,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-classic-watermelon',
    name: 'Classic Watermelon Mojito',
    arabicName: 'موهيتو بطيخ منعش',
    category: 'Mojitos',
    description: 'Cool thirst-quenching watermelon crush with lime and fresh mint.',
    price: 80,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.7,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-classic-passionfruit',
    name: 'Classic Passion Fruit Mojito',
    arabicName: 'موهيتو باشون فروت',
    category: 'Mojitos',
    description: 'Zesty passion fruit burst with aromatic mint leaves and crushed ice.',
    price: 80,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    isPopular: true,
    rating: 4.8,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-classic-blue',
    name: 'Classic Blue Mojito',
    arabicName: 'موهيتو كوراكاو الأزرق',
    category: 'Mojitos',
    description: 'Vibrant blue curacao citrus notes with cool mint, lemon slices, and sparkling soda.',
    price: 80,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    isPopular: true,
    rating: 4.9,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-classic-pineapple',
    name: 'Classic Pineapple Mojito',
    arabicName: 'موهيتو أناناس',
    category: 'Mojitos',
    description: 'Sweet tropical pineapple blend with citrus acidity and fresh garden mint.',
    price: 80,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.7,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-classic-greenapple',
    name: 'Classic Green Apple Mojito',
    arabicName: 'موهيتو تفاح أخضر',
    category: 'Mojitos',
    description: 'Tart granny smith green apple taste served ice-cold with lime and mint.',
    price: 80,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.7,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-classic-lichi',
    name: 'Classic Lichi Mojito',
    arabicName: 'موهيتو ليتشي حلو',
    category: 'Mojitos',
    description: 'Fragrant sweet litchi fruit infusion with crushed ice and sparkling soda.',
    price: 80,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.7,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-classic-strawberry',
    name: 'Classic Strawberry Mojito',
    arabicName: 'موهيتو فراولة كلاسيك',
    category: 'Mojitos',
    description: 'Muddled sweet strawberries with sour lemon and refreshing garden mint.',
    price: 80,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.7,
    portionSize: 'Chilled Glass'
  },
  {
    id: 'mojito-classic-kiwi',
    name: 'Classic Kiwi Mojito',
    arabicName: 'موهيتو كيوي منعش',
    category: 'Mojitos',
    description: 'Tangy fresh kiwi extract combined with mint leaves and effervescent bubbles.',
    price: 80,
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    rating: 4.7,
    portionSize: 'Chilled Glass'
  },

  // --- Grills & Rolls ---
  {
    id: 'shawarma-special-roll',
    name: 'Al Yamama Special Chicken Shawarma',
    arabicName: 'شاورما دجاج اليمامة المميزة',
    category: 'Grills & Rolls',
    description: 'Toasted rumali roll loaded with flame-shaved marinated chicken, fries, homemade garlic toum, and spicy green chilly glaze.',
    price: 120,
    image: '/src/assets/images/shawarma_wrap_close_1790232751688.jpg',
    isPopular: true,
    rating: 4.9,
    portionSize: 'Single Large Roll'
  },
  {
    id: 'grill-shish-tawook-plate',
    name: 'Charcoal Shish Tawook Skewers Plate',
    arabicName: 'صحن شيش طاووق على الفحم',
    category: 'Grills & Rolls',
    description: 'Tender yogurt & cardamom marinated chicken cubes grilled over hot coconut shell coals, served with 2 Kubus and garlic paste.',
    price: 260,
    image: '/src/assets/images/charcoal_grilled_skewers_1790232765106.jpg',
    isPopular: true,
    rating: 4.8,
    portionSize: 'Plate with Kubus'
  },

  // --- Sides & Dips ---
  {
    id: 'side-extra-kubus',
    name: 'Warm Fresh Kubus (Set of 3)',
    arabicName: 'خبز كبوس طازج (3 حبات)',
    category: 'Sides & Dips',
    description: 'Authentic oven-baked fluffy Arabic flatbread, freshly puffed and warm.',
    price: 30,
    isVegetarian: true,
    image: '/src/assets/images/yamama_special_platter_1790232732880.jpg',
    portionSize: '3 Pieces'
  },
  {
    id: 'side-garlic-toum',
    name: 'Homemade Garlic Toum Dip',
    arabicName: 'ثومية يمامة الخاصة الأصلية',
    category: 'Sides & Dips',
    description: 'Extra cup of our legendary whipped garlic and olive oil toum emulsion.',
    price: 30,
    isVegetarian: true,
    image: '/src/assets/images/yamama_special_platter_1790232732880.jpg',
    rating: 5.0,
    portionSize: 'Portion Cup'
  },
  {
    id: 'side-peri-fries',
    name: 'Spiced Peri Peri French Fries',
    arabicName: 'بطاطس مقلية بالبهارات',
    category: 'Sides & Dips',
    description: 'Crispy golden potato fries tossed in savory Middle Eastern peri-peri seasoning.',
    price: 90,
    isVegetarian: true,
    image: '/src/assets/images/yamama_special_platter_1790232732880.jpg',
    rating: 4.7,
    portionSize: 'Basket'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Muhammed Shafi',
    location: 'Angadippuram',
    rating: 5,
    text: 'Best Shawaya and Bishawari rice combo in Malappuram district! The chicken is so juicy, perfectly spiced, and the garlic paste is top notch. The peaceful dining atmosphere at Angadippuram is wonderful.',
    date: 'September 2026',
    dishRecommended: 'Shawaya Chicken with Bishawari Rice (Half Portion)',
    role: 'Verified Local Guest',
    category: 'Shawaya',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Dr. Anoop Nambiar',
    location: 'Thirurkad',
    rating: 5,
    text: 'Drove down with my family from Thirurkad on the Calicut Road. Just 5 minutes drive! Ample parking, very clean, warm and cozy ambience that gives total peace of mind. The Bene Tibi Passion Fruit Mojito and Full Combo are unbelievable value for money!',
    date: 'September 2026',
    dishRecommended: 'Shawaya with Bishawari Rice (Full) + Mojitos',
    role: 'Dine-in Family Guest',
    category: 'Family',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Fathima Zahra',
    location: 'Angadippuram',
    rating: 5,
    text: 'Free home delivery was super quick to our home in Angadippuram! The Shawaya chicken arrived piping hot with plenty of kubus and fresh toum dip. Their WhatsApp ordering is so convenient.',
    date: 'September 2026',
    dishRecommended: 'Shawaya with Kubus + Green Apple Mojito',
    role: 'Home Delivery Guest',
    category: 'Delivery',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Suhail K.T.',
    location: 'Thirurkad',
    rating: 5,
    text: 'Living in Thirurkad, Yamama Shawaya is our go-to evening dinner spot on the Angadippuram route. Clean preparation, friendly staff, and the true Arabic rotisserie flavor right here. The Mumbai Special Mojito is a must-try.',
    date: 'August 2026',
    dishRecommended: 'Mumbai Special Mojito & Bishawari Rice',
    role: 'Regular Patron',
    category: 'Mojito',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Rashid V.P.',
    location: 'Valiyaveetilpadi, Angadippuram',
    rating: 5,
    text: 'The Half Portion Shawaya combo at ₹340 is the undisputed best value meal around. Chicken is succulent right to the bone with crisp charred skin, and the Bishawari rice has authentic saffron-cardamom aroma.',
    date: 'August 2026',
    dishRecommended: 'Shawaya Chicken with Bishawari Rice (Half Portion)',
    role: 'Verified Local Foodie',
    category: 'Shawaya',
    verified: true
  },
  {
    id: 'rev-6',
    name: 'Hiba Mariyam',
    location: 'Thirurkad',
    rating: 5,
    text: 'We ordered the Full Combo (₹660) for a family get-together in Thirurkad. Delivery reached within 25 minutes, nicely packed, hot and aromatic. Everyone loved the creamy toum and spiced basmati rice!',
    date: 'August 2026',
    dishRecommended: 'Shawaya with Bishawari Rice (Full Portion)',
    role: 'Family Party Order',
    category: 'Delivery',
    verified: true
  },
  {
    id: 'rev-7',
    name: 'Jamsheer Ali',
    location: 'Angadippuram',
    rating: 5,
    text: 'Late-night dining until 12:00 AM midnight is a blessing! Calm, peaceful hearth atmosphere with live charcoal grilling in front of you. Truly refills your energy after a long shift.',
    date: 'July 2026',
    dishRecommended: 'Charcoal Shish Tawook & Watermelon Mojito',
    role: 'Late Night Diner',
    category: 'Family',
    verified: true
  },
  {
    id: 'rev-8',
    name: 'Vinod Kumar',
    location: 'Thirurkad - Angadippuram Road',
    rating: 5,
    text: 'Superb roadside location between Angadippuram and Thirurkad with hassle-free parking. Fast service, courteous staff, and unbeatable Shawaya chicken. The kids loved the strawberry mojito!',
    date: 'July 2026',
    dishRecommended: 'Quarter Shawaya Combo + Strawberry Mojito',
    role: 'Highway Traveller',
    category: 'Mojito',
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-restaurant-exterior',
    title: 'Yamama Shawaya Restaurant Exterior',
    category: 'Restaurant',
    image: '/src/assets/images/yamama_restaurant_exterior_1790246150837.jpg',
    description: 'Our modern red & black architectural facade on Calicut Road, Angadippuram with palm trees and spacious parking.'
  },
  {
    id: 'gal-official-menu-card',
    title: 'Official Yamama Shawaya Menu Card',
    category: 'Food',
    image: '/src/assets/images/yamama_menu_card_display_1790246174654.jpg',
    description: 'Authentic printed menu card featuring our Bishawari combos, Kubus meals, and Bene Tibi mojitos.'
  },
  {
    id: 'gal-shawaya-platter',
    title: 'Speciality Bishawari Rice & Shawaya Platter',
    category: 'Food',
    image: '/src/assets/images/yamama_special_platter_1790232732880.jpg',
    description: 'Juicy flame-roasted golden chicken served over spiced aromatic Bishawari basmati rice.'
  },
  {
    id: 'gal-rotisserie-chicken',
    title: 'Fire-Roasted Shawaya on Spit',
    category: 'Kitchen',
    image: '/src/assets/images/hero_shawaya_chicken_1790232717345.jpg',
    description: 'Fresh chicken slowly roasted over radiant rotisserie spits with authentic Arabic rubs.'
  },
  {
    id: 'gal-dining-ambiance',
    title: 'Warm, Cozy & Peaceful Dining Room',
    category: 'Ambiance',
    image: '/src/assets/images/restaurant_interior_warm_1790232778136.jpg',
    description: 'Refined warm lighting and comfortable family seating crafted for a relaxed, peaceful dining experience.'
  },
  {
    id: 'gal-shawarma-roll',
    title: 'Freshly Rolled Toasted Shawarma',
    category: 'Food',
    image: '/src/assets/images/shawarma_wrap_close_1790232751688.jpg',
    description: 'Thinly sliced tender spiced chicken wrapped with garlic toum and pickles.'
  }
];
