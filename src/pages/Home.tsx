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
      image: '/assets/concretefenceposts.jpeg'
    },
    {
      name: 'Concrete Gravel Boards',
      price: 'Call for Details',
      description: '6\' x 1\' Smooth and Rockface, plus 6\' x 6" smooth options available.',
      image: '/assets/concretegravelboards.jpg'
    },
    {
      name: 'Interlocking (Lego) Blocks',
      price: 'Call for Details',
      description: 'Multiple sizes available from 600x600x600 to 1800x600x600.',
      image: '/assets/interlockinglegoblocks.jpg'
    },
    {
      name: 'Coping Stones & Pillar Caps',
      price: 'Call for Details',
      description: 'Various sizes available for professional wall finishing.',
      image: '/assets/copingstonespillarcaps.jpg'
    },
    {
      name: 'Mannok General Purpose Cement',
      price: 'Call for Details',
      description: 'High-quality general purpose cement in 25kg bags.',
      image: '/assets/manokgeneralcement.jpg'
    },
    {
      name: 'Postfast 20kg Rapid Set',
      price: 'Call for Details',
      description: 'Quick-setting concrete mix in convenient 20kg bags.',
      image: '/assets/postfast.jpg'
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
        <title>Concrete Products Barry Cardiff Bristol | C&M Evans Concrete South Wales</title>
        <meta name="description" content="Leading concrete products supplier in Barry serving Cardiff, Bristol & South Wales. Ready mix concrete, concrete blocks, precast concrete, fence posts & gravel boards. Free quotes: 07823 330492" />
        <link rel="canonical" href="https://cmevansconcrete.co.uk/" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Concrete Products Barry Cardiff Bristol | C&M Evans Concrete South Wales" />
        <meta property="og:description" content="Leading concrete products supplier in Barry serving Cardiff, Bristol & South Wales. Ready mix concrete, concrete blocks, precast concrete, fence posts & gravel boards." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cmevansconcrete.co.uk/" />
        <meta property="og:image" content="https://cmevansconcrete.co.uk/assets/logo.jpg" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="C&M Evans Concrete" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Concrete Products Barry Cardiff Bristol | C&M Evans Concrete South Wales" />
        <meta name="twitter:description" content="Leading concrete products supplier in Barry serving Cardiff, Bristol & South Wales. Ready mix concrete, concrete blocks, precast concrete." />
        <meta name="twitter:image" content="https://cmevansconcrete.co.uk/assets/logo.jpg" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "C&M Evans Concrete",
            "description": "Professional concrete products supplier serving Barry, Cardiff, Bristol and South Wales",
            "url": "https://cmevansconcrete.co.uk",
            "telephone": "07823330492",
            "email": "cmevansltd@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barry",
              "addressRegion": "South Wales",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.4007",
              "longitude": "-3.2919"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Barry"
              },
              {
                "@type": "City", 
                "name": "Cardiff"
              },
              {
                "@type": "City",
                "name": "Bristol"
              },
              {
                "@type": "State",
                "name": "South Wales"
              }
            ],
            "openingHours": [
              "Mo-Fr 08:00-17:00",
              "Sa 09:00-12:00"
            ],
            "priceRange": "££",
            "image": "https://cmevansconcrete.co.uk/assets/logo.jpg",
            "sameAs": [
              "https://www.instagram.com/cm_evans2023"
            ]
          })}
        </script>
      </Helmet>
      
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