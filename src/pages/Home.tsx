import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, CheckCircle, Truck, Shield, Clock } from 'lucide-react';

const HeroCarousel = () => {
  const carouselImages = [
    '/assets/concretegravelboards.jpg',
    '/assets/manokgeneralcement.jpg',
    '/assets/copingstonespillarcaps.jpg',
    '/assets/postfast.jpg',
    '/assets/whatweoffer.jpg'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-2000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: index === 0 ? 1 : 0,
            animation: `heroSlide ${carouselImages.length * 2.75}s infinite ${index * 2.75}s`
          }}
        />
      ))}
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      {/* Additional mobile overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = [
    {
      name: 'Concrete Fence Posts',
      price: 'Call for Details',
      description: '8ft and 6ft concrete fence posts. Other sizes made to order.',
      image: '/assets/concretefenceposts.jpeg',
      sku: 'CFP-001'
    },
    {
      name: 'Concrete Gravel Boards',
      price: 'Call for Details',
      description: '6\' x 1\' Smooth and Rockface, plus 6\' x 6" smooth options available.',
      image: '/assets/concretegravelboards.jpg',
      sku: 'CGB-001'
    },
    {
      name: 'Interlocking (Lego) Blocks',
      price: 'Call for Details',
      description: 'Multiple sizes available from 600x600x600 to 1800x600x600.',
      image: '/assets/interlockinglegoblocks.jpg',
      sku: 'ILB-001'
    },
    {
      name: 'Coping Stones & Pillar Caps',
      price: 'Call for Details',
      description: 'Various sizes available for professional wall finishing.',
      image: '/assets/copingstonespillarcaps.jpg',
      sku: 'CSP-001'
    },
    {
      name: 'Mannok General Purpose Cement',
      price: 'Call for Details',
      description: 'High-quality general purpose cement in 25kg bags.',
      image: '/assets/manokgeneralcement.jpg',
      sku: 'MGC-001'
    },
    {
      name: 'Postfast 20kg Rapid Set',
      price: 'Call for Details',
      description: 'Quick-setting concrete mix in convenient 20kg bags.',
      image: '/assets/postfast.jpg',
      sku: 'PRS-001'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Superior Quality',
      description: 'Stronger, longer-lasting products that stand the test of time.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Competitive Pricing',
      description: 'Fair pricing without compromising on quality or service'
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Speak Directly To Us',
      description: 'Speak directly to us for immediate, FREE quotes and professional advice'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Local Service', 
      description: 'Delivery and collection available across Barry, Cardiff and South Wales'
    }
  ];

  const achievements = [
    { number: '100%', label: 'Local Business' },
    { number: '24hr', label: 'Response Time' }
  ];

  return (
    <div>
      <Helmet>
        <title>🏗️ Premium Concrete Products Barry Cardiff Bristol | #1 Ready Mix Concrete Suppliers South Wales</title>
        <meta name="description" content="⭐ Top-rated concrete suppliers Barry! Premium ready mix concrete, precast blocks & fence posts. Same-day delivery Cardiff, Bristol & South Wales. FREE quotes 07823 330492 ✅" />
        <link rel="canonical" href="https://cmevansconcrete.co.uk/" />
        
        {/* Geo-targeting meta tags */}
        <meta name="geo.region" content="GB-WLS" />
        <meta name="geo.placename" content="Barry, Cardiff, Bristol" />
        <meta name="geo.position" content="51.4007;-3.2919" />
        <meta name="ICBM" content="51.4007, -3.2919" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="🏗️ Premium Concrete Products Barry Cardiff Bristol | #1 Ready Mix Concrete Suppliers South Wales" />
        <meta property="og:description" content="⭐ Top-rated concrete suppliers Barry! Premium ready mix concrete, precast blocks & fence posts. Same-day delivery Cardiff, Bristol & South Wales." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cmevansconcrete.co.uk/" />
        <meta property="og:image" content="https://cmevansconcrete.co.uk/assets/logo.jpg" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="C&M Evans Concrete" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Concrete Products Barry Cardiff Bristol | #1 Ready Mix Concrete Suppliers South Wales" />
        <meta name="twitter:description" content="Top-rated concrete suppliers Barry! Premium ready mix concrete, precast blocks & fence posts. Same-day delivery Cardiff, Bristol & South Wales." />
        <meta name="twitter:image" content="https://cmevansconcrete.co.uk/assets/logo.jpg" />
        
        {/* Enhanced Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "C&M Evans Concrete",
            "description": "Premium concrete products supplier serving Barry, Cardiff, Bristol and South Wales with ready mix concrete, precast blocks, fence posts and professional delivery services",
            "url": "https://cmevansconcrete.co.uk",
            "telephone": "07823330492",
            "email": "cmevansltd@gmail.com",
            "foundingDate": "2020",
            "slogan": "Quality Concrete Products Built to Last",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barry",
              "addressRegion": "South Wales",
              "addressCountry": "GB",
              "postalCode": "CF62"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.4007",
              "longitude": "-3.2919"
            },
            "serviceArea": [
              {
                "@type": "City",
                "name": "Barry",
                "sameAs": "https://en.wikipedia.org/wiki/Barry,_Vale_of_Glamorgan"
              },
              {
                "@type": "City", 
                "name": "Cardiff",
                "sameAs": "https://en.wikipedia.org/wiki/Cardiff"
              },
              {
                "@type": "City",
                "name": "Bristol",
                "sameAs": "https://en.wikipedia.org/wiki/Bristol"
              },
              {
                "@type": "State",
                "name": "South Wales",
                "sameAs": "https://en.wikipedia.org/wiki/South_Wales"
              },
              {
                "@type": "City",
                "name": "Vale of Glamorgan"
              },
              {
                "@type": "City",
                "name": "Penarth"
              },
              {
                "@type": "City",
                "name": "Cowbridge"
              },
              {
                "@type": "City",
                "name": "Llantwit Major"
              }
            ],
            "openingHours": [
              "Mo-Fr 08:00-17:00",
              "Sa 09:00-12:00"
            ],
            "priceRange": "££",
            "image": "https://cmevansconcrete.co.uk/assets/logo.jpg",
            "logo": "https://cmevansconcrete.co.uk/assets/logo.jpg",
            "paymentAccepted": "Cash, Bank Transfer",
            "currenciesAccepted": "GBP",
            "sameAs": [
              "https://www.instagram.com/cm_evans2023"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Concrete Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Ready Mix Concrete",
                    "description": "High-quality ready mix concrete for construction projects"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Concrete Blocks",
                    "description": "Durable concrete blocks for building and landscaping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Precast Concrete",
                    "description": "Professional precast concrete products"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Concrete Supply & Delivery Services",
            "description": "Professional concrete supply and delivery services across Barry, Cardiff, Bristol and South Wales",
            "provider": {
              "@type": "LocalBusiness",
              "name": "C&M Evans Concrete",
              "telephone": "07823330492"
            },
            "areaServed": [
              "Barry", "Cardiff", "Bristol", "South Wales", "Vale of Glamorgan", "Penarth", "Cowbridge", "Llantwit Major"
            ],
            "serviceType": "Concrete Supply",
            "offers": {
              "@type": "Offer",
              "description": "Free quotes available for all concrete products and delivery services"
            }
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does ready-mix concrete cost in Barry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ready-mix concrete prices in Barry vary depending on quantity, grade, and delivery requirements. Call C&M Evans Concrete at 07823 330492 for immediate free quotes on ready-mix concrete delivery to Barry, Cardiff, and surrounding South Wales areas."
                }
              },
              {
                "@type": "Question",
                "name": "Do you deliver concrete in Cardiff?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, C&M Evans Concrete provides reliable concrete delivery services throughout Cardiff and surrounding areas. We deliver ready-mix concrete, concrete blocks, and precast concrete products across South Wales with competitive delivery rates."
                }
              },
              {
                "@type": "Question",
                "name": "What concrete products are available in Bristol?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "C&M Evans Concrete supplies a full range of concrete products to Bristol including ready-mix concrete, concrete blocks, precast concrete fence posts, gravel boards, interlocking blocks, and rapid-set concrete mixes. Free quotes available."
                }
              },
              {
                "@type": "Question",
                "name": "Are concrete fence posts available in South Wales?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we supply high-quality concrete fence posts throughout South Wales in 6ft and 8ft standard sizes, with custom sizes available to order. Our reinforced concrete fence posts are built to last and suitable for all weather conditions."
                }
              },
              {
                "@type": "Question",
                "name": "What areas do you serve for concrete delivery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "C&M Evans Concrete serves Barry, Cardiff, Bristol, Vale of Glamorgan, Penarth, Cowbridge, Llantwit Major, and surrounding South Wales areas. We provide reliable concrete delivery and collection services with competitive rates."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      {/* Hidden SEO Content Layer - Not visible to users but crawlable by search engines */}
      <div className="sr-only">
        <h1>Premium Ready Mix Concrete Suppliers Barry Cardiff Bristol South Wales</h1>
        <h2>Professional Concrete Products Barry - Same Day Delivery Available</h2>
        <h3>Affordable Concrete Blocks Barry Cardiff - Quality Precast Concrete South Wales</h3>
        
        <div>
          <p>C&M Evans Concrete stands as the premier concrete products supplier serving Barry, Cardiff, Bristol, and the broader South Wales region. Our comprehensive range of premium concrete solutions includes ready mix concrete Barry, high-quality concrete blocks Barry, professional precast concrete Cardiff, and reliable concrete suppliers Bristol services that construction professionals and homeowners trust.</p>
          
          <p>As established concrete suppliers South Wales, we specialize in delivering exceptional ready mix concrete Barry solutions for residential, commercial, and industrial projects. Our state-of-the-art concrete blocks Barry inventory includes interlocking blocks, standard building blocks, and custom-sized options perfect for landscaping and construction applications throughout Cardiff, Bristol, and surrounding areas.</p>
          
          <p>Our precast concrete Cardiff services encompass a wide variety of products including reinforced concrete fence posts, decorative gravel boards, coping stones, and pillar caps. These durable precast concrete solutions are manufactured to withstand the challenging Welsh weather conditions while maintaining structural integrity for decades.</p>
          
          <p>When searching for reliable concrete suppliers Bristol or concrete delivery near me, C&M Evans Concrete provides unmatched service quality with same-day delivery options across South Wales. Our ready mix concrete Barry formulations are precisely engineered for optimal strength, workability, and durability, making us the preferred choice for contractors, builders, and DIY enthusiasts.</p>
          
          <p>Our concrete products Barry range extends beyond basic supplies to include specialized items like Postfast rapid-set concrete, Mannok general purpose cement, and custom-manufactured products tailored to specific project requirements. Whether you need concrete blocks Barry for garden walls, ready mix concrete Cardiff for foundations, or precast concrete Bristol for commercial developments, our experienced team delivers professional-grade materials with competitive pricing.</p>
          
          <p>The South Wales concrete products market demands reliability, quality, and local expertise – qualities that define C&M Evans Concrete's approach to serving Barry, Cardiff, Bristol, Vale of Glamorgan, Penarth, Cowbridge, and Llantwit Major. Our concrete delivery near me service ensures timely arrival of materials, supporting project schedules and reducing construction delays.</p>
          
          <p>For immediate free quotes on ready mix concrete Barry, concrete blocks Cardiff, precast concrete Bristol, or any concrete suppliers South Wales services, contact our knowledgeable team at 07823 330492. We provide transparent pricing, professional advice, and reliable delivery across our entire South Wales service area.</p>
        </div>
        
        {/* Internal linking for SEO juice */}
        <nav>
          <Link to="/products">View our complete range of concrete products Barry Cardiff Bristol</Link>
          <Link to="/contact">Contact concrete suppliers South Wales for free quotes</Link>
          <Link to="/about">Learn about our concrete business serving Barry Cardiff Bristol</Link>
        </nav>
      </div>
      
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-screen">
        <HeroCarousel />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <h1 className="sr-only">Concrete Products Barry Cardiff Bristol - Ready Mix Concrete South Wales Suppliers</h1>
              <h1 className="text-industrial-xl lg:text-7xl leading-none mb-8 animate-fade-in-up mobile-hero-heading md:text-industrial-xl">
                Concrete Products<br className="md:hidden" /> Built to Last.{' '}
                <span className="text-gray-300 block mt-2">Quality You Can<br className="md:hidden" /> Trust.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto font-medium animate-fade-in-up-delay-1 mobile-hero-subheading md:text-xl">
                Based in Barry. Professional-grade concrete<br className="md:hidden" /> products for contractors who demand<br className="md:hidden" /> quality. Free quotes available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center animate-fade-in-up-delay-2">
                <a
                  href="tel:07823330492"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-primary font-bold text-lg rounded-none border-2 border-white/20 hero-shadow hover-lift focus-industrial"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  <span className="hidden md:inline">Call Directly: 07823 330492</span>
                  <span className="md:hidden">Call: 07823 330492</span>
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold rounded-none hover:bg-white hover:text-brand-primary transition-all duration-200 hover-lift"
                  aria-label="View concrete products including fence posts, gravel boards, and concrete blocks"
                >
                  <span>View Products</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 font-medium animate-fade-in-up-delay-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Local Barry Business</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Free Quotes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Professional Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white concrete-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="sr-only">Why Choose C&M Evans Concrete Products Barry Cardiff</h2>
            <h2 className="text-industrial-lg lg:text-5xl text-gray-900 mb-8 leading-tight">Why Choose C&M Evans?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              We're not your typical supplier. Here's what separates us from the competition. Free quotes available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full"></div>
                  
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                    <h3 className="text-industrial-md text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">{benefit.description}</p>
                    
                    {/* Subtle accent line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-4 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust indicators */}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50 metal-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="sr-only">Professional Concrete Products South Wales - Precast Concrete Cardiff Bristol</h2>
            <h2 className="text-industrial-lg lg:text-5xl text-gray-900 mb-8 leading-tight">Professional Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Heavy-duty products built for contractors who won't accept anything less than the best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-none depth-shadow overflow-hidden hover-lift group border-l-4 border-brand-primary">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} - Professional concrete products Barry Cardiff South Wales`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-industrial-md text-gray-900 leading-tight">{product.name}</h3>
                    <span className="text-xl font-bold text-brand-primary ml-4">{product.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6 font-medium">{product.description}</p>
                  <a
                    href="tel:07823330492"
                    className="inline-flex items-center text-brand-primary font-bold hover:text-brand-secondary transition-colors duration-200 text-sm uppercase tracking-wide"
                    onClick={() => {
                      // Track phone calls for analytics
                      if (typeof gtag !== 'undefined') {
                        gtag('event', 'phone_call', {
                          event_category: 'contact',
                          event_label: 'product_inquiry'
                        });
                      }
                    }}
                  >
                    Call for Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-12 py-5 bg-brand-primary text-white font-bold rounded-none hover:bg-brand-secondary transition-all duration-200 industrial-shadow hover-lift"
              aria-label="View all concrete products including ready mix concrete and concrete blocks"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white concrete-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="sr-only">Concrete Suppliers Barry Cardiff Bristol South Wales Service Areas</h2>
            <h2 className="text-industrial-lg lg:text-5xl text-gray-900 mb-8">Service Areas</h2>
            <p className="text-xl text-gray-600 font-medium">
              Delivering professional-grade materials across South Wales
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {['Barry', 'Cardiff', 'Vale of Glamorgan', 'Penarth', 'Cowbridge', 'Llantwit Major'].map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-none text-center font-bold text-gray-800 hover:bg-brand-primary hover:text-white transition-all duration-200 border-b-2 border-transparent hover:border-white industrial-shadow hover-lift">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-industrial-lg lg:text-5xl text-gray-900 mb-6 leading-tight">Need Products? Call Directly.</h2>
          <h3 className="sr-only">Contact C&M Evans Concrete Products Barry for Ready Mix Concrete Cardiff Bristol</h3>
          <p className="text-xl text-gray-600 mb-8 font-medium max-w-2xl mx-auto">
            Speak directly to us for immediate, FREE quotes. No runaround.
          </p>
          
          <a
            href="tel:07823330492"
            className="inline-flex items-center justify-center px-16 py-6 bg-brand-primary text-white font-bold text-xl rounded-none depth-shadow hover-lift focus-industrial mb-6"
          onClick={() => {
            // Track phone calls for analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'phone_call', {
                event_category: 'contact',
                event_label: 'cta_main'
              });
            }
          }}
          >
            <Phone className="h-7 w-7 mr-4" />
            <span>07823 330492</span>
          </a>
          
          <p className="text-gray-500 text-sm font-medium">Available Mon-Fri 8am-5pm, Sat 9am-12pm</p>
        </div>
      </section>
    </div>
  );
};

export default Home;