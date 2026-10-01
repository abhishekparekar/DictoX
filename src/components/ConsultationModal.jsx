import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { saveTenantInquiry } from '../firebase';

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
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business or brand name';
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
        source: 'chat_now_contact_form',
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(0,17,168,0.18)] overflow-hidden my-auto animate-in zoom-in-95 duration-200 text-left">
        
        {/* Brand Accent Top Line */}
        <div className="h-1.5 bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e]" />

        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00a63e] animate-pulse" />
              <h3 id="contact-modal-title" className="text-base sm:text-lg font-black text-slate-950 tracking-tight">
                Let's Talk About Your Business
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Fill out the form below or chat with our team on WhatsApp.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-full bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 max-h-[82vh] overflow-y-auto space-y-4">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-[#00a63e] border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xl font-black text-slate-950">
                  Request Received Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-950">{formData.name}</strong>. Suresh More and the DictoX strategy team will review your business requirements and connect with you shortly.
                </p>
              </div>

              {/* Inquiry Summary Box */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-left max-w-sm mx-auto space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Business:</span>
                  <span className="text-slate-900 font-bold">{formData.businessName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Industry:</span>
                  <span className="text-slate-900 font-bold">{formData.industry}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Service:</span>
                  <span className="text-[#0011a8] font-bold">{formData.service}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Target Budget:</span>
                  <span className="text-[#00a63e] font-bold">{formData.budget}</span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center max-w-sm mx-auto">
                <a
                  href={`https://wa.me/917796407424?text=Hi%20Suresh%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.businessName || 'my business')}%20on%20the%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat Immediately on WhatsApp →</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors ${
                      errors.name ? 'border-red-500 ring-1 ring-red-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.name && <span className="text-red-500 text-[10.5px] mt-0.5 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors ${
                      errors.phone ? 'border-red-500 ring-1 ring-red-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && <span className="text-red-500 text-[10.5px] mt-0.5 block">{errors.phone}</span>}
                </div>
              </div>

              {/* Row 2: Work Email & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors ${
                      errors.email ? 'border-red-500 ring-1 ring-red-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <span className="text-red-500 text-[10.5px] mt-0.5 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Business / Brand Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your business name..."
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={`w-full bg-slate-50 border rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors ${
                      errors.businessName ? 'border-red-500 ring-1 ring-red-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.businessName && <span className="text-red-500 text-[10.5px] mt-0.5 block">{errors.businessName}</span>}
                </div>
              </div>

              {/* Row 3: Industry & Service Needed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Your Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors cursor-pointer"
                  >
                    <option value="Real Estate">Real Estate</option>
                    <option value="Education & EdTech">Education & EdTech</option>
                    <option value="Healthcare & Clinics">Healthcare & Clinics</option>
                    <option value="Restaurants & Cafés">Restaurants & Cafés</option>
                    <option value="Gyms & Fitness">Gyms & Fitness</option>
                    <option value="Salons & Local Services">Salons & Local Services</option>
                    <option value="Automobile & EV">Automobile & EV</option>
                    <option value="Franchise & Dealerships">Franchise & Dealerships</option>
                    <option value="E-commerce & Online Stores">E-commerce & Online Stores</option>
                    <option value="B2B & Professional Services">B2B & Professional Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors cursor-pointer"
                  >
                    <option value="Meta Ads">Meta Ads (Facebook & Instagram)</option>
                    <option value="Google & YouTube Ads">Google & YouTube Ads</option>
                    <option value="WhatsApp API">WhatsApp API Integration</option>
                    <option value="Automation Services">Marketing Automation Services</option>
                    <option value="Personal Branding">Personal Branding</option>
                  </select>
                </div>
              </div>

              {/* Monthly Ad Budget Tier */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Estimated Monthly Advertising Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors cursor-pointer"
                >
                  <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000 / month</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 / month (Recommended)</option>
                  <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 / month</option>
                  <option value="₹3,00,000+">₹3,00,000+ / month (Scale & High Volume)</option>
                </select>
              </div>

              {/* Brief Description of Goals */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Brief Description of Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter your advertising goals, challenges or targets..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0011a8] transition-colors"
                />
              </div>

              {/* Direct WhatsApp Quick Chat Strip */}
              <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 fill-[#00a63e] shrink-0" />
                  <span className="text-[11px] font-bold text-emerald-950">
                    Need instant response?
                  </span>
                </div>
                <a
                  href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20schedule%20a%20strategy%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#00a63e] hover:underline flex items-center gap-0.5 shrink-0"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-1.5 text-[10.5px] text-slate-500 pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00a63e] shrink-0" />
                <span>100% Confidential. Directly reviewed by Suresh More & DictoX strategists.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70 group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Your Request...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-[#00a63e]" />
                      <span>Submit Free Consultation Request</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
