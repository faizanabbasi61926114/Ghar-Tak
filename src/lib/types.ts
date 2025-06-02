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
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  storeId: string;
  category?: string;
  quantity?: number; // For stock
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
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  imageUrl?: string; // Optional if using icon components
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
