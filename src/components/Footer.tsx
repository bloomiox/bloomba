import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0d1219] border-t border-blue-900/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">BLOOM</h3>
            <p className="text-gray-400">
              Empowering businesses through digital transformation and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Our Units', path: '/units' },
                { label: 'Blog', path: '/blog' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Maglajska 1</li>
              <li>71000 Sarajevo</li>
              <li>Bosnia and Herzegovina</li>
              <li className="pt-2">
                <a href="mailto:hello@bloom.ba" className="hover:text-white transition-colors duration-200">
                  hello@bloom.ba
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/company/bloom-d-o-o' },
                { label: 'Twitter', href: '#' },
                { label: 'Facebook', href: 'https://www.facebook.com/bloom.doo/' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-900/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Bloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;