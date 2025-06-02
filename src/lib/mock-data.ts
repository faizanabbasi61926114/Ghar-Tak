import type { Store, Product, ServiceProvider, ServiceCategory, AIProductRecommendation } from './types';
import { ShoppingCart, Wrench, Sparkles, Scissors, CarFront, Utensils, Shirt, Package } from 'lucide-react';

export const mockServiceCategories: ServiceCategory[] = [
  { id: 'plumber', name: 'Plumbers', icon: Wrench, imageUrl: 'https://placehold.co/100x100.png?text=Plumber' },
  { id: 'cleaner', name: 'Cleaners', icon: Sparkles, imageUrl: 'https://placehold.co/100x100.png?text=Cleaner' },
  { id: 'hairdresser', name: 'Hairdressers', icon: Scissors, imageUrl: 'https://placehold.co/100x100.png?text=Hairdresser' },
  { id: 'car_repair', name: 'Car Repair', icon: CarFront, imageUrl: 'https://placehold.co/100x100.png?text=Car+Repair' },
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
];

export const mockAIRecommendations: AIProductRecommendation[] = [
  "Artisan Coffee Beans",
  "Local Honey",
  "Handmade Soap",
  "Gourmet Cheese Selection",
  "Craft Beer Pack"
];
