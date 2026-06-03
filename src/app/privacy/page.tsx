'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  const policies = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include information such as your name, email address, phone number, and shipping address."
    },
    {
      title: "How We Use Information",
      content: "We use the information we collect to provide, maintain, and improve our services. This includes personalizing your shopping experience and communicating with you about our products and services."
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential."
    },
    {
      title: "Data Security",
      content: "We implement security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair text-primary mb-12">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary font-inter mb-8">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>
              
              <div className="bg-surface p-6 rounded-none mb-8">
                <h2 className="text-2xl font-playfair text-primary mb-4">Information We Collect</h2>
                <p className="text-secondary mb-4 font-inter">
                  We collect information you provide directly to us, such as when you create an account, 
                  update your profile, or communicate with us. This may include information such as your name, 
                  email address, phone number, and shipping address.
                </p>
              </div>
              
              <div className="space-y-12">
                {policies.map((policy, index) => (
                  <div key={index} className="bg-surface p-6 rounded-none">
                    <h2 className="text-2xl font-playfair text-primary mb-4">{policy.title}</h2>
                    <p className="text-secondary font-inter">
                      {policy.content}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 bg-surface p-6 rounded-none">
                <h2 className="text-2xl font-playfair text-primary mb-6">Your Rights</h2>
                <p className="text-secondary mb-6 font-inter">
                  You have the right to access, update, or delete your personal information. 
                  You may also have the right to object to or restrict certain processing of your personal data.
                </p>
                <p className="text-secondary font-inter">
                  If you have any questions about this Privacy Policy or our treatment of your information, 
                  please contact us at privacy@zudio.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}