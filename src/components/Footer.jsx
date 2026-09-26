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
    { name: 'Meta Ads', path: '/services#meta-ads' },
    { name: 'Google Ads', path: '/services#google-ads' },
    { name: 'YouTube Ads', path: '/services#google-ads' },
    { name: 'WhatsApp API', path: '/services#whatsapp-api' },
    { name: 'Automation', path: '/services#automation' },
  ];

  return (
    <footer className="bg-[#030d0b] text-slate-400 text-xs pt-8 sm:pt-10 pb-24 sm:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-5 sm:space-y-6">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 pb-5 sm:pb-6 border-b border-white/10 text-center lg:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src="/images/logo1.png"
                alt="DictoX Marketing"
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="border-t sm:border-t-0 sm:border-l border-white/15 pt-1.5 sm:pt-0 sm:pl-3 text-center sm:text-left">
              <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">
                Performance Marketing & Customer Acquisition Agency
              </span>
            </div>
          </div>

          {/* Navigation Links - Balanced flex on all screens */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-300">
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

          {/* Legal Links */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 text-center sm:text-left">
          
          {/* Services Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 sm:gap-x-4 gap-y-1 text-slate-400">
            {serviceLinks.map((s, idx) => (
              <React.Fragment key={s.name}>
                <Link to={s.path} className="hover:text-[#00f59b] transition-colors">
                  {s.name}
                </Link>
                {idx < serviceLinks.length - 1 && (
                  <span className="text-white/20 hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[11px] sm:text-xs text-slate-400">
            © 2024 DictoX Marketing. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}

