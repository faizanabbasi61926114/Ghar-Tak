import type { Store, Product, ServiceProvider, ServiceCategory, AIProductRecommendation } from './types';
import { ShoppingCart, Wrench, Sparkles, Scissors, CarFront, Utensils, Shirt, Package, Cpu, Construction, Briefcase, Palette, Home, Leaf, GraduationCap, BugPlay, KeyRound } from 'lucide-react';

export const mockServiceCategories: ServiceCategory[] = [
  { id: 'plumber', name: 'Plumbers', icon: Wrench, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'plumbing tools' },
  { id: 'cleaner', name: 'Cleaners', icon: Sparkles, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'cleaning spray' },
  { id: 'hairdresser', name: 'Hairdressers', icon: Scissors, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'salon scissors' },
  { id: 'car_repair', name: 'Car Repair', icon: CarFront, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'car engine' },
  { id: 'tech_repair', name: 'Tech Repair', icon: Cpu, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'computer circuit' },
  { id: 'general_repair', name: 'General Repair', icon: Construction, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'tools hammer' },
  { id: 'jobs', name: 'Jobs', icon: Briefcase, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'briefcase work' },
  { id: 'beauty', name: 'Beauty Services', icon: Palette, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'makeup palette' },
  { id: 'home_repair', name: 'Home Repair', icon: Home, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'house tools' },
  { id: 'wellness', name: 'Wellness', icon: Leaf, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'spa wellness' },
  { id: 'training', name: 'Training & Tutoring', icon: GraduationCap, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'education learning' },
  { id: 'pest_control', name: 'Pest Control', icon: BugPlay, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'insect spray' },
  { id: 'rental', name: 'Rentals', icon: KeyRound, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'keys house' },
];

export const mockStores: Store[] = [
  {
    id: 'store1',
    name: 'FreshMart Groceries',
    description: 'Your friendly neighborhood grocery store with fresh produce and daily essentials.',
    location: { lat: 34.0522, lng: -118.2437, address: '123 Main St, Los Angeles' },
    category: 'Grocery',
    imageUrl: 'https://placehold.co/600x400.png',
    isFavorite: false,
    rating: 4.5,
    deliveryTime: "20-30 min",
    dataAiHint: "grocery store"
  },
  {
    id: 'store2',
    name: 'TechHub Electronics',
    description: 'Latest gadgets and accessories. Your one-stop tech shop.',
    location: { lat: 34.0550, lng: -118.2450, address: '456 Tech Ave, Los Angeles' },
    category: 'Electronics',
    imageUrl: 'https://placehold.co/600x400.png',
    isFavorite: true,
    rating: 4.8,
    deliveryTime: "30-45 min",
    servicesOffered: ['Smartphone Screen Repair', 'Laptop Diagnostics'],
    dataAiHint: "electronics shop"
  },
  {
    id: 'store3',
    name: 'Speedy Eats',
    description: 'Quick and delicious meals delivered to your doorstep.',
    location: { lat: 34.0500, lng: -118.2400, address: '789 Foodie Ln, Los Angeles' },
    category: 'Restaurant',
    imageUrl: 'https://placehold.co/600x400.png',
    isFavorite: false,
    rating: 4.2,
    deliveryTime: "15-25 min",
    dataAiHint: "restaurant food"
  },
];

export const mockProducts: Product[] = [
  { id: 'prod1', name: 'Organic Apples', price: 3.99, storeId: 'store1', category: 'Produce', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "apples fruit" },
  { id: 'prod2', name: 'Whole Milk Gallon', price: 4.50, storeId: 'store1', category: 'Dairy', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "milk carton" },
  { id: 'prod3', name: 'Wireless Headphones', price: 79.99, storeId: 'store2', category: 'Audio', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "headphones audio" },
  { id: 'prod4', name: 'Smartphone Charger', price: 19.99, storeId: 'store2', category: 'Accessories', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "charger cable" },
  { id: 'prod5', name: 'Chicken Burger', price: 12.50, storeId: 'store3', category: 'Burgers', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "burger food" },
  { id: 'prod6', name: 'Veggie Pizza', price: 15.00, storeId: 'store3', category: 'Pizza', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "pizza food" },
  { id: 'prod7', name: 'Universal Pipe Wrench', price: 25.00, serviceProviderId: 'sp1', category: 'Tools', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "wrench tool" },
  { id: 'prod8', name: 'Screen Protector Kit', price: 15.00, serviceProviderId: 'sp5', category: 'Accessories', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "screen protector" },
];

export const mockServiceProviders: ServiceProvider[] = [
  {
    id: 'sp1',
    name: 'Mike\'s Plumbing',
    serviceCategory: 'plumber',
    location: { lat: 34.0530, lng: -118.2440, address: 'Plumber Central, LA' },
    availability: 'Mon-Sat 8am-6pm',
    rating: 4.7,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Expert plumbing services for residential and commercial properties.',
    productsSold: ['Universal Pipe Wrench', 'Drain Cleaner'],
    dataAiHint: "plumber tools"
  },
  {
    id: 'sp2',
    name: 'Sparkle Clean Co.',
    serviceCategory: 'cleaner',
    location: { lat: 34.0560, lng: -118.2460, address: 'Cleaning Hub, LA' },
    availability: 'Available 24/7',
    rating: 4.9,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Professional cleaning services for homes and offices.',
    dataAiHint: "cleaning supplies"
  },
  {
    id: 'sp3',
    name: 'Chic Cuts Salon',
    serviceCategory: 'hairdresser',
    location: { lat: 34.0490, lng: -118.2390, address: 'Style Street, LA' },
    availability: 'Tue-Sun 10am-7pm',
    rating: 4.6,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Trendy haircuts and styling by experienced professionals.',
    dataAiHint: "hair salon"
  },
  {
    id: 'sp4',
    name: 'AutoFix Masters',
    serviceCategory: 'car_repair',
    location: { lat: 34.0510, lng: -118.2500, address: 'Garage Town, LA' },
    availability: 'Mon-Fri 9am-5pm',
    rating: 4.4,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Reliable car repair and maintenance services.',
    dataAiHint: "car mechanic"
  },
  {
    id: 'sp5',
    name: 'Gadget Gurus',
    serviceCategory: 'tech_repair',
    location: { lat: 34.0580, lng: -118.2480, address: 'Tech Repair Plaza, LA' },
    availability: 'Mon-Sat 10am-7pm',
    rating: 4.8,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Expert repairs for phones, laptops, and tablets.',
    productsSold: ['Screen Protector Kit', 'USB-C Cable'],
    dataAiHint: "tech repair shop"
  },
  {
    id: 'sp6',
    name: 'HandyPro Services',
    serviceCategory: 'general_repair',
    location: { lat: 34.0470, lng: -118.2350, address: 'Home Repair Hub, LA' },
    availability: 'Mon-Fri 9am-6pm',
    rating: 4.5,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'All-around handyman for your home repair needs.',
    dataAiHint: "handyman tools"
  },
  {
    id: 'sp7',
    name: 'Beauty Bliss Spa',
    serviceCategory: 'beauty',
    location: { lat: 34.0600, lng: -118.2500, address: 'Glamour Ave, LA' },
    availability: 'Tue-Sun 10am-8pm',
    rating: 4.9,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Rejuvenating beauty treatments and spa services.',
    dataAiHint: "spa beauty"
  },
  {
    id: 'sp8',
    name: 'FixIt Home Repairs',
    serviceCategory: 'home_repair',
    location: { lat: 34.0520, lng: -118.2550, address: 'Homestead Rd, LA' },
    availability: 'Mon-Sat 9am-5pm',
    rating: 4.6,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Your go-to for all minor and major home repairs.',
    dataAiHint: "home improvement"
  },
   {
    id: 'sp9',
    name: 'Zen Wellness Center',
    serviceCategory: 'wellness',
    location: { lat: 34.0580, lng: -118.2600, address: 'Tranquility Ln, LA' },
    availability: 'Mon-Fri 10am-7pm, Sat 10am-4pm',
    rating: 4.8,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Yoga, meditation, and holistic wellness therapies.',
    dataAiHint: "yoga meditation"
  },
  {
    id: 'sp10',
    name: 'LearnFast Tutors',
    serviceCategory: 'training',
    location: { lat: 34.0500, lng: -118.2650, address: 'Knowledge Park, LA' },
    availability: 'Flexible hours, book online',
    rating: 4.7,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Personalized tutoring and professional training courses.',
    dataAiHint: "books study"
  },
  {
    id: 'sp11',
    name: 'Bug Busters Inc.',
    serviceCategory: 'pest_control',
    location: { lat: 34.0450, lng: -118.2300, address: 'Exterminator Row, LA' },
    availability: '24/7 Emergency Service',
    rating: 4.5,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Effective pest control solutions for homes and businesses.',
    dataAiHint: "bug spray"
  },
  {
    id: 'sp12',
    name: 'EasyRentals Co.',
    serviceCategory: 'rental',
    location: { lat: 34.0620, lng: -118.2700, address: 'Rental Hub, LA' },
    availability: 'Office: Mon-Fri 9am-6pm',
    rating: 4.4,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Rent tools, equipment, and party supplies with ease.',
    dataAiHint: "tools equipment"
  }
];

export const mockAIRecommendations: AIProductRecommendation[] = [
  "Artisan Coffee Beans",
  "Local Honey",
  "Handmade Soap",
  "Gourmet Cheese Selection",
  "Craft Beer Pack"
];

