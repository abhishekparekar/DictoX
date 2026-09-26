import React from 'react';
import { ArrowRight, Check, Award, Users, IndianRupee } from 'lucide-react';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section id="home" className="relative pt-24 pb-14 md:pt-28 md:pb-16 bg-gradient-to-b from-[#041012] via-[#061518] to-[#020a0c] text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#00f59b]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[400px] h-[300px] bg-[#00d084]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Headlines, Copy, CTA */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] animate-pulse" />
              <span>Maharashtra's No.1 Lead Generation Ad Agency</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-display tracking-tight text-white leading-[1.12]">
              Optimize Your Ads <br />
              For{' '}
              <span className="text-[#00f59b]">
                More Profit.
              </span>
            </h1>

            {/* Verifiable Track Record Sub-badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-3.5 py-1.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/25 text-xs font-semibold text-[#00f59b]">
              <span>5+ Years Experience</span>
              <span className="text-white/30">•</span>
              <span>500+ Brands</span>
              <span className="text-white/30">•</span>
              <span>₹10+ Crore Ad Spend Managed</span>
            </div>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A dedicated team of performance marketing specialists helping businesses across India generate better results and acquire more customers through online advertising.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#results"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-slate-200 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/25 transition-all duration-200"
              >
                <span>View Our Results</span>
              </a>
            </div>

            {/* Trust Checks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#00f59b]/20 flex items-center justify-center text-[#00f59b]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#00f59b]/20 flex items-center justify-center text-[#00f59b]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Expert Advice</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#00f59b]/20 flex items-center justify-center text-[#00f59b]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>100% Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Suresh More with handwritten Growth Arrow and Badge */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Handwritten Floating Arrow Note */}
              <div className="absolute -top-3 -right-2 sm:-right-6 z-20 flex items-center gap-2 text-right">
                <div className="flex flex-col items-end">
                  <span className="font-handwriting text-xl sm:text-2xl text-[#00f59b] font-bold leading-none rotate-6">
                    Turn Ads Into<br />Real Growth
                  </span>
                </div>
                <svg className="w-10 h-10 text-[#00f59b] animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </div>

              {/* Main Photo Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-[#0a2327] to-[#041012]">
                <img
                  src="/images/founder.jpg"
                  alt="Suresh More - Founder & Performance Marketing Strategist"
                  className="w-full h-[360px] sm:h-[400px] object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                
                {/* Gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020a0c] via-[#020a0c]/80 to-transparent" />
                
                {/* Floating Founder Name */}
                <div className="absolute bottom-16 left-4 right-4 z-10">
                  <div className="text-white font-display font-bold text-lg sm:text-xl leading-tight">
                    Suresh More
                  </div>
                  <div className="text-[#00f59b] text-xs font-medium">
                    Founder & Performance Marketing Strategist
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card: Helping Businesses Grow with Online Ads */}
              <div className="absolute -bottom-6 inset-x-2 sm:-inset-x-2 bg-[#06181b]/95 border border-[#00f59b]/30 rounded-xl p-3 shadow-xl backdrop-blur-md z-20">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[11px] text-slate-300 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00f59b]" />
                    Helping Businesses Grow With Online Ads
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-2 text-white">
                  <div>
                    <div className="text-xs sm:text-sm font-bold font-display text-[#00f59b]">5+</div>
                    <div className="text-[9px] text-slate-400">Years Experience</div>
                  </div>
                  <div className="border-x border-white/10">
                    <div className="text-xs sm:text-sm font-bold font-display text-[#00f59b]">500+</div>
                    <div className="text-[9px] text-slate-400">Brands Scaled</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold font-display text-[#00f59b]">₹10+ Cr</div>
                    <div className="text-[9px] text-slate-400">Ad Spend Managed</div>
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
