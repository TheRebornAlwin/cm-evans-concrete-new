import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

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
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
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
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">Get In Touch</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up-delay-1">
              Ready to get your project moving? Get immediate answers and FREE quotes by calling directly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delay-2">
              <a
                href="tel:07823330492"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-primary font-bold text-lg rounded-none border-2 border-white/20 hero-shadow hover-lift focus-industrial"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-brand-primary mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:07823330492" className="text-brand-primary hover:text-brand-secondary transition-colors duration-200 text-lg font-semibold">
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
                <h3 className="text-2xl font-bold mb-6">Why Call Us Directly?</h3>
                <ul className="space-y-4">
                  {contactReasons.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" />
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need an Immediate Quote?</h2>
          <p className="text-xl text-gray-600 mb-8">
            For the fastest response, call directly. We're usually available during business hours and can give you instant FREE quotes.
          </p>
          
          <a
            href="tel:07823330492"
            className="inline-flex items-center px-10 py-5 bg-brand-primary text-white font-bold text-lg rounded-lg hover:bg-brand-secondary transition-colors duration-200 shadow-lg"
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