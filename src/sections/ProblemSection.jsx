import React from 'react';
import { ArrowRight, UserX, HelpCircle, TrendingDown, DollarSign, Shuffle } from 'lucide-react';

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
      desc: "You’re getting enquiries, but most of them are not the right customers.",
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
      desc: "You’re spending more on advertising, but the returns are not matching your investment.",
      icon: DollarSign,
    },
    {
      num: '05',
      title: 'Inconsistent Customer Flow',
      desc: "Some months are good, some are not — there’s no consistent flow of customers and sales.",
      icon: Shuffle,
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 md:py-18 bg-[#051714] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00f59b]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-bold">
            IS YOUR ADVERTISING REALLY WORKING?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mt-2.5 leading-tight">
            Getting Leads Is Not Enough.<br />
            <span className="text-[#00f59b]">
              You Need Customers, Sales & Consistent Growth.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-xl mx-auto leading-relaxed font-normal">
            You’re spending on advertising — but is it actually helping your business grow?
          </p>
        </div>

        {/* Top Handwritten Annotation right above the cards */}
        <div className="flex justify-end mb-2 pr-4 sm:pr-8">
          <div className="text-right">
            <span className="text-xs sm:text-sm font-serif italic text-slate-200">
              Same Problems?<br />Let's Fix This.
            </span>
            <div className="text-[#00f59b] text-base leading-none text-right">⤷</div>
          </div>
        </div>

        {/* 5 Problem Cards in horizontal 5-col row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4.5">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative bg-[#09221d]/85 border border-white/10 hover:border-[#00f59b]/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00f59b]/10 group"
              >
                <div>
                  {/* Top Number */}
                  <span className="text-xs font-mono font-bold text-slate-400 block mb-4">
                    {item.num}
                  </span>

                  {/* Centered Green Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#00f59b]/10 text-[#00f59b] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Card Title & Desc */}
                  <h3 className="text-sm sm:text-base font-bold font-display text-white text-center mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal text-center">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & CTA Button */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
          <span className="text-sm sm:text-base font-semibold text-slate-200">
            Your Advertising Should Do More Than Generate Leads.
          </span>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_6px_25px_rgba(0,245,155,0.4)] transition-all duration-300 cursor-pointer shadow-md"
          >
            <span>Get A Free Strategy Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

