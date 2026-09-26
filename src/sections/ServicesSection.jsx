import React from 'react';
import { ArrowRight, MessageSquare, Bot, Search, Share2 } from 'lucide-react';

export default function ServicesSection({ onOpenConsultation }) {
  const services = [
    {
      id: 'meta',
      title: 'Meta Ads',
      subtitle: 'Facebook & Instagram',
      desc: 'Reach the right audience and generate potential leads and customers.',
      iconBg: 'bg-blue-50 text-blue-600',
      badge: 'High Intent Targeting',
      visual: (
        <div className="w-full h-24 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-lg p-2.5 border border-blue-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 p-0.5 shadow-sm">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="text-xs font-bold text-pink-600">IG</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">Lead Ad Campaign</div>
              <div className="text-[9px] text-slate-500">Instant Forms + Reels</div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded">
            Meta Partner
          </span>
        </div>
      ),
    },
    {
      id: 'google',
      title: 'Google & YouTube Ads',
      subtitle: 'Search + Video',
      desc: 'Reach people actively looking for your products or services.',
      iconBg: 'bg-red-50 text-red-600',
      badge: 'Intent Driven',
      visual: (
        <div className="w-full h-24 bg-gradient-to-br from-red-50 to-amber-50/50 rounded-lg p-2.5 border border-red-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              YT
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">High-Intent Search</div>
              <div className="text-[9px] text-slate-500">Google Ads + YouTube</div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-red-700 bg-red-100/80 px-2 py-0.5 rounded">
            Rank #1
          </span>
        </div>
      ),
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp API',
      subtitle: 'Connect → Follow Up → Convert',
      desc: 'Automate lead communication and follow-ups for faster conversions.',
      iconBg: 'bg-emerald-50 text-emerald-600',
      badge: '< 90s Response',
      visual: (
        <div className="w-full h-24 bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-lg p-2.5 border border-emerald-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
              <MessageSquare className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">Auto Welcome & CRM</div>
              <div className="text-[9px] text-slate-500">Green Tick Certified</div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
            98% Open Rate
          </span>
        </div>
      ),
    },
    {
      id: 'automation',
      title: 'Automation Services',
      subtitle: 'Save Time, Grow Faster',
      desc: 'Automate repetitive tasks and improve response time and efficiency.',
      iconBg: 'bg-purple-50 text-purple-600',
      badge: 'Zero Manual Work',
      visual: (
        <div className="w-full h-24 bg-gradient-to-br from-purple-50 to-violet-50/50 rounded-lg p-2.5 border border-purple-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">CRM & Funnels</div>
              <div className="text-[9px] text-slate-500">Pabbly, Zapier, Webhooks</div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded">
            24/7 Sync
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-14 sm:py-16 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Explore All link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d084]">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 mt-1">
              Performance Marketing Services
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#00d084] transition-colors"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Visual Preview */}
                <div className="mb-4">{item.visual}</div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-[#00d084] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="text-[11px] font-medium text-slate-500 mb-2">
                  {item.subtitle}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:text-[#00d084] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[10px] text-slate-400 font-mono">
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
