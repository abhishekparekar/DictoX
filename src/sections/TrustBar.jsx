import React from 'react';
import { Clock, Users, IndianRupee, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-6 sm:py-7 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left: Certifications */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 max-w-[190px] leading-tight">
              Our Performance Marketing Services Are Certified By
            </span>

            <div className="flex items-center gap-4 sm:gap-6">
              {/* Meta Partner */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <svg className="w-5 h-5 text-[#0081FB]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">Meta</div>
                  <div className="text-[9px] text-slate-500 font-medium">Business Partner</div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-slate-200" />

              {/* Google Partner */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="w-4 h-4 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#EA4335]">G</span>
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">Google</div>
                  <div className="text-[9px] text-slate-500 font-medium">Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3 Key Metrics Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
                <Clock className="w-4 h-4 text-[#00f59b]" />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-bold text-slate-900 font-display leading-tight">
                  5+
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Years Experience</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-px bg-slate-200" />

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
                <Users className="w-4 h-4 text-[#00f59b]" />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-bold text-slate-900 font-display leading-tight">
                  500+
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Brands</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-px bg-slate-200" />

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
                <IndianRupee className="w-4 h-4 text-[#00f59b]" />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-bold text-slate-900 font-display leading-tight">
                  ₹10+ Crore
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Ad Spend Managed</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
