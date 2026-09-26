import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Bot, Sparkles, ShieldCheck, Zap, Target, TrendingUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import TrustBar from '../sections/TrustBar';
import FinalCTA from '../sections/FinalCTA';

export default function ServicesPage({ onOpenConsultation }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(id);
      }
    }
  }, [location]);

  const serviceDetails = [
    {
      id: 'meta-ads',
      badge: 'High Intent Lead Generation',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'Meta Ads (Facebook & Instagram)',
      tagline: 'Turn Scrolling Attention Into High-Intent Customers',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white font-black text-lg shadow-sm">
          IG
        </div>
      ),
      highlights: [
        'Custom & Lookalike Audience Modeling based on past purchasers',
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
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-red-600 to-rose-700 flex items-center justify-center text-white font-black text-lg shadow-sm">
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
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
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
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-700 flex items-center justify-center text-white shadow-sm">
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
    <div className="min-h-screen bg-white text-slate-900 pt-20 sm:pt-24">
      {/* Compact Hero Header */}
      <section className="bg-[#041412] text-white py-12 sm:py-16 relative overflow-hidden border-b border-emerald-950/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#00f59b]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] text-[#00f59b] font-bold mb-2">
            Comprehensive Growth Services
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Performance Marketing Engineered For Measurable Revenue
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mt-3 font-normal leading-relaxed">
            We don't sell vanity impressions or empty clicks. Every campaign is designed, monitored, and scaled to acquire paying customers at profitable margins.
          </p>
          
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-[#00f59b] hover:bg-[#10e998] transition-all cursor-pointer shadow-md"
            >
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Certification strip */}
      <TrustBar />

      {/* Filter Tabs for Easy Mobile & Desktop Navigation */}
      <div className="sticky top-16 sm:top-20 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === s.id
                  ? 'bg-[#00f59b] text-slate-950'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s.title.split(' ')[0]} {s.title.includes('WhatsApp') ? 'WhatsApp' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Deep-Dive Service Cards - Compact & Mobile Friendly */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center"
          >
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-3">
                {service.icon}
                <div>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${service.badgeColor} uppercase tracking-wider inline-block`}>
                    {service.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-0.5">
                    {service.title}
                  </h2>
                </div>
              </div>

              <div className="text-xs sm:text-sm font-bold text-[#00b370]">
                {service.tagline}
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  What You Get:
                </div>
                {service.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00b370] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <strong className="text-slate-900">Best For: </strong> {service.bestFor}
              </div>
            </div>

            {/* Right Column (5 cols): Channels & CTA Box */}
            <div className="lg:col-span-5 bg-[#051714] text-white p-4 sm:p-5 rounded-xl shadow-md flex flex-col justify-between h-full space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f59b] font-bold">
                  Campaign Architecture
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  Targeted Ad Placements
                </h3>

                <div className="mt-3 space-y-1.5">
                  {service.channels.map((ch, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                      <Target className="w-3 h-3 text-[#00f59b] shrink-0" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-slate-950 bg-[#00f59b] hover:bg-[#10e998] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
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
