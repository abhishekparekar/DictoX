import React from 'react';
import { ArrowRight, UserX, HelpCircle, TrendingDown, DollarSign, Shuffle } from 'lucide-react';

export default function ProblemSection({ onOpenConsultation }) {
  const problems = [
    {
      num: '01',
      icon: UserX,
      title: 'No New Customers',
      desc: 'Ads are running, but new customers are not coming consistently.',
    },
    {
      num: '02',
      icon: HelpCircle,
      title: 'Low-Quality Leads',
      desc: "You're getting enquiries, but most are not the right customers.",
    },
    {
      num: '03',
      icon: TrendingDown,
      title: 'Low Sales',
      desc: 'Leads are coming in, but they are not converting into enough sales.',
    },
    {
      num: '04',
      icon: DollarSign,
      title: 'High Cost, Low Return',
      desc: "You're spending more on advertising, but the returns are not matching your investment.",
    },
    {
      num: '05',
      icon: Shuffle,
      title: 'Inconsistent Customer Flow',
      desc: "Some months are great, some are not — there's no consistent flow of customers and sales.",
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 bg-[#051518] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f59b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with handwritten note */}
        <div className="relative text-center max-w-3xl mx-auto mb-10">
          {/* Handwritten Sticky Note */}
          <div className="hidden md:flex absolute -top-3 right-0 lg:-right-16 items-center gap-1.5 rotate-6">
            <span className="font-handwriting text-xl sm:text-2xl text-[#00f59b] font-bold">
              Same Problems?<br />Let's Fix This
            </span>
            <span className="text-2xl text-[#00f59b]">↗</span>
          </div>

          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-semibold">
            Is Your Advertising Really Working?
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white mt-2 leading-tight">
            Getting Leads Is Not Enough.<br />
            <span className="text-slate-300">
              You Need Customers, Sales & Consistent Growth.
            </span>
          </h2>
        </div>

        {/* 5 Problem Cards in 1 Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-[#091f22]/90 border border-white/10 hover:border-[#00f59b]/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00f59b]/5 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#00f59b] transition-colors">
                      {item.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#00f59b]/15 flex items-center justify-center text-slate-300 group-hover:text-[#00f59b] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold font-display text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-sm font-medium text-slate-300">
            Your Advertising Should Do More Than Generate Leads.
          </span>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all duration-200 shadow-md hover:scale-102"
          >
            <span>Get A Free Strategy Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
