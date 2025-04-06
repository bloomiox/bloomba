import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-[#0d1219]">
      <section className="h-[800px] relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://pub-9c1c577e8e024610968a1d7aef150ac6.r2.dev/Bloom-Background-Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0d1219]/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Trusted Digital Partner
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We help businesses navigate digital transformation with innovative solutions and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#0d1219]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions to drive your business forward in the digital age
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation",
                description: "End-to-end digital transformation services to modernize your business operations and enhance customer experience.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Custom Software Development",
                description: "Tailored software solutions designed to address your unique business challenges and drive growth.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Cloud Solutions",
                description: "Cloud migration and optimization services to enhance scalability, security, and performance.",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Data Analytics",
                description: "Advanced analytics solutions to help you make data-driven decisions and uncover valuable insights.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design services to create intuitive and engaging digital experiences.",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#121826] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 group border border-blue-900/10 hover:border-blue-900/30"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121826] via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0d1219]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121826] rounded-lg p-8 md:p-12 shadow-lg border border-blue-900/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
                <p className="text-gray-300 mb-6">
                  Started in 2011 offering consulting services, we've grown into a vertically integrated company serving businesses in their digital transformation journey.
                </p>
                <Link 
                  to="/about"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 group"
                >
                  <span>Learn more about our story</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "14+", label: "Years Experience" },
                  { value: "250+", label: "Projects Completed" },
                  { value: "5", label: "Business Units" },
                  { value: "98%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="bg-[#0d1219] p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-blue-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Units Preview */}
      <section className="py-20 bg-[#0d1219]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Business Units</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Specialized divisions delivering excellence across different sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Bloom Media",
                description: "Web design and marketing solutions",
                excerpt: "Full-service digital agency specializing in brand development, web design, and digital marketing campaigns that drive results.",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Bloom Solutions",
                description: "Custom software development",
                excerpt: "Expert software development team delivering custom applications, enterprise solutions, and digital transformation strategies.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Bloom Consulting",
                description: "GTM and Business Development",
                excerpt: "Comprehensive GTM services for SME businesses, handling everything from business development to sales planning.",
                image: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "BIXIE",
                description: "CRM implementation services",
                excerpt: "Specialized CRM consulting and implementation services to optimize your customer relationship management processes.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((feature, index) => (
              <Link
                key={index}
                to="/units"
                className="group bg-[#121826] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 border border-blue-900/10 hover:border-blue-900/30"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1219] to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-3">{feature.description}</p>
                  <p className="text-sm text-gray-400 mb-4">{feature.excerpt}</p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-20 bg-[#0d1219]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Insights</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Stay updated with our latest thoughts on technology and business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "The Future of Digital Transformation",
                excerpt: "Explore the latest trends shaping digital transformation in 2024",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Building Resilient Software",
                excerpt: "Best practices for developing robust software solutions",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "AI in Business Operations",
                excerpt: "How AI is revolutionizing business operations",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((post, index) => (
              <Link
                key={index}
                to="/blog"
                className="group bg-[#121826] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 group"
            >
              <span>View all articles</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Careers Preview */}
      <section className="py-20 bg-[#121826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Be part of a dynamic team driving innovation and excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              "Professional Growth",
              "Work-Life Balance",
              "Global Impact"
            ].map((benefit, index) => (
              <div key={index} className="bg-[#0d1219] p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/careers"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-[#0d1219]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121826] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you achieve your digital transformation goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;