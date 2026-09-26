import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Loader2, Sparkles, Phone, Mail, Building, Target } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call for static V1
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-brand-surface border border-brand-border rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-6 my-auto animate-in zoom-in-95 duration-200">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="relative px-6 py-5 border-b border-brand-border/60 flex items-center justify-between bg-brand-dark/40">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-brand-emerald uppercase font-semibold">
              Performance Strategy Call
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
              Get Your Free Strategy Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-brand-emerald/15 rounded-full flex items-center justify-center mx-auto text-brand-emerald border border-brand-emerald/30">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-display text-white">
                  Consultation Request Received!
                </h4>
                <p className="text-zinc-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-brand-emerald">{formData.name}</strong>. Suresh More and the DictoX strategy team will review your business requirements and contact you via WhatsApp & Call within business hours.
                </p>
              </div>

              <div className="bg-brand-dark/70 rounded-xl p-4 border border-brand-border text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-400">Business:</span>
                  <span className="text-white font-medium">{formData.businessName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-400">Industry:</span>
                  <span className="text-white font-medium">{formData.industry}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-400">Monthly Budget:</span>
                  <span className="text-brand-emerald font-semibold">{formData.monthlyBudget}</span>
                </div>
              </div>

              <div className="pt-3">
                <button onClick={handleReset} className="btn-primary text-sm font-semibold !py-2.5 !px-6">
                  Done & Back to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <p className="text-xs sm:text-sm text-zinc-300">
                Share details about your business. We will audit your unit economics and present an actionable customer acquisition strategy with zero obligation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Your Full Name <span className="text-brand-emerald">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suresh More"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-brand-dark/80 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-emerald transition-colors ${
                      errors.name ? 'border-red-500' : 'border-brand-border'
                    }`}
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name}</span>}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Business / Brand Name <span className="text-brand-emerald">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Landmark Realty"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={`w-full bg-brand-dark/80 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-emerald transition-colors ${
                      errors.businessName ? 'border-red-500' : 'border-brand-border'
                    }`}
                  />
                  {errors.businessName && <span className="text-red-400 text-xs mt-1 block">{errors.businessName}</span>}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number <span className="text-brand-emerald">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9834036821"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-brand-dark/80 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-emerald transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-brand-border'
                    }`}
                  />
                  {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone}</span>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Work Email Address <span className="text-brand-emerald">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. owner@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-brand-dark/80 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-emerald transition-colors ${
                      errors.email ? 'border-red-500' : 'border-brand-border'
                    }`}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Business Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-brand-dark/80 border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors"
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
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Target Monthly Ad Budget
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full bg-brand-dark/80 border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-emerald transition-colors"
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
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
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
                      className={`text-xs py-2 px-3 rounded-lg border text-center transition-all ${
                        formData.adPlatform === platform
                          ? 'bg-brand-emerald/15 border-brand-emerald text-brand-emerald font-semibold'
                          : 'bg-brand-dark/50 border-brand-border text-zinc-400 hover:text-white hover:border-zinc-600'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Specific Challenge / Goal (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Current cost per lead is too high, or need verified site visits for Baner project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-dark/80 border border-brand-border rounded-xl px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-brand-emerald transition-colors resize-none"
                />
              </div>

              {/* Trust disclaimer */}
              <div className="flex items-center gap-2 text-[11px] text-zinc-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-brand-emerald flex-shrink-0" />
                <span>100% Confidential. No high-pressure sales calls. 100% direct consultation.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-sm font-semibold !py-3 flex items-center justify-center gap-2 shadow-glow-md disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Strategy Request...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Book Free Strategy Consultation</span>
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
