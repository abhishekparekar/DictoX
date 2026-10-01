import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-14 sm:pt-24 md:pt-32 pb-8 sm:pb-16 overflow-hidden w-full">
      
      {/* Brand Ambient Aura Mesh Background (Royal Blue & Growth Green) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[580px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-4 left-1/4 w-[420px] sm:w-[580px] h-[280px] sm:h-[360px] bg-blue-500/15 rounded-full blur-[110px]" />
        <div className="absolute top-12 right-1/4 w-[360px] sm:w-[500px] h-[260px] sm:h-[340px] bg-emerald-400/15 rounded-full blur-[110px]" />
        <div className="absolute top-36 left-1/3 w-[400px] sm:w-[540px] h-[260px] sm:h-[320px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <AnimatedSection direction="up" className="space-y-5 sm:space-y-6 flex flex-col items-center">
          
          {/* Top Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-xs animate-float-slow">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a63e]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide">
              India's Leading Performance Marketing Agency
            </span>
          </div>

          {/* Main H1 Title — Bold Black with Brand Blue & Green Accents */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight leading-[1.1] sm:leading-[1.08] text-slate-950 max-w-4xl">
            <span className="block text-slate-950">
              Optimize Your Ads
            </span>
            <span className="block mt-1 sm:mt-2 text-slate-950">
              <span>For More </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                  Profit.
                </span>
                {/* Royal Blue Brush Underline specifically under Profit */}
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3.5 text-[#0011a8] overflow-visible pointer-events-none"
                  viewBox="0 0 160 20"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 13C35 5 105 17 157 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="animate-brush"
                  />
                </svg>
              </span>
            </span>
          </h1>

          {/* 5+ Years | 500+ Brands | ₹10+ Crore Ad Spend Managed Stat Pill Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-2xs text-xs sm:text-sm font-bold text-slate-800">
            <span className="text-slate-900 font-extrabold">5+ Years</span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-slate-900 font-extrabold">500+ Brands</span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-[#0011a8] font-black">₹10+ Crore Ad Spend Managed</span>
          </div>

          {/* Subheading text */}
          <p className="max-w-2xl sm:max-w-3xl text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            We help businesses generate potential leads, acquire more customers and get more from their advertising budget through Meta Ads, Google Ads and performance marketing.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-7 sm:px-9 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-[0_6px_20px_rgba(0,17,168,0.22)] hover:shadow-[0_8px_25px_rgba(0,17,168,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#results"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-[#0011a8] px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-2xs transition-all cursor-pointer text-center"
            >
              View Our Results
            </a>
          </div>

          {/* Extra High-Trust Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00a63e]" />
              <span>Certified Meta & Google Partner</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0011a8]" />
              <span>100% Data-Driven ROI</span>
            </span>
          </div>

        </AnimatedSection>

      </div>
    </section>
  );
}
