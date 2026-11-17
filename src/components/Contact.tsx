import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  ArrowRight, 
  Sparkles,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) errs.subject = 'Please choose or enter a subject';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message of at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate professional API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fbfbfa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S WORK TOGETHER</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Have an idea? Let's build it.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Have a project in mind, need a website, or want to improve an existing interface? Let's talk about how I can help bring your idea to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-emerald-700 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Current Availability</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Ready for Q1 / Q2 Projects
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Accepting new freelance contracts, agency partnerships, and dedicated front-end roles.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start justify-between gap-4 group">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Direct Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <span className="text-xs text-slate-500 block mt-0.5">Average response: &lt; 2 hours</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                title="Copy email to clipboard"
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors shrink-0 cursor-pointer"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Phone / WhatsApp</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <div className="mt-1 flex items-center gap-2">
                    <a
                      href={PERSONAL_INFO.socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-600 hover:underline flex items-center gap-1"
                    >
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                title="Copy phone to clipboard"
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors shrink-0 cursor-pointer"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">Base Location</span>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">Available worldwide (UTC+5 / Remote)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)]">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, Abdul Rauf will review your project brief and get back to you shortly at your email.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline pt-2 cursor-pointer"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        placeholder="e.g. Sarah Connor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none ${
                          errors.name
                            ? 'border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                            : 'border-slate-200 bg-[#fbfbfa] focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none ${
                          errors.email
                            ? 'border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                            : 'border-slate-200 bg-[#fbfbfa] focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="form-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject / Service Needed <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="form-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none ${
                        errors.subject
                          ? 'border-rose-300 bg-rose-50/30 focus:border-rose-500'
                          : 'border-slate-200 bg-[#fbfbfa] focus:bg-white focus:border-blue-600'
                      }`}
                    >
                      <option value="">Select a project type...</option>
                      <option value="Modern Website Development">Modern Website Development</option>
                      <option value="Landing Page Development">Landing Page Development</option>
                      <option value="Figma to HTML">Figma to HTML Conversion</option>
                      <option value="PSD to HTML">PSD to HTML Conversion</option>
                      <option value="Dashboard Development">Dashboard & Admin UI</option>
                      <option value="Website Optimization">Website Performance & SEO</option>
                      <option value="Other Inquiries">Other / General Inquiry</option>
                    </select>
                    {errors.subject && (
                      <span className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Details & Requirements <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="Tell me about your project goals, timeline, and any Figma or PSD files..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none resize-none ${
                        errors.message
                          ? 'border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                          : 'border-slate-200 bg-[#fbfbfa] focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="submit-contact-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
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

      </div>
    </section>
  );
};
