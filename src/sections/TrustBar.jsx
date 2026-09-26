import React from 'react';
import { Clock, Users, IndianRupee, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-200/90 py-4 sm:py-5 lg:py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          
          {/* Left: Certifications Container */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left w-full lg:w-auto">
            <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider block lg:max-w-[190px]">
              Our Performance Marketing Services Are Certified By
            </span>

            <div className="inline-flex items-center justify-center gap-4 sm:gap-5 px-3.5 py-1.5 sm:py-1 rounded-full bg-slate-50 sm:bg-transparent border sm:border-0 border-slate-200/80 shrink-0">
              {/* Meta Business Partner */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0081FB] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-slate-900 leading-none">Meta</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-semibold tracking-tight mt-0.5">Business Partner</div>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="h-6 sm:h-8 w-px bg-slate-200" />

              {/* Google Partner */}
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-black text-sm sm:text-base text-[#EA4335] shrink-0">
                  G
                </span>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-slate-900 leading-none">Google</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-semibold tracking-tight mt-0.5">Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical divider between left & right (desktop only) */}
          <div className="h-10 w-px bg-slate-200 hidden lg:block" />

          {/* Right: 3 Milestone Stats - Balanced 3-column grid on mobile, row on tablet/desktop */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full lg:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
            
            {/* Stat 1 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-50/70 sm:bg-transparent border sm:border-0 border-slate-200/60">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#09221d] text-[#00f59b] flex items-center justify-center shrink-0 shadow-xs border border-[#00f59b]/30">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </div>
              <div>
                <div className="text-xs sm:text-base font-black text-slate-950 font-display leading-tight">
                  5+
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                  <span className="hidden sm:inline">Years </span>Experience
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-50/70 sm:bg-transparent border sm:border-0 border-slate-200/60">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#09221d] text-[#00f59b] flex items-center justify-center shrink-0 shadow-xs border border-[#00f59b]/30">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </div>
              <div>
                <div className="text-xs sm:text-base font-black text-slate-950 font-display leading-tight">
                  500+
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                  Brands
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1.5 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-50/70 sm:bg-transparent border sm:border-0 border-slate-200/60">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#09221d] text-[#00f59b] flex items-center justify-center shrink-0 shadow-xs border border-[#00f59b]/30">
                <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </div>
              <div>
                <div className="text-xs sm:text-base font-black text-slate-950 font-display leading-tight whitespace-nowrap">
                  ₹10+ Cr<span className="hidden sm:inline">ore</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                  Ad Spend<span className="hidden sm:inline"> Managed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}



