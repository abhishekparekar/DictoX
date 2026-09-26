import React, { useState } from 'react';
import { faqsData } from '../data/faqs';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQSection({ onOpenConsultation }) {
  const [openId, setOpenId] = useState('faq-1');

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F5F8F7] text-[#0A1714] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0A1714] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with DictoX Marketing, our advertising philosophy, ad budgets, and onboarding timelines.
          </p>
        </div>

        {/* 10 Accordion Items */}
        <div className="mt-14 space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:border-emerald-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-zinc-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-emerald-600 text-white'
                        : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100 animate-in fade-in-50 duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-base sm:text-lg text-zinc-900">
              Have a question specific to your business?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
              Speak directly with founder Suresh More on our free strategy consultation.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-brand-dark hover:bg-brand-surface border border-zinc-800 transition-all duration-300 shadow-md whitespace-nowrap"
          >
            <span>Ask On Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-brand-emerald" />
          </button>
        </div>
      </div>
    </section>
  );
}
