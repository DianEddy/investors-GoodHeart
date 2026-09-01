/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { PageThree, PageThreeAssets } from './components/PageThree';
import { PitchDeckModal } from './components/PitchDeckModal';
import { ExecutiveSummaryModal } from './components/ExecutiveSummaryModal';
import { CollaborateModal } from './components/CollaborateModal';
import { AssetManagerModal, PageTwoAssets } from './components/AssetManagerModal';
import { 
  Printer, 
  Image as ImageIcon, 
  Share2,
  Check
} from 'lucide-react';

// Default assets for Page 2
import defaultP2Header1 from './assets/images/founder_laptop_oranges_1788271531497.jpg';
import defaultP2Header2 from './assets/images/founder_floor_notes_1788271552667.jpg';
import defaultP2Header3 from './assets/images/orange_mushroom_lamp_1788271575060.jpg';
import defaultP2Header4 from './assets/images/desk_shelves_monitor_1788271594675.jpg';
import defaultP2Video1 from './assets/images/moodboard_stylist_wall_1788271613143.jpg';
import defaultP2Video2 from './assets/images/founder_reclined_laptop_1788271631965.jpg';

// Default assets for Page 3 (Founder & Her Work)
import defaultP3Header1 from './assets/images/cropped_pinstripe_blazer_1788270955333.jpg';
import defaultP3Header2 from './assets/images/pinstripe_wrap_skirt_1788270984147.jpg';
import defaultP3Header3 from './assets/images/luxury_envelope_bag_1788272075963.jpg';
import defaultP3Header4 from './assets/images/red_bow_heels_1788270972239.jpg';
import defaultP3FounderHero from './assets/images/founder_skyscraper_deck_1788272093110.jpg';
import defaultP3Video1 from './assets/images/consumer_orange_sweater_1788272112650.jpg';
import defaultP3Video2 from './assets/images/tailored_double_breasted_1788272129880.jpg';
import defaultP3TeamMeeting from './assets/images/team_meeting_execution_1788272149873.jpg';

const initialPageTwoAssets: PageTwoAssets = {
  header1: defaultP2Header1,
  header2: defaultP2Header2,
  header3: defaultP2Header3,
  header4: defaultP2Header4,
  video1: defaultP2Video1,
  video2: defaultP2Video2,
};

const initialPageThreeAssets: PageThreeAssets = {
  header1: defaultP3Header1,
  header2: defaultP3Header2,
  header3: defaultP3Header3,
  header4: defaultP3Header4,
  founderHero: defaultP3FounderHero,
  video1: defaultP3Video1,
  video2: defaultP3Video2,
  teamMeeting: defaultP3TeamMeeting,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'page1' | 'page2' | 'page3' | 'all'>('page3');
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

  const handleResetDefaults = () => {
    setP2Assets(initialPageTwoAssets);
    setP3Assets(initialPageThreeAssets);
  };

  return (
    <div className="min-h-screen bg-[#ececec] text-[#111111] font-sans antialiased flex flex-col items-center py-0 sm:py-6 md:py-8 px-0 sm:px-4">
      {/* Top Floating Control Bar */}
      <div className="w-full max-w-[700px] flex flex-wrap items-center justify-between gap-2 px-4 py-2 mb-3 text-xs bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-black/10 print:hidden">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl border border-neutral-200">
          <button
            onClick={() => setActiveTab('page1')}
            className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 ${
              activeTab === 'page1'
                ? 'bg-white text-black shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>Page 1</span>
          </button>

          <button
            onClick={() => setActiveTab('page2')}
            className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1 ${
              activeTab === 'page2'
                ? 'bg-white text-black shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>Page 2</span>
          </button>

          <button
            onClick={() => setActiveTab('page3')}
            className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1.5 ${
              activeTab === 'page3'
                ? 'bg-[#FBB040] text-black shadow-xs font-black'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <span>Page 3</span>
            <span className="text-[10px] bg-black text-white px-1.5 py-0.2 rounded-full font-bold">New</span>
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`px-2.5 py-1.5 rounded-lg font-bold transition text-[11px] ${
              activeTab === 'all'
                ? 'bg-black text-white shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
            title="View Full Pitch Presentation (All Pages)"
          >
            All Pages
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Custom Assets Manager Button */}
          <button
            onClick={() => setIsAssetModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs border border-neutral-300 shadow-2xs transition"
            title="Upload or change individual images and video files"
          >
            <ImageIcon className="w-3.5 h-3.5 text-neutral-700" />
            <span>Customize Assets</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold transition"
            title="Copy Page Link"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
          </button>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold transition"
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
              onOpenPitchModal={() => setIsPitchModalOpen(true)}
              onOpenSummaryModal={() => setIsSummaryModalOpen(true)}
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
      </div>

      {/* Modals */}
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
