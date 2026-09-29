import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Results', path: '/results' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
    { name: 'Course', path: '/course' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Meta Ads', path: '/services' },
    { name: 'Google Ads', path: '/services' },
    { name: 'WhatsApp API', path: '/services' },
    { name: 'Marketing Automation', path: '/services' },
  ];

  return (
    <footer className="pt-8 pb-24 sm:py-10 border-t border-slate-200/80 bg-white/70 text-slate-600 text-xs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <img
                src="/images/logo1.png"
                alt="DictoX Marketing"
                className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-xs text-slate-500 font-medium">
              Performance Marketing & Customer Acquisition Agency
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-700">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#0011a8] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} DictoX Marketing. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
