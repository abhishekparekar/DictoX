import React from 'react';
import { ArrowRight, Check, TrendingUp } from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 bg-[#041412] text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#00f59b]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[380px] bg-[#00d084]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Copy, CTA */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-center lg:text-left">
            
            {/* Eyebrow Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-[13px] font-semibold tracking-wider text-slate-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-pulse" />
              <span>Maharashtra's No.1 Lead Generation Ad Agency</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold font-display tracking-tight text-white leading-[1.08]">
              Optimize Your Ads <br />
              For{' '}
              <span className="text-[#00f59b]">
                More Profit.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A dedicated team of performance marketing specialists helping businesses across India generate better results and acquire more customers through online advertising.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_8px_30px_rgba(0,245,155,0.4)] active:scale-[0.98] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer tracking-wide"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#results"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-slate-200 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5 tracking-wide"
              >
                <span>View Our Results</span>
              </a>
            </div>

            {/* Trust Checks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00f59b] stroke-[3]" />
                <span className="font-medium">No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00f59b] stroke-[3]" />
                <span className="font-medium">Expert Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00f59b] stroke-[3]" />
                <span className="font-medium">100% Free</span>
              </div>
            </div>

          </div>

          {/* Right Column: Founder Suresh More with Analytics Growth Chart and Stats Card */}
          <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[480px]">
              
              {/* Graphic 1: Rising Green Growth Bar Chart (Behind/Above right shoulder) */}
              <div className="absolute -top-6 -right-2 sm:-right-4 z-10 flex flex-col items-end">
                {/* Handwritten Callout */}
                <div className="text-right mb-1 pr-2">
                  <span className="text-xs sm:text-sm font-serif italic text-slate-200 tracking-wide">
                    Turn Ads Into<br />Real Growth
                  </span>
                  <div className="text-[#00f59b] text-base leading-none text-right">⤷</div>
                </div>

                {/* Animated Rising Bars with Curved Arrow */}
                <div className="bg-[#06201b]/90 border border-[#00f59b]/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-xl flex items-end gap-2 relative">
                  <div className="w-3 sm:w-3.5 h-6 bg-[#00f59b]/30 rounded-t-sm" />
                  <div className="w-3 sm:w-3.5 h-10 bg-[#00f59b]/50 rounded-t-sm" />
                  <div className="w-3 sm:w-3.5 h-14 bg-[#00f59b]/70 rounded-t-sm" />
                  <div className="w-3 sm:w-3.5 h-18 bg-[#00f59b]/90 rounded-t-sm" />
                  <div className="w-3 sm:w-3.5 h-22 bg-[#00f59b] rounded-t-sm shadow-[0_0_15px_#00f59b]" />
                  
                  {/* Arrow overlay */}
                  <div className="absolute top-1 right-2 text-[#00f59b]">
                    <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Founder Suresh More Cutout Image */}
              <div className="relative mx-auto max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#08221d] via-[#051714] to-[#041412] shadow-2xl">
                <img
                  src="/images/founder.jpg"
                  alt="Suresh More - Founder & Performance Marketing Strategist"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top"
                />
                
                {/* Vignette blend at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#041412] via-[#041412]/60 to-transparent" />

                {/* Signature text over photo lower left */}
                <div className="absolute bottom-4 left-5 z-20 text-left">
                  <div className="font-serif italic text-lg sm:text-xl text-white font-bold leading-tight drop-shadow-md">
                    Suresh More
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide">
                    Founder & Performance Marketing Strategist
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card (Exact design matching reference mockup) */}
              <div className="mt-4 sm:-mt-6 relative z-20 mx-auto sm:ml-auto sm:mr-0 max-w-[420px] bg-[#08231e]/95 border border-[#00f59b]/40 rounded-2xl p-4 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-md">
                {/* Card Title */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white mb-2.5 pb-2 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#00f59b]" />
                  <span>Helping Businesses Grow With Online Ads</span>
                </div>

                {/* Stats 3 Columns */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-base sm:text-lg font-black text-[#00f59b] font-display">
                      5+
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="border-x border-white/10">
                    <div className="text-base sm:text-lg font-black text-[#00f59b] font-display">
                      500+
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium">
                      Brands Scaled
                    </div>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-[#00f59b] font-display">
                      ₹10+ Crore
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium">
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

