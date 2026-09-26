import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-brand-dark/70 backdrop-blur-sm border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-emerald to-brand-deepEmerald p-0.5 shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center">
                D<span className="text-brand-emerald">X</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-1">
              Dicto<span className="text-brand-emerald">X</span>
              <span className="text-xs uppercase tracking-widest text-brand-emerald/90 font-mono font-medium ml-1 px-1.5 py-0.5 bg-brand-emerald/10 rounded border border-brand-emerald/20">Agency</span>
            </span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-wide -mt-0.5 hidden sm:inline-block">
              Performance Marketing
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-brand-surface/70 border border-brand-border/60 rounded-full px-5 py-1.5 shadow-inner-glow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-zinc-300 hover:text-brand-emerald px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+917796407424"
            className="hidden xl:flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-brand-emerald transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-brand-emerald" />
            +91 7796407424
          </a>
          <button
            onClick={onOpenConsultation}
            className="btn-primary text-xs sm:text-sm font-semibold !py-2.5 !px-5 flex items-center gap-2 shadow-glow-sm hover:shadow-glow-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenConsultation}
            className="btn-primary text-xs font-semibold !py-2 !px-3.5 flex items-center gap-1.5"
          >
            <span>Consult</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-brand-surface border border-brand-border text-zinc-300 hover:text-white hover:bg-brand-border transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-brand-dark/98 border-b border-brand-border shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="max-w-content mx-auto px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-zinc-200 hover:text-brand-emerald py-2 border-b border-brand-border/40 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-brand-emerald/70" />
              </a>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="btn-primary w-full text-sm font-semibold justify-center py-3"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Strategy Consultation</span>
              </button>
              <div className="text-center text-xs text-zinc-400 pt-2">
                Call Founder directly:{' '}
                <a href="tel:+917796407424" className="text-brand-emerald font-semibold underline">
                  +91 7796407424
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
