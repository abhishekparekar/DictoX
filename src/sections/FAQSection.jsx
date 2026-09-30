import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function FAQSection({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const leftFaqs = [
    {
      num: '01',
      q: 'What does DictoX Marketing do?',
      a: 'DictoX Marketing is a performance marketing agency helping businesses generate qualified customer inquiries, booked visits, and measurable sales through Meta Ads, Google Ads, and automated WhatsApp funnels.',
    },
    {
      num: '02',
      q: 'Which services does DictoX provide?',
      a: 'We provide end-to-end Meta Ads (Instagram/Facebook), Google Search & Performance Max, WhatsApp Official API funnels, and CRM marketing automation.',
    },
    {
      num: '03',
      q: 'Do you work with businesses across India?',
      a: 'Yes. We partner with companies across Pune, Mumbai, Bangalore, Delhi NCR, and tier-2/3 growth cities throughout India.',
    },
    {
      num: '04',
      q: 'How do you decide which ad platform is right for me?',
      a: 'We audit your customer acquisition economics, audience search behavior, and transaction ticket size to recommend the most cost-effective channel.',
    },
    {
      num: '05',
      q: 'Is the advertising budget separate from your service fee?',
      a: 'Yes. Advertising spend is paid directly to the ad platforms (Meta/Google), while our agency fee covers end-to-end strategy, copywriting, creative design, and tracking.',
    },
  ];

  const rightFaqs = [
    {
      num: '06',
      q: 'How much should I spend on advertising initially?',
      a: 'We typically recommend a test budget between ₹30,000 to ₹50,000/month for initial validation, then scale up once the profitable cost-per-acquisition is confirmed.',
    },
    {
      num: '07',
      q: 'Do you create the ad graphics, videos and copy?',
      a: 'Yes! Our in-house creative team designs high-converting video hooks, ad graphics, landing page copy, and WhatsApp follow-up scripts.',
    },
    {
      num: '08',
      q: 'How do you track leads and campaign performance?',
      a: 'We implement server-side Conversions API (CAPI), Google GA4, and CRM lead tracking dashboards for 100% transparent reporting.',
    },
    {
      num: '09',
      q: 'How quickly can we launch?',
      a: 'Once onboarding and access are complete, our turnaround time for creative production and campaign launch is typically 3 to 5 business days.',
    },
    {
      num: '10',
      q: 'How do I get started with DictoX?',
      a: "Simply book a free 30-minute strategy consultation call with our team. We'll audit your business and present a custom growth plan with zero obligation.",
    },
  ];

  const allFaqs = [...leftFaqs, ...rightFaqs];

  const toggleIndex = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="py-4 sm:py-7 md:py-9 relative w-full overflow-hidden">
      {/* Subtle top aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/30 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header — Left-Aligned Signature Style */}
        <AnimatedSection direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-3.5 sm:mb-6 text-left">
          <div>
            <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0011a8] block mb-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
              Got Questions?{' '}
              <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                We've Got Answers.
              </span>
            </h2>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0011a8] hover:text-blue-800 transition-colors cursor-pointer group self-start sm:self-auto shrink-0"
          >
            <span>Have A Question? Ask Direct</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </AnimatedSection>

        {/* Mobile View: Top 4 FAQs with Expand Toggle (md:hidden) */}
        <div className="block md:hidden space-y-2">
          {(showAllMobile ? allFaqs : allFaqs.slice(0, 4)).map((faq) => {
            const isOpen = openIndex === `m-${faq.num}`;
            return (
              <div
                key={faq.num}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 shadow-sm ring-1 ring-blue-50'
                    : 'border-slate-200/80 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggleIndex(`m-${faq.num}`)}
                  className="w-full p-3 text-left flex items-center justify-between gap-2.5 text-xs font-bold text-slate-900 cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
                      isOpen
                        ? 'bg-[#0011a8] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500 rotate-0'
                    }`}
                  >
                    <ChevronDown className="w-3 h-3" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="px-3 pb-3 pt-0.5 text-[11px] text-slate-600 leading-relaxed border-t border-slate-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#0011a8] bg-white hover:bg-blue-50/50 border border-slate-200 flex items-center justify-center gap-1.5 shadow-2xs transition-all mt-2 cursor-pointer"
          >
            <span>{showAllMobile ? 'Show Fewer Questions' : `View All FAQs (${allFaqs.length})`}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAllMobile ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Desktop FAQ Accordion Grid in Compact White Cards (hidden md:grid) */}
        <div className="hidden md:grid md:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Column 1 */}
          <div className="space-y-2.5">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openIndex === `l-${idx}`;
              return (
                <div
                  key={faq.num}
                  className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-blue-300 shadow-md ring-2 ring-blue-50'
                      : 'border-slate-200/80 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(`l-${idx}`)}
                    className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isOpen
                          ? 'bg-[#0011a8] text-white rotate-180'
                          : 'bg-slate-100 text-slate-500 rotate-0'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 pb-4 pt-0.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-2.5">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openIndex === `r-${idx}`;
              return (
                <div
                  key={faq.num}
                  className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-blue-300 shadow-md ring-2 ring-blue-50'
                      : 'border-slate-200/80 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(`r-${idx}`)}
                    className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isOpen
                          ? 'bg-[#0011a8] text-white rotate-180'
                          : 'bg-slate-100 text-slate-500 rotate-0'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
