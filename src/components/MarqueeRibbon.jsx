import React from 'react';
import { Layers, Search, TrendingUp, Sparkles } from 'lucide-react';

export default function MarqueeRibbon() {
  const coreServices = [
    { title: 'Meta Ads Mastery', icon: Layers, accent: 'text-blue-400' },
    { title: 'Google Performance Max', icon: Search, accent: 'text-emerald-400' },
    { title: 'High ROAS Campaigns', icon: TrendingUp, accent: 'text-blue-400' },
    { title: 'Creative Video Strategy', icon: Sparkles, accent: 'text-emerald-400' },
  ];

  // Repeat for continuous seamless marquee track (2 identical halves of 4 repetitions each)
  const singleCycle = [...coreServices, ...coreServices, ...coreServices, ...coreServices];
  const duplicatedItems = [...singleCycle, ...singleCycle];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#030712] via-[#080e28] to-[#030712] border-y border-blue-900/30 py-3 sm:py-3.5 select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,17,168,0.15)]">
      
      {/* Brand Dual Ambient Glow in Ribbon */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-10 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-10 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Smooth Edge Vignette Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none" />

      {/* Continuous Marquee Track */}
      <div className="flex w-max animate-marquee items-center gap-5 sm:gap-7 relative z-10">
        {duplicatedItems.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="inline-flex items-center gap-5 sm:gap-7">
              {/* Service Glass Pill Card */}
              <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-emerald-400/40 backdrop-blur-md transition-all duration-200 group cursor-default shadow-xs">
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${service.accent} shrink-0 group-hover:scale-110 transition-transform`} />
                <span className="text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                  {service.title}
                </span>
              </div>

              {/* Glowing Pulse Separator Dot */}
              <span
                className={`inline-flex items-center justify-center w-1.5 h-1.5 rounded-full ${
                  index % 2 === 0
                    ? 'bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]'
                    : 'bg-[#00a63e] shadow-[0_0_8px_#00a63e]'
                }`}
                aria-hidden="true"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
