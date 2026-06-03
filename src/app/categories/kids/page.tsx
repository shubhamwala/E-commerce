import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
import mockProducts from '@/data/mockProducts';

export default function KidsCategoryPage() {
  // Filter products for kids category
  const kidsProducts = mockProducts.filter(product => product.category === 'kids');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Kids Collection</h1>
          
          {/* Category description */}
          <div className="mb-8">
            <p className="text-gray-600 max-w-3xl">
              Discover our fun and comfortable kids collection. Designed with care for your little ones, 
              featuring vibrant colors and playful designs that kids love.
            </p>
          </div>
          
          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kidsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}