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
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white border border-slate-100 rounded-2xl sm:rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.2)] overflow-hidden my-3 sm:my-6 my-auto animate-in zoom-in-95 duration-200">
        
        {/* Top brand logo gradient accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e]" />

        {/* Header */}
        <div className="relative px-4 sm:px-6 py-3.5 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#0011a8] uppercase font-bold">
              Chat Now • Direct Contact Form
            </span>
            <h3 id="modal-title" className="text-base sm:text-xl md:text-2xl font-bold font-display text-slate-900 mt-0.5">
              Chat Now & Strategy Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-[#00a63e] border-2 border-[#00a63e]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-display text-slate-900">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Suresh More and the DictoX strategy team will review your business requirements and connect with you via WhatsApp & Call shortly.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Business:</span>
                  <span className="text-slate-900 font-bold">{formData.businessName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Industry:</span>
                  <span className="text-slate-900 font-bold">{formData.industry}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Monthly Budget:</span>
                  <span className="text-[#0011a8] font-bold">{formData.monthlyBudget}</span>
                </div>
              </div>

              <div className="pt-3">
                <button 
                  onClick={handleReset} 
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#090d16] hover:bg-[#0011a8] uppercase tracking-wider cursor-pointer shadow-md transition-all"
                >
                  <span>Done & Back to Website</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <p className="text-xs sm:text-sm text-slate-600">
                Fill out the quick contact form below. Suresh More and our performance team will analyze your requirements and reach out via WhatsApp & Call.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Business / Brand Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your business / brand name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors ${
                      errors.businessName ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.businessName && <span className="text-red-500 text-xs mt-1 block">{errors.businessName}</span>}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone or WhatsApp number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Business Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 transition-colors cursor-pointer"
                  >
                    <option value="Real Estate">Real Estate & Developers</option>
                    <option value="Healthcare & Clinics">Healthcare, Hospitals & Dental</option>
                    <option value="Education & Coaching">Education & Coaching Institutes</option>
                    <option value="Automobile & Dealerships">Automobile & Dealerships</option>
                    <option value="Restaurants & Cafés">Restaurants & F&B</option>
                    <option value="Gyms & Fitness">Gyms & Fitness Centers</option>
                    <option value="Salons & Local Services">Salons & Aesthetic Clinics</option>
                    <option value="Franchise & Dealerships">Franchise & Multi-Location</option>
                    <option value="E-commerce Brands">E-commerce Brands</option>
                    <option value="Professional Services">B2B & Professional Services</option>
                    <option value="Other">Other Category</option>
                  </select>
                </div>

                {/* Monthly Ad Budget Range */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Monthly Ad Budget
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-600 transition-colors cursor-pointer"
                  >
                    <option value="Under ₹30,000">Under ₹30,000 / month</option>
                    <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 / month</option>
                    <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 / month</option>
                    <option value="₹3,00,000+">₹3,00,000+ / month (Enterprise)</option>
                  </select>
                </div>
              </div>

              {/* Current Advertising Platform */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Ad Platform Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                      className={`text-xs py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.adPlatform === platform
                          ? 'bg-blue-50 border-[#0011a8] text-[#0011a8] font-bold shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-400'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Challenge / Goal (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Enter your specific advertising challenge or requirement (optional)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0011a8] transition-colors resize-none"
                />
              </div>

              {/* Trust disclaimer */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#00a63e] flex-shrink-0" />
                <span>100% Confidential. Instant notification to Suresh More & DictoX team.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer uppercase tracking-wider disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#00a63e]" />
                      <span>Chat Now & Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
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
