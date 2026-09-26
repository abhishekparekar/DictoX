import React from 'react';
import { ShieldCheck } from 'lucide-react';

const brands = [
  { name: 'Kulkarni Builders', category: 'Real Estate' },
  { name: 'Aura Smile Clinics', category: 'Healthcare' },
  { name: 'SkillForge Tech', category: 'Education' },
  { name: 'EcoDrive Motors', category: 'Automobile' },
  { name: 'FitPulse Studios', category: 'Gym & Fitness' },
  { name: 'Urban Dine Café', category: 'Hospitality' },
  { name: 'Goyal & Landmark', category: 'Real Estate' },
  { name: 'PrimeCare Hospitals', category: 'Healthcare' },
  { name: 'Apex Career Academy', category: 'Education' },
  { name: 'Luxe Salon & Spa', category: 'Wellness' },
  { name: 'Mahindra Dealer PCMC', category: 'Automobile' },
  { name: 'Deshmukh Dental', category: 'Healthcare' }
];

export default function LogoWall() {
  return (
    <section className="py-16 bg-brand-surface/30 border-y border-brand-border/60">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-[11px] font-mono tracking-widest uppercase text-brand-emerald font-semibold">
            Track Record Across India
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Trusted By 500+ Brands & Growing
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            From local Pune regional leaders to high-growth Indian enterprises across real estate, education, healthcare, and retail.
          </p>
        </div>

        {/* Clean Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {brands.map((b, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-brand-dark/70 border border-brand-border/70 flex flex-col items-center justify-center text-center group hover:border-brand-emerald/40 hover:bg-brand-surface transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-display font-bold text-xs text-zinc-400 group-hover:text-brand-emerald transition-colors">
                {b.name.substring(0, 2).toUpperCase()}
              </div>
              <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors mt-2">
                {b.name}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono mt-0.5">
                {b.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-brand-emerald" />
          <span>Real, authorized business collaborations across Maharashtra and pan-India.</span>
        </div>
      </div>
    </section>
  );
}
