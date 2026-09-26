import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  UtensilsCrossed, 
  Dumbbell, 
  Scissors, 
  Car, 
  Store, 
  ShoppingCart, 
  Briefcase 
} from 'lucide-react';

export default function IndustriesSection({ onOpenConsultation }) {
  const industries = [
    { title: 'Real Estate', tag: 'Site Visits & Buyers', icon: Building2 },
    { title: 'Education & Coaching', tag: 'Student Admissions', icon: GraduationCap },
    { title: 'Healthcare & Clinics', tag: 'Patient Consultations', icon: HeartPulse },
    { title: 'Restaurants & Cafés', tag: 'Footfall & Bookings', icon: UtensilsCrossed },
    { title: 'Gyms & Fitness', tag: 'Memberships & Trials', icon: Dumbbell },
    { title: 'Salons & Services', tag: 'Appointments & Walk-ins', icon: Scissors },
    { title: 'Automobile Dealerships', tag: 'Test Drives & Sales', icon: Car },
    { title: 'Franchise & Retail', tag: 'Investor & Store Leads', icon: Store },
    { title: 'E-commerce Brands', tag: 'Profitable ROAS & Orders', icon: ShoppingCart },
    { title: 'Professional B2B', tag: 'High-Ticket Retainers', icon: Briefcase },
  ];

  return (
    <section id="industries" className="py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00b370]">
            Industries We Work With
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
            Tailored Advertising Strategies For Every Sector
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5">
            Deep domain expertise across 10 core business verticals in India.
          </p>
        </div>

        {/* 10 Industries in a Balanced 5x2 / 3-col / 2-col Grid (No Squished Strip) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                onClick={onOpenConsultation}
                className="flex flex-col items-center justify-between p-5 rounded-2xl bg-gradient-to-b from-white via-slate-50/80 to-slate-100/40 border border-slate-200/90 hover:border-[#00b370] hover:shadow-lg transition-all duration-300 group text-center cursor-pointer hover:-translate-y-1 relative shadow-xs"
              >
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-[#00b370] group-hover:scale-110 transition-transform shadow-2xs mb-3.5">
                  <Icon className="w-6 h-6" />
                </div>
                
                <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-slate-950 leading-tight mb-2">
                  {item.title}
                </span>

                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 group-hover:bg-[#00f59b]/20 group-hover:text-slate-950 px-2.5 py-1 rounded-full transition-colors mt-auto">
                  {item.tag}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
