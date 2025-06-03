
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
    name: 'Karachi Fresh Mart',
    description: 'Your friendly neighborhood grocery store with fresh produce and daily essentials in Karachi.',
    location: { lat: 24.8607, lng: 67.0011, address: 'Shop 12, Clifton Block 4, Karachi' },
    category: 'Grocery',
    imageUrl: 'https://placehold.co/600x400.png',
    isFavorite: false,
    rating: 4.5,
    deliveryTime: "25-35 min",
    dataAiHint: "grocery store Karachi"
  },
  {
    id: 'store2',
    name: 'Lahore Tech Central',
    description: 'Latest gadgets and accessories in Lahore. Your one-stop tech shop.',
    location: { lat: 31.5820, lng: 74.3294, address: 'Shop 5, Hafeez Center, Lahore' },
    category: 'Electronics',
    imageUrl: 'https://placehold.co/600x400.png',
    isFavorite: true,
    rating: 4.8,
    deliveryTime: "30-40 min",
    servicesOffered: ['Smartphone Screen Repair', 'Laptop Diagnostics'],
    dataAiHint: "electronics shop Lahore"
  },
  {
    id: 'store3',
    name: 'Islamabad Quick Bites',
    description: 'Quick and delicious meals delivered to your doorstep in Islamabad.',
    location: { lat: 33.7379, lng: 73.0844, address: 'Unit 3, F-10 Markaz, Islamabad' },
    category: 'Restaurant',
    imageUrl: 'https://placehold.co/600x400.png',
    isFavorite: false,
    rating: 4.2,
    deliveryTime: "20-30 min",
    dataAiHint: "restaurant food Islamabad"
  },
];

export const mockProducts: Product[] = [
  { id: 'prod1', name: 'Organic Mangoes (Sindhri)', price: 250, storeId: 'store1', category: 'Produce', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "mangoes fruit" },
  { id: 'prod2', name: 'Fresh Milk (1 Litre)', price: 180, storeId: 'store1', category: 'Dairy', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "milk carton" },
  { id: 'prod3', name: 'Wireless Earbuds', price: 3500, storeId: 'store2', category: 'Audio', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "earbuds audio" },
  { id: 'prod4', name: 'Mobile Charger (Fast Charge)', price: 1200, storeId: 'store2', category: 'Accessories', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "charger cable" },
  { id: 'prod5', name: 'Chicken Tikka Burger', price: 450, storeId: 'store3', category: 'Burgers', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "burger tikka" },
  { id: 'prod6', name: 'Seekh Kabab Pizza', price: 950, storeId: 'store3', category: 'Pizza', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "pizza kabab" },
  { id: 'prod7', name: 'Pipe Wrench (10 inch)', price: 800, serviceProviderId: 'sp1', category: 'Tools', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "wrench tool" },
  { id: 'prod8', name: 'Mobile Screen Protector', price: 300, serviceProviderId: 'sp5', category: 'Accessories', imageUrl: 'https://placehold.co/300x200.png', dataAiHint: "screen protector" },
];

export const mockServiceProviders: ServiceProvider[] = [
  {
    id: 'sp1',
    name: 'Ahmed Plumbing Services',
    serviceCategory: 'plumber',
    location: { lat: 24.8600, lng: 67.0100, address: 'Saddar, Karachi' },
    availability: 'Mon-Sat 9am-7pm',
    rating: 4.7,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Expert plumbing services for residential and commercial properties in Karachi.',
    productsSold: ['Pipe Wrench (10 inch)', 'Drain Cleaner Liquid'],
    dataAiHint: "plumber tools Karachi"
  },
  {
    id: 'sp2',
    name: 'Lahore Sparkle Cleaners',
    serviceCategory: 'cleaner',
    location: { lat: 31.5700, lng: 74.3300, address: 'Gulberg III, Lahore' },
    availability: 'Available 24/7',
    rating: 4.9,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Professional cleaning services for homes and offices in Lahore.',
    dataAiHint: "cleaning supplies Lahore"
  },
  {
    id: 'sp3',
    name: 'Faisalabad Style Salon',
    serviceCategory: 'hairdresser',
    location: { lat: 31.4187, lng: 73.0791, address: 'Peoples Colony, Faisalabad' },
    availability: 'Tue-Sun 11am-8pm',
    rating: 4.6,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Trendy haircuts and styling by experienced professionals in Faisalabad.',
    dataAiHint: "hair salon Faisalabad"
  },
  {
    id: 'sp4',
    name: 'Rawalpindi Auto Care',
    serviceCategory: 'car_repair',
    location: { lat: 33.5651, lng: 73.0169, address: 'Saddar, Rawalpindi' },
    availability: 'Mon-Fri 9am-6pm',
    rating: 4.4,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Reliable car repair and maintenance services in Rawalpindi.',
    dataAiHint: "car mechanic Rawalpindi"
  },
  {
    id: 'sp5',
    name: 'Islamabad Gadget Fix',
    serviceCategory: 'tech_repair',
    location: { lat: 33.7200, lng: 73.0600, address: 'Blue Area, Islamabad' },
    availability: 'Mon-Sat 10am-8pm',
    rating: 4.8,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Expert repairs for phones, laptops, and tablets in Islamabad.',
    productsSold: ['Mobile Screen Protector', 'USB-C Cable (Durable)'],
    dataAiHint: "tech repair shop Islamabad"
  },
  {
    id: 'sp6',
    name: 'Multan Handyman Solutions',
    serviceCategory: 'general_repair',
    location: { lat: 30.1575, lng: 71.5249, address: 'Cantt, Multan' },
    availability: 'Mon-Fri 9am-6pm',
    rating: 4.5,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'All-around handyman for your home repair needs in Multan.',
    dataAiHint: "handyman tools Multan"
  },
  {
    id: 'sp7',
    name: 'Karachi Beauty Lounge',
    serviceCategory: 'beauty',
    location: { lat: 24.8800, lng: 67.0300, address: 'Bahadurabad, Karachi' },
    availability: 'Tue-Sun 10am-8pm',
    rating: 4.9,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Rejuvenating beauty treatments and spa services in Karachi.',
    dataAiHint: "spa beauty Karachi"
  },
  {
    id: 'sp8',
    name: 'Lahore HomeFix Pros',
    serviceCategory: 'home_repair',
    location: { lat: 31.5600, lng: 74.3400, address: 'DHA Phase 5, Lahore' },
    availability: 'Mon-Sat 9am-5pm',
    rating: 4.6,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Your go-to for all minor and major home repairs in Lahore.',
    dataAiHint: "home improvement Lahore"
  },
   {
    id: 'sp9',
    name: 'Islamabad Zen Center',
    serviceCategory: 'wellness',
    location: { lat: 33.7100, lng: 73.0500, address: 'F-7 Markaz, Islamabad' },
    availability: 'Mon-Fri 10am-7pm, Sat 10am-4pm',
    rating: 4.8,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Yoga, meditation, and holistic wellness therapies in Islamabad.',
    dataAiHint: "yoga meditation Islamabad"
  },
  {
    id: 'sp10',
    name: 'Karachi Tutors Academy',
    serviceCategory: 'training',
    location: { lat: 24.8900, lng: 67.0500, address: 'Gulshan-e-Iqbal, Karachi' },
    availability: 'Flexible hours, book online',
    rating: 4.7,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Personalized tutoring and professional training courses in Karachi.',
    dataAiHint: "books study Karachi"
  },
  {
    id: 'sp11',
    name: 'Lahore Pest Control Experts',
    serviceCategory: 'pest_control',
    location: { lat: 31.5500, lng: 74.3200, address: 'Model Town, Lahore' },
    availability: '24/7 Emergency Service',
    rating: 4.5,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Effective pest control solutions for homes and businesses in Lahore.',
    dataAiHint: "bug spray Lahore"
  },
  {
    id: 'sp12',
    name: 'Islamabad Rental Solutions',
    serviceCategory: 'rental',
    location: { lat: 33.7000, lng: 73.0400, address: 'G-9 Markaz, Islamabad' },
    availability: 'Office: Mon-Fri 9am-6pm',
    rating: 4.4,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Rent tools, equipment, and party supplies with ease in Islamabad.',
    dataAiHint: "tools equipment Islamabad"
  }
];

export const mockAIRecommendations: AIProductRecommendation[] = [
  "Freshly Baked Naan",
  "Local Spices Mix",
  "Handcrafted Ajrak",
  "Dates from Khairpur",
  "Peshawari Chappal"
];
