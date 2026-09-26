import React from 'react';
import { industriesData } from '../data/industries';
import {
  Building2, GraduationCap, Stethoscope, UtensilsCrossed, Dumbbell,
  Scissors, Car, Network, ShoppingBag, Briefcase, ArrowRight, CheckCircle2
} from 'lucide-react';

const iconMap = {
  Building2,
  GraduationCap,
  Stethoscope,
  UtensilsCrossed,
  Dumbbell,
  Scissors,
  Car,
  Network,
  ShoppingBag,
  Briefcase
};

export default function IndustriesSection({ onOpenConsultation }) {
  return (
    <section id="industries" className="py-20 md:py-28 bg-[#F5F8F7] text-[#0A1714] relative">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider font-mono">
            <span>Specialized Domain Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0A1714] tracking-tight">
            Industries We Work With
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Performance marketing is not one-size-fits-all. We adapt customer psychology, creative hooks, and follow-up sequences to your specific sector.
          </p>
        </div>

        {/* 10 Industries Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industriesData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Building2;
            return (
              <div
                key={idx}
                className="group bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-brand-emerald hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-brand-emerald group-hover:text-brand-dark transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold font-display text-zinc-900 mt-4 group-hover:text-emerald-800 transition-colors">
                    {item.name}
                  </h3>

                  <div className="text-[11px] font-mono font-medium text-emerald-700 mt-0.5">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-zinc-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500 font-medium">
                  <span className="truncate">{item.leadsType}</span>
                  <span className="text-emerald-700 font-bold">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-brand-dark text-white border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Don’t See Your Specific Industry Listed?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Our direct-response advertising methodology applies to any business requiring qualified inquiries and customers.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="btn-primary text-xs sm:text-sm font-semibold !py-3 !px-6 whitespace-nowrap"
          >
            <span>Consult On Your Niche</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
