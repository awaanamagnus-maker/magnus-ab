import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl mb-2">Magnus W. Awaana</div>
            <p className="text-gray-400 max-w-md">
              Digital marketing professional & entrepreneur specializing in AI-powered business solutions, 
              modern web development, and growth strategies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-4 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200 group"
            >
              <ArrowUp className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </button>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 flex items-center justify-center md:justify-end">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> in Ghana
              </p>
              <p className="text-gray-500 text-sm mt-1">
                © {new Date().getFullYear()} Magnus W. Awaana. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;