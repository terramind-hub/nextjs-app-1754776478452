// Seed data for ecommerce application
// This file provides realistic sample data for products, categories, orders, and users

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  categoryId: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  features: string[];
  specifications: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentId?: string;
  productCount: number;
  isActive: boolean;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  trackingNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  isEmailVerified: boolean;
  addresses: Address[];
  preferences: {
    newsletter: boolean;
    notifications: boolean;
    currency: string;
    language: string;
  };
  createdAt: string;
  lastLoginAt: string;
}

// Sample categories
export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
    productCount: 156,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'cat-2',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Fashion and apparel for all occasions',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    productCount: 234,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'cat-3',
    name: 'Home & Garden',
    slug: 'home-garden',
    description: 'Everything for your home and garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    productCount: 89,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'cat-4',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    description: 'Gear for active lifestyles',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    productCount: 67,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'cat-5',
    name: 'Books',
    slug: 'books',
    description: 'Books for every reader',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    productCount: 123,
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  }
];

// Sample products
export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    categoryId: 'cat-1',
    brand: 'AudioTech',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    stockQuantity: 45,
    tags: ['wireless', 'bluetooth', 'noise-cancelling', 'premium'],
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (15 min = 3 hours)',
      'Premium leather ear cups',
      'Built-in microphone'
    ],
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0',
      'Frequency Response': '20Hz - 20kHz'
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    id: 'prod-2',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt available in multiple colors.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=400&fit=crop'
    ],
    category: 'Clothing',
    categoryId: 'cat-2',
    brand: 'EcoWear',
    rating: 4.2,
    reviewCount: 89,
    inStock: true,
    stockQuantity: 120,
    tags: ['organic', 'cotton', 'sustainable', 'casual'],
    features: [
      '100% Organic Cotton',
      'Pre-shrunk fabric',
      'Reinforced seams',
      'Available in 8 colors',
      'Machine washable'
    ],
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Regular',
      'Care': 'Machine wash cold',
      'Origin': 'Made in USA'
    },
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: 'prod-3',
    name: 'Smart Home Security Camera',
    description: '1080p HD wireless security camera with night vision, motion detection, and mobile app control.',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    categoryId: 'cat-1',
    brand: 'SecureHome',
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    stockQuantity: 78,
    tags: ['security', 'camera', 'smart-home', 'wireless'],
    features: [
      '1080p HD video quality',
      'Night vision up to 30ft',
      'Motion detection alerts',
      'Two-way audio',
      'Cloud storage included'
    ],
    specifications: {
      'Resolution': '1080p Full HD',
      'Field of View': '110 degrees',
      'Night Vision': 'Up to 30 feet',
      'Storage': 'Cloud + Local SD',
      'Connectivity': 'Wi-Fi 802.11n'
    },
    createdAt: '2024-01-12T12:00:00Z',
    updatedAt: '2024-01-22T09:15:00Z'
  },
  {
    id: 'prod-4',
    name: 'Yoga Mat Premium',
    description: 'Non-slip premium yoga mat with alignment lines and carrying strap.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
    ],
    category: 'Sports & Outdoors',
    categoryId: 'cat-4',
    brand: 'ZenFit',
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    stockQuantity: 92,
    tags: ['yoga', 'fitness', 'non-slip', 'premium'],
    features: [
      'Non-slip surface',
      'Alignment guide lines',
      'Extra thick 6mm',
      'Eco-friendly materials',
      'Carrying strap included'
    ],
    specifications: {
      'Dimensions': '72" x 24"',
      'Thickness': '6mm',
      'Material': 'TPE (Eco-friendly)',
      'Weight': '2.5 lbs',
      'Care': 'Wipe clean with damp cloth'
    },
    createdAt: '2024-01-08T14:00:00Z',
    updatedAt: '2024-01-19T11:20:00Z'
  },
  {
    id: 'prod-5',
    name: 'Coffee Table Book: Modern Architecture',
    description: 'Stunning photography showcasing the world\'s most innovative modern architecture.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    ],
    category: 'Books',
    categoryId: 'cat-5',
    brand: 'Design Press',
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    stockQuantity: 34,
    tags: ['architecture', 'photography', 'coffee-table', 'design'],
    features: [
      'High-quality photography',
      'Hardcover edition',
      '300+ pages',
      'Expert commentary',
      'Premium paper quality'
    ],
    specifications: {
      'Pages': '320',
      'Dimensions': '11" x 13"',
      'Weight': '4.2 lbs',
      'Publisher': 'Design Press',
      'Language': 'English'
    },
    createdAt: '2024-01-05T16:00:00Z',
    updatedAt: '2024-01-17T13:45:00Z'
  },
  {
    id: 'prod-6',
    name: 'Ceramic Plant Pot Set',
    description: 'Set of 3 modern ceramic plant pots with drainage holes and saucers.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop'
    ],
    category: 'Home & Garden',
    categoryId: 'cat-3',
    brand: 'GreenSpace',
    rating: 4.3,
    reviewCount: 94,
    inStock: true,
    stockQuantity: 67,
    tags: ['plants', 'ceramic', 'home-decor', 'garden'],
    features: [
      'Set of 3 different sizes',
      'Drainage holes included',
      'Matching saucers',
      'Modern minimalist design',
      'Food-safe ceramic'
    ],
    specifications: {
      'Sizes': '4", 6", 8" diameter',
      'Material': 'High-fired ceramic',
      'Color': 'Matte white',
      'Drainage': 'Yes, with saucers',
      'Care': 'Dishwasher safe'
    },
    createdAt: '2024-01-03T10:30:00Z',
    updatedAt: '2024-01-16T15:10:00Z'
  }
];

// Sample users
export const users: User[] = [
  {
    id: 'user-1',
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1-555-0123',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    isEmailVerified: true,
    addresses: [
      {
        id: 'addr-1',
        firstName: 'John',
        lastName: 'Doe',
        address1: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'United States',
        phone: '+1-555-0123'
      }
    ],
    preferences: {
      newsletter: true,
      notifications: true,
      currency: 'USD',
      language: 'en'
    },
    createdAt: '2024-01-01T00:00:00Z',
    lastLoginAt: '2024-01-23T14:30:00Z'
  },
  {
    id: 'user-2',
    email: 'jane.smith@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    phone: '+1-555-0456',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    isEmailVerified: true,
    addresses: [
      {
        id: 'addr-2',
        firstName: 'Jane',
        lastName: 'Smith',
        address1: '456 Oak Avenue',
        address2: 'Apt 2B',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90210',
        country: 'United States',
        phone: '+1-555-0456'
      }
    ],
    preferences: {
      newsletter: false,
      notifications: true,
      currency: 'USD',
      language: 'en'
    },
    createdAt: '2024-01-02T00:00:00Z',
    lastLoginAt: '2024-01-22T09:15:00Z'
  }
];

// Sample orders
export const orders: Order[] = [
  {
    id: 'order-1',
    userId: 'user-1',
    status: 'delivered',
    items: [
      {
        id: 'item-1',
        productId: 'prod-1',
        productName: 'Wireless Bluetooth Headphones',
        productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        quantity: 1,
        price: 199.99,
        total: 199.99
      },
      {
        id: 'item-2',
        productId: 'prod-2',
        productName: 'Organic Cotton T-Shirt',
        productImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        quantity: 2,
        price: 29.99,
        total: 59.98
      }
    ],
    subtotal: 259.97,
    tax: 20.80,
    shipping: 9.99,
    total: 290.76,
    shippingAddress: {
      id: 'addr-1',
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1-555-0123'
    },
    billingAddress: {
      id: 'addr-1',
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1-555-0123'
    },
    paymentMethod: 'Credit Card (**** 1234)',
    paymentStatus: 'paid',
    trackingNumber: 'TRK123456789',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-18T16:30:00Z'
  },
  {
    id: 'order-2',
    userId: 'user-2',
    status: 'processing',
    items: [
      {
        id: 'item-3',
        productId: 'prod-3',
        productName: 'Smart Home Security Camera',
        productImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
        quantity: 2,
        price: 89.99,
        total: 179.98
      }
    ],
    subtotal: 179.98,
    tax: 14.40,
    shipping: 12.99,
    total: 207.37,
    shippingAddress: {
      id: 'addr-2',
      firstName: 'Jane',
      lastName: 'Smith',
      address1: '456 Oak Avenue',
      address2: 'Apt 2B',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'United States',
      phone: '+1-555-0456'
    },
    billingAddress: {
      id: 'addr-2',
      firstName: 'Jane',
      lastName: 'Smith',
      address1: '456 Oak Avenue',
      address2: 'Apt 2B',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'United States',
      phone: '+1-555-0456'
    },
    paymentMethod: 'PayPal',
    paymentStatus: 'paid',
    createdAt: '2024-01-20T14:00:00Z',
    updatedAt: '2024-01-21T09:45:00Z'
  }
];

// Export aliases for consistent imports
export { products as seedProducts };
export { categories as seedCategories };
export { orders as seedOrders };
export { users as seedUsers };

// Utility functions for working with seed data
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

export const getOrdersByUserId = (userId: string): Order[] => {
  return orders.filter(order => order.userId === userId);
};

export const getFeaturedProducts = (limit: number = 6): Product[] => {
  return products
    .filter(product => product.rating >= 4.5)
    .slice(0, limit);
};

export const getDiscountedProducts = (limit: number = 6): Product[] => {
  return products
    .filter(product => product.originalPrice && product.originalPrice > product.price)
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};