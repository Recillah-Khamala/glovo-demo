// User types
export interface User {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  isAuthenticated: boolean;
}

// Authentication types
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  name: string;
}

// Location types
export interface Location {
  id: string;
  address: string;
  latitude?: number;
  longitude?: number;
  zone: string;
}

export interface LocationState {
  pickupLocation: Location | null;
  deliveryLocation: Location | null;
  currentLocation: Location | null;
  isLoading: boolean;
  error: string | null;
}

// Package types
export interface Package {
  id: string;
  type: 'document' | 'small' | 'large' | 'fragile';
  description: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  specialHandling?: string[];
}

export interface PackageState {
  packages: Package[];
  selectedPackage: Package | null;
  isLoading: boolean;
  error: string | null;
}

// Delivery types
export interface DeliveryRequest {
  id: string;
  pickupLocation: Location;
  deliveryLocation: Location;
  package: Package;
  estimatedPrice: number;
  estimatedTime: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface DeliveryState {
  requests: DeliveryRequest[];
  currentRequest: DeliveryRequest | null;
  isLoading: boolean;
  error: string | null;
}

// Pricing types
export interface PricingZone {
  id: string;
  name: string;
  basePrice: number;
  distanceMultiplier: number;
}

export interface PricingState {
  zones: PricingZone[];
  currentZone: PricingZone | null;
  estimatedPrice: number | null;
  isLoading: boolean;
  error: string | null;
}

// Payment types
export interface Payment {
  id: string;
  amount: number;
  currency: 'KES';
  status: 'pending' | 'completed' | 'failed';
  method: 'mpesa' | 'card' | 'cash';
  deliveryRequestId: string;
  createdAt: string;
}

export interface PaymentState {
  payments: Payment[];
  currentPayment: Payment | null;
  isLoading: boolean;
  error: string | null;
}

// Transport company types
export interface TransportCompany {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  email: string;
}

// Root state
export interface RootState {
  auth: AuthState;
  location: LocationState;
  package: PackageState;
  delivery: DeliveryState;
  pricing: PricingState;
  payment: PaymentState;
} 