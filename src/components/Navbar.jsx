import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Home, 
  Layers, 
  TrendingUp, 
  Building2, 
  User, 
  GraduationCap, 
  PhoneCall, 
  Phone, 
  MapPin,
  Mail
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { fetchTenantSettings } from '../firebase';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoUrl, setLogoUrl] = useState('/images/logo2.png');
  const location = useLocation();

  // Load dynamic tenant logo if available
  useEffect(() => {
    async function loadLogo() {
      try {
        const settings = await fetchTenantSettings();
        if (settings?.logoUrl) {
          setLogoUrl(settings.logoUrl);
        }
      } catch (err) {
        console.warn('Failed to load logo:', err);
      }
    }
    loadLogo();
  }, []);

  // Smart Hide on Scroll Down / Reveal on Scroll Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Detect if scrolled past top threshold for styling
      setIsScrolled(currentScrollY > 15);

      // 2. Hide on scroll down, show on scroll up
      if (currentScrollY > 70) {
        if (currentScrollY > lastScrollY + 6) {
          // Scrolling DOWN -> smoothly hide navbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY - 6) {
          // Scrolling UP -> smoothly reveal navbar
          setIsVisible(true);
        }
      } else {
        // At the very top -> always visible
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close sidebar on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to dismiss sidebar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', path: '/services', icon: Layers },
    { name: 'Results', path: '/results', icon: TrendingUp },
    { name: 'Industries', path: '/industries', icon: Building2 },
    { name: 'Why DictoX?', path: '/why-dictox', icon: Sparkles },
    { name: 'About Us', path: '/about', icon: User },
    { name: 'Course', path: '/course', icon: GraduationCap },
    { name: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  return (
    <>
      {/* DictoX Floating Island Navbar - Smart Hide on Scroll Down & Reveal on Scroll Up */}
      <header
        className={`fixed top-2 sm:top-3.5 left-1/2 -translate-x-1/2 w-[96%] sm:w-[94%] max-w-7xl z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'
        }`}
      >
        <div className={`bg-white/95 backdrop-blur-md rounded-2xl px-3.5 sm:px-6 py-1.5 sm:py-2 border border-slate-200/80 transition-all duration-300 flex items-center justify-between ${
          isScrolled 
            ? 'shadow-[0_8px_30px_rgba(0,17,168,0.09)] border-blue-100' 
            : 'shadow-[0_6px_25px_rgba(0,0,0,0.04)]'
        }`}>
          
          {/* Brand Official Transparent Big Logo */}
          <Link to="/" className="flex items-center focus:outline-none shrink-0 group py-1">
            <img
              src={logoUrl || '/images/logo2.png'}
              alt="DictoX Marketing - Performance Marketing Agency"
              className="navbar-logo h-9 sm:h-11 md:h-12 lg:h-13 w-auto max-w-[150px] sm:max-w-[200px] md:max-w-[230px] object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              onError={(e) => {
                e.target.src = '/images/logo2.png';
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full text-[13.5px] font-semibold transition-all duration-200 relative select-none ${
                  isActive
                    ? 'text-[#0011a8] font-bold bg-blue-50/90 shadow-2xs'
                    : 'text-black hover:text-[#0011a8] hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-[13.5px] font-semibold transition-all duration-200 relative select-none ${
                    isActive
                      ? 'text-[#0011a8] font-bold bg-blue-50/90 shadow-2xs'
                      : 'text-black hover:text-[#0011a8] hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenConsultation}
              className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white text-xs sm:text-[13px] font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,17,168,0.35)] cursor-pointer flex items-center gap-1.5"
            >
              <span>Chat Now</span>
            </button>
          </div>

          {/* Mobile & Tablet Header Controls */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="navbar-chat-btn-mobile bg-[#090d16] hover:bg-[#0011a8] text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-4 py-1.5 rounded-full shadow-xs cursor-pointer active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Chat Now</span>
            </button>
            
            {/* Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-50 text-black hover:text-black hover:bg-slate-100 active:scale-95 transition-all focus:outline-none cursor-pointer border border-slate-200 shrink-0"
              aria-label="Open mobile navigation sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sidebar Drawer & Backdrop with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* 1. Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* 2. Slide-out Professional Sidebar Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[310px] sm:w-[350px] max-w-[88vw] bg-white shadow-[-15px_0_50px_rgba(0,17,168,0.12)] flex flex-col justify-between lg:hidden border-l border-slate-200/90 text-left font-sans overflow-hidden"
              aria-label="Mobile Navigation Sidebar"
            >
              {/* Top Accent Gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0011a8] via-[#2563eb] to-[#00a63e] shrink-0" />

              {/* Sidebar Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 shrink-0">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <img
                    src={logoUrl || '/images/logo2.png'}
                    alt="DictoX Marketing Logo"
                    className="sidebar-logo"
                    onError={(e) => {
                      e.target.src = '/images/logo2.png';
                    }}
                  />
                </Link>
                
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-black flex items-center justify-center transition-all focus:outline-none active:scale-95 border border-slate-200 cursor-pointer shadow-2xs hover:rotate-90"
                  aria-label="Close sidebar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Sidebar Navigation Links List */}
              <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-1">
                <div className="text-[10px] font-black uppercase tracking-wider text-black px-3 py-1 flex items-center justify-between">
                  <span>Navigation</span>
                  <span className="text-[9.5px] font-bold text-[#00a63e] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a63e] animate-pulse" />
                    Growth Partner
                  </span>
                </div>

                {/* Home Link */}
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ease-in-out ${
                      isActive
                        ? 'bg-blue-50/90 text-[#0011a8] font-bold border border-blue-200/70 shadow-xs'
                        : 'text-black hover:bg-slate-100 hover:text-[#0011a8]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out ${
                          isActive ? 'bg-[#0011a8] text-white shadow-xs' : 'bg-slate-100 text-black group-hover:bg-blue-50 group-hover:text-[#0011a8]'
                        }`}>
                          <Home className="w-4 h-4" />
                        </div>
                        <span className="text-black font-semibold group-hover:text-[#0011a8] transition-colors duration-200">Home</span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 transition-all duration-200 ease-in-out ${
                        isActive ? 'text-[#0011a8] translate-x-0.5' : 'text-black/60 group-hover:text-[#0011a8] group-hover:translate-x-1'
                      }`} />
                    </>
                  )}
                </NavLink>

                {/* Dynamic Nav Links */}
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isAnchor = link.path.startsWith('/#');

                  if (isAnchor) {
                    return (
                      <a
                        key={link.name}
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-black hover:bg-slate-100 hover:text-[#0011a8] transition-all duration-200 ease-in-out"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 text-black group-hover:bg-blue-50 group-hover:text-[#0011a8] transition-all duration-200 ease-in-out">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-black font-semibold group-hover:text-[#0011a8] transition-colors duration-200">{link.name}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-black/60 group-hover:text-[#0011a8] group-hover:translate-x-1 transition-all duration-200 ease-in-out" />
                      </a>
                    );
                  }

                  // Optional subtle badges for key destinations
                  let badge = null;
                  if (link.name === 'Results') badge = '75+ Cr';
                  if (link.name === 'Course') badge = 'Mentorship';

                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ease-in-out ${
                          isActive
                            ? 'bg-blue-50/90 text-[#0011a8] font-bold border border-blue-200/70 shadow-xs'
                            : 'text-black hover:bg-slate-100 hover:text-[#0011a8]'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out ${
                                isActive ? 'bg-[#0011a8] text-white shadow-xs' : 'bg-slate-100 text-black group-hover:bg-blue-50 group-hover:text-[#0011a8]'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className={`transition-colors duration-200 ${isActive ? 'text-[#0011a8] font-bold' : 'text-black font-semibold group-hover:text-[#0011a8]'}`}>
                              {link.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {badge && (
                              <span className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded-md transition-colors duration-200 ${
                                isActive 
                                  ? 'bg-[#0011a8] text-white' 
                                  : 'bg-slate-100 text-black group-hover:bg-blue-50 group-hover:text-[#0011a8]'
                              }`}>
                                {badge}
                              </span>
                            )}
                            <ArrowRight
                              className={`w-3.5 h-3.5 transition-all duration-200 ease-in-out ${
                                isActive ? 'text-[#0011a8] translate-x-0.5' : 'text-black/60 group-hover:text-[#0011a8] group-hover:translate-x-1'
                              }`}
                            />
                          </div>
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>

              {/* Sidebar Footer Professional Action Hub */}
              <div className="p-3 sm:p-4 border-t border-slate-100 bg-slate-50/80 space-y-2.5 shrink-0">
                {/* Premium Dark CTA Card */}
                <div className="bg-gradient-to-br from-[#090d16] via-[#0f172a] to-[#0011a8] text-white p-3 sm:p-3.5 rounded-2xl shadow-md space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Free Strategy Call
                    </span>
                    <span className="text-[9px] text-slate-300 font-semibold bg-white/10 px-1.5 py-0.5 rounded-md">
                      30 Mins
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-200 leading-snug">
                    Get custom ads &amp; funnel roadmap for your business.
                  </p>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-blue-50 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 shadow-xs active:scale-98 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#0011a8]" />
                    <span>Book Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Quick Tap-To-Connect Row */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+917796407424"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-black text-xs font-bold transition-all duration-200 shadow-2xs hover:border-[#0011a8]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0011a8]" />
                    <span>Call Founder</span>
                  </a>

                  <a
                    href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20discuss%20growing%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200 text-[#00a63e] text-xs font-bold transition-all duration-200 shadow-2xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-[#00a63e]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Office & Copyright */}
                <div className="pt-1 border-t border-slate-200/60 text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-black/80 font-medium">
                    <MapPin className="w-3 h-3 text-[#0011a8]" />
                    <span>Navale Icon, Narhe, Pune</span>
                  </div>
                  <div className="text-[9.5px] text-black/60 font-medium">
                    © 2026 DictoX Marketing. All rights reserved.
                  </div>
                </div>
              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
