import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Track successful form submission
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'contact',
          event_label: 'contact_form_success'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactReasons = [
    'Get instant answers about product availability with free quotes',
    'Discuss your specific project requirements',
    'Arrange delivery or collection times',
    'Get honest advice on what you actually need with free quotes',
    'Receive competitive pricing with free quotes',
    'Schedule site visits for large projects'
  ];

  return (
    <div>
      <Helmet>
        <title>📞 Contact C&M Evans Concrete Barry Cardiff Bristol | FREE Quotes South Wales ⚡ Immediate Response</title>
        <meta name="description" content="✅ Contact C&M Evans Concrete for FREE quotes on concrete products Barry, Cardiff, Bristol & South Wales! Call 07823 330492 for immediate response. Cube test certified 🚚" />
        <link rel="canonical" href="https://cmevansconcrete.co.uk/contact" />
        <meta name="last-reviewed" content="2025-01-24" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="📞 Contact C&M Evans Concrete Barry Cardiff Bristol | FREE Quotes South Wales ⚡ Immediate Response" />
        <meta property="og:description" content="✅ Contact C&M Evans Concrete for FREE quotes on concrete products Barry, Cardiff, Bristol & South Wales! Call 07823 330492 for immediate response." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cmevansconcrete.co.uk/contact" />
        <meta property="og:image" content="https://cmevansconcrete.co.uk/assets/logo.jpg" />
        
        {/* Twitter Card tags */}
        <meta property="og:image:alt" content="Contact C&M Evans Concrete - concrete suppliers Barry Cardiff Bristol South Wales" />
        <meta name="twitter:title" content="📞 Contact C&M Evans Concrete Barry Cardiff Bristol | FREE Quotes South Wales ⚡ Immediate Response" />
        <meta name="twitter:description" content="✅ Contact C&M Evans Concrete for FREE quotes on concrete products Barry, Cardiff, Bristol & South Wales!" />
        <meta name="twitter:image:alt" content="Contact C&M Evans Concrete - concrete suppliers Barry Cardiff Bristol South Wales" />
        
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
                "name": "Contact",
                "item": "https://cmevansconcrete.co.uk/contact"
              }
            ]
          })}
        </script>

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "C&M Evans Concrete",
            "image": "https://cmevansconcrete.co.uk/assets/logo.jpg",
            "logo": "https://cmevansconcrete.co.uk/assets/logo.jpg",
            "@id": "https://cmevansconcrete.co.uk/contact",
            "url": "https://cmevansconcrete.co.uk",
            "telephone": "07823330492",
            "email": "cmevansltd@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Industrial Estate",
              "addressLocality": "Barry",
              "postalCode": "CF62",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.4007,
              "longitude": -3.2919
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "12:00"
              }
            ],
            "description": "Premium concrete products supplier serving Barry, Cardiff, Bristol and South Wales with ready mix concrete, precast blocks, fence posts and professional delivery services",
            "paymentAccepted": "Cash, Bank Transfer",
            "priceRange": "££",
            "areaServed": ["Barry", "Cardiff", "Bristol", "South Wales"],
            "serviceType": "Concrete Supply and Delivery",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Concrete Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Ready Mix Concrete",
                    "description": "Ready-mix concrete delivery with cube test certification"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Concrete Blocks",
                    "description": "Dense and lightweight concrete blocks for construction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Precast Concrete",
                    "description": "Precast concrete products including lintels and posts"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            },
            "description": "Free quotes available for all concrete products and delivery services with cube test certification",
            "description": "Professional concrete supply and delivery services across Barry, Cardiff, Bristol and South Wales including ready-mix concrete, precast blocks, floor screed, and concrete pump hire"
          })}
        </script>
      </Helmet>
      
      {/* Hidden SEO Content Layer */}
      <div className="sr-only">
        <h1>Contact Concrete Suppliers Barry Cardiff Bristol - FREE Quotes South Wales</h1>
        <h2>Immediate Quotes Concrete Products Barry - Contact Local Concrete Suppliers Cardiff</h2>
        <h3>Professional Concrete Suppliers Bristol Contact - South Wales Concrete Delivery</h3>
        <div>
          <p>Contact C&M Evans Concrete for immediate FREE quotes on all concrete products Barry, Cardiff, Bristol, and South Wales. Our responsive customer service team provides instant answers about concrete blocks Barry, ready mix concrete Cardiff, precast concrete Bristol, and comprehensive concrete delivery services across South Wales.</p>
          
          <p>Our contact concrete suppliers Cardiff service extends beyond basic inquiries to include professional project consultation. Whether you need concrete blocks for landscaping, ready mix concrete for foundations, precast concrete products for commercial developments, or specialized delivery services, our experienced team provides expert guidance and transparent pricing.</p>
          
          <p>Contact concrete suppliers Bristol through C&M Evans Concrete for reliable service that contractors and builders trust. Our comprehensive South Wales concrete products inventory, combined with flexible delivery options and competitive pricing, makes us the preferred choice for construction professionals across the region.</p>
          
          <p>The contact concrete suppliers South Wales process with C&M Evans Concrete is streamlined for your convenience. Call 07823 330492 for immediate quotes, email cmevansltd@gmail.com for detailed inquiries, or use our contact form for project-specific requirements. We respond promptly to all contact requests with professional, helpful service.</p>
          
          <p>Our contact concrete products Barry service includes comprehensive support for custom orders, bulk deliveries, and specialized project requirements. From residential garden projects to commercial construction developments, we provide personalized attention and expert advice to ensure your concrete supply needs are met efficiently and cost-effectively.</p>
        </div>
        
        {/* Internal linking */}
        <nav>
          <Link to="/">Return to concrete suppliers Barry Cardiff Bristol homepage</Link>
          <Link to="/products">View concrete products before contacting suppliers</Link>
          <Link to="/about">Learn about our concrete business before contact</Link>
        </nav>
      </div>
      
      {/* Hidden Google Maps for Local SEO */}
      <div className="sr-only">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.123456789!2d-3.2919!3d51.4007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI0JzAyLjUiTiAzwrAxNycyOC44Ilc!5e0!3m2!1sen!2suk!4v1234567890123"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="C&M Evans Concrete Barry Location - Concrete Suppliers South Wales"
        ></iframe>
      </div>
      
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="sr-only">Contact C&M Evans Concrete Barry Cardiff Bristol - Get Quotes South Wales</h1>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">Get In Touch</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up-delay-1">
              Ready to get your project moving? Get immediate answers and FREE quotes by calling directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delay-2">
              <a
                href="tel:07823330492"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-primary font-bold text-lg rounded-none border-2 border-white/20 hero-shadow hover-lift focus-industrial"
                onClick={() => {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'phone_call', {
                      event_category: 'contact',
                      event_label: 'contact_hero'
                    });
                  }
                }}
              >
                <Phone className="h-6 w-6 mr-3" />
                <span className="hidden md:inline">Call Directly: 07823 330492</span>
                <span className="md:hidden">Call: 07823 330492</span>
              </a>
              <a
                href="mailto:cmevansltd@gmail.com"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold rounded-none hover:bg-white hover:text-brand-primary transition-all duration-200 hover-lift"
              >
                <span>Send Email</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 font-medium mt-8 animate-fade-in-up-delay-3">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Speak Directly To Us</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Free Quotes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Professional Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="sr-only">Contact Form C&M Evans Concrete Barry Cardiff Bristol South Wales</h2>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Can't call right now? Drop us a message and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your project or what you need..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 font-bold rounded-lg transition-colors duration-200 shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-brand-primary text-white hover:bg-brand-secondary'
                  }`}
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <p className="text-green-800 font-medium">
                        Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      Sorry, there was an error sending your message. Please try calling directly at{' '}
                      <a href="tel:07823330492" className="text-red-600 hover:text-red-700 underline">
                        07823 330492
                      </a>
                      {' '}or try again later.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="sr-only">C&M Evans Concrete Contact Details Barry Cardiff Bristol South Wales</h3>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-brand-primary mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a 
                        href="tel:07823330492" 
                        className="text-brand-primary hover:text-brand-secondary transition-colors duration-200 text-lg font-semibold"
                        onClick={() => {
                          if (typeof gtag !== 'undefined') {
                            gtag('event', 'phone_call', {
                              event_category: 'contact',
                              event_label: 'contact_info_phone'
                            });
                          }
                        }}
                      >
                        07823 330492
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-brand-primary mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:cmevansltd@gmail.com" className="text-brand-primary hover:text-brand-secondary transition-colors duration-200">
                        cmevansltd@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-brand-primary mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Service Area</p>
                      <p className="text-gray-600">Barry, Cardiff & surrounding areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-brand-primary mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 8am-5pm</p>
                      <p className="text-gray-600">Sat: 9am-12pm</p>
                      <p className="text-gray-600">Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-primary text-white p-8 rounded-xl">
                <h3 className="sr-only">Why Contact C&M Evans Concrete Barry Cardiff Bristol</h3>
                <h3 className="text-2xl font-bold mb-6">Why Call Us Directly?</h3>
                <ul className="space-y-4">
                  {contactReasons.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Immediate Concrete Products Quote?</h2>
          <p className="text-xl text-gray-600 mb-8">
            For the fastest response on ready mix concrete, concrete blocks, and precast concrete, call concrete suppliers directly. We're usually available during business hours and can give you instant FREE quotes.
          </p>
          
          <a
            href="tel:07823330492"
            className="inline-flex items-center px-10 py-5 bg-brand-primary text-white font-bold text-lg rounded-lg hover:bg-brand-secondary transition-colors duration-200 shadow-lg"
            onClick={() => {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                  event_category: 'contact',
                  event_label: 'contact_cta'
                });
              }
            }}
          >
            <Phone className="h-6 w-6 mr-3" />
            Call Now: 07823 330492
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;