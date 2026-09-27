import React from 'react';
import { Search, Lightbulb, Pencil, Rocket, BarChart3, Trophy, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function ProcessSection() {
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
    <section id="process" className="py-6 sm:py-8 lg:py-10 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header matching screenshot exactly */}
        <AnimatedSection direction="up" className="mb-4 sm:mb-6 text-left">
          <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
            HOW WE WORK
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.85rem] font-bold font-display tracking-tight text-slate-900">
            From Strategy To Customers — We Handle It All.
          </h2>
        </AnimatedSection>

        {/* 6 Connected Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 lg:gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.num}
                direction="up"
                delay={idx * 0.08}
                className="relative flex flex-col h-full"
              >
                {/* Process Card */}
                <div className="bg-[#f8fbf9] border border-slate-200/70 rounded-2xl p-3 sm:p-4 lg:p-4.5 flex flex-col items-center text-center h-full shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:bg-white hover:border-[#00b370]/50 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
                  
                  {/* Top White Squircle Icon Container */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#00b370] mb-2.5 sm:mb-3 group-hover:scale-110 group-hover:bg-[#00f59b] group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Step Number */}
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-400 mb-0.5">
                    {item.num}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-sm sm:text-[15px] font-bold font-display text-slate-900 mb-1 leading-snug group-hover:text-[#00874e] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description Copy */}
                  <p className="text-[11px] sm:text-[12px] text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Connecting Arrow for Desktop (Except last step) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2.5 xl:-right-3 top-1/2 -translate-y-1/2 z-10 text-[#00b370] font-bold text-xs pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5 text-[#00b370] stroke-[2.5]" />
                  </div>
                )}
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
