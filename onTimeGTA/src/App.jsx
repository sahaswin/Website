import React, { useState, useEffect } from 'react';
import { Home, Building2, Users, Phone, Mail, MapPin, CheckCircle, Hammer, Wrench, Truck, Shield, Clock, Award } from 'lucide-react';

const ConstructionWebsite = () => {
  const [activePage, setActivePage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendWhatsApp = () => {
    const message = "Hello BuildCraft Pro! I'm interested in getting a quote for my construction project. Please contact me with more information.";
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-slate-900/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">BuildCraft Pro</span>
            </div>
            <div className="flex items-baseline space-x-4">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'services', label: 'Services', icon: Hammer },
                { id: 'about', label: 'About Us', icon: Users }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActivePage(id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activePage === id
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* WhatsApp Button */}
      <button
        onClick={sendWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-50 flex items-center space-x-2"
      >
        <Phone className="h-5 w-5" />
        <span className="font-semibold">Get a Quote</span>
      </button>

      {/* Page Content */}
      {activePage === 'home' && (
        <div className="pt-16">
          {/* Hero Section */}
          <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Building Dreams,
                <span className="text-orange-500 block">Creating Reality</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional construction services with 20+ years of experience. From residential to commercial projects, we deliver excellence in every build.
              </p>
              <button
                onClick={() => setActivePage('services')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose BuildCraft Pro?</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">We combine years of experience with modern techniques to deliver exceptional results</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Clock,
                    title: "Fast & Efficient",
                    description: "We complete projects on time without compromising quality. Our streamlined processes ensure efficient delivery."
                  },
                  {
                    icon: Shield,
                    title: "Quality Guaranteed",
                    description: "All our work comes with comprehensive warranties. We use premium materials and skilled craftsmen."
                  },
                  {
                    icon: Award,
                    title: "Competitive Pricing",
                    description: "Get the best value for your investment. Transparent pricing with no hidden costs."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <feature.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "500+", label: "Projects Completed" },
                  { number: "20+", label: "Years Experience" },
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <div key={index} className="text-white">
                    <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                    <div className="text-lg text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {activePage === 'services' && (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Construction Services</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From residential homes to commercial buildings, we offer comprehensive construction solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Home,
                  title: "Residential Construction",
                  description: "Custom homes, renovations, and additions. We bring your vision to life with attention to detail and quality craftsmanship.",
                  services: ["New Home Construction", "Home Renovations", "Kitchen & Bathroom Remodeling", "Room Additions"]
                },
                {
                  icon: Building2,
                  title: "Commercial Construction",
                  description: "Office buildings, retail spaces, and industrial facilities. Professional construction for your business needs.",
                  services: ["Office Buildings", "Retail Spaces", "Warehouses", "Restaurant Build-outs"]
                },
                {
                  icon: Wrench,
                  title: "Renovation & Remodeling",
                  description: "Transform existing spaces with our comprehensive renovation services. Modern updates that add value.",
                  services: ["Complete Home Makeovers", "Structural Modifications", "Energy Efficiency Upgrades", "Accessibility Improvements"]
                },
                {
                  icon: Truck,
                  title: "Outdoor Construction",
                  description: "Enhance your outdoor living spaces with decks, patios, and landscaping structures.",
                  services: ["Deck Construction", "Patio Installation", "Gazebos & Pergolas", "Outdoor Kitchens"]
                },
                {
                  icon: Hammer,
                  title: "Specialty Services",
                  description: "Specialized construction services including concrete work, roofing, and custom carpentry.",
                  services: ["Concrete & Foundation Work", "Roofing Services", "Custom Carpentry", "Plumbing & Electrical"]
                },
                {
                  icon: CheckCircle,
                  title: "Project Management",
                  description: "Full-service project management from planning to completion. We handle permits, scheduling, and coordination.",
                  services: ["Permit Acquisition", "Timeline Management", "Quality Control", "Budget Management"]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="p-8">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your construction needs and provide you with a detailed quote for your project.
              </p>
              <button
                onClick={sendWhatsApp}
                className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Free Quote Now
              </button>
            </div>
          </div>
        </div>
      )}

      {activePage === 'about' && (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About BuildCraft Pro</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building excellence since 2003 with a commitment to quality, integrity, and customer satisfaction
              </p>
            </div>

            {/* Story Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2003, BuildCraft Pro has been serving the community with exceptional construction services for over two decades. What started as a small family business has grown into a trusted name in the construction industry.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are committed to delivering superior construction services that exceed our clients' expectations. Our focus on quality, safety, and customer satisfaction drives everything we do.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
                <div className="space-y-4">
                  {[
                    { title: "Quality", desc: "We never compromise on materials or workmanship" },
                    { title: "Integrity", desc: "Honest communication and transparent pricing" },
                    { title: "Safety", desc: "Every project prioritizes worker and client safety" },
                    { title: "Innovation", desc: "Using modern techniques and sustainable practices" }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">{value.title}:</span>
                        <span className="text-gray-600 ml-2">{value.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white text-center">
                <Building2 className="h-32 w-32 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Excellence in Construction</h3>
                <p className="text-orange-100">
                  Every project we undertake reflects our commitment to superior craftsmanship and attention to detail.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet Our Expert Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "John Smith",
                    role: "Project Manager",
                    experience: "25+ years in construction management",
                    emoji: "👨‍💼"
                  },
                  {
                    name: "Sarah Johnson",
                    role: "Lead Contractor",
                    experience: "Expert in residential construction",
                    emoji: "👩‍🔧"
                  },
                  {
                    name: "Mike Wilson",
                    role: "Site Supervisor",
                    experience: "Specialist in commercial projects",
                    emoji: "👨‍🏗️"
                  }
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-6xl mb-4">{member.emoji}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                    <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.experience}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
                <p className="text-gray-600 text-lg">Ready to start your construction project? Contact us today!</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <Phone className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Call Us</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Email Us</h3>
                  <p className="text-gray-600">info@buildcraftpro.com</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Visit Us</h3>
                  <p className="text-gray-600">123 Construction Ave<br />Toronto, ON M5V 3A8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConstructionWebsite;