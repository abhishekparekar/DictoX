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
  const [logoUrl, setLogoUrl] = useState('/images/logo1.png');
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
          <Link to="/" className="flex items-center focus:outline-none shrink-0 group py-0.5">
            <img
              src={logoUrl || '/images/logo1.png'}
              alt="DictoX Marketing - Performance Marketing Agency"
              className="h-9 sm:h-11 md:h-12 w-auto max-w-[155px] sm:max-w-[195px] md:max-w-[225px] object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              onError={(e) => {
                e.target.src = '/images/logo1.png';
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
              className="bg-[#090d16] hover:bg-[#0011a8] text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xs cursor-pointer active:scale-95 transition-all"
            >
              <span>Chat Now</span>
            </button>
            
            {/* Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-50 text-black hover:text-black hover:bg-slate-100 active:scale-95 transition-all focus:outline-none cursor-pointer border border-slate-200"
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
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* 2. Slide-out Sidebar Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] sm:w-[340px] max-w-[88vw] bg-white shadow-2xl flex flex-col justify-between lg:hidden border-l border-slate-200/90 text-left font-sans"
              aria-label="Mobile Navigation Sidebar"
            >
              {/* Sidebar Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <img
                    src={logoUrl || '/images/logo1.png'}
                    alt="DictoX Marketing Logo"
                    className="h-9 sm:h-10 w-auto max-w-[170px] object-contain"
                    onError={(e) => {
                      e.target.src = '/images/logo1.png';
                    }}
                  />
                </Link>
                
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-black hover:text-black flex items-center justify-center transition-colors focus:outline-none active:scale-95 border border-slate-200 cursor-pointer shadow-2xs"
                  aria-label="Close sidebar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Sidebar Navigation Links List */}
              <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-black px-3 py-1 flex items-center justify-between">
                  <span>Navigation</span>
                  <span className="text-[9.5px] font-semibold text-[#00a63e] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    DictoX Growth
                  </span>
                </div>

                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-50 text-[#0011a8] font-bold border-l-4 border-[#0011a8]'
                        : 'text-black hover:bg-slate-50 hover:text-black'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-blue-50 text-[#0011a8]">
                      <Home className="w-4 h-4" />
                    </div>
                    <span>Home</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </NavLink>

                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isAnchor = link.path.startsWith('/#');

                  if (isAnchor) {
                    return (
                      <a
                        key={link.name}
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-black hover:bg-slate-50 hover:text-black transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-slate-100 text-black">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{link.name}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-black" />
                      </a>
                    );
                  }

                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-blue-50 text-[#0011a8] font-bold border-l-4 border-[#0011a8]'
                            : 'text-black hover:bg-slate-50 hover:text-black'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                                isActive ? 'bg-[#0011a8] text-white shadow-xs' : 'bg-slate-100 text-black'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <span>{link.name}</span>
                          </div>
                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform ${
                              isActive ? 'text-[#0011a8] translate-x-0.5' : 'text-black'
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>

              {/* Sidebar Footer Actions */}
              <div className="p-3.5 sm:p-4 border-t border-slate-100 bg-slate-50/70 space-y-2.5">
                {/* Main CTA Button: Opens Contact Form directly */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 sm:py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#090d16] hover:bg-[#0011a8] shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all tracking-wide"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#00a63e]" />
                  <span>Get Free Strategy Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Quick Contact & Info Card */}
                <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/90 space-y-1.5 text-xs shadow-2xs">
                  <div className="flex items-center gap-2 text-black font-medium">
                    <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0011a8] flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <a href="tel:+917796407424" className="hover:text-[#0011a8] font-bold">7796407424</a>
                      <span className="text-slate-300">/</span>
                      <a href="tel:+919834036821" className="hover:text-[#0011a8] font-bold">9834036821</a>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-[#00a63e] transition-colors font-medium"
                  >
                    <div className="w-6 h-6 rounded-md bg-emerald-50 text-[#00a63e] flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-[#00a63e]" />
                    </div>
                    <span className="font-bold text-[#00a63e]">Chat With Us On WhatsApp</span>
                  </a>

                  <a
                    href="mailto:dictoxmarketing@gmail.com"
                    className="flex items-center gap-2 text-black hover:text-[#0011a8] transition-colors font-medium truncate"
                  >
                    <div className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate">dictoxmarketing@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-2 text-slate-400 text-[10.5px] pt-1 border-t border-slate-100">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">Navale Icon, Narhe, Pune</span>
                  </div>
                </div>

                <div className="text-center text-[10px] text-black font-medium">
                  © 2026 DictoX Marketing. All rights reserved.
                </div>
              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
