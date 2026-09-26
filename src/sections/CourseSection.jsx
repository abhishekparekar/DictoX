import React, { useState } from 'react';
import { BookOpen, CheckCircle2, ArrowRight, Video, Users, Sparkles, Clock, Laptop } from 'lucide-react';

const courseModules = [
  {
    number: '01',
    title: 'Campaign Architecture & Setup',
    description: 'Setting up Meta Business Manager, Ads Manager, Pixel, and Conversion API (CAPI) without account bans or errors.'
  },
  {
    number: '02',
    title: 'Pinpoint Audience Targeting',
    description: 'Demographics, geo-fencing, interest layering, lookalikes, and custom audience retargeting frameworks.'
  },
  {
    number: '03',
    title: 'High-Intent Lead Generation',
    description: 'Designing native instant forms that filter out time-wasters and capture high-intent inquiries with verified phone numbers.'
  },
  {
    number: '04',
    title: 'Direct-Response Creative Strategy',
    description: 'Writing ad copy that hooks attention, recording high-converting UGC smartphone videos, and designing scroll-stopping ad creatives.'
  },
  {
    number: '05',
    title: 'Campaign Optimization & Scaling',
    description: 'Reading metric dashboards, killing losing ads with discipline, and scaling winning budgets profitably without ROAS crashes.'
  }
];

export default function CourseSection({ onOpenConsultation }) {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section id="course" className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-brand-emerald text-xs font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Educational Masterclass</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
            Meta Ads For Business Owners
          </h2>

          <p className="text-lg sm:text-xl font-medium text-brand-mint">
            Learn How To Generate Customers Using Facebook & Instagram Ads.
          </p>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Prefer to train your internal sales or marketing team to run profitable ad campaigns in-house? Suresh More breaks down DictoX's proprietary agency frameworks into practical, step-by-step masterclass modules.
          </p>
        </div>

        {/* Course Interactive Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Module Selector List */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2 font-semibold">
              Course Curriculum Modules
            </div>

            {courseModules.map((module, idx) => {
              const isSelected = activeModule === idx;
              return (
                <div
                  key={module.number}
                  onClick={() => setActiveModule(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-brand-surface border-brand-emerald shadow-glow-sm'
                      : 'bg-brand-surface/40 border-brand-border/70 hover:border-zinc-600 hover:bg-brand-surface/70'
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-bold px-2.5 py-1 rounded-lg ${
                      isSelected
                        ? 'bg-brand-emerald text-brand-dark'
                        : 'bg-brand-dark text-zinc-400 border border-brand-border'
                    }`}
                  >
                    {module.number}
                  </span>
                  <div className="space-y-1">
                    <h4
                      className={`text-base font-bold font-display ${
                        isSelected ? 'text-white' : 'text-zinc-200'
                      }`}
                    >
                      {module.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Module Showcase Card */}
          <div className="lg:col-span-6">
            <div className="bg-brand-surface border-2 border-brand-emerald/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-brand-emerald" />
                  <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                    Executive Masterclass Preview
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                  Practical & Live
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-brand-emerald uppercase font-semibold">
                  Module {courseModules[activeModule].number} Deep Dive
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  {courseModules[activeModule].title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                  {courseModules[activeModule].description}
                </p>
              </div>

              <div className="space-y-3 bg-brand-dark/80 rounded-2xl p-4 sm:p-5 border border-brand-border">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  What You & Your Team Will Master:
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                    <span>Real-world case studies from actual client ad accounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                    <span>Plug-and-play ad copy formulas and headline templates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                    <span>WhatsApp lead integration & rapid follow-up protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                    <span>Q&A and campaign review personally with Suresh More</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={onOpenConsultation}
                  className="btn-primary w-full text-xs sm:text-sm font-semibold !py-3.5 flex items-center justify-center gap-2 shadow-glow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Enquire For Course Syllabus & Cohort Dates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[11px] text-zinc-400">
                  Limited seats per cohort to ensure individual ad account audits.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
