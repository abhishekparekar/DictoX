import React from 'react';
import { ArrowRight, Quote, Award, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function AboutFounderSection({ onOpenConsultation }) {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-18 relative w-full overflow-hidden bg-slate-50/50 border-t border-slate-200/80">
      {/* Subtle top ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/35 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Agency Overview Box */}
        <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            ABOUT US
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            We Help Businesses Turn{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Advertising Into Growth.
            </span>
          </h2>

          <div className="mt-4 space-y-2.5 max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            <p>
              DictoX Marketing is a performance marketing agency helping businesses across India acquire potential customers through Meta Ads, Google Ads, WhatsApp and marketing automation.
            </p>
            <p className="text-slate-700 font-medium">
              Our team combines strategy, creative, targeting, technology and continuous optimization to build advertising campaigns focused on generating potential leads and helping businesses grow.
            </p>
          </div>
        </AnimatedSection>

        {/* 2-Column Responsive Layout: Founder Visual Left + Story Right */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-5 sm:p-7 lg:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Founder Visual & Credibility Badge (lg:col-span-5) */}
            <AnimatedSection direction="up" className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[340px]">
                
                {/* Brand Ambient Glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#0011a8]/15 via-emerald-400/20 to-blue-400/15 rounded-3xl blur-xl -z-10" />

                {/* Founder Image Card Container */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-[0_16px_40px_rgba(0,17,168,0.1)] bg-slate-100 aspect-[3.8/4.6] group">
                  <img
                    src="/images/founder1.jpeg"
                    alt="Suresh More - Founder & Performance Marketing Strategist at DictoX Marketing"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/images/founder.jpg';
                    }}
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Founder Visual Bottom Overlay Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-left">
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 font-display leading-tight flex items-center gap-1.5">
                      <span>Suresh More</span>
                      <span className="inline-block w-2 h-2 rounded-full bg-[#00a63e]" />
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#0011a8] font-bold mt-0.5">
                      Founder & Performance Marketing Strategist
                    </p>
                  </div>
                </div>

                {/* Founder Stats Ribbon: 5+ Years | 500+ Brands | ₹10+ Crore */}
                <div className="mt-3.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/90 text-center shadow-2xs">
                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[10.5px] sm:text-xs font-bold text-slate-800">
                    <span className="text-[#0011a8]">5+ Years Exp</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-900">500+ Brands</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[#00a63e]">₹10+ Cr Ad Spend</span>
                  </div>
                </div>

              </div>
            </AnimatedSection>

            {/* Right Column: Meet The Founder Story & Quotes (lg:col-span-7) */}
            <AnimatedSection direction="up" delay={0.1} className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              <div>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0011a8] block mb-1">
                  MEET THE FOUNDER
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                  Suresh More
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5">
                  Founder & Performance Marketing Strategist — DictoX Marketing
                </p>
              </div>

              {/* Founder Opening Quote */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-50/70 border border-blue-100/90 relative">
                <Quote className="w-5 h-5 text-[#0011a8]/40 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-800 font-semibold italic leading-relaxed pr-6">
                  “I started DictoX with a simple goal — help businesses get more from their advertising and build a clear, performance-focused approach to customer acquisition.”
                </p>
              </div>

              {/* Founder Narrative Body */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  With 5+ years of experience in digital advertising, Suresh More leads DictoX with a focus on strategy, campaign management, creative execution and lead-generation systems.
                </p>
                <p>
                  Today, DictoX works with businesses across different industries, helping them use digital advertising to reach potential customers, generate leads and improve their customer acquisition process.
                </p>
              </div>

              {/* Closing Mission Quote */}
              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100/90">
                <p className="text-xs sm:text-sm font-bold text-[#00a63e] leading-snug">
                  “Our goal is simple — help businesses get more from every advertising opportunity.”
                </p>
              </div>

              {/* Action Buttons / CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/about"
                  className="w-full sm:w-auto bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Know More About DictoX</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-[#0011a8] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-2xs transition-all cursor-pointer text-center"
                >
                  Schedule A Call With Suresh
                </button>
              </div>

            </AnimatedSection>

          </div>

        </div>

      </div>
    </section>
  );
}
