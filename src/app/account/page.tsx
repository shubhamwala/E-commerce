'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { User, ShoppingBag, Heart, MapPin, CreditCard, Shield, Star } from 'lucide-react';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'orders', name: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'addresses', name: 'Addresses', icon: MapPin },
    { id: 'payment', name: 'Payment Methods', icon: CreditCard },
  ];

  const orders = [
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
  ];

  const wishlistItems = [
    {
      id: '1',
      name: 'Classic White T-Shirt',
      price: 29.99,
      image: '/images/product.jpg'
    },
    {
      id: '2',
      name: 'Summer Floral Dress',
      price: 45.99,
      image: '/images/floral-dress.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-playfair text-primary mb-8">My Account</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-surface p-6 rounded-none">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-premium-gold flex items-center justify-center text-surface font-bold text-lg">
                    JD
                  </div>
                  <div className="ml-4">
                    <h2 className="font-playfair text-primary">John Doe</h2>
                    <p className="text-secondary text-sm">john.doe@example.com</p>
                  </div>
                </div>
                
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        className={`w-full flex items-center px-4 py-3 text-left rounded-none transition-colors ${
                          activeTab === tab.id 
                            ? 'bg-premium-gold/10 text-premium-gold' 
                            : 'text-primary hover:bg-primary/5'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <Icon size={20} className="mr-3" />
                        <span className="font-inter">{tab.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="bg-surface p-8 rounded-none">
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-2xl font-playfair text-primary mb-6">Profile Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-secondary mb-2 font-inter">First Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                          defaultValue="John"
                        />
                      </div>
                      <div>
                        <label className="block text-secondary mb-2 font-inter">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                          defaultValue="Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-secondary mb-2 font-inter">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                          defaultValue="john.doe@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-secondary mb-2 font-inter">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                          defaultValue="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="bg-primary text-surface px-6 py-3 font-inter hover:bg-premium-gold transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                )}
                
                {activeTab === 'orders' && (
                  <div>
                    <h2 className="text-2xl font-playfair text-primary mb-6">Order History</h2>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border border-primary/10 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-playfair text-primary">Order #{order.id}</h3>
                              <p className="text-secondary">{order.date} • {order.items} items</p>
                            </div>
                            <div className="text-right">
                              <p className="font-playfair text-primary">${order.total.toFixed(2)}</p>
                              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-inter mt-1">
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
                )}
                
                {activeTab === 'wishlist' && (
                  <div>
                    <h2 className="text-2xl font-playfair text-primary mb-6">Wishlist</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {wishlistItems.map((item) => (
                        <div key={item.id} className="border border-primary/10 p-4 flex">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-24 h-24 object-cover"
                          />
                          <div className="ml-4 flex-1">
                            <h3 className="font-playfair text-primary">{item.name}</h3>
                            <p className="font-playfair text-primary mt-2">${item.price.toFixed(2)}</p>
                            <div className="mt-4 flex space-x-2">
                              <button className="bg-primary text-surface px-4 py-2 font-inter text-sm hover:bg-premium-gold transition-colors">
                                Add to Cart
                              </button>
                              <button className="border border-primary text-primary px-4 py-2 font-inter text-sm hover:bg-primary/5 transition-colors">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'addresses' && (
                  <div>
                    <h2 className="text-2xl font-playfair text-primary mb-6">Addresses</h2>
                    <div className="border border-primary/10 p-6 mb-6">
                      <h3 className="font-playfair text-primary mb-4">Default Address</h3>
                      <p className="text-primary">John Doe</p>
                      <p className="text-primary">123 Main Street</p>
                      <p className="text-primary">New York, NY 10001</p>
                      <p className="text-primary">United States</p>
                      <button className="mt-4 text-primary font-inter hover:text-premium-gold">
                        Edit Address
                      </button>
                    </div>
                    <button className="bg-primary text-surface px-6 py-3 font-inter hover:bg-premium-gold transition-colors">
                      Add New Address
                    </button>
                  </div>
                )}
                
                {activeTab === 'payment' && (
                  <div>
                    <h2 className="text-2xl font-playfair text-primary mb-6">Payment Methods</h2>
                    <div className="border border-primary/10 p-6 mb-6">
                      <div className="flex items-center">
                        <CreditCard className="text-primary mr-3" size={24} />
                        <div>
                          <h3 className="font-playfair text-primary">Visa ending in 1234</h3>
                          <p className="text-secondary">Expires 12/2028</p>
                        </div>
                      </div>
                      <button className="mt-4 text-primary font-inter hover:text-premium-gold">
                        Remove Card
                      </button>
                    </div>
                    <button className="bg-primary text-surface px-6 py-3 font-inter hover:bg-premium-gold transition-colors">
                      Add New Payment Method
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountPage;