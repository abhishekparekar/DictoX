import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function FAQSection({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(true);

  const leftFaqs = [
    {
      num: '01',
      q: 'What does DictoX Marketing do?',
      a: 'DictoX Marketing is a performance marketing agency helping businesses generate potential leads and customers through online advertising and marketing solutions.',
    },
    {
      num: '02',
      q: 'Which services does DictoX provide?',
      a: 'We provide Meta Ads, Google Ads, YouTube Ads, WhatsApp API and Marketing Automation services.',
    },
    {
      num: '03',
      q: 'Do you work with businesses across India?',
      a: 'Yes. We work with businesses across India and help them reach customers in their target locations.',
    },
    {
      num: '04',
      q: 'How do you decide which advertising platform is right for my business?',
      a: 'We consider your business, target audience, goals, location and budget to determine the right advertising approach.',
    },
    {
      num: '05',
      q: 'Is the advertising budget separate from your service fees?',
      a: 'Yes. Our service fees and advertising budget are separate. The advertising budget is used to run campaigns on the respective advertising platforms.',
    },
  ];

  const rightFaqs = [
    {
      num: '06',
      q: 'How much should I spend on advertising?',
      a: 'The ideal budget depends on your business, industry, location, competition and goals. We recommend a suitable starting budget based on your requirements.',
    },
    {
      num: '07',
      q: 'Do you provide ad creatives and copywriting?',
      a: 'Yes. Our team can handle the creative and copy requirements for your advertising campaigns.',
    },
    {
      num: '08',
      q: 'How do you track leads and campaign performance?',
      a: 'We track key metrics such as ad spend, leads, cost per lead and campaign performance to identify opportunities for improvement.',
    },
    {
      num: '09',
      q: 'How quickly can we start?',
      a: 'Once we understand your business and receive the required information, access and creative requirements, we can begin the campaign setup process.',
    },
    {
      num: '10',
      q: 'How do I get started with DictoX?',
      a: 'Contact our team for a consultation. We’ll understand your business and goals and discuss the right advertising approach for you.',
    },
  ];

  const allFaqs = [...leftFaqs, ...rightFaqs];

  const toggleIndex = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="py-10 sm:py-14 md:py-18 relative w-full overflow-hidden bg-slate-50/50 border-t border-slate-200/80">
      {/* Subtle top ambient aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/35 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Subheading */}
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0011a8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            FAQ
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
              Questions.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our customer acquisition and performance marketing process.
          </p>
        </AnimatedSection>

        {/* Mobile View: Clean Accordion Stack (md:hidden) */}
        <div className="block md:hidden space-y-2.5">
          {allFaqs.map((faq) => {
            const isOpen = openIndex === `m-${faq.num}`;
            return (
              <div
                key={faq.num}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0011a8] shadow-sm ring-1 ring-blue-50'
                    : 'border-slate-200/90 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggleIndex(`m-${faq.num}`)}
                  className="w-full p-3.5 text-left flex items-center justify-between gap-2.5 text-xs font-bold text-slate-900 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#0011a8] font-extrabold">{faq.num}.</span>
                    <span className="leading-snug">{faq.q}</span>
                  </div>
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
                      <div className="px-3.5 pb-3.5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop FAQ 2-Column Accordion Grid (hidden md:grid) */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 lg:gap-5 items-start">
          
          {/* Column 1 (01-05) */}
          <div className="space-y-3">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openIndex === `l-${idx}`;
              return (
                <div
                  key={faq.num}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#0011a8] shadow-md ring-2 ring-blue-50'
                      : 'border-slate-200/90 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(`l-${idx}`)}
                    className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-[#0011a8] font-extrabold">{faq.num}.</span>
                      <span className="leading-snug">{faq.q}</span>
                    </div>
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
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Column 2 (06-10) */}
          <div className="space-y-3">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openIndex === `r-${idx}`;
              return (
                <div
                  key={faq.num}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#0011a8] shadow-md ring-2 ring-blue-50'
                      : 'border-slate-200/90 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleIndex(`r-${idx}`)}
                    className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-[#0011a8] font-extrabold">{faq.num}.</span>
                      <span className="leading-snug">{faq.q}</span>
                    </div>
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
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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

        {/* CTA - Still Have Questions? Talk To Us → */}
        <AnimatedSection direction="up" delay={0.15} className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-3.5 sm:p-4 px-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Still Have Questions?
            </span>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs group"
            >
              <span>Talk To Us</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
