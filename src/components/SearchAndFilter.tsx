'use client';

import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';

const SearchAndFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Men', 'Women', 'Kids', 'Accessories'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow'];
  const priceRanges = ['Under $50', '$50 - $100', '$100 - $200', 'Over $200'];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      {isFilterOpen && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Filters</h3>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-medium mb-2">Category</h4>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Size</h4>
              <ul className="space-y-2">
                {sizes.map((size) => (
                  <li key={size}>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {size}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Color</h4>
              <ul className="space-y-2">
                {colors.map((color) => (
                  <li key={color}>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {color}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Price Range</h4>
              <ul className="space-y-2">
                {priceRanges.map((range) => (
                  <li key={range}>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {range}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;