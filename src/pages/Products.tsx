import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, Truck, Calendar, Ruler, Building2, Zap } from 'lucide-react';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreProducts = [
    {
      name: 'Concrete Fence Posts',
      description: '8ft and 6ft concrete fence posts available. Other sizes can be made to order for specific project requirements.',
      image: '/assets/concretefenceposts.jpeg',
      features: ['8ft and 6ft standard sizes', 'Custom sizes to order', 'Reinforced concrete', 'Weather resistant'],
      category: 'Fencing & Posts',
      sku: 'CFP-001',
      brand: 'C&M Evans Concrete'
    },
    {
      name: 'Concrete Gravel Boards',
      description: 'Available in 6\' x 1\' Smooth and Rockface finish, plus 6\' x 6" smooth options for complete fencing solutions.',
      image: '/assets/concretegravelboards.jpg',
      features: ['6\' x 1\' Smooth finish', '6\' x 1\' Rockface finish', '6\' x 6" Smooth option', 'Complete fencing system'],
      category: 'Fencing & Posts',
      sku: 'CGB-001',
      brand: 'C&M Evans Concrete'
    },
    {
      name: 'Concrete Interlocking (Lego) Blocks',
      description: 'Versatile interlocking concrete blocks in multiple sizes: 1200x600x600, 600x600x600, 1800x600x600, and 1200x300x600.',
      image: '/assets/interlockinglegoblocks.jpg',
      features: ['1200 x 600 x 600mm', '600 x 600 x 600mm', '1800 x 600 x 600mm', '1200 x 300 x 600mm'],
      category: 'Building Blocks',
      sku: 'ILB-001',
      brand: 'C&M Evans Concrete'
    },
    {
      name: 'Postfast 20kg Rapid Set',
      description: 'Quick-setting concrete mix in convenient 20kg bags. Perfect for fence post installation and rapid setting applications.',
      image: '/assets/postfast.jpg',
      features: ['20kg bags', 'Rapid setting formula', 'Easy to use', 'Professional strength'],
      category: 'Cement & Mix',
      sku: 'PRS-001',
      brand: 'Postfast'
    },
    {
      name: 'Mannok General Purpose Cement 25kg',
      description: 'High-quality Mannok general purpose cement in 25kg bags. Suitable for all standard construction applications.',
      image: '/assets/manokgeneralcement.jpg',
      features: ['25kg bags', 'General purpose use', 'Mannok brand quality', 'Construction grade'],
      category: 'Cement & Mix',
      sku: 'MGC-001',
      brand: 'Mannok'
    },
    {
      name: 'Coping Stones & Pillar Caps',
      description: 'Various sizes of coping stones and pillar caps available for professional finishing of walls and boundaries.',
      image: '/assets/copingstonespillarcaps.jpg',
      features: ['Various sizes available', 'Professional finish', 'Weather resistant', 'Custom options'],
      category: 'Finishing',
      sku: 'CSP-001',
      brand: 'C&M Evans Concrete'
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
      <Helmet>
        <title>🏗️ Durable Concrete Products Cardiff Bristol Barry | Premium Precast Concrete Blocks South Wales ⭐</title>
        <meta name="description" content="✅ Professional concrete products Cardiff, Bristol & Barry! Durable concrete blocks, premium precast concrete, reinforced fence posts & gravel boards. Top-rated South Wales concrete suppliers. FREE quotes 07823 330492 🚚" />
        <link rel="canonical" href="https://cmevansconcrete.co.uk/products" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="🏗️ Durable Concrete Products Cardiff Bristol Barry | Premium Precast Concrete Blocks South Wales ⭐" />
        <meta property="og:description" content="✅ Professional concrete products Cardiff, Bristol & Barry! Durable concrete blocks, premium precast concrete, reinforced fence posts & gravel boards." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cmevansconcrete.co.uk/products" />
        <meta property="og:image" content="https://cmevansconcrete.co.uk/assets/concretefenceposts.jpeg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🏗️ Durable Concrete Products Cardiff Bristol Barry | Premium Precast Concrete Blocks South Wales ⭐" />
        <meta name="twitter:description" content="✅ Professional concrete products Cardiff, Bristol & Barry! Durable concrete blocks, premium precast concrete, reinforced fence posts & gravel boards." />
        <meta name="twitter:image" content="https://cmevansconcrete.co.uk/assets/concretefenceposts.jpeg" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cmevansconcrete.co.uk/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://cmevansconcrete.co.uk/products"
              }
            ]
          })}
        </script>
        
        {/* Enhanced Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Premium Concrete Products Barry Cardiff Bristol South Wales",
            "description": "Professional concrete products available in Barry, Cardiff, Bristol and South Wales including ready mix concrete, concrete blocks, precast concrete, fence posts and gravel boards",
            "itemListElement": coreProducts.map((product, index) => ({
              "@type": "Product",
              "position": index + 1,
              "name": product.name,
              "description": product.description,
              "image": `https://cmevansconcrete.co.uk${product.image}`,
              "sku": product.sku,
              "category": product.category,
              "brand": {
                "@type": "Brand",
                "name": product.brand
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "GBP",
                "seller": {
                  "@type": "Organization",
                  "name": "C&M Evans Concrete",
                  "telephone": "07823330492"
                },
                "areaServed": ["Barry", "Cardiff", "Bristol", "South Wales"]
              },
              "additionalProperty": product.features.map(feature => ({
                "@type": "PropertyValue",
                "name": "Feature",
                "value": feature
              }))
            }))
          })}
        </script>
        
        {/* FAQ Schema for Products */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What concrete blocks are available in Barry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "C&M Evans Concrete supplies a comprehensive range of concrete blocks in Barry including interlocking (lego) blocks in sizes 600x600x600mm, 1200x600x600mm, 1800x600x600mm, and 1200x300x600mm. All concrete blocks Barry are manufactured to professional standards for construction and landscaping projects."
                }
              },
              {
                "@type": "Question",
                "name": "Do you supply precast concrete in Cardiff?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we supply premium precast concrete Cardiff including concrete fence posts (6ft and 8ft), gravel boards (smooth and rockface finish), coping stones, and pillar caps. Our precast concrete Cardiff products are reinforced and weather-resistant, perfect for Welsh conditions."
                }
              },
              {
                "@type": "Question",
                "name": "What sizes of concrete fence posts are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We stock 6ft and 8ft concrete fence posts as standard sizes, with custom sizes available to order. All concrete fence posts are reinforced and suitable for residential and commercial fencing projects across Barry, Cardiff, Bristol and South Wales."
                }
              },
              {
                "@type": "Question",
                "name": "Is rapid-set concrete available in South Wales?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we supply Postfast 20kg rapid-set concrete throughout South Wales. This quick-setting concrete mix is perfect for fence post installation and projects requiring fast curing times. Available for delivery across Barry, Cardiff, Bristol and surrounding areas."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      {/* Hidden SEO Content Layer */}
      <div className="sr-only">
        <h1>Durable Concrete Products Cardiff Bristol Barry - Premium Precast Concrete Blocks South Wales</h1>
        <h2>Affordable Concrete Blocks Barry - Professional Precast Concrete Cardiff Bristol</h2>
        <h3>Quality Concrete Suppliers South Wales - Ready Mix Concrete Delivery Near Me</h3>
        
        <div>
          <p>Discover the most comprehensive range of concrete products Cardiff, Bristol, and Barry with C&M Evans Concrete, your trusted concrete suppliers South Wales. Our extensive inventory includes premium concrete blocks Barry, professional-grade precast concrete Cardiff, reinforced concrete fence posts, decorative gravel boards, and rapid-set concrete mixes designed for the demanding Welsh construction environment.</p>
          
          <p>Our concrete blocks Barry selection features versatile interlocking blocks perfect for landscaping, retaining walls, and construction projects throughout Cardiff, Bristol, and South Wales. These durable concrete blocks are manufactured to precise specifications, ensuring consistent quality and reliable performance for both residential and commercial applications.</p>
          
          <p>As leading concrete suppliers Bristol and Cardiff, we specialize in precast concrete solutions that save time and reduce on-site labor costs. Our precast concrete Cardiff range includes reinforced fence posts in 6ft and 8ft standard sizes, with custom dimensions available to order. These weather-resistant concrete fence posts are engineered to withstand harsh Welsh weather conditions while maintaining structural integrity for decades.</p>
          
          <p>The concrete products Cardiff and Bristol market demands reliability and quality – standards that C&M Evans Concrete consistently exceeds. Our concrete gravel boards are available in smooth and rockface finishes, providing both functional and aesthetic benefits for complete fencing systems. Whether you need 6' x 1' or 6' x 6" options, our gravel boards complement our fence posts perfectly.</p>
          
          <p>For projects requiring rapid completion, our Postfast 20kg rapid-set concrete offers professional-strength results with accelerated curing times. This premium concrete mix is ideal for fence post installation, emergency repairs, and time-sensitive construction projects across Barry, Cardiff, Bristol, and surrounding South Wales areas.</p>
          
          <p>Our concrete suppliers South Wales service extends beyond product supply to include professional advice, competitive pricing, and reliable delivery. Whether you're a contractor working on large developments or a homeowner tackling DIY projects, our concrete products Barry Cardiff Bristol inventory meets diverse project requirements with consistent quality and competitive pricing.</p>
          
          <p>Contact C&M Evans Concrete at 07823 330492 for immediate free quotes on concrete blocks Barry, precast concrete Cardiff, or any concrete products Bristol. Our knowledgeable team provides transparent pricing, professional guidance, and efficient delivery across our entire South Wales service area including Vale of Glamorgan, Penarth, Cowbridge, and Llantwit Major.</p>
        </div>
        
        {/* Internal linking for SEO */}
        <nav>
          <Link to="/">Return to concrete suppliers Barry Cardiff Bristol homepage</Link>
          <Link to="/contact">Contact concrete products suppliers South Wales</Link>
          <Link to="/about">About our concrete business Barry Cardiff Bristol</Link>
        </nav>
      </div>
      
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="sr-only">Concrete Products Cardiff Bristol Barry - Precast Concrete Blocks South Wales</h1>
            <h1 className="text-industrial-xl lg:text-6xl font-bold mb-6 animate-fade-in-up">Current Products</h1>
            <p className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto font-medium animate-fade-in-up-delay-1">
              Professional concrete products in stock and ready for collection or delivery across Barry, Cardiff, and South Wales. Free quotes available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
              <a
                href="tel:07823330492"
                className="inline-flex items-center px-10 py-5 bg-white text-brand-primary font-bold text-lg rounded-none hero-shadow hover-lift focus-industrial"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'phone_call', {
                      event_category: 'contact',
                      event_label: 'products_hero'
                    });
                  }
                }}
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
            <h2 className="sr-only">Available Concrete Products Barry Cardiff Bristol - Ready Mix Concrete South Wales</h2>
            <h2 className="text-industrial-lg text-gray-900 mb-6">Available Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Quality concrete products for builders, landscapers, and contractors with free quotes available
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-none depth-shadow overflow-hidden hover-lift group border-l-4 border-brand-primary">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={product.image}
                      alt={`${product.name} - Premium ${product.category.toLowerCase()} concrete products Barry Cardiff Bristol South Wales - Professional grade ${product.name.toLowerCase()} for construction landscaping projects - SKU ${product.sku}`}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
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
                      onClick={() => {
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'phone_call', {
                            event_category: 'contact',
                            event_label: `product_${product.name.toLowerCase().replace(/\s+/g, '_')}`
                          });
                        }
                      }}
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
            <h2 className="sr-only">Custom Concrete Products Barry Cardiff - Made to Order Precast Concrete South Wales</h2>
            <h2 className="text-industrial-lg text-gray-900 mb-8">Custom Sizes Available</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Many products can be made to order in custom sizes for specific project requirements
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
                <p className="text-gray-600 leading-relaxed font-medium">Other sizes beyond 6ft and 8ft can be made to order for specific projects. Whether you need 4ft posts for garden features or 10ft posts for commercial boundaries, we can manufacture to your exact specifications.</p>
                
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
                <p className="text-gray-600 leading-relaxed font-medium">Discuss your specific requirements and we'll advise on the best products for your project. From residential garden boundaries to commercial developments, we help you choose the right materials and dimensions with free quotes.</p>
                
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
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-brand-primary transition-colors duration-300">Reasonable Turnaround</h3>
                <p className="text-gray-600 leading-relaxed font-medium">Most custom orders can be completed within reasonable timeframes to keep your project moving. We understand deadlines matter, so we prioritize custom work to minimize delays on your build schedule with free quotes.</p>
                
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
            <h3 className="text-2xl font-bold mb-4">Stock & Availability</h3>
            <p className="text-gray-200 mb-6 leading-relaxed font-medium">
              Stock levels change regularly. For current availability, pricing, and delivery options, 
              call directly for immediate answers and free quotes.
            </p>
            <a
              href="tel:07823330492"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-primary font-bold rounded-none hover:bg-gray-100 transition-all duration-200 industrial-shadow hover-lift"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'phone_call', {
                    event_category: 'contact',
                    event_label: 'stock_availability'
                  });
                }
              }}
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
          <h2 className="text-industrial-lg mb-6 text-brand-primary">Need a Quote or Have Questions?</h2>
         <h3 className="sr-only">Contact Concrete Suppliers Barry Cardiff Bristol for Ready Mix Concrete South Wales</h3>
          <p className="text-xl text-brand-primary mb-10 font-medium max-w-2xl mx-auto">
            We can provide immediate FREE quotes, check availability, and discuss delivery options for your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:07823330492"
              className="inline-flex items-center justify-center px-10 py-5 bg-brand-primary text-white font-bold text-lg rounded-none hover:bg-brand-secondary transition-all duration-200 hero-shadow hover-lift"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'phone_call', {
                    event_category: 'contact',
                    event_label: 'products_cta'
                  });
                }
              }}
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