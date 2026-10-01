import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  Search, 
  Zap, 
  Sparkles 
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function ServicesSection({ onOpenConsultation }) {
  const services = [
    {
      num: '01',
      id: 'meta-ads',
      title: 'Meta Ads',
      tagline: 'Reach Potential Customers On Facebook & Instagram',
      desc: 'Run targeted Meta campaigns designed to generate potential leads and customers for your business.',
      icon: Layers,
      color: 'bg-blue-50 text-[#0011a8] border-blue-100',
    },
    {
      num: '02',
      id: 'google-youtube-ads',
      title: 'Google & YouTube Ads',
      tagline: 'Reach Customers When They’re Searching',
      desc: 'Connect with people actively searching for your products or services through Google and YouTube Ads.',
      icon: Search,
      color: 'bg-emerald-50 text-[#00a63e] border-emerald-100',
    },
    {
      num: '03',
      id: 'whatsapp-api',
      title: 'WhatsApp API',
      tagline: 'Turn Enquiries Into Faster Conversations',
      desc: 'Connect your advertising with WhatsApp to respond faster and manage customer conversations more efficiently.',
      icon: WhatsAppIcon,
      color: 'bg-green-50 text-emerald-600 border-green-100',
    },
    {
      num: '04',
      id: 'automation-services',
      title: 'Automation Services',
      tagline: 'Automate Your Marketing & Lead Management',
      desc: 'Reduce repetitive work and streamline your lead follow-up with WhatsApp, CRM and marketing automation.',
      icon: Zap,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      num: '05',
      id: 'personal-branding',
      title: 'Personal Branding',
      tagline: 'Build Trust, Authority & Visibility',
      desc: 'Build your personal brand with strategic content, professional videos and consistent social media presence.',
      icon: Sparkles,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 relative w-full overflow-hidden bg-slate-50/50 border-t border-slate-200/80">
      {/* Subtle top ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/35 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subheading */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
           SERVICES
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Our Performance{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Marketing Services.
            </span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to attract potential customers, manage leads and grow through digital advertising.
          </p>
        </AnimatedSection>

        {/* 6-Box Grid: 5 Service Cards + 1 Dedicated High-Conversion CTA Box (2x3 tablet, 3x2 desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <AnimatedSection
                key={service.id}
                direction="up"
                delay={idx * 0.05}
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl border border-slate-200/90 hover:border-[#0011a8]/60 p-4 sm:p-6 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,17,168,0.08)] hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden text-left">
                  
                  {/* Subtle hover accent light */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs sm:text-sm font-mono font-bold text-slate-400 group-hover:text-[#0011a8] transition-colors">
                        {service.num} —
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-2xs ${service.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-[#0011a8] transition-colors leading-tight mb-1.5">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm font-semibold text-[#0011a8] mb-2.5 leading-snug">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {/* Micro Link */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-[#0011a8] transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                </div>
              </AnimatedSection>
            );
          })}

          {/* 6th Card: Dedicated High-Conversion CTA Box */}
          <AnimatedSection direction="up" delay={0.25} className="h-full">
            <div className="h-full bg-gradient-to-br from-[#090d16] via-[#0d163f] to-[#090d16] text-white rounded-2xl border border-blue-900/40 p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group text-left">
              
              {/* Glowing ambient background glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-44 h-44 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3">
                  Custom Strategy
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight mb-2">
                  Want To Grow Your Business With Better Advertising?
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                  Let's audit your current ad spend, diagnose conversion leaks, and build a predictable client acquisition roadmap.
                </p>
              </div>

              <div className="relative z-10 space-y-2.5 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#00a63e] hover:bg-[#008f35] active:scale-[0.98] text-white px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  <span>Get Free Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white py-1.5 transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
