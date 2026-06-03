'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import anime from 'animejs';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar animation on mount
  useEffect(() => {
    anime({
      targets: '.nav-item',
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, {start: 100}),
      easing: 'easeOutExpo',
      duration: 800
    });
  }, []);

  const navLinks = [
    { name: 'Men', href: '/categories/men' },
    { name: 'Women', href: '/categories/women' },
    { name: 'Kids', href: '/categories/kids' },
    { name: 'Accessories', href: '/categories/accessories' },
    { name: 'New Arrivals', href: '/products' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-surface/90 backdrop-blur-md py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="nav-item">
            <Link 
              href="/" 
              className="text-2xl font-playfair text-primary font-bold tracking-wider"
            >
              ZUDIO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 nav-item">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`text-sm font-inter tracking-wider ${
                  pathname === link.href 
                    ? 'text-premium-gold' 
                    : 'text-primary hover:text-premium-gold transition-colors'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 nav-item">
            <Link href="/search" className="text-primary hover:text-premium-gold transition-colors">
              <Search size={20} />
            </Link>
            <Link href="/wishlist" className="text-primary hover:text-premium-gold transition-colors">
              <Heart size={20} />
            </Link>
            <Link href="/account" className="text-primary hover:text-premium-gold transition-colors">
              <User size={20} />
            </Link>
            <Link href="/cart" className="text-primary hover:text-premium-gold transition-colors">
              <ShoppingBag size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-surface z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-2xl font-playfair text-primary hover:text-premium-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;