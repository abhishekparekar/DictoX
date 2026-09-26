import React from 'react';
import { Clock, Users, IndianRupee, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-200/90 py-5 sm:py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left: Certifications Container */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight shrink-0 max-w-[200px]">
              Our Performance Marketing Services Are Certified By
            </span>

            <div className="flex items-center gap-4 sm:gap-5 shrink-0">
              {/* Meta Business Partner */}
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#0081FB] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm font-black text-slate-900 leading-none">Meta</div>
                  <div className="text-[10px] text-slate-500 font-semibold tracking-tight mt-0.5">Business Partner</div>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />

              {/* Google Partner */}
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center font-black text-base text-[#EA4335] shrink-0">
                  G
                </span>
                <div className="text-left">
                  <div className="text-sm font-black text-slate-900 leading-none">Google</div>
                  <div className="text-[10px] text-slate-500 font-semibold tracking-tight mt-0.5">Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical divider between left & right */}
          <div className="h-10 w-px bg-slate-200 hidden lg:block" />

          {/* Right: 3 Milestone Stats with Dark Hexagonal/Octagonal Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-between lg:justify-end gap-6 sm:gap-8 xl:gap-10 w-full lg:w-auto">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#09221d] text-[#00f59b] flex items-center justify-center shrink-0 shadow-sm border border-[#00f59b]/30">
                <Clock className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-black text-slate-950 font-display leading-tight">
                  5+
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#09221d] text-[#00f59b] flex items-center justify-center shrink-0 shadow-sm border border-[#00f59b]/30">
                <Users className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-black text-slate-950 font-display leading-tight">
                  500+
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Brands
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#09221d] text-[#00f59b] flex items-center justify-center shrink-0 shadow-sm border border-[#00f59b]/30">
                <IndianRupee className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-black text-slate-950 font-display leading-tight">
                  ₹10+ Crore
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Ad Spend Managed
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}



