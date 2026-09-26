import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#041012] via-[#06171b] to-[#020a0c] text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[450px] bg-[#00f59b]/12 rounded-none blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[380px] bg-[#00d084]/10 rounded-none blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Copy, CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            
            {/* Eyebrow Tagline */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-none bg-white/5 border border-white/15 text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase shadow-inner">
              <span className="w-2 h-2 rounded-none bg-[#00f59b] animate-pulse" />
              <span>Maharashtra's No.1 Lead Generation Ad Agency</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold font-display tracking-tight text-white leading-[1.08]">
              Optimize Your Ads <br />
              For{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f59b] via-[#15f8a3] to-[#00d084]">
                More Profit.
              </span>
            </h1>

            {/* Verifiable Track Record Sub-badge: Sharp Rectangle */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 px-4 py-2 rounded-none bg-[#00f59b]/10 border border-[#00f59b]/30 text-xs sm:text-sm font-bold text-[#00f59b] shadow-sm">
              <span>5+ Years Experience</span>
              <span className="text-white/40">•</span>
              <span>500+ Brands</span>
              <span className="text-white/40">•</span>
              <span>₹10+ Crore Ad Spend Managed</span>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A dedicated team of performance marketing specialists helping businesses across India generate better results and acquire more customers through online advertising.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_8px_30px_rgba(0,245,155,0.4)] active:scale-[0.98] transition-all duration-300 hover:-translate-y-1 cursor-pointer tracking-wide"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#results"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5 tracking-wide"
              >
                <span>View Our Results</span>
              </a>
            </div>

            {/* Trust Checks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00f59b]/20 flex items-center justify-center text-[#00f59b]">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00f59b]/20 flex items-center justify-center text-[#00f59b]">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">Expert Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#00f59b]/20 flex items-center justify-center text-[#00f59b]">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">100% Free</span>
              </div>
            </div>

          </div>

          {/* Right Column: Founder Suresh More Showcase */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] md:max-w-[460px]">
              
              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl bg-gradient-to-b from-[#0a2327] to-[#041012]">
                <img
                  src="/images/founder.jpg"
                  alt="Suresh More - Founder & Performance Marketing Strategist"
                  className="w-full h-[400px] sm:h-[460px] md:h-[480px] object-cover object-top hover:scale-102 transition-transform duration-500 rounded-3xl"
                />
                
                {/* Subtle gradient vignette at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020a0c]/90 via-[#020a0c]/40 to-transparent" />
              </div>

              {/* Floating Bottom Card: Dedicated Founder & Strategist Badge */}
              <div className="absolute -bottom-7 inset-x-2 sm:-inset-x-3 bg-gradient-to-r from-[#061a1d] via-[#09262b] to-[#05171a] border-2 border-[#00f59b] rounded-2xl p-4 sm:p-4.5 shadow-[0_12px_40px_rgba(0,245,155,0.3)] backdrop-blur-md z-20 flex items-center justify-between gap-3">
                <div>
                  <div className="text-white font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight leading-tight">
                    Suresh More
                  </div>
                  <div className="text-[#00f59b] text-xs sm:text-sm font-bold tracking-wide mt-1">
                    Founder & Performance Marketing Strategist
                  </div>
                </div>

                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#00f59b] to-[#00d084] flex items-center justify-center text-slate-950 shadow-md shrink-0">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
