'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-3xl font-playfair text-primary mt-8 mb-4">Page Not Found</h2>
            <p className="text-lg text-primary mb-8">
              The page you are looking for does not exist.
            </p>
            <div className="mt-8">
              <a
                href="/"
                className="bg-primary text-surface px-6 py-3 font-inter hover:bg-premium-gold transition-colors"
              >
                Go Back Home
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const runtime = 'experimental-edge';