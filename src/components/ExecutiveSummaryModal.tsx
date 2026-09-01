import React, { useState } from 'react';
import { X, Download, CheckCircle2, ShieldCheck, TrendingUp, Sparkles, Building2, Users } from 'lucide-react';

interface ExecutiveSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveSummaryModal: React.FC<ExecutiveSummaryModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a simple text/formatted file download for real investor summary utility
    const content = `GOODHEART - EXECUTIVE SUMMARY (PITCH DECK HIGHLIGHTS)
=====================================================
Vision: Redefining Wardrobe Wellness & Decentralized Fashion Tech

1. THE PROBLEM
- $1.5T+ Global fashion market dominated by 95-97% mass-produced fast apparel.
- High return rates (up to 30%), accelerating closet bloat and environmental landfill.
- Erosion of skilled tailoring and artisanal trade networks.

2. THE GOODHEART SOLUTION
- Single-Picture-Multiple-Garment (SPMG) AI digitizes wardrobe items in 1 click.
- Circular social commerce connecting buyers, sellers, and rework artisans.
- Decentralized artisan network for local bespoke repairs and custom fittings.

3. MARKET DYNAMICS
- $57.5B+ Custom Apparel & Upcycling Total Addressable Market.
- 46% of consumers explicitly willing to pay more for personalized apparel.
- 53% of Gen Z consumers prefer custom clothing over generic mass production.

4. TRACTION & PLATFORMS
- iOS, Android, and Web applications deployed.
- Proprietary SPMG AI architecture calibrated with sustainable apparel benchmarks.

CONTACT & INQUIRIES:
Investor Relations: pitch@goodheart.fashion
Website: https://goodheart.fashion
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'GOODHEART_Executive_Summary_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="bg-neutral-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FF3B30] flex items-center justify-center font-black text-sm text-white">
              GH
            </div>
            <div>
              <h3 className="font-bold text-base tracking-tight">Executive Summary Document</h3>
              <p className="text-xs text-neutral-400">Institutional & Angel Briefing Package</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full hover:bg-neutral-800 transition text-neutral-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto bg-neutral-50/60">
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF3B30] mb-1">Company Abstract</h4>
            <p className="text-sm text-neutral-700 leading-relaxed font-medium">
              Goodheart is building the operating system for personalized fashion. By merging AI-powered wardrobe classification with an on-demand decentralized network of master tailors and circular upcyclers, Goodheart solves the retail return crisis while scaling sustainable personal wellness.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3.5 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-1.5 text-neutral-900 font-bold text-xs mb-1">
                <TrendingUp className="w-4 h-4 text-amber-500" /> Market TAM
              </div>
              <p className="text-lg font-black text-neutral-900">$57.5B+</p>
              <p className="text-[11px] text-neutral-500">Custom & Upcycling niche</p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-1.5 text-neutral-900 font-bold text-xs mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Platform Status
              </div>
              <p className="text-lg font-black text-neutral-900">Multi-OS</p>
              <p className="text-[11px] text-neutral-500">iOS, Android & Web Live</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-neutral-200 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">Core Competitive Moats</h4>
            <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
              <li><strong className="text-neutral-800">SPMG AI:</strong> Single-picture multiple-garment segmenter built specifically for wardrobe curation.</li>
              <li><strong className="text-neutral-800">Artisan Guild:</strong> Proprietary quality-assured pipeline matching custom alteration requests to verified tailors.</li>
              <li><strong className="text-neutral-800">Social Circulation:</strong> Closed-loop peer re-commerce maximizing garment lifecycle value.</li>
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-white border-t border-neutral-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition"
          >
            Back to page
          </button>

          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl bg-[#FF3B30] hover:bg-[#e03429] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" /> Downloaded!
              </>
            ) : (
              <>
                <Download className="w-4 h-4" /> Download Full PDF / Summary
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
