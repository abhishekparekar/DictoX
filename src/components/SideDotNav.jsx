import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'why-dictox', label: 'Why Us' },
  { id: 'process', label: 'Process' },
  { id: 'results', label: 'Case Studies' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'faq', label: 'FAQs' },
  { id: 'contact', label: 'Contact' },
];

export default function SideDotNav() {
  const [activeId, setActiveId] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            return;
          }
        }
      }
      setActiveId('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Only display on home page
  if (location.pathname !== '/') {
    return null;
  }

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Section Navigation"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 bg-slate-950/60 backdrop-blur-md p-2.5 rounded-full border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-slate-950/80 hover:border-[#00f59b]/30"
    >
      {navItems.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(e, id)}
            className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
            aria-label={`Jump to ${label}`}
          >
            {/* Hover Tooltip Pill */}
            <span className="pointer-events-none absolute right-8 px-2.5 py-1 rounded-md bg-slate-900/95 text-white text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 border border-white/10 shadow-lg">
              {label}
            </span>

            {/* Indicator Dot */}
            <div
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 bg-[#00f59b] scale-125 shadow-[0_0_12px_#00f59b]'
                  : 'w-2 h-2 bg-slate-400/60 group-hover:bg-slate-200 group-hover:scale-110'
              }`}
            />
          </a>
        );
      })}
    </aside>
  );
}
