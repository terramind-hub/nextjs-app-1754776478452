import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/contexts/AuthProvider'
import { CartProvider } from '@/contexts/CartContext'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Terramind Store - Premium Ecommerce Experience',
  description: 'Discover premium products with seamless shopping experience. Fast delivery, secure checkout, and exceptional customer service.',
  keywords: 'ecommerce, online shopping, premium products, fast delivery',
  authors: [{ name: 'Terramind' }],
  creator: 'Terramind',
  publisher: 'Terramind',
  openGraph: {
    title: 'Terramind Store - Premium Ecommerce Experience',
    description: 'Discover premium products with seamless shopping experience',
    type: 'website',
    locale: 'en_US',
    siteName: 'Terramind Store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terramind Store - Premium Ecommerce Experience',
    description: 'Discover premium products with seamless shopping experience',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen bg-background">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <footer className="border-t bg-muted/50 py-8">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                  <p>&copy; 2024 Terramind Store. All rights reserved.</p>
                  <p className="mt-2">Built with Terramind</p>
                </div>
              </footer>
            </div>
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}