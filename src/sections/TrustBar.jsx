import React from 'react';
import { History, Users, IndianRupee } from 'lucide-react';
import CounterAnimation from '../components/CounterAnimation';

export default function TrustBar() {
  return (
    <section className="relative z-20 w-full bg-white border-y border-slate-200/90 shadow-[0_4px_20px_rgba(0,17,168,0.03)] py-4 sm:py-5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
          
          {/* Left Column: Certifications with Heading */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 shrink-0">
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-normal">
              Our Performance Marketing Services Are Certified By
            </span>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-7">
              {/* Meta Business Partner Official Lockup */}
              <div className="flex items-center gap-2.5 group cursor-default">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#0081FB] shrink-0 fill-current group-hover:scale-105 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M16.98 6.5C15.11 6.5 13.62 7.42 12 9.06C10.38 7.42 8.89 6.5 7.02 6.5C3.76 6.5 1.5 9.08 1.5 12.35C1.5 15.62 3.76 18.2 7.02 18.2C9.07 18.2 10.66 17.15 12 15.35C13.34 17.15 14.93 18.2 16.98 18.2C20.24 18.2 22.5 15.62 22.5 12.35C22.5 9.08 20.24 6.5 16.98 6.5ZM7.02 15.82C5.07 15.82 3.86 14.24 3.86 12.35C3.86 10.46 5.07 8.88 7.02 8.88C8.5 8.88 9.77 9.85 10.87 11.39C9.72 14.73 8.35 15.82 7.02 15.82ZM16.98 15.82C15.65 15.82 14.28 14.73 13.13 11.39C14.23 9.85 15.5 8.88 16.98 8.88C18.93 8.88 20.14 10.46 20.14 12.35C20.14 14.24 18.93 15.82 16.98 15.82Z" />
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    Meta
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-tight mt-0.5">
                    Business Partner
                  </span>
                </div>
              </div>

              {/* Google Partner Official Lockup */}
              <div className="flex items-center gap-2.5 group cursor-default">
                <div className="relative flex items-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-8 sm:w-6 sm:h-9" viewBox="0 0 24 34" fill="none" aria-hidden="true">
                    <rect x="2" y="2" width="5.5" height="26" rx="2" fill="#EA4335" />
                    <rect x="9.5" y="4" width="5.5" height="22" rx="2" fill="#4285F4" />
                    <rect x="17" y="7" width="5.5" height="16" rx="2" fill="#FBBC05" />
                    <path d="M2 28L4.75 32.5L7.5 28H2Z" fill="#C5221F" opacity="0.9" />
                  </svg>
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    Google
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-tight mt-0.5">
                    Partner
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Vertical Divider */}
          <div className="hidden lg:block h-10 w-px bg-slate-200" aria-hidden="true" />

          {/* Right Column: 3 Metric Counters with Circular Dark Badges */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 items-center w-full lg:w-auto border-t lg:border-t-0 border-slate-100 pt-3 lg:pt-0">
            
            {/* Metric 1: Years Experience */}
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <History className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              </div>
              <div className="flex flex-col text-left">
                <div className="text-base sm:text-xl md:text-2xl font-black text-slate-950 font-display leading-tight">
                  <CounterAnimation end={5} suffix="+" />
                </div>
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold whitespace-nowrap">
                  Years Experience
                </span>
              </div>
            </div>

            {/* Metric 2: Brands */}
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              </div>
              <div className="flex flex-col text-left">
                <div className="text-base sm:text-xl md:text-2xl font-black text-slate-950 font-display leading-tight">
                  <CounterAnimation end={500} suffix="+" />
                </div>
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold whitespace-nowrap">
                  Brands
                </span>
              </div>
            </div>

            {/* Metric 3: Ad Spend Managed */}
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111827] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                <IndianRupee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              </div>
              <div className="flex flex-col text-left">
                <div className="text-base sm:text-xl md:text-2xl font-black text-slate-950 font-display leading-tight whitespace-nowrap">
                  ₹<CounterAnimation end={10} suffix="+ Crore" />
                </div>
                <span className="text-[10px] sm:text-xs text-slate-500 font-semibold whitespace-nowrap">
                  Ad Spend Managed
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
