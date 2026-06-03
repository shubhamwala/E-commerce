'use client';

import { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import anime from 'animejs';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  slug?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Initialize animations
  const handleMouseEnter = () => {
    // Image zoom animation
    anime({
      targets: `.product-image-${product.id}`,
      scale: 1.05,
      duration: 800,
      easing: 'easeOutExpo'
    });
  };

  const handleMouseLeave = () => {
    // Reset image zoom
    anime({
      targets: `.product-image-${product.id}`,
      scale: 1,
      duration: 600,
      easing: 'easeOutExpo'
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    // Wishlist animation
    anime({
      targets: `.wishlist-icon-${product.id}`,
      scale: [1, 1.2, 1],
      duration: 400,
      easing: 'easeOutExpo'
    });
  };

  return (
    <Link 
      href={`/products/${product.id}`}
      className="group relative block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden bg-surface">
        <img
          src={product.images[0] || '/images/product.jpg'}
          alt={product.name}
          className={`w-full h-96 object-cover product-image-${product.id} transition-all duration-700`}
        />
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-4 right-4 p-3 bg-surface/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-surface`}
        >
          <Heart className={`w-5 h-5 wishlist-icon-${product.id} ${isWishlisted ? 'text-premium-gold fill-current' : 'text-primary'}`} />
        </button>
        <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/20 transition-all duration-500"></div>
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="font-playfair text-xl text-primary">{product.name}</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-premium-gold fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-sm text-secondary ml-2">({product.reviews})</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-playfair text-lg text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-secondary line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;