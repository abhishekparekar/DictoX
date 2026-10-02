import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Bot, Sparkles, ShieldCheck, Zap, Target, TrendingUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import FinalCTA from '../sections/FinalCTA';
import AnimatedSection from '../components/AnimatedSection';

export default function ServicesPage({ onOpenConsultation }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let serviceParam = params.get('service');
    if (serviceParam === 'google-youtube-ads') serviceParam = 'google-ads';
    if (serviceParam === 'automation-services') serviceParam = 'automation';
    
    if (serviceParam) {
      setActiveTab(serviceParam);
      setTimeout(() => {
        const el = document.getElementById(serviceParam);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } else if (location.hash) {
      const hashId = location.hash.replace('#', '');
      setActiveTab(hashId);
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.search]);

  const serviceDetails = [
    {
      id: 'meta-ads',
      badge: 'META ADS',
      badgeColor: 'bg-slate-100 text-black border-slate-200',
      title: 'Facebook & Instagram Advertising',
      tagline: 'Reach Potential Customers, Generate Leads & Drive Sales',
      description: 'We help businesses use Meta Ads to reach the right audience, generate potential leads, drive sales and grow their customer base.',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white font-black text-lg shadow-sm">
          IG
        </div>
      ),
      highlights: [
        {
          num: '01',
          title: 'Audience Research & Targeting',
          desc: 'Reach people who are more likely to need your product or service.'
        },
        {
          num: '02',
          title: 'Campaign Setup & Management',
          desc: 'We build, launch and manage campaigns around your business goals.'
        },
        {
          num: '03',
          title: 'Ad Creatives & Copywriting',
          desc: 'Create engaging ads designed to attract your target audience.'
        },
        {
          num: '04',
          title: 'Leads, Sales & WhatsApp Integration',
          desc: 'Generate enquiries, drive sales and connect campaigns with WhatsApp.'
        }
      ],
      objectivesHeader: 'CAMPAIGN OBJECTIVES',
      objectivesSub: 'Performance Deliverables',
      objectives: [
        'Generate Potential Leads',
        'Drive Online Sales',
        'Get WhatsApp Enquiries',
        'Reach Local Customers',
        'Drive Website Traffic',
        'Scale Winning Campaigns'
      ],
      bestFor: 'Real Estate · Education · Healthcare · Restaurants · Gyms · Salons · E-commerce · Local Businesses',
      ctaText: 'Get Started With Meta Ads →'
    },
    {
      id: 'google-ads',
      badge: 'GOOGLE & YOUTUBE ADS',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      title: 'Google & YouTube Advertising',
      tagline: 'Reach Potential Customers When They’re Searching & Watching',
      description: 'We help businesses reach potential customers on Google and YouTube, generate enquiries, drive website traffic and increase online sales.',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-700 flex items-center justify-center text-white font-black text-lg shadow-sm">
          YT
        </div>
      ),
      highlights: [
        {
          num: '01',
          title: 'Keyword & Audience Research',
          desc: 'Identify the searches and audiences most relevant to your business.'
        },
        {
          num: '02',
          title: 'Campaign Setup & Management',
          desc: 'We build, launch and manage Google & YouTube campaigns around your business goals.'
        },
        {
          num: '03',
          title: 'Ad Copy & Creative Strategy',
          desc: 'Create compelling ad messaging and video strategies designed to attract potential customers.'
        },
        {
          num: '04',
          title: 'Conversion Tracking & Optimization',
          desc: 'Track campaign performance and continuously optimize your ads for better results.'
        }
      ],
      objectivesHeader: 'CAMPAIGN OBJECTIVES',
      objectivesSub: 'Performance Deliverables',
      objectives: [
        'Generate Potential Leads',
        'Drive Online Sales',
        'Get Calls & Enquiries',
        'Reach Local Customers',
        'Drive Website Traffic',
        'Build YouTube Brand Awareness'
      ],
      bestFor: 'Real Estate · Education · Healthcare · Local Services · E-commerce · Professional Services · Automobile · Coaching',
      ctaText: 'Get Started With Google & YouTube Ads →'
    },
    {
      id: 'whatsapp-api',
      badge: 'WHATSAPP API',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Official WhatsApp API Solutions',
      tagline: 'Turn Customer Enquiries Into Faster Conversations & Better Follow-Ups',
      description: 'We help businesses use the official WhatsApp Business API to automate communication, respond faster and manage customer conversations at scale.',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
          <MessageSquare className="w-6 h-6 fill-white" />
        </div>
      ),
      highlights: [
        {
          num: '01',
          title: 'Official WhatsApp API Setup',
          desc: 'Set up WhatsApp Business API for professional business communication.'
        },
        {
          num: '02',
          title: 'Automated Lead Responses',
          desc: 'Respond instantly to new enquiries with automated WhatsApp messages.'
        },
        {
          num: '03',
          title: 'Lead Follow-Up Automation',
          desc: 'Automate follow-ups so potential customers don’t get missed.'
        },
        {
          num: '04',
          title: 'Campaign & CRM Integration',
          desc: 'Connect your advertising, WhatsApp and CRM workflows for smoother lead management.'
        }
      ],
      objectivesHeader: 'WHATSAPP SOLUTIONS',
      objectivesSub: 'Automation & Chat Workflows',
      objectives: [
        'Instant Lead Notifications',
        'Automated Welcome Messages',
        'Follow-Up Automation',
        'WhatsApp Campaigns',
        'Customer Support Workflows',
        'CRM & Lead Integration'
      ],
      bestFor: 'Real Estate · Education · Healthcare · E-commerce · Restaurants · Automobile · Local Businesses · Professional Services',
      ctaText: 'Get Started With WhatsApp API →'
    },
    {
      id: 'automation',
      badge: 'MARKETING AUTOMATION',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      title: 'Marketing Automation & CRM Funnels',
      tagline: 'Automate Your Lead Follow-Up & Turn More Enquiries Into Customers',
      description: 'We help businesses automate lead management, follow-ups and customer communication so your team can respond faster and manage every enquiry more efficiently.',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-sm">
          <Bot className="w-6 h-6" />
        </div>
      ),
      highlights: [
        {
          num: '01',
          title: 'Lead Management & Routing',
          desc: 'Automatically capture, organize and assign new leads to the right team member.'
        },
        {
          num: '02',
          title: 'Automated Follow-Ups',
          desc: 'Send timely follow-up messages and reminders without relying entirely on manual work.'
        },
        {
          num: '03',
          title: 'CRM & WhatsApp Integration',
          desc: 'Connect your CRM, WhatsApp and marketing campaigns into one smoother workflow.'
        },
        {
          num: '04',
          title: 'Customer Journey Automation',
          desc: 'Build automated workflows that guide leads from first enquiry to follow-up and conversion.'
        }
      ],
      objectivesHeader: 'AUTOMATION SOLUTIONS',
      objectivesSub: 'Pipeline Workflows & Systems',
      objectives: [
        'Lead Capture & Routing',
        'Automated WhatsApp Follow-Ups',
        'CRM Integration',
        'Lead Status & Tracking',
        'Reminder & Notification Workflows',
        'Customer Communication Automation'
      ],
      bestFor: 'Real Estate · Education · Healthcare · E-commerce · Automobile · Coaching · Local Businesses · Professional Services',
      ctaText: 'Get Started With Marketing Automation →'
    },
    {
      id: 'personal-branding',
      badge: 'PERSONAL BRANDING',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Personal Branding & Executive Presence',
      tagline: 'Build Trust, Authority & High-Value Industry Influence',
      description: 'Build your personal brand with strategic content, professional videos and consistent social media presence that commands industry authority.',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-sm">
          <Sparkles className="w-6 h-6" />
        </div>
      ),
      highlights: [
        {
          num: '01',
          title: 'Content Strategy & Positioning',
          desc: 'Strategic content pillars and brand positioning for founders & leaders.'
        },
        {
          num: '02',
          title: 'Video Production & Editing',
          desc: 'High-production short-form video reels, carousels & thought leadership posts.'
        },
        {
          num: '03',
          title: 'Audience Growth & Distribution',
          desc: 'LinkedIn & Instagram organic growth paired with amplified distribution.'
        },
        {
          num: '04',
          title: 'Inbound Inquiries & Authority',
          desc: 'Inbound lead generation driven by industry credibility and trust.'
        }
      ],
      objectivesHeader: 'BRANDING CHANNELS',
      objectivesSub: 'Strategic Visibility',
      objectives: [
        'LinkedIn Thought Leadership',
        'Instagram Reels & Stories',
        'YouTube Podcasts & Clips',
        'Executive PR & Media'
      ],
      bestFor: 'Founders, coaches, consultants, doctors & executives looking to establish unmatched authority.',
      ctaText: 'Get Started With Personal Branding →'
    },
  ];

  const displayedServices = activeTab === 'all' 
    ? serviceDetails 
    : serviceDetails.filter(s => s.id === activeTab);

  const filterTabs = [
    { id: 'all', label: 'All Services (5)' },
    { id: 'meta-ads', label: 'Meta Ads' },
    { id: 'google-ads', label: 'Google & YouTube' },
    { id: 'whatsapp-api', label: 'WhatsApp API' },
    { id: 'automation', label: 'Marketing Automation' },
    { id: 'personal-branding', label: 'Personal Branding' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header — Left-Aligned Signature Style */}
      <section className="pt-20 pb-3 sm:pt-24 sm:pb-4 text-left w-full relative overflow-hidden">
        {/* Subtle top aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/30 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          <AnimatedSection direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 text-left">
            <div>
              <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-black block mb-1">
                PERFORMANCE SOLUTIONS
              </span>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-black leading-tight">
                Performance Marketing Engineered For Measurable Revenue.
              </h1>
            </div>

            <button
              onClick={onOpenConsultation}
              className="bg-[#090d16] hover:bg-black text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-all self-start sm:self-auto shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 sm:top-20 z-20 bg-white/95 backdrop-blur-md border-y border-slate-200/80 py-2 sm:py-2.5 shadow-2xs">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== 'all') {
                    const el = document.getElementById(tab.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
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

              <div className="text-xs sm:text-sm font-bold text-black">
                {service.tagline}
              </div>

              {service.description && (
                <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                  {service.description}
                </p>
              )}

              <div className="space-y-2.5 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                  WHAT YOU GET
                </div>
                <div className="space-y-2 sm:space-y-2.5">
                  {service.highlights.map((item, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-semibold">
                      {typeof item === 'object' ? (
                        <div className="flex items-start gap-2.5">
                          <span className="text-[11px] font-mono font-bold text-black bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 shrink-0 mt-0.5">
                            {item.num}.
                          </span>
                          <div>
                            <span className="font-bold text-black">
                              {item.title}
                            </span>
                            <span className="text-slate-400 mx-1.5">—</span>
                            <span className="text-slate-900 font-medium">{item.desc}</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-900 bg-slate-50/90 p-3 rounded-xl sm:rounded-2xl border border-slate-100">
                <strong className="text-black font-bold uppercase tracking-wider text-[11px] block sm:inline mb-1 sm:mb-0 sm:mr-1">
                  BEST FOR:
                </strong>{' '}
                <span className="text-slate-900 font-semibold">{service.bestFor}</span>
              </div>
            </div>

            {/* Right Column (5 cols): Objectives / Solutions & CTA Box */}
            <div className="lg:col-span-5 bg-slate-50/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between h-full space-y-4 border border-slate-200/80">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-black font-bold">
                  {service.objectivesHeader || 'CAMPAIGN OBJECTIVES'}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-black mt-0.5">
                  {service.objectivesSub || 'Key Performance Deliverables'}
                </h3>

                <div className="mt-2.5 space-y-2">
                  {(service.objectives || service.channels || []).map((ch, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-black font-medium bg-white px-3 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                      <Target className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="btn-adymize-dark w-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{service.ctaText || 'Request Custom Strategy'}</span>
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
