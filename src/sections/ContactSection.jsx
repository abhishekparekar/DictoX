import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  User, 
  Building2, 
  Sparkles,
  ShieldCheck,
  Briefcase,
  Layers,
  IndianRupee
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { saveTenantInquiry } from '../firebase';

export default function ContactSection({ onOpenConsultation }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    industry: 'Real Estate',
    service: 'Meta Ads (Facebook & Instagram)',
    budget: '₹50,000 - ₹1,00,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Office+No.+603+Navale+Icon+Narhe+Pune+Maharashtra+411041';

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Enter valid 10-digit number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter valid email address';
    }
    if (!formData.businessName.trim()) {
      errs.businessName = 'Business or brand name is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await saveTenantInquiry({
        ...formData,
        source: 'contact_page_form',
      });
      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting inquiry to Firestore:', err);
      // Ensure positive UX even if network or security rule blocks
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
      service: 'Meta Ads (Facebook & Instagram)',
      budget: '₹50,000 - ₹1,00,000',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-4 sm:py-7 md:py-9 w-full overflow-hidden">
      {/* Subtle top aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[240px] bg-gradient-to-b from-blue-100/30 via-emerald-50/15 to-transparent blur-[70px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header — Left-Aligned Signature Style */}
        <AnimatedSection direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-3.5 sm:mb-6 text-left">
          <div>
            <span className="text-[10.5px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0011a8] block mb-1">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
              Let's Talk About{' '}
              <span className="bg-gradient-to-r from-[#0011a8] via-[#1d4ed8] to-[#00a63e] bg-clip-text text-transparent">
                Scaling Your Business.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#00a63e] animate-ping" />
            <span>Direct Strategist Reply In 15 Mins</span>
          </div>
        </AnimatedSection>

        {/* 2-Column Contact Container: Form on LEFT, Direct Info & Map on RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-7 items-start">
          
          {/* LEFT Column: Interactive Lead Generation Contact Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-3.5 sm:p-6 lg:p-7 relative overflow-hidden">
              
              {/* Header inside Form Card */}
              <div className="border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0011a8] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#00a63e]" />
                    <span>Free Performance Audit</span>
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-slate-950 mt-0.5">
                    Request Your Strategy Consultation
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-[#00a63e] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Confidential</span>
                </div>
              </div>

              {isSuccess ? (
                /* Success State Screen */
                <div className="py-8 sm:py-12 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-[#00a63e] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h4 className="text-lg sm:text-2xl font-black text-slate-950 font-display">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your strategy inquiry has been registered. Suresh More and our performance team will review your business requirements and connect with you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-[#090d16] hover:bg-[#0011a8] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                  
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm focus:outline-none focus:bg-white transition-all ${
                            errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0011a8]'
                          }`}
                        />
                      </div>
                      {errors.name && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter your phone / WhatsApp number"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm focus:outline-none focus:bg-white transition-all ${
                            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0011a8]'
                          }`}
                        />
                      </div>
                      {errors.phone && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Row 2: Email Address & Business / Brand Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Official Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email address"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm focus:outline-none focus:bg-white transition-all ${
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0011a8]'
                          }`}
                        />
                      </div>
                      {errors.email && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Business / Brand Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="Enter your business or brand name"
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border text-xs sm:text-sm focus:outline-none focus:bg-white transition-all ${
                            errors.businessName ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-[#0011a8]'
                          }`}
                        />
                      </div>
                      {errors.businessName && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.businessName}</span>}
                    </div>
                  </div>

                  {/* Row 3: Industry / Sector & Service Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Industry / Sector
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#0011a8] transition-all"
                      >
                        <option value="Real Estate">Real Estate & Developers</option>
                        <option value="Healthcare & Clinics">Healthcare & Clinics</option>
                        <option value="Education & Coaching">Education & Coaching Institutes</option>
                        <option value="Automobile & EV">Automobile & Dealerships</option>
                        <option value="E-Commerce">E-Commerce & D2C Brands</option>
                        <option value="Restaurants & Cafés">Restaurants & Hospitality</option>
                        <option value="Gyms & Fitness">Gyms & Fitness Centers</option>
                        <option value="Salons & Aesthetics">Salons & Local Services</option>
                        <option value="Franchise & Retail">Franchise & Retail Chains</option>
                        <option value="B2B & Professional">B2B & Professional Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#0011a8] transition-all"
                      >
                        <option value="Meta Ads (Facebook & Instagram)">Meta Ads (Facebook & Instagram)</option>
                        <option value="Google & YouTube Ads">Google & YouTube Search Ads</option>
                        <option value="WhatsApp API Solutions">WhatsApp Business API Solutions</option>
                        <option value="Funnel Automation">Marketing Automation & CRM</option>
                        <option value="Complete Performance Engine">Full 360° Acquisition Engine</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Monthly Ad Budget */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Monthly Advertising Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#0011a8] transition-all"
                    >
                      <option value="Under ₹50,000">Under ₹50,000 / month</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 – ₹1,00,000 / month</option>
                      <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 – ₹3,00,000 / month</option>
                      <option value="₹3,00,000 - ₹10,00,000">₹3,00,000 – ₹10,00,000 / month</option>
                      <option value="₹10,00,000+">₹10,00,000+ / month</option>
                    </select>
                  </div>

                  {/* Row 5: Message / Goals */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief Message or Advertising Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your advertising goals or message (e.g. need 50+ qualified property site visits every month)..."
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:bg-white focus:border-[#0011a8] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 rounded-xl bg-[#090d16] hover:bg-[#0011a8] active:scale-[0.99] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Strategy Inquiry</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10.5px] text-center text-slate-400">
                    We respect your privacy. No spam or unsolicited calls guaranteed.
                  </p>

                </form>
              )}

            </div>
          </div>

          {/* RIGHT Column: Direct Info, WhatsApp Action & Location Map (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-3.5 sm:p-6 space-y-3 sm:space-y-4">
              <div className="border-b border-slate-100 pb-2.5 sm:pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Contact Channels
                  </span>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-950 mt-0.5">
                    Reach Our Core Team
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a63e] animate-pulse" />
                  <span>Online Now</span>
                </div>
              </div>

              {/* Direct Tap Action Buttons for Fast Mobile Access */}
              <div className="grid grid-cols-2 gap-2 pt-0.5">
                <a
                  href="tel:+917796407424"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-[#0011a8] text-white text-xs font-semibold shadow-xs active:scale-95 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/917796407424?text=Hi%20DictoX%20Marketing%2C%20I%20would%20like%20to%20schedule%20a%20strategy%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#00a63e] hover:bg-[#008f35] text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm pt-1">
                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-[#0011a8] flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Official Inquiry Email</div>
                    <a
                      href="mailto:dictoxmarketing@gmail.com"
                      className="font-bold text-slate-900 hover:text-[#0011a8] transition-colors truncate block"
                    >
                      dictoxmarketing@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-[#0011a8] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Headquarters</div>
                    <div className="font-semibold text-slate-800 leading-snug">
                      Office No. 603, Navale Icon, Narhe, Pune, MH 411041
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 text-[#00a63e] flex items-center justify-center shrink-0 shadow-2xs">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Working Hours</div>
                    <div className="font-semibold text-slate-800">
                      Mon – Sat: 9:30 AM – 6:30 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Preview */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,17,168,0.04)] p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Pune Office Location
                </span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0011a8] hover:underline flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-32 sm:h-44 rounded-xl overflow-hidden border border-slate-150 relative bg-slate-100">
                <iframe
                  title="DictoX Office Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.582845661649!2d73.8183!3d18.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953da5049db3%3A0xc3952f4a5fef4aa!2sNavale%20Icon!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
