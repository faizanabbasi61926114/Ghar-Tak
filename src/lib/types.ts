export interface Location {
  lat: number;
  lng: number;
  address?: string;
}

export interface Store {
  id: string;
  name: string;
  description?: string;
  location: Location;
  category: string; // e.g., "Grocery", "Electronics", "Restaurant"
  imageUrl?: string;
  isFavorite?: boolean;
  products?: Product[]; // Optional: if products are directly nested or fetched separately
  rating?: number;
  deliveryTime?: string; // e.g., "25-35 min"
  servicesOffered?: string[]; // New: List of service names or IDs offered by the store
  dataAiHint?: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  storeId: string; // Indicates which store sells this product
  serviceProviderId?: string; // Optional: Indicates which service provider sells this product
  category?: string;
  quantity?: number; // For stock
  dataAiHint?: string;
}

export interface ServiceProvider {
  id: string;
  name: string; // Professional's name or company name
  serviceCategory: string; // Matches ServiceCategory.id
  location: Location;
  availability: string; // e.g., "Mon-Fri 9am-5pm", "Available Now"
  rating?: number;
  imageUrl?: string;
  description?: string;
  productsSold?: string[]; // New: List of product names or IDs sold by the provider
  dataAiHint?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  imageUrl?: string; // Optional if using icon components
  dataAiHint?: string;
}

export interface UserProfile {
  uid: string;
  email?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  location?: Location | null;
  favoriteStoreIds?: string[];
  favoriteServiceIds?: string[];
}

// For AI Product Recommendations
export type AIProductRecommendation = string; // Product name
