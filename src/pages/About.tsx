import React, { useEffect } from 'react';
import { Phone, Shield, Truck, Clock, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Professional Concrete Quality',
      description: 'As experienced concrete contractors, we focus on quality over quantity. Our ready mix concrete and concrete products are stronger, smoother, and built to outlast inferior alternatives on the market.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Fast Concrete Services',
      description: 'No waiting around for callbacks on concrete delivery. Speak directly to our concrete contractors and get straight answers about ready mix concrete availability, competitive pricing, and concrete delivery schedules.'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Local Concrete Contractors',
      description: 'Based in Barry, we know the area. Ready mix concrete delivery and collection available across Cardiff, Vale of Glamorgan and South Wales for all concrete services.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Commercial Concrete Contractors',
      description: 'Professional concrete contractors speaking your language. No sales pitch nonsense, just straight talk about ready mix concrete, concrete delivery and FREE quotes to help get your construction job done right.'
    }
  ];

  const achievements = [
    { number: '100%', label: 'Local Business' },
    { number: '24hr', label: 'Response Time' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">About C&M Evans - Professional Concrete Contractors UK</h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto animate-fade-in-up-delay-1">
              Family-run concrete contractors and ready mix concrete suppliers serving builders, landscapers and commercial concrete contractors across South Wales with professional concrete services that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">Professional Concrete Contractors Barry Cardiff</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-center md:text-left">
                <p>
                  C&M Evans Concrete is a family-run concrete contractor and ready mix concrete supplier based in Barry. We provide builders, landscapers and commercial concrete contractors across South Wales with professional concrete services and rock-solid concrete products that stand the test of time.
                </p>
                <p>
                  We've built our reputation as trusted concrete contractors delivering excellent quality ready mix concrete, straightforward concrete services, and competitive pricing. No corporate nonsense, no hassle, no hidden fees. Just professional concrete delivery and high-quality, reliable concrete products.
                </p>
                <p>
                  Whether you're a builder working on a new development, a landscaper installing concrete features, or a commercial concrete contractor needing reliable ready mix concrete delivery, we've got the concrete services you need to get the job done right with free quotes available.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">Family-owned concrete contractors</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">Local Barry concrete services</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">Free concrete quotes available</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/assets/whoweare.jpg"
                alt="C&M Evans Concrete - Professional concrete contractors and ready mix concrete suppliers Barry Cardiff"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Our Concrete Services Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not your typical ready mix concrete supplier. Here's why builders, landscapers and commercial concrete contractors choose our concrete services again and again across Barry, Cardiff and South Wales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 p-4 bg-brand-primary text-white rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-6 text-center md:text-left">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-center md:text-left">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/whatweoffer.jpg"
                alt="Ready mix concrete and concrete products - professional concrete contractors Barry Cardiff"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">Ready Mix Concrete & Professional Services</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-center md:text-left">
                <p>
                  From ready mix concrete delivery to cement bags, 6-foot concrete gravel boards, coping stones to interlocking concrete blocks, we've got the concrete services and products you need to build right the first time.
                </p>
                <p>
                  Our concrete fence posts and concrete gravel boards are reinforced and built to last decades, not years. As professional concrete contractors, we don't cut corners on ready mix concrete or manufacturing because we know your reputation depends on the quality of concrete work.
                </p>
                <p>
                  Need custom concrete mixes or something specific? Speak directly to our concrete contractors. We can often source specialist concrete products or work with you on bespoke concrete requirements for larger commercial projects with free quotes.
                </p>
              </div>
              
              <div className="mt-8 text-center md:text-left">
                <a
                  href="tel:07823330492"
                  className="inline-flex items-center px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary transition-colors duration-200 shadow-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Directly: 07823 330492
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Areas We Serve</h2>
          <p className="text-xl text-gray-200 mb-12">
            Delivering quality concrete products across South Wales
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
            <div className="p-4 bg-brand-secondary rounded-lg hover:bg-white hover:text-brand-primary transition-colors duration-200">Barry</div>
            <div className="p-4 bg-brand-secondary rounded-lg hover:bg-white hover:text-brand-primary transition-colors duration-200">Cardiff</div>
            <div className="p-4 bg-brand-secondary rounded-lg hover:bg-white hover:text-brand-primary transition-colors duration-200">Vale of Glamorgan</div>
            <div className="p-4 bg-brand-secondary rounded-lg hover:bg-white hover:text-brand-primary transition-colors duration-200">Penarth</div>
            <div className="p-4 bg-brand-secondary rounded-lg hover:bg-white hover:text-brand-primary transition-colors duration-200">Cowbridge</div>
            <div className="p-4 bg-brand-secondary rounded-lg hover:bg-white hover:text-brand-primary transition-colors duration-200">Llantwit Major</div>
          </div>
          <p className="text-gray-200 mt-8">
            And surrounding South Wales areas. Call to check if we deliver to your location with free quotes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;