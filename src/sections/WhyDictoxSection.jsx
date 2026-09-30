import React from 'react';
import { ArrowRight, Check, X, Sparkles, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function WhyDictoxSection({ onOpenConsultation }) {
  const comparisonRows = [
    {
      feature: 'Core Objective',
      typical: 'Focus on clicks, impressions & vanity reach',
      dictox: 'Focus on net-new paying customers & revenue',
    },
    {
      feature: 'Campaign Execution',
      typical: 'Launched once and left running on autopilot',
      dictox: 'Continuous creative testing & weekly iteration',
    },
    {
      feature: 'Strategy & Funnels',
      typical: 'Generic, copy-paste cookie-cutter templates',
      dictox: 'Custom funnels tailored to your unit economics',
    },
    {
      feature: 'Data Transparency',
      typical: 'Vague monthly reports leaving you guessing',
      dictox: 'Live real-time dashboard of spend, CPL & ROI',
    },
    {
      feature: 'Speed to Lead',
      typical: 'Leads sit untouched for hours or days',
      dictox: 'Instant WhatsApp API & CRM connect in < 60s',
    },
    {
      feature: 'Budget Optimization',
      typical: 'Ad spend wasted equally on non-performing ads',
      dictox: 'Losing ads cut swiftly; winning ads scaled fast',
    },
  ];

  return (
    <section id="why-dictox" className="relative py-4 sm:py-7 md:py-9 w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-3.5 sm:mb-5">
          <span className="inline-block text-[10.5px] sm:text-xs font-bold tracking-widest text-[#0011a8] uppercase mb-0.5">
            Why DictoX Marketing?
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-slate-950 leading-tight">
            A Clear Difference in{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              How We Acquire Customers.
            </span>
          </h2>

          <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 mt-1 max-w-xl mx-auto leading-relaxed font-medium">
            Your advertising budget shouldn't be an expense — it should be an engine that brings predictable revenue back into your business.
          </p>
        </AnimatedSection>

        {/* Comparison Container */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] overflow-hidden">
          
          {/* Mobile Cards View (md:hidden) — No awkward horizontal scroll */}
          <div className="block md:hidden p-3 space-y-2.5">
            {comparisonRows.slice(0, 4).map((row, idx) => (
              <div key={idx} className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/90 space-y-2">
                <div className="text-xs font-bold text-slate-950 flex items-center justify-between">
                  <span>{row.feature}</span>
                  <span className="text-[10px] text-[#00a63e] font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    DictoX Edge
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-lg bg-red-50/70 border border-red-100 text-slate-700">
                    <span className="block font-bold text-[9.5px] text-red-600 uppercase mb-0.5">Other Agencies</span>
                    <span className="line-clamp-2 leading-tight">{row.typical}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50/80 border border-emerald-200 text-slate-950 font-semibold">
                    <span className="block font-bold text-[9.5px] text-[#00a63e] uppercase mb-0.5">DictoX Standard</span>
                    <span className="line-clamp-2 leading-tight">{row.dictox}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table Container (hidden md:block) */}
          <div className="hidden md:block overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[640px]">
              
              {/* Table Header */}
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/90">
                  <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider w-[26%]">
                    Strategy Dimension
                  </th>
                  <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider w-[37%]">
                    Typical Agency Approach
                  </th>
                  <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-black text-[#0011a8] uppercase tracking-wider bg-blue-50/80 border-l border-r border-blue-200/80 w-[37%]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#00a63e]" />
                        <span>The DictoX Standard</span>
                      </span>
                      <span className="text-[10px] bg-[#00a63e] text-white font-bold px-2 py-0.5 rounded-full shadow-2xs">
                        Proven ROI
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
                    className="hover:bg-slate-50/70 transition-colors group"
                  >
                    {/* Dimension Label */}
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0011a8] transition-colors">
                      {row.feature}
                    </td>

                    {/* Typical Agency (Negative/Muted) */}
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{row.typical}</span>
                      </div>
                    </td>

                    {/* DictoX Approach (Highlight / Proven) */}
                    <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-xs sm:text-[13px] font-semibold text-slate-900 leading-relaxed bg-blue-50/30 group-hover:bg-blue-50/50 border-l border-r border-blue-200/80 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#00a63e] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-slate-950 font-bold">{row.dictox}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Bottom Action Strip */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-blue-50/40 to-emerald-50/30 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <h4 className="text-sm font-bold text-slate-950 leading-tight">
                Want ads engineered directly around your profit margins?
              </h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Schedule a 1-on-1 strategy call to discover how DictoX can scale your acquisition pipeline.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
