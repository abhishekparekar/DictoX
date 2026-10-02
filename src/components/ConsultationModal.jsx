import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Loader2, 
  Sparkles, 
  Phone, 
  Mail, 
  User, 
  Building2, 
  ChevronDown,
  Clock
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { saveTenantInquiry } from '../firebase';

const inputBase = "w-full bg-slate-50/70 hover:bg-white focus:bg-white border rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0011a8] focus:ring-2 focus:ring-[#0011a8]/15 transition-all";
const labelBase = "block text-[9.5px] sm:text-[10.5px] font-bold text-slate-700 uppercase tracking-wide mb-0.5";

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    industry: 'Real Estate',
    service: 'Meta Ads',
    budget: '₹50,000 - ₹1,00,000',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Required';
    if (!formData.phone.trim()) {
      e.phone = 'Required';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      e.phone = 'Invalid phone';
    }
    if (!formData.email.trim()) {
      e.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      e.email = 'Invalid email';
    }
    if (!formData.businessName.trim()) {
      e.businessName = 'Required';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await saveTenantInquiry({ ...formData, source: 'chat_now_modal_form' });
      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      industry: 'Real Estate',
      service: 'Meta Ads',
      budget: '₹50,000 - ₹1,00,000',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          {/* Centered Compact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden my-auto flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Brand Gradient Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0011a8] via-[#2563eb] to-[#00a63e] shrink-0" />

            {/* Compact Header */}
            <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-slate-100 shrink-0 bg-slate-50/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0011a8] shrink-0">
                  <Sparkles className="w-4 h-4 text-[#0011a8]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 id="modal-title" className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                      Chat With DictoX Team
                    </h2>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#00a63e] bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00a63e] animate-pulse" />
                      Online
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Direct access to Suresh More · Free audit
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-7 h-7 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-black flex items-center justify-center transition-colors border border-slate-200/80 cursor-pointer shrink-0 ml-2"
                aria-label="Close modal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modal Body with smooth scrolling */}
            <div className="flex-1 overflow-y-auto px-3.5 sm:px-5 py-3 space-y-2.5">
              {isSuccess ? (
                /* Success Confirmation State */
                <div className="py-3 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-xs">
                    <CheckCircle2 className="w-7 h-7 text-[#00a63e]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      Inquiry Received!
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 max-w-xs mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Suresh More &amp; our team will connect with you within <strong className="text-[#0011a8]">15 minutes</strong>.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-slate-50/80 rounded-xl border border-slate-200/90 p-3 text-left space-y-1.5 text-[11px] max-w-xs mx-auto">
                    {[
                      { label: 'Business', val: formData.businessName },
                      { label: 'Phone', val: formData.phone },
                      { label: 'Service', val: formData.service, color: 'text-[#0011a8]' },
                      { label: 'Budget', val: formData.budget, color: 'text-[#00a63e]' },
                    ].map(({ label, val, color }) => (
                      <div key={label} className="flex items-center justify-between border-b border-slate-200/40 pb-1 last:border-0 last:pb-0">
                        <span className="text-slate-500 font-medium">{label}</span>
                        <span className={`font-bold ${color || 'text-slate-900'}`}>{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Immediate WhatsApp Action */}
                  <div className="space-y-2 max-w-xs mx-auto pt-1">
                    <a
                      href={`https://wa.me/917796407424?text=Hi%20Suresh%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.businessName || 'my business')}%20on%20DictoX%20Marketing.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs font-bold shadow-[0_4px_12px_rgba(0,166,62,0.3)] transition-all cursor-pointer"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      Chat Immediately on WhatsApp
                    </a>
                    <button
                      onClick={handleClose}
                      className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                /* Ultra-Compact 2-Column Responsive Form */
                <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5">
                  {/* Row 1: Name & Phone (2 columns on all devices) */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    <div>
                      <div className="flex items-center justify-between mb-0.5">
                        <label className={labelBase}>Full Name *</label>
                        {errors.name && <span className="text-red-500 text-[9px] font-bold">{errors.name}</span>}
                      </div>
                      <div className="relative">
                        <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`${inputBase} pl-8 ${errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'}`}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-0.5">
                        <label className={labelBase}>Phone / WA *</label>
                        {errors.phone && <span className="text-red-500 text-[9px] font-bold">{errors.phone}</span>}
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        <input
                          type="tel"
                          placeholder="7796407424"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`${inputBase} pl-8 ${errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Work Email & Business Name (2 columns on all devices) */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    <div>
                      <div className="flex items-center justify-between mb-0.5">
                        <label className={labelBase}>Work Email *</label>
                        {errors.email && <span className="text-red-500 text-[9px] font-bold">{errors.email}</span>}
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        <input
                          type="email"
                          placeholder="name@work.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`${inputBase} pl-8 ${errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200'}`}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-0.5">
                        <label className={labelBase}>Business / Brand *</label>
                        {errors.businessName && <span className="text-red-500 text-[9px] font-bold">{errors.businessName}</span>}
                      </div>
                      <div className="relative">
                        <Building2 className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Apex Realty"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className={`${inputBase} pl-8 ${errors.businessName ? 'border-red-400 bg-red-50/20' : 'border-slate-200'}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Service & Monthly Budget (2 columns on all devices) */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    <div>
                      <label className={labelBase}>Service Needed</label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className={`${inputBase} border-slate-200 appearance-none pr-6 cursor-pointer font-medium truncate`}
                        >
                          <option value="Meta Ads">Meta Ads (FB & Insta)</option>
                          <option value="Google & YouTube Ads">Google & YouTube Ads</option>
                          <option value="WhatsApp API">WhatsApp Automation</option>
                          <option value="Full-Funnel Growth">Full-Funnel Growth</option>
                          <option value="Personal Branding">Personal Branding</option>
                          <option value="Meta Ads Course">1-on-1 Mentorship</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className={labelBase}>Monthly Budget</label>
                      <div className="relative">
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className={`${inputBase} border-slate-200 appearance-none pr-6 cursor-pointer font-medium truncate`}
                        >
                          <option value="₹30,000 - ₹50,000">₹30k – ₹50k / mo</option>
                          <option value="₹50,000 - ₹1,00,000">₹50k – ₹1L / mo</option>
                          <option value="₹1,00,000 - ₹3,00,000">₹1L – ₹3L / mo</option>
                          <option value="₹3,00,000+">₹3L+ / mo (Scale)</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Optional Short Message */}
                  <div>
                    <label className={labelBase}>Goals / Note (Optional)</label>
                    <input
                      type="text"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need high ROI buyer leads in Pune..."
                      className={`${inputBase} border-slate-200`}
                    />
                  </div>

                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-[#090d16] hover:bg-[#0011a8] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(0,17,168,0.2)] hover:shadow-[0_6px_20px_rgba(0,17,168,0.35)] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-60 group mt-1"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-[#00a63e]" />
                        <span>Submit Inquiry &amp; Get Strategy Plan</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Divider */}
                  <div className="relative flex items-center justify-center py-0.5">
                    <div className="border-t border-slate-200/90 w-full" />
                    <span className="bg-white px-2 text-[9px] uppercase font-bold text-slate-400 shrink-0">
                      Or Prefer Instant WhatsApp?
                    </span>
                  </div>

                  {/* Quick Direct WhatsApp Button */}
                  <a
                    href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20clicked%20Chat%20Now%20on%20your%20website%20and%20would%20like%20to%20discuss%20growing%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3.5 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span>Chat Directly on WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>

                  {/* Security & Fast Response Trust Strip */}
                  <div className="flex items-center justify-center gap-3 text-[9.5px] text-slate-500 pt-0.5">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#0011a8]" />
                      <span>15-min fast response</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#00a63e]" />
                      <span>100% Confidential</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
