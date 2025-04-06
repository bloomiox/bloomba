import React from 'react';
import Contact from '../Contact';

const ContactPage = () => {
  return (
    <div className="pt-28 pb-20 bg-[#0d1219] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project or have questions about our services? Reach out to our team today.
          </p>
        </div>
        
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;