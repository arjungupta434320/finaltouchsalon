export interface ServiceItem {
  id: string;
  name: string;
  category: 'Hair & Chemical' | 'Bridal & Glam' | 'Skin & Aesthetics' | "Men's Grooming" | 'Nail Bar & Spa';
  price: number;
  durationMinutes: number;
  genderBadge: 'Unisex' | 'Bridal / Women' | "Men's Exclusive" | 'Women Exclusive';
  description: string;
  popular?: boolean;
}

export interface StylistTier {
  id: string;
  name: string;
  title: string;
  experience: string;
  surcharge: number;
  description: string;
}

export interface AcademyCourse {
  id: string;
  title: string;
  duration: string;
  credential: string;
  level: string;
  batchStarts: string;
  highlights: string[];
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  verifiedVisit: string;
  serviceReceived: string;
  content: string;
  date: string;
  screenshotUrl?: string;
  isGoogleVerified?: boolean;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Hair Artistry' | 'Grooming' | 'Skin & Aesthetics' | 'Academy';
  imageUrl: string;
  aspect: 'portrait' | 'square' | 'landscape';
}

export const SALON_DATA = {
  businessName: 'Final Touch Unisex Salon & Academy',
  tagline: 'Where Precision Hair Artistry Meets Luxury Bridal & Unisex Grooming.',
  established: '2018',
  experienceYears: '8+',
  phone: '099271 26000',
  phoneAlt: '075007 02702',
  phoneTel: 'tel:+919927126000',
  whatsappNumber: '919927126000',
  whatsappUrl: 'https://wa.me/919927126000',
  address: 'Hasanpur Chungi Near Pant Vihar Gate, ITC Rd, Saharanpur, Uttar Pradesh 247001',
  streetAddress: '2C/2994, Shastri Nagar (Near Pant Vihar Gate, ITC Rd), Saharanpur, UP 247001',
  plusCode: 'XH22+3J Saharanpur, Uttar Pradesh',
  googleMapsUrl: 'https://maps.google.com/?q=Final+Touch+Unisex+Salon+and+Academy+Hasanpur+Chungi+ITC+Rd+Saharanpur+247001',
  operatingHours: {
    days: 'Monday – Sunday',
    time: '9:00 AM – 9:00 PM',
    openHour: 9,
    closeHour: 21,
    festiveDisclaimer: 'Festival hours (e.g., Diwali / peak wedding days) might differ.',
  },
  badges: [
    'Women-Owned Enterprise',
    'LGBTQ+ Welcoming Space',
    'ISO Certified Academy',
    '100% Sterilized Tools',
  ],
  metrics: [
    { label: 'Client Rating', value: '4.9★', sub: '104+ Verified Google Reviews' },
    { label: 'Bridal Makeovers', value: '500+', sub: 'Signature Couture Looks' },
    { label: 'Academy Alumni', value: '250+', sub: 'Certified Hair & MUA Pros' },
    { label: 'Years of Artistry', value: '8+ Yrs', sub: 'Est. 2018 in Saharanpur' },
  ],
  schedule: [
    { day: 'Monday', hours: '9:00 AM – 9:00 PM', note: 'Hours might differ during festivals (e.g. Diwali)' },
    { day: 'Tuesday', hours: '9:00 AM – 9:00 PM', note: 'Hours might differ during festivals (e.g. Diwali)' },
    { day: 'Wednesday', hours: '9:00 AM – 9:00 PM', note: 'Hours might differ during festivals (e.g. Diwali)' },
    { day: 'Thursday', hours: '9:00 AM – 9:00 PM', note: 'Regular hours' },
    { day: 'Friday', hours: '9:00 AM – 9:00 PM', note: 'Regular hours' },
    { day: 'Saturday', hours: '9:00 AM – 9:00 PM', note: 'Regular hours' },
    { day: 'Sunday', hours: '9:00 AM – 9:00 PM', note: 'Regular hours' },
  ],
};

export const SERVICES: ServiceItem[] = [
  // Hair & Chemical
  {
    id: 'hair-1',
    name: 'French Balayage & Glaze Melt',
    category: 'Hair & Chemical',
    price: 4999,
    durationMinutes: 180,
    genderBadge: 'Unisex',
    description: 'Custom hand-painted French balayage seamlessly blended with an espresso or champagne gloss glaze melt.',
    popular: true,
  },
  {
    id: 'hair-2',
    name: 'Nanoplastia Organic Hair Alignment',
    category: 'Hair & Chemical',
    price: 4499,
    durationMinutes: 150,
    genderBadge: 'Unisex',
    description: 'Formaldehyde-free bio-active hair restructuring delivering mirror-like glass reflection and frizz-free smoothness.',
    popular: true,
  },
  {
    id: 'hair-3',
    name: 'Keratin Protein Infusion Ritual',
    category: 'Hair & Chemical',
    price: 3499,
    durationMinutes: 120,
    genderBadge: 'Unisex',
    description: 'Deep structural keratin repair repairing heat damage, sealing moisture barriers, and restoring high tensile shine.',
  },
  {
    id: 'hair-4',
    name: 'Precision Master Haircut & Texture Style',
    category: 'Hair & Chemical',
    price: 699,
    durationMinutes: 45,
    genderBadge: 'Unisex',
    description: 'Tailored architectural sectioning, scalp wash with luxury Davines elixir, blow-dry, and signature silhouette styling.',
  },

  // Bridal & Glam
  {
    id: 'bridal-1',
    name: 'Royal Heritage HD Bridal Transformation',
    category: 'Bridal & Glam',
    price: 14999,
    durationMinutes: 240,
    genderBadge: 'Bridal / Women',
    description: 'Luxury high-definition airbrush finish, 3D mink lash contouring, bespoke bridal hair sculpting, dupatta & jewelry setting.',
    popular: true,
  },
  {
    id: 'bridal-2',
    name: 'Cocktail & Sangeet Glam Makeup',
    category: 'Bridal & Glam',
    price: 6999,
    durationMinutes: 120,
    genderBadge: 'Women Exclusive',
    description: 'Luminous sculpted dewy glass complexion, smokey cut-crease eye couture, and editorial red-carpet wave styling.',
  },
  {
    id: 'bridal-3',
    name: 'Groom Royal Wedding Day Styling',
    category: 'Bridal & Glam',
    price: 4999,
    durationMinutes: 90,
    genderBadge: "Men's Exclusive",
    description: 'HD skin correction, royal beard sculpting, Safa (turban) styling, and matte camera-ready groom finishing.',
  },
  {
    id: 'bridal-4',
    name: 'Airbrush Pre-Bridal Radiance Package',
    category: 'Bridal & Glam',
    price: 8999,
    durationMinutes: 210,
    genderBadge: 'Bridal / Women',
    description: 'Full-body luxury polishing, gold glow dermaplaning, back de-tan, and customized bridal skin illumination.',
  },

  // Skin & Aesthetics
  {
    id: 'skin-1',
    name: 'Hydra-Infusion 7-Step Glass Facial',
    category: 'Skin & Aesthetics',
    price: 2999,
    durationMinutes: 75,
    genderBadge: 'Unisex',
    description: 'Hydro-dermabrasion deep pore vortex extraction, peptide ultrasound penetration, and cold cryogenic tightening.',
    popular: true,
  },
  {
    id: 'skin-2',
    name: 'O3+ Diamond Luxury Brightening Facial',
    category: 'Skin & Aesthetics',
    price: 2499,
    durationMinutes: 60,
    genderBadge: 'Unisex',
    description: 'Oxygenating peel, cellular regeneration massage, and active diamond powder mask for hyperpigmentation removal.',
  },
  {
    id: 'skin-3',
    name: 'Korean Glass Skin Botanical Peeling',
    category: 'Skin & Aesthetics',
    price: 3499,
    durationMinutes: 90,
    genderBadge: 'Unisex',
    description: 'Non-invasive botanical bio-microneedle resurfacing promoting fresh collagen synthesis and glass-like glow.',
  },
  {
    id: 'skin-4',
    name: 'Charcoal Laser Detox & Pore Purifying Peel',
    category: 'Skin & Aesthetics',
    price: 1999,
    durationMinutes: 50,
    genderBadge: 'Unisex',
    description: 'Activated charcoal micro-exfoliation to draw out pollutants, reduce sebum, and refine enlarged pores.',
  },

  // Men's Grooming
  {
    id: 'men-1',
    name: 'Executive Skin-Fade & Beard Architecture',
    category: "Men's Grooming",
    price: 899,
    durationMinutes: 55,
    genderBadge: "Men's Exclusive",
    description: 'Laser-sharp low/mid skin fade, hot towel essential oil steam, straight razor edge lining, and beard conditioning.',
    popular: true,
  },
  {
    id: 'men-2',
    name: 'Charcoal Steam Scalp Detox & Styling',
    category: "Men's Grooming",
    price: 999,
    durationMinutes: 45,
    genderBadge: "Men's Exclusive",
    description: 'Deep exfoliating charcoal scalp scrub, botanical steam bath, anti-dandruff tonic, and matte clay finish.',
  },
  {
    id: 'men-3',
    name: 'Men’s Anti-Pollution Power Facial',
    category: "Men's Grooming",
    price: 1499,
    durationMinutes: 50,
    genderBadge: "Men's Exclusive",
    description: 'Targeted male skin treatment countering sun damage, pollution dullness, and ingrown facial hairs.',
  },
  {
    id: 'men-4',
    name: 'Signature Royal Shave & Head Massage',
    category: "Men's Grooming",
    price: 749,
    durationMinutes: 40,
    genderBadge: "Men's Exclusive",
    description: 'Triple warm towel wrap, badger brush lather, precision cut-throat shave, and 15-minute tension-relief acupressure.',
  },

  // Nail Bar & Spa
  {
    id: 'nail-1',
    name: 'Russian Gel Extensions & Chrome Art',
    category: 'Nail Bar & Spa',
    price: 2199,
    durationMinutes: 90,
    genderBadge: 'Women Exclusive',
    description: 'Dry e-file Russian cuticle manicure, durable gel extension sculpting, and metallic mirror chrome nail art.',
    popular: true,
  },
  {
    id: 'nail-2',
    name: 'Rose & Champagne Luxury Spa Pedicure',
    category: 'Nail Bar & Spa',
    price: 1299,
    durationMinutes: 60,
    genderBadge: 'Unisex',
    description: 'Organic rose petal milk soak, Himalayan pink salt scrub, calluses smoothing, and volcanic warm basalt stone massage.',
  },
  {
    id: 'nail-3',
    name: 'Aroma Candle Tension-Melting Back Spa',
    category: 'Nail Bar & Spa',
    price: 1799,
    durationMinutes: 60,
    genderBadge: 'Unisex',
    description: 'Warm soybean oil candle massage targeting spine, neck, and shoulder tension with lavender and sandalwood aroma.',
  },
];

export const STYLIST_TIERS: StylistTier[] = [
  {
    id: 'director',
    name: 'Senior Art Director',
    title: 'Editorial & Chemical Lead',
    experience: '10+ Years Experience',
    surcharge: 500,
    description: 'Master colorist and academy educator specializing in high-fashion balayage and structural cut re-engineering.',
  },
  {
    id: 'bridal-master',
    name: 'Master Bridal Specialist',
    title: 'Celebrity Makeup & Draping Lead',
    experience: '8+ Years Experience',
    surcharge: 800,
    description: 'Lead bridal stylist who has orchestrated over 500+ royal bridal looks across Western UP and Delhi NCR.',
  },
  {
    id: 'top-stylist',
    name: 'Top Salon Stylist',
    title: 'Certified Senior Artisan',
    experience: '5+ Years Experience',
    surcharge: 0,
    description: 'Extensively trained in-house specialist delivering flawless cuts, modern fades, and signature skin therapies.',
  },
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'course-bridal',
    title: 'Master Bridal Makeup & Hair Designing Diploma',
    duration: '3 Months (Full-Time)',
    credential: 'Government-Recognized Diploma & ISO Certification',
    level: 'Beginner to Advanced Masterclass',
    batchStarts: 'Next Batch: 1st of Next Month',
    highlights: [
      'HD, Airbrush, Matte & Glass Skin Bridal Makeup modules',
      'Advanced 3D Bridal Hair Sculpting & International Bun Architecture',
      'Complete Dupatta, Jewelry & Saree Draping masterclasses',
      'Vanity Bag curation, product chemistry & client consultation psychology',
      'Live bride shoot portfolio generation with professional studio lighting',
    ],
    description: 'The golden standard bridal cosmetology program in Saharanpur. Train directly on live models and graduate with a high-paying bridal clientele portfolio.',
  },
  {
    id: 'course-hair',
    title: 'Advanced Unisex Hair Chemical & Precision Cutting',
    duration: '2 Months (Intensive)',
    credential: 'Master Colorist & Stylist Certification',
    level: 'Intermediate to Professional',
    batchStarts: 'Next Batch: 15th of Next Month',
    highlights: [
      'Global Color, French Balayage, Ombré & Pastel Toning theory',
      'Nanoplastia, Keratin, Botox & Cysteine chemical realignment',
      'Geometrical Sectioning, Pivot Point angles & Japanese scissor fading',
      'Scalp analysis, trichology basics & hair damage diagnostics',
      'Salon floor speed management & commercial upselling techniques',
    ],
    description: 'Transform into a high-demand hair technician. Master European color formulation and precision architectural cutting under our Art Directors.',
  },
  {
    id: 'course-management',
    title: 'Complete Salon Management, Skin & Nail Artistry',
    duration: '4 Months (Comprehensive)',
    credential: 'Full Cosmetology License & Management Diploma',
    level: 'All Levels (Aspiring Salon Owners)',
    batchStarts: 'Limited Seats (Max 8 Students/Batch)',
    highlights: [
      'Russian dry manicure, acrylic sculpting & 3D nail art masteries',
      'Hydra-facial machine operations, chemical peels & dermaplaning',
      'Salon software operations, staff hiring, and P&L accounting',
      'Social media marketing, Instagram reel creation for salons',
      'Vendor procurement discounts for L’Oréal, O3+, and Schwarzkopf',
    ],
    description: 'Designed for ambitious entrepreneurs who aspire to start their own luxury salon studio or work in premier luxury brands globally.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-sahil',
    author: 'Sahil Sethi',
    rating: 5,
    verifiedVisit: 'Verified Google Review • 3 reviews, 1 photo',
    serviceReceived: 'Hair Styling & Beard Grooming',
    content: 'Had a good experience in the saloon. Staff was really helpful and supportive 😃',
    date: '5 months ago',
    screenshotUrl: '/salon-images/Screenshot 2026-11-09 233754.png',
    isGoogleVerified: true,
  },
  {
    id: 'rev-anuj',
    author: 'Anuj Panwar',
    rating: 5,
    verifiedVisit: 'Verified Google Review • 3 reviews',
    serviceReceived: 'Precision Hair Cut',
    content: 'Best in all type hair cutting for all. Owner is very humble and polite 💐💐💐',
    date: '4 months ago',
    screenshotUrl: '/salon-images/Screenshot 2026-11-09 233800.png',
    isGoogleVerified: true,
  },
  {
    id: 'rev-pratham',
    author: 'Pratham Gupta',
    rating: 5,
    verifiedVisit: 'Loyal Client (4 Years) • Verified Google Review',
    serviceReceived: 'Unisex Hair Cutting & Scalp Care',
    content: "I've been coming to Final Touch Salon for 4 years now, and I'm happier with the service and styling consistency every single visit. Unmatched attention to detail.",
    date: '2 years ago',
    screenshotUrl: '/salon-images/Screenshot 2026-11-09 233810.png',
    isGoogleVerified: true,
  },
  {
    id: 'rev-kangna',
    author: 'Kangna Choudhary',
    rating: 5,
    verifiedVisit: 'Verified Google Review • 6 reviews',
    serviceReceived: 'Bridal & Party Hair Makeover',
    content: 'Best salon in town 👍 The staff gives genuine advice tailored to your hair texture and skin tone.',
    date: '4 months ago',
    screenshotUrl: '/salon-images/Screenshot 2026-11-09 233816.png',
    isGoogleVerified: true,
  },
  {
    id: 'rev-anamika',
    author: 'Anamika Thakur',
    rating: 5,
    verifiedVisit: 'Verified Google Review • 2 reviews',
    serviceReceived: 'Hair Spa & Skin Rejuvenation',
    content: 'Final touch salon is the best in Saharanpur and their service and staff is amazing 😍🤩',
    date: '2 years ago',
    screenshotUrl: '/salon-images/Screenshot 2026-11-09 233829.png',
    isGoogleVerified: true,
  },
  {
    id: 'rev-vijay',
    author: 'Vijay Rana',
    rating: 4.8,
    verifiedVisit: 'Google Local Guide • 180 reviews, 192 photos',
    serviceReceived: 'Men’s Grooming & Precision Cut',
    content: 'Nice place for hair cut. Owner is very good and the ambiance is peaceful and well-maintained.',
    date: '1 year ago',
    screenshotUrl: '/salon-images/Screenshot 2026-11-09 233847.png',
    isGoogleVerified: true,
  },
  {
    id: 'rev-manav',
    author: 'Manav Choudhary',
    rating: 5,
    verifiedVisit: 'Verified Client • Google Review',
    serviceReceived: 'Executive Skin-Fade & Beard Architecture',
    content: 'Hands down the most professional unisex salon in Saharanpur! The precision fade and beard sculpt by their senior stylist was immaculate. The vibe feels like a luxury South Delhi studio with soothing ambient music and hygienic sterilized tools.',
    date: '2 weeks ago',
    isGoogleVerified: true,
  },
  {
    id: 'rev-saloni',
    author: 'Saloni Arora',
    rating: 5,
    verifiedVisit: 'Verified Bride • Direct Booking',
    serviceReceived: 'Royal Heritage HD Bridal Transformation',
    content: 'Booked Final Touch for my wedding reception makeover near Pant Vihar Gate. Their Master Bridal Specialist created the most ethereal, luminous HD look that stayed pristine all night through tears and dancing. Worth every single rupee!',
    date: '1 month ago',
    isGoogleVerified: true,
  },
  {
    id: 'rev-mustfa',
    author: 'Mustfa Malik',
    rating: 5,
    verifiedVisit: 'Academy Graduate • Batch of 2024',
    serviceReceived: 'Advanced Unisex Hair Chemical Certification',
    content: 'Enrolled in the Hair Chemical & Cutting Academy course. The hands-on training, live model practice, and product chemistry knowledge gave me the confidence to launch my own salon venture. The mentors are deeply invested in your growth.',
    date: '3 months ago',
    isGoogleVerified: true,
  },
];

export const LOOKBOOK_GALLERY: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'Couture Royal Bridal Lehanga Look',
    category: 'Bridal',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    aspect: 'portrait',
  },
  {
    id: 'look-2',
    title: 'Champagne Melt Balayage on Dark Tresses',
    category: 'Hair Artistry',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80',
    aspect: 'square',
  },
  {
    id: 'look-3',
    title: 'Tailored Razor Sharp Fade & Beard Line',
    category: 'Grooming',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80',
    aspect: 'portrait',
  },
  {
    id: 'look-4',
    title: 'Hydra Glass Skin & Botanical Renewal',
    category: 'Skin & Aesthetics',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    aspect: 'square',
  },
  {
    id: 'look-5',
    title: 'Editorial Airbrush Glow & Dewy Eyes',
    category: 'Bridal',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    aspect: 'landscape',
  },
  {
    id: 'look-6',
    title: 'Academy Hair Lab Hands-On Masterclass',
    category: 'Academy',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
    aspect: 'portrait',
  },
];

