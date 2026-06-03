import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Careers at Zudio</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700 mb-4">
              Join our team and help us revolutionize the fashion industry.
            </p>
            <p className="text-gray-700">
              We're always looking for talented individuals to join our growing team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}