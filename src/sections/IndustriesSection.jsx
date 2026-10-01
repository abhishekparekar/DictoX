import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  UtensilsCrossed, 
  Dumbbell, 
  Sparkles, 
  Car, 
  Store, 
  ShoppingCart, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function IndustriesSection({ onOpenConsultation }) {
  const industries = [
    {
      id: 'real-estate',
      num: '01',
      title: 'Real Estate',
      outcome: 'Verified site visits & buyer inquiries',
      icon: Building2,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      id: 'education',
      num: '02',
      title: 'Education & EdTech',
      outcome: 'Cohort enrollments & masterclass signups',
      icon: GraduationCap,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      id: 'healthcare',
      num: '03',
      title: 'Healthcare & Clinics',
      outcome: 'Doctor consultations & patient appointments',
      icon: HeartPulse,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      id: 'restaurants',
      num: '04',
      title: 'Restaurants & Cafés',
      outcome: 'Table bookings & weekend footfall',
      icon: UtensilsCrossed,
      color: 'text-orange-600 bg-orange-50 border-orange-200',
    },
    {
      id: 'fitness',
      num: '05',
      title: 'Gyms & Fitness',
      outcome: 'Trial passes & membership sales',
      icon: Dumbbell,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
    },
    {
      id: 'salons',
      num: '06',
      title: 'Salons & Local Services',
      outcome: 'Walk-in appointments & package sales',
      icon: Sparkles,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      id: 'automobile',
      num: '07',
      title: 'Automobile & EV',
      outcome: 'Showroom footfall & test drive bookings',
      icon: Car,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
    },
    {
      id: 'franchise',
      num: '08',
      title: 'Franchise & Dealerships',
      outcome: 'Investor discovery & franchise unit sales',
      icon: Store,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    },
    {
      id: 'ecommerce',
      num: '09',
      title: 'E-commerce & Online Stores',
      outcome: 'High-ROAS purchases & repeat buyer flows',
      icon: ShoppingCart,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      id: 'b2b',
      num: '10',
      title: 'B2B & Professional Services',
      outcome: 'Decision-maker calls & contract pipelines',
      icon: Briefcase,
      color: 'text-slate-800 bg-slate-100 border-slate-200',
    },
  ];

  return (
    <section id="industries" className="py-10 sm:py-14 md:py-18 relative w-full overflow-hidden bg-slate-50/60 border-t border-slate-200/80">
      {/* Subtle top ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[220px] bg-gradient-to-b from-blue-100/35 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Subheading */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            INDUSTRIES WE WORK WITH
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Industries We{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Work With.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            We help businesses across different industries reach potential customers and grow through performance marketing.
          </p>
        </AnimatedSection>

        {/* 10 Industry Directory Grid (2-col mobile, 5-col desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3.5">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.id}
                direction="up"
                delay={idx * 0.03}
                className="h-full"
              >
                <div
                  onClick={onOpenConsultation}
                  className="h-full p-2.5 sm:p-4 rounded-2xl border border-slate-200/90 bg-white hover:bg-blue-50/50 hover:border-[#0011a8]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left shadow-2xs hover:shadow-md hover:-translate-y-0.5"
                >
                  <div>
                    {/* Top Row: Icon & Number */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 shadow-2xs ${item.color}`}>
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 group-hover:text-[#0011a8] transition-colors">
                        {item.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-[#0011a8] transition-colors leading-tight mb-1">
                      {item.title}
                    </h3>

                    {/* Outcome */}
                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                      {item.outcome}
                    </p>
                  </div>

                  {/* Micro action prompt */}
                  <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-[#0011a8] transition-colors">
                    <span>Explore Strategy</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
