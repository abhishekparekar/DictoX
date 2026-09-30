import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="py-4 sm:py-7 md:py-9 relative w-full overflow-hidden">
      {/* Subtle top aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/30 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Compact Floating White Card */}
        <AnimatedSection direction="up" className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-4 sm:p-6 lg:p-8 relative overflow-hidden text-center">
          
          {/* Soft Center Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-gradient-to-r from-blue-300/10 to-emerald-300/10 rounded-full blur-[70px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-2.5 sm:space-y-3.5">
            <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0011a8] block mb-1">
              READY TO GET MORE FROM YOUR ADS?
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
              Let's Build A High-ROAS Growth Strategy <br />
              <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                For Your Business.
              </span>
            </h2>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-7 sm:px-8 py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a63e] shrink-0" />
                <span>Zero Obligation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0011a8] shrink-0" />
                <span>Direct Expert Feedback</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a63e] shrink-0" />
                <span>100% Free Strategy Session</span>
              </span>
            </div>

          </div>

        </AnimatedSection>

      </div>
    </section>
  );
}
