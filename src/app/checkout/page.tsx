'use client';
import { useState } from 'react';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Checkout</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="border-t pt-4">
            <h3 className="text-lg font-bold">Payment Information</h3>
            <p className="text-gray-600">Order Total: $125.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}