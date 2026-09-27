import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LogoWall() {
  const scrollRef = useRef(null);

  const brands = [
    { name: 'TATA', color: 'text-[#002D62]', font: 'font-black tracking-widest text-sm sm:text-base' },
    { name: 'mahindra', color: 'text-[#E31837]', font: 'font-black tracking-wider lowercase text-sm sm:text-base' },
    { name: 'KIA', color: 'text-[#BB162B]', font: 'font-black tracking-widest text-sm sm:text-base' },
    { name: 'Godrej', color: 'text-slate-800', font: 'font-serif italic font-bold text-sm sm:text-base' },
    { name: 'Kalyan', color: 'text-emerald-700', font: 'font-black tracking-tight text-sm sm:text-base' },
    { name: 'HDFC BANK', color: 'text-[#004C8F]', font: 'font-bold tracking-tight text-xs sm:text-sm' },
    { name: 'croma', color: 'text-[#00828A]', font: 'font-bold tracking-wide lowercase text-sm sm:text-base' },
    { name: 'zepto', color: 'text-[#8000FF]', font: 'font-black tracking-tight lowercase text-sm sm:text-base' },
    { name: 'cult.fit', color: 'text-slate-900', font: 'font-black lowercase tracking-tight text-sm sm:text-base' },
    { name: 'asianpaints', color: 'text-[#E31837]', font: 'font-extrabold tracking-tighter text-sm sm:text-base' },
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
    <section className="bg-white border-b border-slate-200/80 py-3.5 sm:py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center sm:text-left mb-2">
          <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-widest text-slate-400">
            TRUSTED BY 500+ BRANDS
          </span>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center">
          
          {/* Left Arrow Button */}
          <button
            onClick={handleScrollLeft}
            aria-label="Previous logos"
            className="hidden sm:flex p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 z-20 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Left Gradient Fade */}
          <div className="pointer-events-none absolute left-0 sm:left-6 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

          {/* Scrolling Marquee Wrapper */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-x-hidden relative cursor-grab select-none py-1"
          >
            <div className="animate-marquee flex items-center gap-6 sm:gap-10 md:gap-12">
              {marqueeBrands.map((b, idx) => (
                <span
                  key={`${b.name}-${idx}`}
                  className={`${b.color} ${b.font} opacity-85 hover:opacity-100 transition-all shrink-0 px-2`}
                >
                  {b.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Gradient Fade */}
          <div className="pointer-events-none absolute right-0 sm:right-6 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Right Arrow Button */}
          <button
            onClick={handleScrollRight}
            aria-label="Next logos"
            className="hidden sm:flex p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 z-20 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </div>
    </section>
  );
}
