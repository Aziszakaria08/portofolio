import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', scope: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061421]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg rounded-xl bg-[#1e2b39] border border-[#293644] p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#293644] mb-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#7cd1fb] animate-pulse"></span>
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#f4f6f8] uppercase tracking-wider">
              Direct Message Transmission
            </span>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1 text-[#a6b0bc] hover:text-[#f4f6f8] transition-colors rounded"
            aria-label="Close Inquiry Dialog"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#00789e]/20 border border-[#7cd1fb] flex items-center justify-center text-[#7cd1fb]">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#f4f6f8]">
              Transmission Dispatched
            </h4>
            <p className="font-['Inter'] text-sm text-[#a6b0bc] max-w-sm mx-auto">
              Thank you, <strong className="text-[#d6e4f6]">{formData.name}</strong>. Your inquiry has been logged. {personalInfo.name} will review and respond within 24 operational hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2 rounded-lg bg-[#8f1230] text-[#ffdadb] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider hover:bg-[#aa1a3c] transition-colors border border-[#ffb2b8]/30"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-['Space_Grotesk'] text-xs font-medium text-[#a6b0bc] uppercase tracking-wider mb-1.5">
                Your Name / Organization <span className="text-[#ffb2b8]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins, Enterprise Operations"
                className="w-full rounded bg-[#061421] border border-[#293644] px-3.5 py-2.5 text-[#d6e4f6] font-['Inter'] text-sm focus:border-[#7cd1fb] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block font-['Space_Grotesk'] text-xs font-medium text-[#a6b0bc] uppercase tracking-wider mb-1.5">
                Contact Email <span className="text-[#ffb2b8]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@organization.com"
                className="w-full rounded bg-[#061421] border border-[#293644] px-3.5 py-2.5 text-[#d6e4f6] font-['Inter'] text-sm focus:border-[#7cd1fb] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block font-['Space_Grotesk'] text-xs font-medium text-[#a6b0bc] uppercase tracking-wider mb-1.5">
                Project Scope / Engagement Type <span className="text-[#ffb2b8]">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                placeholder="Brief outline of ERP migration needs, BPMN mapping, or functional analysis requirements..."
                className="w-full rounded bg-[#061421] border border-[#293644] px-3.5 py-2.5 text-[#d6e4f6] font-['Inter'] text-sm focus:border-[#7cd1fb] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#a6b0bc] hover:text-[#f4f6f8] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#8f1230] text-[#ffdadb] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider border border-[#ffb2b8]/30 hover:bg-[#aa1a3c] transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Send Transmission</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
