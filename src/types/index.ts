// Core product interface for the ecommerce application
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock?: number;
  rating?: number;
  reviews?: number;
}

// Cart item extends product with quantity
export interface CartItem extends Product {
  quantity: number;
}

// User interface for authentication
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt?: Date;
}

// Order status enum
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

// Order interface
export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  date: Date;
  userId: string;
  shippingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
}

// Address interface for shipping and billing
export interface Address {
  id?: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

// Payment method interface
export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'apple_pay' | 'google_pay';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
}

// Category interface
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
}

// Review interface
export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
  verified: boolean;
}

// Wishlist item interface
export interface WishlistItem {
  id: string;
  productId: string;
  userId: string;
  addedAt: Date;
}

// Cart context type
export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  isLoading: boolean;
}

// Auth context type
export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination interface
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Product filters
export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  sortBy?: 'name' | 'price' | 'rating' | 'newest';
  sortOrder?: 'asc' | 'desc';
}

// Search results
export interface SearchResults {
  products: Product[];
  categories: Category[];
  pagination: Pagination;
  filters: ProductFilters;
}

// Checkout form data
export interface CheckoutFormData {
  email: string;
  shippingAddress: Address;
  billingAddress?: Address;
  paymentMethod: string;
  sameAsBilling: boolean;
  newsletter: boolean;
}

// Form validation errors
export interface FormErrors {
  [key: string]: string | undefined;
}

// Navigation item
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// Theme type
export type Theme = 'light' | 'dark' | 'system';

// Currency type
export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD';

// Shipping method
export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: number;
}

// Coupon interface
export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrderAmount?: number;
  maxDiscount?: number;
  expiresAt?: Date;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
}

// Newsletter subscription
export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
  isActive: boolean;
}

// Analytics data
export interface AnalyticsData {
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
  topProducts: Product[];
  recentOrders: Order[];
  salesByCategory: { category: string; sales: number }[];
}

// Error types
export type ErrorType = 'validation' | 'network' | 'auth' | 'server' | 'unknown';

export interface AppError {
  type: ErrorType;
  message: string;
  code?: string;
  details?: any;
}