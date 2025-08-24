import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, Truck, Calendar, Ruler, Building2, Zap } from 'lucide-react';
import { locationProductsData, getCoreProducts } from '../data/locationProductsData';

const LocationSpecificProducts = () => {
  const location = useLocation();
  const locationId = location.pathname.includes('barry') ? 'barry' : 
                    location.pathname.includes('cardiff') ? 'cardiff' : 
                    location.pathname.includes('bristol') ? 'bristol' : 'barry';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locationData = locationProductsData[locationId] || locationProductsData.barry;
  const coreProducts = getCoreProducts(locationId);

  const categories = [
    { name: 'Fencing & Posts', count: 2 },
    { name: 'Building Blocks', count: 1 },
    { name: 'Cement & Mix', count: 2 },
    { name: 'Finishing', count: 1 }
  ];

  return (
    <div>
      <Helmet>
        <title>{locationData.seo.title}</title>
        <meta name="description" content={locationData.seo.description} />
        <link rel="canonical" href={locationData.seo.canonical} />
        <meta name="keywords" content={locationData.seo.keywords.join(', ')} />
        
        {/* Geo-targeting meta tags */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content={`${locationData.cityName}, ${locationData.region}`} />
        <meta name="geo.position" content={`${locationData.coordinates.latitude};${locationData.coordinates.longitude}`} />
        <meta name="ICBM" content={`${locationData.coordinates.latitude}, ${locationData.coordinates.longitude}`} />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content={locationData.seo.title} />
        <meta property="og:description" content={locationData.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={locationData.seo.canonical} />
        <meta property="og:image" content="https://cmevansconcrete.co.uk/assets/concretefenceposts.jpeg" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="C&M Evans Concrete" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={locationData.seo.title} />
        <meta name="twitter:description" content={locationData.seo.description} />
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": `${locationData.cityName} Concrete Products`,
                "item": locationData.seo.canonical
              }
            ]
          })}
        </script>
        
        {/* Enhanced LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": locationData.localBusinessSchema.name,
            "description": locationData.localBusinessSchema.description,
            "url": locationData.seo.canonical,
            "telephone": "07823330492",
            "email": "cmevansltd@gmail.com",
            "foundingDate": "2020",
            "slogan": `Quality Concrete Products ${locationData.cityName}`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": locationData.localBusinessSchema.address.streetAddress,
              "addressLocality": locationData.localBusinessSchema.address.addressLocality,
              "addressRegion": locationData.localBusinessSchema.address.addressRegion,
              "postalCode": locationData.localBusinessSchema.address.postalCode,
              "addressCountry": locationData.localBusinessSchema.address.addressCountry
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": locationData.coordinates.latitude,
              "longitude": locationData.coordinates.longitude
            },
            "serviceArea": locationData.localBusinessSchema.serviceArea,
            "areaServed": locationData.localBusinessSchema.areaServed,
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
              "name": `${locationData.cityName} Concrete Products`,
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": `Ready Mix Concrete ${locationData.cityName}`,
                    "description": `High-quality ready mix concrete for ${locationData.cityName} construction projects`
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": `Concrete Blocks ${locationData.cityName}`,
                    "description": `Durable concrete blocks for ${locationData.cityName} building and landscaping`
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": `Precast Concrete ${locationData.cityName}`,
                    "description": `Professional precast concrete products for ${locationData.cityName}`
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
            "name": `Concrete Supply & Delivery Services ${locationData.cityName}`,
            "description": `Professional concrete supply and delivery services in ${locationData.cityName} and ${locationData.region}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": locationData.localBusinessSchema.name,
              "telephone": "07823330492"
            },
            "areaServed": locationData.localBusinessSchema.serviceArea,
            "serviceType": "Concrete Supply",
            "offers": {
              "@type": "Offer",
              "description": `Free quotes available for all concrete products and delivery services in ${locationData.cityName}`
            }
          })}
        </script>
        
        {/* Enhanced Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `Premium Concrete Products ${locationData.cityName} ${locationData.region}`,
            "description": `Professional concrete products available in ${locationData.cityName}, ${locationData.region} including ready mix concrete, concrete blocks, precast concrete, fence posts and gravel boards`,
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
                "areaServed": locationData.localBusinessSchema.serviceArea
              },
              "additionalProperty": product.features.map(feature => ({
                "@type": "PropertyValue",
                "name": "Feature",
                "value": feature
              }))
            }))
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": locationData.faqSchema.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      
      {/* Hidden SEO Content Layer */}
      <div className="sr-only">
        <h1>{locationData.hero.headline} - {locationData.hero.subheadline}</h1>
        <h2>Affordable Concrete Blocks {locationData.cityName} - Professional Precast Concrete {locationData.region}</h2>
        <h3>Quality Concrete Suppliers {locationData.region} - Ready Mix Concrete Delivery Near Me</h3>
        
        <div>
          <p>{locationData.content.introText}</p>
          <p>{locationData.content.whyChooseText}</p>
          <p>{locationData.content.customOrdersText}</p>
          <p>{locationData.content.stockNoticeText}</p>
          
          <p>Contact C&M Evans Concrete at 07823 330492 for immediate free quotes on concrete products {locationData.cityName}, ready mix concrete {locationData.region}, concrete blocks, and precast concrete delivery. Our experienced {locationData.cityName} team provides professional guidance and competitive pricing across {locationData.nearbyAreas.join(', ')} and surrounding {locationData.region} areas.</p>
        </div>
        
        {/* Internal linking for SEO */}
        <nav>
          <Link to="/">Return to concrete suppliers {locationData.cityName} {locationData.region} homepage</Link>
          <Link to="/contact">Contact concrete products suppliers {locationData.cityName}</Link>
          <Link to="/about">About our concrete business {locationData.cityName} {locationData.region}</Link>
        </nav>
      </div>
      
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="sr-only">{locationData.hero.headline} - {locationData.hero.subheadline}</h1>
            <h1 className="text-industrial-xl lg:text-6xl font-bold mb-6 animate-fade-in-up">{locationData.hero.headline}</h1>
            <h2 className="text-2xl lg:text-3xl text-gray-200 mb-6 animate-fade-in-up-delay-1">{locationData.hero.subheadline}</h2>
            <p className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto font-medium animate-fade-in-up-delay-1">
              {locationData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
              <a
                href="tel:07823330492"
                className="inline-flex items-center px-10 py-5 bg-white text-brand-primary font-bold text-lg rounded-none hero-shadow hover-lift focus-industrial"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'phone_call', {
                      event_category: 'contact',
                      event_label: `${locationData.locationId}_products_hero`
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
            <h2 className="sr-only">Available Concrete Products {locationData.cityName} {locationData.region} - Ready Mix Concrete {locationData.cityName}</h2>
            <h2 className="text-industrial-lg text-gray-900 mb-6">Ready Mix Concrete & Concrete Blocks {locationData.cityName}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Professional ready mix concrete, concrete blocks, and precast concrete for builders, landscapers, and contractors in {locationData.cityName} and {locationData.region}. Concrete suppliers with free quotes available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-none depth-shadow overflow-hidden hover-lift group border-l-4 border-brand-primary">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={product.image}
                      alt={`${product.name} - Premium ${product.category.toLowerCase()} concrete products ${locationData.cityName} ${locationData.region} - Professional grade ${product.name.toLowerCase()} for construction landscaping projects - SKU ${product.sku}`}
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
                            event_label: `${locationData.locationId}_product_${product.name.toLowerCase().replace(/\s+/g, '_')}`
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
            <h2 className="sr-only">Custom Concrete Products {locationData.cityName} {locationData.region} - Made to Order Precast Concrete</h2>
            <h2 className="text-industrial-lg text-gray-900 mb-8">Custom Concrete Products {locationData.cityName}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              {locationData.content.customOrdersText}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-white/20 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Ruler className="h-10 w-10" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-brand-primary/20 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-brand-primary transition-colors duration-300">Custom Fence Posts</h3>
                <p className="text-gray-600 leading-relaxed font-medium">Other sizes beyond 6ft and 8ft can be made to order for specific {locationData.cityName} projects. Whether you need 4ft posts for garden features or 10ft posts for commercial boundaries, we can manufacture to your exact specifications.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-white/20 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Building2 className="h-10 w-10" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-brand-primary/20 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-brand-primary transition-colors duration-300">Project Consultation</h3>
                <p className="text-gray-600 leading-relaxed font-medium">Discuss your specific {locationData.cityName} requirements and we'll advise on the best products for your project. From residential garden boundaries to commercial developments, we help you choose the right materials and dimensions with free quotes.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto mt-6 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-white/20 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Zap className="h-10 w-10" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-brand-primary/20 rounded-2xl mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-brand-primary transition-colors duration-300">Reasonable Turnaround</h3>
                <p className="text-gray-600 leading-relaxed font-medium">Most custom orders for {locationData.cityName} can be completed within reasonable timeframes to keep your project moving. We understand deadlines matter, so we prioritize custom work to minimize delays on your build schedule with free quotes.</p>
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
            <h3 className="text-2xl font-bold mb-4">Concrete Products Stock & Availability {locationData.cityName}</h3>
            <p className="text-gray-200 mb-6 leading-relaxed font-medium">
              {locationData.content.stockNoticeText}
            </p>
            <a
              href="tel:07823330492"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-primary font-bold rounded-none hover:bg-gray-100 transition-all duration-200 industrial-shadow hover-lift"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'phone_call', {
                    event_category: 'contact',
                    event_label: `${locationData.locationId}_stock_availability`
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
          <h2 className="text-industrial-lg mb-6 text-brand-primary">Need Concrete Products Quote {locationData.cityName}?</h2>
          <h3 className="sr-only">Contact Concrete Suppliers {locationData.cityName} {locationData.region} for Ready Mix Concrete</h3>
          <p className="text-xl text-brand-primary mb-10 font-medium max-w-2xl mx-auto">
            Concrete suppliers can provide immediate FREE quotes on ready mix concrete, concrete blocks, precast concrete in {locationData.cityName}. Check availability and discuss concrete delivery options across {locationData.region}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:07823330492"
              className="inline-flex items-center justify-center px-10 py-5 bg-brand-primary text-white font-bold text-lg rounded-none hover:bg-brand-secondary transition-all duration-200 hero-shadow hover-lift"
              onClick={() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'phone_call', {
                    event_category: 'contact',
                    event_label: `${locationData.locationId}_products_cta`
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

export default LocationSpecificProducts;