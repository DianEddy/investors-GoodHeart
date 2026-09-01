import React, { useState } from 'react';
import { VideoPlayerCard } from './VideoPlayerCard';
import { DeliverablesComparisonTable } from './DeliverablesComparisonTable';
import { PageTwoAssets } from './AssetManagerModal';

interface PageTwoProps {
  assets: PageTwoAssets;
  onOpenCollaborate: (tier?: string) => void;
  onOpenAssetManager: () => void;
}

export const PageTwo: React.FC<PageTwoProps> = ({
  assets,
  onOpenCollaborate,
  onOpenAssetManager,
}) => {
  return (
    <div className="w-full bg-white transition-all duration-300 shadow-2xl overflow-hidden print:shadow-none text-black">
      {/* ========================================================
          TOP SECTION: Golden Yellow Banner with 4 Header Photos
          ======================================================== */}
      <header className="bg-[#FBB040] pt-6 pb-6 px-4 sm:px-6">
        {/* Top Header Row: FASHION BRANDS + Collaborate with us Button */}
        <div className="flex items-center justify-between mb-5 px-1">
          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-none uppercase">
            FASHION BRANDS
          </h1>
          <button
            onClick={() => onOpenCollaborate()}
            id="collaborate-with-us-btn"
            className="bg-black hover:bg-neutral-800 active:scale-98 transition text-white px-4 sm:px-5 py-2 rounded-full font-bold text-xs cursor-pointer shadow-xs whitespace-nowrap"
          >
            Collaborate with us
          </button>
        </div>

        {/* 4 Header Photos Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mb-2">
          {/* Card 1: Sponsored content */}
          <div className="flex flex-col">
            <div className="aspect-3/4 w-full bg-white overflow-hidden shadow-xs border border-black/10">
              <img
                src={assets.header1}
                alt="Sponsored content - founder typing on laptop with oranges"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-black leading-tight mt-2 text-left">
              Sponsored content
            </span>
          </div>

          {/* Card 2: Brand ambassadorships */}
          <div className="flex flex-col">
            <div className="aspect-3/4 w-full bg-white overflow-hidden shadow-xs border border-black/10">
              <img
                src={assets.header2}
                alt="Brand ambassadorships - founder portrait in lime sweater with notebook"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-black leading-tight mt-2 text-left">
              Brand ambassadorships
            </span>
          </div>

          {/* Card 3: Product reviews */}
          <div className="flex flex-col">
            <div className="aspect-3/4 w-full bg-white overflow-hidden shadow-xs border border-black/10">
              <img
                src={assets.header3}
                alt="Product reviews - orange mushroom lamp and polaroids"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-black leading-tight mt-2 text-left">
              Product reviews
            </span>
          </div>

          {/* Card 4: Giveaways and contests */}
          <div className="flex flex-col">
            <div className="aspect-3/4 w-full bg-white overflow-hidden shadow-xs border border-black/10">
              <img
                src={assets.header4}
                alt="Giveaways and contests - desk monitor, shelves and cozy socks"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-black leading-tight mt-2 text-left">
              Giveaways and contests
            </span>
          </div>
        </div>
      </header>

      {/* ========================================================
          MIDDLE SECTION: Our packages (White Background)
          ======================================================== */}
      <main className="p-4 sm:p-7 bg-white">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-5 leading-none">
          Our packages
        </h2>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10">
          {/* TIER 1: PIONEER PACKAGE */}
          <div 
            onClick={() => onOpenCollaborate('TIER 1: PIONEER PACKAGE ($20,000)')}
            className="border border-black p-3.5 sm:p-4 bg-white flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div>
              <div className="text-[11px] font-black text-black tracking-tight uppercase leading-tight">
                TIER 1
              </div>
              <div className="text-sm font-black text-black tracking-tight uppercase mb-2">
                PIONEER PACKAGE
              </div>

              <div className="text-[9px] font-bold text-neutral-800 uppercase tracking-tighter leading-snug mb-3">
                FOCUS: COMMUNITY ENGAGEMENT, WARDROBE PLACEMENT & BRAND AWARENESS
              </div>

              <div className="text-3xl sm:text-3xl font-black text-black tracking-tight mb-4">
                $20,000
              </div>

              <ul className="space-y-1.5 text-[11px] text-black leading-snug">
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Sponsored Upcycling Challenge</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Featured Marketplace Placement</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Digital Closet Integration</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Creator Coupon Pool ($5,000 included)</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-4 pt-2 border-t border-neutral-100 flex justify-end">
              <span className="text-[10px] font-bold text-neutral-500 group-hover:text-black transition">
                Select Tier →
              </span>
            </div>
          </div>

          {/* TIER 2: CATALYST PACKAGE */}
          <div 
            onClick={() => onOpenCollaborate('TIER 2: CATALYST PACKAGE ($35,000)')}
            className="border border-black p-3.5 sm:p-4 bg-white flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer group relative"
          >
            <div>
              <div className="text-[11px] font-black text-black tracking-tight uppercase leading-tight">
                TIER 2
              </div>
              <div className="text-sm font-black text-black tracking-tight uppercase mb-2">
                CATALYST PACKAGE
              </div>

              <div className="text-[9px] font-bold text-neutral-800 uppercase tracking-tighter leading-snug mb-3">
                FOCUS: CIRCULAR COMMERCE & ARTISAN CUSTOMIZATION SERVICES
              </div>

              <div className="text-3xl sm:text-3xl font-black text-black tracking-tight mb-4">
                $35,000
              </div>

              <ul className="space-y-1.5 text-[11px] text-black leading-snug">
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>All Pioneer Tier Features Included.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Customization & Alteration Portal Integration</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Deadstock & Archival Inventory Drops</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Expanded Creator Credits ($10,000 included)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Quarterly Closet Trend Report</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-2 border-t border-neutral-100 flex justify-end">
              <span className="text-[10px] font-bold text-neutral-500 group-hover:text-black transition">
                Select Tier →
              </span>
            </div>
          </div>

          {/* TIER 3: HORIZON PACKAGE */}
          <div 
            onClick={() => onOpenCollaborate('TIER 3: HORIZON PACKAGE ($50,000)')}
            className="border border-black p-3.5 sm:p-4 bg-white flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div>
              <div className="text-[11px] font-black text-black tracking-tight uppercase leading-tight">
                TIER 3
              </div>
              <div className="text-sm font-black text-black tracking-tight uppercase mb-2">
                HORIZON PACKAGE
              </div>

              <div className="text-[9px] font-bold text-neutral-800 uppercase tracking-tighter leading-snug mb-3">
                FOCUS: STRATEGIC CO-BRANDED ECOSYSTEM & ENTERPRISE INTEGRATION
              </div>

              <div className="text-3xl sm:text-3xl font-black text-black tracking-tight mb-4">
                $50,000
              </div>

              <ul className="space-y-1.5 text-[11px] text-black leading-snug">
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>All Catalyst Tier Features</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Custom SPMG AI Training</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Branded "Wardrobe Wellness" Campaign</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Enterprise Take-Back / Trade-In Engine</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-black font-black text-xs leading-none">•</span>
                  <span>Account & Artisan Management</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-2 border-t border-neutral-100 flex justify-end">
              <span className="text-[10px] font-bold text-neutral-500 group-hover:text-black transition">
                Select Tier →
              </span>
            </div>
          </div>
        </div>

        {/* Deliverables Comparison Dropdown / Table */}
        <DeliverablesComparisonTable onSelectTier={onOpenCollaborate} />

        {/* ========================================================
            WHY PARTNER WITH US? + VIDEO 1 SECTION
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center pt-2">
          {/* Left: Why partner with us? text & list */}
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-none">
              Why partner<br />with us?
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm font-black text-black">
              <div>Community Upcycle Challenge</div>
              <div>Creator Onboarding Credits</div>
              <div>Artisan Repair/Alteration Linkage</div>
              <div>Custom SPMG AI Recognition</div>
              <div>Wardrobe Trade-In Engine</div>
              <div>Anonymized Closet Data Report</div>
            </div>
          </div>

          {/* Right: Video 1 (Moodboard / Designer wall) */}
          <div className="w-full flex justify-center">
            <VideoPlayerCard
              id="page2-video-1"
              defaultPoster={assets.video1}
              videoUrl={assets.video1File}
              alt="Fashion designer pinning moodboard swatches on studio wall"
              roundedClass="rounded-[30px]"
              badgeText="Video 1: Creative Studio"
            />
          </div>
        </div>
      </main>

      {/* ========================================================
          BOTTOM SECTION: Golden Yellow Banner + Handle + Video 2
          ======================================================== */}
      <footer className="bg-[#FBB040] pt-4 pb-7 px-4 sm:px-6">
        {/* Handle at Top Right */}
        <div className="text-right text-[11px] sm:text-xs font-black text-black uppercase tracking-wider mb-2">
          @GOODHEARTAPP
        </div>

        {/* Bottom Grid: Left Typography + Right Video 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
          {/* Left Text Block (5 columns) */}
          <div className="sm:col-span-5 text-left space-y-4">
            <div className="text-4xl sm:text-5xl font-black text-black tracking-tighter leading-none">
              <div>GOOD</div>
              <div>HEART</div>
            </div>

            <div className="space-y-0.5 text-xs sm:text-sm font-black text-black tracking-tight uppercase leading-tight">
              <div>AUTHENTIC.</div>
              <div>ENGAGING.</div>
              <div>RESULTS-DRIVEN.</div>
              <div>PARTNERSHIPS.</div>
            </div>

            <div className="space-y-0.5 text-[11px] sm:text-xs font-black text-black uppercase tracking-tight pt-1">
              <div>
                <a href="mailto:edidirect@edimassive.com" className="hover:underline">
                  EDIDIRECT@EDIMASSIVE.COM
                </a>
              </div>
              <div>
                <a href="https://www.goodheartapp.com" target="_blank" rel="noreferrer" className="hover:underline">
                  WWW.GOODHEARTAPP.COM
                </a>
              </div>
            </div>
          </div>

          {/* Right Video 2 (7 columns) */}
          <div className="sm:col-span-7">
            <VideoPlayerCard
              id="page2-video-2"
              defaultPoster={assets.video2}
              videoUrl={assets.video2File}
              alt="Person typing on laptop reclining comfortably"
              aspectClass="aspect-16/10"
              roundedClass="rounded-[30px]"
              badgeText="Video 2: Live In-App Experience"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};
