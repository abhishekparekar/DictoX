import React from 'react';
import { ArrowRight, Check, X, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function WhyDictoxSection({ onOpenConsultation }) {
  const comparisonRows = [
    {
      feature: 'Primary Focus',
      traditional: 'Focus on clicks, reach & impressions',
      dictox: 'Focus on potential leads & customers',
    },
    {
      feature: 'Campaign Management',
      traditional: 'Campaigns are launched and monitored',
      dictox: 'Campaigns are continuously monitored & optimized',
    },
    {
      feature: 'Strategy',
      traditional: 'Generic advertising approach',
      dictox: 'Strategy built around your business',
    },
    {
      feature: 'Performance Tracking',
      traditional: 'Basic campaign reporting',
      dictox: 'Clear tracking of spend, leads & results',
    },
    {
      feature: 'Lead Follow-Up',
      traditional: 'Leads and follow-up handled separately',
      dictox: 'WhatsApp integration for faster follow-up',
    },
    {
      feature: 'Budget Optimization',
      traditional: 'Campaigns continue as they are',
      dictox: 'What works is improved and scaled',
    },
  ];

  return (
    <section id="why-dictox" className="relative py-10 sm:py-14 md:py-18 w-full overflow-hidden bg-slate-50/50 border-t border-slate-200/80">
      {/* Subtle top ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/35 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header & Subheading */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            WHY DICTOX?
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            A Clear Difference In How We{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Acquire Customers.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-black font-medium max-w-2xl mx-auto leading-relaxed">
            We focus on what matters to your business — potential customers, better advertising and continuous improvement.
          </p>
        </AnimatedSection>

        {/* Comparison Container */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] overflow-hidden">
          
          {/* Responsive Table Container (Unified across Mobile, Tablet, Laptop, and PC) */}
          <div className="overflow-x-auto w-full">
            {/* Mobile swipe indicator banner */}
            <div className="md:hidden flex items-center justify-between px-4 py-2 bg-slate-100/90 border-b border-slate-200 text-[11px] text-black font-medium">
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <Sparkles className="w-3.5 h-3.5 text-[#00a63e]" />
                Comparison Table
              </span>
              <span className="text-[#0011a8] font-bold flex items-center gap-1 animate-pulse text-[10.5px]">
                Swipe to compare <span>→</span>
              </span>
            </div>

            <table className="w-full text-left border-collapse min-w-[540px] md:min-w-full">
              
              {/* Table Header */}
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/90">
                  <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-[11px] sm:text-xs md:text-sm font-bold text-black uppercase tracking-wider w-[24%]">
                    Dimension
                  </th>
                  <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-[11px] sm:text-xs md:text-sm font-bold text-black uppercase tracking-wider w-[38%]">
                    Traditional Approach
                  </th>
                  <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-[11px] sm:text-xs md:text-sm font-black text-[#0011a8] uppercase tracking-wider bg-blue-50/70 border-l border-r border-blue-200/80 w-[38%]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a63e]" />
                        <span>DICTOX Approach</span>
                      </span>
                      <span className="text-[9px] sm:text-[10px] bg-[#00a63e] text-white font-bold px-2 sm:px-2.5 py-0.5 rounded-full shadow-2xs whitespace-nowrap">
                        Proven Result
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-150">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors group"
                  >
                    {/* Feature / Dimension Label */}
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0011a8] transition-colors whitespace-nowrap sm:whitespace-normal">
                      {row.feature}
                    </td>

                    {/* Traditional Approach (Muted/Cross) */}
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-black leading-relaxed">
                      <div className="flex items-start gap-2 sm:gap-2.5">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug sm:leading-relaxed">{row.traditional}</span>
                      </div>
                    </td>

                    {/* DICTOX Approach (Highlighted / Check) */}
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-black leading-relaxed bg-blue-50/25 group-hover:bg-blue-50/45 border-l border-r border-blue-200/80 transition-colors">
                      <div className="flex items-start gap-2 sm:gap-2.5">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-100 text-[#00a63e] border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
                        </div>
                        <span className="text-slate-950 font-bold leading-snug sm:leading-relaxed">{row.dictox}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Bottom CTA Strip */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-blue-50/40 to-emerald-50/30 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-xs sm:text-sm md:text-base font-bold text-slate-950 leading-tight">
                Want Your Advertising To Work Better For Your Business?
              </h4>
            </div>
            <button
              onClick={onOpenConsultation}
              className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto group"
            >
              <span>Get A Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
