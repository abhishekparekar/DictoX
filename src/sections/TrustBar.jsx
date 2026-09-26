import React from 'react';
import { Clock, Users, IndianRupee } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-8 sm:py-10 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* Left: Certifications */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 max-w-[220px] leading-snug">
              Our Performance Marketing Services Are Certified By
            </span>

            <div className="flex items-center gap-4 sm:gap-6">
              {/* Meta Partner */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-blue-400 transition-colors">
                <svg className="w-6 h-6 text-[#0081FB]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Meta</div>
                  <div className="text-[10px] text-slate-500 font-semibold tracking-wide">Business Partner</div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-slate-200" />

              {/* Google Partner */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-red-400 transition-colors">
                <div className="w-5 h-5 flex items-center justify-center font-black text-lg text-[#EA4335]">
                  G
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Google</div>
                  <div className="text-[10px] text-slate-500 font-semibold tracking-wide">Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3 Key Metrics Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-md">
                <Clock className="w-5 h-5 text-[#00f59b]" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-display leading-tight">
                  5+ Years
                </div>
                <div className="text-xs text-slate-500 font-medium">Industry Experience</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-slate-200" />

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-md">
                <Users className="w-5 h-5 text-[#00f59b]" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-display leading-tight">
                  500+
                </div>
                <div className="text-xs text-slate-500 font-medium">Brands Scaled</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-slate-200" />

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-md">
                <IndianRupee className="w-5 h-5 text-[#00f59b]" />
              </div>
              <div className="text-left">
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 font-display leading-tight">
                  ₹10+ Crore
                </div>
                <div className="text-xs text-slate-500 font-medium">Ad Spend Managed</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
