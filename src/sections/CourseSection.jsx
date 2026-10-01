import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Settings, 
  Target, 
  UserPlus, 
  Palette, 
  TrendingUp,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function CourseSection({ onOpenConsultation }) {
  const topics = [
    { 
      num: '01',
      title: 'Campaign Setup', 
      desc: 'Proper ad account structure, pixel configuration & Conversions API tracking setup.',
      icon: Settings,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    { 
      num: '02',
      title: 'Audience Targeting', 
      desc: 'Demographic layering, interest research, and high-intent lookalike audience creation.',
      icon: Target,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    { 
      num: '03',
      title: 'Lead Generation', 
      desc: 'High-converting instant lead forms, qualifying questions & immediate follow-up funnels.',
      icon: UserPlus,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    { 
      num: '04',
      title: 'Creative Strategy', 
      desc: 'Scroll-stopping video hooks, ad copywriting formulas & visual creative testing.',
      icon: Palette,
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    { 
      num: '05',
      title: 'Campaign Optimization', 
      desc: 'Budget allocation rules, cutting losing ad sets, and scaling winning campaigns profitably.',
      icon: TrendingUp,
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
  ];

  return (
    <section id="course" className="py-10 sm:py-14 md:py-18 relative w-full overflow-hidden bg-slate-50/50 border-t border-slate-200/80">
      {/* Subtle top ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/35 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Subheading */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            META ADS COURSE
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Meta Ads For{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Business Owners.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Learn How To Generate Customers Using Facebook & Instagram Ads
          </p>
        </AnimatedSection>

        {/* Course Card Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-5 sm:p-7 lg:p-9 relative overflow-hidden">
          
          <div className="mb-6 flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0011a8] block mb-0.5">
                Practical Training Covering:
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-950">
                5 Core Practical Pillars Every Founder Must Master
              </h3>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#00a63e] text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enrollment Open</span>
            </div>
          </div>

          {/* 5 Practical Training Modules Grid (2-col mobile, 5-col desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4">
            {topics.map((t, idx) => {
              const Icon = t.icon;
              return (
                <AnimatedSection
                  key={t.title}
                  direction="up"
                  delay={idx * 0.04}
                  className={`h-full ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <div className="h-full p-3 sm:p-4 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-[#0011a8]/60 transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md hover:-translate-y-1 text-left">
                    <div>
                      {/* Top Row: Icon & Number */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 shadow-2xs ${t.color}`}>
                          <Icon className="w-4 h-4 stroke-[2]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#0011a8] transition-colors">
                          {t.num}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-sm font-bold text-slate-950 group-hover:text-[#0011a8] transition-colors leading-tight mb-1.5">
                        {t.title}
                      </h4>

                      {/* Desc */}
                      <p className="text-[11.5px] text-slate-600 leading-snug font-normal">
                        {t.desc}
                      </p>
                    </div>

                    <div className="pt-2.5 mt-2.5 border-t border-slate-200/80 flex items-center gap-1 text-[10.5px] font-bold text-slate-500 group-hover:text-[#0011a8] transition-colors">
                      <Check className="w-3 h-3 text-[#00a63e]" />
                      <span>Hands-on practice</span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-950 leading-tight">
                Want to run high-converting Meta Ads for your own business?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Join our founder-led practical masterclass with real case studies and ad templates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <Link
                to="/course"
                className="w-full sm:w-auto bg-[#0011a8] hover:bg-blue-900 active:scale-[0.98] text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Course</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer text-center"
              >
                Inquire With Suresh
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
