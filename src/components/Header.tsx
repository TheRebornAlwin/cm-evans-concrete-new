import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-brand-primary industrial-shadow sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo.jpg"
              alt="C&M Evans Concrete Logo - Premium concrete suppliers Barry Cardiff Bristol South Wales - Family-run concrete business established Barry - Professional concrete products delivery South Wales" 
              className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 py-2 ${
                  isActive(item.href)
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number - Desktop */}
          <a
            href="tel:07823330492"
            className="hidden md:flex items-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-none font-bold hover:bg-gray-100 transition-all duration-200 industrial-shadow hover-lift focus-industrial"
           onClick={() => {
             if (typeof gtag !== 'undefined') {
               gtag('event', 'phone_call', {
                 event_category: 'contact',
                 event_label: 'header_phone'
               });
             }
           }}
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">07823 330492</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-3 hover:bg-white/10 transition-colors duration-200 rounded-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-secondary border-t border-white/10 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-white/10 border-l-4 border-white'
                    : 'hover:bg-white/5 border-l-4 border-transparent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:07823330492"
              className="block px-4 py-4 text-brand-primary font-bold bg-white rounded-none text-center mt-4 hover:bg-gray-100 transition-all duration-200 industrial-shadow"
              onClick={() => setIsMenuOpen(false)}
             onClick={() => {
               setIsMenuOpen(false);
               if (typeof gtag !== 'undefined') {
                 gtag('event', 'phone_call', {
                   event_category: 'contact',
                   event_label: 'mobile_menu_phone'
                 });
               }
             }}
            >
              <Phone className="h-4 w-4 inline mr-2" />
              <span className="text-sm">Call: 07823 330492</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;