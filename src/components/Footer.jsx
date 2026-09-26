import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenConsultation }) {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Results', path: '/results' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
    { name: 'Course', path: '/course' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    'Meta Ads',
    'Google Ads',
    'YouTube Ads',
    'WhatsApp API',
    'Automation',
  ];

  return (
    <footer className="bg-[#030d0b] text-slate-400 text-xs py-10 sm:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-6">
        
        {/* Top Row matching Screenshot 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10 text-center lg:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src="/images/logo1.png"
                alt="DictoX Marketing"
                className="h-9 sm:h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="text-left hidden sm:block border-l border-white/15 pl-3">
              <span className="text-[11px] text-slate-400 block font-medium">
                Performance Marketing & Customer Acquisition Agency
              </span>
            </div>
          </div>

          {/* Center: Main Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#00f59b] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Legal Links */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>

        </div>

        {/* Bottom Row matching Screenshot 3 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          
          {/* Services Horizontal Row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-slate-400">
            {serviceLinks.map((s, idx) => (
              <Link key={idx} to="/services" className="hover:text-[#00f59b] transition-colors">
                {s}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div>
            © 2024 DictoX Marketing. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}

