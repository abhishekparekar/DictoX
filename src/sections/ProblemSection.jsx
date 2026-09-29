import React from 'react';
import { ArrowRight, UserX, HelpCircle, TrendingDown, DollarSign, Shuffle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function ProblemSection({ onOpenConsultation }) {
  const problems = [
    {
      num: '01',
      title: 'No New Customers',
      desc: 'Ads are running, but new customers are not coming consistently.',
      icon: UserX,
    },
    {
      num: '02',
      title: 'Low-Quality Leads',
      desc: "You're getting enquiries, but most of them are not the right customers.",
      icon: HelpCircle,
    },
    {
      num: '03',
      title: 'Low Sales',
      desc: 'Leads are coming in, but they are not converting into enough sales.',
      icon: TrendingDown,
    },
    {
      num: '04',
      title: 'High Cost, Low Return',
      desc: "You're spending more on advertising, but the returns are not matching your investment.",
      icon: DollarSign,
    },
    {
      num: '05',
      title: 'Inconsistent Flow',
      desc: "Some months are good, some are not — there's no steady flow of qualified customers.",
      icon: Shuffle,
    },
  ];

  return (
    <section className="relative py-6 sm:py-9 md:py-12 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
          <span className="inline-block text-xs font-bold tracking-widest text-[#0011a8] uppercase mb-1">
            Is Your Advertising Really Working?
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Getting Leads Is Not Enough.<br />
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              You Need Customers, Sales & Consistent Growth.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-700 mt-2 max-w-xl mx-auto leading-relaxed font-medium">
            You are spending money on advertising every month — but is it actually translating into predictable revenue?
          </p>
        </AnimatedSection>

        {/* Compact Floating White Card Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-3.5 sm:p-6 lg:p-7 relative overflow-hidden">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
            {problems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={item.num}
                  direction="up"
                  delay={idx * 0.05}
                  className="h-full"
                >
                  <div className="h-full bg-slate-50/80 hover:bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-200/70 hover:border-blue-300 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group flex flex-col justify-between text-center">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono font-bold text-slate-400">
                          {item.num}
                        </span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50 text-[#0011a8] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0011a8] group-hover:text-white transition-all">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                        </div>
                      </div>

                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-950 mb-1 group-hover:text-[#0011a8] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Bottom Callout & CTA */}
          <div className="mt-4 sm:mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                Stop Burning Ad Spend on Unqualified Clicks
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                Let our team audit your funnel and build an acquisition roadmap that actually delivers.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              <span>Get A Free Strategy Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
