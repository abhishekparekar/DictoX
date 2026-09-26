import React from 'react';
import { Clock, Users, IndianRupee, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50/60 to-white border-y border-slate-200/90 py-6 sm:py-8 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left: Certifications Bar (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00b370] block">
                Official Certification
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                Our Services Are Certified By
              </span>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              {/* Meta Business Partner */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-400 transition-colors shadow-2xs">
                <svg className="w-4 h-4 text-[#0081FB] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-900 leading-none">Meta</div>
                  <div className="text-[9px] text-slate-500 font-semibold tracking-tight mt-0.5">Partner</div>
                </div>
              </div>

              {/* Google Partner */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-200 hover:border-red-400 transition-colors shadow-2xs">
                <span className="w-4 h-4 flex items-center justify-center font-black text-sm text-[#EA4335] shrink-0">
                  G
                </span>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-900 leading-none">Google</div>
                  <div className="text-[9px] text-slate-500 font-semibold tracking-tight mt-0.5">Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3 Key Metrics Cards in Guaranteed 3-Column Grid (7 columns on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            
            {/* Stat 1: 5+ Years Experience */}
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#00b370]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0 border border-emerald-200/60 shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-black text-slate-900 font-display leading-tight truncate">
                  5+ Years
                </div>
                <div className="text-[11px] text-slate-500 font-medium truncate">Industry Experience</div>
              </div>
            </div>

            {/* Stat 2: 500+ Brands Scaled */}
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#00b370]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0 border border-emerald-200/60 shadow-2xs">
                <Users className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-black text-slate-900 font-display leading-tight truncate">
                  500+
                </div>
                <div className="text-[11px] text-slate-500 font-medium truncate">Brands Scaled</div>
              </div>
            </div>

            {/* Stat 3: ₹10+ Crore Ad Spend */}
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#00b370]/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00b370] flex items-center justify-center shrink-0 border border-emerald-200/60 shadow-2xs">
                <IndianRupee className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-black text-slate-900 font-display leading-tight truncate">
                  ₹10+ Crore
                </div>
                <div className="text-[11px] text-slate-500 font-medium truncate">Ad Spend Managed</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
