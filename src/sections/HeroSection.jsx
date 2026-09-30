import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-16 sm:pt-20 md:pt-26 pb-5 sm:pb-8 overflow-hidden w-full">
      
      {/* Brand Ambient Aura Mesh Background (Royal Blue & Growth Green) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[520px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-4 left-1/5 w-[380px] sm:w-[520px] h-[260px] sm:h-[340px] bg-blue-400/15 rounded-full blur-[100px]" />
        <div className="absolute top-12 right-1/5 w-[320px] sm:w-[460px] h-[240px] sm:h-[320px] bg-emerald-400/15 rounded-full blur-[100px]" />
        <div className="absolute top-36 left-1/3 w-[360px] sm:w-[500px] h-[260px] sm:h-[320px] bg-blue-600/10 rounded-full blur-[110px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* 2-Column Responsive Layout: Text Left, Founder Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Heading, Subheading, CTAs & Value Assurances */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-3 sm:space-y-4">
            
            {/* Top Announcement Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-blue-100 shadow-2xs animate-float-slow">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a63e]"></span>
              </span>
              <span className="text-[10.5px] sm:text-xs font-bold text-slate-800 tracking-wide">
                India's Leading Performance Marketing Agency
              </span>
            </div>

            {/* Main H1 Title — Bold Black with Brand Blue & Green Accents */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black tracking-tight leading-[1.12] sm:leading-[1.08] text-slate-950 break-words">
              <span className="block text-slate-950">
                Optimize Your Ads
              </span>
              <span className="relative inline-block mt-0.5 sm:mt-2 text-slate-950">
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
            <p className="text-xs sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A dedicated team of performance marketing specialists helping businesses across India generate better results and acquire more customers through online advertising.
            </p>

            {/* Signature Action Buttons */}
            <div className="pt-0.5 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 max-w-md sm:max-w-none mx-auto lg:mx-0">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base shadow-[0_6px_20px_rgba(0,17,168,0.22)] hover:shadow-[0_8px_25px_rgba(0,17,168,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#results"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-[#0011a8] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base shadow-2xs transition-all cursor-pointer text-center"
              >
                View Client Results
              </a>
            </div>

            {/* Value Assurances Row */}
            <div className="pt-0.5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-6 text-[10.5px] sm:text-xs text-slate-600 font-medium">
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

          {/* Right Column: Founder Suresh More Image & Growth Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-2 lg:pt-0">
            <div className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[420px]">
              
              {/* Subtle decorative brand aura behind founder */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0011a8]/15 via-emerald-400/20 to-blue-400/15 rounded-3xl blur-2xl -z-10" />

              {/* Founder Image Card Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-[0_16px_40px_rgba(0,17,168,0.1)] bg-slate-100 aspect-[3.8/4.8] sm:aspect-[3.8/4.6] group">
                <img
                  src="/images/founder1.jpeg"
                  alt="Suresh More - Founder & Performance Marketing Strategist at DictoX Marketing"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Subtle dark gradient overlay at bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />

                {/* Founder Info Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-left">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-950 font-display leading-tight flex items-center gap-1.5">
                        <span>Suresh More</span>
                        <span className="inline-block w-2 h-2 rounded-full bg-[#00a63e]" title="Active Strategist" />
                      </h3>
                      <p className="text-[10.5px] sm:text-xs text-[#0011a8] font-semibold mt-0.5">
                        Founder & Performance Marketing Strategist
                      </p>
                    </div>
                    <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                      5+ Yrs Exp
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Growth Badge: "Turn Ads Into Real Growth ↗" */}
              <div className="absolute -top-3 -right-2 sm:-top-3.5 sm:-right-3 bg-white/95 backdrop-blur-md py-1.5 px-3 sm:py-2 sm:px-3.5 rounded-2xl border border-slate-200/80 shadow-[0_8px_25px_rgba(0,17,168,0.12)] flex items-center gap-2 animate-float-slow z-20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-xs shrink-0">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-900 leading-tight">
                    Turn Ads Into
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#00a63e] leading-tight">
                    Real Growth ↗
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
