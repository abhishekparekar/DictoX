import React from 'react';
import { Clock, Users, IndianRupee } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-slate-200/80 py-6 sm:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          
          {/* Card 1: Official Certification & Meta / Google Partner Badges (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#00b370] block">
                OFFICIAL CERTIFICATION
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight mt-0.5">
                Our Services Are Certified By
              </h3>
            </div>

            {/* Badges Container */}
            <div className="flex items-center gap-2.5 shrink-0">
              {/* Meta Business Partner */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors">
                <svg className="w-5 h-5 text-[#0081FB] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-900 leading-none">Meta</div>
                  <div className="text-[10px] text-slate-500 font-medium tracking-tight mt-0.5">Partner</div>
                </div>
              </div>

              {/* Google Partner */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors">
                <span className="w-5 h-5 flex items-center justify-center font-black text-sm text-[#EA4335] shrink-0">
                  G
                </span>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-900 leading-none">Google</div>
                  <div className="text-[10px] text-slate-500 font-medium tracking-tight mt-0.5">Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 5+ Years Industry Experience (2.33 cols) */}
          <div className="lg:col-span-2 lg:col-span-2.3 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#e6faf2] text-[#00b370] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-xl font-bold text-slate-950 font-display leading-tight truncate">
                5+ Years
              </div>
              <div className="text-xs text-slate-500 font-medium truncate mt-0.5">
                Industry Experience
              </div>
            </div>
          </div>

          {/* Card 3: 500+ Brands Scaled (2.33 cols) */}
          <div className="lg:col-span-2 lg:col-span-2.3 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#e6faf2] text-[#00b370] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-xl font-bold text-slate-950 font-display leading-tight truncate">
                500+
              </div>
              <div className="text-xs text-slate-500 font-medium truncate mt-0.5">
                Brands Scaled
              </div>
            </div>
          </div>

          {/* Card 4: ₹10+ Crore Ad Spend Managed (2.33 cols) */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#e6faf2] text-[#00b370] flex items-center justify-center shrink-0">
              <IndianRupee className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-xl font-bold text-slate-950 font-display leading-tight truncate">
                ₹10+ Crore
              </div>
              <div className="text-xs text-slate-500 font-medium truncate mt-0.5">
                Ad Spend Managed
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


