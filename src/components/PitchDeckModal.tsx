import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share2, Check, Sparkles, FileText, Layers } from 'lucide-react';
import { PITCH_DECK_SLIDES } from '../data';

interface PitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchDeckModal: React.FC<PitchDeckModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: "GOODHEART Pitch Presentation",
        text: "Goodheart unifies AI digital closet management, circular social commerce, and a decentralized artisan network.",
        url: window.location.href,
      }).catch(() => {});
    }
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const slide = PITCH_DECK_SLIDES[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200">
        {/* Modal Header */}
        <div className="bg-[#FBB040] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#FF3B30] flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-neutral-900 text-lg leading-tight tracking-tight">GOODHEART Pitch Deck</h3>
              <p className="text-xs text-neutral-800 font-medium">Confidential Investor Preview • 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full hover:bg-black/10 transition-colors text-neutral-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Slide Body */}
        <div className="p-6 md:p-8 min-h-[300px] flex flex-col justify-between bg-neutral-50/50">
          <div>
            <div className="flex items-center justify-between text-xs text-neutral-500 mb-3 font-semibold">
              <span className="uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                Slide {currentSlide + 1} of {PITCH_DECK_SLIDES.length}
              </span>
              <span className="flex items-center gap-1 text-neutral-600">
                <Layers className="w-3.5 h-3.5" /> Pitch Overview
              </span>
            </div>

            <h4 className="text-2xl font-black text-neutral-900 tracking-tight mb-1">{slide.title}</h4>
            <p className="text-sm font-semibold text-[#FF3B30] mb-6">{slide.subtitle}</p>

            <div className="space-y-3">
              {slide.highlights.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-neutral-200 shadow-xs">
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {index + 1}
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                disabled={currentSlide === 0}
                onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
                className="p-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed text-neutral-700 text-sm font-medium flex items-center gap-1 transition"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <button
                disabled={currentSlide === PITCH_DECK_SLIDES.length - 1}
                onClick={() => setCurrentSlide((prev) => Math.min(PITCH_DECK_SLIDES.length - 1, prev + 1))}
                className="p-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed text-neutral-700 text-sm font-medium flex items-center gap-1 transition"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-3 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700 text-xs font-semibold flex items-center gap-1.5 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                {copied ? "Link Copied" : "Share"}
              </button>
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-lg bg-[#FF3B30] hover:bg-[#e03429] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition"
              >
                <Download className="w-3.5 h-3.5" /> Download / Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
