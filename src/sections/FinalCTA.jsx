import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="py-10 sm:py-12 bg-[#041214] text-white border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">
          
          {/* Left Text */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-semibold">
              Ready To Get More From Your Ads?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white mt-1">
              Let's Build A Performance Marketing Strategy <br className="hidden sm:inline" />
              <span className="text-[#00f59b]">For Your Business.</span>
            </h2>
          </div>

          {/* Right Action & Checks */}
          <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#00f59b]" /> No Obligation
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#00f59b]" /> Expert Advice
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#00f59b]" /> 100% Free
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
