import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-[#031310] text-white border-y border-[#00f59b]/25 relative overflow-hidden">
      {/* Radiant atmospheric emerald glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[850px] h-[250px] pointer-events-none rounded-full blur-[130px] opacity-40"
        style={{
          background: 'radial-gradient(circle, #00f59b 0%, #026d4c 45%, transparent 75%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
          
          {/* Left Column: Eyebrow + 2-Line Heading (Never overlaps) */}
          <div className="lg:col-span-6 xl:col-span-6 text-center lg:text-left space-y-1">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold block">
              READY TO GET MORE FROM YOUR ADS?
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight text-white leading-tight">
              Let's Build A Performance Marketing Strategy <br className="hidden sm:inline" />
              <span className="text-[#00f59b]">
                For Your Business.
              </span>
            </h2>
          </div>

          {/* Right Column: CTA Button + 3 Trust Checkmarks (Adaptive Wrap) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center lg:justify-end gap-3.5 sm:gap-4 xl:gap-5 w-full">
            {/* Primary Action Button */}
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_6px_25px_rgba(0,245,155,0.45)] active:scale-[0.98] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-md tracking-wide whitespace-nowrap shrink-0"
            >
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* 3 Trust Checks in a row */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-300 shrink-0">
              <span className="flex items-center gap-1 font-medium whitespace-nowrap">
                <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3]" />
                <span>No Obligation</span>
              </span>
              <span className="flex items-center gap-1 font-medium whitespace-nowrap">
                <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3]" />
                <span>Expert Advice</span>
              </span>
              <span className="flex items-center gap-1 font-medium whitespace-nowrap">
                <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3]" />
                <span>100% Free</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
