import React from 'react';
import { ArrowRight, UserX, HelpCircle, TrendingDown, DollarSign, Shuffle } from 'lucide-react';

export default function ProblemSection({ onOpenConsultation }) {
  const problems = [
    {
      num: '01',
      title: 'No New Customers',
      desc: 'Ads are running, but new customers are not coming consistently.',
      icon: UserX,
      glow: 'from-emerald-500/15 via-teal-500/5 to-transparent',
    },
    {
      num: '02',
      title: 'Low-Quality Leads',
      desc: "You’re getting enquiries, but most of them are not the right customers for your business.",
      icon: HelpCircle,
      glow: 'from-amber-500/15 via-orange-500/5 to-transparent',
    },
    {
      num: '03',
      title: 'Low Sales',
      desc: 'Leads are coming in, but they are not converting into enough sales.',
      icon: TrendingDown,
      glow: 'from-red-500/15 via-rose-500/5 to-transparent',
    },
    {
      num: '04',
      title: 'High Cost, Low Return',
      desc: "You’re spending more on advertising, but the returns are not matching your investment.",
      icon: DollarSign,
      glow: 'from-purple-500/15 via-indigo-500/5 to-transparent',
    },
    {
      num: '05',
      title: 'Inconsistent Customer Flow',
      desc: "Some months are good, some are not — there’s no consistent flow of customers and sales.",
      icon: Shuffle,
      glow: 'from-cyan-500/15 via-blue-500/5 to-transparent',
    },
  ];

  return (
    <section className="relative py-20 md:py-24 lg:py-28 bg-[#041214] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00f59b]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#00f59b] font-bold">
            Is Your Advertising Really Working?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mt-3 leading-tight">
            Getting Leads Is Not Enough.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">
              You Need Customers, Sales & Consistent Growth.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed font-normal">
            You’re spending on advertising — but is it actually helping your business grow?
          </p>
        </div>

        {/* 5 Problem Cards in Beautiful Gradient Box format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative bg-gradient-to-b from-[#092225] via-[#06181b] to-[#041214] border border-[#00f59b]/20 hover:border-[#00f59b]/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00f59b]/15 group overflow-hidden"
              >
                {/* Top gradient highlight */}
                <div className={`absolute top-0 inset-x-0 h-24 bg-gradient-to-b ${item.glow} pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00f59b]/40 text-[#00f59b] font-mono font-black text-sm flex items-center justify-center transition-colors">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#00f59b]/10 group-hover:bg-[#00f59b]/25 flex items-center justify-center text-[#00f59b] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-white mb-2.5 leading-snug group-hover:text-[#00f59b] transition-colors">
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
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#00f59b]/30 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get A Free Strategy Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
