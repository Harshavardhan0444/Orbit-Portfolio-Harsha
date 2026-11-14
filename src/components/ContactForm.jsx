import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import { personalData } from '../data/personal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '' // Anti-spam honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Form validation logic
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot spam bot
    if (formData._gotcha) {
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    // Check for Formspree endpoint from env or use standard submission
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || 'xpznvqbl'}`;

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          recipient: personalData.email
        })
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Your message has been transmitted successfully! Thank you for connecting with Harshavardhan.');
        setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
      } else {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Failed to submit form to server.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setStatus('error');
      setStatusMessage('Submission encountered an issue. You can send your message directly using the email client link below.');
    }
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(formData.subject || 'Inquiry from ORBIT Portfolio');
    const body = encodeURIComponent(`Hello Harshavardhan,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md p-6 sm:p-10 shadow-2xl transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Side: Let's Connect */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Communication Channel</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Let's Connect
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              I am interested in connecting with people, exploring opportunities, collaborating on technology projects, and learning about innovative ideas.
            </p>

            {/* Contact details */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Location</span>
                  <span className="text-sm font-semibold text-white">{personalData.location}</span>
                </div>
              </div>

              <a
                href={`mailto:${personalData.email}`}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Email Address</span>
                  <span className="text-sm font-semibold text-cyan-300 group-hover:underline break-all">
                    {personalData.email}
                  </span>
                </div>
              </a>

              <a
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-purple-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-all shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">LinkedIn Profile</span>
                  <span className="text-sm font-semibold text-purple-300 group-hover:underline">
                    harsha-vardhan-a05b51316
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick note */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400">
            <span className="font-semibold text-slate-300 block mb-1">Availability Notice:</span>
            Actively open for MCA graduate hire positions, campus placement opportunities, and technical developer roles.
          </div>
        </div>

        {/* Right Side: Working Contact Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Honeypot Anti-spam */}
            <input
              type="text"
              name="_gotcha"
              value={formData._gotcha}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                Full Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe / Technical Recruiter"
                disabled={status === 'loading'}
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                  errors.name
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                Email Address <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@organization.com"
                disabled={status === 'loading'}
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                  errors.email
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                Subject <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Opportunity Discussion / Project Collaboration"
                disabled={status === 'loading'}
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                  errors.subject
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                }`}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider font-mono">
                Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message or inquiry here..."
                disabled={status === 'loading'}
                className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                  errors.message
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Honest Status Notifications */}
            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-2.5 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{statusMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs space-y-2 animate-fadeIn">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
                <button
                  type="button"
                  onClick={handleDirectEmail}
                  className="mt-2 px-3.5 py-1.5 rounded-lg bg-rose-900/60 hover:bg-rose-800 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Send Directly via Email Client
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-blue-500 shadow-neon-cyan flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDirectEmail}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Open Mail Client</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
