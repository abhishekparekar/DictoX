import React from 'react';
import { ArrowRight, MessageSquare, Bot, CheckCircle2, Sparkles, Search, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection({ onOpenConsultation }) {
  const services = [
    {
      id: 'meta',
      title: 'Meta Ads',
      subtitle: 'Facebook & Instagram Ads',
      desc: 'Reach high-intent audiences on Instagram and Facebook with conversion-optimized creatives and instant lead funnels.',
      tag: 'Meta Partner',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      features: [
        'Custom & Lookalike Targeting',
        'High-Converting Reels & Creatives',
        'Instant Forms & Direct Retargeting',
      ],
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white font-bold text-xs shadow-sm shrink-0">
          IG
        </div>
      ),
      hoverBorder: 'hover:border-blue-400',
    },
    {
      id: 'google',
      title: 'Google & YouTube Ads',
      subtitle: 'Search + Video Campaigns',
      desc: 'Capture ready-to-buy customers actively searching for your services on Google Search, Maps, and YouTube.',
      tag: 'High-Intent Search',
      tagColor: 'bg-red-50 text-red-700 border-red-200',
      features: [
        'Commercial Keyword Search Ads',
        'Google Maps Local Pack Ads',
        'YouTube In-Stream Video Ads',
      ],
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-rose-700 flex items-center justify-center text-white font-black text-xs shadow-sm shrink-0">
          YT
        </div>
      ),
      hoverBorder: 'hover:border-red-400',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp API',
      subtitle: 'Connect → Follow Up → Convert',
      desc: 'Instant automated welcome, verification, and lead qualification via official Meta WhatsApp Business API.',
      tag: '98% Open Rate',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      features: [
        'Automated Instant Welcome Bot',
        'Green Tick Verified Meta API',
        'Broadcasts & Smart Drip Sequences',
      ],
      icon: (
        <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-sm shrink-0">
          <MessageSquare className="w-5 h-5 fill-white" />
        </div>
      ),
      hoverBorder: 'hover:border-emerald-400',
    },
    {
      id: 'automation',
      title: 'Automation Services',
      subtitle: 'Save Time, Grow Faster',
      desc: 'Auto-sync incoming leads to Google Sheets, CRM, and sales reps within seconds with zero manual friction.',
      tag: '24/7 CRM Sync',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      features: [
        'Instant Multi-Channel CRM Sync',
        'Speed-To-Lead Alert System',
        'Zero Manual Data Entry Workflows',
      ],
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-700 flex items-center justify-center text-white shadow-sm shrink-0">
          <Bot className="w-5 h-5" />
        </div>
      ),
      hoverBorder: 'hover:border-purple-400',
    },
  ];

  return (
    <section id="services" className="py-10 sm:py-14 md:py-16 bg-[#fafcfb] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#00b370]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Capabilities</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              Performance Marketing Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl">
              Engineered to turn ad spend into qualified inquiries, predictable sales, and measurable revenue growth.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00b370] transition-colors group cursor-pointer self-start sm:self-auto shrink-0 pb-1"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#00b370]" />
          </Link>
        </div>

        {/* 4 Crisp, Compact Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {services.map((item) => (
            <div
              key={item.id}
              className={`bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${item.hoverBorder}`}
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {item.icon}
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Service Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 group-hover:text-slate-950 transition-colors leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#00b370] mt-0.5 mb-2.5">
                  {item.subtitle}
                </div>

                {/* Clear 1-2 sentence description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>

                {/* Micro Features Checklist */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00b370] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_4px_16px_rgba(0,245,155,0.3)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

