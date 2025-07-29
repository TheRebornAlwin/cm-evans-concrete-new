import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4 ml-3">
              <img 
                src="/assets/logo.jpg" 
                alt="C&M Evans Concrete Logo" 
                className="h-40 w-50 object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Supplying high-quality concrete products to builders and landscapers 
              across Barry, Cardiff and South Wales. Strong materials, competitive prices, 
              professional service.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:07823330492"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>07823 330492</span>
              </a>
              <a
                href="mailto:cmevansltd@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>cmevansltd@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/cm_evans2023?igsh=MXJ3b3BndGx1NmJvMQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-4 w-4" />
                <span>@cm_evans2023</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Barry, Cardiff & South Wales</span>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Business Hours</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Mon-Fri: 8am-5pm</p>
                <p>Sat: 9am-12pm</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Barry</li>
              <li>Cardiff</li>
              <li>Vale of Glamorgan</li>
              <li>Penarth</li>
              <li>Cowbridge</li>
              <li>Llantwit Major</li>
            </ul>
            
            {/* Free Quotes */}
            <div className="mt-6">
              <div className="bg-brand-secondary rounded-lg text-left">
                <h4 className="text-sm font-semibold mb-2">Free Quotes Available</h4>
                <p className="text-gray-300 text-sm">Call us today for immediate, free quotes on all our products.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-tertiary pt-8 mt-8">
          <div className="text-center text-gray-300 text-sm">
            <p>&copy; 2024 C&M Evans Concrete. All rights reserved.</p>
          </div>
          
          {/* Discreet branding line */}
          <div className="border-t border-white/5 pt-6 mt-6">
            <div className="text-center">
              <p className="text-base text-white leading-relaxed">
                <a 
                  href="mailto:alwin@tripletendigits.com"
                  className="font-bold underline decoration-white/50 hover:text-gray-200 hover:decoration-white/80 transition-all duration-200 hover:scale-[1.02] inline-block"
                >
                  Triple Ten Digits
                  
                </a>
                <span className="mx-2">|</span>
                <span>Precision-built websites. Delivered in a week or less. Designed to convert.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;