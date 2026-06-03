'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. Follow the steps to enter your shipping and payment information to complete your purchase."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, MasterCard, and American Express. We also support PayPal and other secure payment methods."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Express shipping options are available for 1-2 business day delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all items. Items must be in new, unused condition with all original tags attached. Visit our Returns page for more information."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on the carrier's website."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-playfair text-primary mb-12 text-center">Frequently Asked Questions</h1>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-primary/10 pb-8">
                  <h2 className="text-2xl font-playfair text-primary mb-4">{faq.question}</h2>
                  <p className="text-secondary font-inter">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-surface p-8 rounded-none">
              <h2 className="text-2xl font-playfair text-primary mb-6 text-center">Still Have Questions?</h2>
              <p className="text-secondary text-center mb-6 font-inter">
                Can't find the answer you're looking for? Please contact our customer support team.
              </p>
              <div className="text-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-primary text-surface px-8 py-3 font-inter hover:bg-premium-gold transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}