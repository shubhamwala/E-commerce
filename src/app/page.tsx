'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
import anime from 'animejs';

export default function Home() {
  // Mock product data
  const mockProducts = [
    { 
      id: '1', 
      name: 'Summer Collection', 
      price: 29.99,
      description: 'Lightweight and comfortable summer wear',
      images: ['/images/product.jpg'],
      category: 'apparel',
      subcategory: 'summer',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Red', 'Blue', 'Green'],
      inStock: true,
      rating: 4.5,
      reviews: 128
    },
    { 
      id: '2', 
      name: 'New Arrivals', 
      price: 79.99,
      description: 'Latest fashion trends',
      images: ['/images/product.jpg'],
      category: 'apparel',
      subcategory: 'new',
      sizes: ['S', 'M', 'L'],
      colors: ['Red', 'Blue', 'Green'],
      inStock: true,
      rating: 4.5,
      reviews: 128
    },
    { 
      id: '3', 
      name: 'Accessories', 
      price: 49.99,
      description: 'Complete your look with our accessories',
      images: ['/images/product.jpg'],
      category: 'accessories',
      subcategory: 'fashion',
      sizes: ['S', 'M', 'L'],
      colors: ['Red', 'Blue', 'Green'],
      inStock: true,
      rating: 4.3,
      reviews: 210
    }
  ];

  // Initialize animations
  useEffect(() => {
    // Hero section animation
    anime({
      targets: '.hero-text',
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: 'easeOutExpo',
      duration: 1000
    });

    // Product card animations
    anime({
      targets: '.product-card',
      translateY: [100, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, {start: 500}),
      easing: 'easeOutExpo',
      duration: 1200
    });

    // Category section animation
    anime({
      targets: '.category-card',
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: anime.stagger(300, {start: 800}),
      easing: 'easeOutExpo',
      duration: 1500
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/floral-dress.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#111111]/50"></div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="hero-text text-center" data-delay="0">
              <h1 className="text-5xl md:text-7xl font-playfair text-white font-light mb-6">
                LUXURY REDEFINED
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-inter">
                Discover curated collections that blend timeless elegance with contemporary style
              </p>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-inter hover:bg-white/10 transition-all duration-300">
                EXPLORE COLLECTIONS
              </button>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-playfair font-normal text-primary text-center mb-4">Curated Collections</h2>
              <div className="w-20 h-px bg-premium-gold mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {mockProducts.map((product, index) => (
                <div key={product.id} className="product-card" data-delay={index * 100}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-playfair font-normal text-primary text-center mb-4">Shop by Category</h2>
              <div className="w-20 h-px bg-premium-gold mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="category-card relative h-96 rounded-none overflow-hidden group">
                <img 
                  src="/images/product.jpg" 
                  alt="Men's Collection" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-3xl font-playfair text-white">Men</h3>
                </div>
              </div>
              <div className="category-card relative h-96 rounded-none overflow-hidden group">
                <img 
                  src="/images/floral-dress.jpg" 
                  alt="Women's Collection" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-3xl font-playfair text-white">Women</h3>
                </div>
              </div>
              <div className="category-card relative h-96 rounded-none overflow-hidden group">
                <img 
                  src="/images/product.jpg" 
                  alt="Kid's Collection" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-3xl font-playfair text-white">Kids</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Editorial Lookbook */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-playfair font-normal text-primary text-center mb-4">Editorial</h2>
              <div className="w-20 h-px bg-premium-gold mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lookbook-content">
                <h3 className="text-3xl font-playfair text-primary mb-6">Summer Editorial</h3>
                <p className="text-secondary text-lg mb-8 font-inter">
                  Discover our latest summer collection inspired by Mediterranean landscapes and 
                  coastal elegance. Each piece is designed to embody the perfect blend of comfort and sophistication.
                </p>
                <button className="border border-primary text-primary px-8 py-4 text-lg font-inter hover:bg-primary hover:text-surface transition-all duration-300">
                  VIEW LOOKBOOK
                </button>
              </div>
              <div className="lookbook-image">
                <img 
                  src="/images/floral-dress.jpg" 
                  alt="Summer Editorial" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-24 bg-soft-beige">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-playfair text-primary mb-6">Stay in the Loop</h2>
            <p className="text-secondary mb-10 font-inter max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new arrivals, and fashion inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 border border-primary/30 bg-surface flex-grow text-primary font-inter"
              />
              <button className="bg-primary text-surface px-8 py-4 font-inter hover:bg-premium-gold transition-colors duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}