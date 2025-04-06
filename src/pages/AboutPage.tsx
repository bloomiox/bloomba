import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Brain, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-28 pb-20 bg-[#0d1219] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Bloom</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Learn about our journey, mission, and the team behind Bloom's success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#121826] rounded-lg p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue-900/30 group">
            <div className="bg-blue-900/20 p-3 rounded-full inline-block mb-6 group-hover:bg-blue-900/30 transition-colors duration-300">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <rect width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
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
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Started in 2011 offering consulting services, we broadened our offering to become a more vertically integrated company serving businesses looking for digital transformation solutions. With a team of dedicated experts ranging from junior to senior consultants, software engineers, marketing wizards, and sales professionals, we've grown our business and offer outstanding quality in all of our business divisions.
            </p>
            <div className="flex items-center">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
              <div className="px-4">
                <div className="w-3 h-3 bg-blue-800 rounded-full transform rotate-45"></div>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-900/20 to-transparent"></div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-6">
              Our main goal is to become a trusted advisor in implementing commercial excellence across the industry.
            </p>
          </div>
          
          <div className="bg-[#121826] rounded-lg p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue-900/30 group">
            <div className="bg-blue-900/20 p-3 rounded-full inline-block mb-6 group-hover:bg-blue-900/30 transition-colors duration-300">
              <ArrowRight size={36} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Mission and Vision</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our vision is to become a launchpad for success and empower companies on their journey from idea to commercialization and scale by providing value-added services along the way.
            </p>
            <div className="flex items-center">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
              <div className="px-4">
                <div className="w-3 h-3 bg-blue-800 rounded-full transform rotate-45"></div>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-l from-blue-900/20 to-transparent"></div>
            </div>
            <p className="text-gray-300 leading-relaxed mt-6 mb-8">
              Today, Bloom d.o.o owns and operates 5 well-established independent brands and provides development services via independent business units. Our business units continue to add value by forming long-term relationships through quality delivery and implementation of turn-key solutions.
            </p>
            <div className="mt-8">
              <Link 
                to="/units" 
                className="group inline-flex items-center bg-blue-800 hover:bg-blue-700 text-white py-3 px-8 rounded-sm font-medium transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">Our Units</span>
                <ChevronRight 
                  size={18} 
                  className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
                />
                <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 group-hover:h-full -z-[1]"></span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              The core principles that guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code quality to client interactions. Our commitment to exceptional standards drives continuous improvement.",
                icon: <div className="bg-blue-900/20 p-4 rounded-lg inline-flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-blue-400">
                    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,8H13V13.4L16.2,16.6L14.8,18L11,14.2V8Z" />
                  </svg>
                </div>
              },
              {
                title: "Innovation",
                description: "We embrace emerging technologies and creative approaches to solve complex challenges. Our innovative mindset keeps us at the forefront of digital evolution.",
                icon: <div className="bg-blue-900/20 p-4 rounded-lg inline-flex items-center justify-center mb-5">
                  <Brain className="text-blue-400" size={24} />
                </div>
              },
              {
                title: "Client Partnership",
                description: "We build lasting relationships based on trust, transparency, and mutual success. Our clients are partners on a shared journey toward digital transformation.",
                icon: <div className="bg-blue-900/20 p-4 rounded-lg inline-flex items-center justify-center mb-5">
                  <Users className="text-blue-400" size={24} />
                </div>
              }
            ].map((value, index) => (
              <div key={index} className="bg-[#121826] rounded-lg p-8 shadow-lg border border-blue-900/10 hover:border-blue-900/30 transition-colors duration-300 hover:shadow-xl">
                {value.icon}
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Statistics Section */}
        <div>
          <div className="bg-[#121826] rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900/30 to-transparent p-1"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-900/20">
              {[
                { label: "Years Experience", value: "14+" },
                { label: "Business Units", value: "5" },
                { label: "Projects Completed", value: "250+" },
                { label: "Satisfied Clients", value: "98%" }
              ].map((stat, index) => (
                <div key={index} className="p-8 text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-blue-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;