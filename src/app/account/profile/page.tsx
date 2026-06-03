'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { User } from 'lucide-react';

const AccountProfilePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
    console.log('Profile updated:', profileData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-playfair text-primary mb-8">My Profile</h1>

            <div className="bg-surface p-6 rounded-none">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-playfair text-primary">Profile Information</h2>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary mb-2 font-inter">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                  />
                </div>
                <div>
                  <label className="block text-secondary mb-2 font-inter">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                  />
                </div>
                <div>
                  <label className="block text-secondary mb-2 font-inter">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                  />
                </div>
                <div>
                  <label className="block text-secondary mb-2 font-inter">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-primary/30 bg-surface text-primary font-inter"
                  />
                </div>

                <div className="md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="bg-primary text-surface px-6 py-3 font-inter hover:bg-premium-gold transition-colors"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AccountProfilePage;