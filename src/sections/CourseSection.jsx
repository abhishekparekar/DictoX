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

export default function CourseSection({ onOpenConsultation }) {
  const topics = [
    { title: 'Campaign Setup', icon: Settings },
    { title: 'Audience Targeting', icon: Target },
    { title: 'Lead Generation', icon: UserPlus },
    { title: 'Creative Strategy', icon: Palette },
    { title: 'Campaign Optimization', icon: TrendingUp },
  ];

  const highlights = [
    'Step-by-step training from scratch',
    'Live practical campaign examples',
    'Designed for business owners & founders',
    'Learn how to scale profitably',
  ];

  return (
    <section id="course" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00b370]">
            Meta Ads Course
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
            Meta Ads For Business Owners
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-2">
            Learn How To Generate Customers Using Facebook & Instagram Ads
          </p>
        </div>

        {/* 5 Topic Cards: Rounded-2xl Gradient Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-5xl mx-auto mb-12">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-white via-slate-50/80 to-slate-100/50 border border-slate-200/90 text-center hover:border-[#00b370] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 via-[#00f59b]/20 to-teal-500/10 border border-emerald-500/20 flex items-center justify-center text-slate-800 mb-3 shadow-xs group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-[#00b370]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                  {t.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Master Course Showcase Card: Premium Gradient Box */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-br from-slate-900 via-[#071d20] to-[#041214] border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f59b]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Video Preview Box */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-950 aspect-video flex flex-col justify-between p-5 text-white group cursor-pointer shadow-xl border border-slate-700/80">
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-600 text-white font-bold tracking-wide">
                Meta Ads Mastery
              </span>
              <span className="text-xs font-mono text-slate-300 bg-black/60 px-3 py-1 rounded-full">
                12 In-Depth Modules
              </span>
            </div>

            <div className="self-center z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00f59b] to-[#00d084] text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_25px_rgba(0,245,155,0.5)]">
                <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
              </div>
            </div>

            <div className="z-10">
              <div className="text-base sm:text-lg font-bold font-display text-white">
                Meta Ads Practical Program
              </div>
              <div className="text-xs sm:text-sm text-[#00f59b] font-medium">
                Live Frameworks For Guaranteed ROI
              </div>
            </div>
          </div>

          {/* Checklist & CTA */}
          <div className="md:col-span-6 space-y-6 text-white">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f59b]/15 border border-[#00f59b]/30 text-[#00f59b] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Prior Experience Needed</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-tight">
                Transform Your Advertising Skills
              </h3>
            </div>

            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-slate-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[#00f59b] flex items-center justify-center shrink-0 border border-emerald-500/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_6px_25px_rgba(0,245,155,0.4)] active:scale-[0.98] transition-all cursor-pointer uppercase tracking-wider"
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
