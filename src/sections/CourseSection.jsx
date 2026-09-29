import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Play, 
  Settings, 
  Target, 
  UserPlus, 
  Palette, 
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseSection({ onOpenConsultation }) {
  const topics = [
    { title: 'Campaign Setup', icon: Settings },
    { title: 'Audience Targeting', icon: Target },
    { title: 'Lead Generation', icon: UserPlus },
    { title: 'Creative Strategy', icon: Palette },
    { title: 'Campaign Optimization', icon: TrendingUp },
  ];

  const highlights = [
    'Step-by-step masterclass',
    'Live walkthrough of real ad accounts',
    'Designed for business owners & founders',
    'Practical frameworks you can launch today',
  ];

  return (
    <section id="course" className="py-6 sm:py-9 md:py-12 relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0011a8] block mb-1">
            Practical Meta Ads Training
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Meta Ads For{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Business Owners
            </span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-700 font-medium">
            Learn step-by-step how to launch, optimize, and scale profitable Facebook & Instagram ads for your own business.
          </p>
        </div>

        {/* Compact White Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center relative z-10">
            
            {/* Topic Badges Column */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 sm:gap-2.5">
              {topics.map((t, idx) => {
                const Icon = t.icon;
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={t.title}
                    className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-50/80 border border-slate-150 hover:border-blue-300 transition-all"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-2xs ${
                      isEven ? 'bg-blue-50 text-[#0011a8]' : 'bg-emerald-50 text-[#00a63e]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {t.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Course Details Column */}
            <div className="md:col-span-8 space-y-3.5 sm:space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#00a63e] text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Cohort Enrollment Open</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                Take Control of Your Customer Acquisition Without Paying Heavy Monthly Retainers
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                    <Check className="w-4 h-4 text-[#00a63e] shrink-0 stroke-[2.5]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Inquire About Course</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/course"
                  className="text-xs font-bold text-[#0011a8] hover:text-blue-700 py-1.5 px-3 text-center"
                >
                  View Full Syllabus & Curriculum →
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
