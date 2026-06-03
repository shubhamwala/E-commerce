'use client';

import { useState } from 'react';
import { Star, Heart, Share2, Truck, Shield } from 'lucide-react';
import anime from 'animejs';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

const ProductGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-16 h-16 md:w-24 md:h-24 flex-shrink-0 rounded-none overflow-hidden transition-all duration-300 ${
              selectedImage === index ? 'ring-2 ring-premium-gold' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={image}
              alt={`Product image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Main Image */}
      <div className="flex-1">
        <div className="relative overflow-hidden rounded-none">
          <img
            src={images[selectedImage]}
            alt="Selected product"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const SizeSelector = ({ sizes, selectedSize, setSelectedSize }: {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}) => {
  return (
    <div>
      <h3 className="font-playfair text-lg text-primary mb-4">Size</h3>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-6 py-3 border rounded-none font-inter text-sm ${
              selectedSize === size
                ? 'bg-primary text-surface border-primary'
                : 'border-primary/30 text-primary hover:border-primary'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

const ColorSelector = ({ colors, selectedColor, setSelectedColor }: {
  colors: string[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}) => {
  return (
    <div>
      <h3 className="font-playfair text-lg text-primary mb-4">Color</h3>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-10 h-10 rounded-full border-2 ${
              selectedColor === color 
                ? 'border-premium-gold ring-2 ring-premium-gold/30' 
                : 'border-primary/30'
            }`}
            style={{ backgroundColor: color }}
            aria-label={color}
          />
        ))}
      </div>
    </div>
  );
};

const ProductDetails = ({ product }: { product: Product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Adding to cart:', { product, selectedSize, selectedColor, quantity });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-playfair text-primary mb-2">{product.name}</h1>
        <div className="flex items-center mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? 'text-premium-gold fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-3 text-secondary font-inter">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      <div className="text-3xl font-playfair text-primary">
        ${product.price}
        {product.originalPrice && (
          <span className="text-lg text-secondary line-through ml-3">
            ${product.originalPrice}
          </span>
        )}
        {product.discount && (
          <span className="text-lg text-premium-gold ml-3">({product.discount}% off)</span>
        )}
      </div>

      <p className="text-secondary font-inter text-lg leading-relaxed">
        {product.description}
      </p>

      <div className="border-t border-b border-primary/10 py-8 space-y-8">
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <ColorSelector
          colors={product.colors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <div>
          <h3 className="font-playfair text-lg text-primary mb-4">Quantity</h3>
          <div className="flex items-center">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-5 py-3 border border-primary/30 rounded-none font-inter"
            >
              -
            </button>
            <span className="px-6 py-3 border border-primary/30 font-inter">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-5 py-3 border border-primary/30 rounded-none font-inter"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-primary text-surface py-4 rounded-none font-inter text-lg hover:bg-premium-gold transition-all duration-300"
        >
          ADD TO CART
        </button>
        <button className="px-6 py-4 border border-primary text-primary rounded-none hover:bg-primary/5 transition-all duration-300">
          <Heart className="w-5 h-5" />
        </button>
        <button className="px-6 py-4 border border-primary text-primary rounded-none hover:bg-primary/5 transition-all duration-300">
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Product Info */}
      <div className="border-t border-primary/10 pt-8 space-y-4">
        <div className="flex items-center gap-4">
          <Truck className="text-primary" />
          <div>
            <h4 className="font-playfair text-primary">Free Shipping</h4>
            <p className="text-secondary text-sm font-inter">On orders over $100</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Shield className="text-primary" />
          <div>
            <h4 className="font-playfair text-primary">2 Year Warranty</h4>
            <p className="text-secondary text-sm font-inter">International warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <ProductGallery images={product.images} />
        <ProductDetails product={product} />
      </div>
    </div>
  );
}