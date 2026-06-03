'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair text-primary mb-12 text-center">Returns & Exchanges</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-playfair text-primary mb-6">Our Return Policy</h2>
                <p className="text-secondary mb-6 font-inter">
                  We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                  you can return it within 30 days for a full refund or exchange.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                      <span className="text-surface text-xs font-bold">1</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-playfair text-primary">Eligibility</h3>
                      <p className="text-secondary font-inter">
                        Items must be in new, unused condition with all original tags attached.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                      <span className="text-surface text-xs font-bold">2</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-playfair text-primary">Time Limit</h3>
                      <p className="text-secondary font-inter">
                        Returns must be initiated within 30 days of delivery date.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center mt-1">
                      <span className="text-surface text-xs font-bold">3</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-playfair text-primary">Process</h3>
                      <p className="text-secondary font-inter">
                        Contact our support team to initiate your return and receive a return label.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-playfair text-primary mb-6">Non-Returnable Items</h2>
                <p className="text-secondary mb-6 font-inter">
                  Certain items cannot be returned for hygiene or safety reasons:
                </p>
                
                <ul className="space-y-3 text-secondary font-inter">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Undergarments and swimwear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Beauty and cosmetic products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Personal care items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Items marked as final sale</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 bg-surface p-8 rounded-none">
              <h2 className="text-2xl font-playfair text-primary mb-6 text-center">Start Your Return</h2>
              <p className="text-secondary text-center mb-8 font-inter">
                Ready to return an item? Please fill out the form below and our team will process your request.
              </p>
              
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-primary/30 bg-background text-primary font-inter"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-primary/30 bg-background text-primary font-inter"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="order" className="block text-sm font-medium text-primary mb-2">
                    Order Number
                  </label>
                  <input
                    type="text"
                    id="order"
                    className="w-full px-4 py-3 border border-primary/30 bg-background text-primary font-inter"
                    placeholder="Order number"
                  />
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-primary mb-2">
                    Reason for Return
                  </label>
                  <select
                    id="reason"
                    className="w-full px-4 py-3 border border-primary/30 bg-background text-primary font-inter"
                  >
                    <option value="">Select a reason</option>
                    <option value="wrong-size">Wrong Size</option>
                    <option value="defective">Defective Item</option>
                    <option value="not-as-described">Not as Described</option>
                    <option value="changed-mind">Changed My Mind</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-primary/30 bg-background text-primary font-inter"
                    placeholder="Please provide any additional information about your return..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-surface px-6 py-4 font-inter hover:bg-premium-gold transition-colors"
                >
                  Submit Return Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}