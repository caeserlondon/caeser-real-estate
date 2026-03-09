export type NavLink = {
  name: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  desc: string;
};

export type FeaturedProperty = {
  title: string;
  price: string;
  location: string;
  specs: string;
  image: string;
};

export type PropertyItem = {
  title: string;
  price: string;
  image: string;
};

export type AwardItem = {
  year: string;
  title: string;
  org: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export type InsightPost = {
  title: string;
  date: string;
  image: string;
};

export const navLinks: NavLink[] = [
  { name: 'Properties', href: '/#properties' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
];

export const services: ServiceItem[] = [
  {
    title: "Buyer Representation",
    desc: "Exclusive access to off-market properties and expert negotiation for the acquisition of London's finest homes."
  },
  {
    title: "Seller Representation",
    desc: "Strategic marketing and global exposure to qualified buyers, ensuring your property commands its highest value."
  },
  {
    title: "Investment Advisory",
    desc: "Data-driven insights and portfolio management for investors seeking high-yield opportunities in the luxury sector."
  }
];

export const featuredProperty: FeaturedProperty = {
  title: "8 Bedroom Townhouse in Mayfair",
  price: "£25,000,000",
  location: "Mayfair, London",
  specs: "8 Beds | 6 Baths | 8,500 sq ft",
  image: "https://picsum.photos/seed/mayfair-house/1600/900"
};

export const propertyGrid: PropertyItem[] = [
  {
    title: "Penthouse at The Shard",
    price: "£18,500,000",
    image: "https://picsum.photos/seed/shard-penthouse/800/600"
  },
  {
    title: "Belgravia Mews House",
    price: "£6,750,000",
    image: "https://picsum.photos/seed/belgravia-mews/800/600"
  },
  {
    title: "Knightsbridge Apartment",
    price: "£12,000,000",
    image: "https://picsum.photos/seed/knightsbridge-flat/800/600"
  },
  {
    title: "Holland Park Villa",
    price: "£32,000,000",
    image: "https://picsum.photos/seed/holland-park/800/600"
  }
];

export const awards: AwardItem[] = [
  { year: "2023", title: "Best Luxury Agent", org: "Property Awards" },
  { year: "2022", title: "Top Sales Consultant", org: "London Real Estate" },
  { year: "", title: "Excellence in Service", org: "Global Property Awards" },
  { year: "2023", title: "Best Marketing Campaign", org: "Design & Architecture" },
  { year: "", title: "Platinum Member", org: "Elite Agent Circle" },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "An absolute pleasure. The team handled every detail with discretion and professionalism. Finding a home in Notting Hill has never been this seamless.",
    name: "Mason Woods",
    role: "CEO, TechStart",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Looking for investment properties requires a keen eye and market knowledge. Their advice was invaluable in securing a portfolio that has already appreciated significantly.",
    name: "Regis Van Coort",
    role: "Private Investor",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    quote: "From our very first meeting, it was clear we were in expert hands. The entire process of selling our Belgravia townhouse was handled with remarkable care and precision.",
    name: "Charlotte Haines",
    role: "Belgravia Seller",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Caeser helped us navigate the London market with confidence and patience. We found our dream home in Mayfair within weeks of our initial brief.",
    name: "James & Sarah Sterling",
    role: "Kensington Buyers",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    quote: "Their discretion was impeccable. As a high-profile seller, I needed an agent who understood confidentiality. They exceeded every expectation.",
    name: "Alexander V.",
    role: "Mayfair Seller",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    quote: "We relocated from Hong Kong and relied heavily on their local expertise. The transition was seamless, and the property they sourced was beyond what we imagined.",
    name: "David & Mei Chen",
    role: "International Buyers",
    image: "https://randomuser.me/api/portraits/men/91.jpg"
  }
];

export const insightPosts: InsightPost[] = [
  {
    title: "The Evolution of Mayfair Real Estate",
    date: "Oct 12, 2024",
    image: "https://picsum.photos/seed/london-street/600/400"
  },
  {
    title: "London Market Outlook 2025",
    date: "Sep 28, 2024",
    image: "https://picsum.photos/seed/london-skyline/600/400"
  },
  {
    title: "Investing in Prime Central London",
    date: "Sep 15, 2024",
    image: "https://picsum.photos/seed/luxury-interior/600/400"
  }
];

export const footerNavItems = ['Properties', 'About', 'Services', 'Contact'];
