import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Code, Globe, Laptop, BarChart3, ChevronRight, ArrowRight } from 'lucide-react';

const UnitsPage = () => {
  const units = [
    {
      title: "Bloom Media",
      description: "Web design and marketing agency specializing in brand identity, website development, and digital marketing campaigns.",
      icon: <Monitor className="text-blue-400" size={40} />,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      keyServices: ["Brand Development", "Website Design", "SEO & Content Marketing", "Social Media Management"],
      cta: "Elevate Your Brand",
      detail: "Our media division creates compelling digital experiences that connect brands with their audiences. From responsive websites to comprehensive marketing strategies, we help businesses establish a strong online presence and drive engagement across all platforms."
    },
    {
      title: "Bloom Solutions",
      description: "Software development company creating custom applications, enterprise solutions, and digital transformation strategies.",
      icon: <Code className="text-blue-400" size={40} />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      keyServices: ["Custom Software", "Enterprise Applications", "Mobile Development", "API Integration"],
      cta: "Build Your Solution",
      detail: "We deliver tailored software solutions that address complex business challenges. Our team of expert developers creates scalable, secure, and performant applications designed to optimize operations, enhance customer experiences, and drive business growth."
    },
    {
      title: "Bloom Consulting",
      description: "Consulting services providing bespoke guidance in GTM strategy, expanding new markets, and optimizing sales activities.",
      icon: <Globe className="text-blue-400" size={40} />,
      image: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      keyServices: ["GTM Strategy", "Business Development", "New Market Expansion", "Sales"],
      cta: "Grow Your Business",
      detail: "Our consulting division specializes in GMT strategy for both SME clients. With a focus on personalized service, we manage everything from sales planning, sales recruiting to business development services packages, ensuring seamless revenue optimization and growth planning."
    },
    {
      title: "BIXIE Agency",
      description: "CRM implementation and consulting services helping businesses optimize customer relationships and operational workflows.",
      icon: <BarChart3 className="text-blue-400" size={40} />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      keyServices: ["CRM Implementation", "Business Process Optimization", "User Training", "System Integration"],
      cta: "Transform Your Workflow",
      detail: "BIXIE specializes in implementing and optimizing CRM systems (Bitrix24, Hubspot, Monday, Saleforce, Zoho) that transform how businesses manage customer relationships. Our consultants help organizations streamline workflows, improve data management, and leverage customer insights to drive strategic decision-making and business growth."
    }
  ];

  const [activeUnit, setActiveUnit] = useState(0);

  return (
    <div className="pt-28 pb-20 bg-[#0d1219] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Business Units</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore our specialized business units, each with unique expertise to address diverse industry needs.
          </p>
        </div>

        <div className="bg-[#0d1219] rounded-lg p-8 mb-12 shadow-lg border border-blue-900/10">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="bg-blue-900/20 p-2 rounded-lg mr-3">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                <rect width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="20" r="2" fill="currentColor" />
                <circle cx="12" cy="28" r="2" fill="currentColor" />
                <circle cx="20" cy="12" r="2" fill="currentColor" />
                <circle cx="20" cy="20" r="2" fill="currentColor" />
                <circle cx="20" cy="28" r="2" fill="currentColor" />
                <circle cx="28" cy="12" r="2" fill="currentColor" />
                <circle cx="28" cy="20" r="2" fill="currentColor" />
                <circle cx="28" cy="28" r="2" fill="currentColor" />
              </svg>
            </span>
            BLOOMITS
          </h3>
          <p className="text-gray-300">
            Bloom d.o.o as the main corporate entity manages several different business units often called BLOOMITS, operating through Bosnia and US offices. Service offerings and Products are individually deployed and managed by teams in the designated unit. Listed below are business units solely owned by Bloom d.o.o.
          </p>
        </div>

        {/* Business Unit Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {units.map((unit, index) => (
            <button
              key={index}
              onClick={() => setActiveUnit(index)}
              className={`px-4 py-3 rounded-md transition-all duration-500 text-sm font-medium flex items-center ${
                activeUnit === index
                  ? "bg-blue-800 text-white shadow-lg shadow-blue-900/20 scale-105"
                  : "bg-[#0d1219] text-gray-400 hover:bg-[#181f30] hover:text-gray-300"
              }`}
            >
              <span className={`mr-2 transition-transform duration-300 ${activeUnit === index ? 'scale-110' : ''}`}>
                {React.cloneElement(unit.icon, { 
                  size: 24,
                  className: activeUnit === index ? "text-white" : "text-blue-400" 
                })}
              </span>
              <span>{unit.title}</span>
            </button>
          ))}
        </div>

        {/* Active Unit Display */}
        <div 
          className="bg-[#0d1219] rounded-lg overflow-hidden shadow-xl border border-blue-900/10 mb-20"
        >
          <div className="flex flex-col lg:flex-row">
            <div 
              className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden"
              style={{
                backgroundImage: `url(${units[activeUnit].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d1219]/80 via-[#0d1219]/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center p-8 lg:hidden">
                <h3 className="text-3xl font-bold text-white">{units[activeUnit].title}</h3>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-blue-900/20 p-3 rounded-lg mr-4">
                  {React.cloneElement(units[activeUnit].icon, { 
                    className: "text-blue-400"
                  })}
                </div>
                <h3 className="text-3xl font-bold text-white hidden lg:block">
                  {units[activeUnit].title}
                </h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{units[activeUnit].description}</p>
              <p className="text-gray-300 mb-8">{units[activeUnit].detail}</p>
              
              <h4 className="text-blue-400 font-semibold mb-4 uppercase text-sm tracking-wider">Key Services</h4>
              <ul className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                {units[activeUnit].keyServices.map((service, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-gray-300 group"
                  >
                    <ChevronRight 
                      size={16} 
                      className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform duration-300" 
                    />
                    <span className="group-hover:text-blue-300 transition-colors duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-blue-800 hover:bg-blue-700 text-white py-3 px-8 rounded-sm font-medium transition-all duration-300 relative overflow-hidden shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30"
              >
                <span className="relative z-10">{units[activeUnit].cta}</span>
                <ArrowRight 
                  size={16} 
                  className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" 
                />
                <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-700 to-blue-600 transition-all duration-300 group-hover:h-full -z-[1]"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Cross-Unit Collaboration</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our business units work together to provide integrated solutions that address complex business challenges.
            </p>
          </div>

          <div className="bg-[#121826] rounded-lg p-8 md:p-12 shadow-lg border border-blue-900/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Integrated Approach</h3>
                <p className="text-gray-300 mb-6">
                  While each of our business units operates with specialized focus and expertise, we leverage the combined strengths of all units to deliver comprehensive solutions for our clients.
                </p>
                <p className="text-gray-300">
                  This integrated approach allows us to address interconnected business challenges and provide end-to-end services, from strategic consulting to implementation and ongoing support.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Benefits of Our Multi-Unit Structure</h3>
                <ul className="space-y-4">
                  {[
                    "Seamless coordination across different service areas",
                    "Access to specialized expertise from multiple disciplines",
                    "Comprehensive view of your business challenges and opportunities",
                    "Efficiency through shared resources and streamlined communication",
                    "Consistent quality standards across all service deliverables"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <div className="bg-blue-900/20 p-1 rounded-full flex items-center justify-center mr-3 mt-1">
                        <ChevronRight size={12} className="text-blue-400" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#101624] via-[#121826] to-[#101624] rounded-xl p-8 md:p-12 shadow-xl border border-blue-900/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to explore solutions for your business?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you identify the right combination of services to address your unique business challenges.
          </p>
          <Link 
            to="/contact"
            className="group inline-flex items-center bg-blue-800 hover:bg-blue-700 text-white py-3 px-8 rounded-sm font-medium transition-all duration-300 relative overflow-hidden shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30"
          >
            <span className="relative z-10">Schedule a Consultation</span>
            <ArrowRight 
              size={16} 
              className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" 
            />
            <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-700 to-blue-600 transition-all duration-300 group-hover:h-full -z-[1]"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnitsPage;