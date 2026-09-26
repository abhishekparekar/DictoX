import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(null);

  const leftFaqs = [
    {
      q: 'What does DictoX Marketing do?',
      a: 'DictoX Marketing is a performance marketing agency specializing in qualified customer acquisition through Meta Ads, Google & YouTube Ads, WhatsApp API automation, and high-converting funnel design.',
    },
    {
      q: 'Which services does DictoX provide?',
      a: 'We offer full-service performance marketing: Meta Ads (FB & IG), Google Search & YouTube Ads, WhatsApp Business API automation, creative ad design, copywriting, and CRM integration.',
    },
    {
      q: 'Do you work with businesses across India?',
      a: 'Yes, we manage advertising campaigns for ambitious brands across India in real estate, education, healthcare, ecommerce, restaurants, salons, and franchise businesses.',
    },
    {
      q: 'Is the advertising budget separate from your service fees?',
      a: 'Yes. Ad spend is paid directly to advertising platforms (Meta/Google) from your dedicated ad account for 100% transparency. Our fee covers strategy, execution, creative production, and daily optimization.',
    },
  ];

  const rightFaqs = [
    {
      q: 'How much should I spend on advertising?',
      a: 'We recommend starting with an ad budget of ₹20,000 to ₹50,000 per month depending on your industry and market size to test, gather data, and validate cost per acquisition.',
    },
    {
      q: 'Do you provide ad creatives and copywriting?',
      a: 'Yes! We create all high-converting ad visuals, carousel graphics, reel scripts, and conversion copy tailored specifically to your target demographic.',
    },
    {
      q: 'How quickly can we start?',
      a: 'Once we complete your strategy consultation and audit, our team builds the campaign structure, creatives, and tracking setup to launch within 4 to 7 business days.',
    },
    {
      q: 'Do you provide a money-back guarantee?',
      a: 'While ad platforms charge for ad impressions, we work on performance milestones and transparent daily dashboards so you have complete control over spend and results.',
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

        {/* 2 Column Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          
          {/* Left Column */}
          <div className="space-y-3">
            {leftFaqs.map((faq, idx) => {
              const isOpen = openIndex === `l-${idx}`;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl bg-slate-50/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleLeft(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#00d084] transition-colors"
                  >
                    <span>{faq.q}</span>
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

          {/* Right Column */}
          <div className="space-y-3">
            {rightFaqs.map((faq, idx) => {
              const isOpen = openIndex === `r-${idx}`;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl bg-slate-50/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleRight(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#00d084] transition-colors"
                  >
                    <span>{faq.q}</span>
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
