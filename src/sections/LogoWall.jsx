import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LogoWall() {
  const brands = [
    { name: 'TATA', color: 'text-blue-900', font: 'font-extrabold tracking-widest' },
    { name: 'mahindra', color: 'text-red-600', font: 'font-black tracking-wider lowercase' },
    { name: 'KIA', color: 'text-red-700', font: 'font-black tracking-widest' },
    { name: 'Godrej', color: 'text-slate-800', font: 'font-serif italic font-bold' },
    { name: 'Amul', color: 'text-red-600', font: 'font-serif font-black tracking-tight' },
    { name: 'HDFC BANK', color: 'text-blue-800', font: 'font-bold tracking-tight' },
    { name: 'croma', color: 'text-teal-700', font: 'font-bold tracking-wide lowercase' },
    { name: 'zepto', color: 'text-purple-700', font: 'font-extrabold tracking-tight lowercase' },
    { name: 'cult.fit', color: 'text-orange-600', font: 'font-black lowercase tracking-tight' },
    { name: 'asianpaints', color: 'text-red-500', font: 'font-extrabold tracking-tighter' },
  ];

  return (
    <section className="bg-slate-50/80 border-b border-slate-200/80 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Label with arrows */}
          <div className="flex items-center gap-2 text-slate-500 shrink-0">
            <button className="p-1 rounded hover:bg-slate-200 transition-colors" aria-label="Previous brands">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
              Trusted By 500+ Brands
            </span>
            <button className="p-1 rounded hover:bg-slate-200 transition-colors" aria-label="Next brands">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Brands List */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-8 flex-1 w-full overflow-hidden">
            {brands.map((b) => (
              <span
                key={b.name}
                className={`text-sm sm:text-base ${b.color} ${b.font} opacity-80 hover:opacity-100 transition-opacity cursor-default select-none`}
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
