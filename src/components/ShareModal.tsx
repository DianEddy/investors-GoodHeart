import React, { useState } from 'react';
import {
  X,
  Share2,
  Check,
  Copy,
  ExternalLink,
  Linkedin,
  MessageSquare,
  Twitter,
  Mail,
  Smartphone,
  Eye,
  Download,
  Image as ImageIcon,
  Sparkles
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activePreview, setActivePreview] = useState<'linkedin' | 'imessage' | 'twitter'>('linkedin');

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ais-pre-tekxtquehrhzvktdeqraqw-38173274115.us-west2.run.app/';
  const title = 'GOODHEART Pitch Landing Page';
  const description = 'Goodheart unifies AI digital closet management, circular social commerce, and a decentralized artisan network. Seed Round Data Room & Pitch Presentation.';
  const imageUrl = '/og-image.jpg';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: currentUrl,
        });
      } catch (err) {
        // User cancelled or share failed, fallback to copy
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const shareToLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer,width=650,height=550');
  };

  const shareToTwitter = () => {
    const twitterText = encodeURIComponent(`${title} — ${description}\n\n${currentUrl}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=650,height=450');
  };

  const shareToIMessage = () => {
    // SMS / iMessage URI scheme
    const body = encodeURIComponent(`Take a look at GOODHEART: ${title}\n${currentUrl}`);
    window.location.href = `sms:&body=${body}`;
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`Hi,\n\nI wanted to share the GOODHEART Pitch Deck and Data Room with you:\n\n${description}\n\nView here: ${currentUrl}\n\nBest regards,`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs transition-opacity animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-300 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-[#FBB040] px-5 py-3.5 flex items-center justify-between border-b border-black/15 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-black text-xs shadow-xs">
              <Share2 className="w-4 h-4 text-[#FBB040]" />
            </div>
            <div>
              <h3 className="font-extrabold text-neutral-900 text-base tracking-tight leading-tight">
                Share Goodheart
              </h3>
              <p className="text-xs text-neutral-800 font-medium">
                Photo tile & rich link preview ready for LinkedIn, iMessage, and social media
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Share Modal"
            className="p-1.5 rounded-full hover:bg-black/10 transition text-neutral-900 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 bg-neutral-50/50">
          
          {/* Quick Share Buttons Row */}
          <div>
            <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block mb-2">
              1-Click Instant Share
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              
              {/* LinkedIn */}
              <button
                onClick={shareToLinkedIn}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold rounded-xl transition shadow-xs cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>

              {/* iMessage / SMS */}
              <button
                onClick={shareToIMessage}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#34C759] hover:bg-[#2db24f] text-white text-xs font-bold rounded-xl transition shadow-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>iMessage</span>
              </button>

              {/* Twitter / X */}
              <button
                onClick={shareToTwitter}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-black hover:bg-neutral-800 text-white text-xs font-bold rounded-xl transition shadow-xs cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
                <span>X / Twitter</span>
              </button>

              {/* Email */}
              <button
                onClick={shareViaEmail}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-neutral-800 hover:bg-neutral-900 text-white text-xs font-bold rounded-xl transition shadow-xs cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
            </div>
          </div>

          {/* Copy Link Row */}
          <div className="bg-white p-3 rounded-xl border border-neutral-300 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-semibold text-neutral-500 mb-1.5">
              <span>Shareable Page URL</span>
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <button
                  onClick={handleNativeShare}
                  className="text-black hover:text-[#FA383E] font-bold flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Device Share Sheet</span>
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="flex-1 text-xs bg-neutral-50 border border-neutral-200 px-3 py-2 rounded-lg text-neutral-800 font-mono select-all focus:outline-hidden"
              />
              <button
                onClick={handleCopyLink}
                className="px-3.5 py-2 rounded-lg bg-black hover:bg-neutral-800 text-white font-bold text-xs flex items-center gap-1.5 transition shrink-0 cursor-pointer shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Live Tile Preview Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-neutral-500" />
                <span>Live Share Tile Preview</span>
              </label>

              {/* Toggle Buttons */}
              <div className="flex items-center bg-neutral-200 p-0.5 rounded-lg text-[11px] font-bold">
                <button
                  onClick={() => setActivePreview('linkedin')}
                  className={`px-2.5 py-1 rounded-md transition ${
                    activePreview === 'linkedin' ? 'bg-white text-black shadow-xs' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => setActivePreview('imessage')}
                  className={`px-2.5 py-1 rounded-md transition ${
                    activePreview === 'imessage' ? 'bg-white text-black shadow-xs' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  iMessage
                </button>
                <button
                  onClick={() => setActivePreview('twitter')}
                  className={`px-2.5 py-1 rounded-md transition ${
                    activePreview === 'twitter' ? 'bg-white text-black shadow-xs' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  X Card
                </button>
              </div>
            </div>

            {/* PREVIEW CONTAINER */}
            <div className="bg-white border-2 border-neutral-300 rounded-xl p-3 sm:p-4 shadow-xs">
              
              {/* --- LINKEDIN PREVIEW --- */}
              {activePreview === 'linkedin' && (
                <div className="border border-neutral-300 rounded-xl overflow-hidden bg-neutral-100/60 text-left">
                  {/* Photo Tile */}
                  <div className="relative aspect-16/9 w-full bg-neutral-900 overflow-hidden group">
                    <img
                      src={imageUrl}
                      alt="GOODHEART Link Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-xs text-white text-[10px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#FBB040]" /> 1200 × 675 Tile Photo
                    </div>
                  </div>
                  {/* LinkedIn Meta Info */}
                  <div className="p-3 bg-[#f3f2ef] border-t border-neutral-200">
                    <h4 className="font-bold text-neutral-900 text-xs sm:text-sm line-clamp-1 leading-snug">
                      {title}
                    </h4>
                    <p className="text-[11px] text-neutral-600 line-clamp-2 mt-0.5 leading-normal">
                      {description}
                    </p>
                    <span className="text-[10px] text-neutral-500 font-semibold block mt-1 uppercase tracking-wider">
                      ais-pre-tekxtquehrhzvktdeqraqw-38173274115.us-west2.run.app
                    </span>
                  </div>
                </div>
              )}

              {/* --- IMESSAGE PREVIEW --- */}
              {activePreview === 'imessage' && (
                <div className="flex flex-col items-end">
                  <div className="max-w-[340px] bg-[#E9E9EB] text-neutral-900 rounded-2xl rounded-tr-xs p-2.5 shadow-xs border border-neutral-300/80">
                    {/* Image Bubble */}
                    <div className="rounded-xl overflow-hidden mb-2 bg-black aspect-16/9">
                      <img
                        src={imageUrl}
                        alt="iMessage Rich Tile"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-1">
                      <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider block">
                        GOODHEART PITCH DECK
                      </span>
                      <p className="font-bold text-xs text-neutral-900 line-clamp-1">
                        {title}
                      </p>
                      <p className="text-[11px] text-neutral-600 line-clamp-2 mt-0.5">
                        {description}
                      </p>
                      <span className="text-[10px] text-blue-600 font-medium block mt-1 truncate">
                        {currentUrl}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-400 mt-1 mr-1">Delivered via iMessage</span>
                </div>
              )}

              {/* --- TWITTER / X CARD PREVIEW --- */}
              {activePreview === 'twitter' && (
                <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-black text-white text-left">
                  <div className="relative aspect-16/9 w-full bg-neutral-900 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt="Twitter Summary Card"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 bg-neutral-950">
                    <span className="text-[11px] text-neutral-400 block font-mono">
                      ais-pre-tekxtquehrhzvktdeqraqw-38173274115.us-west2.run.app
                    </span>
                    <h4 className="font-bold text-white text-xs sm:text-sm line-clamp-1 mt-0.5">
                      {title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 line-clamp-2 mt-0.5">
                      {description}
                    </p>
                  </div>
                </div>
              )}

              {/* Tile Details Info */}
              <div className="mt-3 pt-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="font-medium text-neutral-800">OG Tile Photo:</span>
                  <span className="font-mono text-[11px] text-neutral-500">/og-image.jpg (1200×675)</span>
                </div>

                <a
                  href={imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-black hover:text-[#FA383E] flex items-center gap-1 transition"
                >
                  <span>View Full Photo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-neutral-100 px-5 py-3 border-t border-neutral-200 flex items-center justify-between text-xs shrink-0">
          <span className="text-neutral-500 font-medium">
            Standard OpenGraph & Apple Touch tags enabled
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs transition cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
