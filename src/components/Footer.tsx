import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-lg">Dress it Easy</span>
            </div>
            <p className="text-gray-600 text-sm">
              Making sustainable fashion accessible and fun for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-600 hover:text-purple-600 text-sm">Events</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-purple-600 text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600 text-sm">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-purple-600 text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Paris, France</li>
              <li>contact@dressiteasy.org</li>
              <li>+33 (0)1 23 45 67 89</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Dress it Easy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;