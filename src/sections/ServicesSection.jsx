import React from 'react';
import { 
  TrendingUp, 
  Palette, 
  Share2, 
  Cpu, 
  Search, 
  Zap, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection({ onOpenConsultation }) {
  const services = [
    {
      id: 'meta-ads',
      icon: TrendingUp,
      title: 'Strategic Marketing',
      desc: 'Catapult your brand into the spotlight with our data-backed Meta & Google ad strategies — precision targeting engineered for predictable customer acquisition.',
    },
    {
      id: 'creative-design',
      icon: Palette,
      title: 'Creative Design',
      desc: 'High-converting ad creatives, scroll-stopping video hooks, and graphics — we make your audience stop, engage, and take immediate action.',
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media Management',
      desc: 'Hands-free social growth! While you focus on running your business, we make sure your brand identity shines across Facebook, Instagram, and LinkedIn.',
    },
    {
      id: 'technical-solutions',
      icon: Cpu,
      title: 'Technical Solutions',
      desc: 'From custom landing pages to seamless Conversions API & Meta Pixel tracking, we eliminate digital drop-offs and optimize your conversion funnel.',
    },
    {
      id: 'google-seo',
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      desc: 'Boost your digital visibility! We spruce up your organic rankings and Google Search Ads so high-intent customers find you first.',
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'Automation Services',
      desc: 'Automagically enhance efficiency! Our WhatsApp API & CRM lead routing tricks make your lead-to-close process smoother and faster than ever.',
    },
  ];

  return (
    <section id="services" className="py-6 sm:py-9 md:py-12 relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Heading — Signature Style with Brand Colors */}
        <div className="text-center mb-5 sm:mb-8">
          <span className="inline-block text-xs font-bold tracking-widest text-[#0011a8] uppercase mb-1">
            Full-Funnel Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Our Performance{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 mt-1.5 max-w-xl mx-auto leading-relaxed font-medium">
            Engineered from creative to conversion for maximum return on advertising spend.
          </p>
        </div>

        {/* Compact Floating White Card Container (No giant empty space) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          
          {/* Subtle Center Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-gradient-to-r from-blue-300/10 to-emerald-300/10 rounded-full blur-[80px] pointer-events-none" />

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-4 sm:gap-y-6 relative z-10">
            {services.map((service, sIdx) => {
              const Icon = service.icon;
              const isEven = sIdx % 2 === 0;
              return (
                <div key={service.id} className="flex items-start gap-3 sm:gap-3.5 group p-2.5 rounded-xl hover:bg-slate-50/70 transition-all">
                  {/* Brand Accent Icon (Alternating royal blue & growth green) */}
                  <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-2xs ${
                    isEven ? 'bg-blue-50 text-[#0011a8] border border-blue-100' : 'bg-emerald-50 text-[#00a63e] border border-emerald-100'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 group-hover:text-[#0011a8] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Pill */}
          <div className="mt-5 sm:mt-7 pt-4 border-t border-slate-100 text-center relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-slate-800 bg-white border border-slate-200/90 hover:border-[#0011a8] hover:text-[#0011a8] shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <span>Want to discuss?</span>
              <strong className="underline text-slate-950 hover:text-[#0011a8]">Let's Schedule a Call</strong>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <Link
              to="/services"
              className="text-xs font-bold text-[#0011a8] hover:text-blue-700 py-1.5 px-3"
            >
              Explore Detailed Service Breakdown →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
