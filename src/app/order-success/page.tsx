'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CheckCircle } from 'lucide-react';

const OrderSuccessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>

            <h1 className="text-3xl font-playfair text-primary mb-6">Order Placed Successfully!</h1>

            <p className="text-lg text-primary mb-8">
              Thank you for your order. Your order has been successfully placed and is being processed.
            </p>

            <div className="bg-surface p-8 rounded-none max-w-2xl mx-auto">
              <h2 className="text-2xl font-playfair text-primary mb-6">Order Details</h2>

              <div className="mt-8">
                <div className="border border-primary/10 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-playfair text-primary">Order #12345</h3>
                      <p className="text-secondary">2026-05-15 • 3 items</p>
                    </div>
                    <div className="text-right">
                      <p className="font-playfair text-primary">$89.99</p>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-inter mt-2">
                        Delivered
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 text-primary font-inter hover:text-premium-gold">
                    View Order Details
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-playfair text-primary mb-6">What's Next?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-none">
                    <h3 className="text-xl font-playfair text-primary mb-4">Order Confirmation</h3>
                    <p className="text-secondary">
                      Your order has been confirmed and is being processed.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-none">
                    <h3 className="text-xl font-playfair text-primary mb-4">Processing</h3>
                    <p className="text-secondary">
                      Our team is preparing your order for shipment.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-none">
                    <h3 className="text-xl font-playfair text-primary mb-4">Delivery Information</h3>
                    <p className="text-secondary">
                      You will receive a shipment notification with tracking information once your order ships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderSuccessPage;