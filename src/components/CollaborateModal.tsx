import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles, Building, Mail, Phone, User, DollarSign } from 'lucide-react';

interface CollaborateModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

export const CollaborateModal: React.FC<CollaborateModalProps> = ({
  isOpen,
  onClose,
  selectedTier = 'TIER 2: CATALYST PACKAGE ($35,000)'
}) => {
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    phone: '',
    packageTier: selectedTier,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="bg-[#FBB040] px-6 py-4 flex items-center justify-between border-b border-black/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-xs">
              GH
            </div>
            <div>
              <h3 className="font-extrabold text-neutral-900 text-lg tracking-tight">Fashion Brand Collaboration</h3>
              <p className="text-xs text-neutral-800 font-medium">Partner with Goodheart's Wardrobe Wellness Ecosystem</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-full hover:bg-black/10 transition text-neutral-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-3 bg-neutral-50/50">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-neutral-900">Partnership Request Received!</h4>
            <p className="text-xs text-neutral-600 max-w-sm mx-auto">
              Thank you for reaching out. The Goodheart brand partnerships team (<span className="font-semibold text-neutral-800">edidirect@edimassive.com</span>) will review your application and respond within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto bg-neutral-50/40">
            <div>
              <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">
                Select Partnership Tier
              </label>
              <select
                value={formData.packageTier}
                onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              >
                <option value="TIER 1: PIONEER PACKAGE ($20,000)">TIER 1: PIONEER PACKAGE ($20,000)</option>
                <option value="TIER 2: CATALYST PACKAGE ($35,000)">TIER 2: CATALYST PACKAGE ($35,000)</option>
                <option value="TIER 3: HORIZON PACKAGE ($50,000)">TIER 3: HORIZON PACKAGE ($50,000)</option>
                <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-neutral-500" /> Fashion Brand / Company
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Maison Atelier"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-neutral-500" /> Contact Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-neutral-500" /> Work Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="partnerships@brand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-neutral-500" /> Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-800 mb-1">
                Campaign Goals or Specific Requests
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your upcoming collections, sustainability goals, or desired timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-neutral-200">
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" /> Submit Partnership Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
