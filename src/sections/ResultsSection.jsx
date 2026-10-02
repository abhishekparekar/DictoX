import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  IndianRupee, 
  Users, 
  X,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { fetchTenantResults } from '../firebase';

export default function ResultsSection({ onOpenConsultation }) {
  const defaultCaseStudies = [
    {
      id: 'real-estate-luxury',
      title: 'Pune Luxury Residential Project Launch',
      industry: 'Real Estate',
      objective: 'High-Value Site Visits & Token Bookings for 2 & 3 BHK Homes',
      adSpend: '₹4,85,000',
      leadsGenerated: '1,420 Qualified Leads',
      costPerLead: '₹341 / Lead',
      duration: '60 Days',
      keyOutcome: '38 Confirmed Site Visits and 14 Token Bookings worth ₹16.8 Cr in sales value',
      image: '/images/real_estate.jpg',
      strategy: 'Implemented 3-step qualification ad forms filtering buyers by purchase timeline and budget (>₹85L) with instant follow-ups.'
    },
    {
      id: 'healthcare-dental-chain',
      title: 'Super-Speciality Dental & Implants Clinic',
      industry: 'Healthcare & Clinics',
      objective: 'Acquire High-Ticket Dental Implant & Clear Aligner Consultations',
      adSpend: '₹1,95,000',
      leadsGenerated: '640 Patient Inquiries',
      costPerLead: '₹304 / Lead',
      duration: '45 Days',
      keyOutcome: '112 In-clinic doctor consultations booked with 34 finalized high-ticket treatments',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      strategy: 'High-intent localized Google Search campaigns combined with real video patient testimonials and click-to-consultation booking.'
    },
    {
      id: 'education-coaching-batch',
      title: 'Tech & Coding Academy Admissions',
      industry: 'Education & Coaching',
      objective: 'Fill Cohort Batches for Certified Full Stack & Data Science Courses',
      adSpend: '₹3,20,000',
      leadsGenerated: '2,890 Aspirants',
      costPerLead: '₹110 / Lead',
      duration: '75 Days',
      keyOutcome: '185 Enrolled Students generating ₹92.5 Lakhs in tuition fee revenue',
      image: '/images/education.jpg',
      strategy: 'Free Masterclass webinar registration funnel with automated reminder workflows achieving 42% live show-up rates.'
    },
    {
      id: 'automobile-ev-network',
      title: 'Festival Season EV Four-Wheeler Test Drives',
      industry: 'Automobile',
      objective: 'Drive Verified Doorstep & Showroom Test-Drive Bookings',
      adSpend: '₹2,60,000',
      leadsGenerated: '810 Verified Test Drives',
      costPerLead: '₹320 / Test Drive',
      duration: '30 Days',
      keyOutcome: '47 Vehicle deliveries closed in festive month from direct ad inquiries',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      strategy: 'Geo-targeted campaigns within a 15km showroom radius with automated SMS and WhatsApp confirmation for doorstep test drive dispatch.'
    },
    {
      id: 'restaurant-fb-franchise',
      title: 'Multi-Outlet Gourmet Restaurant Chain',
      industry: 'Restaurant & F&B',
      objective: 'Weekend Footfall, Table Reservations & Banquet Event Bookings',
      adSpend: '₹1,20,000',
      leadsGenerated: '1,140 Bookings & Inquiries',
      costPerLead: '₹105 / Lead',
      duration: '30 Days',
      keyOutcome: '3.4x Direct revenue ROAS with 820+ verified dining table reservations',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      strategy: 'Geo-fenced Instagram visual reels and exclusive chef table tasting ad hooks.'
    },
    {
      id: 'd2c-wellness-brand',
      title: 'Premium Ayurvedic & D2C Wellness Brand',
      industry: 'E-Commerce & D2C',
      objective: 'Scale Monthly First-Time Buyer Acquisition at High ROAS',
      adSpend: '₹3,80,000',
      leadsGenerated: '3,450 Direct Orders',
      costPerLead: '₹110 / Customer Acquisition (CAC)',
      duration: '45 Days',
      keyOutcome: '₹15.2 Lakhs in new customer sales at 4.0x blended campaign ROAS',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      strategy: 'Founder video ads, user-generated content (UGC), and custom product bundle landing pages.'
    }
  ];

  const [results, setResults] = useState(defaultCaseStudies);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    async function loadDynamicResults() {
      try {
        const dynamicItems = await fetchTenantResults();
        if (dynamicItems && dynamicItems.length > 0) {
          // Map dynamic items from admin to consistent format
          const formattedDynamic = dynamicItems.map(item => ({
            id: item.id || `dyn-${Math.random()}`,
            title: item.title || 'Client Growth Campaign',
            industry: item.industry || 'Performance Marketing',
            objective: item.objective || 'Inquiries & Customer Acquisition',
            adSpend: item.spend || item.adSpend || '₹50,000',
            leadsGenerated: item.leads || item.leadsGenerated || '300+ Leads',
            costPerLead: item.cpl || item.costPerLead || '₹150 / Lead',
            duration: item.duration || '30 Days',
            keyOutcome: item.keyOutcome || `${item.leads || '300+'} high-intent leads generated with optimized cost per lead`,
            image: item.image || '/images/real_estate.jpg',
            strategy: item.strategy || 'Precision audience targeting combined with high-converting creative ad hooks.'
          }));
          setResults([...formattedDynamic, ...defaultCaseStudies]);
        }
      } catch (err) {
        console.warn('Failed to load dynamic results:', err);
      }
    }
    loadDynamicResults();
  }, []);

  return (
    <section id="results" className="py-8 sm:py-12 md:py-16 relative w-full overflow-hidden bg-slate-50/60 border-t border-slate-200/80">
      {/* Subtle Ambient Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[260px] bg-gradient-to-b from-blue-100/35 via-emerald-50/20 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Subheading */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            RESULTS / CASE STUDIES ⭐
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Real Campaigns.{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Real Results.
            </span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-black font-medium max-w-2xl mx-auto leading-relaxed">
            Every case study represents verified performance data, transparent ad spend, and measurable customer acquisition.
          </p>
        </AnimatedSection>

        {/* 6 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {results.map((item, idx) => (
            <AnimatedSection
              key={item.id || idx}
              direction="up"
              delay={idx * 0.05}
              className={`h-full ${idx >= 3 && !showAllMobile ? 'hidden md:flex' : 'flex'}`}
            >
              <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] hover:shadow-[0_12px_36px_rgba(0,17,168,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                
                {/* Top Image + Industry Badge */}
                <div className="h-36 sm:h-44 overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image || '/images/real_estate.jpg'}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/real_estate.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent pointer-events-none" />

                  {/* Industry Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-[#0011a8] shadow-xs border border-white/80">
                    {item.industry}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-white flex items-center gap-1 shadow-xs border border-white/10">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{item.duration}</span>
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-left">
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight drop-shadow-sm line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left space-y-3.5">
                  
                  {/* Campaign Objective */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black block mb-1">
                      Campaign Objective
                    </span>
                    <p className="text-xs sm:text-[13px] text-black font-medium leading-snug line-clamp-2">
                      {item.objective}
                    </p>
                  </div>

                  {/* Structured 4-Point Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-150">
                    
                    {/* Metric 1: Ad Spend */}
                    <div className="p-1.5">
                      <span className="text-[10px] text-black font-bold uppercase block leading-none mb-1">
                        Ad Spend
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-black truncate block">
                        {item.adSpend}
                      </span>
                    </div>

                    {/* Metric 2: Leads Generated */}
                    <div className="p-1.5 border-l border-slate-200 pl-2.5">
                      <span className="text-[10px] text-black font-bold uppercase block leading-none mb-1">
                        Leads Generated
                      </span>
                      <span className="text-xs sm:text-sm font-black text-[#0011a8] truncate block">
                        {item.leadsGenerated}
                      </span>
                    </div>

                    {/* Metric 3: Cost Per Lead */}
                    <div className="p-1.5 border-t border-slate-200 pt-2">
                      <span className="text-[10px] text-black font-bold uppercase block leading-none mb-1">
                        Cost Per Lead
                      </span>
                      <span className="text-xs sm:text-sm font-black text-[#00a63e] truncate block">
                        {item.costPerLead}
                      </span>
                    </div>

                    {/* Metric 4: Campaign Duration */}
                    <div className="p-1.5 border-t border-l border-slate-200 pt-2 pl-2.5">
                      <span className="text-[10px] text-black font-bold uppercase block leading-none mb-1">
                        Duration
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-black truncate block">
                        {item.duration}
                      </span>
                    </div>

                  </div>

                  {/* Key Outcome Highlight Callout */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/90 text-left">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Trophy className="w-3.5 h-3.5 text-[#00a63e] shrink-0" />
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-emerald-800 uppercase tracking-wide">
                        Key Outcome
                      </span>
                    </div>
                    <p className="text-xs sm:text-[12.5px] font-bold text-slate-950 leading-snug">
                      {item.keyOutcome}
                    </p>
                  </div>

                  {/* [ View Case Study → ] Action Button */}
                  <button
                    onClick={() => setSelectedCaseStudy(item)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group/btn mt-1"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile View Toggle: Prevents Excessive Mobile Scrolling */}
        {results.length > 3 && (
          <div className="flex md:hidden justify-center pt-3.5">
            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{showAllMobile ? 'Show Fewer Case Studies ↑' : `View All Case Studies (${results.length}) ↓`}</span>
            </button>
          </div>
        )}

        {/* Bottom Strategy Call CTA Banner */}
        <AnimatedSection direction="up" delay={0.2} className="mt-6 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xs p-4 sm:p-6 md:p-7 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-xs font-bold text-[#0011a8] uppercase tracking-wider block mb-1">
              Want Similar Measurable Results?
            </span>
            <h4 className="text-base sm:text-xl font-black text-slate-950 leading-tight">
              Let's audit your ad campaigns and engineer a predictable lead engine.
            </h4>
          </div>

          <button
            onClick={onOpenConsultation}
            className="w-full md:w-auto bg-[#00a63e] hover:bg-[#008f35] active:scale-[0.98] text-white px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Book A Free Strategy Audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </AnimatedSection>

      </div>

      {/* Interactive Detail Modal: [ View Case Study → ] */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col text-left">
            
            {/* Modal Header */}
            <div className="relative p-5 sm:p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white flex items-start justify-between gap-3">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {selectedCaseStudy.industry}
                </span>
                <h3 className="text-base sm:text-xl font-black text-white leading-tight">
                  {selectedCaseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              
              {/* Objective */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-black block mb-1">
                  Campaign Objective
                </span>
                <p className="text-xs sm:text-sm font-semibold text-black leading-relaxed">
                  {selectedCaseStudy.objective}
                </p>
              </div>

              {/* 4-Box Key Metrics Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="p-2">
                  <span className="text-[10px] font-bold uppercase text-black block mb-0.5">Ad Spend</span>
                  <span className="text-xs sm:text-sm font-extrabold text-black">{selectedCaseStudy.adSpend}</span>
                </div>
                <div className="p-2 border-l border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-black block mb-0.5">Leads</span>
                  <span className="text-xs sm:text-sm font-black text-[#0011a8]">{selectedCaseStudy.leadsGenerated}</span>
                </div>
                <div className="p-2 border-t sm:border-t-0 sm:border-l border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-black block mb-0.5">Cost/Lead</span>
                  <span className="text-xs sm:text-sm font-black text-[#00a63e]">{selectedCaseStudy.costPerLead}</span>
                </div>
                <div className="p-2 border-t sm:border-t-0 border-l border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-black block mb-0.5">Duration</span>
                  <span className="text-xs sm:text-sm font-bold text-black">{selectedCaseStudy.duration}</span>
                </div>
              </div>

              {/* Key Outcome */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                <div className="flex items-center gap-1.5 mb-1 text-emerald-800 font-extrabold text-xs uppercase tracking-wide">
                  <Trophy className="w-4 h-4 text-[#00a63e]" />
                  <span>Key Outcome</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {selectedCaseStudy.keyOutcome}
                </p>
              </div>

              {/* Strategy Details */}
              {selectedCaseStudy.strategy && (
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-slate-800">
                  <div className="flex items-center gap-1.5 mb-1 text-[#0011a8] font-bold text-xs uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-[#0011a8]" />
                    <span>Strategy Deployed</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-black leading-relaxed">
                    {selectedCaseStudy.strategy}
                  </p>
                </div>
              )}

            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-black font-medium">
                Want a custom performance plan for your brand?
              </span>
              <button
                onClick={() => {
                  setSelectedCaseStudy(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto bg-[#0011a8] hover:bg-blue-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
