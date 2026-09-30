import React from 'react';
import { Search, Lightbulb, Pencil, Rocket, BarChart3, Trophy, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function ProcessSection() {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Audit business & target audience.', icon: Search },
    { num: '02', title: 'Strategize', desc: 'Formulate high-intent ad angles.', icon: Lightbulb },
    { num: '03', title: 'Create', desc: 'Build creatives, copy & funnels.', icon: Pencil },
    { num: '04', title: 'Launch', desc: 'Deploy Meta, Google & WhatsApp.', icon: Rocket },
    { num: '05', title: 'Optimize', desc: 'Cut bad ads & lower cost per lead.', icon: BarChart3 },
    { num: '06', title: 'Scale', desc: 'Double down on winning funnels.', icon: Trophy },
  ];

  return (
    <section id="process" className="relative py-5 sm:py-7 md:py-8 w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Compact, Punchy Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-5">
          <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-[#0011a8] uppercase mb-0.5">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 leading-tight">
            From Strategy To{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Paying Customers.
            </span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
            Our battle-tested 6-step performance framework:
          </p>
        </AnimatedSection>

        {/* Full-Width 6 Connected Steps Grid */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-3 sm:p-4 lg:p-5 relative overflow-hidden">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              const isLast = idx === steps.length - 1;

              return (
                <AnimatedSection
                  key={item.num}
                  direction="up"
                  delay={idx * 0.03}
                  className="h-full"
                >
                  <div className="h-full bg-slate-50/70 hover:bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group flex flex-col items-center text-center justify-between relative cursor-default">
                    
                    <div className="w-full">
                      {/* Step Number & Connector */}
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <span className={`text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded-full ${
                          isEven ? 'text-[#0011a8] bg-blue-50' : 'text-[#00a63e] bg-emerald-50'
                        }`}>
                          STEP {item.num}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white shadow-2xs border border-slate-200/80 text-[#0011a8] flex items-center justify-center mb-2 mx-auto group-hover:scale-110 group-hover:bg-[#0011a8] group-hover:text-white transition-all">
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>

                      {/* Title & Concise Desc */}
                      <h3 className="text-xs sm:text-sm font-bold text-slate-950 mb-0.5 group-hover:text-[#0011a8] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[10.5px] sm:text-[11px] text-slate-600 leading-snug font-normal mt-0.5">
                        {item.desc}
                      </p>
                    </div>

                    {/* Subtle forward arrow indicator between steps on desktop */}
                    {!isLast && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-300 pointer-events-none">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    )}

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
