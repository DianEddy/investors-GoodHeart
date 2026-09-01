import React, { useState } from 'react';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { PageThree } from './components/PageThree';
import { InteractiveStatsWidget } from './components/InteractiveStatsWidget';
import { PitchDeckModal } from './components/PitchDeckModal';
import { ExecutiveSummaryModal } from './components/ExecutiveSummaryModal';
import { CollaborateModal } from './components/CollaborateModal';
import { AssetManagerModal, PageTwoAssets } from './components/AssetManagerModal';
import { PageThreeAssets } from './components/PageThree';
import { GatedDocumentsModal } from './components/GatedDocumentsModal';
import { Share2, Printer, Check, Image as ImageIcon, BarChart3, Sparkles, ShieldCheck, Lock, Eye } from 'lucide-react';

// Default Assets for Page 2
// The user specified: "for the second page, ensure the four header images are exactly the same. i can enter those images as individual assets. there are two videos in this page..."
import p2Header1 from './assets/images/founder_laptop_oranges_1788271531497.jpg';
import p2Header2 from './assets/images/founder_floor_notes_1788271552667.jpg';
import p2Header3 from './assets/images/orange_mushroom_lamp_1788271575060.jpg';
import p2Header4 from './assets/images/desk_shelves_monitor_1788271594675.jpg';
import p2Video1 from './assets/images/moodboard_stylist_wall_1788271613143.jpg';
import p2Video2 from './assets/images/founder_reclined_laptop_1788271631965.jpg';

// Default Assets for Page 3 (Exact assets from DianEddy/investors-GoodHeart/001.media_assets)
import p3FounderHero from './assets/images/github_founder_photo_1.jpg'; // Founder_photo_1.jpg
import p3ShirtAsset2 from './assets/images/github_shirt_asset_2.jpg';   // Shirt asset 2.jpg
import p3SkirtAsset3 from './assets/images/github_skirt_asset_3.jpg';   // skirt_asset_3.jpg
import p3BagAsset4 from './assets/images/github_bag_asset_4.jpg';       // bag_asset_4.jpg
import p3ShoeAsset5 from './assets/images/github_shoe_asset_5.jpg';     // shoe_asset_5.jpg
import p3Video1 from './assets/images/consumer_orange_sweater_1788272112650.jpg';
import p3Video2 from './assets/images/tailored_double_breasted_1788272129880.jpg';
import p3TeamMeeting from './assets/images/team_meeting_execution_1788272149873.jpg';

const initialPageTwoAssets: PageTwoAssets = {
  header1: p2Header1,
  header2: p2Header2,
  header3: p2Header3,
  header4: p2Header4,
  video1: p2Video1,
  video2: p2Video2,
};

const initialPageThreeAssets: PageThreeAssets = {
  header1: p3ShirtAsset2, // Shirt asset 2
  header2: p3SkirtAsset3, // skirt_asset_3
  header3: p3BagAsset4,   // bag_asset_4
  header4: p3ShoeAsset5,  // shoe_asset_5
  founderHero: p3FounderHero, // Founder_photo_1
  video1: p3Video1,
  video2: p3Video2,
  teamMeeting: p3TeamMeeting,
};

export function App() {
  const [activeTab, setActiveTab] = useState<'page1' | 'page2' | 'page3' | 'stats' | 'all'>('page3');
  const [isGatedDocsOpen, setIsGatedDocsOpen] = useState(false);
  const [gatedDocInitialId, setGatedDocInitialId] = useState<string | undefined>(undefined);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [isCollaborateModalOpen, setIsCollaborateModalOpen] = useState(false);
  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);
  const [selectedCollaborateTier, setSelectedCollaborateTier] = useState<string>('TIER 2: CATALYST PACKAGE ($35,000)');
  const [p2Assets, setP2Assets] = useState<PageTwoAssets>(initialPageTwoAssets);
  const [p3Assets, setP3Assets] = useState<PageThreeAssets>(initialPageThreeAssets);
  const [copiedLink, setCopiedLink] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleOpenCollaborate = (tier?: string) => {
    if (tier) setSelectedCollaborateTier(tier);
    setIsCollaborateModalOpen(true);
  };

  const handleOpenGatedDoc = (docId?: string) => {
    setGatedDocInitialId(docId);
    setIsGatedDocsOpen(true);
  };

  const handleResetDefaults = () => {
    setP2Assets(initialPageTwoAssets);
    setP3Assets(initialPageThreeAssets);
  };

  return (
    <div className="min-h-screen bg-[#ececec] text-[#111111] font-sans antialiased flex flex-col items-center py-0 sm:py-6 md:py-8 px-0 sm:px-4">
      {/* Top Floating Control Bar */}
      <div className="w-full max-w-[720px] flex flex-wrap items-center justify-between gap-2 px-4 py-2 mb-3 text-xs bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-black/10 print:hidden">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1 bg-neutral-100 p-1 rounded-xl border border-neutral-200">
          <button
            onClick={() => setActiveTab('page1')}
            className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 cursor-pointer ${
              activeTab === 'page1'
                ? 'bg-white text-black shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>Page 1</span>
          </button>

          <button
            onClick={() => setActiveTab('page2')}
            className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 cursor-pointer ${
              activeTab === 'page2'
                ? 'bg-white text-black shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>Page 2</span>
          </button>

          <button
            onClick={() => setActiveTab('page3')}
            className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'page3'
                ? 'bg-[#FBB040] text-black shadow-xs font-black'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>Page 3</span>
            <span className="text-[9px] bg-black text-white px-1.5 py-0.2 rounded-full font-extrabold">SPMG</span>
          </button>

          <button
            onClick={() => setActiveTab('stats')}
            className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'stats'
                ? 'bg-black text-white shadow-xs font-black'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-[#FBB040]" />
            <span>Interactive Stats</span>
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`px-2.5 py-1.5 rounded-lg font-bold transition text-[11px] cursor-pointer ${
              activeTab === 'all'
                ? 'bg-black text-white shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
            title="View Full Pitch Presentation (All Pages + Stats)"
          >
            All Views
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Open Pitch Deck Button */}
          <button
            onClick={() => handleOpenGatedDoc('doc-005-primary-pitch-deck')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FA383E] hover:bg-[#e02d33] text-white font-black text-xs shadow-xs transition cursor-pointer"
            title="View Official Primary Pitch Deck Presentation"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Pitch Deck</span>
          </button>

          {/* Gated Investor Data Room Button */}
          <button
            onClick={() => handleOpenGatedDoc()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-xs border border-neutral-900 shadow-xs transition cursor-pointer"
            title="Institutional Investor Data Room & Gated Briefings"
          >
            <Lock className="w-3.5 h-3.5 text-[#FBB040]" />
            <span>Data Room</span>
          </button>

          {/* Custom Assets Manager Button */}
          <button
            onClick={() => setIsAssetModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs border border-neutral-300 shadow-2xs transition cursor-pointer"
            title="Upload or change individual images and video files"
          >
            <ImageIcon className="w-3.5 h-3.5 text-neutral-700" />
            <span>Custom Assets</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold transition cursor-pointer"
            title="Copy Page Link"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
          </button>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold transition cursor-pointer"
            title="Print or Export as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print</span>
          </button>
        </div>
      </div>

      {/* Main Pages Container */}
      <div className="w-full max-w-[620px] flex flex-col gap-10">
        {/* Render Page 1 */}
        {(activeTab === 'page1' || activeTab === 'all') && (
          <div className="relative">
            {activeTab === 'all' && (
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-neutral-500 uppercase tracking-wider px-2">
                <span>Page 1: Pitch Deck Overview</span>
                <span>Goodheart 2026</span>
              </div>
            )}
            <PageOne
              onOpenPitchModal={() => handleOpenGatedDoc('doc-005-primary-pitch-deck')}
              onOpenSummaryModal={() => handleOpenGatedDoc('doc-002-investors')}
            />
          </div>
        )}

        {/* Render Page 2 */}
        {(activeTab === 'page2' || activeTab === 'all') && (
          <div className="relative">
            {activeTab === 'all' && (
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-neutral-500 uppercase tracking-wider px-2">
                <span>Page 2: Fashion Brands & Partnerships</span>
                <span>Commercial Deck</span>
              </div>
            )}
            <PageTwo
              assets={p2Assets}
              onOpenCollaborate={handleOpenCollaborate}
              onOpenAssetManager={() => setIsAssetModalOpen(true)}
            />
          </div>
        )}

        {/* Render Page 3 */}
        {(activeTab === 'page3' || activeTab === 'all') && (
          <div className="relative">
            {activeTab === 'all' && (
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-neutral-500 uppercase tracking-wider px-2">
                <span>Page 3: Founder, SPMG Tech & Milestones</span>
                <span>Product Deck</span>
              </div>
            )}
            <PageThree
              assets={p3Assets}
              onOpenAssetManager={() => setIsAssetModalOpen(true)}
            />
          </div>
        )}

        {/* Render Dedicated Stats Showcase */}
        {(activeTab === 'stats' || activeTab === 'all') && (
          <div className="relative">
            {activeTab === 'all' && (
              <div className="mb-2 flex items-center justify-between text-xs font-bold text-neutral-500 uppercase tracking-wider px-2">
                <span>Interactive Statistics & Market Impact</span>
                <span>Data Showcase</span>
              </div>
            )}
            <InteractiveStatsWidget
              initialAudience="investors"
              onSelectTier={handleOpenCollaborate}
            />
          </div>
        )}
      </div>

      {/* Modals */}
      <GatedDocumentsModal
        isOpen={isGatedDocsOpen}
        onClose={() => setIsGatedDocsOpen(false)}
        initialDocumentId={gatedDocInitialId}
      />

      <PitchDeckModal
        isOpen={isPitchModalOpen}
        onClose={() => setIsPitchModalOpen(false)}
      />

      <ExecutiveSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
      />

      <CollaborateModal
        isOpen={isCollaborateModalOpen}
        onClose={() => setIsCollaborateModalOpen(false)}
        selectedTier={selectedCollaborateTier}
      />

      <AssetManagerModal
        isOpen={isAssetModalOpen}
        onClose={() => setIsAssetModalOpen(false)}
        pageTwoAssets={p2Assets}
        pageThreeAssets={p3Assets}
        onUpdatePageTwoAssets={(newAssets) => setP2Assets(newAssets)}
        onUpdatePageThreeAssets={(newAssets) => setP3Assets(newAssets)}
        onResetDefaults={handleResetDefaults}
        initialTab={activeTab === 'page2' ? 'page2' : 'page3'}
      />
    </div>
  );
}
export default App;
