import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
import mockProducts from '@/data/mockProducts';

export default function AccessoriesCategoryPage() {
  // Filter products for accessories category
  const accessoriesProducts = mockProducts.filter(product => product.category === 'accessories');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessories Collection</h1>
          
          {/* Category description */}
          <div className="mb-8">
            <p className="text-gray-600 max-w-3xl">
              Complete your look with our premium accessories collection. From stylish bags to elegant timepieces, 
              find the perfect accessories to complement your style.
            </p>
          </div>
          
          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {accessoriesProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}