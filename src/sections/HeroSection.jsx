import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';
import CounterAnimation from '../components/CounterAnimation';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-10 overflow-hidden w-full">
      
      {/* Brand Ambient Aura Mesh Background (Royal Blue & Growth Green) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[520px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-4 left-1/5 w-[380px] sm:w-[520px] h-[260px] sm:h-[340px] bg-blue-400/15 rounded-full blur-[100px]" />
        <div className="absolute top-12 right-1/5 w-[320px] sm:w-[460px] h-[240px] sm:h-[320px] bg-emerald-400/15 rounded-full blur-[100px]" />
        <div className="absolute top-36 left-1/3 w-[360px] sm:w-[500px] h-[260px] sm:h-[320px] bg-blue-600/10 rounded-full blur-[110px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 text-center">
        
        {/* Top Announcement Pill with Brand Green Pulse */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-2xs mb-3 sm:mb-5 animate-float-slow">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a63e]"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide">
            India's Leading Performance Marketing Agency
          </span>
        </div>

        {/* Main H1 Title — Bold Black with Brand Blue & Green Accents */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] sm:leading-[1.08] text-slate-950 break-words">
            <span className="block text-slate-950">
              Optimize Your Ads
            </span>
            <span className="relative inline-block mt-1 sm:mt-2 text-slate-950">
              <span>For More </span>
              <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                Profit.
              </span>
              {/* Royal Blue Brush Underline */}
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#0011a8] overflow-visible pointer-events-none"
                viewBox="0 0 200 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16C50 6 120 20 196 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-brush"
                />
              </svg>
              <span className="absolute -bottom-2 -right-4 sm:-right-6 md:-right-7 text-xs sm:text-sm md:text-base text-[#00a63e] transform -rotate-12 select-none pointer-events-none">
                ✏️
              </span>
            </span>
          </h1>

          {/* Subheading Copy */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal px-2">
            We build and scale high-converting Meta & Google ad funnels that turn daily ad spend into predictable leads, booked appointments, and scalable revenue.
          </p>

          {/* Signature Action Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-7 sm:px-8 py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base shadow-[0_6px_20px_rgba(0,17,168,0.22)] hover:shadow-[0_8px_25px_rgba(0,17,168,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#results"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-[#0011a8] px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base shadow-2xs transition-all cursor-pointer text-center"
            >
              View Client Results
            </a>
          </div>

          {/* Value Assurances Row */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a63e] shrink-0" />
              <span>Direct WhatsApp Access</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0011a8] shrink-0" />
              <span>Full Funnel Tracking</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a63e] shrink-0" />
              <span>Zero Lock-in Contract</span>
            </span>
          </div>
        </div>

        {/* Compact, Full-Width Floating Performance Bar (Sleek, No Giant Cards) */}
        <div className="mt-7 sm:mt-9 max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.06)] p-3.5 sm:p-5 relative overflow-hidden">
          
          <div className="relative z-10 space-y-3 sm:space-y-4">
            
            {/* Top Bar: Live Status & Verification Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5 sm:pb-3 text-left">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00a63e] animate-pulse shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Live Performance Engine
                </span>
                <span className="hidden sm:inline text-xs text-slate-300">|</span>
                <span className="hidden sm:inline text-xs text-slate-600 font-medium">
                  Meta Ads & Google Ads Managed Daily
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold text-[#00a63e] border border-emerald-200">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>3.8x - 8.4x Average ROAS (+340% YoY)</span>
              </div>
            </div>

            {/* 3 Compact Metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="bg-slate-50/90 rounded-xl p-2 sm:p-3 border border-slate-150">
                <div className="text-base sm:text-2xl md:text-3xl font-black text-[#0011a8] font-display">
                  <CounterAnimation end={5} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600 font-semibold mt-0.5">
                  Years Experience
                </div>
              </div>
              <div className="bg-slate-50/90 rounded-xl p-2 sm:p-3 border border-slate-150">
                <div className="text-base sm:text-2xl md:text-3xl font-black text-[#00a63e] font-display">
                  <CounterAnimation end={250} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600 font-semibold mt-0.5">
                  Brands Scaled
                </div>
              </div>
              <div className="bg-slate-50/90 rounded-xl p-2 sm:p-3 border border-slate-150">
                <div className="text-base sm:text-2xl md:text-3xl font-black text-slate-950 font-display whitespace-nowrap">
                  ₹<CounterAnimation end={15} suffix="+ Cr" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600 font-semibold mt-0.5">
                  Ad Spend Managed
                </div>
              </div>
            </div>

            {/* Certified Partners Strip */}
            <div className="pt-1.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Certified Advertising Partners:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
                <div className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0081FB] shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">Meta Partner</span>
                </div>
                <div className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#EA4335] shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">Google Ads</span>
                </div>
                <div className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">WhatsApp API</span>
                </div>
                <div className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0011a8] shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">ISO 9001</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
