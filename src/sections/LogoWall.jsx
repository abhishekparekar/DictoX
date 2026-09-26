import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LogoWall() {
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

  return (
    <section className="bg-white border-t border-b border-slate-200/80 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            TRUSTED BY 500+ BRANDS
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          {/* Left Arrow */}
          <button className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Brands Strip */}
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-5 sm:gap-6 flex-1 px-2">
            {brands.map((b) => (
              <span
                key={b.name}
                className={`${b.color} ${b.font} opacity-85 hover:opacity-100 transition-all cursor-default select-none`}
              >
                {b.name}
              </span>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

