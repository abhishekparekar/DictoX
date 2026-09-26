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
    <section id="course" className="py-20 md:py-24 lg:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00d084]">
            Meta Ads Course
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
            Meta Ads For Business Owners
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 mt-2">
            Learn How To Generate Customers Using Facebook & Instagram Ads
          </p>
        </div>

        {/* 5 Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="flex flex-col items-center p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-center hover:bg-white hover:border-[#00d084]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 mb-2.5 shadow-2xs">
                  <Icon className="w-5 h-5 text-[#00d084]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                  {t.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Course Card & Details */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 border-2 border-slate-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs">
          
          {/* Video Preview Card */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden bg-slate-900 aspect-video flex flex-col justify-between p-5 text-white group cursor-pointer shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-600/90 text-white font-bold">
                Meta Ads Mastery
              </span>
              <span className="text-xs font-mono text-slate-300 bg-black/40 px-2.5 py-1 rounded-full">
                12 In-Depth Modules
              </span>
            </div>

            <div className="self-center">
              <div className="w-14 h-14 rounded-full bg-[#00f59b] text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-6 h-6 fill-slate-950 translate-x-0.5" />
              </div>
            </div>

            <div>
              <div className="text-base sm:text-lg font-bold font-display">
                Meta Ads
              </div>
              <div className="text-xs sm:text-sm text-[#00f59b] font-medium">
                Practical Training For Business Owners
              </div>
            </div>
          </div>

          {/* Checklist & CTA */}
          <div className="md:col-span-6 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-snug">
              Transform Your Advertising Skills
            </h3>

            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#00d084] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] to-[#00d084] hover:from-[#15f8a3] hover:to-[#02df8f] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
