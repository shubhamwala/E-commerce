'use client';
import { useState } from 'react';

interface WishlistItem {
  id: number;
  name: string;
  description: string;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    { id: 1, name: "Product 1", description: "# DEMO 1" },
    { id: 2, name: "Product 2", description: "# DEMO 2" }
  ]);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4">
              <h3 className="font-medium">{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}