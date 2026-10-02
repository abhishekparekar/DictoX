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
      desc: 'Learn how to set up your Meta advertising account and launch campaigns correctly.',
      icon: Settings,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    { 
      num: '02',
      title: 'Audience Targeting', 
      desc: 'Understand how to find and target the right audience for your business.',
      icon: Target,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    { 
      num: '03',
      title: 'Lead Generation', 
      desc: 'Learn how to generate potential leads and customers through Meta Ads.',
      icon: UserPlus,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    { 
      num: '04',
      title: 'Creative Strategy', 
      desc: 'Learn how to create effective ad creatives, videos and copy for your campaigns.',
      icon: Palette,
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    { 
      num: '05',
      title: 'Campaign Optimization', 
      desc: 'Understand campaign performance and learn how to improve your advertising results.',
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-black text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            META ADS COURSE
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-black leading-tight">
            Meta Ads For Business Owners.
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-900 font-medium max-w-2xl mx-auto leading-relaxed">
            Learn How To Generate Customers Using Facebook & Instagram Ads
          </p>
        </AnimatedSection>

        {/* Course Card Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-5 sm:p-7 lg:p-9 relative overflow-hidden">
          
          <div className="mb-6 flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black block mb-0.5">
                PRACTICAL TRAINING COVERING:
              </span>
              <h3 className="text-base sm:text-lg font-bold text-black">
                5 Core Practical Pillars Every Business Owner Should Master
              </h3>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-slate-100 text-black text-xs font-bold px-3 py-1 rounded-full border border-slate-200">
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
                  <div className="h-full p-3 sm:p-4 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-slate-400 transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md hover:-translate-y-1 text-left">
                    <div>
                      {/* Top Row: Icon & Tag */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 shadow-2xs ${t.color}`}>
                          <Icon className="w-4 h-4 stroke-[2]" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                          Module {t.num}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-sm font-bold text-black leading-tight mb-1.5">
                        <span className="text-black font-mono mr-1.5">{t.num} —</span>
                        <span>{t.title}</span>
                      </h4>

                      {/* Desc */}
                      <p className="text-[11.5px] text-slate-900 leading-snug font-medium">
                        {t.desc}
                      </p>
                    </div>

                    <div className="pt-2.5 mt-2.5 border-t border-slate-200/80 flex items-center gap-1.5 text-[10.5px] font-bold text-slate-900 transition-colors">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Hands-on Practical Learning</span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-black leading-tight">
                Want To Run Meta Ads For Your Own Business?
              </h4>
              <p className="text-xs text-slate-900 mt-1 font-medium">
                Join our practical Meta Ads training and learn the fundamentals of Facebook & Instagram advertising.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <Link
                to="/course"
                className="w-full sm:w-auto bg-[#0011a8] hover:bg-blue-900 active:scale-[0.98] text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Course →</span>
              </Link>

              <a
                href="https://wa.me/917796407424?text=Hi%20Suresh%2C%20I%20am%20interested%20in%20joining%20the%20Meta%20Ads%20For%20Business%20Owners%20training"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Inquire With Suresh →</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
