import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Bot, Sparkles, ShieldCheck, Zap, Target, TrendingUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import TrustBar from '../sections/TrustBar';
import FinalCTA from '../sections/FinalCTA';

export default function ServicesPage({ onOpenConsultation }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setActiveTab(serviceParam);
    } else if (location.hash) {
      const hashId = location.hash.replace('#', '');
      setActiveTab(hashId);
    }
  }, [location.pathname, location.search]);

  const serviceDetails = [
    {
      id: 'meta-ads',
      badge: 'High Intent Lead Generation',
      badgeColor: 'bg-blue-50 text-[#0011a8] border-blue-200',
      title: 'Meta Ads (Facebook & Instagram)',
      tagline: 'Turn Scrolling Attention Into High-Intent Customers',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white font-black text-lg shadow-sm">
          IG
        </div>
      ),
      highlights: [
        'Custom & Lookalike Audience Modeling based on verified past purchasers',
        'Direct Instant Lead Forms connected directly to WhatsApp & CRM',
        'High-converting Reel hooks, dynamic carousels & video creatives',
        'CPL (Cost Per Lead) reduction through continuous algorithmic testing',
      ],
      channels: ['Facebook Feed & Stories', 'Instagram Reels & Explore', 'Messenger & Direct Leads'],
      bestFor: 'Real Estate, Clinics, Education, Salons, Gyms & E-Commerce brands looking for rapid customer volume.',
    },
    {
      id: 'google-ads',
      badge: 'Intent Driven Demand Capture',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      title: 'Google & YouTube Advertising',
      tagline: 'Capture Customers At The Exact Moment They Search To Buy',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-700 flex items-center justify-center text-white font-black text-lg shadow-sm">
          YT
        </div>
      ),
      highlights: [
        'High-Intent Google Search Ads capturing active commercial keywords',
        'Google Maps Local Pack campaigns for local store & clinic footfall',
        'Skippable & In-Feed YouTube Video Ads building brand authority',
        'Negative keyword sculpting to eliminate 100% wasted advertising spend',
      ],
      channels: ['Google Search Engine', 'YouTube Video Stream', 'Google Maps Local Pack', 'Display & Performance Max'],
      bestFor: 'High-ticket services, B2B, healthcare treatments, real estate buyers, and competitive local services.',
    },
    {
      id: 'whatsapp-api',
      badge: '< 60s Speed To Lead',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Official WhatsApp API Solutions',
      tagline: 'Connect Instantly → Follow Up Automatically → Convert Faster',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
          <MessageSquare className="w-6 h-6 fill-white" />
        </div>
      ),
      highlights: [
        'Green Tick Verified Meta Official Business WhatsApp API',
        'Instant Automated Welcome Messages sent in under 60 seconds of ad opt-in',
        'Automated reminder drip sequences for missed calls & pending appointments',
        'Over 98% message open rates compared to under 15% on regular email',
      ],
      channels: ['Official Cloud API', 'Click-to-WhatsApp Ads', 'Interactive Chatbot Menus', 'CRM Broadcasting'],
      bestFor: 'Any business losing deals due to delayed sales follow-ups and unreached leads.',
    },
    {
      id: 'automation',
      badge: 'Zero Lead Leakage',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      title: 'Marketing Automation & CRM Funnels',
      tagline: 'Eliminate Repetitive Tasks & Accelerate Sales Closures',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#0011a8] to-[#1d4ed8] flex items-center justify-center text-white shadow-sm">
          <Bot className="w-6 h-6" />
        </div>
      ),
      highlights: [
        'Instant lead sync to Google Sheets, Zoho, Salesforce, or LeadSquared',
        'Automatic salesperson assignment & real-time WhatsApp alert notifications',
        'End-to-end webhook architecture connecting ads, landing pages & sales reps',
        'Lead status tracking to measure true Cost Per Acquired Customer (CAC)',
      ],
      channels: ['Zapier & Pabbly Connect', 'Zoho CRM & LeadSquared', 'Custom Webhooks', 'Google Sheets Auto-Sync'],
      bestFor: 'Growing sales teams wanting zero manual data entry and instant response time.',
    },
  ];

  const displayedServices = activeTab === 'all' 
    ? serviceDetails 
    : serviceDetails.filter(s => s.id === activeTab);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-20 pb-6 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12 relative overflow-hidden text-center w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0011a8] mb-1">
            Comprehensive Growth Services
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 max-w-4xl mx-auto leading-tight">
            Performance Marketing Engineered For{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Measurable Revenue
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto mt-2 font-medium leading-relaxed">
            We don't sell vanity impressions or empty clicks. Every campaign is designed, monitored, and scaled to acquire paying customers at profitable margins.
          </p>
          
          <div className="mt-4 sm:mt-5 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Certification strip */}
      <TrustBar />

      {/* Filter Tabs */}
      <div className="sticky top-14 sm:top-18 z-20 bg-white/95 backdrop-blur-md border-y border-slate-200/80 py-2 sm:py-2.5 shadow-2xs">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0011a8] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Services (4)
          </button>
          {serviceDetails.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveTab(s.id);
                const el = document.getElementById(s.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === s.id
                  ? 'bg-[#0011a8] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {s.title.split(' ')[0]} {s.title.includes('WhatsApp') ? 'WhatsApp' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Deep-Dive Service Cards */}
      <section className="py-6 sm:py-9 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 space-y-4 sm:space-y-6">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(0,17,168,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center"
          >
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-3">
                {service.icon}
                <div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${service.badgeColor} uppercase tracking-wider inline-block`}>
                    {service.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 mt-0.5">
                    {service.title}
                  </h2>
                </div>
              </div>

              <div className="text-xs sm:text-sm font-bold text-[#0011a8]">
                {service.tagline}
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  What You Get:
                </div>
                {service.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-600 bg-slate-50/90 p-3 rounded-xl sm:rounded-2xl border border-slate-100">
                <strong className="text-slate-900 font-bold">Best For: </strong> {service.bestFor}
              </div>
            </div>

            {/* Right Column (5 cols): Channels & CTA Box */}
            <div className="lg:col-span-5 bg-slate-50/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between h-full space-y-4 border border-slate-200/80">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#0011a8] font-bold">
                  Campaign Architecture
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                  Targeted Ad Placements
                </h3>

                <div className="mt-2.5 space-y-2">
                  {service.channels.map((ch, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-800 font-medium bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                      <Target className="w-3.5 h-3.5 text-[#0011a8] shrink-0" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="btn-adymize-dark w-full"
              >
                <span>Request Custom Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Final Strategy CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
