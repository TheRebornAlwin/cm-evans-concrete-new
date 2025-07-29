import React, { useEffect } from 'react';
import { Phone, Shield, Truck, Clock, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality First',
      description: 'We focus on quality over quantity. Our concrete products are stronger, smoother, and built to outlast inferior alternatives on the market.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Quick Service',
      description: 'No waiting around for callbacks. Speak directly to us and get straight answers about availability, pricing, and delivery schedules.'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Local Service',
      description: 'Based in Barry, we know the area. Delivery and collection available across Cardiff and South Wales.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Professional to Professional',
      description: 'We speak your language. No sales pitch nonsense, just straight talk about what you need and FREE quotes to help get your job done right.'
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">About C&M Evans Concrete</h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto animate-fade-in-up-delay-1">
              Family-run concrete supplier serving builders and landscapers across South Wales with products that stand the test of time
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">Who We Are</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-center md:text-left">
                <p>
                  C&M Evans Concrete is a family-run supplier based in Barry. We provide builders and landscapers across South Wales with rock-solid concrete products that stand the test of time.
                </p>
                <p>
                  We've built our reputation on delivering excellent quality products, straightforward service, and competitive pricing. No corporate nonsense, no hassle, no hidden fees. Just quick purchases of high-quality, reliable products.
                </p>
                <p>
                  Whether you're a builder working on a new development, a landscaper installing garden features, or a contractor needing reliable materials, we've got what you need to get the job done right with free quotes available.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">Family-owned and operated</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">Local Barry business</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="h-5 w-5 text-brand-primary mr-3" />
                  <span className="text-gray-700">Free quotes available</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/assets/potentialheroimage.jpg"
                alt="C&M Evans Concrete - Professional concrete suppliers"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not your typical concrete supplier. Here's why builders and landscapers choose us again and again
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
                src="/assets/concreterockfacegravelboards.jpeg"
                alt="Concrete products - rockface gravel boards and materials"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">What We Offer</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-center md:text-left">
                <p>
                  From cement bags to 6-foot gravel boards, coping stones to interlocking blocks, we've got what you need to build right the first time.
                </p>
                <p>
                  Our concrete fence posts and gravel boards are reinforced and built to last decades, not years. We don't cut corners on materials or manufacturing because we know your reputation depends on the quality of your work.
                </p>
                <p>
                  Need something specific? Speak directly to us. We can often source specialist products or work with you on custom requirements for larger projects with free quotes.
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