import React from 'react';
import { ArrowRight, Check, TrendingUp } from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-20 pb-4 sm:pt-24 sm:pb-6 lg:pt-24 lg:pb-0 bg-[#031310] text-white overflow-hidden">
      
      {/* 1. Atmospheric Emerald Background Layers */}
      {/* Base Deep Forest Green Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 65% 45%, #052a20 0%, #031411 45%, #020b09 100%)'
        }}
      />

      {/* Radiant Emerald Nebula Glow behind Founder */}
      <div 
        className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] lg:w-[750px] h-[350px] sm:h-[450px] pointer-events-none rounded-full blur-[100px] sm:blur-[120px] opacity-45 animate-ambient-pulse"
        style={{
          background: 'radial-gradient(circle, #00f59b 0%, #026d4c 45%, transparent 75%)'
        }}
      />

      {/* Secondary Emerald Light Plume behind Growth Chart */}
      <div 
        className="absolute top-1/4 right-[2%] w-[380px] lg:w-[480px] h-[340px] pointer-events-none rounded-full blur-[110px] opacity-30 animate-pulse"
        style={{
          background: 'radial-gradient(circle, #10e998 0%, #014732 55%, transparent 75%)'
        }}
      />

      {/* Soft Ambient Left Glow behind Headline */}
      <div 
        className="absolute top-1/3 -left-12 w-[350px] h-[300px] pointer-events-none rounded-full blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #00d084 0%, transparent 70%)'
        }}
      />

      {/* Atmospheric Screen Mesh Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/25 via-transparent to-transparent" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* Left Column: Headlines, Copy, CTA (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4 lg:space-y-5 text-center lg:text-left z-20 pt-2 sm:pt-4 lg:pt-0">
            
            {/* Eyebrow Tagline */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11.5px] font-semibold tracking-wider text-slate-300 uppercase">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00f59b] animate-pulse shrink-0" />
              <span>Maharashtra's No.1 Lead Generation Ad Agency</span>
            </div>

            {/* Main H1 Title with Adymize-Style Gradient & Animated SVG Brush Underline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-bold font-display tracking-tight text-white leading-[1.12] sm:leading-[1.08]">
              Optimize Your Ads <br />
              For{' '}
              <span className="relative inline-block mt-1">
                <span className="bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#25f4a7] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,245,155,0.3)]">
                  More Profit.
                </span>
                {/* Adymize Signature Hand-Drawn Animated SVG Brush Underline */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#00f59b] overflow-visible pointer-events-none"
                  viewBox="0 0 160 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 14C35 4 80 18 157 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-draw-brush"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A dedicated team of performance marketing specialists helping businesses across India generate better results and acquire more customers through online advertising.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <button
                onClick={onOpenConsultation}
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] shadow-[0_4px_20px_rgba(0,245,155,0.4)] hover:shadow-[0_6px_30px_rgba(0,245,155,0.6)] active:scale-[0.98] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer tracking-wide"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#results"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 active:scale-[0.98] transition-all duration-200 hover:-translate-y-0.5 tracking-wide text-center"
              >
                <span>View Our Results</span>
              </a>
            </div>

            {/* Trust Checks */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5 pt-0.5 text-[10.5px] sm:text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3]" />
                <span className="font-medium">No Obligation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3]" />
                <span className="font-medium">Expert Advice</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3]" />
                <span className="font-medium">100% Free</span>
              </div>
            </div>

          </div>

          {/* Right Column: Founder Portrait (Left) & Growth Elements (Right) */}
          <div className="lg:col-span-7 relative flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-end mt-4 lg:mt-0">
            
            {/* Prominent Founder Portrait */}
            <div className="relative z-10 w-[240px] sm:w-[300px] lg:w-[340px] xl:w-[380px] shrink-0">
              
              {/* Photo with Soft Edge Vignette & Bottom Dissolve */}
              <div className="relative overflow-visible">
                <img
                  src="/images/founder.jpg"
                  alt="Suresh More - Founder & Performance Marketing Strategist"
                  className="w-full h-[300px] sm:h-[380px] lg:h-[450px] xl:h-[490px] object-cover object-top drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%), radial-gradient(ellipse 90% 82% at 50% 45%, black 60%, transparent 95%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%), radial-gradient(ellipse 90% 82% at 50% 45%, black 60%, transparent 95%)'
                  }}
                />

                {/* Bottom Dissolve into background */}
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#031310] via-[#031310]/80 to-transparent pointer-events-none" />

                {/* Signature text placed on the left side of chest */}
                <div className="absolute bottom-4 left-2 sm:bottom-6 sm:left-3 z-20 text-left pointer-events-none">
                  <div className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight drop-shadow-xl">
                    Suresh More
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-medium tracking-wide drop-shadow-md">
                    Founder &amp; Performance Marketing Strategist
                  </div>
                </div>
              </div>

            </div>

            {/* Right-Side Box: Growth Chart (Top) & Stats Card (Bottom) */}
            <div className="w-full max-w-[320px] sm:max-w-[360px] lg:w-[280px] xl:w-[320px] flex flex-col justify-between z-20 lg:-ml-10 xl:-ml-6 lg:mb-5 lg:self-end space-y-3 sm:space-y-4 mt-2 lg:mt-0">
              
              {/* Graphic: Turn Ads Into Real Growth (Visible on Desktop & Tablet) */}
              <div className="hidden sm:flex flex-col items-end self-end mr-1">
                {/* Handwritten Callout */}
                <div className="text-right mb-1 pr-1">
                  <span className="font-handwriting text-base sm:text-lg text-slate-200 tracking-wide">
                    Turn Ads Into Real Growth
                  </span>
                  <div className="text-[#00f59b] text-base leading-none text-right font-bold">⤷</div>
                </div>

                {/* Rising Growth Bars with Curved Arrow */}
                <div className="bg-[#051c17]/95 border border-[#00f59b]/40 rounded-xl p-2.5 sm:p-3 backdrop-blur-md shadow-xl flex items-end gap-1.5 sm:gap-2 relative">
                  <div className="w-2.5 sm:w-3 h-5 bg-[#00f59b]/30 rounded-t-xs" />
                  <div className="w-2.5 sm:w-3 h-8 bg-[#00f59b]/50 rounded-t-xs" />
                  <div className="w-2.5 sm:w-3 h-12 bg-[#00f59b]/70 rounded-t-xs" />
                  <div className="w-2.5 sm:w-3 h-16 bg-[#00f59b]/90 rounded-t-xs" />
                  <div className="w-2.5 sm:w-3 h-20 bg-[#00f59b] rounded-t-xs shadow-[0_0_15px_#00f59b]" />
                  
                  {/* Arrow overlay */}
                  <div className="absolute top-1.5 right-1.5 text-[#00f59b]">
                    <TrendingUp className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Stats Card (Sleek, compact, matching reference image) */}
              <div className="w-full bg-[#061e18]/95 border border-[#00f59b]/35 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-md">
                {/* Card Title */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-white mb-2.5 pb-2 border-b border-white/10">
                  <div className="w-5 h-5 rounded-md bg-[#00f59b]/20 border border-[#00f59b]/30 flex items-center justify-center text-[#00f59b] shrink-0">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                  <span className="font-display truncate">Helping Businesses Grow With Online Ads</span>
                </div>

                {/* Stats 3 Columns in a Row */}
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div>
                    <div className="text-sm sm:text-lg font-black text-[#00f59b] font-display">
                      5+
                    </div>
                    <div className="text-[9.5px] sm:text-[11px] text-slate-300 font-medium leading-tight mt-0.5">
                      Years Exp.
                    </div>
                  </div>
                  <div className="border-x border-white/10 px-0.5">
                    <div className="text-sm sm:text-lg font-black text-[#00f59b] font-display">
                      500+
                    </div>
                    <div className="text-[9.5px] sm:text-[11px] text-slate-300 font-medium leading-tight mt-0.5">
                      Brands
                    </div>
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg font-black text-[#00f59b] font-display">
                      ₹10+ Cr
                    </div>
                    <div className="text-[9.5px] sm:text-[11px] text-slate-300 font-medium leading-tight mt-0.5 truncate">
                      Ad Spend
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
