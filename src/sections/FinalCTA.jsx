import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="py-10 sm:py-14 md:py-18 relative w-full overflow-hidden bg-slate-50/50 border-t border-slate-200/80">
      {/* Brand Dual Ambient Glow in Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] bg-emerald-400/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Floating Card */}
        <AnimatedSection direction="up" className="bg-gradient-to-b from-white via-white to-slate-50/80 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_12px_40px_rgba(0,17,168,0.06)] p-6 sm:p-10 lg:p-12 relative overflow-hidden text-center">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-5">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#00a63e]" />
              <span>READY TO GET MORE FROM YOUR ADS?</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
              Let's Build A Performance Marketing Strategy{' '}
              <span className="block mt-1 sm:mt-1.5 bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                For Your Business.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
              Stop guessing with generic agency retainers. Get a custom, data-backed customer acquisition roadmap tailored to your profit margins.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm md:text-base shadow-[0_8px_25px_rgba(0,17,168,0.22)] hover:shadow-[0_10px_30px_rgba(0,17,168,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 3 Trust Signals */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5 sm:gap-7 text-xs text-slate-600 font-semibold border-t border-slate-100/90 max-w-xl mx-auto">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00a63e] shrink-0" />
                <span>Zero Obligation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0011a8] shrink-0" />
                <span>Direct Expert Feedback</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00a63e] shrink-0" />
                <span>100% Free Strategy Session</span>
              </span>
            </div>

          </div>

        </AnimatedSection>

      </div>
    </section>
  );
}
