import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SearchAndFilter from '@/components/SearchAndFilter'
import ProductCard from '@/components/ProductCard'
import mockProducts from '@/data/mockProducts'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center my-8">
            All Products
          </h1>
          <div className="mb-8">
            <SearchAndFilter />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}