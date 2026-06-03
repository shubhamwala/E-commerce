'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ShoppingBag } from 'lucide-react';

const AccountOrdersPage = () => {
  const [orders] = useState([
    {
      id: '0001',
      date: '2026-05-15',
      total: 89.99,
      status: 'Delivered',
      items: 3
    },
    {
      id: '0002',
      date: '2026-05-01',
      total: 145.50,
      status: 'Shipped',
      items: 5
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-playfair text-primary mb-8">My Orders</h1>

            <div className="bg-surface p-6 rounded-none">
              <div className="flex items-center mb-6">
                <ShoppingBag className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-playfair text-primary">Order History</h2>
              </div>

              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="border border-primary/10 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-playfair text-primary">Order #{order.id}</h3>
                        <p className="text-secondary">Placed on {order.date} • {order.items} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-playfair text-primary">${order.total}</p>
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-inter mt-2">
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 text-primary font-inter hover:text-premium-gold">
                      View Order Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountOrdersPage;