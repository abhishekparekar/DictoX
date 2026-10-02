import React from 'react';
import { ArrowRight, UserX, AlertCircle, TrendingDown, DollarSign, Shuffle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function ProblemSection({ onOpenConsultation }) {
  const problems = [
    {
      num: '01',
      title: 'No New Customers',
      desc: 'Ads are running, but new customers are not coming consistently.',
      icon: UserX,
      color: 'text-rose-500 bg-rose-50 border-rose-100',
    },
    {
      num: '02',
      title: 'Low-Quality Leads',
      desc: 'You’re getting enquiries, but most of them are not the right customers for your business.',
      icon: AlertCircle,
      color: 'text-amber-500 bg-amber-50 border-amber-100',
    },
    {
      num: '03',
      title: 'Leads But No Sales',
      desc: 'Leads are coming in, but they are not converting into enough sales.',
      icon: TrendingDown,
      color: 'text-red-500 bg-red-50 border-red-100',
    },
    {
      num: '04',
      title: 'High Ad Cost, Low Return',
      desc: 'You’re spending more on advertising, but the returns are not matching your investment.',
      icon: DollarSign,
      color: 'text-orange-500 bg-orange-50 border-orange-100',
    },
    {
      num: '05',
      title: 'Inconsistent Customer Flow',
      desc: 'Some months are good, some are not — there’s no consistent flow of customers and sales.',
      icon: Shuffle,
      color: 'text-purple-500 bg-purple-50 border-purple-100',
    },
  ];

  return (
    <section id="problems" className="relative py-8 sm:py-10 md:py-14 w-full overflow-hidden bg-slate-50/70 border-y border-slate-200/80">
      {/* Subtle top aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[220px] bg-gradient-to-b from-blue-100/35 via-rose-50/20 to-transparent blur-[80px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Compact, Clean Header with Proper Text Arrangement */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-[10.5px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            IS YOUR ADVERTISING REALLY WORKING?
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 leading-tight">
            Getting Leads Is Not Enough.{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              You Need Customers, Sales & Consistent Growth.
            </span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-medium">
            You’re spending on advertising — but is it actually helping your business grow?
          </p>
        </AnimatedSection>

        {/* 2-Column Responsive Layout: Left 5 Problem Cards + Right Stressed Owner Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
          
          {/* LEFT: 5 Problem Cards (lg:col-span-7, order-2 on mobile or order-1 on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-2 sm:gap-2.5 order-2 lg:order-1">
            {problems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={item.num}
                  direction="up"
                  delay={idx * 0.03}
                >
                  <div className="bg-white hover:bg-slate-50/90 rounded-xl p-2.5 sm:p-3 md:p-3.5 border border-slate-200/90 hover:border-slate-400 transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center gap-3 text-left group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 bg-slate-50 transition-transform group-hover:scale-105">
                      <Icon className={`w-4 h-4 ${item.color.split(' ')[0]}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-900 shrink-0">
                          {item.num} —
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-black leading-tight truncate">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-900 leading-snug font-medium mt-0.5 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* RIGHT: Shifted Business Owner Sad Reaction Image (lg:col-span-5, order-1 on mobile or order-2 on desktop) */}
          <AnimatedSection direction="up" className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Image Frame with controlled height to prevent long scrolling */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-[0_12px_32px_rgba(225,29,72,0.12)] bg-slate-900 group">
                <img
                  src="/images/worried-business-owner.jpg"
                  alt="Stressed business owner reviewing declining advertising return on laptop"
                  className="w-full h-36 sm:h-52 lg:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Emotional Pain Point Overlay Note */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2.5 sm:p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 text-white text-left shadow-md">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-rose-300 uppercase tracking-wide">
                      The Reality Most Owners Face
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-200 leading-snug">
                    "We're spending on ads every month, but where are the actual paying customers?"
                  </p>
                </div>
              </div>

              {/* Floating Alert Pill */}
              <div className="absolute -top-2.5 -right-2 sm:-right-3 bg-white py-1 px-3 rounded-xl border border-rose-100 shadow-md flex items-center gap-1.5 animate-float-slow">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-extrabold text-rose-700">
                  Ad Spend Wasted ↘
                </span>
              </div>

            </div>
          </AnimatedSection>

        </div>

        {/* Compact Bottom Resolution Banner */}
        <AnimatedSection direction="up" delay={0.15} className="mt-5 sm:mt-7 bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs p-3.5 sm:p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
          <div className="max-w-lg">
            <h4 className="text-xs sm:text-sm md:text-base font-bold text-slate-950 leading-snug">
              It Should Help You Get Customers, Generate Sales & Grow Your Business.
            </h4>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full md:w-auto shrink-0">
            <a
              href="#services"
              className="w-full sm:w-auto text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0011a8] px-3 py-2 rounded-lg transition-colors text-center inline-flex items-center justify-center gap-1.5"
            >
              <span>See How We Solve This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-5 sm:px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Get A Free Strategy Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
