import React from 'react';
import { ArrowRight, UserX, HelpCircle, TrendingDown, DollarSign, Shuffle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function ProblemSection({ onOpenConsultation }) {
  const problems = [
    {
      num: '01',
      title: 'No Real Customers',
      desc: 'Ads are active, but new paying clients are not arriving.',
      icon: UserX,
      color: 'text-red-500 bg-red-50 group-hover:bg-red-500',
    },
    {
      num: '02',
      title: 'Low-Quality Leads',
      desc: 'Invalid numbers, casual window shoppers, and irrelevant inquiries.',
      icon: HelpCircle,
      color: 'text-amber-500 bg-amber-50 group-hover:bg-amber-500',
    },
    {
      num: '03',
      title: 'Poor Conversion',
      desc: 'Leads arrive but fail to convert into closed deals and sales.',
      icon: TrendingDown,
      color: 'text-rose-500 bg-rose-50 group-hover:bg-rose-500',
    },
    {
      num: '04',
      title: 'High CPL, Low ROI',
      desc: 'Ad expenses keep climbing without matching unit profit.',
      icon: DollarSign,
      color: 'text-orange-500 bg-orange-50 group-hover:bg-orange-500',
    },
    {
      num: '05',
      title: 'Inconsistent Flow',
      desc: 'Unpredictable rollercoasters instead of steady daily revenue.',
      icon: Shuffle,
      color: 'text-purple-500 bg-purple-50 group-hover:bg-purple-500',
    },
  ];

  return (
    <section className="relative py-4 sm:py-7 md:py-9 w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Crisp, Punchy Header — No Excess Bloat */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-3 sm:mb-5">
          <span className="inline-block text-[10.5px] sm:text-xs font-bold tracking-widest text-[#0011a8] uppercase mb-0.5">
            Common Advertising Bottlenecks
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-slate-950 leading-tight">
            Getting Leads Is Not Enough.{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              You Need Customers.
            </span>
          </h2>

          <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 mt-1 max-w-lg mx-auto leading-relaxed font-medium">
            Stop burning ad spend on unverified clicks. Here are the 5 bottlenecks holding businesses back:
          </p>
        </AnimatedSection>

        {/* Full-Width Sleek Problem Cards Container */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-2.5 sm:p-5 lg:p-6 relative overflow-hidden">
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
            {problems.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === problems.length - 1;
              return (
                <AnimatedSection
                  key={item.num}
                  direction="up"
                  delay={idx * 0.03}
                  className={`h-full ${isLast ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <div className="h-full bg-slate-50/70 hover:bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group flex flex-col justify-between text-left cursor-default">
                    <div>
                      {/* Top Bar with Number & Icon */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400">
                          {item.num}
                        </span>
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-105 group-hover:text-white ${item.color}`}>
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                        </div>
                      </div>

                      {/* Card Title & Crisp Desc */}
                      <h3 className="text-xs sm:text-sm font-bold text-slate-950 mb-0.5 group-hover:text-[#0011a8] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-slate-600 leading-snug font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Ready to fix your acquisition funnel?
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                We diagnose your ad leaks and build an acquisition roadmap that converts.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-5 sm:px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
            >
              <span>Get Free Strategy Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
