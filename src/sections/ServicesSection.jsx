import React from 'react';
import { ArrowRight, MessageSquare, Bot } from 'lucide-react';

export default function ServicesSection({ onOpenConsultation }) {
  const services = [
    {
      id: 'meta',
      title: 'Meta Ads',
      subtitle: 'Facebook & Instagram Ads',
      desc: 'Facebook & Instagram advertising focused on reaching your target audience and generating potential leads and customers.',
      badge: 'High Intent Targeting',
      visual: (
        <div className="w-full h-28 bg-gradient-to-br from-blue-50 to-indigo-50/60 rounded-xl p-3 border border-blue-100/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 p-0.5 shadow-sm">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <span className="text-sm font-black text-pink-600">IG</span>
              </div>
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Lead Ad Campaign</div>
              <div className="text-[11px] text-slate-500 font-medium">Instant Forms + Reels</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-md">
            Meta Partner
          </span>
        </div>
      ),
    },
    {
      id: 'google',
      title: 'Google & YouTube Ads',
      subtitle: 'Search + Video Ads',
      desc: 'Reach potential customers when they are actively searching for your products or services.',
      badge: 'Intent Driven',
      visual: (
        <div className="w-full h-28 bg-gradient-to-br from-red-50 to-amber-50/60 rounded-xl p-3 border border-red-100/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white font-black text-base shadow-sm">
              YT
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">High-Intent Search</div>
              <div className="text-[11px] text-slate-500 font-medium">Google Ads + YouTube</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2.5 py-1 rounded-md">
            Rank #1
          </span>
        </div>
      ),
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp API',
      subtitle: 'Connect → Follow Up → Convert',
      desc: 'Connect your advertising campaigns with WhatsApp for faster lead communication, follow-ups and customer engagement.',
      badge: '< 90s Response',
      visual: (
        <div className="w-full h-28 bg-gradient-to-br from-emerald-50 to-teal-50/60 rounded-xl p-3 border border-emerald-100/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
              <MessageSquare className="w-6 h-6 fill-white" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Auto Welcome & CRM</div>
              <div className="text-[11px] text-slate-500 font-medium">Green Tick Certified</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
            98% Open Rate
          </span>
        </div>
      ),
    },
    {
      id: 'automation',
      title: 'Automation Services',
      subtitle: 'Save Time, Grow Faster',
      desc: 'Automate repetitive marketing and lead-management processes to improve efficiency and response time.',
      badge: 'Zero Manual Work',
      visual: (
        <div className="w-full h-28 bg-gradient-to-br from-purple-50 to-violet-50/60 rounded-xl p-3 border border-purple-100/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-sm">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">CRM & Funnels</div>
              <div className="text-[11px] text-slate-500 font-medium">Pabbly, Zapier, Webhooks</div>
            </div>
          </div>
          <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-md">
            24/7 Sync
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 lg:py-28 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header with Explore Our Services link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00d084]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 mt-2">
              Performance Marketing Services
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 hover:text-[#00d084] transition-colors group cursor-pointer"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-slate-100 hover:border-slate-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div>
                {/* Visual Preview */}
                <div className="mb-6">{item.visual}</div>

                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 group-hover:text-[#00d084] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-slate-500 mb-3">
                  {item.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#00d084] transition-colors cursor-pointer"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[11px] text-slate-400 font-mono font-medium">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
