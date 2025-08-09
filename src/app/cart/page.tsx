'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react';
import CartItems from '@/components/CartItems';
import CartSummary from '@/components/CartSummary';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const router = useRouter();
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemCount } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleContinueShopping = () => {
    router.push('/products');
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    setIsLoading(true);
    router.push('/checkout');
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <ShoppingCart className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
          </div>
          
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6 text-center">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button onClick={handleContinueShopping} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <span className="text-muted-foreground">
              ({getCartItemCount()} {getCartItemCount() === 1 ? 'item' : 'items'})
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearCart}
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Clear Cart
            </Button>
            <Button
              variant="outline"
              onClick={handleContinueShopping}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Items in your cart</CardTitle>
              </CardHeader>
              <CardContent>
                <CartItems
                  items={items}
                  onUpdateQuantity={updateQuantity}
                  onRemoveItem={removeFromCart}
                />
              </CardContent>
            </Card>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <CartSummary
                    items={items}
                    total={getCartTotal()}
                  />
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <Button
                      onClick={handleCheckout}
                      disabled={isLoading || items.length === 0}
                      className="w-full"
                      size="lg"
                    >
                      {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={handleContinueShopping}
                      className="w-full"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Security & Trust Indicators */}
              <Card className="mt-4">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                      🔒 Secure checkout with SSL encryption
                    </p>
                    <p className="text-sm text-muted-foreground">
                      📦 Free shipping on orders over $50
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ↩️ 30-day return policy
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}