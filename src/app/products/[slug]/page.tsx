import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Star, Heart, ShoppingCart, Share2, Package, Truck, RotateCcw } from 'lucide-react';
import mockProducts from '@/data/mockProducts';
import anime from 'animejs';
import { useEffect, useState } from 'react';

// Function to find product by slug
const findProductBySlug = (slug: string) => {
  return mockProducts.find(p => p.id === slug) || null;
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Find the product by slug
  const product = findProductBySlug(slug);
  
  // If product not found, return 404
  if (!product) {
    notFound();
    return null;
  }
  
  // Find related products from the same category
  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  // Find recommended products from different categories
  const recommendedProducts = mockProducts
    .filter(p => p.category !== product.category)
    .slice(0, 4);

  // Initialize animations
  useEffect(() => {
    // Image gallery animation
    anime({
      targets: '.product-gallery img',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutExpo'
    });

    // Product info animation
    anime({
      targets: '.product-info > *',
      opacity: [0, 1],
      translateX: [-20, 0],
      delay: anime.stagger(50, {start: 200}),
      duration: 600,
      easing: 'easeOutExpo'
    });

    // Related products animation
    anime({
      targets: '.related-product',
      opacity: [0, 1],
      scale: [0.9, 1],
      delay: anime.stagger(100, {start: 500}),
      duration: 800,
      easing: 'easeOutExpo'
    });
  }, []);

  // Handle image click to change main image
  const [mainImage, setMainImage] = useState(product.images[0]);
  
  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
    anime({
      targets: '.main-product-image',
      scale: [0.95, 1],
      duration: 300,
      easing: 'easeOutExpo'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm text-gray-500">
          Home / {product.category.charAt(0).toUpperCase() + product.category.slice(1)} / {product.name}
        </div>
        
        {/* Product Detail Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images Gallery */}
            <div className="flex flex-col product-gallery">
              <div className="mb-4 relative group">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="main-product-image w-full h-96 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-20 h-20 object-cover rounded-md border cursor-pointer hover:border-gray-900 transition-all duration-300"
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="product-info">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                {product.originalPrice && product.originalPrice > product.price ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                    <span className="ml-2 text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="ml-2 bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button 
                      key={size}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button 
                      key={color}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Stock Status */}
              <div className="mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <button className="flex-1 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center group">
                  <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 group">
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
                <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 group">
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Product Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                    <Truck className="w-6 h-6 text-gray-600 mb-1" />
                    <span className="text-sm text-gray-600">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                    <RotateCcw className="w-6 h-6 text-gray-600 mb-1" />
                    <span className="text-sm text-gray-600">30-Day Returns</span>
                  </div>
                  <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                    <Package className="w-6 h-6 text-gray-600 mb-1" />
                    <span className="text-sm text-gray-600">2-Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Specifications */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-900">Category</h3>
              <p className="text-gray-600">{product.category}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Subcategory</h3>
              <p className="text-gray-600">{product.subcategory}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Available Sizes</h3>
              <p className="text-gray-600">{product.sizes.join(', ')}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Available Colors</h3>
              <p className="text-gray-600">{product.colors.join(', ')}</p>
            </div>
          </div>
        </div>
        
        {/* Customer Reviews */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-medium">Amazing Quality!</span>
              </div>
              <p className="text-gray-600 mb-2">
                "This product exceeded my expectations. The quality is outstanding and the fit is perfect. 
                I would definitely recommend this to anyone looking for a great value."
              </p>
              <div className="text-sm text-gray-500">by Sarah Johnson on May 15, 2026</div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm p-4 related-product">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name} 
                    className="w-full h-48 object-cover rounded-md mb-3 transition-transform duration-500 hover:scale-105"
                  />
                  <h3 className="font-medium text-gray-900">{relatedProduct.name}</h3>
                  <p className="text-gray-600">${relatedProduct.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recommendedProducts.map((recommendedProduct) => (
                <div key={recommendedProduct.id} className="bg-white rounded-lg shadow-sm p-4 related-product">
                  <img 
                    src={recommendedProduct.images[0]} 
                    alt={recommendedProduct.name} 
                    className="w-full h-48 object-cover rounded-md mb-3 transition-transform duration-500 hover:scale-105"
                  />
                  <h3 className="font-medium text-gray-900">{recommendedProduct.name}</h3>
                  <p className="text-gray-600">${recommendedProduct.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}