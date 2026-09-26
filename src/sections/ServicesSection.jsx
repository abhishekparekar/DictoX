import React from 'react';
import { ArrowRight, MessageSquare, Bot, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection({ onOpenConsultation }) {
  const services = [
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      subtitle: 'Facebook & Instagram',
      desc: 'Reach the right audience and generate potential leads and customers.',
      icon: (
        <svg className="w-8 h-8 text-[#0081FB]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
      preview: (
        <div className="w-full h-24 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 p-2.5 flex items-center justify-between text-white shadow-xs">
          <div className="w-12 h-16 rounded-lg bg-black/30 border border-white/20 p-1 flex flex-col justify-between">
            <div className="w-4 h-1 rounded-full bg-white/60" />
            <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-[8px] font-black mx-auto">
              IG
            </div>
            <div className="w-8 h-1 rounded-full bg-white/40" />
          </div>
          <div className="text-right pr-2">
            <span className="text-[10px] font-bold uppercase tracking-wider block text-white/80">Meta Feed</span>
            <span className="text-xs font-black text-white">Reels & Lead Forms</span>
          </div>
        </div>
      ),
    },
    {
      id: 'google-ads',
      title: 'Google & YouTube Ads',
      subtitle: 'Search + Video',
      desc: 'Reach people actively looking for your products or services.',
      icon: (
        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-black text-sm text-[#4285F4] shadow-xs">
          G
        </div>
      ),
      preview: (
        <div className="w-full h-24 rounded-xl bg-gradient-to-tr from-red-500 via-rose-600 to-amber-500 p-2.5 flex items-center justify-between text-white shadow-xs">
          <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-md">
            <span className="text-red-600 font-black text-base">▶ YT</span>
          </div>
          <div className="text-right pr-2">
            <span className="text-[10px] font-bold uppercase tracking-wider block text-white/80">Search & Maps</span>
            <span className="text-xs font-black text-white">High-Intent Ads</span>
          </div>
        </div>
      ),
    },
    {
      id: 'whatsapp-api',
      title: 'WhatsApp API',
      subtitle: 'Connect → Follow Up → Convert',
      desc: 'Automate lead communication and follow-ups for faster conversions.',
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs">
          <MessageSquare className="w-4 h-4 fill-white" />
        </div>
      ),
      preview: (
        <div className="w-full h-24 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 p-2.5 flex flex-col justify-between text-white shadow-xs">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] animate-ping" />
            <span>New Lead Alert</span>
          </div>
          <div className="bg-black/20 rounded-lg p-1.5 text-[11px] font-medium text-emerald-100 flex items-center justify-between">
            <span>Instant Auto-Reply</span>
            <span className="text-[#00f59b] font-bold">✓✓</span>
          </div>
        </div>
      ),
    },
    {
      id: 'automation',
      title: 'Automation Services',
      subtitle: 'Save Time. Grow Faster.',
      desc: 'Automate repetitive tasks and improve response time and efficiency.',
      icon: (
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-xs">
          <Bot className="w-4 h-4" />
        </div>
      ),
      preview: (
        <div className="w-full h-24 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 p-2.5 flex items-center justify-between text-white shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center font-mono font-bold text-xs text-white">
            CRM⇄
          </div>
          <div className="text-right pr-2">
            <span className="text-[10px] font-bold uppercase tracking-wider block text-white/80">Auto Lead Sync</span>
            <span className="text-xs font-black text-white">24/7 Webhooks</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-10 sm:py-14 md:py-16 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              Performance Marketing Services
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00b370] transition-colors group cursor-pointer self-start sm:self-auto shrink-0 pb-1"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Clean Cards matching Screenshot 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Link to={`/services#${item.id}`} className="block">
                {/* Top Row: Icon */}
                <div className="mb-3">
                  {item.icon}
                </div>

                {/* Service Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 leading-snug group-hover:text-[#00b370] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mt-0.5 mb-3">
                  {item.subtitle}
                </div>

                {/* Visual Preview Banner */}
                <div className="mb-3.5">
                  {item.preview}
                </div>

                {/* 1-2 line Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </Link>

              {/* Bottom Learn More link */}
              <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/services#${item.id}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00b370] transition-colors group cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-slate-500 group-hover:text-[#00b370]" />
                </Link>
                <button
                  onClick={onOpenConsultation}
                  className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded-md transition-colors"
                >
                  Consult
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


