import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-200 group-hover:scale-105 transition-transform">
            L
          </div>
          <span className={`font-heading font-extrabold text-2xl tracking-tight text-slate-900`}>
            Lumina<span className="text-brand-600">Digital</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-slate-600 hover:text-brand-600 font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          
          <a 
            href="#home" 
            className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-md shadow-brand-100 active:scale-95"
          >
            Parlons-en
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button 
            className="p-2 text-slate-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 bg-white border-b shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 py-8 space-y-4 flex flex-col items-center text-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-lg font-medium text-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#home" 
            className="w-full bg-brand-600 text-white px-6 py-3 rounded-xl font-bold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Demander un Audit
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;