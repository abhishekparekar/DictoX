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
    <section className="py-20 md:py-24 lg:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00d084]">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
            From Strategy To Customers — We Handle It All.
          </h2>
        </div>

        {/* 6 Steps Grid: Sharp Rectangles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-50 border-2 border-slate-200 hover:border-[#00d084] rounded-none p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group relative"
              >
                {/* Top border accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#00d084] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-none bg-white border border-slate-200 flex items-center justify-center text-slate-800 group-hover:text-[#00d084] group-hover:border-[#00d084]/50 shadow-2xs transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-mono font-extrabold text-slate-400 group-hover:text-[#00d084]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 mb-2 group-hover:text-[#00d084] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
