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
      desc: "You’re getting enquiries, but most of them are not the right customers for your business.",
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
    <section className="relative py-20 md:py-24 lg:py-28 bg-[#051518] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00f59b]/8 rounded-none blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header with handwritten note */}
        <div className="relative text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <div className="hidden lg:flex absolute -top-4 right-0 xl:-right-12 items-center gap-2 rotate-6">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#00f59b] font-bold drop-shadow">
              Same Problems?<br />Let's Fix This
            </span>
            <span className="text-3xl text-[#00f59b]">↗</span>
          </div>

          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#00f59b] font-bold">
            Is Your Advertising Really Working?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mt-3 leading-tight">
            Getting Leads Is Not Enough.<br />
            <span className="text-slate-300">
              You Need Customers, Sales & Consistent Growth.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            You’re spending on advertising — but is it actually helping your business grow?
          </p>
        </div>

        {/* 5 Problem Cards in Sharp Rectangular Format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-[#091f22]/95 border border-white/15 hover:border-[#00f59b] rounded-none p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#00f59b]/15 group relative"
              >
                {/* Top border accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#00f59b] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-sm font-mono font-extrabold text-slate-400 group-hover:text-[#00f59b] transition-colors">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 group-hover:bg-[#00f59b]/20 group-hover:border-[#00f59b]/40 flex items-center justify-center text-slate-200 group-hover:text-[#00f59b] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & CTA */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 text-center">
          <span className="text-base sm:text-lg font-semibold text-slate-200">
            It Should Help You Get Customers, Generate Sales & Grow Your Business.
          </span>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-none text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#00f59b]/25 hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider"
          >
            <span>Get A Free Strategy Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
