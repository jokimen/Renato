export interface Service {
  id: string;
  name: string;
  price: number;
  priceLabel?: string;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface SocialStats {
  followers: number;
  recommendPercent: number;
  googleReviewCount: number;
  googleRating: number;
  yearsExperience: number;
}

export interface SiteContent {
  businessName: string;
  tagline: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  instagramHandle: string;
  facebookHandle: string;
  calendlyUrl: string;
  hours: string;
  services: Service[];
  team: TeamMember[];
  testimonials: Testimonial[];
  gallery: GalleryImage[];
  social: SocialStats;
}
