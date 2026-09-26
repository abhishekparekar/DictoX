import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
    <section className="py-14 sm:py-16 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d084]">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900 mt-1">
            Got Questions? We've Got Answers.
          </h2>
        </div>

        {/* 2 Column Accordion Grid (5 left, 5 right = 10 FAQs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          
          {/* Left Column (01 to 05) */}
          <div className="space-y-3">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openIndex === `l-${idx}`;
              return (
                <div
                  key={faq.num}
                  className="border border-slate-200 rounded-xl bg-slate-50/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleLeft(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#00d084] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400">{faq.num}.</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (06 to 10) */}
          <div className="space-y-3">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openIndex === `r-${idx}`;
              return (
                <div
                  key={faq.num}
                  className="border border-slate-200 rounded-xl bg-slate-50/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleRight(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#00d084] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400">{faq.num}.</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
