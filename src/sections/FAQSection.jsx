import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleLeft = (idx) => {
    setOpenIndex(openIndex === `l-${idx}` ? null : `l-${idx}`);
  };

  const toggleRight = (idx) => {
    setOpenIndex(openIndex === `r-${idx}` ? null : `r-${idx}`);
  };

  return (
    <section id="faq" className="py-7 sm:py-10 lg:py-12 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Responsive Grid: Left Title + Right FAQ Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left: Heading (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900">
              Got Questions? <br className="hidden sm:inline" />
              We've Got Answers.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal leading-relaxed">
              Everything you need to know about our performance marketing partnerships and lead generation delivery.
            </p>
          </div>

          {/* Right: FAQ Rows in 2 sub-columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* Column 1 */}
            <div className="space-y-2.5">
              {leftFaqs.map((faq, idx) => {
                const isOpen = openIndex === `l-${idx}`;
                return (
                  <div
                    key={faq.num}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'border-[#00f59b]/80 shadow-[0_4px_20px_rgba(0,245,155,0.12)] bg-white'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleLeft(idx)}
                      className="w-full p-3 sm:p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900 cursor-pointer"
                    >
                      <span className="line-clamp-2">{faq.q}</span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isOpen
                            ? 'bg-[#00f59b] text-slate-950 rotate-180 shadow-xs'
                            : 'bg-slate-200/80 text-slate-600 rotate-0'
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-3 sm:px-3.5 pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5 bg-white">
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
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'border-[#00f59b]/80 shadow-[0_4px_20px_rgba(0,245,155,0.12)] bg-white'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleRight(idx)}
                      className="w-full p-3 sm:p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900 cursor-pointer"
                    >
                      <span className="line-clamp-2">{faq.q}</span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isOpen
                            ? 'bg-[#00f59b] text-slate-950 rotate-180 shadow-xs'
                            : 'bg-slate-200/80 text-slate-600 rotate-0'
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-3 sm:px-3.5 pb-3.5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5 bg-white">
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

      </div>
    </section>
  );
}
