import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LogoWall() {
  const scrollRef = useRef(null);

  const brands = [
    { name: 'TATA', color: 'text-blue-900', font: 'font-black tracking-widest text-base sm:text-lg' },
    { name: 'mahindra', color: 'text-red-600', font: 'font-black tracking-wider lowercase text-base sm:text-lg' },
    { name: 'KIA', color: 'text-red-700', font: 'font-black tracking-widest text-base sm:text-lg' },
    { name: 'Godrej', color: 'text-slate-800', font: 'font-serif italic font-bold text-base sm:text-lg' },
    { name: 'Amul', color: 'text-red-600', font: 'font-serif font-black tracking-tight text-base sm:text-lg' },
    { name: 'HDFC BANK', color: 'text-blue-800', font: 'font-bold tracking-tight text-sm sm:text-base' },
    { name: 'croma', color: 'text-teal-700', font: 'font-bold tracking-wide lowercase text-base sm:text-lg' },
    { name: 'zepto', color: 'text-purple-700', font: 'font-black tracking-tight lowercase text-base sm:text-lg' },
    { name: 'cult.fit', color: 'text-orange-600', font: 'font-black lowercase tracking-tight text-base sm:text-lg' },
    { name: 'asianpaints', color: 'text-red-500', font: 'font-extrabold tracking-tighter text-base sm:text-lg' },
  ];

  // Duplicate for seamless 100% infinite loop
  const marqueeBrands = [...brands, ...brands];

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -180, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 180, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white border-t border-b border-slate-200/80 py-4 sm:py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-2.5 sm:mb-3">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-400">
            TRUSTED BY 500+ BRANDS
          </span>
        </div>

        {/* Carousel Container with Left/Right Buttons and Continuous Left Scroll */}
        <div className="relative flex items-center">
          
          {/* Left Arrow Button */}
          <button
            onClick={handleScrollLeft}
            aria-label="Previous logos"
            className="hidden sm:flex p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 z-20 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Left Gradient Fade */}
          <div className="pointer-events-none absolute left-0 sm:left-7 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

          {/* Scrolling Marquee Wrapper */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-x-hidden relative cursor-grab select-none py-1"
          >
            <div className="animate-marquee flex items-center gap-8 sm:gap-12 md:gap-14">
              {marqueeBrands.map((b, idx) => (
                <span
                  key={`${b.name}-${idx}`}
                  className={`${b.color} ${b.font} opacity-80 hover:opacity-100 transition-all shrink-0 px-2`}
                >
                  {b.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Gradient Fade */}
          <div className="pointer-events-none absolute right-0 sm:right-7 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Right Arrow Button */}
          <button
            onClick={handleScrollRight}
            aria-label="Next logos"
            className="hidden sm:flex p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 z-20 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}

