import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LogoWall() {
  const brands = [
    { name: 'TATA', color: 'text-blue-900', font: 'font-black tracking-widest text-lg sm:text-xl' },
    { name: 'mahindra', color: 'text-red-600', font: 'font-black tracking-wider lowercase text-lg sm:text-xl' },
    { name: 'KIA', color: 'text-red-700', font: 'font-black tracking-widest text-lg sm:text-xl' },
    { name: 'Godrej', color: 'text-slate-800', font: 'font-serif italic font-bold text-lg sm:text-xl' },
    { name: 'Amul', color: 'text-red-600', font: 'font-serif font-black tracking-tight text-lg sm:text-xl' },
    { name: 'HDFC BANK', color: 'text-blue-800', font: 'font-bold tracking-tight text-base sm:text-lg' },
    { name: 'croma', color: 'text-teal-700', font: 'font-bold tracking-wide lowercase text-lg sm:text-xl' },
    { name: 'zepto', color: 'text-purple-700', font: 'font-black tracking-tight lowercase text-lg sm:text-xl' },
    { name: 'cult.fit', color: 'text-orange-600', font: 'font-black lowercase tracking-tight text-lg sm:text-xl' },
    { name: 'asianpaints', color: 'text-red-500', font: 'font-extrabold tracking-tighter text-lg sm:text-xl' },
  ];

  return (
    <section className="bg-slate-50/90 border-b border-slate-200/80 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Label with arrows */}
          <div className="flex items-center gap-2.5 text-slate-500 shrink-0">
            <button className="p-1.5 rounded-lg hover:bg-slate-200 transition-colors" aria-label="Previous brands">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700">
              Trusted By 500+ Brands
            </span>
            <button className="p-1.5 rounded-lg hover:bg-slate-200 transition-colors" aria-label="Next brands">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Brands List */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 sm:gap-10 flex-1 w-full overflow-hidden">
            {brands.map((b) => (
              <span
                key={b.name}
                className={`${b.color} ${b.font} opacity-85 hover:opacity-100 transition-opacity cursor-default select-none hover:scale-105 transform duration-200`}
              >
                {b.name}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
