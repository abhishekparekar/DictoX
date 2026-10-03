import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { fetchTenantBrands, subscribeTenantBrands } from '../firebase';

export default function LogoWall() {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;

    async function loadBrands() {
      setIsLoading(true);
      try {
        const dynamicBrands = await fetchTenantBrands();
        if (dynamicBrands && dynamicBrands.length > 0) {
          setBrands(dynamicBrands);
        }
      } catch (err) {
        console.warn('Failed to load brands:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadBrands();

    // Real-time listener — updates instantly when admin adds/removes a brand
    unsubscribe = subscribeTenantBrands((updatedBrands) => {
      setBrands(updatedBrands && updatedBrands.length > 0 ? updatedBrands : []);
      setIsLoading(false);
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Repeat logos for seamless infinite marquee (only when brands exist)
  const infiniteBrands = brands.length > 0
    ? [...brands, ...brands, ...brands, ...brands]
    : [];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50/70 to-white border-y border-slate-200/90 relative w-full overflow-hidden">

      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <AnimatedSection direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00a63e] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#0011a8]">
              OUR CLIENTS
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Trusted By{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              500+ Brands
            </span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-black max-w-xl mx-auto font-semibold">
            Helping ambitious businesses across real estate, healthcare, education, retail, and manufacturing scale with measurable ROI.
          </p>
        </AnimatedSection>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12 gap-3">
          <div className="w-8 h-8 border-4 border-blue-100 border-t-[#0011a8] rounded-full animate-spin" />
          <span className="text-sm text-slate-400 font-medium">Loading client logos...</span>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && brands.length === 0 && (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
            <svg className="w-7 h-7 text-[#0011a8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <p className="text-sm font-bold text-slate-700">Client logos coming soon</p>
          <p className="text-xs text-slate-400 mt-1 max-w-xs">Upload brand logos via the Admin Panel to display them here.</p>
        </div>
      )}

      {/* Marquee — only when brands exist */}
      {!isLoading && brands.length > 0 && (
        <div className="w-full mx-auto relative select-none">

          {/* Left Edge Fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-white via-white/95 to-transparent z-10" />

          {/* Continuous Marquee Track */}
          <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-4">
            {infiniteBrands.map((b, idx) => (
              <div
                key={`${b.id || b.name}-${idx}`}
                className="shrink-0 group cursor-pointer select-none transition-transform duration-300"
                title={b.name || 'Client Partner'}
              >
                {/* Circular Badge */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white border-2 border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] group-hover:border-[#0011a8] group-hover:shadow-[0_12px_36px_rgba(0,17,168,0.22)] flex items-center justify-center p-3 sm:p-4 md:p-5 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1.5 overflow-hidden">

                  {/* Hover Aura */}
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

          {/* Right Edge Fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-white via-white/95 to-transparent z-10" />

        </div>
      )}

    </section>
  );
}
