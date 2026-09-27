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
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3.5 bg-white/95 backdrop-blur-md py-3.5 px-2 rounded-full border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      {navItems.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(e, id)}
            className="group relative flex items-center justify-center w-5 h-5 cursor-pointer focus:outline-none"
            aria-label={`Jump to ${label}`}
          >
            {/* Hover Tooltip Pill */}
            <span className="pointer-events-none absolute right-8 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-md">
              {label}
            </span>

            {/* Indicator Dot matching Screenshot */}
            {isActive ? (
              <div className="w-4.5 h-4.5 rounded-full border border-slate-900 flex items-center justify-center transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              </div>
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800/80 group-hover:scale-150 transition-all duration-200" />
            )}
          </a>
        );
      })}
    </aside>
  );
}
