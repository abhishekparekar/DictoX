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
  MessageCircle
} from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for sticky header shadow and height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Layers },
    { name: 'Results', path: '/results', icon: TrendingUp },
    { name: 'Industries', path: '/industries', icon: Building2 },
    { name: 'About', path: '/about', icon: User },
    { name: 'Course', path: '/course', icon: GraduationCap },
    { name: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  return (
    <>
      {/* Adymize-Style Floating Island Pill Navbar */}
      <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl z-50 transition-all duration-300">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full px-5 sm:px-6 py-2.5 sm:py-3 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-between">
          
          {/* Brand Official Logo */}
          <Link to="/" className="flex items-center gap-2 focus:outline-none shrink-0 group">
            <img
              src="/images/logo1.png"
              alt="DictoX Marketing - Performance Marketing Agency"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links (Airy & Clean Adymize Style) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-[13px] sm:text-[13.5px] font-medium transition-all duration-200 relative select-none ${
                    isActive
                      ? 'text-slate-950 font-bold bg-slate-100/80'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Desktop Primary CTA Button: Adymize Sleek Dark Pill Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenConsultation}
              className="bg-[#1c1d2e] hover:bg-[#2c2e44] text-white text-xs sm:text-[13px] font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-98 cursor-pointer flex items-center gap-1.5"
            >
              <span>Chat Now</span>
            </button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="bg-[#1c1d2e] hover:bg-[#2c2e44] text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-xl shadow-xs cursor-pointer active:scale-95 transition-all"
            >
              <span>Chat Now</span>
            </button>
            
            {/* Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95 transition-all focus:outline-none cursor-pointer"
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
              className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* 2. Slide-out Sidebar Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[290px] sm:w-[330px] bg-white shadow-2xl flex flex-col justify-between lg:hidden"
              aria-label="Mobile Navigation Sidebar"
            >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
            <img
              src="/images/logo1.png"
              alt="DictoX Marketing Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus:outline-none active:scale-95"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sidebar Navigation Links List */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
            Navigation
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-50 to-[#00f59b]/15 text-[#00a868] font-bold border-l-4 border-[#00b370]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                          isActive ? 'bg-[#00b370] text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{link.name}</span>
                    </div>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive ? 'text-[#00a868] translate-x-0.5' : 'text-slate-300'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Sidebar Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/80 space-y-3">
          {/* Main CTA Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Strategy Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Quick Contact & Info Card */}
          <div className="bg-white rounded-xl p-3 border border-slate-200/80 space-y-2 text-xs">
            <a
              href="tel:+917796407424"
              className="flex items-center gap-2 text-slate-700 hover:text-[#00a868] transition-colors font-medium"
            >
              <div className="w-6 h-6 rounded-md bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+91 7796407424</span>
            </a>

            <a
              href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-[#25D366] transition-colors font-medium"
            >
              <div className="w-6 h-6 rounded-md bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <span>WhatsApp Strategy Chat</span>
            </a>

            <div className="flex items-center gap-2 text-slate-500 text-[11px] pt-1 border-t border-slate-100">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">Navale Icon, Narhe, Pune</span>
            </div>
          </div>

          <div className="text-center text-[10px] text-slate-400 font-medium">
            © {new Date().getFullYear()} DictoX Marketing. All rights reserved.
          </div>
        </div>

        </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
