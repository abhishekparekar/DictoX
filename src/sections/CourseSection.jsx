import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Play, 
  Settings, 
  Target, 
  UserPlus, 
  Palette, 
  TrendingUp 
} from 'lucide-react';

export default function CourseSection({ onOpenConsultation }) {
  const topics = [
    { title: 'Campaign Setup', icon: Settings },
    { title: 'Audience Targeting', icon: Target },
    { title: 'Lead Generation', icon: UserPlus },
    { title: 'Creative Strategy', icon: Palette },
    { title: 'Campaign Optimization', icon: TrendingUp },
  ];

  const highlights = [
    'Step-by-step training',
    'Live examples',
    'For beginners & business owners',
    'Learn from real campaigns',
  ];

  return (
    <section id="course" className="py-14 sm:py-16 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d084]">
            Meta Ads Course
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 mt-1">
            Meta Ads For Business Owners
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Learn How To Generate Customers Using Facebook & Instagram Ads
          </p>
        </div>

        {/* 5 Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto mb-8">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="flex flex-col items-center p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center hover:bg-white hover:border-[#00d084]/40 hover:shadow-xs transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-1.5 shadow-2xs">
                  <Icon className="w-4 h-4 text-[#00d084]" />
                </div>
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  {t.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Course Card & Details */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
          
          {/* Video Preview Card */}
          <div className="md:col-span-6 relative rounded-xl overflow-hidden bg-slate-900 aspect-video flex flex-col justify-between p-4 text-white group cursor-pointer shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600/80 text-white font-semibold">
                Meta Ads Mastery
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                12 Modules
              </span>
            </div>

            <div className="self-center">
              <div className="w-12 h-12 rounded-full bg-[#00f59b] text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-5 h-5 fill-slate-950 translate-x-0.5" />
              </div>
            </div>

            <div>
              <div className="text-sm font-bold font-display">
                Meta Ads
              </div>
              <div className="text-[11px] text-[#00f59b]">
                Practical Training For Business Owners
              </div>
            </div>
          </div>

          {/* Checklist & CTA */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-base sm:text-lg font-bold font-display text-slate-900">
              Transform Your Advertising Skills
            </h3>

            <ul className="space-y-2.5">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#00d084] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all shadow-sm hover:shadow-md"
              >
                <span>Explore Course</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
