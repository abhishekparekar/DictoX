import React from 'react';
import { 
  Search, 
  Lightbulb, 
  Sparkles, 
  Rocket, 
  TrendingUp, 
  Trophy, 
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Understand your business, goals & customers.',
      icon: Search,
      accent: 'from-blue-500 to-indigo-600',
      badgeBg: 'bg-blue-50 text-[#0011a8] border-blue-100',
    },
    {
      num: '02',
      title: 'Strategize',
      desc: 'Build the right advertising strategy for your business.',
      icon: Lightbulb,
      accent: 'from-amber-500 to-orange-500',
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      num: '03',
      title: 'Create',
      desc: 'Create ads, content & campaigns designed to attract potential customers.',
      icon: Sparkles,
      accent: 'from-purple-500 to-pink-500',
      badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'Launch campaigns across the right platforms.',
      icon: Rocket,
      accent: 'from-blue-600 to-cyan-500',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    },
    {
      num: '05',
      title: 'Optimize',
      desc: 'Monitor performance and continuously improve campaigns.',
      icon: TrendingUp,
      accent: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-50 text-[#00a63e] border-emerald-100',
    },
    {
      num: '06',
      title: 'Scale',
      desc: 'Scale what works and look for new growth opportunities.',
      icon: Trophy,
      accent: 'from-yellow-500 to-emerald-500',
      badgeBg: 'bg-green-50 text-emerald-700 border-green-100',
    },
  ];

  return (
    <section id="process" className="relative py-10 sm:py-14 md:py-18 w-full overflow-hidden bg-white border-t border-slate-200/80">
      {/* Subtle top ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[220px] bg-gradient-to-b from-blue-100/35 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Subheading */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            HOW WE WORK
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            From Strategy To{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Customer Acquisition.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-black font-medium max-w-2xl mx-auto leading-relaxed">
            A simple, structured process designed to help your business get more from its advertising.
          </p>
        </AnimatedSection>

        {/* 6 Connected Steps Grid */}
        <div className="relative">
          
          {/* Desktop Behind Connecting Track */}
          <div className="hidden lg:block absolute top-[68px] left-[6%] right-[6%] h-[2px] bg-slate-200 z-0 pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 lg:gap-3 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === steps.length - 1;

              return (
                <AnimatedSection
                  key={item.num}
                  direction="up"
                  delay={idx * 0.04}
                  className="h-full relative"
                >
                  <div className="h-full bg-slate-50/80 hover:bg-white rounded-2xl p-3 sm:p-5 border border-slate-200/90 hover:border-slate-400 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 group flex flex-col justify-between text-left relative cursor-default">
                    
                    <div>
                      {/* Top Row: Step Badge & Icon */}
                      <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                        <span className={`text-[10px] sm:text-[11px] font-mono font-extrabold px-2 sm:px-2.5 py-0.5 rounded-full border ${item.badgeBg}`}>
                          {item.num}
                        </span>

                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white shadow-xs border border-slate-200/80 text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300">
                          <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2]" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xs sm:text-base font-bold text-black leading-tight mb-1 sm:mb-1.5">
                        {item.title}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-black leading-snug sm:leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* Desktop Connected Arrow to Next Step */}
                    {!isLast && (
                      <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-blue-200 shadow-xs items-center justify-center text-[#0011a8] group-hover:border-[#0011a8] group-hover:scale-110 transition-all">
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
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
