import React, { useState } from 'react';
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
  ArrowRight,
  CheckCircle2,
  Zap
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function IndustriesSection({ onOpenConsultation }) {
  const industries = [
    {
      id: 'real-estate',
      num: '01',
      title: 'Real Estate',
      outcome: 'Verified site visits & buyer inquiries',
      funnel: 'Meta Instant Forms + Google Search Ads + CAPI',
      icon: Building2,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      id: 'healthcare',
      num: '02',
      title: 'Healthcare & Clinics',
      outcome: 'Doctor consultations & patient appointments',
      funnel: 'Local Search Ads + WhatsApp Booking API',
      icon: HeartPulse,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      id: 'education',
      num: '03',
      title: 'Education & EdTech',
      outcome: 'Cohort enrollments & masterclass signups',
      funnel: 'Webinar Funnel + Automated SMS/WhatsApp Reminders',
      icon: GraduationCap,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      id: 'automobile',
      num: '04',
      title: 'Automobile & EV',
      outcome: 'Showroom footfall & test drive bookings',
      funnel: 'Geo-Targeted Lead Ads + Dealership CRM Sync',
      icon: Car,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
    },
    {
      id: 'ecommerce',
      num: '05',
      title: 'E-Commerce Brands',
      outcome: 'High-ROAS purchases & repeat buyer flows',
      funnel: 'Catalog Sales + Advantage+ Shopping + Retargeting',
      icon: ShoppingCart,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      id: 'restaurants',
      num: '06',
      title: 'Restaurants & Cafés',
      outcome: 'Table bookings & catering inquiries',
      funnel: 'Instagram Reels Ads + Location Radius Pinning',
      icon: UtensilsCrossed,
      color: 'text-orange-600 bg-orange-50 border-orange-200',
    },
    {
      id: 'fitness',
      num: '07',
      title: 'Gyms & Fitness',
      outcome: 'Trial passes & membership sales',
      funnel: 'Free Day Pass Lead Forms + Automated WhatsApp Nudge',
      icon: Dumbbell,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
    },
    {
      id: 'salons',
      num: '08',
      title: 'Salons & Aesthetics',
      outcome: 'Walk-in appointments & package sales',
      funnel: 'Direct-to-WhatsApp Ads + Before/After Creative Hook',
      icon: Sparkles,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      id: 'retail',
      num: '09',
      title: 'Franchise & Retail',
      outcome: 'Investor discovery & franchise unit sales',
      funnel: 'High-Ticket Investor Landing Page + Verification Call',
      icon: Store,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
    },
    {
      id: 'b2b',
      num: '10',
      title: 'B2B & Professional',
      outcome: 'Decision-maker calls & contract pipelines',
      funnel: 'LinkedIn + Google Search + Case Study Retargeting',
      icon: Briefcase,
      color: 'text-slate-800 bg-slate-100 border-slate-200',
    },
  ];

  return (
    <section id="industries" className="relative py-4 sm:py-6 md:py-8 w-full overflow-hidden">
      {/* Subtle top aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/30 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header — Left-Aligned Signature Style */}
        <AnimatedSection direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-3 sm:mb-5 text-left">
          <div>
            <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0011a8] block mb-1">
              SECTORS WE SCALE
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
              Specialized Playbooks For{' '}
              <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                Your Industry.
              </span>
            </h2>
          </div>

          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0011a8] hover:text-blue-800 transition-colors cursor-pointer group self-start sm:self-auto shrink-0"
          >
            <span>Browse All 10 Sectors</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>

        {/* Space-Saving Compact Directory Grid (10 Slim Micro-Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={onOpenConsultation}
                className="p-2 sm:p-2.5 rounded-xl border border-slate-200/90 bg-white hover:bg-blue-50/60 hover:border-blue-300 transition-all duration-200 cursor-pointer flex items-center gap-2 group text-left shadow-2xs hover:shadow-xs"
              >
                {/* Slim Icon */}
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 ${item.color}`}>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[11.5px] sm:text-xs font-bold truncate leading-tight text-slate-950 group-hover:text-[#0011a8] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[9px] font-mono text-slate-400 shrink-0 ml-1">
                      {item.num}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 truncate leading-tight mt-0.5">
                    {item.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
