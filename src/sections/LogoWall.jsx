import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { fetchTenantBrands, subscribeTenantBrands } from '../firebase';

// Verified Client Partners with crisp SVG Logos
const initialClientLogos = [
  {
    id: 'c1',
    name: 'Skyline Realty',
    logoUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="%230f172a"/><path d="M25 72V42L42 28V72H25Z" fill="%233b82f6"/><path d="M42 72V22L62 36V72H42Z" fill="%2360a5fa"/><path d="M62 72V48L76 58V72H62Z" fill="%2393c5fd"/><circle cx="50" cy="24" r="3" fill="%23f59e0b"/></svg>',
  },
  {
    id: 'c2',
    name: 'Apex Academy',
    logoUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="%230011a8"/><path d="M50 24L22 40L50 56L78 40L50 24Z" fill="%23ffffff"/><path d="M30 48V64C30 72 50 78 50 78C50 78 70 72 70 64V48" stroke="%2338bdf8" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="40" r="4" fill="%2300a63e"/></svg>',
  },
  {
    id: 'c3',
    name: 'Sneha Clinic',
    logoUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="%23064e3b"/><path d="M50 26C36.7 26 26 36.7 26 50C26 63.3 36.7 74 50 74C63.3 74 74 63.3 74 50C74 36.7 63.3 26 50 26ZM46 36H54V46H64V54H54V64H46V54H36V46H46V36Z" fill="%2310b981"/></svg>',
  },
  {
    id: 'c4',
    name: 'Navale Icon',
    logoUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="%231e1b4b"/><rect x="32" y="32" width="36" height="36" rx="6" stroke="%23818cf8" stroke-width="6"/><path d="M50 20L68 38L50 56L32 38L50 20Z" fill="%234f46e5"/><circle cx="50" cy="50" r="5" fill="%23a5b4fc"/></svg>',
  },
  {
    id: 'c5',
    name: 'Urban Gourmet',
    logoUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="%237c2d12"/><path d="M42 26V46C42 50 45 54 50 54V74H52V54C57 54 60 50 60 46V26" stroke="%23fb923c" stroke-width="5" stroke-linecap="round"/><line x1="51" y1="26" x2="51" y2="44" stroke="%23fdba74" stroke-width="4"/><circle cx="50" cy="22" r="3" fill="%23f97316"/></svg>',
  },
  {
    id: 'c6',
    name: 'Alpha Fitness',
    logoUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="%2318181b"/><path d="M26 42H34V58H26V42Z" fill="%23ef4444"/><path d="M66 42H74V58H66V42Z" fill="%23ef4444"/><rect x="34" y="46" width="32" height="8" rx="2" fill="%23ffffff"/><circle cx="50" cy="50" r="7" fill="%23dc2626"/></svg>',
  },
  {
    id: 'c7',
    name: 'Goyal Landmarks',
    logoUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="%231e293b"/><path d="M30 65V35L50 20L70 35V65H30Z" stroke="%2310b981" stroke-width="5"/><circle cx="50" cy="45" r="8" fill="%2338bdf8"/></svg>',
  },
  {
    id: 'c8',
    name: 'EcoDrive EV',
    logoUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" fill="%23022c22"/><path d="M35 60L45 40H65L55 60H35Z" fill="%2334d399"/><circle cx="45" cy="50" r="4" fill="%23ffffff"/></svg>',
  }
];

export default function LogoWall() {
  const [brands, setBrands] = useState(initialClientLogos);

  useEffect(() => {
    async function loadBrands() {
      try {
        const dynamicBrands = await fetchTenantBrands();
        if (dynamicBrands && dynamicBrands.length > 0) {
          setBrands(dynamicBrands);
        }
      } catch (err) {
        console.warn('Failed to load initial brands:', err);
      }
    }
    loadBrands();

    const unsubscribe = subscribeTenantBrands((updatedBrands) => {
      if (updatedBrands && updatedBrands.length > 0) {
        setBrands(updatedBrands);
      }
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Multiplied array for seamless continuous infinite marquee
  const infiniteBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50/70 to-white border-y border-slate-200/90 relative w-full overflow-hidden">
      
      {/* Header Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <AnimatedSection direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-black">
              Client Logos
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight">
            Trusted By 500+ Brands
          </h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-900 max-w-xl mx-auto font-medium">
            Helping ambitious businesses across real estate, healthcare, education, retail, and manufacturing scale with measurable ROI.
          </p>
        </AnimatedSection>
      </div>

      <div className="w-full mx-auto relative select-none">
        
        {/* Left Edge Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-white via-white/95 to-transparent z-10" />

        {/* Continuous Left-Scrolling Marquee Track */}
        <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-4">
          {infiniteBrands.map((b, idx) => (
            <div
              key={`${b.id || b.name}-${idx}`}
              className="shrink-0 group cursor-pointer select-none transition-transform duration-300"
              title={b.name || 'Client Partner'}
            >
              {/* Circular Big Badge for Client Logo */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white border-2 border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] group-hover:border-[#0011a8] group-hover:shadow-[0_12px_36px_rgba(0,17,168,0.22)] flex items-center justify-center p-3 sm:p-4 md:p-5 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1.5 overflow-hidden">
                
                {/* Subtle Hover Radial Aura */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(0,17,168,0.08)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {b.logoUrl ? (
                  <img
                    src={b.logoUrl}
                    alt={b.name || 'Client Logo'}
                    className="w-full h-full object-contain filter transition-all duration-300 group-hover:brightness-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center p-2 text-center">
                    <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-800 group-hover:text-[#0011a8] transition-colors leading-tight line-clamp-2">
                      {b.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Edge Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-white via-white/95 to-transparent z-10" />

      </div>
    </section>
  );
}
