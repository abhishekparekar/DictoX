import React from 'react';
import { Search, Lightbulb, Pencil, Rocket, BarChart3, Trophy, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function ProcessSection() {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Your business, unit economics & target market.', icon: Search },
    { num: '02', title: 'Strategize', desc: 'Formulate high-intent ad angles & audience hooks.', icon: Lightbulb },
    { num: '03', title: 'Create', desc: 'Craft high-converting creatives, copy & landers.', icon: Pencil },
    { num: '04', title: 'Launch', desc: 'Deploy optimized Meta, Google & WhatsApp funnels.', icon: Rocket },
    { num: '05', title: 'Optimize', desc: 'Relentlessly prune bad ads and lower cost-per-lead.', icon: BarChart3 },
    { num: '06', title: 'Scale', desc: 'Aggressively multiply budget into winning funnels.', icon: Trophy },
  ];

  return (
    <section id="process" className="py-6 sm:py-9 md:py-12 relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
          <span className="inline-block text-xs font-bold tracking-widest text-[#0011a8] uppercase mb-1">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            From Strategy To Customers —{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              We Handle It All.
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-700 font-medium">
            A battle-tested 6-step framework designed to take the guesswork out of digital advertising.
          </p>
        </AnimatedSection>

        {/* 6 Connected Steps Grid in Compact White Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-3.5 sm:p-5 relative overflow-hidden">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              return (
                <AnimatedSection
                  key={item.num}
                  direction="up"
                  delay={idx * 0.04}
                  className="h-full"
                >
                  <div className="h-full bg-slate-50/80 hover:bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group flex flex-col items-center text-center justify-between">
                    
                    <div>
                      {/* Step Number Badge */}
                      <span className={`inline-block text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded-full mb-2 ${
                        isEven ? 'text-[#0011a8] bg-blue-50' : 'text-[#00a63e] bg-emerald-50'
                      }`}>
                        STEP {item.num}
                      </span>

                      {/* Icon */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white shadow-2xs border border-slate-200/80 text-[#0011a8] flex items-center justify-center mb-2 mx-auto group-hover:scale-105 group-hover:bg-[#0011a8] group-hover:text-white transition-all">
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-xs sm:text-sm font-bold text-slate-950 mb-0.5 group-hover:text-[#0011a8] transition-colors">
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

        </div>

      </div>
    </section>
  );
}
