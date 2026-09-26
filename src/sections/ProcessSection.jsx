import React from 'react';
import { Search, Lightbulb, Pencil, Rocket, BarChart3, Trophy } from 'lucide-react';

export default function ProcessSection({ onOpenConsultation }) {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Your business, goals & target audience.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Strategize',
      desc: 'Build the right advertising strategy.',
      icon: Lightbulb,
    },
    {
      num: '03',
      title: 'Create',
      desc: 'Develop creatives, copy & campaign structure.',
      icon: Pencil,
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'Launch campaigns across the right platforms.',
      icon: Rocket,
    },
    {
      num: '05',
      title: 'Optimize',
      desc: 'Monitor performance and continuously optimize.',
      icon: BarChart3,
    },
    {
      num: '06',
      title: 'Scale',
      desc: 'Identify opportunities to scale what works.',
      icon: Trophy,
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
            HOW WE WORK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900">
            From Strategy To Customers — We Handle It All.
          </h2>
        </div>

        {/* 6 Connected Steps Grid matching Screenshot 2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="relative flex flex-col">
                <div className="bg-[#f8faf9] border border-slate-200/80 rounded-2xl p-4 flex flex-col items-center text-center h-full hover:bg-white hover:border-[#00b370]/50 hover:shadow-md transition-all">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 mb-3 shadow-2xs">
                    <Icon className="w-5 h-5 text-[#00b370]" />
                  </div>

                  {/* Step Number & Title */}
                  <div className="text-xs font-mono font-bold text-slate-400">
                    {item.num}
                  </div>
                  <h3 className="text-sm font-bold font-display text-slate-900 mt-0.5 mb-1.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-slate-500 leading-snug font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Connecting Arrow for Desktop (Except last step) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#00b370] font-bold text-xs pointer-events-none">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

