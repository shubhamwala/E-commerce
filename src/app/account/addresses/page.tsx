'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin } from 'lucide-react';

const AccountAddressesPage = () => {
  const [addresses] = useState([
    {
      id: '1',
      name: 'John Doe',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States',
      isDefault: true
    },
    {
      id: '2',
      name: 'John Doe',
      street: '456 Park Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10022',
      country: 'United States',
      isDefault: false
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-playfair text-primary mb-8">My Addresses</h1>

            <div className="bg-surface p-6 rounded-none">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-2" />
                  <h2 className="text-2xl font-playfair text-primary">Saved Addresses</h2>
                </div>
                <button className="bg-primary text-surface px-4 py-2 font-inter hover:bg-premium-gold transition-colors">
                  Add New Address
                </button>
              </div>

              <div className="space-y-6">
                {addresses.map((address) => (
                  <div key={address.id} className="border border-primary/10 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-playfair text-primary">{address.name}</h3>
                        <p className="text-secondary mt-2">
                          {address.street}<br />
                          {address.city}, {address.state} {address.zip}<br />
                          {address.country}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        {address.isDefault && (
                          <span className="inline-block px-3 py-1 bg-primary text-surface text-sm font-inter mb-2">
                            Default Address
                          </span>
                        )}
                        <div className="flex space-x-2 mt-4">
                          <button className="text-primary font-inter hover:text-premium-gold">
                            Edit
                          </button>
                          <button className="text-primary font-inter hover:text-premium-gold">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
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

export default AccountAddressesPage;