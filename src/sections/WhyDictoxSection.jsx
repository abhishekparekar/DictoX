import React from 'react';
import { comparisonData } from '../data/comparison';
import { X, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function WhyDictoxSection({ onOpenConsultation }) {
  return (
    <section className="py-20 md:py-28 bg-[#091a16] border-y border-brand-border/70 relative">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-emerald/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-mono uppercase tracking-wider text-brand-emerald">
            <Zap className="w-3.5 h-3.5" />
            <span>The DictoX Differentiator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            A Different Approach To Your Advertising
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Most agencies operate as ad launchers. DictoX operates as an aligned customer acquisition partner focused strictly on business profitability.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Card: Typical Agency Approach */}
            <div className="bg-brand-dark/90 border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between opacity-85">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 font-semibold">
                      Status Quo
                    </span>
                    <h3 className="text-xl font-bold font-display text-zinc-300 mt-1">
                      Typical Agency Approach
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                    <X className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {comparisonData.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400">
                      <div className="w-5 h-5 rounded-full bg-red-950/60 border border-red-900/60 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{item.typical}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800 text-xs text-zinc-500 font-mono">
                Result: High ad spend with low customer accountability.
              </div>
            </div>

            {/* Right Card: DICTOX Approach (Featured Emerald Card) */}
            <div className="bg-brand-surface border-2 border-brand-emerald/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-glow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-brand-emerald/15 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-5 border-b border-brand-border">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-brand-emerald font-semibold">
                      Performance Partner
                    </span>
                    <h3 className="text-xl font-bold font-display text-white mt-1 flex items-center gap-2">
                      <span>DICTOX Approach</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-emerald text-brand-dark font-bold">
                        RECOMMENDED
                      </span>
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-emerald/20 border border-brand-emerald text-brand-emerald flex items-center justify-center shadow-glow-sm">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {comparisonData.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white">
                      <div className="w-5 h-5 rounded-full bg-brand-emerald/20 border border-brand-emerald text-brand-emerald flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="leading-relaxed font-medium">{item.dictox}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-emerald font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Continuous Optimization & Measurable ROI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner Statement */}
        <div className="mt-14 max-w-3xl mx-auto text-center space-y-4 p-8 rounded-2xl bg-brand-dark/70 border border-brand-border">
          <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
            Your Ad Budget Should Work For Your Business.
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto">
            Experience the difference of customer-centric performance marketing tailored to Indian consumer behavior.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="btn-primary text-xs sm:text-sm font-semibold !py-3 !px-7 shadow-glow-sm"
            >
              <span>Switch To The DictoX Standard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
