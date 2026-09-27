import React from 'react';
import { Clock, Users, IndianRupee } from 'lucide-react';
import CounterAnimation from '../components/CounterAnimation';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-200/80 py-3 sm:py-4 lg:py-5 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-8">
          
          {/* Left: Certifications Container */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1.5 sm:gap-2">
            <span className="text-[10px] sm:text-xs font-semibold text-slate-600 tracking-wide uppercase sm:normal-case">
              Our Performance Marketing Services Are Certified By
            </span>

            <div className="flex items-center justify-center gap-5 sm:gap-7 pt-0.5">
              {/* Meta Business Partner */}
              <div className="flex items-center gap-2 group cursor-default">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#0081FB] shrink-0 transition-transform duration-200 group-hover:scale-105"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-label="Meta Business Partner"
                >
                  <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-sm sm:text-base lg:text-lg font-black tracking-tight text-slate-900 font-sans">
                    Meta
                  </span>
                  <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold text-slate-600 tracking-tight mt-0.5">
                    Business Partner
                  </span>
                </div>
              </div>

              {/* Google Partner Badge */}
              <div className="flex items-center gap-2 group cursor-default">
                {/* Official Google Partner Bookmark Ribbon */}
                <div className="w-2.5 sm:w-3 lg:w-3.5 h-7 sm:h-8 lg:h-9 bg-gradient-to-b from-[#EA4335] to-[#D93025] rounded-t-xs shadow-xs relative flex flex-col justify-end overflow-hidden shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <div className="w-0 h-0 border-l-[5px] sm:border-l-[6px] lg:border-l-[7px] border-l-transparent border-r-[5px] sm:border-r-[6px] lg:border-r-[7px] border-r-transparent border-b-[4px] sm:border-b-[5px] border-b-white" />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <div className="text-sm sm:text-base lg:text-lg font-black tracking-tight font-sans">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold text-slate-600 tracking-tight mt-0.5">
                    Partner
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider between left & right (desktop only) */}
          <div className="hidden lg:block h-10 w-px bg-slate-200" />

          {/* Right: 3 Milestone Stats (Responsive 3 Columns) with Animated Numbers */}
          <div className="grid grid-cols-3 gap-2 sm:gap-5 lg:gap-8 xl:gap-10 w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
            
            {/* Stat 1: 5+ Years Experience */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0c1f1b] text-[#00f59b] flex items-center justify-center shrink-0 border border-[#00f59b]/30 shadow-xs">
                <Clock className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-sm sm:text-lg lg:text-xl font-black text-slate-950 font-display leading-tight">
                  <CounterAnimation end={5} suffix="+" />
                </div>
                <div className="text-[9px] sm:text-xs text-slate-500 font-medium leading-tight">
                  <span className="sm:hidden">Years Exp.</span>
                  <span className="hidden sm:inline">Years Experience</span>
                </div>
              </div>
            </div>

            {/* Stat 2: 500+ Brands */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0c1f1b] text-[#00f59b] flex items-center justify-center shrink-0 border border-[#00f59b]/30 shadow-xs">
                <Users className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-sm sm:text-lg lg:text-xl font-black text-slate-950 font-display leading-tight">
                  <CounterAnimation end={500} suffix="+" />
                </div>
                <div className="text-[9px] sm:text-xs text-slate-500 font-medium leading-tight">
                  Brands
                </div>
              </div>
            </div>

            {/* Stat 3: ₹10+ Crore Ad Spend Managed */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0c1f1b] text-[#00f59b] flex items-center justify-center shrink-0 border border-[#00f59b]/30 shadow-xs">
                <IndianRupee className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-sm sm:text-lg lg:text-xl font-black text-slate-950 font-display leading-tight whitespace-nowrap">
                  <span className="sm:hidden">₹<CounterAnimation end={10} suffix="+ Cr" /></span>
                  <span className="hidden sm:inline">₹<CounterAnimation end={10} suffix="+ Crore" /></span>
                </div>
                <div className="text-[9px] sm:text-xs text-slate-500 font-medium leading-tight whitespace-nowrap">
                  <span className="sm:hidden">Ad Spend</span>
                  <span className="hidden sm:inline">Ad Spend Managed</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
