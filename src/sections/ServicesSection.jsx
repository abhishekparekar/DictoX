import React from 'react';
import { servicesData } from '../data/services';
import { ArrowRight, CheckCircle2, Layers, Search, MessageSquare, Cpu, Sparkles } from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Search: Search,
  MessageCircle: MessageSquare,
  Cpu: Cpu
};

export default function ServicesSection({ onOpenConsultation }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-brand-border/60">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-brand-emerald text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Funnel Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              Performance Marketing Services
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              We engineer specialized advertising campaigns built around your unit economics — turning strangers into verified leads, bookings, and paying customers.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenConsultation}
              className="btn-primary text-xs sm:text-sm font-semibold !py-3 !px-6 flex items-center gap-2"
            >
              <span>Explore Custom Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-12">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Layers;
            return (
              <div
                key={service.id}
                className="group relative bg-brand-surface/90 border border-brand-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 card-hover-glow flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-brand-border/60">
                    <div className="w-12 h-12 rounded-2xl bg-brand-dark border border-brand-border flex items-center justify-center text-brand-emerald group-hover:scale-110 group-hover:border-brand-emerald/50 transition-all duration-300 shadow-glow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 font-medium">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-5">
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      {service.tagline}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1 group-hover:text-brand-emerald transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Main Description */}
                  <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-6 pt-5 border-t border-brand-border/40 space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric & Action */}
                <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <div className="text-xs font-medium text-brand-emerald/90 flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                    <span>{service.metrics}</span>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold text-white group-hover:text-brand-emerald flex items-center gap-1 transition-colors"
                  >
                    <span>Enquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
