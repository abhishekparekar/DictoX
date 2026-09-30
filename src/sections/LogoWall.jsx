import React, { useState, useEffect } from 'react';
import { fetchTenantBrands, subscribeTenantBrands } from '../firebase';

// Verified Client Partners with crisp SVG Logos (Real visual logos, NO demo text)
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
];

export default function LogoWall() {
  const [brands, setBrands] = useState(initialClientLogos);

  useEffect(() => {
    // 1. Initial load from Firestore
    async function loadBrands() {
      try {
        const dynamicBrands = await fetchTenantBrands();
        if (dynamicBrands && dynamicBrands.length > 0) {
          // If admin added brands, prioritize them
          setBrands(dynamicBrands);
        }
      } catch (err) {
        console.warn('Failed to load initial brands:', err);
      }
    }
    loadBrands();

    // 2. Real-time subscription so admin additions appear instantly!
    const unsubscribe = subscribeTenantBrands((updatedBrands) => {
      if (updatedBrands && updatedBrands.length > 0) {
        setBrands(updatedBrands);
      }
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Multiplied array to ensure a 100% seamless, uninterrupted infinite loop
  const infiniteBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-3 sm:py-4 bg-white border-y border-slate-200/90 relative w-full overflow-hidden shadow-2xs">
      <div className="w-full mx-auto relative select-none">
        
        {/* Left Edge Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Continuous Left-Scrolling Marquee Track — ONLY Logos in Circle Cards */}
        <div className="flex w-max animate-marquee items-center gap-3.5 sm:gap-5 md:gap-7 py-0.5">
          {infiniteBrands.map((b, idx) => (
            <div
              key={`${b.id || b.name}-${idx}`}
              className="shrink-0 group cursor-default select-none transition-transform duration-300"
              title={b.name}
            >
              {/* Circle Card for Client Logo — Rock-solid standard responsive Tailwind sizing */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-white border border-slate-200/90 shadow-2xs group-hover:border-[#0011a8] group-hover:shadow-[0_6px_22px_rgba(0,17,168,0.14)] flex items-center justify-center p-2 sm:p-2.5 overflow-hidden transition-all duration-300 group-hover:scale-105 relative">
                {b.logoUrl ? (
                  <img
                    src={b.logoUrl}
                    alt={b.name}
                    className="w-full h-full object-contain rounded-full filter group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-blue-50 text-[#0011a8] flex items-center justify-center text-xs sm:text-sm font-black uppercase">
                    {b.name?.slice(0, 2) || 'CX'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Edge Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      </div>
    </section>
  );
}
