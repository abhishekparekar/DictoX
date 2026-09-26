import React from 'react';
import { Search, Lightbulb, Palette, Rocket, Sliders, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProcessSection({ onOpenConsultation }) {
  const phases = [
    {
      phaseNum: 'Phase 01',
      phaseTitle: 'Strategy & Foundation',
      phaseDesc: 'Deep business understanding and customized acquisition blueprint.',
      accent: 'border-blue-500/40 hover:border-blue-500',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      steps: [
        {
          num: '01',
          title: 'Understand',
          desc: 'Audit your business model, customer economics, competitors, and growth objectives.',
          icon: Search,
        },
        {
          num: '02',
          title: 'Strategize',
          desc: 'Design high-converting advertising funnels tailored for your specific target market.',
          icon: Lightbulb,
        },
      ],
    },
    {
      phaseNum: 'Phase 02',
      phaseTitle: 'Creative & Multi-Channel Launch',
      phaseDesc: 'High-converting ad creatives and multi-channel campaign deployment.',
      accent: 'border-[#00b370]/50 hover:border-[#00b370]',
      badgeBg: 'bg-emerald-50 text-[#00b370] border-emerald-200',
      steps: [
        {
          num: '03',
          title: 'Create',
          desc: 'Develop thumb-stopping video reels, ad copy, lead forms, and landing pages.',
          icon: Palette,
        },
        {
          num: '04',
          title: 'Launch',
          desc: 'Deploy targeted campaigns across Meta Ads, Google Ads & WhatsApp API.',
          icon: Rocket,
        },
      ],
    },
    {
      phaseNum: 'Phase 03',
      phaseTitle: 'Optimization & Revenue Scale',
      phaseDesc: 'Continuous algorithm tuning and aggressive scaling on winning campaigns.',
      accent: 'border-purple-500/40 hover:border-purple-500',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      steps: [
        {
          num: '05',
          title: 'Optimize',
          desc: 'Daily performance tracking, audience refinement, and reducing cost per lead.',
          icon: Sliders,
        },
        {
          num: '06',
          title: 'Scale',
          desc: 'Scale high-converting campaigns to maximize revenue and monthly customer volume.',
          icon: TrendingUp,
        },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00b370]">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
            From Strategy To Customers — We Handle It All.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto">
            A proven 3-phase execution framework designed to turn advertising spend into measurable, profitable business revenue.
          </p>
        </div>

        {/* 3 Strategic Phase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {phases.map((phase, pIdx) => (
            <div
              key={pIdx}
              className={`bg-white border-2 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${phase.accent}`}
            >
              <div>
                {/* Phase Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider ${phase.badgeBg}`}>
                    {phase.phaseNum}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    Step {pIdx * 2 + 1} & {pIdx * 2 + 2}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 mb-1">
                  {phase.phaseTitle}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-6">
                  {phase.phaseDesc}
                </p>

                {/* Sub-Steps Container */}
                <div className="space-y-4">
                  {phase.steps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.num}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#00b370]/40 transition-all flex items-start gap-3.5 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#00b370] shrink-0 shadow-2xs group-hover:scale-105 transition-transform mt-0.5">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-bold text-[#00b370]">{step.num}.</span>
                            <h4 className="text-sm font-bold text-slate-900 leading-snug">{step.title}</h4>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Phase Footer Indicator */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 text-[#00b370]">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Milestone
                </span>
                <span className="text-slate-400 font-mono text-[11px]">100% Transparent</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
