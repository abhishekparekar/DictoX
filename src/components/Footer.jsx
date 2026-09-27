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
    { name: 'Meta Ads', path: '/services#meta-ads' },
    { name: 'Google Ads', path: '/services#google-ads' },
    { name: 'YouTube Ads', path: '/services#google-ads' },
    { name: 'WhatsApp API', path: '/services#whatsapp-api' },
    { name: 'Automation', path: '/services#automation' },
  ];

  return (
    <footer className="bg-[#031310] text-slate-400 py-4 sm:py-5 lg:py-6 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 text-center lg:text-left">
          
          {/* Left Column: Transparent Brand Logo & Agency Subtitle */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none text-left">
              <img
                src="/images/logo1.png"
                alt="DictoX Marketing - Performance Marketing Agency"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="hidden sm:block border-l border-white/15 pl-2.5 sm:pl-3">
                <span className="text-[10.5px] sm:text-[11px] text-slate-300 font-medium block leading-tight">
                  Performance Marketing &amp; Customer Acquisition Agency
                </span>
              </div>
            </Link>
          </div>

          {/* Center Column: Two-tier Navigation Links */}
          <div className="space-y-1 flex flex-col items-center">
            {/* Primary Page Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-1 text-xs font-semibold text-slate-300">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-[#00f59b] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Services Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-0.5 text-[10.5px] sm:text-[11px] text-slate-400 font-normal">
              {serviceLinks.map((service, idx) => (
                <React.Fragment key={service.name}>
                  <Link
                    to={service.path}
                    className="hover:text-[#00f59b] transition-colors"
                  >
                    {service.name}
                  </Link>
                  {idx < serviceLinks.length - 1 && (
                    <span className="text-white/20 hidden sm:inline">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Legal Links + Copyright */}
          <div className="space-y-1 flex flex-col items-center lg:items-end text-[10.5px] sm:text-[11px] text-slate-400 shrink-0">
            {/* Legal Links */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Link to="/contact" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/contact" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-slate-500">
              © {new Date().getFullYear()} DictoX Marketing. All rights reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
