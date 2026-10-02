import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Loader2, Sparkles, Phone, Mail, User, Building2, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { saveTenantInquiry } from '../firebase';

const inputBase = "w-full bg-white border rounded-xl px-3.5 py-2.5 text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#0011a8] focus:ring-1 focus:ring-[#0011a8]/20 transition-all";
const labelBase = "block text-[11px] font-bold text-black uppercase tracking-wide mb-1";

export default function ConsultationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 2-step form
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', businessName: '',
    industry: 'Real Estate', service: 'Meta Ads',
    budget: '₹50,000 - ₹1,00,000', message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape' && isOpen) onClose(); };
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

  if (!isOpen) return null;

  const validateStep1 = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.phone.trim()) e.phone = 'Phone is required';
    else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) e.phone = 'Enter valid 10-digit number';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter valid email';
    if (!formData.businessName.trim()) e.businessName = 'Business name is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep1()) { setStep(2); setErrors({}); } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await saveTenantInquiry({ ...formData, source: 'chat_now_contact_form' });
      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false); setStep(1);
    setFormData({ name: '', phone: '', email: '', businessName: '', industry: 'Real Estate', service: 'Meta Ads', budget: '₹50,000 - ₹1,00,000', message: '' });
    setErrors({});
    onClose();
  };

  const Field = ({ icon: Icon, label, error, children }) => (
    <div>
      {label && <label className={labelBase}>{label}</label>}
      <div className="relative">
        {Icon && <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />}
        {React.cloneElement(children, { className: `${inputBase} ${Icon ? 'pl-9' : ''} ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-slate-200'}` })}
      </div>
      {error && <p className="text-red-500 text-[10.5px] mt-1">{error}</p>}
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-slate-950/70 backdrop-blur-sm"
      role="dialog" aria-modal="true" aria-labelledby="modal-title"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      {/* Modal Panel — slides up on mobile, centered on desktop */}
      <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh] sm:max-h-[90vh]">

        {/* ── Top accent line ── */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] shrink-0" />

        {/* ── Header ── */}
        <div className="flex items-start justify-between px-5 pt-4 pb-3 border-b border-slate-100 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#00a63e] animate-pulse shrink-0" />
              <h2 id="modal-title" className="text-base font-black text-black leading-tight">
                Get Free Strategy Consultation
              </h2>
            </div>
            <p className="text-[11px] text-slate-500 font-medium pl-4">
              Reviewed personally by Suresh More &amp; the DictoX team
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-black transition-colors cursor-pointer shrink-0 ml-3"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Step Indicator ── */}
        {!isSuccess && (
          <div className="px-5 pt-3 pb-0 shrink-0">
            <div className="flex items-center gap-2">
              {[1, 2].map((s) => (
                <React.Fragment key={s}>
                  <div className={`flex items-center gap-1.5 text-[10.5px] font-bold transition-colors ${step >= s ? 'text-[#0011a8]' : 'text-slate-300'}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${step >= s ? 'bg-[#0011a8] text-white' : 'bg-slate-100 text-slate-400'}`}>
                      {s}
                    </div>
                    <span className="hidden sm:inline">{s === 1 ? 'Your Details' : 'Business Info'}</span>
                  </div>
                  {s < 2 && <div className={`flex-1 h-px transition-colors ${step > s ? 'bg-[#0011a8]' : 'bg-slate-200'}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* ── Body ── */}
        <div className="flex-1 overflow-y-auto px-5 py-4">

          {/* ── SUCCESS STATE ── */}
          {isSuccess ? (
            <div className="py-4 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                <CheckCircle2 className="w-9 h-9 text-[#00a63e]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-black">Request Received!</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
                  Thank you, <strong className="text-black">{formData.name}</strong>. Suresh &amp; the DictoX team will contact you shortly.
                </p>
              </div>

              {/* Summary */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-3.5 text-left space-y-2 text-xs max-w-xs mx-auto">
                {[
                  { label: 'Business', val: formData.businessName },
                  { label: 'Service', val: formData.service, color: 'text-[#0011a8]' },
                  { label: 'Budget', val: formData.budget, color: 'text-[#00a63e]' },
                ].map(({ label, val, color }) => (
                  <div key={label} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-400 font-medium">{label}</span>
                    <span className={`font-bold ${color || 'text-black'}`}>{val}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-2 max-w-xs mx-auto pt-1">
                <a
                  href={`https://wa.me/917796407424?text=Hi%20Suresh%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.businessName || 'my business')}%20on%20the%20DictoX%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs font-bold shadow-sm transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  Chat Immediately on WhatsApp
                </a>
                <button onClick={handleClose} className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-black text-xs font-semibold transition-all cursor-pointer">
                  Close Window
                </button>
              </div>
            </div>

          ) : step === 1 ? (
            // ── STEP 1: Personal Details ──
            <div className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Field icon={User} label="Full Name *" error={errors.name}>
                  <input type="text" placeholder="Rahul Sharma" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </Field>
                <Field icon={Phone} label="Phone / WhatsApp *" error={errors.phone}>
                  <input type="tel" placeholder="7796407424" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Field icon={Mail} label="Email Address *" error={errors.email}>
                  <input type="email" placeholder="name@business.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </Field>
                <Field icon={Building2} label="Business / Brand *" error={errors.businessName}>
                  <input type="text" placeholder="Apex Realty" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} />
                </Field>
              </div>

              {/* WhatsApp Quick Strip */}
              <div className="flex items-center justify-between gap-2 bg-emerald-50 border border-emerald-200/80 rounded-xl px-3.5 py-2.5">
                <div className="flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 fill-[#00a63e] shrink-0" />
                  <span className="text-[11px] font-semibold text-emerald-900">Prefer instant chat?</span>
                </div>
                <a href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20schedule%20a%20strategy%20consultation" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-[#00a63e] hover:underline flex items-center gap-0.5 shrink-0">
                  WhatsApp Us <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3 rounded-xl bg-[#090d16] hover:bg-[#0011a8] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-[0.98] group"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="flex items-center justify-center gap-1.5 text-[10.5px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00a63e]" />
                100% Confidential · No spam
              </p>
            </div>

          ) : (
            // ── STEP 2: Business Details ──
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className={labelBase}>Your Industry</label>
                  <div className="relative">
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className={`${inputBase} border-slate-200 appearance-none pr-8 cursor-pointer`}
                    >
                      {['Real Estate','Education & EdTech','Healthcare & Clinics','Restaurants & Cafés','Gyms & Fitness','Salons & Local Services','Automobile & EV','Franchise & Dealerships','E-commerce & Online Stores','B2B & Professional Services'].map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className={labelBase}>Service Needed</label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`${inputBase} border-slate-200 appearance-none pr-8 cursor-pointer`}
                    >
                      <option value="Meta Ads">Meta Ads (Facebook & Instagram)</option>
                      <option value="Google & YouTube Ads">Google & YouTube Ads</option>
                      <option value="WhatsApp API">WhatsApp API Integration</option>
                      <option value="Automation Services">Marketing Automation</option>
                      <option value="Personal Branding">Personal Branding</option>
                      <option value="Meta Ads Course">Meta Ads Course</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelBase}>Monthly Advertising Budget</label>
                <div className="relative">
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className={`${inputBase} border-slate-200 appearance-none pr-8 cursor-pointer`}
                  >
                    <option value="₹30,000 - ₹50,000">₹30,000 – ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 – ₹1,00,000 / month</option>
                    <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 – ₹3,00,000 / month</option>
                    <option value="₹3,00,000+">₹3,00,000+ / month (High Volume)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className={labelBase}>Goals / Message (Optional)</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us your advertising goals or challenges..."
                  className={`${inputBase} border-slate-200 resize-none`}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-black text-sm font-semibold transition-all cursor-pointer shrink-0"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 rounded-xl bg-[#090d16] hover:bg-[#0011a8] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-[0.98] disabled:opacity-60 group"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></>
                  ) : (
                    <><Sparkles className="w-3.5 h-3.5 text-[#00a63e]" /><span>Submit Request</span><ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </div>

              <p className="flex items-center justify-center gap-1.5 text-[10.5px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00a63e]" />
                Directly reviewed by Suresh More · 100% Confidential
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
