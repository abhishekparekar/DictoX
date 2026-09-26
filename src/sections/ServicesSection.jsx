import React from 'react';
import { ArrowRight, MessageSquare, Bot, Instagram, Facebook, Cog, CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const services = [
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      subtitle: 'Facebook & Instagram',
      desc: 'Reach the right audience and generate potential leads and customers.',
      topIcon: (
        <div className="w-8 h-8 flex items-center justify-center">
          {/* Meta Infinity Logo */}
          <svg className="w-7 h-7 text-[#0081FB]" viewBox="0 0 32 32" fill="currentColor">
            <path d="M29.5 13.9c-.3-3.6-2.5-6.4-5.8-6.4-2.8 0-4.9 1.7-6.2 3.6-1.3-1.9-3.4-3.6-6.2-3.6-3.3 0-5.5 2.8-5.8 6.4-.3 3.9 1.3 7.4 3.9 9.8 1.8 1.7 4.1 2.7 6.6 2.7 1.8 0 3.5-.6 4.9-1.6 1.4 1 3.1 1.6 4.9 1.6 2.5 0 4.8-1 6.6-2.7 2.6-2.4 4.2-5.9 3.9-9.8zm-13.5 6.6c-1.3 1.1-3 1.7-4.8 1.7-2 0-3.8-.8-5.2-2.2-2.1-2-3.4-4.8-3.1-8 .3-2.8 1.9-4.9 4.4-4.9 2.2 0 3.9 1.5 4.9 3.1.2.3.6.4.9.4s.7-.1.9-.4c1-1.6 2.7-3.1 4.9-3.1 2.5 0 4.1 2.1 4.4 4.9.3 3.2-1 6-3.1 8-1.4 1.4-3.2 2.2-5.2 2.2-1.8 0-3.5-.6-4.8-1.7z" />
          </svg>
        </div>
      ),
      illustration: (
        <div className="w-14 sm:w-16 h-24 sm:h-28 bg-slate-900 rounded-xl p-1.5 border border-slate-700/80 shadow-md flex flex-col justify-between shrink-0">
          {/* Smartphone Speaker notch */}
          <div className="w-4 h-0.5 bg-white/40 rounded-full mx-auto" />
          
          {/* IG & FB App Badges inside Phone */}
          <div className="space-y-1.5 my-auto flex flex-col items-center">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-xs">
              <Instagram className="w-3.5 h-3.5" />
            </div>
            <div className="w-7 h-7 rounded-lg bg-[#1877F2] flex items-center justify-center text-white shadow-xs">
              <Facebook className="w-3.5 h-3.5 fill-white" />
            </div>
          </div>

          {/* Home indicator bar */}
          <div className="w-5 h-0.5 bg-white/30 rounded-full mx-auto" />
        </div>
      ),
    },
    {
      id: 'google-ads',
      title: 'Google & YouTube Ads',
      subtitle: 'Search + Video',
      desc: 'Reach people actively looking for your products or services.',
      topIcon: (
        <div className="w-8 h-8 flex items-center justify-center">
          {/* Authentic Google 4-Color 'G' Logo */}
          <svg className="w-7 h-7" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.665-5.17 3.665-9.09z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.1C3.26 21.36 7.33 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.32c-.25-.72-.38-1.49-.38-2.32s.13-1.6.38-2.32V6.57H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.43l4.03-3.11z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.57l4.03 3.11c.95-2.83 3.6-4.93 6.72-4.93z"/>
          </svg>
        </div>
      ),
      illustration: (
        <div className="w-14 sm:w-16 h-24 sm:h-28 bg-slate-50/90 rounded-xl p-1.5 border border-slate-200 flex flex-col items-center justify-center gap-2 shrink-0 shadow-xs">
          {/* Google G Icon */}
          <div className="w-7 h-7 rounded-full bg-white shadow-xs border border-slate-200/80 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.665-5.17 3.665-9.09z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.1C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.32c-.25-.72-.38-1.49-.38-2.32s.13-1.6.38-2.32V6.57H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.43l4.03-3.11z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.57l4.03 3.11c.95-2.83 3.6-4.93 6.72-4.93z"/>
            </svg>
          </div>
          {/* YouTube Red Play Badge */}
          <div className="w-10 h-6 rounded-md bg-[#FF0000] flex items-center justify-center text-white shadow-xs">
            <span className="text-white text-[10px] font-black leading-none ml-0.5">▶</span>
          </div>
        </div>
      ),
    },
    {
      id: 'whatsapp-api',
      title: 'WhatsApp API',
      subtitle: 'Connect → Follow Up → Convert',
      desc: 'Automate lead communication and follow-ups for faster conversions.',
      topIcon: (
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs">
          <MessageSquare className="w-4 h-4 fill-white" />
        </div>
      ),
      illustration: (
        <div className="w-14 sm:w-16 h-24 sm:h-28 bg-emerald-50/80 rounded-xl p-1.5 border border-emerald-200/80 flex flex-col justify-between shrink-0 shadow-xs">
          {/* Top WhatsApp icon */}
          <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-2xs">
            <MessageSquare className="w-3 h-3 fill-white" />
          </div>
          {/* Chat notification bubble */}
          <div className="bg-white rounded-lg p-1.5 border border-emerald-200/90 shadow-2xs">
            <span className="inline-block px-1 py-0.2 rounded bg-emerald-100 text-[7px] font-bold text-emerald-800 leading-tight">
              New Lead
            </span>
            <div className="text-[7.5px] text-slate-500 font-medium truncate mt-0.5 leading-tight">Hi, interested!</div>
            <div className="flex items-center justify-end gap-0.5 mt-0.5">
              <span className="text-[6.5px] text-slate-400">09:41</span>
              <CheckCheck className="w-2.5 h-2.5 text-[#25D366]" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'automation',
      title: 'Automation Services',
      subtitle: 'Save Time. Grow Faster.',
      desc: 'Automate repetitive tasks and improve response time and efficiency.',
      topIcon: (
        <div className="w-8 h-8 rounded-full bg-[#0081FB] flex items-center justify-center text-white shadow-xs">
          <Cog className="w-4.5 h-4.5" />
        </div>
      ),
      illustration: (
        <div className="w-14 sm:w-16 h-24 sm:h-28 bg-blue-50/80 rounded-xl p-1.5 border border-blue-200/80 flex flex-col items-center justify-between shrink-0 shadow-xs">
          {/* Top Gear / Automation Node */}
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xs">
            <Bot className="w-3.5 h-3.5" />
          </div>
          {/* Vertical connecting line with pulse */}
          <div className="w-0.5 h-3 bg-blue-300 relative">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 absolute -left-0.5 top-1" />
          </div>
          {/* Bottom CRM Sync Chip */}
          <div className="w-11 h-6 rounded-md bg-white border border-blue-200 flex items-center justify-center shadow-2xs text-[8px] font-bold text-blue-700">
            CRM⇄
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 sm:mb-7">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              OUR SERVICES
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              Performance Marketing Services
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00b370] transition-colors group cursor-pointer self-start sm:self-auto shrink-0 pb-1"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards matching 2nd Mockup Image exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5 items-stretch">
          {services.map((item) => (
            <Link
              key={item.id}
              to={`/services?service=${item.id}`}
              className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
            >
              <div>
                {/* Top Brand Icon */}
                <div className="mb-2.5 sm:mb-3">
                  {item.topIcon}
                </div>

                {/* Content Area with Left Illustration & Right Text matching Image 2 */}
                <div className="flex items-start gap-3 sm:gap-3.5 mb-2.5 sm:mb-3">
                  {/* Left Illustration Mockup */}
                  {item.illustration}

                  {/* Right Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold font-display text-slate-900 leading-snug group-hover:text-[#00b370] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-slate-500 mt-0.5 mb-1.5 leading-tight">
                      {item.subtitle}
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Learn More link */}
              <div className="pt-2 mt-auto border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#00b370] transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-slate-400 group-hover:text-[#00b370]" />
                </span>
              </div>

            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}



