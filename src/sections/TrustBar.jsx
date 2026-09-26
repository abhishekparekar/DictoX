import React from 'react';
import { Clock, Users, IndianRupee, ShieldCheck, Award, Sparkles } from 'lucide-react';

export default function TrustBar() {
  const brands = [
    { name: 'TATA', label: 'TATA MOTORS', tag: 'Automotive & Enterprise', style: 'tracking-widest font-black text-white' },
    { name: 'Mahindra', label: 'MAHINDRA', tag: 'Auto & Farm', style: 'tracking-wider font-extrabold text-red-400' },
    { name: 'KIA', label: 'KIA MOTORS', tag: 'Automobile', style: 'tracking-widest font-black text-rose-300' },
    { name: 'Godrej', label: 'GODREJ', tag: 'Properties & Living', style: 'tracking-wide font-serif italic font-bold text-slate-100' },
    { name: 'Amul', label: 'AMUL', tag: 'Taste of India', style: 'tracking-tight font-serif font-black text-red-300' },
    { name: 'HDFC Bank', label: 'HDFC BANK', tag: 'Banking & Finance', style: 'tracking-tight font-black text-blue-300' },
    { name: 'Croma', label: 'CROMA', tag: 'Electronics Retail', style: 'tracking-wide font-bold text-teal-300' },
    { name: 'Zepto', label: 'ZEPTO', tag: 'Quick Commerce', style: 'tracking-tight font-black text-purple-300' },
    { name: 'Cult.fit', label: 'CULT.FIT', tag: 'Fitness & Health', style: 'tracking-tight font-black text-amber-300' },
    { name: 'Asian Paints', label: 'ASIAN PAINTS', tag: 'Home Decor', style: 'tracking-tight font-extrabold text-pink-300' },
  ];

  return (
    <section className="bg-[#030d0f] border-y border-[#00f59b]/30 py-8 sm:py-10 relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[200px] bg-[#00f59b]/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[500px] h-[200px] bg-[#00d084]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-7">
        
        {/* Top Tier: Official Certifications & The 3 High-Impact Growth Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Official Certifications Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#061e22] via-[#092b30] to-[#041618] border-2 border-[#00f59b]/40 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,245,155,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00f59b]/20 border border-[#00f59b]/40 text-[10px] font-mono font-black uppercase tracking-wider text-[#00f59b] mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Official Certification</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight font-display">
                Certified By Industry Giants
              </h3>
              <p className="text-xs text-slate-300 font-medium">Verified Partner Performance Standards</p>
            </div>

            {/* Official Meta & Google Badges */}
            <div className="flex items-center gap-2.5 shrink-0">
              {/* Meta Business Partner Badge */}
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/25 transition-all shadow-md">
                <div className="w-7 h-7 rounded-lg bg-[#0081FB] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-white leading-tight">Meta</div>
                  <div className="text-[10px] text-blue-300 font-bold uppercase tracking-wider">Partner</div>
                </div>
              </div>

              {/* Google Partner Badge */}
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/25 transition-all shadow-md">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center font-black text-sm text-[#4285F4] shrink-0 shadow-sm">
                  G
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-white leading-tight">Google</div>
                  <div className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Prominent Stat Metric Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            
            {/* Stat 1: 5+ Years Experience */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#072024] to-[#041517] border border-[#00f59b]/30 shadow-md hover:border-[#00f59b]/60 transition-all flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#00f59b]/15 text-[#00f59b] flex items-center justify-center shrink-0 border border-[#00f59b]/40 shadow-[0_0_15px_rgba(0,245,155,0.2)]">
                <Clock className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight leading-none">
                  5+ Years
                </div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Industry Experience</div>
              </div>
            </div>

            {/* Stat 2: 500+ Brands Scaled */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#072024] to-[#041517] border border-[#00f59b]/30 shadow-md hover:border-[#00f59b]/60 transition-all flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#00f59b]/15 text-[#00f59b] flex items-center justify-center shrink-0 border border-[#00f59b]/40 shadow-[0_0_15px_rgba(0,245,155,0.2)]">
                <Users className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight leading-none">
                  500+
                </div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Brands Scaled</div>
              </div>
            </div>

            {/* Stat 3: ₹10+ Crore Ad Spend */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#072024] to-[#041517] border-2 border-[#00f59b]/50 shadow-[0_0_20px_rgba(0,245,155,0.15)] hover:border-[#00f59b] transition-all flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00f59b] to-[#00d084] text-slate-950 flex items-center justify-center shrink-0 shadow-md font-black">
                <IndianRupee className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl font-black text-[#00f59b] font-display tracking-tight leading-none">
                  ₹10+ Cr
                </div>
                <div className="text-xs text-slate-200 font-semibold mt-1">Ad Spend Managed</div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Tier: Ultra-Premium Brand Authority Marquee / Grid */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-widest text-[#00f59b] font-bold shrink-0">
              <Sparkles className="w-4 h-4 animate-spin text-[#00f59b]" />
              <span>Trusted Across 500+ High-Growth Enterprises & Brands</span>
            </div>

            <div className="text-xs text-slate-400 font-medium">
              Real Estate • Healthcare • E-Commerce • Education • B2B
            </div>
          </div>

          {/* Grid of Clean Brand Badges with High Contrast */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3 mt-4">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group p-3 rounded-xl bg-white/[0.04] hover:bg-[#00f59b]/10 border border-white/10 hover:border-[#00f59b]/50 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-xs cursor-default"
              >
                <span className={`${b.style} text-xs sm:text-sm tracking-wide group-hover:scale-105 transition-transform`}>
                  {b.label}
                </span>
                <span className="text-[9px] text-slate-400 font-medium tracking-tight mt-1 truncate max-w-full">
                  {b.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

