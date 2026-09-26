import React from 'react';
import { ArrowRight, Check, TrendingUp } from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 bg-[#031310] text-white overflow-hidden">
      
      {/* 1. Atmospheric Emerald Background Layers Matching Reference Image */}
      {/* Base Deep Forest Green Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 65% 45%, #052a20 0%, #031411 45%, #020b09 100%)'
        }}
      />

      {/* Radiant Emerald Nebula Glow behind Founder */}
      <div 
        className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[750px] lg:w-[850px] h-[420px] sm:h-[520px] pointer-events-none rounded-full blur-[110px] sm:blur-[130px] opacity-50"
        style={{
          background: 'radial-gradient(circle, #00f59b 0%, #026d4c 45%, transparent 75%)'
        }}
      />

      {/* Secondary Emerald Light Plume behind Growth Chart */}
      <div 
        className="absolute top-1/4 right-[2%] w-[450px] lg:w-[550px] h-[400px] pointer-events-none rounded-full blur-[120px] opacity-35"
        style={{
          background: 'radial-gradient(circle, #10e998 0%, #014732 55%, transparent 75%)'
        }}
      />

      {/* Soft Ambient Left Glow behind Headline */}
      <div 
        className="absolute top-1/3 -left-12 w-[400px] h-[360px] pointer-events-none rounded-full blur-[140px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #00d084 0%, transparent 70%)'
        }}
      />

      {/* Atmospheric Screen Mesh Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/25 via-transparent to-transparent" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Headlines, Copy, CTA (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left z-20">
            
            {/* Eyebrow Tagline */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10.5px] sm:text-[12px] font-semibold tracking-wider text-slate-300 uppercase">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00f59b] animate-pulse shrink-0" />
              <span>Maharashtra's No.1 Lead Generation Ad Agency</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-bold font-display tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
              Optimize Your Ads <br />
              For{' '}
              <span className="text-[#00f59b]">
                More Profit.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A dedicated team of performance marketing specialists helping businesses across India generate better results and acquire more customers through online advertising.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_8px_30px_rgba(0,245,155,0.4)] active:scale-[0.98] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer tracking-wide"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#results"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5 tracking-wide"
              >
                <span>View Our Results</span>
              </a>
            </div>

            {/* Trust Checks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-1 text-[11px] sm:text-xs text-slate-300">
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

          {/* Right Column: Prominent Founder Portrait (Left) & Large Stats Box (Right) */}
          <div className="lg:col-span-7 relative flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-end gap-4 lg:gap-0 mt-6 lg:mt-0">
            
            {/* Prominent Founder Portrait - High Res, Soft Dissolving Edges (Zero Box Border) */}
            <div className="relative z-10 w-[280px] sm:w-[340px] lg:w-[370px] xl:w-[410px] shrink-0">
              
              {/* Graphic for Mobile (Above right shoulder) */}
              <div className="lg:hidden absolute -top-4 -right-1 sm:-top-5 sm:-right-3 z-30 flex flex-col items-end scale-75 sm:scale-90 origin-top-right">
                <div className="text-right mb-0.5 pr-1">
                  <span className="text-[11px] font-serif italic text-slate-200 tracking-wide">
                    Turn Ads Into Real Growth
                  </span>
                  <div className="text-[#00f59b] text-sm leading-none text-right font-bold">⤷</div>
                </div>
                <div className="bg-[#06201b]/95 border border-[#00f59b]/40 rounded-xl p-2.5 backdrop-blur-md shadow-xl flex items-end gap-1.5 relative">
                  <div className="w-2.5 h-5 bg-[#00f59b]/30 rounded-t-sm" />
                  <div className="w-2.5 h-8 bg-[#00f59b]/50 rounded-t-sm" />
                  <div className="w-2.5 h-11 bg-[#00f59b]/70 rounded-t-sm" />
                  <div className="w-2.5 h-14 bg-[#00f59b]/90 rounded-t-sm" />
                  <div className="w-2.5 h-18 bg-[#00f59b] rounded-t-sm shadow-[0_0_15px_#00f59b]" />
                  <div className="absolute top-1 right-1 text-[#00f59b]">
                    <TrendingUp className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Photo with Soft Edge Vignette & Bottom Dissolve - NO Card Box, NO Rectangular Border */}
              <div className="relative overflow-visible">
                <img
                  src="/images/founder.jpg"
                  alt="Suresh More - Founder & Performance Marketing Strategist"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[500px] xl:h-[550px] object-cover object-top drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), radial-gradient(ellipse 90% 80% at 50% 45%, black 60%, transparent 95%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%), radial-gradient(ellipse 90% 80% at 50% 45%, black 60%, transparent 95%)'
                  }}
                />

                {/* Bottom Dissolve into Dark Background */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#031310] via-[#031310]/80 to-transparent pointer-events-none" />

                {/* Signature text placed on the left side of chest */}
                <div className="absolute bottom-6 left-3 sm:bottom-8 sm:left-4 z-20 text-left pointer-events-none">
                  <div className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-tight drop-shadow-xl">
                    Suresh More
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide mt-0.5 drop-shadow-md">
                    Founder &amp; Performance Marketing Strategist
                  </div>
                </div>
              </div>

            </div>

            {/* Right-Side Box: Growth Chart (Top) & Stats Box (Bottom) strictly to the right */}
            <div className="w-full max-w-[340px] sm:max-w-[400px] lg:w-[320px] xl:w-[350px] flex flex-col justify-between z-20 lg:-ml-10 xl:-ml-6 lg:mb-6 lg:self-end space-y-4 lg:space-y-6">
              
              {/* Graphic for Desktop (Top Right) */}
              <div className="hidden lg:flex flex-col items-end self-end mr-1">
                {/* Handwritten Callout */}
                <div className="text-right mb-1.5 pr-1">
                  <span className="text-xs sm:text-sm font-serif italic text-slate-200 tracking-wide">
                    Turn Ads Into<br />Real Growth
                  </span>
                  <div className="text-[#00f59b] text-lg leading-none text-right font-bold">⤷</div>
                </div>

                {/* Animated Rising Bars with Curved Arrow */}
                <div className="bg-[#06201b]/95 border border-[#00f59b]/40 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-2xl flex items-end gap-2 relative">
                  <div className="w-3.5 h-6 bg-[#00f59b]/30 rounded-t-sm" />
                  <div className="w-3.5 h-10 bg-[#00f59b]/50 rounded-t-sm" />
                  <div className="w-3.5 h-15 bg-[#00f59b]/70 rounded-t-sm" />
                  <div className="w-3.5 h-20 bg-[#00f59b]/90 rounded-t-sm" />
                  <div className="w-3.5 h-26 bg-[#00f59b] rounded-t-sm shadow-[0_0_20px_#00f59b]" />
                  
                  {/* Arrow overlay */}
                  <div className="absolute top-2 right-2 text-[#00f59b]">
                    <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Stats Box (Spacious, prominent, strictly to the RIGHT of the man) */}
              <div className="w-full bg-[#08231e]/95 border border-[#00f59b]/40 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
                {/* Card Title */}
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white mb-3 pb-2.5 border-b border-white/10">
                  <div className="w-6 h-6 rounded-md bg-[#00f59b]/20 border border-[#00f59b]/30 flex items-center justify-center text-[#00f59b] shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-display">Helping Businesses Grow With Online Ads</span>
                </div>

                {/* Stats 3 Columns in a Row */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-base sm:text-xl font-black text-[#00f59b] font-display">
                      5+
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight mt-0.5">
                      Years Experience
                    </div>
                  </div>
                  <div className="border-x border-white/10 px-1">
                    <div className="text-base sm:text-xl font-black text-[#00f59b] font-display">
                      500+
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight mt-0.5">
                      Brands Scaled
                    </div>
                  </div>
                  <div>
                    <div className="text-base sm:text-xl font-black text-[#00f59b] font-display">
                      ₹10+ Cr
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-300 font-medium leading-tight mt-0.5">
                      Ad Spend Managed
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


