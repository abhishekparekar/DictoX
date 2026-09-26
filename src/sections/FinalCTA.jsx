import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-[#051714] text-white border-y border-[#00f59b]/25 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00f59b]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">
          
          {/* Left Text */}
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#00f59b] font-bold">
              READY TO GET MORE FROM YOUR ADS?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white leading-tight">
              Let's Build A Performance Marketing Strategy <br className="hidden sm:inline" />
              <span className="text-[#00f59b]">
                For Your Business.
              </span>
            </h2>
          </div>

          {/* Right Action & Checks */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_6px_25px_rgba(0,245,155,0.4)] transition-all duration-300 cursor-pointer shadow-md"
            >
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3]" /> No Obligation
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3]" /> Expert Advice
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-[#00f59b] stroke-[3]" /> 100% Free
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

