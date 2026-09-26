import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#041214] text-white border-y border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00f59b]/10 rounded-none blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-center lg:text-left">
          
          {/* Left Text */}
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#00f59b] font-bold">
              Ready To Get More From Your Ads?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              Let's Build A Performance Marketing Strategy <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f59b] to-[#00d084]">
                For Your Business.
              </span>
            </h2>
          </div>

          {/* Right Action & Checks */}
          <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-none text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#00f59b]/30 hover:-translate-y-1 cursor-pointer uppercase tracking-wider"
            >
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-[#00f59b] stroke-[3]" /> No Obligation
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-[#00f59b] stroke-[3]" /> Expert Advice
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-[#00f59b] stroke-[3]" /> 100% Free
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
