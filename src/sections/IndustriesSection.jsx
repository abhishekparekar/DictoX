import React from 'react';
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
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function IndustriesSection({ onOpenConsultation }) {
  const industries = [
    {
      num: '01',
      title: 'Real Estate',
      outcome: 'Verified site visits & buyer inquiries',
      icon: Building2,
      color: 'text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-600',
    },
    {
      num: '02',
      title: 'Healthcare & Clinics',
      outcome: 'Doctor consultations & patient appointments',
      icon: HeartPulse,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-[#00a63e]',
    },
    {
      num: '03',
      title: 'Education & EdTech',
      outcome: 'Cohort enrollments & masterclass signups',
      icon: GraduationCap,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600',
    },
    {
      num: '04',
      title: 'Automobile & EV',
      outcome: 'Showroom footfall & home test drives',
      icon: Car,
      color: 'text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-600',
    },
    {
      num: '05',
      title: 'E-Commerce Brands',
      outcome: 'High ROAS orders & repeat purchaser funnels',
      icon: ShoppingCart,
      color: 'text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-600',
    },
    {
      num: '06',
      title: 'Restaurants & Cafés',
      outcome: 'Table bookings, orders & event inquiries',
      icon: UtensilsCrossed,
      color: 'text-orange-600 bg-orange-50 border-orange-100 group-hover:bg-orange-600',
    },
    {
      num: '07',
      title: 'Gyms & Fitness',
      outcome: 'Trial passes & annual membership sales',
      icon: Dumbbell,
      color: 'text-teal-600 bg-teal-50 border-teal-100 group-hover:bg-teal-600',
    },
    {
      num: '08',
      title: 'Salons & Aesthetics',
      outcome: 'High-ticket walk-in appointments & packages',
      icon: Sparkles,
      color: 'text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-600',
    },
    {
      num: '09',
      title: 'Franchise & Retail',
      outcome: 'Investor discovery & franchise unit sales',
      icon: Store,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100 group-hover:bg-cyan-600',
    },
    {
      num: '10',
      title: 'B2B & Professional',
      outcome: 'Decision-maker calls & contract pipelines',
      icon: Briefcase,
      color: 'text-slate-800 bg-slate-100 border-slate-200 group-hover:bg-slate-900',
    },
  ];

  return (
    <section id="industries" className="relative py-4 sm:py-7 md:py-9 w-full overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-5">
          <span className="inline-block text-[10.5px] sm:text-xs font-bold tracking-widest text-[#0011a8] uppercase mb-0.5">
            Sectors We Scale
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-slate-950 leading-tight">
            Specialized Playbooks For{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Your Industry.
            </span>
          </h2>
          <p className="mt-1 text-[11px] sm:text-xs md:text-sm text-slate-600 font-medium">
            Custom-tailored acquisition funnels designed for specific buyer behaviors:
          </p>
        </AnimatedSection>

        {/* Mobile View: Top 6 Sectors (md:hidden) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {industries.slice(0, 6).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  onClick={onOpenConsultation}
                  className="bg-white rounded-xl p-2.5 border border-slate-200/90 shadow-2xs group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${item.color}`}>
                        <Icon className="w-3.5 h-3.5 stroke-[2]" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-xs font-bold text-slate-950 mb-0.5 group-hover:text-[#0011a8] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-[10px] text-slate-500 leading-tight font-normal line-clamp-2">
                      {item.outcome}
                    </p>
                  </div>

                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-[#0011a8]">
                    <span>Playbook</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2.5">
            <Link
              to="/industries"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#0011a8] bg-white hover:bg-blue-50/50 border border-slate-200 flex items-center justify-center gap-1.5 shadow-2xs transition-all"
            >
              <span>Explore All 10 Sectors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop View: Full-Width 5x2 Interactive Industry Cards Grid (hidden md:grid) */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.title}
                direction="up"
                delay={idx * 0.03}
                className="h-full"
              >
                <div
                  onClick={onOpenConsultation}
                  className="h-full bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50/40 rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 hover:border-blue-300 shadow-[0_4px_20px_rgba(0,17,168,0.03)] hover:shadow-[0_12px_30px_rgba(0,17,168,0.09)] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
                >
                  <div>
                    {/* Top Bar with Icon & Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:text-white shadow-2xs border ${item.color}`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                        {item.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm font-bold text-slate-950 mb-1 group-hover:text-[#0011a8] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Outcome Metric */}
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-snug font-normal">
                      {item.outcome}
                    </p>
                  </div>

                  {/* Bottom Action Indicator */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#0011a8] group-hover:text-blue-700">
                    <span>View Playbook</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
