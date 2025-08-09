import type { Metadata } from 'next';
import { Suspense } from 'react';
import ProductGrid from '@/components/ProductGrid';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Products - Shop All Items',
  description: 'Browse our complete collection of products with filters and search.',
};

// Product filters component
function ProductFilters() {
  return (
    <Card className="p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4">Filter Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium mb-2">
            Search
          </label>
          <Input
            id="search"
            type="text"
            placeholder="Search products..."
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="books">Books</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
              <SelectItem value="sports">Sports & Outdoors</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label htmlFor="price" className="block text-sm font-medium mb-2">
            Price Range
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Price</SelectItem>
              <SelectItem value="0-25">$0 - $25</SelectItem>
              <SelectItem value="25-50">$25 - $50</SelectItem>
              <SelectItem value="50-100">$50 - $100</SelectItem>
              <SelectItem value="100-200">$100 - $200</SelectItem>
              <SelectItem value="200+">$200+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label htmlFor="sort" className="block text-sm font-medium mb-2">
            Sort By
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name: A to Z</SelectItem>
              <SelectItem value="rating">Customer Rating</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}

// Active filters display
function ActiveFilters() {
  const activeFilters = [
    { label: 'Electronics', value: 'electronics' },
    { label: '$25 - $50', value: 'price-25-50' },
  ];

  if (activeFilters.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium">Active Filters:</span>
        {activeFilters.map((filter) => (
          <Badge key={filter.value} variant="secondary" className="cursor-pointer">
            {filter.label}
            <button className="ml-1 hover:text-red-500">×</button>
          </Badge>
        ))}
        <button className="text-sm text-blue-600 hover:text-blue-800 underline">
          Clear All
        </button>
      </div>
    </div>
  );
}

// Loading skeleton for products
function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <div className="aspect-square bg-gray-200 animate-pulse" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-gray-600">
          Discover our complete collection of high-quality products
        </p>
      </div>

      {/* Filters */}
      <ProductFilters />

      {/* Active Filters */}
      <ActiveFilters />

      {/* Results Summary */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          Showing 1-24 of 156 products
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">View:</span>
          <button className="p-2 border rounded hover:bg-gray-50">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button className="p-2 border rounded hover:bg-gray-50">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid />
      </Suspense>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 text-sm border rounded hover:bg-gray-50 disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-2 text-sm border rounded bg-blue-600 text-white">
            1
          </button>
          <button className="px-3 py-2 text-sm border rounded hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 text-sm border rounded hover:bg-gray-50">
            3
          </button>
          <span className="px-3 py-2 text-sm text-gray-500">...</span>
          <button className="px-3 py-2 text-sm border rounded hover:bg-gray-50">
            10
          </button>
          <button className="px-3 py-2 text-sm border rounded hover:bg-gray-50">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}