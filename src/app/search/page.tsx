'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
import { Search, Filter } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOptions, setFilterOptions] = useState({
    category: 'all',
    priceRange: 'all',
    inStock: false
  });

  // Mock products data
  const mockProducts = [
    { 
      id: '1', 
      name: 'Classic White T-Shirt', 
      price: 29.99,
      description: 'Premium cotton t-shirt with modern fit',
      images: ['/images/product.jpg'],
      category: 'men',
      subcategory: 'tshirts',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Grey'],
      inStock: true,
      rating: 4.5,
      reviews: 128
    },
    { 
      id: '2', 
      name: 'Summer Floral Dress', 
      price: 45.99,
      description: 'Elegant summer dress with floral pattern',
      images: ['/images/floral-dress.jpg'],
      category: 'women',
      subcategory: 'dresses',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Floral', 'Navy', 'Red'],
      inStock: true,
      rating: 4.8,
      reviews: 203
    }
  ];

  useEffect(() => {
    // Filter products based on search query and filters
    const filtered = mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterOptions.category === 'all' || product.category === filterOptions.category;
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProducts(filtered);
  }, [searchQuery, filterOptions]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-playfair text-primary mb-4">Search</h1>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-6 py-4 border border-primary/30 bg-surface text-primary font-inter text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary" size={24} />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="md:w-1/4">
              <div className="bg-surface p-6 rounded-none">
                <h2 className="text-xl font-playfair text-primary mb-6">Filters</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-inter text-primary mb-2">Category</h3>
                    <select 
                      className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                      value={filterOptions.category}
                      onChange={(e) => setFilterOptions({...filterOptions, category: e.target.value})}
                    >
                      <option value="all">All Categories</option>
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      <option value="kids">Kids</option>
                      <option value="accessories">Accessories</option>
                    </select>
                  </div>
                  
                  <div>
                    <h3 className="font-inter text-primary mb-2">Sort By</h3>
                    <select 
                      className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Search results */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-primary font-inter">
                  {filteredProducts.length} products found
                </p>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-primary">No products found</p>
                  <p className="text-secondary mt-2">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;