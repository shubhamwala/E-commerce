'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair text-primary mb-12">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-playfair text-primary mb-4">1. General Information</h2>
              <p className="text-secondary mb-8">
                These terms and conditions govern your use of our website and services. 
                By accessing or using our services, you agree to be bound by these terms.
              </p>
              
              <h2 className="text-2xl font-playfair text-primary mb-4">2. Product Information</h2>
              <p className="text-secondary mb-4">
                We make every effort to display as accurately as possible the colors, characteristics, and composition of our products. 
                However, we do not guarantee that product descriptions or other content is accurate, complete, reliable, or current.
              </p>
              
              <h2 className="text-2xl font-playfair text-primary mb-4">3. Orders and Payment</h2>
              <p className="text-secondary mb-4">
                All orders are subject to availability and Zudio reserves the right to limit the quantities of any products offered.
              </p>
              
              <h2 className="text-2xl font-playfair text-primary mb-4">4. Intellectual Property</h2>
              <p className="text-secondary mb-4">
                All content included in or made available through our website, such as text, graphics, logos, and software, 
                is the property of Zudio or its licensors.
              </p>
              
              <h2 className="text-2xl font-playfair text-primary mb-4">5. User Responsibilities</h2>
              <p className="text-secondary mb-4">
                You are responsible for maintaining the confidentiality of your account and password and for restricting 
                access to your computer, and you agree to accept responsibility for all activities that occur under your account.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}