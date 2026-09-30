import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { saveTenantInquiry } from '../firebase';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    industry: 'Real Estate',
    adPlatform: 'Meta Ads (Facebook/Instagram)',
    monthlyBudget: '₹50,000 - ₹1,00,000',
    primaryGoal: 'Generate More Qualified Leads',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business or brand name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone/WhatsApp number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await saveTenantInquiry({
        ...formData,
        source: 'modal_consultation_form',
      });
      setIsSuccess(true);
    } catch (err) {
      console.error('Error saving consultation inquiry:', err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      businessName: '',
      phone: '',
      email: '',
      industry: 'Real Estate',
      adPlatform: 'Meta Ads (Facebook/Instagram)',
      monthlyBudget: '₹50,000 - ₹1,00,000',
      primaryGoal: 'Generate More Qualified Leads',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-white border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(0,17,168,0.15)] overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        
        {/* Top brand accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e]" />

        {/* Header */}
        <div className="px-4 sm:px-5 py-2.5 sm:py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <h3 id="modal-title" className="text-sm sm:text-base font-bold text-slate-950 font-display">
              Chat Now & Strategy Inquiry
            </h3>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-[#00a63e] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a63e] animate-pulse" />
              Direct Connect
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-full bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-5 max-h-[85vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-5 sm:py-7 text-center space-y-3.5 animate-in fade-in duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-[#00a63e] border border-[#00a63e]">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                  Inquiry Received!
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Suresh More and our strategy team will reach out via WhatsApp & Call shortly.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-left max-w-sm mx-auto space-y-1.5 text-xs">
                <div className="flex justify-between py-0.5 border-b border-slate-200">
                  <span className="text-slate-500">Business:</span>
                  <span className="text-slate-900 font-bold">{formData.businessName}</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-slate-200">
                  <span className="text-slate-500">Industry:</span>
                  <span className="text-slate-900 font-bold">{formData.industry}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-500">Budget:</span>
                  <span className="text-[#0011a8] font-bold">{formData.monthlyBudget}</span>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={handleReset} 
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#090d16] hover:bg-[#0011a8] cursor-pointer shadow-sm transition-all"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 text-left">
              
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-lg px-2.5 py-1.5 sm:py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors ${
                      errors.name ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-[10px] mt-0.5 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone/WhatsApp"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-lg px-2.5 py-1.5 sm:py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && <span className="text-red-500 text-[10px] mt-0.5 block">{errors.phone}</span>}
                </div>
              </div>

              {/* Row 2: Business Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Business / Brand Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter business name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-lg px-2.5 py-1.5 sm:py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors ${
                      errors.businessName ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.businessName && <span className="text-red-500 text-[10px] mt-0.5 block">{errors.businessName}</span>}
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Work Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-lg px-2.5 py-1.5 sm:py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <span className="text-red-500 text-[10px] mt-0.5 block">{errors.email}</span>}
                </div>
              </div>

              {/* Row 3: Industry & Target Ad Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Industry / Sector
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 sm:py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors cursor-pointer"
                  >
                    <option value="Real Estate">Real Estate & Developers</option>
                    <option value="Healthcare & Clinics">Healthcare & Clinics</option>
                    <option value="Education & Coaching">Education & Coaching</option>
                    <option value="Automobile & EV">Automobile & Dealerships</option>
                    <option value="E-Commerce">E-Commerce & D2C</option>
                    <option value="Restaurants & F&B">Restaurants & F&B</option>
                    <option value="Gyms & Fitness">Gyms & Fitness</option>
                    <option value="Salons & Aesthetics">Salons & Aesthetics</option>
                    <option value="Franchise & Retail">Franchise & Retail</option>
                    <option value="B2B & Professional">B2B & Services</option>
                    <option value="Other">Other Sector</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Target Monthly Budget
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 sm:py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors cursor-pointer"
                  >
                    <option value="Under ₹30,000">Under ₹30,000 / month</option>
                    <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 / month</option>
                    <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 / month</option>
                    <option value="₹3,00,000+">₹3,00,000+ / month (Enterprise)</option>
                  </select>
                </div>
              </div>

              {/* Platform Interest Chips */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Primary Ad Platform Interest
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    'Meta Ads',
                    'Google Ads',
                    'WhatsApp Funnels',
                    'Full Strategy'
                  ].map((platform) => (
                    <button
                      type="button"
                      key={platform}
                      onClick={() => setFormData({ ...formData, adPlatform: platform })}
                      className={`text-[10.5px] py-1.5 px-1.5 rounded-lg border text-center transition-all cursor-pointer truncate ${
                        formData.adPlatform === platform
                          ? 'bg-blue-50 border-[#0011a8] text-[#0011a8] font-bold shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Requirement (Optional) */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Specific Challenge / Goal (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lower CPL, scale qualified site visits..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 sm:py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors"
                />
              </div>

              {/* Trust disclaimer */}
              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00a63e] shrink-0" />
                <span>100% Confidential. Instant notification to Suresh More & DictoX team.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-[#00a63e]" />
                      <span>Submit Inquiry & Chat Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
