import React, { useEffect } from 'react';
import { Phone, ArrowRight, Truck, Calendar, Ruler, Building2, Zap } from 'lucide-react';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreProducts = [
    {
      name: 'Concrete Fence Posts',
      description: 'Professional grade 8ft and 6ft concrete fence posts for residential and commercial projects. Custom sizes available to order for bespoke concrete solutions across Barry and Cardiff.',
      image: '/assets/concretefenceposts.jpeg',
      features: ['8ft and 6ft standard sizes', 'Custom concrete sizes to order', 'Reinforced concrete construction', 'Weather resistant for UK climate'],
      category: 'Fencing & Posts'
    },
    {
      name: 'Concrete Gravel Boards',
      description: 'Professional concrete gravel boards available in 6\' x 1\' Smooth and Rockface finish, plus 6\' x 6" smooth options. Essential for complete concrete fencing systems across South Wales.',
      image: '/assets/concretegravelboards.jpg',
      features: ['6\' x 1\' Smooth concrete finish', '6\' x 1\' Rockface concrete finish', '6\' x 6" Smooth concrete option', 'Complete concrete fencing system'],
      category: 'Fencing & Posts'
    },
    {
      name: 'Concrete Interlocking (Lego) Blocks',
      description: 'Versatile interlocking concrete blocks for construction projects. Multiple sizes available: 1200x600x600, 600x600x600, 1800x600x600, and 1200x300x600. Perfect for commercial concrete applications.',
      image: '/assets/interlockinglegoblocks.jpg',
      features: ['1200 x 600 x 600mm concrete blocks', '600 x 600 x 600mm concrete blocks', '1800 x 600 x 600mm concrete blocks', '1200 x 300 x 600mm concrete blocks'],
      category: 'Building Blocks'
    },
    {
      name: 'Postfast 20kg Rapid Set',
      description: 'Professional rapid-setting concrete mix in convenient 20kg bags. Perfect for fence post installation, concrete repairs and quick-setting concrete applications across Barry and Cardiff.',
      image: '/assets/postfast.jpg',
      features: ['20kg concrete mix bags', 'Rapid setting concrete formula', 'Easy to use concrete mix', 'Professional strength concrete'],
      category: 'Cement & Mix'
    },
    {
      name: 'Mannok General Purpose Cement 25kg',
      description: 'Premium Mannok general purpose cement in 25kg bags. High-quality cement suitable for ready mix concrete and all standard construction applications across South Wales.',
      image: '/assets/manokgeneralcement.jpg',
      features: ['25kg cement bags', 'General purpose concrete use', 'Mannok brand quality cement', 'Professional construction grade'],
      category: 'Cement & Mix'
    },
    {
      name: 'Coping Stones & Pillar Caps',
      description: 'Professional coping stones and pillar caps in various sizes. Perfect for finishing concrete walls and boundaries in residential and commercial concrete projects.',
      image: '/assets/copingstonespillarcaps.jpg',
      features: ['Various concrete sizes available', 'Professional concrete finish', 'Weather resistant concrete', 'Custom concrete options'],
      category: 'Finishing'
    }
  ];

  const categories = [
    { name: 'Fencing & Posts', count: 2 },
    { name: 'Building Blocks', count: 1 },
    { name: 'Cement & Mix', count: 2 },
    { name: 'Finishing', count: 1 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-industrial-xl lg:text-6xl font-bold mb-6 animate-fade-in-up">Ready Mix Concrete & Building Products Barry Cardiff</h1>
            <p className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto font-medium animate-fade-in-up-delay-1">
              Professional concrete contractors supplying ready mix concrete, fence posts, gravel boards and custom concrete mixes. Concrete delivery across Barry, Cardiff and South Wales. Free quotes available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
              <a
                href="tel:07823330492"
                className="inline-flex items-center px-10 py-5 bg-white text-brand-primary font-bold text-lg rounded-none hero-shadow hover-lift focus-industrial"
              >
                <Phone className="h-6 w-6 mr-3" />
                <span>Call Directly: 07823 330492</span>
              </a>
              <a
                href="mailto:cmevansltd@gmail.com"
                className="inline-flex items-center px-10 py-5 bg-white text-brand-primary font-bold text-lg rounded-none hero-shadow hover-lift focus-industrial"
              >
                <span>Email Inquiry</span>
                <ArrowRight className="h-6 w-6 ml-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-industrial-lg text-gray-900 mb-6">Ready Mix Concrete & Building Products Available</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Professional concrete products for builders, landscapers and commercial concrete contractors across Barry, Cardiff & South Wales. Ready mix concrete delivery and free quotes available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-none depth-shadow overflow-hidden hover-lift group border-l-4 border-brand-primary">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      alt={`${product.name} - Professional concrete products supplier Barry Cardiff`}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="mb-4">
                      <h3 className="text-industrial-md text-gray-900 leading-tight mb-2">{product.name}</h3>
                      <span className="text-sm font-bold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-none">
                        Contact for Details
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed font-medium">{product.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-brand-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="tel:07823330492"
                      className="inline-flex items-center text-brand-primary font-bold hover:text-brand-secondary transition-colors duration-200 text-sm uppercase tracking-wide"
                    >
                      Call for Pricing & Availability
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-industrial-lg text-gray-900 mb-8">Custom Concrete Mixes & Bespoke Sizes Available</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Bespoke concrete mixes made to specification. Custom concrete products and sizes available for commercial concrete contractors and construction projects across UK.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-white/20 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
                
                {/* Floating icon container */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Ruler className="h-10 w-10" />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-20 h-20 bg-brand-primary/20 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-brand-primary transition-colors duration-300">Custom Fence Posts</h3>
                <p className="text-gray-600 leading-relaxed font-medium">Custom concrete fence posts beyond standard 6ft and 8ft sizes. Whether you need 4ft posts for residential projects or 10ft posts for commercial concrete boundaries, we manufacture bespoke concrete products to your exact specifications.</p>
                
                {/* Bottom accent line */}
                <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-white/20 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
                
                {/* Floating icon container */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Building2 className="h-10 w-10" />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-20 h-20 bg-brand-primary/20 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-brand-primary transition-colors duration-300">Project Consultation</h3>
                <p className="text-gray-600 leading-relaxed font-medium">Professional concrete contractor consultation for your specific requirements. From residential concrete projects to commercial concrete developments, we advise on the best ready mix concrete and materials with free quotes.</p>
                
                {/* Bottom accent line */}
                <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-white/20 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
                
                {/* Floating icon container */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Zap className="h-10 w-10" />
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-20 h-20 bg-brand-primary/20 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-brand-primary transition-colors duration-300">Fast Concrete Delivery</h3>
                <p className="text-gray-600 leading-relaxed font-medium">Most custom concrete orders and ready mix concrete delivery completed within reasonable timeframes. We understand construction deadlines matter, so we prioritize concrete delivery to minimize delays on your build schedule with free quotes.</p>
                
                {/* Bottom accent line */}
                <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-brand-primary text-white p-8 rounded-none industrial-shadow">
            <Truck className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready Mix Concrete Stock & Availability</h3>
            <p className="text-gray-200 mb-6 leading-relaxed font-medium">
              Ready mix concrete and concrete product stock levels change regularly. For current concrete availability, competitive pricing, and concrete delivery options across Barry and Cardiff, call directly for immediate answers and free quotes.
            </p>
            <a
              href="tel:07823330492"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-primary font-bold rounded-none hover:bg-gray-100 transition-all duration-200 industrial-shadow hover-lift"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Directly: 07823 330492
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-industrial-lg mb-6 text-brand-primary">Need Ready Mix Concrete Quote or Have Questions?</h2>
          <p className="text-xl text-brand-primary mb-10 font-medium max-w-2xl mx-auto">
            Professional concrete contractors ready to help. We provide immediate FREE quotes, check ready mix concrete availability, and discuss concrete delivery options for your construction project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:07823330492"
              className="inline-flex items-center justify-center px-10 py-5 bg-brand-primary text-white font-bold text-lg rounded-none hover:bg-brand-secondary transition-all duration-200 hero-shadow hover-lift"
            >
              <Phone className="h-6 w-6 mr-3" />
              <span>Call: 07823 330492</span>
            </a>
            <a
              href="mailto:cmevansltd@gmail.com"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-primary font-bold rounded-none border-2 border-brand-primary hover:bg-gray-100 transition-all duration-200 hero-shadow hover-lift"
            >
              <span>Email Inquiry</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;