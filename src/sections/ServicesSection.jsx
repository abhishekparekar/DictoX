import React from 'react';
import { ArrowRight, MessageSquare, Bot, CheckCircle2, Sparkles } from 'lucide-react';

export default function ServicesSection({ onOpenConsultation }) {
  const services = [
    {
      id: 'meta',
      title: 'Meta Ads',
      subtitle: 'Facebook & Instagram Ads',
      desc: 'Facebook & Instagram advertising focused on reaching your target audience and generating potential leads and customers.',
      targetTag: 'High Intent Targeting',
      cardHoverBorder: 'hover:border-blue-500/50',
      gradientBoxBg: 'bg-gradient-to-br from-blue-600/12 via-indigo-600/8 to-pink-500/10 border-blue-200/80',
      boxBadge: 'Meta Partner',
      boxBadgeColor: 'bg-blue-600 text-white',
      boxTitle: 'Lead Ad Campaign',
      boxSub: 'Instant Forms + Reels',
      features: ['Custom Audience Targeting', 'High-Converting Creatives', 'Instant Lead Forms & Reels'],
      icon: (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5 shadow-md flex items-center justify-center shrink-0">
          <span className="text-xs font-black text-white tracking-wider">IG</span>
        </div>
      ),
    },
    {
      id: 'google',
      title: 'Google & YouTube Ads',
      subtitle: 'Search + Video Ads',
      desc: 'Reach potential customers when they are actively searching for your products or services on Google and watching YouTube.',
      targetTag: 'Intent Driven',
      cardHoverBorder: 'hover:border-red-500/50',
      gradientBoxBg: 'bg-gradient-to-br from-red-600/12 via-amber-500/8 to-orange-500/10 border-red-200/80',
      boxBadge: 'Rank #1',
      boxBadgeColor: 'bg-amber-500 text-slate-950 font-black',
      boxTitle: 'High-Intent Search',
      boxSub: 'Google Ads + YouTube',
      features: ['High-Intent Search Ads', 'YouTube In-Stream Video Ads', 'Google Maps Local Pack Ads'],
      icon: (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-red-600 to-rose-700 flex items-center justify-center text-white font-black text-xs shadow-md shrink-0">
          YT
        </div>
      ),
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp API',
      subtitle: 'Connect → Follow Up → Convert',
      desc: 'Connect your advertising campaigns with WhatsApp for faster lead communication, instant follow-ups and customer engagement.',
      targetTag: '< 90s Response',
      cardHoverBorder: 'hover:border-emerald-500/50',
      gradientBoxBg: 'bg-gradient-to-br from-emerald-600/12 via-teal-600/8 to-green-500/10 border-emerald-200/80',
      boxBadge: '98% Open Rate',
      boxBadgeColor: 'bg-emerald-600 text-white',
      boxTitle: 'Auto Welcome & CRM',
      boxSub: 'Green Tick Certified',
      features: ['Automated Welcome Message', 'Green Tick Verified API', '98% Message Open Rate'],
      icon: (
        <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-md shrink-0">
          <MessageSquare className="w-5 h-5 fill-white" />
        </div>
      ),
    },
    {
      id: 'automation',
      title: 'Automation Services',
      subtitle: 'Save Time, Grow Faster',
      desc: 'Automate repetitive marketing and lead-management processes to improve team efficiency, speed to lead, and closing rate.',
      targetTag: 'Zero Manual Work',
      cardHoverBorder: 'hover:border-purple-500/50',
      gradientBoxBg: 'bg-gradient-to-br from-purple-600/12 via-violet-600/8 to-indigo-500/10 border-purple-200/80',
      boxBadge: '24/7 Sync',
      boxBadgeColor: 'bg-purple-600 text-white',
      boxTitle: 'CRM & Funnels',
      boxSub: 'Pabbly, Zapier, Webhooks',
      features: ['CRM Auto-Sync (Google Sheets/Zoho)', 'Instant Lead Distribution', '24/7 Webhook Integration'],
      icon: (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-700 flex items-center justify-center text-white shadow-md shrink-0">
          <Bot className="w-5 h-5" />
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-2">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#00b370]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              Performance Marketing Services
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 hover:text-[#00b370] transition-colors group cursor-pointer self-start sm:self-auto"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#00b370]" />
          </button>
        </div>

        {/* 4 Service Cards Grid: Perfect Proportional Gradient Cards for Mobile, Tablet, PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-7 items-stretch">
          {services.map((item) => (
            <div
              key={item.id}
              className={`bg-white border-2 border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 group ${item.cardHoverBorder}`}
            >
              <div>
                {/* 1. Proper Looking Gradient Showcase Box (Top Feature Box) */}
                <div className={`w-full rounded-xl p-3.5 border mb-5 ${item.gradientBoxBg} transition-all duration-300 group-hover:shadow-sm`}>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {item.icon}
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {item.boxTitle}
                        </div>
                        <div className="text-[11px] font-medium text-slate-600 truncate">
                          {item.boxSub}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom strip of the gradient box: Tag and Badge */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200/60 text-[10px] font-semibold">
                    <span className="text-slate-600 truncate">
                      {item.targetTag}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${item.boxBadgeColor}`}>
                      {item.boxBadge}
                    </span>
                  </div>
                </div>

                {/* 2. Service Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 group-hover:text-slate-950 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-[#00b370] mt-1 mb-3">
                  {item.subtitle}
                </div>

                {/* 3. High-Contrast Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {item.desc}
                </p>

                {/* 4. Micro Features Checklist */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00b370] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Action Button: Proper Gradient Button with High-Contrast Text */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_6px_20px_rgba(0,245,155,0.35)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
