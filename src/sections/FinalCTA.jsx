import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-brand-dark">
      {/* Dynamic emerald glow band */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald/15 via-brand-deepEmerald/15 to-brand-emerald/15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-brand-emerald/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-b from-brand-surface to-[#061512] border-2 border-brand-emerald/40 rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-glow-lg relative overflow-hidden">
          {/* Subtle decorative grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-dark border border-brand-border text-brand-emerald text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Take The Next Step</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
              Ready To Get More <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-brand-mint">
                From Your Ads?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Let's Build A Performance Marketing Strategy For Your Business. We will audit your unit economics, evaluate ad accounts, and design a customer acquisition roadmap.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="btn-primary text-sm sm:text-base font-semibold w-full sm:w-auto !py-4 !px-8 shadow-glow-md group"
              >
                <span>Get Free Strategy Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="tel:+917796407424"
                className="btn-secondary text-sm sm:text-base font-medium w-full sm:w-auto !py-4 !px-6 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-brand-emerald" />
                <span>Call Founder Directly</span>
              </a>
            </div>

            {/* Reassurance Labels */}
            <div className="pt-8 border-t border-brand-border/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>Expert Strategic Advice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>100% Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
