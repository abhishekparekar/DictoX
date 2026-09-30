import React, { useState, useEffect } from 'react';
import { fetchTenantBrands } from '../firebase';

export default function LogoWall() {
  const defaultBrands = [
    { name: 'TATA MOTORS', color: 'text-slate-800', font: 'font-black tracking-widest text-xs sm:text-sm' },
    { name: 'Godrej', color: 'text-slate-800', font: 'font-serif italic font-bold text-sm sm:text-base' },
    { name: 'mahindra', color: 'text-red-700', font: 'font-black tracking-wider lowercase text-xs sm:text-sm' },
    { name: 'Kalyan', color: 'text-amber-800', font: 'font-serif font-black tracking-tight text-xs sm:text-sm' },
    { name: 'HDFC BANK', color: 'text-blue-900', font: 'font-bold tracking-tight text-xs sm:text-sm' },
    { name: 'croma', color: 'text-teal-700', font: 'font-bold tracking-wide lowercase text-xs sm:text-sm' },
    { name: 'zepto', color: 'text-purple-700', font: 'font-black tracking-tight lowercase text-xs sm:text-sm' },
    { name: 'cult.fit', color: 'text-slate-900', font: 'font-black lowercase tracking-tight text-xs sm:text-sm' },
    { name: 'asianpaints', color: 'text-red-600', font: 'font-extrabold tracking-tighter text-xs sm:text-sm' },
    { name: 'Joyalukkas', color: 'text-amber-700', font: 'font-serif font-bold text-xs sm:text-sm' },
    { name: 'Apollo', color: 'text-blue-800', font: 'font-black tracking-wider text-xs sm:text-sm' },
    { name: 'Landmark', color: 'text-slate-800', font: 'font-bold tracking-wide uppercase text-xs sm:text-sm' },
  ];

  const [brands, setBrands] = useState(defaultBrands);

  useEffect(() => {
    async function loadDynamicBrands() {
      try {
        const dynamicBrands = await fetchTenantBrands();
        if (dynamicBrands && dynamicBrands.length > 0) {
          // Prepend dynamic brands from admin panel
          setBrands([...dynamicBrands, ...defaultBrands]);
        }
      } catch (err) {
        console.warn('Failed to load dynamic brands:', err);
      }
    }
    loadDynamicBrands();
  }, []);

  // Tripled brand array to guarantee 100% gapless, seamless infinite loop
  const infiniteBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-4 sm:py-6 overflow-hidden relative w-full">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Full-Width Sleek White Pill Container */}
        <div className="bg-white rounded-2xl sm:rounded-full py-3 sm:py-3.5 px-4 sm:px-6 border border-slate-200/90 shadow-[0_4px_25px_rgba(0,17,168,0.03)] flex flex-col md:flex-row items-center gap-3 sm:gap-6 relative overflow-hidden">
          
          {/* Label Badge on Left */}
          <div className="shrink-0 flex items-center gap-2 border-b md:border-b-0 md:border-r border-slate-200 pb-2 md:pb-0 md:pr-6 text-center md:text-left w-full md:w-auto justify-center md:justify-start">
            <span className="w-2 h-2 rounded-full bg-[#00a63e] animate-pulse shrink-0" />
            <span className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 whitespace-nowrap">
              Trusted by 500+ Leading Brands
            </span>
          </div>

          {/* Automatic Infinite Scrolling Track */}
          <div className="relative flex-1 overflow-hidden w-full select-none py-1">
            
            {/* Left Edge Smooth Gradient Fade Mask */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />

            {/* Seamless Infinite Marquee Track */}
            <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12 md:gap-14">
              {infiniteBrands.map((b, idx) => (
                <div
                  key={`${b.name}-${idx}`}
                  className="inline-flex items-center gap-2 group cursor-default shrink-0 px-2 py-1 rounded-lg transition-transform duration-200 hover:scale-105"
                >
                  {b.logoUrl ? (
                    <div className="flex items-center gap-2">
                      <img
                        src={b.logoUrl}
                        alt={b.name}
                        className="h-6 sm:h-7 md:h-8 w-auto max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100 rounded"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span
                        className={`${b.color || 'text-slate-800'} ${b.font || 'font-bold text-xs uppercase'} opacity-75 group-hover:opacity-100 transition-opacity`}
                      >
                        {b.name}
                      </span>
                    </div>
                  ) : (
                    <span
                      className={`${b.color || 'text-slate-800'} ${b.font || 'font-bold text-xs uppercase'} opacity-70 group-hover:opacity-100 transition-opacity`}
                    >
                      {b.name}
                    </span>
                  )}
                  <span className="w-1 h-1 rounded-full bg-slate-300 ml-4 sm:ml-6" />
                </div>
              ))}
            </div>

            {/* Right Edge Smooth Gradient Fade Mask */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}
