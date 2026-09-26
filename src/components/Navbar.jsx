import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Course', href: '#course' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-3 sm:py-3.5'
          : 'bg-white border-b border-slate-100 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        
        {/* Brand Official Logo */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none shrink-0">
          <img
            src="/images/logo1.png"
            alt="DictoX Marketing - Performance Marketing Agency"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm xl:text-base font-semibold text-slate-700 hover:text-slate-950 transition-colors duration-200 relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00d084] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-none text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#00f59b]/25 hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
          >
            <span>Get Free Strategy Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenConsultation}
            className="px-3.5 py-2 rounded-none text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] shadow-sm uppercase tracking-wider"
          >
            <span>Consult</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl px-6 py-5 flex flex-col gap-3 animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-base font-semibold text-slate-800 hover:text-[#00d084] py-2.5 border-b border-slate-100 flex items-center justify-between transition-colors"
            >
              <span>{link.name}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
          
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center py-3.5 rounded-none text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center text-xs text-slate-500 pt-1">
              Direct Agency Line:{' '}
              <a href="tel:+917796407424" className="text-slate-900 font-bold underline">
                +91 7796407424
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
