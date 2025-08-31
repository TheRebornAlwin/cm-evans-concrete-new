import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, Truck, Calendar, Ruler, Building2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <title>🏗️ Premium Concrete Products Cardiff Bristol Barry | Durable Precast Blocks South Wales | FREE Quotes</title>
        <meta name="description" content="⭐ Professional concrete products Cardiff, Bristol & Barry! Durable precast blocks, reinforced fence posts & floor screed. Top-rated South Wales suppliers. Call 07823 330492 for FREE quotes 🚚" />
        <link rel="canonical" href="https://cmevansconcrete.co.uk/products" />
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
              "category": product.category,
              "brand": {
                "@type": "Brand",
                "name": product.brand
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "GBP"
              }
            }))
          })}
        </script>
      </Helmet>
      
      {/* Hidden SEO Content Layer */}
      <div className="sr-only">
        <h1>Durable Concrete Products Cardiff Bristol Barry - Premium Precast Concrete Blocks South Wales</h1>
        <h2>Affordable Concrete Blocks Barry - Professional Precast Concrete Cardiff Bristol - BS 8500 Compliant</h2>
        <h3>Quality Concrete Suppliers South Wales - Ready Mix Concrete Delivery Near Me - C20 C25 C30 Mixes</h3>
        <h4>Floor Screed Cardiff Bristol - Kerbs Paving Slabs - Lintels Beams - Fibre Reinforced Concrete</h4>
        <div>
          <h6>What durable concrete blocks are available in Barry?</h6>
          <p>C&M Evans Concrete supplies a comprehensive range of durable concrete blocks in Barry including interlocking (lego) blocks in sizes 600x600x600mm, 1200x600x600mm, 1800x600x600mm, and 1200x300x600mm. All concrete blocks Barry are manufactured to professional standards for construction and landscaping projects with cube test certification.</p>
          
          <p>Discover the most comprehensive range of durable concrete products Cardiff, Bristol, and Barry with C&M Evans Concrete, your trusted concrete suppliers South Wales. Our extensive inventory includes premium concrete blocks Barry, professional-grade precast concrete Cardiff, reinforced concrete fence posts, decorative gravel boards, kerbs, paving slabs, lintels, beams, floor screed, and rapid-set concrete mixes designed for the demanding Welsh construction environment with BS 8500 compliance.</p>
          
          <p>Our concrete blocks Barry selection features versatile interlocking blocks perfect for landscaping, retaining walls, and construction projects throughout Cardiff, Bristol, and South Wales. These durable concrete blocks are manufactured to precise specifications, ensuring consistent quality and reliable performance for both residential and commercial applications with cube test certification available.</p>
          
          <p>As leading concrete suppliers Bristol and Cardiff, we specialize in precast concrete solutions that save time and reduce on-site labor costs. Our precast concrete Cardiff range includes reinforced fence posts in 6ft and 8ft standard sizes, with custom dimensions available to order. These weather-resistant concrete fence posts are engineered to withstand harsh Welsh weather conditions while maintaining structural integrity for decades.</p>
          
          <p>The concrete products Cardiff and Bristol market demands reliability and quality – standards that C&M Evans Concrete consistently exceeds. Our concrete gravel boards are available in smooth and rockface finishes, providing both functional and aesthetic benefits for complete fencing systems. Whether you need 6' x 1' or 6' x 6" options, our gravel boards complement our fence posts perfectly.</p>
          
          <p>Our concrete suppliers South Wales service extends beyond product supply to include professional advice, competitive pricing, reliable delivery, concrete pump hire, and volumetric concrete solutions. Whether you're a contractor working on large developments or a homeowner tackling DIY projects, our concrete products Barry Cardiff Bristol inventory meets diverse project requirements with consistent quality and competitive pricing including floor screed and aggregates.</p>
          
          <h6>Is rapid-set concrete and floor screed available in South Wales?</h6>
          <p>Yes, we supply Postfast 20kg rapid-set concrete and professional floor screed throughout South Wales. This quick-setting concrete mix is perfect for fence post installation and projects requiring fast curing times. Available for delivery across Barry, Cardiff, Bristol and surrounding areas with slump testing.</p>
          
          <h6>Do you supply precast concrete products including kerbs, paving slabs, lintels, and beams?</h6>
          <p>Yes, C&M Evans Concrete supplies a full range of precast concrete products including kerbs, paving slabs, lintels, beams, and floor screed solutions throughout Barry, Cardiff, Bristol, and South Wales. All products are manufactured to professional standards with cube test certification and professional installation advice available.</p>
          
          <p>Contact C&M Evans Concrete at 07823 330492 for immediate free quotes on concrete blocks Barry, precast concrete Cardiff, floor screed solutions, kerbs, paving slabs, lintels, beams, or any concrete products Bristol. Our knowledgeable team provides transparent pricing, professional guidance, cube test certification, slump testing, and efficient delivery across our entire South Wales service area including Vale of Glamorgan, Penarth, Cowbridge, Llantwit Major, and Weston-super-Mare.</p>
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
            <h1 className="text-industrial-xl lg:text-6xl font-bold mb-6 animate-fade-in-up">Choose Your Location</h1>
            <p className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto font-medium animate-fade-in-up-delay-1">
              Select your location to view concrete products, pricing, and delivery options specific to your area. Professional concrete suppliers serving Barry, Cardiff, and Bristol.
            </p>
          </div>
        </div>
      </section>

      {/* Location Selection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Barry */}
            <Link
              to="/concrete-products-barry"
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mx-auto flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">Barry Concrete Products</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Premium concrete products for Barry and Vale of Glamorgan. Ready mix concrete, concrete blocks, and precast concrete with local delivery.</p>
                <div className="flex items-center justify-center text-brand-primary font-bold group-hover:text-brand-secondary transition-colors duration-200">
                  <span>View Barry Products</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>

            {/* Cardiff */}
            <Link
              to="/concrete-products-cardiff"
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mx-auto flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">Cardiff Concrete Products</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Professional concrete products for Cardiff and South Wales. Ready mix concrete, concrete blocks, and precast concrete with reliable delivery.</p>
                <div className="flex items-center justify-center text-brand-primary font-bold group-hover:text-brand-secondary transition-colors duration-200">
                  <span>View Cardiff Products</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>

            {/* Bristol */}
            <Link
              to="/concrete-products-bristol"
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mx-auto flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">Bristol Concrete Products</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Quality concrete products for Bristol and South West England. Ready mix concrete, concrete blocks, and precast concrete with efficient delivery.</p>
                <div className="flex items-center justify-center text-brand-primary font-bold group-hover:text-brand-secondary transition-colors duration-200">
                  <span>View Bristol Products</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-600 mb-8">Call directly for immediate quotes and availability across all locations</p>
          <a
            href="tel:07823330492"
            className="inline-flex items-center px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary transition-colors duration-200 shadow-lg"
            onClick={() => {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                  event_category: 'contact',
                  event_label: 'products_hub_cta'
                });
              }
            }}
          >
            <Phone className="h-5 w-5 mr-2" />
            Call: 07823 330492
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;