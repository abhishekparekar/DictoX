import React from 'react';
import { Search, Lightbulb, Palette, Rocket, Sliders, TrendingUp } from 'lucide-react';

export default function ProcessSection({ onOpenConsultation }) {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Understand your business, goals & target audience.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Strategize',
      desc: 'Build the right advertising strategy based on your business objectives.',
      icon: Lightbulb,
    },
    {
      num: '03',
      title: 'Create',
      desc: 'Develop creatives, copy & campaign structure.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'Launch campaigns across the right advertising platforms.',
      icon: Rocket,
    },
    {
      num: '05',
      title: 'Optimize',
      desc: 'Monitor performance and continuously optimize campaigns.',
      icon: Sliders,
    },
    {
      num: '06',
      title: 'Scale',
      desc: 'Identify opportunities to improve performance and scale what works.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d084]">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 mt-1">
            From Strategy To Customers — We Handle It All.
          </h2>
        </div>

        {/* 6 Steps in 1 Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 flex flex-col justify-between hover:bg-white hover:border-[#00d084]/60 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-[#00d084] group-hover:border-[#00d084]/40 shadow-xs transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#00d084]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold font-display text-slate-900 mb-1.5 group-hover:text-[#00d084] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
