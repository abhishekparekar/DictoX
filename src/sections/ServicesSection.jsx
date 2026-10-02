import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  Search, 
  Zap, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function ServicesSection({ onOpenConsultation }) {
  const services = [
    {
      num: '01',
      id: 'meta-ads',
      badge: 'META ADS',
      subtitle: 'Facebook & Instagram Advertising',
      title: 'Meta Ads',
      tagline: 'Reach Potential Customers, Generate Leads & Drive Sales',
      desc: 'We help businesses use Meta Ads to reach the right audience, generate potential leads, drive sales and grow their customer base.',
      icon: Layers,
      color: 'bg-blue-50 text-[#0011a8] border-blue-100',
      badgeColor: 'bg-blue-50 text-[#0011a8] border-blue-200',
      link: '/services?service=meta-ads',
    },
    {
      num: '02',
      id: 'google-ads',
      badge: 'GOOGLE & YOUTUBE ADS',
      subtitle: 'Google & YouTube Advertising',
      title: 'Google & YouTube Ads',
      tagline: 'Reach Potential Customers When They’re Searching & Watching',
      desc: 'We help businesses reach potential customers on Google and YouTube, generate enquiries, drive website traffic and increase online sales.',
      icon: Search,
      color: 'bg-emerald-50 text-[#00a63e] border-emerald-100',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      link: '/services?service=google-ads',
    },
    {
      num: '03',
      id: 'whatsapp-api',
      badge: 'WHATSAPP API',
      subtitle: 'Official WhatsApp API Solutions',
      title: 'WhatsApp API',
      tagline: 'Turn Customer Enquiries Into Faster Conversations & Better Follow-Ups',
      desc: 'We help businesses use the official WhatsApp Business API to automate communication, respond faster and manage customer conversations at scale.',
      icon: WhatsAppIcon,
      color: 'bg-green-50 text-emerald-600 border-green-100',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      link: '/services?service=whatsapp-api',
    },
    {
      num: '04',
      id: 'automation',
      badge: 'MARKETING AUTOMATION',
      subtitle: 'Marketing Automation & CRM Funnels',
      title: 'Marketing Automation',
      tagline: 'Automate Your Lead Follow-Up & Turn More Enquiries Into Customers',
      desc: 'We help businesses automate lead management, follow-ups and customer communication so your team can respond faster and manage every enquiry more efficiently.',
      icon: Zap,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      link: '/services?service=automation',
    },
    {
      num: '05',
      id: 'personal-branding',
      badge: 'PERSONAL BRANDING',
      subtitle: 'Personal Branding & Executive Presence',
      title: 'Personal Branding',
      tagline: 'Build Trust, Authority & Visibility',
      desc: 'Build your personal brand with strategic content, professional videos and consistent social media presence that commands industry authority.',
      icon: Sparkles,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      link: '/services?service=personal-branding',
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

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-black font-semibold max-w-2xl mx-auto leading-relaxed">
            Everything you need to attract potential customers, manage leads and grow through digital advertising.
          </p>
        </AnimatedSection>

        {/* 6-Box Grid: 5 Service Cards + 1 Dedicated High-Conversion CTA Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <AnimatedSection
                key={service.id}
                direction="up"
                delay={idx * 0.05}
                className="h-full"
              >
                <Link
                  to={service.link}
                  className="h-full bg-white rounded-2xl border border-slate-200/90 hover:border-[#0011a8]/60 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,17,168,0.08)] hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden text-left block"
                >
                  
                  {/* Subtle hover accent light */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Row: Number, Subtitle Badge & Icon */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-mono font-bold text-black group-hover:text-[#0011a8] transition-colors">
                          {service.num} —
                        </span>
                        <span className={`text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border ${service.badgeColor} uppercase tracking-wider truncate max-w-[170px]`}>
                          {service.badge}
                        </span>
                      </div>
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-2xs shrink-0 ${service.color}`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-[#0011a8] transition-colors leading-tight mb-1.5">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm font-semibold text-[#0011a8] mb-2 leading-snug">
                      {service.tagline}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-black leading-relaxed font-medium line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  {/* Micro Link / CTA to Full Details */}
                  <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-black group-hover:text-[#0011a8] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] font-semibold text-black group-hover:text-[#0011a8] transition-colors">
                      Full Details →
                    </span>
                  </div>

                </Link>
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
                  <span>Explore All Services</span>
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
