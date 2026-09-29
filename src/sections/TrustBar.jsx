import React from 'react';
import { Clock, Users, IndianRupee } from 'lucide-react';
import CounterAnimation from '../components/CounterAnimation';

export default function TrustBar() {
  return (
    <section className="py-2.5 sm:py-3.5 relative z-20 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-full py-2.5 sm:py-3 px-4 sm:px-6 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,17,168,0.03)] flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Left: Certifications Container */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Certified Partners:
            </span>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Meta Business Partner */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0081FB] shrink-0" />
                <span className="text-xs font-bold text-slate-800">Meta Partner</span>
              </div>

              {/* Google Partner */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EA4335] shrink-0" />
                <span className="text-xs font-bold text-slate-800">Google Ads</span>
              </div>

              {/* WhatsApp API */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
                <span className="text-xs font-bold text-slate-800">WhatsApp API</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-5 w-px bg-slate-200" />

          {/* Right: Milestone Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 text-center sm:text-left w-full md:w-auto border-t md:border-t-0 border-slate-100 pt-2 md:pt-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-0.5 sm:gap-1.5">
              <div className="text-xs sm:text-sm md:text-base font-extrabold text-[#0011a8] font-display">
                <CounterAnimation end={5} suffix="+" />
              </div>
              <span className="text-[10px] sm:text-xs text-slate-600 font-semibold whitespace-nowrap">Years Exp.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-0.5 sm:gap-1.5">
              <div className="text-xs sm:text-sm md:text-base font-extrabold text-[#00a63e] font-display">
                <CounterAnimation end={250} suffix="+" />
              </div>
              <span className="text-[10px] sm:text-xs text-slate-600 font-semibold whitespace-nowrap">Brands</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-0.5 sm:gap-1.5">
              <div className="text-xs sm:text-sm md:text-base font-extrabold text-slate-950 font-display whitespace-nowrap">
                ₹<CounterAnimation end={15} suffix="+ Cr" />
              </div>
              <span className="text-[10px] sm:text-xs text-slate-600 font-semibold whitespace-nowrap">Ad Spent</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
