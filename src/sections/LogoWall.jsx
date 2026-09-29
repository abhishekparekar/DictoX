import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LogoWall() {
  const scrollRef = useRef(null);

  const brands = [
    { name: 'TATA', color: 'text-slate-800', font: 'font-black tracking-widest text-sm sm:text-base' },
    { name: 'mahindra', color: 'text-slate-700', font: 'font-black tracking-wider lowercase text-sm sm:text-base' },
    { name: 'KIA', color: 'text-slate-800', font: 'font-black tracking-widest text-sm sm:text-base' },
    { name: 'Godrej', color: 'text-slate-700', font: 'font-serif italic font-bold text-sm sm:text-base' },
    { name: 'Kalyan', color: 'text-slate-800', font: 'font-black tracking-tight text-sm sm:text-base' },
    { name: 'HDFC BANK', color: 'text-blue-900', font: 'font-bold tracking-tight text-xs sm:text-sm' },
    { name: 'croma', color: 'text-teal-800', font: 'font-bold tracking-wide lowercase text-sm sm:text-base' },
    { name: 'zepto', color: 'text-purple-700', font: 'font-black tracking-tight lowercase text-sm sm:text-base' },
    { name: 'cult.fit', color: 'text-slate-800', font: 'font-black lowercase tracking-tight text-sm sm:text-base' },
    { name: 'asianpaints', color: 'text-red-700', font: 'font-extrabold tracking-tighter text-sm sm:text-base' },
  ];

  const marqueeBrands = [...brands, ...brands];

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -160, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 160, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 sm:py-8 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* White pill ribbon */}
        <div className="bg-white rounded-3xl sm:rounded-full py-4 px-6 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center gap-4">
          <div className="shrink-0 text-center sm:text-left pr-4 sm:border-r border-slate-200">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Trusted By 250+ Brands
            </span>
          </div>

          <div className="relative flex-1 overflow-x-hidden flex items-center w-full">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />

            <div
              ref={scrollRef}
              className="flex-1 overflow-x-hidden relative cursor-grab select-none py-1"
            >
              <div className="animate-marquee flex items-center gap-8 sm:gap-12">
                {marqueeBrands.map((b, idx) => (
                  <span
                    key={`${b.name}-${idx}`}
                    className={`${b.color} ${b.font} opacity-70 hover:opacity-100 transition-all shrink-0 px-2`}
                  >
                    {b.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}
