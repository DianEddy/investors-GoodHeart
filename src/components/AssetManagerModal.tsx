import React, { useState } from 'react';
import { X, Upload, Check, RefreshCw, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { PageThreeAssets } from './PageThree';

export interface PageTwoAssets {
  header1: string; // Sponsored content
  header2: string; // Brand ambassadorships
  header3: string; // Product reviews
  header4: string; // Giveaways and contests
  video1: string;  // Moodboard / Stylist video
  video2: string;  // Reclined laptop / creative video
  video1File?: string;
  video2File?: string;
}

interface AssetManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageTwoAssets: PageTwoAssets;
  pageThreeAssets: PageThreeAssets;
  onUpdatePageTwoAssets: (newAssets: PageTwoAssets) => void;
  onUpdatePageThreeAssets: (newAssets: PageThreeAssets) => void;
  onResetDefaults: () => void;
  initialTab?: 'page2' | 'page3';
}

export const AssetManagerModal: React.FC<AssetManagerModalProps> = ({
  isOpen,
  onClose,
  pageTwoAssets,
  pageThreeAssets,
  onUpdatePageTwoAssets,
  onUpdatePageThreeAssets,
  onResetDefaults,
  initialTab = 'page3',
}) => {
  const [activeTab, setActiveTab] = useState<'page2' | 'page3'>(initialTab);
  const [localP2, setLocalP2] = useState<PageTwoAssets>(pageTwoAssets);
  const [localP3, setLocalP3] = useState<PageThreeAssets>(pageThreeAssets);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleP2FileUpload = (key: keyof PageTwoAssets, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setLocalP2(prev => ({
        ...prev,
        [key]: fileUrl,
      }));
    }
  };

  const handleP3FileUpload = (key: keyof PageThreeAssets, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setLocalP3(prev => ({
        ...prev,
        [key]: fileUrl,
      }));
    }
  };

  const handleSave = () => {
    onUpdatePageTwoAssets(localP2);
    onUpdatePageThreeAssets(localP3);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200">
        {/* Header */}
        <div className="bg-[#FBB040] px-6 py-4 flex items-center justify-between border-b border-black/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
              GH
            </div>
            <div>
              <h3 className="font-extrabold text-neutral-900 text-lg tracking-tight">Pitch Deck Asset Manager</h3>
              <p className="text-xs text-neutral-800 font-medium">Upload or swap individual images and video assets</p>
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

        {/* Tab Switcher inside Modal */}
        <div className="bg-neutral-100 px-6 py-2 border-b border-neutral-200 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('page3')}
            className={`px-4 py-1.5 rounded-xl font-bold text-xs transition ${
              activeTab === 'page3'
                ? 'bg-black text-white shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            Page 3 Assets (Founder & SPMG Tech)
          </button>
          <button
            onClick={() => setActiveTab('page2')}
            className={`px-4 py-1.5 rounded-xl font-bold text-xs transition ${
              activeTab === 'page2'
                ? 'bg-black text-white shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            Page 2 Assets (Fashion Brands)
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6 bg-neutral-50/50 text-neutral-900">
          {activeTab === 'page3' ? (
            /* ========================================================
               PAGE 3 ASSET CUSTOMIZER
               ======================================================== */
            <div className="space-y-6">
              {/* 4 Header Photos Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ImageIcon className="w-4 h-4 text-neutral-700" />
                  <h4 className="font-bold text-sm text-neutral-900 uppercase tracking-wider">
                    Four Header Item Photos (Founder & Her Work)
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {/* Item 1 */}
                  <div className="bg-white p-2.5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                    <div className="aspect-square rounded-full overflow-hidden border border-neutral-200 mb-2 bg-neutral-100 relative p-1">
                      <img src={localP3.header1} alt="Cropped Blazer" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-800 truncate mb-1">1. Cropped Blazer</span>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-semibold py-1 px-2 rounded text-center border border-neutral-300 transition flex items-center justify-center gap-1">
                      <Upload className="w-3 h-3" /> Upload
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleP3FileUpload('header1', e)} />
                    </label>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white p-2.5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                    <div className="aspect-square rounded-full overflow-hidden border border-neutral-200 mb-2 bg-neutral-100 relative p-1">
                      <img src={localP3.header2} alt="Wrap Skirt" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-800 truncate mb-1">2. Wrap Skirt</span>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-semibold py-1 px-2 rounded text-center border border-neutral-300 transition flex items-center justify-center gap-1">
                      <Upload className="w-3 h-3" /> Upload
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleP3FileUpload('header2', e)} />
                    </label>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white p-2.5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                    <div className="aspect-square rounded-full overflow-hidden border border-neutral-200 mb-2 bg-neutral-100 relative p-1">
                      <img src={localP3.header3} alt="Envelope Bag" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-800 truncate mb-1">3. Envelope Bag</span>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-semibold py-1 px-2 rounded text-center border border-neutral-300 transition flex items-center justify-center gap-1">
                      <Upload className="w-3 h-3" /> Upload
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleP3FileUpload('header3', e)} />
                    </label>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-white p-2.5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                    <div className="aspect-square rounded-full overflow-hidden border border-neutral-200 mb-2 bg-neutral-100 relative p-1">
                      <img src={localP3.header4} alt="Red Bow Heels" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-800 truncate mb-1">4. Red Bow Heels</span>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-semibold py-1 px-2 rounded text-center border border-neutral-300 transition flex items-center justify-center gap-1">
                      <Upload className="w-3 h-3" /> Upload
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleP3FileUpload('header4', e)} />
                    </label>
                  </div>
                </div>
              </div>

              {/* Founder Skyscraper Deck Photo */}
              <div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <ImageIcon className="w-4 h-4 text-neutral-700" />
                  <div className="text-xs font-bold text-neutral-900 uppercase">
                    Founder Photo / Video (Onyi on NYC Skyscraper Deck)
                  </div>
                </div>
                <div className="aspect-16/9 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100 max-h-48">
                  <img src={localP3.founderHero} alt="Founder in Skyscraper Deck" className="w-full h-full object-cover" />
                </div>
                <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold py-1.5 px-3 rounded-lg border border-neutral-300 transition inline-flex items-center gap-1.5">
                  <Upload className="w-3.5 h-3.5" /> Upload Image / Video
                  <input
                    type="file"
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={(e) => handleP3FileUpload('founderHero', e)}
                  />
                </label>
              </div>

              {/* Two Videos Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <VideoIcon className="w-4 h-4 text-neutral-700" />
                  <h4 className="font-bold text-sm text-neutral-900 uppercase tracking-wider">
                    Two Videos (Consumer SPMG & Alterations Engine)
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Video 1 */}
                  <div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-xs space-y-2">
                    <div className="aspect-4/3 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
                      <img src={localP3.video1} alt="Video 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs font-bold text-neutral-900">Video 1: Consumer SPMG Technology</div>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold py-1.5 px-3 rounded-lg border border-neutral-300 transition inline-flex items-center gap-1.5">
                      <Upload className="w-3.5 h-3.5" /> Upload Image / Video
                      <input
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={(e) => handleP3FileUpload('video1', e)}
                      />
                    </label>
                  </div>

                  {/* Video 2 */}
                  <div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-xs space-y-2">
                    <div className="aspect-4/3 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
                      <img src={localP3.video2} alt="Video 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs font-bold text-neutral-900">Video 2: Decentralized Alterations</div>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold py-1.5 px-3 rounded-lg border border-neutral-300 transition inline-flex items-center gap-1.5">
                      <Upload className="w-3.5 h-3.5" /> Upload Image / Video
                      <input
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={(e) => handleP3FileUpload('video2', e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ========================================================
               PAGE 2 ASSET CUSTOMIZER
               ======================================================== */
            <div className="space-y-6">
              {/* 4 Header Photos Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ImageIcon className="w-4 h-4 text-neutral-700" />
                  <h4 className="font-bold text-sm text-neutral-900 uppercase tracking-wider">
                    Four Header Images (Founder & Work)
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {/* Item 1 */}
                  <div className="bg-white p-2.5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                    <div className="aspect-3/4 rounded-lg overflow-hidden border border-neutral-200 mb-2 bg-neutral-100 relative">
                      <img src={localP2.header1} alt="Sponsored content" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-800 truncate mb-1">1. Sponsored Content</span>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-semibold py-1 px-2 rounded text-center border border-neutral-300 transition flex items-center justify-center gap-1">
                      <Upload className="w-3 h-3" /> Upload
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleP2FileUpload('header1', e)} />
                    </label>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white p-2.5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                    <div className="aspect-3/4 rounded-lg overflow-hidden border border-neutral-200 mb-2 bg-neutral-100 relative">
                      <img src={localP2.header2} alt="Brand ambassadorships" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-800 truncate mb-1">2. Brand Ambassador</span>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-semibold py-1 px-2 rounded text-center border border-neutral-300 transition flex items-center justify-center gap-1">
                      <Upload className="w-3 h-3" /> Upload
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleP2FileUpload('header2', e)} />
                    </label>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white p-2.5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                    <div className="aspect-3/4 rounded-lg overflow-hidden border border-neutral-200 mb-2 bg-neutral-100 relative">
                      <img src={localP2.header3} alt="Product reviews" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-800 truncate mb-1">3. Product Reviews</span>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-semibold py-1 px-2 rounded text-center border border-neutral-300 transition flex items-center justify-center gap-1">
                      <Upload className="w-3 h-3" /> Upload
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleP2FileUpload('header3', e)} />
                    </label>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-white p-2.5 rounded-xl border border-neutral-200 shadow-xs flex flex-col">
                    <div className="aspect-3/4 rounded-lg overflow-hidden border border-neutral-200 mb-2 bg-neutral-100 relative">
                      <img src={localP2.header4} alt="Giveaways and contests" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-800 truncate mb-1">4. Giveaways & Contests</span>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-semibold py-1 px-2 rounded text-center border border-neutral-300 transition flex items-center justify-center gap-1">
                      <Upload className="w-3 h-3" /> Upload
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleP2FileUpload('header4', e)} />
                    </label>
                  </div>
                </div>
              </div>

              {/* Two Videos Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <VideoIcon className="w-4 h-4 text-neutral-700" />
                  <h4 className="font-bold text-sm text-neutral-900 uppercase tracking-wider">
                    Two Media & Video Assets
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Video 1 */}
                  <div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-xs space-y-2">
                    <div className="aspect-4/3 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
                      <img src={localP2.video1} alt="Video 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs font-bold text-neutral-900">Video 1: Why Partner With Us</div>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold py-1.5 px-3 rounded-lg border border-neutral-300 transition inline-flex items-center gap-1.5">
                      <Upload className="w-3.5 h-3.5" /> Upload Image / Video
                      <input
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={(e) => handleP2FileUpload('video1', e)}
                      />
                    </label>
                  </div>

                  {/* Video 2 */}
                  <div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-xs space-y-2">
                    <div className="aspect-16/9 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
                      <img src={localP2.video2} alt="Video 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-xs font-bold text-neutral-900">Video 2: Footer Partnerships Media</div>
                    <label className="cursor-pointer bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold py-1.5 px-3 rounded-lg border border-neutral-300 transition inline-flex items-center gap-1.5">
                      <Upload className="w-3.5 h-3.5" /> Upload Image / Video
                      <input
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={(e) => handleP2FileUpload('video2', e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-white border-t border-neutral-200 flex items-center justify-between">
          <button
            onClick={() => {
              onResetDefaults();
              onClose();
            }}
            className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset to Defaults
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition"
            >
              {savedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : null}
              {savedSuccess ? 'Saved Changes!' : 'Apply Assets'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
