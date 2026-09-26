import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Bot, Sparkles, ShieldCheck, Zap, Target, TrendingUp } from 'lucide-react';
import TrustBar from '../sections/TrustBar';
import FinalCTA from '../sections/FinalCTA';

export default function ServicesPage({ onOpenConsultation }) {
  const serviceDetails = [
    {
      id: 'meta-ads',
      badge: 'High Intent Lead Generation',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'Meta Ads (Facebook & Instagram)',
      tagline: 'Turn Scrolling Attention Into High-Intent Customers',
      icon: (
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white font-black text-xl shadow-md">
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
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-700 flex items-center justify-center text-white font-black text-xl shadow-md">
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
        <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-md">
          <MessageSquare className="w-7 h-7 fill-white" />
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
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-700 flex items-center justify-center text-white shadow-md">
          <Bot className="w-7 h-7" />
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

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-28">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#030f11] via-[#05181b] to-[#041214] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f59b]/12 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-center">
          <span className="inline-block text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#00f59b] font-bold mb-3">
            Comprehensive Growth Services
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Performance Marketing Engineered For Measurable Revenue
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 font-normal">
            We don't sell vanity impressions or empty clicks. Every campaign is designed, monitored, and scaled to acquire paying customers at profitable margins.
          </p>
          
          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_8px_30px_rgba(0,245,155,0.4)] transition-all cursor-pointer uppercase tracking-wider"
            >
              <span>Get Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Certification strip */}
      <TrustBar />

      {/* Deep-Dive Service Cards */}
      <section className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12 sm:space-y-16">
        {serviceDetails.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white via-slate-50/60 to-white border-2 border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                {service.icon}
                <div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${service.badgeColor} uppercase tracking-wider`}>
                    {service.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
                    {service.title}
                  </h2>
                </div>
              </div>

              <div className="text-sm sm:text-base font-bold text-[#00b370]">
                {service.tagline}
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                  What You Get:
                </div>
                {service.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00b370] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-500 bg-slate-100/80 p-3 rounded-xl border border-slate-200">
                <strong className="text-slate-800">Best For: </strong> {service.bestFor}
              </div>
            </div>

            {/* Right Column (5 cols): Channels & CTA Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#071c1f] to-[#041214] text-white p-6 sm:p-7 rounded-2xl shadow-xl flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f59b] font-bold">
                  Campaign Architecture
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Targeted Ad Placements
                </h3>

                <div className="mt-4 space-y-2">
                  {service.channels.map((ch, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono bg-white/10 px-3 py-2 rounded-lg border border-white/10">
                      <Target className="w-3.5 h-3.5 text-[#00f59b] shrink-0" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#00f59b] via-[#10e998] to-[#00d084] hover:shadow-[0_6px_20px_rgba(0,245,155,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Custom Strategy</span>
                <ArrowRight className="w-4 h-4" />
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
